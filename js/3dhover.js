$(".hover-3d").each(function (index, element) {
    var animation = TweenMax.to(this, 0.2, {
        className: "+= hover-3d-superShadow",
        marginTop: "-10px",
        marginBottom: "10px",
        ease: Power1.easeIn,
        paused: true
    });
    element.animation = animation;
});

$(".hover-3d").hover(
    function () {
        this.animation.play();
    },
    function () {
        this.animation.reverse();
    }
);