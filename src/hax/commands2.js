var room = HBInit();

room.setTeamsLock(true);

var afkPlayers = [room.getPlayerList()[0].id];
var lastPlayersTouched = [];
var redTeamPos = {};
var blueTeamPos = {};
var paused = false;
var ticks = 0;

// If there are no admins left in the room give admin to one of the remaining players.
function updateAdmins() {
//   Get all players
  var players = room.getPlayerList();
  var admins = [];
  if ( players.length === 1 ) return; // No players left, do nothing.
  for (var i = 0; i < players.length; i++){
    if (players[i].admin){
        admins.push(players[i]);
    }
  }
  if (admins.length === 2) return; //someone has admin besides the host.
  for (var i = 0; i < admins.length; i++){
    var index = players.indexOf(admins[i]);
    players.splice(index, 1);
  }
  room.setPlayerAdmin(players[0].id, true);


}

room.onPlayerJoin = function(player) {
  room.sendChat("Welcome "+player.name+" to the SBNL room!");
  updateAdmins();
}

room.onPlayerLeave = function(player) {
  updateAdmins();
}

room.onPlayerTeamChange = function(player, byPlayer){
    if (afkPlayers.includes(player.id) && player.team != 0){
            room.sendChat("@"+pingPlayer(byPlayer.name)+" sorry, but @"+pingPlayer(byPlayer.name)+" is afk!")
            room.setPlayerTeam(player.id, 0);
        }
}

room.onTeamVictory = function(scores){
    var mostGK = {"id": 0, "amount": 0};

    if (scores.blue === 0){
        for (var key in redTeamPos){
            if (redTeamPos[key] > mostGK.amount){
                mostGK.id = key;
                mostGK.amount = redTeamPos[key];
            }
        }
    }

    else if (scores.red === 0){
        for (var key in blueTeamPos){
            if (blueTeamPos[key] > mostGK.amount){
                mostGK.id = key;
                mostGK.amount = blueTeamPos[key];
            }
        }
    }
    else return;

    player = room.getPlayer(mostGK.id)
    room.sendChat("@"+ pingPlayer(player.name) + " kept a clean sheet!")
}

function capitalize_Words(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function updateList(player){
    if (lastPlayersTouched.length === 0){
        lastPlayersTouched.push(player);
    }
    else if (lastPlayersTouched[lastPlayersTouched.length-1].id == player.id){
        ;
    }
    else{
        lastPlayersTouched.push(player);
    }

    if (lastPlayersTouched.length > 2){
        for (var i = 0; i < lastPlayersTouched.length-2; i++){
            lastPlayersTouched.shift()
        }
    }


}

room.onPlayerBallKick = function(player){
    updateList(player)
}

function getGk(){
    var redGK = {"id": 0, "xPos": 1000};
    var blueGK = {"id": 0, "xPos": 1000};
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++){
        if (players[i].team === 1) {
            if (redGK.xPos > players[i].position.x){
                redGK.id = players[i].id;
                redGK.xPos = players[i].position.x;
            }
        }
        if (players[i].team === 2) {
            if (blueGK.xPos < players[i].position.x){
                blueGK.id = players[i].id;
                blueGK.xPos = players[i].position.x;
            }
        }
    }

    if (redTeamPos[redGK.id]){
        redTeamPos[redGK.id] = redTeamPos[redGK.id]+1
    }
    else{
        redTeamPos[redGK.id] = 1
    }
}

