//http://bl.ocks.org/balint42/8c9310605df9305c42b3
/**
         * @brief De Casteljau's algorithm splitting n-th degree Bezier curve
         */
        function bsplit(points, t0) {
            var n = points.length - 1; // number of control points
            var b = [];		   	   // coefficients as in De Casteljau's algorithm
            var res1 = [];		   // first curve resulting control points
            var res2 = [];		   // second curve resulting control points
            var t1 = 1 - t0;
            
            // multiply point with scalar factor
            var pf = function(p, f) {
                var res = [];
                for(var i = 0; i < p.length; i++) {
                    res.push(f * p[i]);
                }
                return res;
            };
            // add points as vectors
            var pp = function(p1, p2) {
                var res = [];
                for(var i = 0; i < Math.min(p1.length, p2.length); i++) {
                    res.push(p1[i] + p2[i]);
                }
                return res;
            };
            
            // set original coefficients: b[i][0] = points[i]
            for(var i = 0; i <= n; i++) {
                points[i] = (typeof points[i] == "object") ? points[i] : [points[i]];
                b.push([ points[i] ]);
            }
            // get all coefficients
            for(var j = 1; j <= n; j++) {
                for(var i = 0; i <= (n-j); i++) {
                    b[i].push( pp(
                            pf(b[i][j-1], t1),
                            pf(b[i+1][j-1], t0)
                    ));
                }
            }
            // set result: res1 & res2
            for(var j = 0; j <= n; j++) {
                res1.push(b[0][j]);
                res2.push(b[j][n-j]);
            }
            
            return [res1, res2];
        };

//https://gist.github.com/gordonwoodhull/50eb65d2f048789f9558
var eps = 0.0000001;
function between(a, b, c) {
    return a-eps <= b && b <= c+eps;
}

function segment_intersection(x1,y1,x2,y2, x3,y3,x4,y4) {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4)) /
            ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4)) /
            ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!between(x2, x, x1)) {return false;}
        } else {
            if (!between(x1, x, x2)) {return false;}
        }
        if (y1>=y2) {
            if (!between(y2, y, y1)) {return false;}
        } else {
            if (!between(y1, y, y2)) {return false;}
        }
        if (x3>=x4) {
            if (!between(x4, x, x3)) {return false;}
        } else {
            if (!between(x3, x, x4)) {return false;}
        }
        if (y3>=y4) {
            if (!between(y4, y, y3)) {return false;}
        } else {
            if (!between(y3, y, y4)) {return false;}
        }
    }
    return {x: x, y: y};
}

function doCircleLineInt(cx,cy,r,x2,y2){
    var center_point = {
        x: cx,
        y: cy,
    }
    var endLine = {
        x: x2,
        y: y2,
    }
    var circle = {
        radius: r,
        center: center_point
    }
    var line = {
        p1: center_point,
        p2: endLine
    }
    return inteceptCircleLineSeg(circle,line);
}

//https://stackoverflow.com/questions/37224912/circle-line-segment-collision
function inteceptCircleLineSeg(circle, line){
    var a, b, c, d, u1, u2, ret, retP1, retP2, v1, v2;
    v1 = {};
    v2 = {};
    v1.x = line.p2.x - line.p1.x;
    v1.y = line.p2.y - line.p1.y;
    v2.x = line.p1.x - circle.center.x;
    v2.y = line.p1.y - circle.center.y;
    b = (v1.x * v2.x + v1.y * v2.y);
    c = 2 * (v1.x * v1.x + v1.y * v1.y);
    b *= -2;
    d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.radius * circle.radius));
    if(isNaN(d)){ // no intercept
        return [];
    }
    u1 = (b - d) / c;  // these represent the unit distance of point one and two on the line
    u2 = (b + d) / c;    
    retP1 = {};   // return points
    retP2 = {}  
    ret = []; // return array
    if(u1 <= 1 && u1 >= 0){  // add point if on the line segment
        retP1.x = line.p1.x + v1.x * u1;
        retP1.y = line.p1.y + v1.y * u1;
        ret[0] = retP1;
    }
    if(u2 <= 1 && u2 >= 0){  // second add point if on the line segment
        retP2.x = line.p1.x + v1.x * u2;
        retP2.y = line.p1.y + v1.y * u2;
        ret[ret.length] = retP2;
    }       
    return ret;
}

function isInLink(point, vs) {
    
    var x = point[0], y = point[1];
    
    inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i].x, yi = vs[i].y;
        var xj = vs[j].x, yj = vs[j].y;
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
}

//data structure for links between f2d: if clicled, all the body moves
  function f2d_Link(){
    var points;
    var color = '#000';
    var selected_color = '#F00';
    var color_to_draw = '#000';
    function hit(x,y){
      var sel = isInLink([x,y],points);
      color_to_draw = sel?selected_color:color; 
      return sel;
    }
    function getPoints(){
        return points;
    }
    function setPoints(ps){
        points = ps;
    }
    function draw(){
        rc.line(points[0].x, points[0].y, points[1].x, points[1].y, { stroke: color_to_draw });
        rc.line(points[2].x, points[2].y, points[3].x, points[3].y, { stroke: color_to_draw });
    }
    return{
        hit:hit,
        draw:draw,
        setPoints: setPoints,
        getPoints: getPoints
    }
  }
