var room = HBInit({
                  	roomName: "My room",
                  	maxPlayers: 16,
                  	noPlayer: true // Remove host player (recommended!)
                  })

room.pluginSpec = {
  name: `hax/haxroomie-commands`,
  author: `hux`,
  version: `1.0.0`,
  dependencies: [],
  // All times in the config are in seconds.
  config: {
    webhookUrl: "",
    matchWebhookUrl: "",
    adminLoginPasswords: {},
  }
};

var strongballClassic = `{"name":"Strongball Classic","width":420,"height":200,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75},"vertexes":[{"x":-370,"y":170,"cMask":["ball"]},{"x":-370,"y":64,"cMask":["ball"]},{"x":-370,"y":-64,"cMask":["ball"]},{"x":-370,"y":-170,"cMask":["ball"]},{"x":370,"y":170,"cMask":["ball"]},{"x":370,"y":64,"cMask":["ball"]},{"x":370,"y":-64,"cMask":["ball"]},{"x":370,"y":-170,"cMask":["ball"]},{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":-380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":-51,"y":244.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-65,"y":250.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-65,"y":258.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-54,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-54,"y":254.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-60,"y":256.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-45,"y":244.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-45,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-34,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-29,"y":246.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-27,"y":259.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-21,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-16,"y":258.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-17,"y":245.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-61,"y":173.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-72,"y":182.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-74,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-62,"y":196.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-60,"y":187.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-67,"y":187.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-52,"y":173.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-52,"y":194.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-41,"y":193.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-35,"y":174.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-35,"y":184.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-31,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-25,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-22,"y":186.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-22,"y":174.75,"cMask":["ball"],"cGroup":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":["ball"],"cGroup":["ball"]},{"v0":21,"v1":22,"cMask":["ball"],"cGroup":["ball"]},{"v0":22,"v1":23,"cMask":["ball"],"cGroup":["ball"]},{"v0":23,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":24,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":25,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":27,"cMask":["ball"],"cGroup":["ball"]},{"v0":27,"v1":28,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"cMask":["ball"],"cGroup":["ball"]},{"v0":30,"v1":31,"cMask":["ball"],"cGroup":["ball"]},{"v0":31,"v1":32,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":33,"cMask":["ball"],"cGroup":["ball"]},{"v0":34,"v1":35,"cMask":["ball"],"cGroup":["ball"]},{"v0":35,"v1":36,"cMask":["ball"],"cGroup":["ball"]},{"v0":36,"v1":37,"cMask":["ball"],"cGroup":["ball"]},{"v0":37,"v1":38,"cMask":["ball"],"cGroup":["ball"]},{"v0":38,"v1":39,"cMask":["ball"],"cGroup":["ball"]},{"v0":40,"v1":41,"cMask":["ball"],"cGroup":["ball"]},{"v0":41,"v1":42,"cMask":["ball"],"cGroup":["ball"]},{"v0":43,"v1":44,"cMask":["ball"],"cGroup":["ball"]},{"v0":44,"v1":45,"cMask":["ball"],"cGroup":["ball"]},{"v0":45,"v1":46,"cMask":["ball"],"cGroup":["ball"]},{"v0":46,"v1":47,"cMask":["ball"],"cGroup":["ball"]},{"v0":47,"v1":48,"cMask":["ball"],"cGroup":["ball"]}],"planes":[{"normal":[0,1],"dist":-170,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-370,64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-370,-64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[370,64],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[370,-64],"radius":8,"invMass":0,"color":"CCCCFF"}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","spawnDistance":170}`
var strongballMedium = `{"name":"Strongball Medium","width":500,"height":250,"spawnDistance":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-450,"y":220,"trait":"ballArea"},{"x":-450,"y":70,"trait":"ballArea"},{"x":-450,"y":-70,"trait":"ballArea"},{"x":-450,"y":-220,"trait":"ballArea"},{"x":450,"y":220,"trait":"ballArea"},{"x":450,"y":80,"trait":"ballArea"},{"x":450,"y":-80,"trait":"ballArea"},{"x":450,"y":-220,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-460,"y":-80,"trait":"goalNet"},{"x":-480,"y":-60,"trait":"goalNet","curve":0},{"x":-480,"y":60,"trait":"goalNet","curve":0},{"x":-460,"y":80,"trait":"goalNet"},{"x":460,"y":-80,"trait":"goalNet"},{"x":480,"y":-60,"trait":"goalNet"},{"x":480,"y":60,"trait":"goalNet"},{"x":460,"y":80,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","x":-450},{"v0":2,"v1":3,"trait":"ballArea","x":-450},{"v0":4,"v1":5,"trait":"ballArea","x":450},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet","curve":0},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet","x":480},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-450,-80],"p1":[-450,80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"pos":[-450,80],"trait":"goalPost","color":"FFCCCC"},{"pos":[-450,-80],"trait":"goalPost","color":"FFCCCC"},{"pos":[450,80],"trait":"goalPost","color":"CCCCFF"},{"pos":[450,-80],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-220,"trait":"ballArea"},{"normal":[0,-1],"dist":-220,"trait":"ballArea"},{"normal":[0,1],"dist":-250,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"ballPhysics":{"radius":9.2,"bCoef":1,"damping":0.991,"invMass":1,"color":"EDED09"},"playerPhysics":{"kickStrength":8.5,"invMass":1.0e+26,"bCoef":0}}`
var strongballBig = `{"name":"Strongball Big","width":600,"height":270,"bg":{"type":"grass","width":550,"height":240,"kickOffRadius":80},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":-550,"y":80,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-560,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-560,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":560,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":560,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-48.6000022888,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-48.6000022888,"y":265.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-39.6000022888,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-37.6000022888,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-25.6000022888,"y":251.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-16.6000022888,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-9.60000228882,"y":250.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-2.60000228882,"y":269.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-5.60000228882,"y":258.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":29.3999977112,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":32.3999977112,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":45.3999977112,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":52.3999977112,"y":256.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":58.3999977112,"y":245.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":52.3999977112,"y":267.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":11.3999977112,"y":249.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":20.3999977112,"y":264.800003052,"cMask":["ball"],"cGroup":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":["ball"],"cGroup":["ball"]},{"v0":22,"v1":20,"cMask":["ball"],"cGroup":["ball"]},{"v0":23,"v1":22,"cMask":["ball"],"cGroup":["ball"]},{"v0":25,"v1":24,"curve":173.282467513,"curveF":0.058688772832140974,"cMask":["ball"],"cGroup":["ball"]},{"v0":24,"v1":25,"curve":145.839532856,"curveF":0.307262569834477,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":27,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":28,"curve":-158.287173304,"curveF":-0.19178082191668203,"cMask":["ball"],"cGroup":["ball"]},{"v0":28,"v1":27,"curve":-176.30477946800002,"curveF":-0.0322580645162235,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"curve":178.585361263,"curveF":0.012345679011573159,"cMask":["ball"],"cGroup":["ball"]},{"v0":31,"v1":32,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":33,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":34,"cMask":["ball"],"cGroup":["ball"]},{"v0":36,"v1":35,"curve":173.282467513,"curveF":0.058688772832140974,"cMask":["ball"],"cGroup":["ball"]},{"v0":35,"v1":36,"curve":145.839532856,"curveF":0.307262569834477,"cMask":["ball"],"cGroup":["ball"]}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"cMask":["ball"]},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-550,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-550,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[550,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[550,-80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[-21.2857055664,259.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[15.7142944336,257.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-66.2857055664,252.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-71.2857055664,262.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-60.2857055664,262.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","spawnDistance":350}`
var medium = `{"name":"Medium","width":500,"height":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80},"vertexes":[{"x":-450,"y":220,"cMask":["ball"]},{"x":-450,"y":70,"cMask":["ball"]},{"x":-450,"y":-70,"cMask":["ball"]},{"x":-450,"y":-220,"cMask":["ball"]},{"x":450,"y":220,"cMask":["ball"]},{"x":450,"y":80,"cMask":["ball"]},{"x":450,"y":-80,"cMask":["ball"]},{"x":450,"y":-220,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-460,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-480,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-460,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":460,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":480,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":480,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":460,"y":80,"bCoef":0.1,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"planes":[{"normal":[0,1],"dist":-220,"cMask":["ball"]},{"normal":[0,-1],"dist":-220,"cMask":["ball"]},{"normal":[0,1],"dist":-250,"bCoef":0.1},{"normal":[0,-1],"dist":-250,"bCoef":0.1},{"normal":[1,0],"dist":-500,"bCoef":0.1},{"normal":[-1,0],"dist":-500,"bCoef":0.1}],"goals":[{"p0":[-450,80],"p1":[-450,-80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-450,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-450,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[450,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[450,-80],"radius":8,"invMass":0,"color":"CCCCFF"}],"playerPhysics":{},"ballPhysics":"disc0","spawnDistance":250}`

