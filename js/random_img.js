// 랜덤 배경 이미지 설정 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * max)+ min; 
  }
  let saying_img = document.querySelector('.saying-bg');
  let img = getRandomInt(1, 21);

  saying_img.style.setProperty('--saying-img', 'url(/img/bg/'+img+'.png)');

