var Cell = class {
    constructor(i, j, w, m){
        this.i = i;
        this.j = j;
        this.w = w;
        this.m = m;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.ground = [1,1,1,1,1,1,1,1,1];
    }
    
    checkNeighbors() {
      let neighbors = [];
  
      let top = this.m.grid[this.m.index(this.i, this.j - 1)];
      let right = this.m.grid[this.m.index(this.i + 1, this.j)];
      let bottom = this.m.grid[this.m.index(this.i, this.j + 1)];
      let left = this.m.grid[this.m.index(this.i - 1, this.j)];
  
      if (top && !top.visited) {
        neighbors.push(top);
      }
      if (right && !right.visited) {
        neighbors.push(right);
      }
      if (bottom && !bottom.visited) {
        neighbors.push(bottom);
      }
      if (left && !left.visited) {
        neighbors.push(left);
      }
  
      if (neighbors.length > 0) {
        let r = Math.floor(Math.random() * neighbors.length);
        return neighbors[r];
      } else {
        return undefined;
      }
    }
    highlight() {
      //let x = this.i * this.w;
      //let y = this.j * this.w;
      //noStroke();
      //fill(0, 0, 255, 100);
      //rect(x, y, w, w);
    }
    show() {
      //let x = this.i * this.w;
      //let y = this.j * this.w;
      //let w = this.w/3;
      //stroke(255);
      //rect(x,y,w,w)
      //rect(x+(w*2),y,w,w)
      //rect(x,y+((w/3)*2),w/3,w/3)
      //rect(x+((w/3)*2),y+((w/3)*2),w/3,w/3)
      //1-tile,2-hero,3-wall,4-snake on left,5-snake on right
      let up = false, right = false, down = false, left = false;
      this.ground = [1,0,1,0,0,0,1,0,1];
      if (this.walls[0]) {
        //line(x, y, x + w, y);
        //rect(x,y,w/3,w/3)
        //rect(x+w/3,y,w/3,w/3)
        //rect(x+((w/3)*2),y,w/3,w/3)
        this.ground[1] = 1;
	up = true;
      }
      //else{
      //  this.ground[1] = 0;
      //}
      if (this.walls[1]) {
        //line(x + w, y, x + w, y + w);
        //rect(x+((w/3)*2),y,w/3,w/3)
        //rect(x+((w/3)*2),y+w/3,w/3,w/3)
        //rect(x+((w/3)*2),y+((w/3)*2),w/3,w/3)
        this.ground[5] = 1;
	right = true;
      }
      //else{
      //  this.ground[7] = 0;
      //}
      if (this.walls[2]) {
        //line(x + w, y + w, x, y + w);
        //rect(x,y+((w/3)*2),w/3,w/3)
        //rect(x+w/3,y+((w/3)*2),w/3,w/3)
        //rect(x+((w/3)*2),y+((w/3)*2),w/3,w/3)
        this.ground[7] = 1;
	down = true;
      }
      //else{
      //  this.ground[5] = 0;
      //}
      if (this.walls[3]) {
        //line(x, y + w, x, y);
        //rect(x,y,w/3,w/3)
        //rect(x,y+w/3,w/3,w/3)
        //rect(x,y+((w/3)*2),w/3,w/3)
        this.ground[3] = 1;
	left = true;
      }
      //else{
      //  this.ground[3] = 0;
      //}
  
      if (this.visited) {
        //noStroke();
        //fill(255, 0, 255, 100);
        //rect(x, y, w, w);
        //this.ground = [1,0,1,0,0,0,1,0,1];
      }
	    if(this.i || this.j) //non è la partenza
	    	if((up && down) && (!left && !right)) 
			this.ground[4] = 3;
    };
}


var Maze = class{

constructor(x,y,w) {
  //createCanvas(600, 600);
  this.cols = x;//floor(width / w);
  this.rows = y;//floor(height / w);
  this.w = w;
  this.current = {};
  this.grid = [];
  this.stack = [];
  for (let j = 0; j < this.rows; j++) {
    for (let i = 0; i < this.cols; i++) {
      var cell = new Cell(i, j, this.w, this);
      this.grid.push(cell);
    }
  }

  this.current = this.grid[0];
  return this.draw();
}

draw() {
  //background(51);
  for (let i = 0; i < this.grid.length; i++) {
    this.grid[i].show();
  }

  this.current.visited = true;
  this.current.highlight();
  // STEP 1
  let next = this.current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    this.stack.push(this.current);

    // STEP 3
    this.removeWalls(this.current, next);

    // STEP 4
    this.current = next;
    this.draw()
  } else if (this.stack.length > 0) {
    this.current = this.stack.pop();
    this.draw()
  } else {
	  return this.grid.map(({ ground }) => ground)
  }
}

index(i, j) {
  if (i < 0 || j < 0 || i > this.cols - 1 || j > this.rows - 1) {
    return -1;
  }
  return i + j * this.cols;
}

removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

}

export {Maze};