function autoRand(autoOrRand){
    players = room.getPlayerList();
    var redTeam = 0;
    var blueTeam = 0;
    var spectators = [];

    for (var i = 0; i < players.length; i++){
        if (players[i].team === 1){
            redTeam++;
        }
        else if (players[i].team === 2){
            blueTeam++;
        }
        else {
            if (!afkPlayers.includes(players[i].id)){
                spectators.push(players[i].id)
            }
        }
    }

    if (autoOrRand === "auto"){
        playerChoice = spectators[0];
        playerChoice2 = spectators[1];
    }
    else{
        randNum1 = Math.floor(Math.random() * spectators.length)
        randNum2 = Math.floor(Math.random() * spectators.length)

        while (randNum1 === randNum2){
            randNum2 = Math.floor(Math.random() * spectators.length)
        }

        playerChoice = spectators[randNum1]
        playerChoice2 = spectators[randNum2]
    }

    if (redTeam < blueTeam){
        if (spectators.length > 0){
            room.setPlayerTeam(playerChoice, 1);
        }
        else room.sendChat("There is no one in spectators, or everyone is AFK!")
    }
    else if (redTeam > blueTeam){
        if (spectators.length > 0){
            room.setPlayerTeam(playerChoice, 2);
        }
        else room.sendChat("There is no one in spectators, or everyone is AFK!")
    }
    else{
        if (spectators.length > 1){
            room.setPlayerTeam(playerChoice, 1);
            room.setPlayerTeam(playerChoice2, 2);
        }
        else if (spectators.length > 0){
            room.setPlayerTeam(playerChoice, 1);
        }
        else room.sendChat("There is no one in spectators, or everyone is AFK!")
    }
}

function pingPlayer(name){
    var nameSplit = name.split(" ");
    var newName = "";
    for (var i = 0; i < nameSplit.length; i++){
        newName = newName+nameSplit[i]
        if (!(i == nameSplit.length-1)){
            newName = newName+"_";
        }
    }
    return newName;
}
function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function playerTouch(){
    var players = room.getPlayerList();
    for (var i = 0; i < players.length; i++){
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, room.getBallPosition());
            if (distanceToBall < 25.01) {
                updateList(players[i])
            }
        }
    }
}

room.onTeamGoal = function(team){
    last = lastPlayersTouched.length-1
    if (team === 1){
        var scoredTeam = "red";
    }
    else {
        var scoredTeam = "blue";
    }
    if (lastPlayersTouched[last].team != team){
        room.sendChat("Own Goal scored by @"+lastPlayersTouched[last].name+" for "+scoredTeam+".")
    }
    else {
        if (lastPlayersTouched.length >= 2){
            if (lastPlayersTouched[last-1].team === team){
                room.sendChat("Goal scored by @"+lastPlayersTouched[last].name+" ("+lastPlayersTouched[last-1].name+") for "+scoredTeam+".")
            }
            else{
                room.sendChat("Goal scored by @"+lastPlayersTouched[last].name+" for "+scoredTeam+".")
            }
        }
        else{
            room.sendChat("Goal scored by @"+lastPlayersTouched[last].name+" for "+scoredTeam+".")
        }
    }

    lastPlayersTouched = [];
}

room.onGamePause = function(byPlayer){
    paused = true;
}
room.onGameUnpause = function(byPlayer){
    paused = false;
}

