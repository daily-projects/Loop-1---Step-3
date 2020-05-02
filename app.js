const title = document.getElementById('title');
const container = document.getElementById('container');
const account = document.getElementById('account');
const subHeader = document.getElementById('sub-header');
const items = document.querySelectorAll('.item');
const bike = document.getElementById('bike');



const duke = gsap.timeline({defaults:{opacity:0, ease:"back", duration:1}});

duke.from(container, {ease:"linear"})
    .from(title, {x:-80})
    .from(account, {x:80})
    .from(subHeader, {y:-30})
    .from(items, {scale:0, transformOrigin:"50% 50%", stagger:0.7})
    .from(bike, {y:50})

console.log(items);
GSDevTools.create();