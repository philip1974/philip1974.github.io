// 랜덤 배경 이미지 설정 
let items = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"];
let item = items[Math.floor(Math.random()*items.length)];
let saying_img = document.querySelector('.saying-bg');
saying_img.style.setProperty('--saying-img', 'url(/img/bg/'+item+'.png)');