room.onPlayerChat = function (player, message) {
    var split_message = message.split(" ");
    if (!([".", "!"].includes(split_message[0].charAt(0)))) return;
    var split_message = split_message[0].substring(1);
    if (["afk"].includes(split_message)){
            if (afkPlayers.includes(player.id)){
                var index = afkPlayers.indexOf(player.id);
                afkPlayers.splice(index, 1)
                room.sendChat("@"+pingPlayer(player.name)+" is no longer afk!")
            }
            else {
                afkPlayers.push(player.id)
                room.sendChat("@"+pingPlayer(player.name)+" is now afk!")
                room.setPlayerTeam(player.id, 0);
            }
        }

    if (player.admin)
    {
        if (["colors"].includes(split_message)){
                var colors_dict = {};
                var team_colors_dict =
                {"huskies": {"angle": 60, "textcolor": 0x000000, "colors": [0xFF8484, 0xFDFDFD, 0x90EE90]},
                 "glizzies": {"angle": 60, "textcolor": 0xFFFFFF, "colors": [0xFFFF17, 0xFA0800, 0xFFFF17]},
                 "rice farmers": {"angle": 30, "textcolor": 0xFFFFFF, "colors": [0x21BED6, 0xFF7815]},
                 "eagles": {"angle": 86, "textcolor": 0x000000, "colors": [0xE0CA00, 0xE0CA00, 0x211E00]},
                 "lynx": {"angle": 60, "textcolor": 000000, "colors": [0xFF8484, 0xFDFDFD, 0x90EE90]},
                 "bearcats": {"angle": 60, "textcolor": 0xFFFFFF, "colors": [0xE00122, 0x000000, 0xE00122]}
                 }
            if (split_message[1] === "red"){
                colors_dict.color = 1;
            }
            else if (split_message[1] === "blue"){
                colors_dict.color = 2;
            }
            else {
                room.sendChat("That is not a valid color! Please choose red or blue.");
                return;
            }

            if (["huskies", "glizzies", "eagles", "lynx", "bearcats"].includes(split_message[2])){
                colors_dict.team = split_message[2];
            }
            else if (split_message[2] === "rice" && split_message[3] === "farmers"){
                colors_dict.team = "rice farmers";
            }
            else {
                room.sendChat("That is not a valid team! Please choose the huskies, glizzies, eagles, lynx, or bearcats.");
                return;
            }
            var team_colors = team_colors_dict[colors_dict.team]
            room.setTeamColors(colors_dict.color, team_colors.angle, team_colors.textcolor, team_colors.colors)
            room.sendChat("Ok, "+player.name+", changed the "+split_message[1]+" team uniform!")
        }
        else if (["switch", "swap"].includes(split_message)){
            room.stopGame();
            var players = room.getPlayerList();
            var arrayLength = players.length;
            for (var i = 0; i < arrayLength; i++){
                var player = players[i];
                if (player.team === 1){
                    room.setPlayerTeam(player.id, 2)
                }
                else if (player.team === 2){
                    room.setPlayerTeam(player.id, 1)
                }
            }
            room.startGame();
        }
        else if (["re"].includes(split_message)){
            room.stopGame();
            room.startGame();
        }
        else if (["a", "auto"].includes(split_message)){
            autoRand("auto");
        }
        else if (["r", "rand"].includes(split_message)){
            autoRand("rand");
        }
        else if (["stop"].includes(split_message)){
            room.stopGame();
            room.sendChat("(DM) Stopped the game.", player.id)
        }
        else if (["s", "start"].includes(split_message)){
            room.startGame();
            room.sendChat("(DM) Started the game.", player.id)
        }
        else if (["l", "league"].includes(split_message)){
            room.stopGame();
            room.setDefaultStadium("Big");
            room.setScoreLimit(0);
            room.setTimeLimit(5);
            room.setTeamsLock(true);
            room.startGame();
        }
        else if (["time"].includes(split_message)){
            var time = parseInt(split_message[1]);
            if (Number.isInteger(time)){
                room.setTimeLimit(time);
            }
            room.sendChat("Time limit set to "+split_message[1]+".")
        }
        else if (["score"].includes(split_message)){
            var score = parseInt(split_message[1]);
            if (Number.isInteger(score)){
                room.setScoreLimit(score);
            }
            room.sendChat("Score limit set to "+split_message[1]+".")
        }
        else if (["m", "map"].includes(split_message)){
            try{
                if (split_message.length === 3){
                    room.setDefaultStadium(capitalize_Words(split_message[1])+" "+capitalize_Words(split_message[2]))
                }
                else room.setDefaultStadium(capitalize_Words(split_message[1]));

            }
            catch(err){
                room.sendChat("(DM) That's not a default map!", player.id)
            }
        }
        else if (["p", "pause"].includes(split_message)){
            room.pauseGame(!paused)
        }
        else if (["clear", "clearbans"].includes(split_message)){
            room.clearBans();
            room.sendChat("(DM) All bans have been cleared!", player.id)
        }
        else if (["boi"].includes(split_message)){
            room.sendChat("LITTLE BOI")
        }
    }


}

room.onGameTick = function(){
    playerTouch();
    getGk();
    ticks++;

    if (Number.isInteger(ticks/18000)){
        room.sendAnnouncement("Come join the SBNL Discord!", null, 0x1e81b0, "normal", 1)
    }
}
