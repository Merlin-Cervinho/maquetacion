// Mostrar y ocultar el menú

$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });

            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });

        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });

            $('.navbar-default').css({
                'background-color': 'rgba(255, 255, 255, 1)',
                'border-color': '#fff'
            });

            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'
            });

            $('.navbar-nav > li > a').css({
                'padding-top': '15px'
            });
        }
    });
});

// Añadir desplazamiento sueave
$(document).ready(function () {

    'use strict';

    $('.nav-item, #scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

// Elemento de menú activo al hacer clic
$(document).ready(function () {
    'use strict';
    ('.navbar-nav li a').click(function () {
        'use strict;'
        $('.navbar-nav li a').parent().removeClass("active");

        $(this).parent().addClass("active");
    });
});

// Resaltar el elemento del menú en el desplazamiento
$(document).ready(function () {
    'use strict';

    $(window).scroll(function () {
        'use strict';
        $("section").each(function () {
            'use strict';
            var bb = $(this).attr("id"); //Id de referencia a las del menú
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#".bb + "']").parent().addClass("active");
            }
            else {
                $(".navbar-nav li a[href='#".bb + "']").parent().removeClass("active");
            }
        });
    });
});

// .navbar-nav li a[href='#ABOUT']