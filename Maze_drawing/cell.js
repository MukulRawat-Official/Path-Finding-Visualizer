function Cell(i,j)
{
   this.i = i;
   this.j = j;
   //  j = cols 
   //  i = rows
   this.walls = [true, true, true ,true]
   this.visited = 0;
   //  Tops right bottom left
   

   this.giveNeighbours = function(){
      var neighbours = []
      /** it will store storkes which are available */
       function insideGrid(i ,j){
            if(i<1 || i >= rows-1 || j < 1 || j >= cols-1) return false;
            return true;         
       }
         
       // these represent strokes
      //   remember we need to chc
       var top,right,bottom,left;
      
       if(insideGrid(i,j-2)) top = grid[i][j-2];
       if(insideGrid(i+2,j)) right = grid[i+2][j];
       if(insideGrid(i,j+2)) bottom = grid[i][j+2];
       if(insideGrid(i-2,j)) left = grid[i-2][j];
       
       if(top && top.visited == 0)  neighbours.push(top);
       if(right && right.visited == 0) neighbours.push(right);
       if(bottom && bottom.visited == 0)  neighbours.push(bottom);
       if(left && left.visited == 0) neighbours.push(left);
       

       if(neighbours.length>0){
         var tmp = Math.floor(Math.random() * neighbours.length);

         return neighbours[tmp];
      }

      else return undefined;
      
   }
  
   w = widthOfEachSquareCell;



   this.current_color = function(pos){
      var x = this.i * w;
      var y = this.j * w;
      noStroke();


      /*
       maze colour is given by background proprocessed 
       colour is removed by reloading the cell
      */
      if(pos === 1){ 
          fill(250, 250,250, 100);// valid paths
       }
      else if(pos === 2){
         // console.log(i);
         // console.log(j)
         fill('#282C35'); // border colour -> black
      }  
      else if(pos === 3){
       fill('#0066CC');
      } // test colour
      else { 
         fill("#0066CC");  // maze colour 
      }
      rect(x, y, w, w);
   
   }


  
   
   this.show = function(){
    x = this.i * w;
    y = this.j * w;
    
    
   //  stroke(15);
   // stroke(255, 204, 100);


   
   

   if(i === 0 || i === rows - 1 || j === 0 || j  === cols- 1) stroke('#282C35') // border
   else if(grid_type === 1 && this.visited > 0 && this.visited !== 3)stroke('#add8e6') // path -> light cyan colours
   else if(this.visited === 0 || this.visited === 3) stroke("#0066CC") // maze color -> blue
   
   // grid type for toggling grid
   //  line x -> x + k -> draw line form (x,y) ------ (x+k,y)
   /**   */
    

    
    if(this.walls[0] || grid_type)
    line( x,  y, x+w,  y);
    
    if(this.walls[1] || grid_type)
    line(x+w ,  y,  x+w ,  y+w);
    
    if(this.walls[2] || grid_type)
    line(x+w , y+w , x,y+w);

    if(this.walls[3] || grid_type)
    line(x, y+w, x, y);
    
   
  
    if(intial_phase !== 0 || this.visited >= 2)
    this.current_color(this.visited);
    //  this.visited 2 for border colour 
   //   this.visted 3 special blue colour -> not visited
 }
}