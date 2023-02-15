frm = document.getElementById('Fmaze')
clr = document.getElementById('clr')
shw_grid = document.getElementById('show_grid')
clear_screen = function(){

    if(algo_mode === 1) return
    for(let x of grid)
    for(let ele of x){
     ele.visited = 0;
     ele.walls = [true,true,true,true]
     ele.path = []
    }
    
    has_some_custom_wall = 0
    intial_phase = 0
    st_point_mode = 0
    end_point_mode = 0
    prev_start_xx = prev_end_xx = prev_start_yy = prev_end_yy = -1 

    

    drw()
 
    
}

dfs_maze_generate = function(){

   

    // if(has_some_custom_wall === 0)
    clear_screen()
    
    count = 1
    tar = wd / widthOfEachSquareCell * ht / widthOfEachSquareCell - 2
    while (count < tar) {
        count++;
        current_cell.visited = 1
        // visited 1 means white border or no walls

        
        var nbrs = current_cell.giveNeighbours();
        if (nbrs) {
            stack.push(current_cell)
            removeWalls(current_cell, nbrs);
            current_cell = nbrs;
        }
        else if (stack.length > 0) current_cell = stack.pop();


    }
     
    intial_phase = 1

    drw()
}

show_grid = function(){
    if(algo_mode === 1) return
    grid_type = 1 - grid_type
    drw()
}

frm.addEventListener('click', function(){
    if(algo_mode === 1) return
    dfs_maze_generate()
});


// clear button -> mark all walls = true , and show them
clr.addEventListener('click',clear_screen)
shw_grid.addEventListener('click',show_grid)
