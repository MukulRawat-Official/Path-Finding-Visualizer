check_starting_ending_point_defined = function(){
    if(prev_start_xx === -1 || prev_end_xx === -1) {
        alert('Start and End point no defined');
        return false;
    }
    return true;
}

bfs_obj = document.getElementById('bfs')

bfs_obj.addEventListener('click',function(){
    if(check_starting_ending_point_defined() === false) return;

    call_bfs();

})


set_button_off = function(){
    edit_wall = 0
    allowed_to_draw = 0
    allow_to_erase = 0
    start_pt_mode = 0
    end_pt_mode = 0
}