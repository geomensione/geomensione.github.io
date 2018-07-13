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
};

//data structure for links between f2d: if clicled, all the body moves
  function f2dLink(tang_points){
    var points = tang_points;
    function hit(x,y){
      return isInLink([x,y],points);
    }
    
    function draw(){
        rc.line(points[0].x, points[0].y, points[1].x, points[1].y);
        rc.line(points[2].x, points[2].y, points[3].x, points[3].y);
    }
    return{
        hit:hit,
        draw:draw
    }
  }
