window.addEventListener('load', () => {
  //获取DOM对象，并对其前后进行处理
  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  }, { passive: false }); //passive 参数不能省略，用来兼容ios和android
  const ul = document.querySelector('.focus').querySelector('ul')
  const lis = ul.querySelectorAll('li')
  const indicator = document.querySelector('ol')
  //指示点数量
  const nodeNum = lis.length
  const width = ul.offsetWidth
  let index = 0;
  let transFlag = false;
  //如果焦点图的数量小于两张，就不做任何处理，直接退出
  if (nodeNum < 2) return
  //第一张图片放到最后
  const firstNode = lis[0].cloneNode(true)
  ul.appendChild(firstNode)
  //最后一张图片，插入到第一张前面
  const lastNode = lis[lis.length - 1].cloneNode(true)
  ul.insertBefore(lastNode, lis[0])
  //移动到合适位置
  moveContent(ul, -width);
  //生成的指示器,并初始化活跃的指示器
  for (let i = 0; i < nodeNum; i++) {
    const li = document.createElement('li')
    indicator.appendChild(li)
  }
  indicator.children[0].classList.add('curIndex')
  //移动函数
  function moveContent(node, moveX) {
    if (transFlag) {
      node.style.transition = 'all .3s'
    } else {
      node.style.transition = ''
    }
    node.style.transform = 'translateX(' + moveX + 'px)'
  }
  ul.addEventListener('transitionend', () => {
    if (index > nodeNum - 1) {
      transFlag = false;
      index = 0
      moveContent(ul, -width)
    } else if (index < 0) {
      transFlag = false
      index = nodeNum - 1;
      const moveX = -(index + 1) * width
      moveContent(ul, moveX)
    }
    for (let i = 0; i < nodeNum; i++) {
      indicator.children[i].classList.remove('curIndex')
    }
    indicator.children[index].classList.add('curIndex')
  })
  //自动滚动
  let timer = setInterval(() => {
    transFlag = true;
    index++;
    const moveX = -(index + 1) * width
    //移动轮播图图片
    moveContent(ul, moveX)
  }, 1000);
  //手指触碰 记录初始值
  let startX = 0;
  let touchMoveX = 0;
  ul.addEventListener('touchstart', (e) => {
    e.preventDefault();
    clearInterval(timer)
    startX = e.targetTouches[0].pageX;
    touchMoveX = 0; //防止第二次点击时，touchMove的值仍存在使得其发生滚动
  })
  ul.addEventListener('touchmove', (e) => {
    touchMoveX = e.targetTouches[0].pageX - startX;
    transFlag = false;
    moveContent(ul, -(index + 1) * width + touchMoveX)
  })
  ul.addEventListener('touchend', (e) => {
    if (Math.abs(touchMoveX) > 0.3 * width) {
      if (touchMoveX > 0) {
        index--;
      } else {
        index++;
      }
    }
    transFlag = true;
    moveContent(ul, -(index + 1) * width);
    timer = setInterval(() => {
      transFlag = true;
      index++;
      const moveX = -(index + 1) * width
      //移动轮播图图片
      moveContent(ul, moveX)
    }, 1000);
  })
})