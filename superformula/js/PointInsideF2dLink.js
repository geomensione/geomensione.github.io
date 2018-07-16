// Adapted from http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect/1968345#1968345
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
