var room = HBInit()

var strongballClassic = `{"name":"Strongball Classic","width":420,"height":200,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75},"vertexes":[{"x":-370,"y":170,"cMask":["ball"]},{"x":-370,"y":64,"cMask":["ball"]},{"x":-370,"y":-64,"cMask":["ball"]},{"x":-370,"y":-170,"cMask":["ball"]},{"x":370,"y":170,"cMask":["ball"]},{"x":370,"y":64,"cMask":["ball"]},{"x":370,"y":-64,"cMask":["ball"]},{"x":370,"y":-170,"cMask":["ball"]},{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-75,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":-400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":-380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":-64,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":-44,"bCoef":0.1,"cMask":["ball"]},{"x":400,"y":44,"bCoef":0.1,"cMask":["ball"]},{"x":380,"y":64,"bCoef":0.1,"cMask":["ball"]},{"x":-51,"y":244.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-65,"y":250.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-65,"y":258.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-54,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-54,"y":254.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-60,"y":256.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-45,"y":244.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-45,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-34,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-29,"y":246.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-27,"y":259.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-21,"y":263.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-16,"y":258.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-17,"y":245.25,"cMask":["ball"],"cGroup":["ball"]},{"x":-61,"y":173.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-72,"y":182.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-74,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-62,"y":196.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-60,"y":187.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-67,"y":187.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-52,"y":173.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-52,"y":194.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-41,"y":193.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-35,"y":174.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-35,"y":184.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-31,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-25,"y":192.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-22,"y":186.75,"cMask":["ball"],"cGroup":["ball"]},{"x":-22,"y":174.75,"cMask":["ball"],"cGroup":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":["ball"],"cGroup":["ball"]},{"v0":21,"v1":22,"cMask":["ball"],"cGroup":["ball"]},{"v0":22,"v1":23,"cMask":["ball"],"cGroup":["ball"]},{"v0":23,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":24,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":25,"v1":24,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":27,"cMask":["ball"],"cGroup":["ball"]},{"v0":27,"v1":28,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"cMask":["ball"],"cGroup":["ball"]},{"v0":30,"v1":31,"cMask":["ball"],"cGroup":["ball"]},{"v0":31,"v1":32,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":33,"cMask":["ball"],"cGroup":["ball"]},{"v0":34,"v1":35,"cMask":["ball"],"cGroup":["ball"]},{"v0":35,"v1":36,"cMask":["ball"],"cGroup":["ball"]},{"v0":36,"v1":37,"cMask":["ball"],"cGroup":["ball"]},{"v0":37,"v1":38,"cMask":["ball"],"cGroup":["ball"]},{"v0":38,"v1":39,"cMask":["ball"],"cGroup":["ball"]},{"v0":40,"v1":41,"cMask":["ball"],"cGroup":["ball"]},{"v0":41,"v1":42,"cMask":["ball"],"cGroup":["ball"]},{"v0":43,"v1":44,"cMask":["ball"],"cGroup":["ball"]},{"v0":44,"v1":45,"cMask":["ball"],"cGroup":["ball"]},{"v0":45,"v1":46,"cMask":["ball"],"cGroup":["ball"]},{"v0":46,"v1":47,"cMask":["ball"],"cGroup":["ball"]},{"v0":47,"v1":48,"cMask":["ball"],"cGroup":["ball"]}],"planes":[{"normal":[0,1],"dist":-170,"cMask":["ball"]},{"normal":[0,-1],"dist":-170,"cMask":["ball"]},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-370,64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-370,-64],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[370,64],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[370,-64],"radius":8,"invMass":0,"color":"CCCCFF"}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","spawnDistance":170}`
var strongballMedium = `{"name":"Strongball Medium","width":500,"height":250,"spawnDistance":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-450,"y":220,"trait":"ballArea"},{"x":-450,"y":70,"trait":"ballArea"},{"x":-450,"y":-70,"trait":"ballArea"},{"x":-450,"y":-220,"trait":"ballArea"},{"x":450,"y":220,"trait":"ballArea"},{"x":450,"y":80,"trait":"ballArea"},{"x":450,"y":-80,"trait":"ballArea"},{"x":450,"y":-220,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-460,"y":-80,"trait":"goalNet"},{"x":-480,"y":-60,"trait":"goalNet","curve":0},{"x":-480,"y":60,"trait":"goalNet","curve":0},{"x":-460,"y":80,"trait":"goalNet"},{"x":460,"y":-80,"trait":"goalNet"},{"x":480,"y":-60,"trait":"goalNet"},{"x":480,"y":60,"trait":"goalNet"},{"x":460,"y":80,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea","x":-450},{"v0":2,"v1":3,"trait":"ballArea","x":-450},{"v0":4,"v1":5,"trait":"ballArea","x":450},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet","curve":0},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet","x":480},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[{"p0":[-450,-80],"p1":[-450,80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"pos":[-450,80],"trait":"goalPost","color":"FFCCCC"},{"pos":[-450,-80],"trait":"goalPost","color":"FFCCCC"},{"pos":[450,80],"trait":"goalPost","color":"CCCCFF"},{"pos":[450,-80],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-220,"trait":"ballArea"},{"normal":[0,-1],"dist":-220,"trait":"ballArea"},{"normal":[0,1],"dist":-250,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"ballPhysics":{"radius":9.2,"bCoef":1,"damping":0.991,"invMass":1,"color":"EDED09"},"playerPhysics":{"kickStrength":8.5,"invMass":1.0e+26,"bCoef":0}}`
var strongballBig = `{"name":"Strongball Big","width":600,"height":270,"bg":{"type":"grass","width":550,"height":240,"kickOffRadius":80},"vertexes":[{"x":-550,"y":240,"cMask":["ball"]},{"x":-550,"y":80,"cMask":["ball"]},{"x":-550,"y":-80,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"]},{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":80,"cMask":["ball"]},{"x":550,"y":-80,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-560,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-580,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-560,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":560,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":580,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":560,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":-48.6000022888,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-48.6000022888,"y":265.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-39.6000022888,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-37.6000022888,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-25.6000022888,"y":251.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-16.6000022888,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-9.60000228882,"y":250.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-2.60000228882,"y":269.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":-5.60000228882,"y":258.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":29.3999977112,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":32.3999977112,"y":266.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":45.3999977112,"y":248.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":52.3999977112,"y":256.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":58.3999977112,"y":245.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":52.3999977112,"y":267.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":11.3999977112,"y":249.800003052,"cMask":["ball"],"cGroup":["ball"]},{"x":20.3999977112,"y":264.800003052,"cMask":["ball"],"cGroup":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":20,"v1":21,"cMask":["ball"],"cGroup":["ball"]},{"v0":22,"v1":20,"cMask":["ball"],"cGroup":["ball"]},{"v0":23,"v1":22,"cMask":["ball"],"cGroup":["ball"]},{"v0":25,"v1":24,"curve":173.282467513,"curveF":0.058688772832140974,"cMask":["ball"],"cGroup":["ball"]},{"v0":24,"v1":25,"curve":145.839532856,"curveF":0.307262569834477,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":27,"cMask":["ball"],"cGroup":["ball"]},{"v0":26,"v1":28,"curve":-158.287173304,"curveF":-0.19178082191668203,"cMask":["ball"],"cGroup":["ball"]},{"v0":28,"v1":27,"curve":-176.30477946800002,"curveF":-0.0322580645162235,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"cMask":["ball"],"cGroup":["ball"]},{"v0":29,"v1":30,"curve":178.585361263,"curveF":0.012345679011573159,"cMask":["ball"],"cGroup":["ball"]},{"v0":31,"v1":32,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":33,"cMask":["ball"],"cGroup":["ball"]},{"v0":32,"v1":34,"cMask":["ball"],"cGroup":["ball"]},{"v0":36,"v1":35,"curve":173.282467513,"curveF":0.058688772832140974,"cMask":["ball"],"cGroup":["ball"]},{"v0":35,"v1":36,"curve":145.839532856,"curveF":0.307262569834477,"cMask":["ball"],"cGroup":["ball"]}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"cMask":["ball"]},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-600,"bCoef":0.1},{"normal":[-1,0],"dist":-600,"bCoef":0.1}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"radius":9.2,"bCoef":1,"damping":0.991,"color":"EDED09","cGroup":["ball","kick","score"]},{"pos":[-550,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-550,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[550,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[550,-80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[-21.2857055664,259.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[15.7142944336,257.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-66.2857055664,252.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-71.2857055664,262.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]},{"pos":[-60.2857055664,262.57144165],"radius":2,"color":"0","cMask":["ball"],"cGroup":["ball"]}],"playerPhysics":{"bCoef":0,"invMass":1e+26,"kickStrength":8.5},"ballPhysics":"disc0","spawnDistance":350}`
var medium = `{"name":"Medium","width":500,"height":250,"bg":{"type":"grass","width":450,"height":220,"kickOffRadius":80},"vertexes":[{"x":-450,"y":220,"cMask":["ball"]},{"x":-450,"y":70,"cMask":["ball"]},{"x":-450,"y":-70,"cMask":["ball"]},{"x":-450,"y":-220,"cMask":["ball"]},{"x":450,"y":220,"cMask":["ball"]},{"x":450,"y":80,"cMask":["ball"]},{"x":450,"y":-80,"cMask":["ball"]},{"x":450,"y":-220,"cMask":["ball"]},{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-460,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":-480,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":-460,"y":80,"bCoef":0.1,"cMask":["ball"]},{"x":460,"y":-80,"bCoef":0.1,"cMask":["ball"]},{"x":480,"y":-60,"bCoef":0.1,"cMask":["ball"]},{"x":480,"y":60,"bCoef":0.1,"cMask":["ball"]},{"x":460,"y":80,"bCoef":0.1,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":13,"v1":12,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"]},{"v0":15,"v1":14,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":17,"v1":18,"bCoef":0.1,"cMask":["ball"]},{"v0":18,"v1":19,"bCoef":0.1,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["ball"]},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]}],"planes":[{"normal":[0,1],"dist":-220,"cMask":["ball"]},{"normal":[0,-1],"dist":-220,"cMask":["ball"]},{"normal":[0,1],"dist":-250,"bCoef":0.1},{"normal":[0,-1],"dist":-250,"bCoef":0.1},{"normal":[1,0],"dist":-500,"bCoef":0.1},{"normal":[-1,0],"dist":-500,"bCoef":0.1}],"goals":[{"p0":[-450,80],"p1":[-450,-80],"team":"red"},{"p0":[450,80],"p1":[450,-80],"team":"blue"}],"discs":[{"cGroup":["ball","kick","score"]},{"pos":[-450,80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[-450,-80],"radius":8,"invMass":0,"color":"FFCCCC"},{"pos":[450,80],"radius":8,"invMass":0,"color":"CCCCFF"},{"pos":[450,-80],"radius":8,"invMass":0,"color":"CCCCFF"}],"playerPhysics":{},"ballPhysics":"disc0","spawnDistance":250}`

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
            room.sendChat("@"+pingPlayer(byPlayer.name)+" sorry, but @"+pingPlayer(player.name)+" is afk!")
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
        room.sendChat("Own Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+".")
    }
    else {
        if (lastPlayersTouched.length >= 2){
            if (lastPlayersTouched[last-1].team === team){
                room.sendChat("Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" ("+lastPlayersTouched[last-1].name+") for "+scoredTeam+".")
            }
            else{
                room.sendChat("Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+".")
            }
        }
        else{
            room.sendChat("Goal scored by @"+pingPlayer(lastPlayersTouched[last].name)+" for "+scoredTeam+".")
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
    var split_message_old = message.split(" ");
    if (!([".", "!"].includes(split_message_old[0].charAt(0)))) return;
    var split_message = split_message_old[0].substring(1);
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
    else if (["t", "team"].includes(split_message)){
        split_message_old.splice(0, 1)
        var message = "";
        for (var i = 0; i < split_message_old.length; i++){
            message = message + split_message_old[i]+" "
        }

        var players = room.getPlayerList();
        var arrayLength = players.length;
        for (var i = 0; i < arrayLength; i++){
            var potentialTeammate = players[i];
            if (potentialTeammate.team === player.team){
                room.sendAnnouncement("[Team Chat] "+player.name+": "+message, potentialTeammate.id)
            }
        }
        return false;
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
        else if (["a", "auto"].includes(split_message)){
            autoRand("auto");
        }
        else if (["r", "rand", "random"].includes(split_message)){
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
        else if (["time"].includes(split_message)){
            room.stopGame();
            var time = parseInt(split_message[1]);
            if (Number.isInteger(time)){
                room.setTimeLimit(time);
            }
            room.sendChat("Time limit set to "+split_message_old[1]+".")
        }
        else if (["score"].includes(split_message)){
            room.stopGame();
            var score = parseInt(split_message[1]);
            if (Number.isInteger(score)){
                room.setScoreLimit(score);
            }
            room.sendChat("Score limit set to "+split_message_old[1]+".")
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
                room.sendChat("(DM) That's not a map you can load!", player.id)
            }
        }
        else if (["p", "pause"].includes(split_message)){
            room.pauseGame(!paused)
        }
        else if (["clear", "clearbans"].includes(split_message)){
            room.clearBans();
            room.sendChat("(DM) All bans have been cleared!", player.id)
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
