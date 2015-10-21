//click function toggles between open and close
var toggle = 1
var main = function() {
    $('.menu-toggle').click( function() {
        if(toggle === 1) {
            toggle =  0
        $('.circle1').animate({
            top: '88px'
        }, 500);
        
        $('.circle2').animate({
            top: '168px'
        }, 500);
        
        $('.circle3').animate({
            top: '248px'
        }, 500);
        
        $('.circle-background').animate({
            height: '328px'
        }, 500);
        
        } else {
        $('.circle1').animate({
            top: '0px'
        }, 500);
        
        $('.circle2').animate({
            top: '0px'
        }, 500);
        
        $('.circle3').animate({
            top: '0px'
        }, 500);
        
        $('.circle-background').animate({
            height: '80px'
        }, 500);
        
            toggle = 1
        }
    });
};

$(document).ready(main)
