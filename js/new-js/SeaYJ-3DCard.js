

var cards = document.querySelector("[Card3D]");
// var images = document.querySelectorAll("[Card3DContent]");
// var backgrounds = document.querySelectorAll("[Card3DConBG]");
var range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
var calcValue = function calcValue(a, b) {return (a / b * range - range / 2).toFixed(1);}; // thanks @alice-mx

var timeout = void 0;
document.addEventListener('mousemove', function (_ref) {var x = _ref.x,y = _ref.y;
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(function () {
    var yValue = calcValue(y, window.innerHeight);
    var xValue = calcValue(x, window.innerWidth);
    // console.log(xValue, yValue);
    if (cards != null) {
      cards.style.transform = "rotateX(" + yValue + "deg) rotateY(" + xValue + "deg)";
    }
    // [].forEach.call(images, function (image) {
    //   image.style.transform = "translateX(" + -xValue + "px) translateY(" + yValue + "px)";
    // });

    // [].forEach.call(backgrounds, function (background) {
    //   background.style.backgroundPosition = xValue * .45 + "px " + -yValue * .45 + "px";
    // });
  });
}, false);
