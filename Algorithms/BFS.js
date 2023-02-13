call_bfs = function(){
   this.i  = prev_start_xx
   this.j  = prev_start_yy
   dest_i = prev_end_xx
   dest_j = prev_end_yy
   
  
//    grid[i][j].visited = 6
// visited is use to set current colour
   
   q = new Queue();
   answer_possible = false
   q.push(grid[i][j])
   
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
    i = curr.i
    j = curr.j
   

    for(idx = 0; idx<4;idx++){
        x = i + left[idx] 
        x = int(x)
        y = j + right[idx]
        y = int(y)
       if( x>0 && x < rows-1 && y > 0 && y < cols - 1 && 
        visited[x][y] === false){
           
            if(x === dest_i && y === dest_j){
                alert('found')
                return;
            }
             // need to handle start and end point differenlty 
            // as its value is not equal to inital phase  
           

            // below function is to check for others
           else if( grid[x][y].visited === intial_phase ){
            visited[x][y] = true;
            grid[x][y].visited = 6
            
            
            // 6 -> visited , 7 -> final yellow path
            q.push(grid[x][y]) 
           
          }
        }
    }
    
   }

   alert('path not found')

}