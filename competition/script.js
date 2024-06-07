document.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var windowTop = window.scrollY;
    var windowBottom = windowTop + windowHeight;
    var tags = document.querySelectorAll(".brecs li, h3, h3 .name");
    var pointer = document.getElementById('pointer');
    var path = document.getElementById('path');
    var pathHeight = path.clientHeight;

    tags.forEach(function(tag, index) {
        var tagRect = tag.getBoundingClientRect();
        var tagTop = tagRect.top + windowTop;
        var tagHalfway = tagTop + (tagRect.height * 0.5); 
        if (windowTop <= tagHalfway && tagHalfway <= windowBottom) {
            tag.classList.add("visible");
        } else {
            tag.classList.remove("visible");
        }
    });
    var firstTag = tags[0];
    var firstTagRect = firstTag.getBoundingClientRect();
    var firstTagTop = firstTagRect.top + windowTop;
    var scrollPercent = (windowTop - firstTagTop) / (document.documentElement.scrollHeight - windowHeight);

    var newTop = scrollPercent * pathHeight;

    pointer.style.top = newTop + 'px';
});
const curated = document.querySelector('.curated');
const wave = document.querySelector('#wave2');

function isTopInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
}

function handleScroll() {
    if (isTopInViewport(curated)) {
        curated.classList.add('animate');
    } else {
        curated.classList.remove('animate');
    }
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;

    const header = document.querySelector('header');
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const headerHeight = document.querySelector('header').offsetHeight;
    const content = document.getElementById('content');
    
    content.style.marginTop = `-${scrolled}px`; 
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const background = document.getElementById('background');
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    
    background.style.transform = `translateY(-${scrolled * 0.07}px)`; 
    wave1.style.transform = `translateY(-${scrolled * 0.15}px)`; 
    wave2.style.transform = `translateY(-${scrolled * 0.07}px)`;
});





