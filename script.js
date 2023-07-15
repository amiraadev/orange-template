

//////////////////////////////////////

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})


gsap.to('.img-container',{
  scale:52,
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:1,
    start:"top top",
    end:"bottom",
    pin:true
  }
})


gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})
gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})


gsap.to('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:2,
  scrollTrigger:{
    start:2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})



ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})

gsap.utils.toArray('.skills').forEach((element, index) => {
  gsap.fromTo(
    element,
    { opacity: 0.3, x: 400 },
    {
      opacity: 0.5,
      x: -10,
      scrollTrigger: {
        trigger: element,
        start: "40%",
      },
      stagger: {
        amount: 0.2, // Adjust the amount of stagger as per your preference
        index: index // Use the index of the element to stagger them
      }
    }
  );
});

gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-100,
    scrollTrigger:{
      trigger:image,
      start:"20%",
      stagger:{
        amount:.4
      }
    }
  })
})



const timeline = gsap.timeline();

timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})




// let skewSetter = gsap.quickTo(".skew", "skewY"), // fast
//   clamp = gsap.utils.clamp(-45, 45); // don't let the skew go beyond 45 degrees

// ScrollSmoother.create({
//   wrapper: "#wrapper1",
//   content: "#content",
//   smooth: 2,
//   speed: 3,
//   effects: true,
//   onUpdate: self => {
//     skewSetter(clamp(self.getVelocity() / -50));

//     gsap.utils.toArray('.skills').forEach((element, index) => {
//       gsap.fromTo(
//         element,
//         { opacity: 0.3, x: 400 },
//         {
//           opacity: 0.5,
//           x: -10,
//           scrollTrigger: {
//             trigger: element,
//             start: "40%",
//           },
//           stagger: {
//             amount: 0.2, // Adjust the amount of stagger as per your preference
//             index: index // Use the index of the element to stagger them
//           }
//         }
//       );
//     });
//   },
//   onStop: () => skewSetter(0)
// });




// let skewSetter = gsap.quickTo(".skew", "skewY"), // fast
// 	  clamp = gsap.utils.clamp(-45, 45); // don't let the skew go beyond 20 degrees.

// ScrollSmoother.create({
// 	wrapper: "#wrapper1",
// 	content: "#content",
// 	smooth: 2,
//   speed: 3,
// 	effects: true,
// 	onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
// 	onStop: () => skewSetter(0)
// });