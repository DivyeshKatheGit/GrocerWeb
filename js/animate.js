
/*gsap*/
var tl = gsap.timeline();
tl.from('.hero',1,{
    width : 0,
    height : '100%'
})
.from('.hero-title h1',0.5,{
    x: 100,
    opacity : 0
})

/*scroll magic */

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-about .subline',
        reverse : false
    }
)
.setTween(".sec-about .subline",1,{
    opacity : 1
})
.addTo(controller);

var scene2 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-about .aim',
        reverse : false
    }
)
.setTween(".aim .vision",1,{
    x : 0,
    opacity: 1
})
.addTo(controller);

var scene3 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-about .aim',
        reverse : false
    }
)
.setTween(".aim .mission",1,{
    x : 0,
    opacity: 1
})
.addTo(controller);

var scene4 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-services',
        reverse : false
    }
)
.setTween(".sec-services .sc",1,{
    y : '0',
    opacity : 1
})
.addTo(controller);

var scene5 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-work',
        reverse : false
    }
)
.setTween(".sec-work .sec-left",1,{
    x : '0',
    opacity : 1
})
.addTo(controller);

var scene6 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-work',
        reverse : false
    }
)
.setTween(".sec-work .sec-right",1,{
    x : '0',
    opacity : 1
})
.addTo(controller);

var scene7 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-experties',
        reverse : false
    }
)
.setTween(".e-l .ec",1,{
    opacity : 1
})
.addTo(controller);

var scene8 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-client',
        reverse : false
    }
)
.setTween(".sec-client .c-l-1",1,{
    opacity : 1,
    x : '0'
})
.addTo(controller);

var scene9 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec-client',
        reverse : false
    }
)
.setTween(".sec-client .c-l-2",1,{
    opacity : 1,
    x : '0'
})
.addTo(controller);