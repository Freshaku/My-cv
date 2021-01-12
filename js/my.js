document.getElementById("scroll").click();
document.querySelector("body").style.overflowY = "hidden";

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
tl.fromTo(".navbar", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".div-title", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo(".scrollButton", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

setTimeout(function() {
  document.querySelector("body").style.overflowY = "scroll";
}, 4000);

var d = new Date();
var n = d.getFullYear();

document.getElementById("currentYear").innerText = n;