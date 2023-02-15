
mouse_down_counter = 0;
perform_action = 0;


add_wall_if_possible = function(){
    
    if(allowed_to_draw === 0 || algo_mode === 1) return 
    // console.log("ill try to add wall")
    x = int(mouseX/widthOfEachSquareCell)
    y = int(mouseY/widthOfEachSquareCell)

    rows = grid.length;
    cols = grid[0].length;
    
    // avail_blue = grid[x][y].visited === intial_phase
    /*
      at start initial phase is 0  , so to colour custom wall vis == 0
     
      at initial phase 1 , we have dfs maze generate 
      path will have vis == 1 and we need to mark path only  
    */

    if(x>0 && x < rows-1 && y > 0 && y < cols - 1 && 
        grid[x][y].visited === intial_phase){
    //    console.log("inside draw block")     
       if(grid[x][y].visited === intial_phase)
       has_some_custom_wall++
       
    //    console.log(has_some_custom_wall)
       grid[x][y].visited = 3
       
     // 3 means special wall

       grid[x][y].walls = [true,true,true,true]
       grid[x][y].show()  
     //    drw();
  
    }
    // console.log("row = " + rows + " cols = " + cols)
    // console.log(x);
    // console.log(y);

    // drw();
} 


erase_wall_if_possible = function(){
    if(allow_to_erase === 0 || algo_mode === 1) return;
    x = int(mouseX/widthOfEachSquareCell)
    y = int(mouseY/widthOfEachSquareCell)

    rows = grid.length;
    cols = grid[0].length;
 
    if(x>0 && x < rows-1 && y > 0 && y < cols - 1 && 
        grid[x][y].visited !== intial_phase){
        // console.log("inside erase")
        grid[x][y].visited = intial_phase
        grid[x][y].walls = [true,true,true,true]
    
        // console.log("inside")
        grid[x][y].current_color(1); 
        grid[x][y].show();
        // drw()
     }

   
}

canvas_obj = document.getElementById('canvas_holder')
allow_draw = document.getElementById('obstacle')
allow_erase = document.getElementById('removal')

canvas_obj.addEventListener('mousedown',function()
{
    if(algo_mode === 1) return
     edit_wall = 1 
     mouse_down_counter++;
    //  console.log("down")
})

canvas_obj.addEventListener('mouseup',function()
{
    if(algo_mode === 1) return
    edit_wall = 0
    mouse_down_counter--;
    drw()
    //  console.log("up")
})
canvas_obj.addEventListener('mousemove',function(){
    // console.log("inside")
    if(algo_mode === 1) return
    if(mouse_down_counter === 1){
   
        if(st_pt_mode=== 1) {
            add_starting_point();
        }

        else if(end_pt_mode === 1){
            add_ending_point();
        }
        else
        {
         add_wall_if_possible();
         erase_wall_if_possible();
        }
   }
})


canvas_obj.addEventListener('touchmove',function(){
    if(algo_mode === 1) return
    if(mouse_down_counter === 1){
   
        if(st_pt_mode=== 1) {
            add_starting_point();
        }

        else if(end_pt_mode === 1){
            add_ending_point();
        }
        else
        {
         add_wall_if_possible();
         erase_wall_if_possible();
        }
   }
})

canvas_obj.addEventListener('touchstart',function()
{
    if(algo_mode === 1) return
     edit_wall = 1 
     mouse_down_counter++;
    //  console.log("down")
})

canvas_obj.addEventListener('touchend',function()
{
    if(algo_mode === 1) return
    edit_wall = 0
    mouse_down_counter--;
    //  console.log("up")
})


allow_draw.addEventListener('click',function(){
    // console.log('working');
    if(algo_mode === 1) return
    allowed_to_draw = 1 - allowed_to_draw
    if(allowed_to_draw === 1)    { 
        allow_to_erase = 0
        st_pt_mode= 0
        end_pt_mode = 0
    }
    // console.log('working')
    // console.log("earse = " + allow_to_erase)
    // console.log("draw = " + allowed_to_draw)
})

allow_erase.addEventListener('click',function(){
    if(algo_mode === 1) return
    allow_to_erase = 1 - allow_to_erase
    if(allow_to_erase === 1) {
        allowed_to_draw = 0
        st_pt_mode= 0
        end_pt_mode = 0
    }
    // console.log('working')
    // console.log("earse = " + allow_to_erase)
    // console.log("draw = " + allowed_to_draw)

})

