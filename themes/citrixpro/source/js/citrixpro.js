/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});


$(document).ready(function() {
	$("table").wrap("<div class='table-responsive'></div>");
	$("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () { 
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop()+20;
                // Change by CitrixWu
                //check if user is scrolling up
                // if (currentTop < this.previousTop) {
                //     //if scrolling up...
                //     if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                //         $('.navbar-custom').addClass('is-visible');
                //     } else {
                //         $('.navbar-custom').removeClass('is-visible is-fixed');
                //     }
                // } 
                // else {
                //     //if scrolling down...
                //     $('.navbar-custom').removeClass('is-visible');
                //     if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                // }
                if (currentTop >= headerHeight && !$('.navbar-custom').hasClass('is-fixed')){
                    $('.navbar-custom').addClass('is-fixed is-visible');
                }else if (currentTop < headerHeight&& $('.navbar-custom').hasClass('is-visible')){
                    setTimeout("$('.navbar-custom').removeClass('is-fixed');$('.navbar-custom').removeClass('is-visible'); ",200);//延时3秒 
                }
                this.previousTop = currentTop;
            });
    }
});

//Change by CitrixWu
//增加锚点跳转滑动效果  
$(function(){  
    $('a[href*=#],area[href*=#]').click(function() {  
        console.log(this.pathname)  
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
            var $target = $(this.hash);  
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');  
            if ($target.length) {  
                var targetOffset = $target.offset().top-80;  
                $('html,body').animate({  
                            scrollTop: targetOffset  
                        },  
                        500);  
                return false;  
            }  
        }  
    });  
});