room.setTeamsLock(true);

var afkPlayers = [room.getPlayerList()[0].id];
var mutedPlayers = [];
var lastPlayersTouched = [];
var paused = false;
var ticks = 0;
var usefulAuths = ["uKir-Who_C7cSe_Yo_30adL2KL0CnUeVFjrGwn1Xh3E", "Skeo5lTsiOmurVg0rJYfVbeI3Ft_B6p_YDyrs4ilo2U", "94o_o32caD_W4qERNMonCpa18_qpEyDkIdjrXRy0KLM"]
var allPlayerAuths = {}

var leagueGame = false;
var gameSummary = ["[0:00] Kick off!"];
var playerTicks = {1: {}, 2: {}};

var countTicks = false;
var justScored = false;

var redColor = 0xc33720;
var blueColor = 0x6864ec;
var greenColor = 0x33bb25;
var yellowColor = 0xFFD300;
var nflchlColor = 0x1e81b0;
var whiteColor = 0xFFFFFF;

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
  if (admins.length >= 2) return; //someone has admin besides the host.
  for (var i = 0; i < admins.length; i++){
    var index = players.indexOf(admins[i]);
    players.splice(index, 1);
  }
  room.setPlayerAdmin(players[0].id, true);
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer){
    var players = room.getPlayerList();
    var admins = [];
    for (var i = 0; i < players.length; i++){
        if (players[i].admin){
            admins.push(players[i]);
        }
    }
    if (admins.length === 1){
        room.setPlayerAdmin(changedPlayer.id, true)
        room.sendChat("@"+pingPlayer(changedPlayer.name)+" you can't remove your admin when you're the only admin in the room!")
    }

    if (changedPlayer.admin){
        action = "Received";
        color = greenColor;
    }
    else{
        action = "Removed";
        color = yellowColor;
    }

    if (byPlayer === "null"){
        byPlayer = {"name": "HSN Bot", "id": 0}
    }

    sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                               username: 'HSN Host Logs',
                               embeds: [
                                   {
                                     "title": "Admin "+action,
                                     "color": color,
                                     "fields": [
                                       {
                                         "name": "Player",
                                         "value": "NAME: `"+changedPlayer.name+"`\nID: `"+changedPlayer.id+"`",
                                         "inline": true
                                       },
                                       {
                                          "name": "By Player",
                                          "value": "NAME: `"+byPlayer.name+"`\nID: `"+byPlayer.id+"`",
                                          "inline": true
                                       },
                                     ],
                                     "footer": {
                                       "text": "HSN Host Logs",
                                       "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                     }
                                   }
                                 ]})


}
room.onPlayerJoin = function(player) {
    room.sendChat("Welcome @"+pingPlayer(player.name)+" to the HSN room! To see a list of commands, type '.help'.");
    updateAdmins();
    allPlayerAuths[player.id] = player.auth;

    sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                                   username: 'HSN Host Logs',
                                   embeds: [
                                       {
                                         "title": "Player Joined",
                                         "color": greenColor,
                                         "fields": [
                                           {
                                             "name": "Player",
                                             "value": "NAME: `"+player.name+"`\nID: `"+player.id+"`",
                                             "inline": true
                                           }
                                         ],
                                         "footer": {
                                           "text": "HSN Host Logs",
                                           "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                         }
                                       }
                                     ]})
}

