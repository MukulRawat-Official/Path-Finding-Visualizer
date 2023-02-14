

function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
  } 
// it will asynchrnoize function only , since our time gap is small im using a code which will wait whole js program
//  for large delay above code is preferred    , dont't forget to add async to our function




 // if above function applied add async
 async function call_bfs()
{
   
   i  = prev_start_xx
   j  = prev_start_yy
   dest_i = prev_end_xx
   dest_j = prev_end_yy
   
  
//    grid[i][j].visited = 6
// visited is use to set current colour
   
   q = new Queue();
   answer_possible = false
   q.push(grid[i][j])

   console.log(q.front())
   
   left = [0,1,0,-1] 
   right = [1,0,-1,0]
   
   rows = grid.length
   cols = grid[0].length

   let visited = []
   for(t = 0;t<rows;t++)  
    {
        tmp = []

        for(l = 0;l<cols;l++) tmp.push(false);
        visited.push(tmp)
       
        /* we have grid with two mode -
        -> intial phase 0 when no dfs maze is applied
        in above mode all cells are false
        -> intial phase 1 when dfs maze is applied  
        in above mode all cells that visited are true
        // so instead of true false
        // we're comparing with intial phase , for checking grid

        for our visited we can compare it with true false;

     */
    }
    
    visited[i][j] = true; 
   while(q.size() !== 0){
   
    curr = q.front(); q.pop();

    
    this.i = curr.i
    this.j = curr.j
   
   
    for(idx = 0; idx<4;idx++){
        this.x =  this.i  + left[idx]
        this.y =   this.j + right[idx]
       
        console.log("i = "+ this.i + " j = " + this.j)
        console.log("x = "+ this.x + " y = " + this.y)


       if( this.x>0 && this.x < rows-1 && this.y > 0 && this.y < cols - 1 && 
        visited[this.x][this.y] === false){
            
         
            // grid[this.x][this.y].add_path(curr);

            if(this.x === dest_i && this.y === dest_j)
            {
                alert('found')
                return;
            }
             // need to handle start and end point differenlty 
            // as its value is not equal to inital phase  
           

            // below function is to check for others
           else if( grid[this.x][this.y].visited === intial_phase ){
            visited[this.x][this.y] = true;
            grid[this.x][this.y].visited = 6 
            grid[this.x][this.y].walls = [true,true,true,true]
            grid[this.x][this.y].show() 
            // 6 -> visited , 7 -> final yellow path
             q.push(grid[this.x][this.y]) 
          }
        }
    }


    await sleep(1);
    // drw()
   }
   
 
   alert('path not found')

}