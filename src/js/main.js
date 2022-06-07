gsap.registerPlugin(ScrollTrigger);



gsap.from('.logo' , {
    opacity: 0,
    ease: Back.easeOut,
    duration:5,
    delay: 1,
})
gsap.from('.hero-copy h1' , {
    opacity: 0,
    y:-50,
    ease: 'power3.out',
    duration:4,
    delay: 2,
})
gsap.from('.hero-bar' , {
    opacity: 0,
    y:-50,
    ease: 'power3.out',
    duration:4,
    delay: 2.5,
})
gsap.from('.hero-copy p' , {
    opacity: 0,
    y:-50,
    ease: 'power3.out',
    duration:4,
    delay: 3,
})

gsap.from('.one h1' , {
    opacity: 0,
    x:-100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})
gsap.from('.one p' , {
    opacity: 0,
    x:100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})
gsap.from('.two h1' , {
    opacity: 0,
    x:-100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})
gsap.from('.two p' , {
    opacity: 0,
    x:100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})
gsap.from('.three h1' , {
    opacity: 0,
    x:-100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})
gsap.from('.three p' , {
    opacity: 0,
    x:100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})
gsap.from('.hero img' , {
    opacity: 0,
    y:100,
    ease: 'power3.out',
    duration:4,
    delay: 4,
})

gsap.from('.product-video' , {
    scrollTrigger:{
        trigger:'.product-video',
        start: "top 80%",
        end:"top 0%",
        // markers: true,
    },
    opacity:0,
    y:100,
    ease: 'power3.out',
    duration:2,
})


gsap.from('.obstacles-copy h1' , {
    scrollTrigger:{
        trigger:'.obstacles-copy h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
})
gsap.from('.obstacles-copy .bar' , {
    scrollTrigger:{
        trigger:'.obstacles-copy .bar',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:.5
})
gsap.from('.obstacles-copy p' , {
    scrollTrigger:{
        trigger:'.obstacles-copy p',
        start: "top 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:1
})

gsap.from('.shortcuts-copy h1' , {
    scrollTrigger:{
        trigger:'.shortcuts-copy h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
})
gsap.from('.shortcuts-copy .bar' , {
    scrollTrigger:{
        trigger:'.shortcuts-copy .bar',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:.5
})
gsap.from('.shortcuts-copy p' , {
    scrollTrigger:{
        trigger:'.shortcuts-copy p',
        start: "top 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:1
})

gsap.from('.hesitation-copy h1' , {
    scrollTrigger:{
        trigger:'.hesitation-copy h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
})
gsap.from('.hesitation-copy .bar' , {
    scrollTrigger:{
        trigger:'.hesitation-copy .bar',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:.5
})
gsap.from('.hesitation-copy p' , {
    scrollTrigger:{
        trigger:'.hesitation-copy p',
        start: "top 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:1
})

gsap.from('.misses-copy h1' , {
    scrollTrigger:{
        trigger:'.misses-copy h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
})
gsap.from('.misses-copy .bar' , {
    scrollTrigger:{
        trigger:'.misses-copy .bar',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:.5
})
gsap.from('.misses-copy p' , {
    scrollTrigger:{
        trigger:'.misses-copy p',
        start: "top 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:1
})

gsap.from('.resistance-copy h1' , {
    scrollTrigger:{
        trigger:'.resistance-copy h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
})
gsap.from('.resistance-copy .bar' , {
    scrollTrigger:{
        trigger:'.resistance-copy .bar',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:.5
})
gsap.from('.resistance-copy p' , {
    scrollTrigger:{
        trigger:'.resistance-copy p',
        start: "top 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:1
})


gsap.from('.carbon-copy h1' , {
    scrollTrigger:{
        trigger:'.carbon-copy h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
})

gsap.from('.carbon-copy .bar' , {
    scrollTrigger:{
        trigger:'.carbon-copy .bar',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:.6
})

gsap.from('.carbon-copy p' , {
    scrollTrigger:{
        trigger:'.carbon-copy p',
        start: "top 80%",
        // markers: true,
    },
    opacity:0,
    x: 50,
    ease: 'power3.out',
    duration:2,
    delay:1
})

gsap.from('.product-large' , {
    scrollTrigger:{
        trigger:'.product-large',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    y: 50,
    ease: 'power3.out',
    duration:1,
})

gsap.from('.product-small' , {
    scrollTrigger:{
        trigger:'.product-small img',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    y: -50,
    stagger:0.1,
    // ease: 'power3.out',
    duration:1,
})

gsap.from('.pro',{
    scrollTrigger:{
        trigger:'.pro',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    y:100,
    duration:1,
})

gsap.from('.title h1',{
    scrollTrigger:{
        trigger:'.title h1',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x:50,
    duration:1,
})
gsap.from('.title p',{
    scrollTrigger:{
        trigger:'.title p',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x:-50,
    duration:1,
})
// let reviewsTL = gsap.timeline({
//     scrollTrigger:{
//         trigger:'.reviews'
//     }
// })
gsap.from('.reviews img',{
    scrollTrigger:{
        trigger:'.reviews img',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    stagger:0.1,
    x:-50,
    duration:1,
})
gsap.from('.reviews a',{
    scrollTrigger:{
        trigger:'.reviews img',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x:-50,
    duration:1,
})

gsap.from('.price p',{
    scrollTrigger:{
        trigger:'.price',
        start: "bottom 80%",
        // markers: true,
    },
    opacity:0,
    x:-80,
    stagger:0.2,
    duration:1,
})

gsap.from('.add',{
    scrollTrigger:{
        trigger:'.add',
        start: "bottom 90%",
        // markers: true,
    },
    opacity:0,
    duration:.5,
    // clearProps:"all"
})

gsap.from('.shipping',{
    scrollTrigger:{
        trigger:'.shipping',
        start: "bottom 90%",
        // markers: true,
    },
    opacity:0,
    x:-80,
    stagger:0.2,
    duration:1,
})

gsap.from('.description',{
    scrollTrigger:{
        trigger:'.description',
        start: "bottom 90%",
        // markers: true,
    },
    opacity:0,
    x:-80,
    stagger:0.2,
    duration:1,
})

gsap.from('.more-info .details',{
    scrollTrigger:{
        trigger:'.more-info',
        start: "bottom 90%",
        // markers: true,
    },
    opacity:0,
    y:-80,
    stagger:0.2,
    duration:1,
})

gsap.from('.colums li',{
    scrollTrigger:{
        trigger:'.more-info',
        start: "bottom 90%",
        // markers: true,
    },
    opacity:0,
    x:-80,
    stagger:0.2,
    duration:1,
})


// const show = document.querySelector(".specs")
// const content = document.querySelector('.contents')
// const plus = document.querySelector('.plus')

// let hide = function(){
//     content.classList.remove('show')
// }

// let display = function(){
//     content.classList.add('show')
// }


// show.addEventListener('click' , display)
// plus.addEventListener('click' , hide)