room.onPlayerLeave = function(player) {
    updateAdmins();
    delete allPlayerAuths[player.id]

    sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                                       username: 'HSN Host Logs',
                                       embeds: [
                                           {
                                             "title": "Player Left",
                                             "color": blueColor,
                                             "fields": [
                                               {
                                                 "name": "Player",
                                                 "value": "NAME: `"+player.name+"`\nID: `"+player.id+"`",
                                                 "inline": true
                                               }
                                             ],
                                             "footer": {
                                               "text": "HSN Host Logs",
                                               "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                             }
                                           }
                                         ]})
}

room.onPlayerKicked = function(player, reason, ban, byPlayer){
    if (ban){
        action = "Banned"
        color = redColor
    }
    else{
        action = "Kicked"
        color = yellowColor
    }

    valueReason = reason
    if (valueReason === "") valueReason = "null"
    sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                               username: 'HSN Host Logs',
                               embeds: [
                                   {
                                     "title": "Player "+action,
                                     "color": color,
                                     "fields": [
                                       {
                                         "name": "Player",
                                         "value": "NAME: `"+player.name+"`\nID: `"+player.id+"`",
                                         "inline": true
                                       },
                                       {
                                         "name": "By Player",
                                         "value": "NAME: `"+byPlayer.name+"`\nID: `"+byPlayer.id+"`",
                                         "inline": true
                                       },
                                       {
                                         "name": "Reason",
                                         "value": valueReason,
                                         "inline": true
                                       }
                                     ],
                                     "footer": {
                                       "text": "HSN Host Logs",
                                       "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                     }
                                   }
                                 ]})
}

