'use strict';

function repo_escape(){
    stop();
}

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(){
            if(start_time > -1){
                return 'Timer and splits not yet saveable. Leave?';
            }
        },
      },
      'keybinds': {
        32: {
          'todo': add_split,
        },
        72: {
          'todo': start,
        },
        84: {
          'todo': reset_timer,
        },
      },
      'title': 'Timer.htm',
    });

    document.getElementById('add-split').onclick = add_split;
    var element = document.getElementById('reset-key-display');
    element.onclick = reset_timer;
    element.value = 'Reset [T]';
    element = document.getElementById('start-key-display');
    element.onclick = start;
    element.value = 'Start [H]';
    document.getElementById('stop').onclick = stop;
}
