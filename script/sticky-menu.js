
var scrollTop = document.body.scrollTop;
var menuNode = document.querySelector('.menu');
var offset = menuNode.getBoundingClientRect();
//console.log(offset.top);

var menuOffsetTop = offset.top + scrollTop;

var isMenuSticked = false;

document.addEventListener('scroll', function () {
//  console.log(document.documentElement.clientHeight);
  var scrollTop = document.body.scrollTop;
//console.log(scrollTop);
  if (scrollTop > menuOffsetTop && !isMenuSticked) {
    menuNode.classList.add('menu--stiky');
    isMenuSticked = true;
  } else if (scrollTop <= menuOffsetTop && isMenuSticked) {
    menuNode.classList.remove('menu--stiky');
    isMenuSticked = false;
  }
})