room.onPlayerTeamChange = function(player, byPlayer){
    if (afkPlayers.includes(player.id) && player.team != 0){
            room.sendChat("@"+pingPlayer(byPlayer.name)+" sorry, but @"+pingPlayer(player.name)+" is afk!")
            room.setPlayerTeam(player.id, 0);
        }
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

function banKick(player, split_message_old, ban, message){
    try{
        var players = room.getPlayerList();
        for (var i = 0; i < players.length; i++){
            if (pingPlayer(players[i].name) === split_message_old[1].substring(1)){
                room.kickPlayer(players[i].id, player.name+" "+message+" you!", ban)
            }
        }
    }
    catch(err){room.sendChat("(DM) Specify a person that should be "+message+"!", player.id)}
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

function movePlayer(player, split_message_old, team){
    try{
        var players = room.getPlayerList();
        for (var i = 0; i < players.length; i++){
            if (pingPlayer(players[i].name) === split_message_old[1].substring(1)){
                room.setPlayerTeam(players[i].id, team)
            }
        }
    }

    catch(err){
        room.setPlayerTeam(player.id, team);
    }
}

room.onGameStop = function(byPlayer){
    leagueGame = false;
    gameSummary = ["[0:00] Kick off!"];
    playerTicks = {1: {}, 2: {}};
    room.stopRecording()
}

room.onTeamVictory = function(scores){
    rec = room.stopRecording();

    if (leagueGame && !(Object.keys(playerTicks[1]).length === 0 || Object.keys(playerTicks[2]).length === 0)){
        teamList = []
        for (const [key, value] of Object.entries(playerTicks)){
            v = ""
            for (const [key2, value2] of Object.entries(value)){
                var playSeconds = Math.floor(value2/60)
                var minutes = Math.floor(playSeconds/60)
                var seconds = playSeconds % 60
                if (seconds.toString().length === 1){
                    seconds = "0"+seconds
                }
                v += room.getPlayer(key2).name+": `"+minutes+":"+seconds+"`\n"
            }
            teamList.push(v);
        }

        var minutes = Math.floor(room.getScores().time/60)
        var seconds = room.getScores().time % 60
        if (seconds.toString().length === 1) seconds = "0"+seconds

        scores = room.getScores()
        if (scores.red > scores.blue) desc = "**Red Team** `"+scores.red+" - "+scores.blue+"` Blue Team"
        else desc = "Red Team `"+scores.red+" - "+scores.blue+"` **Blue Team**"

        sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                                   username: 'Match Report',
                                   embeds: [
                                       {
                                         "title": "Match Report",
                                         "color": color,
                                         "description": desc,
                                         "fields": [
                                             {
                                                "name": "Summary",
                                                "value": "```"+gameSummary.join("\n")+"```",
                                                "inline": false
                                             },
                                             {
                                                "name": "Red",
                                                "value": teamList[0],
                                                "inline": true
                                             },
                                             {
                                                 "name": "Blue",
                                                 "value": teamList[1],
                                                 "inline": true
                                              }
                                         ],
                                         "footer": {
                                           "text": "Match Report",
                                           "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                         }
                                       }
                                     ]})

        if (rec){
            var form = new FormData()
            const date = new Date();
            form.append("file", new File([rec], `HSN-Replay-${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}h${date.getMinutes()}m.hbr2`, { type: "text/plain" }))
            form.append("content", "")
            var xhr = new XMLHttpRequest()
            webhook = room.getConfig().matchWebhookUrl;
            xhr.open("POST", webhook)
            xhr.send(form)
        }
    }
    leagueGame = false;
    gameSummary = ["[0:00] Kick off!"];
    playerTicks = {1: {}, 2: {}};
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
        string = "Own Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+"."
    }
    else {
        if (lastPlayersTouched.length >= 2){
            if (lastPlayersTouched[last-1].team === team){
                string = "Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" ("+lastPlayersTouched[last-1].name+") for "+scoredTeam+"."
            }
            else{
                string = "Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+"."
            }
        }
        else{
            string = "Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+"."
        }
    }

    var minutes = Math.floor(room.getScores().time/60)
    var seconds = Number(room.getScores().time % 60).toFixed(0);
    if (seconds.toString().length === 1){
        seconds = "0"+seconds
    }

    string = "["+minutes+":"+seconds+"] "+string
    room.sendChat(string)
    gameSummary.push(string);
    lastPlayersTouched = [];
    countTicks = false; //just dead time
    justScored = true;
}

