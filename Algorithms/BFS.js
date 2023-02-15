algo_mode = 0

function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
  } 

// it will asynchrnoize function only , since our time gap is small im using a code which will wait whole js program
//  for large delay above code is preferred    , dont't forget to add async to our function

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }


 // if above function applied add async
async function call_bfs()
{
   
   algo_mode = 1
   set_button_off();
   i  = prev_start_xx
   j  = prev_start_yy
   dest_i = prev_end_xx
   dest_j = prev_end_yy
   

   this.rows = grid.length
   this.cols = grid[0].length

   for(r = 1;r<this.rows-1;r++){
    for(c = 1;c<this.cols-1;c++){
      if(grid[i][j].visited === 5) {i = r; j = c;}
      if(grid[i][j].visited === 6) {dest_i = r; dest_j = c;}
    }
   }
  
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
   
    console.log("i = "+ this.i + " j = " + this.j)
   
    for(idx = 0; idx<4;idx++){
        this.x =  this.i  + left[idx]
        this.y =   this.j + right[idx]
       
     
        console.log("x = "+ this.x + " y = " + this.y)


       if( this.x>0 && this.x < rows-1 && this.y > 0 && this.y < cols - 1 && 
        visited[this.x][this.y] === false){
         await grid[this.x][this.y].res_path.push(...curr.res_path)
        
         
          //  await sleep(2)
            if(this.x === dest_i && this.y === dest_j)
            {
                
                console.log(grid[this.x][this.y])
                let path = grid[this.x][this.y].res_path  
                alert('found')
                for(i = 0; i<path.length;i++) 
                {
                 
                  this.xx =   path[i][0]
                  this.yy =   path[i][1]
                  console.log(xx + "  " + yy);
                  grid[this.xx][this.yy].visited = 7
                  grid[this.xx][this.yy].show()
                  
                  await sleep(60)
                }
               
                algo_mode = 0
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

            grid[this.x][this.y].res_path.push([this.x,this.y])
            // 6 -> visited , 7 -> final yellow path
            q.push(grid[this.x][this.y]) 
          }

          await sleep(1);
        }

 
    }


    // await sleep(1);
    // drw()
   }
   
   
   alert('path not found')
   algo_mode = 0
}