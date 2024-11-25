$(document).ready(function() {
    // -------

    $('.element').each(function() {
        $(this).mouseover(function() {
            $(this).addClass('active');
            $('.stage').children('.element').not('.active').addClass('inactive');
        });
        $(this).mouseleave(function() {
            $(this).removeClass('active');
            $('.stage').children('.element').not('.active').removeClass('inactive');
        });
    });

    // -------

    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('.home-image, .wellcome-image');

        function checkVisibility() {
            images.forEach(image => {
                const rect = image.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    image.style.opacity = 1;
                    image.style.animationPlayState = 'running';
                } else {
                    image.style.opacity = 0;
                    image.style.animationPlayState = 'paused';
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility(); // Initial check
    });
});