function sendAnnouncementToDiscord(message, data_type="application/json") {
    webhook = room.getConfig().webhookUrl;
    var request = new XMLHttpRequest();
    request.open("POST", webhook);

    request.setRequestHeader('Content-type', data_type);

    var params = message;

    request.send(JSON.stringify(params));
}


room.onGamePause = function(byPlayer){
    paused = true;
}
room.onGameUnpause = function(byPlayer){
    paused = false;
}

room.onPlayerChat = function (player, message) {
    if (mutedPlayers.includes(player.id)) return false;
    var split_message_old = message.split(" ");
    var adminLogin = room.getConfig().adminLoginPasswords;
    var split_message = split_message_old[0].substring(1).toLowerCase();
    if ("t" === split_message_old[0]){
            split_message_old.splice(0, 1)
            var message = "";
            for (var i = 0; i < split_message_old.length; i++){
                message = message + split_message_old[i]+" "
            }
            colors_dict = {0: 0xFFFFFF, 1: 0xe86c54, 2: 0x588ce4}

            var players = room.getPlayerList();
            var arrayLength = players.length;
            for (var i = 0; i < arrayLength; i++){
                var potentialTeammate = players[i];
                if (potentialTeammate.team === player.team){
                    room.sendAnnouncement("[Team Chat] "+player.name+": "+message, potentialTeammate.id, colors_dict[player.team])
                }
            }
            return false;
    }

    if (!(["setcode", "login"].includes(split_message))){
        content = message
        if (message === " ") content = "[empty message]"
        sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                                       username: 'HSN Host Logs',
                                       embeds: [
                                                  {
                                                    "title": "Player Chat",
                                                    "color": whiteColor,
                                                    "fields": [
                                                      {
                                                        "name": "Player",
                                                        "value": "NAME: `"+player.name+"`\nID: `"+player.id+"`",
                                                        "inline": true
                                                      },
                                                      {
                                                        "name": "Message",
                                                        "value": content,
                                                        "inline": true
                                                      }
                                                    ],
                                                    "footer": {
                                                      "text": "HSN Host Logs",
                                                      "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                                    }
                                                  }
                                                ]})
    }

    if (!([".", "!"].includes(split_message_old[0].charAt(0)))) return;
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
    else if (["bb"].includes(split_message)){
        room.kickPlayer(player.id, "GGs!", false)
    }

    else if (["login"].includes(split_message)){
        if (adminLogin[split_message_old[1]]){
            room.setPlayerAdmin(player.id, true)
            room.sendChat(adminLogin[split_message_old[1]]+" has logged in!")
        }
        return false

    }

    else if (["discord", "invite"].includes(split_message)){
        room.sendChat("HSN Discord Link: https://discord.gg/bDZ64dzuA9")
    }
    else if (["setcode"].includes(split_message)){
        if (usefulAuths.includes(allPlayerAuths[player.id])){
            adminLogin[split_message_old[1]] = split_message_old[2]
            room.sendChat("(DM) Set code!", player.id)
            return false;
        }
    }
    else if (["help"].includes(split_message)){
        command_desc =
        {
            "afk": "Makes you AFK, meaning you cannot join red or blue team. To un-afk, type .afk again.",
            "bb": "Kicks you from the game.",
            "discord": "Invites you to the HSN discord! https://discord.gg/vm8SXTBy",
            "red": "Moves all players on the red team to spectator.",
            "r": "Moves you (or another player to the red team). EG: '.r', '.r @Nfab'.",
            "b": "Moves you (or another blue to the red team). EG: '.b', '.b @Nfab'.",
            "blue": "Moves all players on the blue team to spectator.",
            "swap": "Stops the game, moves all the red team players to the blue team and the blue team players to the red team, then restarts the game.",
            "re": "Stops and restarts the game. Also called 'rr'.",
            "start": "Starts the game.",
            "stop": "Stops the game. Also called 'end' and 'e.'",
            "pause": "Pauses the game. Also called 'p'.",
            "clear": "Clears bans.",
            "time": "Sets the time limit. EG: '.time 5'",
            "score": "Sets the score limit. EG: '.score 0 '",
            "map": "Stops the game, sets the map, and restarts the game. Also called 'm'. To see the maps you can load, type '.help maps'. EG: '.m b'.",
            "maps": "c for classic, m for medium, b, for big, sc for strongball classic, sm for strongball medium, sb for strongball big. EG: '.m b'"
        }
        if (command_desc[split_message_old[1]]){
            room.sendAnnouncement("(DM) "+ command_desc[split_message_old[1]], player.id, nflchlColor)
        }
        else {
            room.sendAnnouncement("(DM) .afk | .bb* | .discord | .red* | .blue* | .r* | .b* | .s* | .swap* | .re* | .start* | .stop* | .pause* | .clear* | .time* | .score* | .map*",
            player.id, nflchlColor)
            room.sendAnnouncement("(DM) Don't know what a command does? Type '.help command', eg: '.help time'. * means it is admin-only. When typing '.help command', don't include the *. To team chat, type 't <message>'.",
            player.id, nflchlColor)

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
            if (split_message_old[1] === "red"){
                colors_dict.color = 1;
            }
            else if (split_message_old[1] === "blue"){
                colors_dict.color = 2;
            }
            else {
                room.sendChat("That is not a valid color! Please choose red or blue.");
                return;
            }

            if (["huskies", "glizzies", "eagles", "lynx", "bearcats"].includes(split_message_old[2])){
                colors_dict.team = split_message_old[2];
            }
            else if (split_message_old[2] === "rice" && split_message_old[3] === "farmers"){
                colors_dict.team = "rice farmers";
            }
            else {
                room.sendChat("That is not a valid team! Please choose the huskies, glizzies, eagles, lynx, rice farmers or bearcats.");
                return;
            }
            var team_colors = team_colors_dict[colors_dict.team]
            room.setTeamColors(colors_dict.color, team_colors.angle, team_colors.textcolor, team_colors.colors)
            room.sendChat("Ok, "+player.name+", changed the "+split_message_old[1]+" team uniform to the "+colors_dict.team+"!")
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
        else if (["re", "rr"].includes(split_message)){
            room.stopGame();
            room.startGame();
        }
        else if (["stop", "e"].includes(split_message)){
            room.stopGame();
        }
        else if (["start"].includes(split_message)){
            room.startGame();
        }
        else if (["time"].includes(split_message)){
            room.stopGame();
            var time = parseInt(split_message_old[1]);
            if (Number.isInteger(time)){
                room.setTimeLimit(time);
            }
        }
        else if (["score"].includes(split_message)){
            room.stopGame();
            var score = parseInt(split_message_old[1]);
            if (Number.isInteger(score)){
                room.setScoreLimit(score);
            }
        }
        else if (["m", "map"].includes(split_message)){
            mapNames = {"c": "Classic", "m": "Medium", "b": "Big", "sc": "Strongball Classic",
                        "s": "Strongball Classic", "sm": "Strongball Medium", "sb": "Strongball Big"}
            try{
                mapName = mapNames[split_message_old[1].toLowerCase()]
                room.stopGame();
                if (mapName.includes("Strongball") || mapName.includes("Medium")){
                    mapNames = {"Strongball Classic": strongballClassic, "Strongball Medium": strongballMedium, "Strongball Big": strongballBig, "Medium": medium}
                    map = mapNames[mapName];
                    room.setCustomStadium(map);
                }
                else room.setDefaultStadium(mapName);
                room.startGame();
            }
            catch(err){
                room.sendChat("(DM) That's not a map you can load! Type '.help maps' to see.", player.id)
            }
        }
        else if (["p", "pause"].includes(split_message)){
            room.pauseGame(!paused)
        }
        else if (["clear", "clearbans"].includes(split_message)){
            room.clearBans();
            room.sendChat("(DM) All bans have been cleared!", player.id)
            sendAnnouncementToDiscord({avatar_url: 'https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png',
                                       username: 'HSN Host Logs',
                                       embeds: [
                                           {
                                             "title": "Bans Cleared",
                                             "color": greenColor,
                                             "fields": [
                                               {
                                                 "name": "By Player",
                                                 "value": "NAME: `"+player.name+"`\nID: `"+player.id+"`",
                                                 "inline": true
                                               }
                                             ],
                                             "footer": {
                                               "text": "HSN Host Logs",
                                               "icon_url": "https://discordapp.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                                             }
                                           }
                                         ]})
        }
        else if (["r"].includes(split_message)){
            movePlayer(player, split_message_old, 1)
        }
        else if (["b"].includes(split_message)){
            movePlayer(player, split_message_old, 2)
        }
        else if (["s"].includes(split_message)){
            movePlayer(player, split_message_old, 0)
        }
        else if (["mute"].includes(split_message)){
            try{
                var players = room.getPlayerList();
                for (var i = 0; i < players.length; i++){
                    if (pingPlayer(players[i].name) === split_message_old[1].substring(1)){
                        if (!players[i].admin){
                            if (mutedPlayers.includes(players[i].id)){
                                var index = afkPlayers.indexOf(players[i].id);
                                mutedPlayers.splice(index, 1)
                                room.sendChat("@"+pingPlayer(players[i].name)+" is now unmuted!")
                            }
                            else {
                                mutedPlayers.push(players[i].id)
                                room.sendChat("@"+pingPlayer(players[i].name)+" is now muted!")
                            }
                        }

                        else room.sendChat("@"+pingPlayer(player.name)+", you can't mute an admin!")
                    }
                }
            }
            catch(err){room.sendChat("(DM) Specify a person to mute!", player.id)}
        }
        else if (["red"].includes(split_message)){
            var players = room.getPlayerList();
            for (var i = 0; i < players.length; i++){
                if (players[i].team === 1){
                    room.setPlayerTeam(players[i].id, 0);
                }
            }
        }
        else if (["blue"].includes(split_message)){
            var players = room.getPlayerList();
            for (var i = 0; i < players.length; i++){
                if (players[i].team === 2){
                    room.setPlayerTeam(players[i].id, 0);
                }
            }
        }
        else if (["admin"].includes(split_message)){
            try{
                var players = room.getPlayerList();
                for (var i = 0; i < players.length; i++){
                    if (pingPlayer(players[i].name) === split_message_old[1].substring(1)){
                        if (!players[i].admin) room.setPlayerAdmin(players[i].id, true);

                        else room.setPlayerAdmin(players[i].id, false);
                    }
                }
            }
            catch(err){room.sendChat("(DM) Specify a person to make an admin!", player.id)}
        }
        else if (["ban"].includes(split_message)){
            banKick(player, split_message_old, true, "banned")
        }
        else if (["kick"].includes(split_message)){
            banKick(player, split_message_old, false, "kicked")
        }
        else if (["league"].includes(split_message)){
            if (usefulAuths.includes(allPlayerAuths[player.id])){
                leagueGame = true;
                room.sendChat("League game started!");
                room.startRecording()
            }
            else room.sendChat("(DM) You aren't a Pub Admin!", player.id)
        }
        return false
    }
}

room.onGameTick = function(){
    disc = room.getDiscProperties(0);
    playerTouch();
    ticks++;

    if (disc.x === 0 && disc.y === 0){
        countTicks = false; //ball not kicked off
        justScored = false;
    }
    else{
        if (!justScored) countTicks = true;
    }

    if (countTicks) {
        var players = room.getPlayerList();
        for (var i = 0; i < players.length; i++){
            if (players[i].team != 0) {
                if (playerTicks[players[i].team][players[i].id]) playerTicks[players[i].team][players[i].id]++;
                else playerTicks[players[i].team][players[i].id] = 1;
            }
        }
    }


    if (Number.isInteger(ticks/18000)){
        room.sendAnnouncement("Come join the NFLCHL Discord! https://discord.gg/vm8SXTBy", null, nflchlColor, "normal", 1)
    }
}
