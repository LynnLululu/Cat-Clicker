
var cat = document.getElementById('cat');
var n = 0;
cat.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  n++;
  document.getElementById('num').innerHtml = "click count:" + n;
}, false);
