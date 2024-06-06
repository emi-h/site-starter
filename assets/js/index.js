// ハンバーガーメニュー開閉
function toggleNav() {
  document.getElementById('js-btnMenu').classList.toggle('btnMenu_isOn');
  document.getElementById('js-menu').classList.toggle('menu_isOpen');
  document.getElementById('body').classList.toggle('noScroll');
};
function closeNav() {
  document.getElementById('js-btnMenu').classList.remove('btnMenu_isOn');
  document.getElementById('js-menu').classList.remove('menu_isOpen');
  document.getElementById('body').classList.remove('noScroll');
};
document.getElementById('js-btnMenu').addEventListener('click',function(){
  toggleNav();
});

// メニュー内のリンクをクリックしたらメニューを閉じる
const menuLinks = document.querySelectorAll('#js-menu a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closeNav();
  });
});
  
// フワッと表示
function load_effect() {
  var element = document.getElementsByClassName('load_fade');
  if(!element) return; // 要素がない場合は終了
  
  for(var i = 0; i < element.length; i++) { 
    element[i].classList.add('is_show');
  }
}
setTimeout(load_effect, 600); // 600ミリ秒経過後に実行

function scroll_effect() {
  var element = document.getElementsByClassName('scroll_fadein');
  if(!element) return;
                      
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;
  var showTiming = 200; // 要素を表示するタイミング
  for(var i = 0; i < element.length; i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is_show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行

// swiper.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
