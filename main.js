(function (win,doc) {
    'use strict'
    
    var counter = 0;
    var $button1  =document.querySelector('[data-js="button1"]');
    var $button2  =document.querySelector('[data-js="button2"]');
    var $button3  =document.querySelector('[data-js="button3"]');
    var temporizador;
    var $input = document.querySelector('input').value = counter;

    function timer () {
        counter++
        if(counter > 20)
            return; 
            document.querySelector('input').value = counter;
        temporizador = setTimeout (timer, 1000);
    }

    $button1.addEventListener('click', function(){
        timer();
        console.log('Start')
    }, false);

    $button2.addEventListener('click', function () {
        clearTimeout(temporizador);
        console.log('Pause');
    }, false);

    $button3.addEventListener('click', function(){
        counter = 0;
        timer();
        console.log('Reset')
    }, false);

    
})(window,document);
