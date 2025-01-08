window.addEventListener('scroll', function() {
    var scrollYPosition = window.scrollY;
    document.getElementById("navbar").style.marginTop = scrollYPosition + 'px';
});