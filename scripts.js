
function Cal() {
  var a, q, d, f, n;
  a = document.getElementById('cents').value;
  q=0;
  d=0;
  f=0;
  n=0;
  while (a>=25) {
    q+=1;
    a-=25;
      if(q != 0){
        document.getElementById('quarter').classList.remove('disabled');
      }
  }
  while (a>=10){
    d+=1;
    a-=10;
      if(q != 0){
        document.getElementById('dime').classList.remove('disabled');
      }
  }
  while (a>=5){
    f+=1;
    a-=5;
      if(q != 0){
        document.getElementById('nickel').classList.remove('disabled');
      }
  }
  while (a>0) {
    n+=1;
    a-=1;
      if(q != 0){
        document.getElementById('penny').classList.remove('disabled');
      }
  }
  console.group(q,d,f,n);
  document.getElementById('quarter').innerHTML = '<span>' + q + '</span>';
  document.getElementById('dime').innerHTML = '<span>' + d + '</span>';
  document.getElementById('nickel').innerHTML = '<span>' + f + '</span>';
  document.getElementById('penny').innerHTML = '<span>' + n + '</span>';
  return;
}
