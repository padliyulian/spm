// denied undeclared variables
"use strict";

// responsive nav for smartphone
document.querySelector('.icon').addEventListener('click', function(e){
  document.querySelectorAll('.navbar a:not(.icon)').forEach(function(el){
    el.classList.toggle('responsive');
  });
  e.preventDefault();
});

document.querySelectorAll('.navbar > a:not(.icon)').forEach(function(el){
  el.onclick = function(ev){
    document.querySelectorAll('.navbar > a:not(.icon)').forEach(function(el){
      el.classList.remove('responsive');
    });
    ev.preventDefault();
  }
});

// bullet click pagination function
document.querySelectorAll('.pagination').forEach(function(el){
  el.addEventListener('click', function(e){
    document.querySelectorAll('.pagination').forEach(function(el){
      el.classList.remove('active');
      e.target.classList.add('active');
    });
    sliding();
  });
});

// auto sliding function
function pagination(){
  const nodes = Array.prototype.slice.call(document.querySelector('.slider-pagination').children);
  const node = document.querySelector('.active');
  const nodeIndex = nodes.indexOf(node);
  const x = document.querySelectorAll('.pagination');

  if(nodeIndex >= x.length - 1){
    x.forEach(function(el){
      el.classList.remove('active');
    });
    nodes[0].classList.add('active');
  } else {
    node.nextElementSibling.classList.add('active');
    node.classList.remove('active');
  }

  sliding();
}

// remove class from element function
function removeClass(elName, cName){
  document.querySelectorAll(elName).forEach(function (el) {
    el.classList.remove(cName);
  });
}

// page index function
const z = document.querySelectorAll('.slider');
function pageIndex(num){
  z[num].querySelector('.content-desc h3').classList.add('landing');
  z[num].querySelector('.content-desc p').classList.add('landing');
  z[num].querySelector('.content-desc img').classList.add('landing');
}

// sliding function
function sliding(){
  removeClass('.content-desc h3', 'landing');
  removeClass('.content-desc p', 'landing');
  removeClass('.content-desc img', 'landing');

  const x = document.querySelector('.active');
  const y = document.querySelector('.wrap');

  if(x.classList.contains('page2')){
    y.style.left = '-100%';
    pageIndex(1);
  } else if(x.classList.contains('page3')){
    y.style.left = '-200%';
    pageIndex(2);
  } else if(x.classList.contains('page4')){
    y.style.left = '-300%';
    pageIndex(3);
  } else {
    y.style.left = '0%';
    pageIndex(0);
  }
}

// call sliding function after 1 second
setTimeout(sliding, 1000);

// call pagination function every 6 second
setInterval(pagination, 6000);
