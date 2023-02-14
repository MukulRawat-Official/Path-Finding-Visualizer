
var rows = 0 ,cols = 0 , wd = window.innerWidth * 0.9, ht = window.innerHeight * 0.9
var widthOfEachSquareCell = 0.032* Math.min(ht,wd);
var current_cell;
var intial_phase = 0
// grid type is for whether to grid or not at mazeformation
var grid_type = 1
var edit_wall = 0
var allowed_to_draw = 0;
var allow_to_erase = 0
/*
   as draw code is repeating i put intial pase to 0 meaning at start
   cell will be all while which i toggle with form maze button afterwards

   rows , cols = total total no of rows and columns 
*/

var has_some_custom_wall = 0

var grid = []
var stack = []
// grid will store cell info 


function add_border(){
   w = widthOfEachSquareCell
   cols = 2 * int(ht/(w*2)) + 1
   rows = 2 * int(wd/(w*2)) + 1

  for(i= 0;i<rows;i++) grid[i][0].visited = grid[i][cols-1].visited = 2;
  for(j = 1;j<cols-1;j++) grid[0][j].visited = grid[rows-1][j].visited = 2;
}

function removeWalls(a,b){
   // x - for y axis
   // y - for x axis

   var x = a.i - b.i;
   
   if (x === 2) {
    
     grid[a.i-1][a.j].visited = 1;
     grid[a.i-1][a.j].current_color(1)   
     grid[a.i-1][a.j].walls[3] = grid[a.i-1][a.j].walls[1] = false
   //   console.log(a);
   //  console.log(b);
     a.walls[3] = false;
     b.walls[1] = false;
   }
   else if (x === -2) {
    grid[a.i+1][a.j].visited = 1
    grid[a.i+1][a.j].current_color(1);
    grid[a.i+1][a.j].walls[3] = grid[a.i+1][a.j].walls[1] = false
     
     a.walls[1] = false;
     b.walls[3] = false;
   }
   var y = a.j - b.j;
   if (y === 2) {
      grid[a.i][a.j-1].visited = 1;
      grid[a.i][a.j-1].current_color(1);
      grid[a.i][a.j-1].walls[0] = grid[a.i][a.j-1].walls[2] = false 

      a.walls[0] = false;
      b.walls[2] = false;
   } 
   else if (y === -2) {
      grid[a.i][a.j+1].visited = 1;
      grid[a.i][a.j+1].current_color(1);
      grid[a.i][a.j+1].walls[0] = grid[a.i][a.j+1].walls[2] = false 
      a.walls[2] = false;
      b.walls[0] = false;
   }
}





function  setup(){
/**
  It will create Background  create cell variable
 */
   w = widthOfEachSquareCell
   cols = 2 * int(ht/(w*2)) + 1
   rows = 2 * int(wd/(w*2)) + 1
   let cnvs =  createCanvas(rows * w, cols * w);
   // frameRate(1);
   // console.log(cnvs)
   
   cnvs.parent('canvas_holder')

   
   for(var i = 0;i<rows;i++){
    curr_row_grid = []
    for(var j = 0;j<cols;j++)
    {
        var cell = new Cell(i,j);
        curr_row_grid.push(cell);
    }
    grid.push(curr_row_grid);
   }


   current_cell = grid[1][1];
   // frameRate(30)
   drw()
}



function drw(){
    background(500);
   add_border();
   for(var i = 0;i<grid.length;i++){
        for(var j = 0;j<grid[i].length;j++){
           grid[i][j].show();
        }
   }
}
function draw(){
   // background(500);
   // add_border();
   // for(var i = 0;i<grid.length;i++){
   //      for(var j = 0;j<grid[i].length;j++){
   //         grid[i][j].show();
   //      }
   // }
   
   // console.log("loop")
   // if(edit_wall === 1){
   //    add_wall_if_possible()
   //    erase_wall_if_possible()
   // }
}

