//var room = HBInit({roomName: "xd",playerName:"kys",noPlayer:false,public:false,maxPlayers:12});

var room = HBInit()
var WebHookURL = "https://discord.com/api/webhooks/871270071987765298/Rndt5Y2CA4IcOSa1uZLmuI-seMWF5dksPoFdTB6YxCA9oDBnnRH3EtlpB_7G7ji6ZOj5" //Buraya discord'da bildirim gönderilmesini istediğin kanal için oluşturduğun WebHook'un URL'ini gireceksin.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


var lastPlayerTouched = "";
var lastTeamTouched = 0;
var previousPlayerTouched;

var radiusBall = 10;
var radiusPlayer = 15;
var triggerDistance = radiusBall + radiusPlayer + 0.01;

room.onPlayerJoin = function(player){
    room.setPlayerAdmin(player.id, true);
}
function getLastTouchTheBall(){
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i=0; i<players.length; i++){
        if(players[i].position != null){
            var distanceToBall = pointDistance(players[i].position,ballPosition);
            if(distanceToBall < triggerDistance){
                if(lastPlayerTouched!=players[i].name){
                    if(lastTeamTouched==players[i].team){
                        assistingTouch = lastPlayerTouched;
                    }
		    else{
			assistingTouch = "";
		    }
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i];
            }
        }
    }
    return lastPlayerTouched;
}

function pointDistance(p1,p2){
    var d1 = p1.x-p2.x;
    var d2 = p1.y-p2.y;
    return Math.sqrt(d1*d1 + d2*d2);
}

room.onPlayerBallKick = function(player){
    lastPlayerTouched = player;
}

function sendAnnouncementToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST", WebHookURL);

    request.setRequestHeader('Content-type', 'application/json');

    var params = message;

    request.send(JSON.stringify(params));
}
room.onTeamGoal = function(team){
    sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                               username: 'men.',
                               content: "ja."})
}


