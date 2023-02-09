frm = document.getElementById('Fmaze')
clr = document.getElementById('clr')
shw_grid = document.getElementById('show_grid')
clear_screen = function(){
    for(let x of grid)
    for(let ele of x){
     ele.visited = 0;
     ele.walls = [true,true,true,true]
    }
    
    has_some_custom_wall = 0
    intial_phase = 0
    
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
     
    has_some_custom_wall = 0
    intial_phase = 1
}

show_grid = function(){

    grid_type = 1 - grid_type
    // console.log(grid_type)
    for(let x of grid)
    for(let ele of x){
     ele.show()
    }
}

frm.addEventListener('click', function(){
    
    dfs_maze_generate()
});


// clear button -> mark all walls = true , and show them
clr.addEventListener('click',clear_screen)
shw_grid.addEventListener('click',show_grid)