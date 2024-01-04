let activeIndex = 1; //当前显示的item的索引
const slideInnerDom = document.getElementById("slideInner");
const arrayLength = document.getElementsByClassName("slide-item").length;
const wrapDom = document.getElementById("wrap");
slideInnerDom.style.left = -wrapDom.offsetWidth * activeIndex + "px";
const dotItemDom = document.getElementsByClassName("dot-item");
dotItemDom[activeIndex-1].classList.add('active');
const nextFn = () => {
  if (activeIndex >= arrayLength - 1) {
    activeIndex = 0;
  }
  activeIndex++;
  slideInnerDom.style.left = -wrapDom.offsetWidth * activeIndex + "px";
  for (var j = 0; j < dotItemDom.length; j++) {
    dotItemDom[j].classList.remove("active");
  }
  let dotActiveIndex = activeIndex-1;
  if(dotActiveIndex>=dotItemDom.length){
    dotActiveIndex=0
  }
  
  dotItemDom[dotActiveIndex].classList.add('active');
}

//自动轮播
let timer = setInterval(nextFn,1000);

//点击右箭头
const arrowRightDom = document.getElementById("arrowRight");
arrowRightDom.addEventListener("click", nextFn);

//点击左箭头
const arrowLeftDom = document.getElementById("arrowLeft");
arrowLeftDom.addEventListener("click", function () {
  if (activeIndex <= 0) {
    activeIndex = arrayLength;
  }
  activeIndex--;
  slideInnerDom.style.left = -wrapDom.offsetWidth * activeIndex + "px";
});

//鼠标悬浮右箭头
arrowRightDom.addEventListener('mouseover',()=>{
    if(timer){
        clearInterval(timer)
    }
})
//鼠标移开右箭头
arrowRightDom.addEventListener('mouseout',function(){
    timer = setInterval(nextFn,1000);
})

//鼠标悬浮左箭头
arrowLeftDom.addEventListener('mouseover',()=>{
    if(timer){
        clearInterval(timer)
    }
})
//鼠标移开左箭头
arrowLeftDom.addEventListener('mouseout',function(){
    timer = setInterval(nextFn,1000);
})

//点击小圆点
for (var i = 0; i < dotItemDom.length; i++) {
  (function (i) {
    dotItemDom[i].addEventListener("click", function () {
      for (var j = 0; j < dotItemDom.length; j++) {
        dotItemDom[j].classList.remove("active");
      }
      dotItemDom[i].classList.add("active");
      activeIndex = i + 1;
      slideInnerDom.style.left = -wrapDom.offsetWidth * activeIndex + "px";
    });

    dotItemDom[i].addEventListener("mouseover", function () {
        if(timer){
            clearInterval(timer)
        }
      });

      dotItemDom[i].addEventListener("mouseout", function () {
        timer = setInterval(nextFn,1000);
      });
  })(i);
}
