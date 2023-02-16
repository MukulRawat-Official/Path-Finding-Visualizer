prev_start_xx = prev_end_xx = prev_start_yy = prev_end_yy = -1 
st_pt_mode = end_pt_mode =  0

// above two for starting and ending point

start_pt = document.getElementById('Start_point')
end_pt = document.getElementById('End_point')

start_pt.addEventListener('click',function(){
    if(algo_mode === 1) return
    // st_pt_mode = 1 - st_pt_mode
    st_pt_mode = 1
    if(st_pt_mode=== 1){
    allowed_to_draw = 0
    allow_to_erase = 0
    end_pt_mode = 0
   }

//    console.log(grid);
}
)

end_pt.addEventListener('click',function(){
    if(algo_mode === 1) return
    //  end_pt_mode = 1 - end_pt_mode
    end_pt_mode = 1
    if(end_pt_mode === 1){
    allowed_to_draw = 0
    allow_to_erase = 0
    st_pt_mode = 0
   }

//    console.log(grid);
}
)

add_starting_point = function(){
    // console.log("start point working")

    let x = int(mouseX/widthOfEachSquareCell)
    let y = int(mouseY/widthOfEachSquareCell)

    let rows = grid.length;
    let cols = grid[0].length;

    if(x>0 && x < rows-1 && y > 0 && y < cols - 1 && 
        grid[x][y].visited === intial_phase) // remove prev
    {
        
        // deleting previous point
        if(prev_start_xx !== -1){         
         
             grid[prev_start_xx][prev_start_yy].visited = intial_phase
             grid[prev_start_xx][prev_start_yy].walls = [true,true,true,true]
             grid[prev_start_xx][prev_start_yy].current_color(1);
             grid[prev_start_xx][prev_start_yy].show()
           
         }

        
           // 1-> white  , 2 -> back , 3-> blue , 4 -> green , 5->pink , others -> blue
            grid[x][y].visited = 4
            grid[x][y].walls = [true,true,true,true]
            grid[x][y].show()
            prev_start_xx = x
            prev_start_yy = y
        
    }
}


add_ending_point = function(){
    // console.log("start point working")

    let x = int(mouseX/widthOfEachSquareCell)
    let y = int(mouseY/widthOfEachSquareCell)

    let rows = grid.length;
    let cols = grid[0].length;

    if(x>0 && x < rows-1 && y > 0 && y < cols - 1 && 
        grid[x][y].visited === intial_phase) // remove prev
    {
        
        // deleting previous point
        if(prev_end_xx !== -1){         
         
             grid[prev_end_xx][prev_end_yy].visited = intial_phase
             grid[prev_end_xx][prev_end_yy].walls = [true,true,true,true]
             grid[prev_end_xx][prev_end_yy].current_color(1);
             grid[prev_end_xx][prev_end_yy].show()
           
         }

        
           // 1-> white  , 2 -> back , 3-> blue , 4 -> green , 5->pink , others -> blue
            grid[x][y].visited = 5
            grid[x][y].walls = [true,true,true,true]
            grid[x][y].show()
            prev_end_xx = x
            prev_end_yy = y
        
    }
}
