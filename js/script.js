// responsive nav for smartphone
// with jquery
// $('.icon').on('click', function(e){
//   $('a:not(.icon)').toggleClass('responsive');
//   e.preventDefault();
// });

// without jquery
document.querySelector('.icon').addEventListener('click', function(e){
  document.querySelectorAll('.navbar a:not(.icon)').forEach(function(el){
    el.classList.toggle('responsive');
  });
  e.preventDefault();
});

// with jquery
// $('.navbar > a:not(.icon)').on('click', function(e){
//   $('.navbar > a:not(.icon)').removeClass('responsive');
//   e.preventDefault();
// });

// without jquery
document.querySelectorAll('.navbar > a:not(.icon)').forEach(function(el){
  el.onclick = function(ev){
    document.querySelectorAll('.navbar > a:not(.icon)').forEach(function(el){
      el.classList.remove('responsive');
    });
    ev.preventDefault();
  }
});
// ------------------------------

// bullet click pagination function
// with jquery
// $('.pagination').on('click', function(e){
//   $('.pagination').removeClass('active');
//   $(e.target).addClass('active');
//   sliding();
// });

// without jquery
document.querySelectorAll('.pagination').forEach(function(el){
  el.addEventListener('click', function(e){
    document.querySelectorAll('.pagination').forEach(function(el){
      el.classList.remove('active');
      e.target.classList.add('active');
    });
    sliding();
  });
});
// ------------------------------

// auto sliding function
function pagination(){
  // with jquery
  // if ($('.active').index() >= $('.pagination').length - 1) {
  //   $('.pagination').removeClass('active');
  //   $('.pagination').first().addClass('active');
  // } else {
  //   $('.active').next('.pagination').addClass('active');
  //   $('.active').first().removeClass('active');
  // }

  // without jquery
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
// --------------------------------

// sliding function
function sliding(){
  // with jquery
  // $('.content-desc h3').removeClass('landing');
  // $('.content-desc p').removeClass('landing');
  // $('.content-desc img').removeClass('landing');
  //
  // if ($('.active').hasClass('page2')){
  //   $('.wrap').animate({left:'-100%'}, 2000);
  //   $('.slide2 .content-desc h3').addClass('landing');
  //   $('.slide2 .content-desc p').addClass('landing');
  //   $('.slide2 .content-desc img').addClass('landing');
  // } else if ($('.active').hasClass('page3')) {
  //   $('.wrap').animate({left:'-200%'}, 2000);
  //   $('.slide3 .content-desc h3').addClass('landing');
  //   $('.slide3 .content-desc p').addClass('landing');
  //   $('.slide3 .content-desc img').addClass('landing');
  // } else if ($('.active').hasClass('page4')) {
  //   $('.wrap').animate({left:'-300%'}, 2000);
  //   $('.slide4 .content-desc h3').addClass('landing');
  //   $('.slide4 .content-desc p').addClass('landing');
  //   $('.slide4 .content-desc img').addClass('landing');
  // } else {
  //   $('.wrap').animate({left:'0%'}, 2000);
  //   $('.slide1 .content-desc h3').addClass('landing');
  //   $('.slide1 .content-desc p').addClass('landing');
  //   $('.slide1 .content-desc img').addClass('landing');
  // }

  // without jquery
  document.querySelectorAll('.content-desc h3').forEach(function(el){
    el.classList.remove('landing');
  });
  document.querySelectorAll('.content-desc p').forEach(function(el){
    el.classList.remove('landing');
  });
  document.querySelectorAll('.content-desc img').forEach(function(el){
    el.classList.remove('landing');
  });

  const x = document.querySelector('.active');
  const y = document.querySelector('.wrap');
  const z = document.querySelectorAll('.slider');
  if(x.classList.contains('page2')){
    y.style.left = '-100%';
    z[1].querySelector('.content-desc h3').classList.add('landing');
    z[1].querySelector('.content-desc p').classList.add('landing');
    z[1].querySelector('.content-desc img').classList.add('landing');
  } else if(x.classList.contains('page3')){
    y.style.left = '-200%';
    z[2].querySelector('.content-desc h3').classList.add('landing');
    z[2].querySelector('.content-desc p').classList.add('landing');
    z[2].querySelector('.content-desc img').classList.add('landing');
  } else if(x.classList.contains('page4')){
    y.style.left = '-300%';
    z[3].querySelector('.content-desc h3').classList.add('landing');
    z[3].querySelector('.content-desc p').classList.add('landing');
    z[3].querySelector('.content-desc img').classList.add('landing');
  } else {
    y.style.left = '0%';
    z[0].querySelector('.content-desc h3').classList.add('landing');
    z[0].querySelector('.content-desc p').classList.add('landing');
    z[0].querySelector('.content-desc img').classList.add('landing');
  }
}
// ------------------------------

// call sliding function on web finished load
// sliding();
setTimeout(sliding, 1000);

// call pagination function every 6 second
setInterval(pagination, 6000);
