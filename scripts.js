function calculate() {
  var cents, quarters, dimes, nickels, pennys;
  cents = document.getElementById('cents').value;
  quarters = 0;
  dimes = 0;
  nickels = 0;
  pennys = 0;
  while (cents >= 25) {
    quarters += 1;
    cents -= 25;
      if(quarters != 0){
        document.getElementById('quarter').classList.remove('disabled');
      }
  }
  while (cents >= 10){
    dimes += 1;
    cents -= 10;
      if(dimes != 0){
        document.getElementById('dime').classList.remove('disabled');
      }
  }
  while (cents >= 5){
    nickels += 1;
    cents -= 5;
      if(nickels != 0){
        document.getElementById('nickel').classList.remove('disabled');
      }
  }
  while (cents > 0) {
    pennys += 1;
    cents -= 1;
      if(pennys != 0){
        document.getElementById('penny').classList.remove('disabled');
      }
  }

  document.getElementById('quarter').innerHTML = '<span>' + quarters + '</span>';
  document.getElementById('dime').innerHTML = '<span>' + dimes + '</span>';
  document.getElementById('nickel').innerHTML = '<span>' + nickels + '</span>';
  document.getElementById('penny').innerHTML = '<span>' + pennys + '</span>';
  return;
}
/*==============================================================================
working to make this function work properly when taking the value of the editable fields. Constant coin is 25 with 3 random numbers, work in progress. I need to zero these values out before running the function. As of now it works properly accept for the inital value is added. i.e - cents = 25, returns q = 26, initial value of q = 25 via quarters = document.getElementById('one').innerHTML; = q = parseInt(quarters); = 25 and then adds 1 when meeting the condition while loop ending with q = 26. Going to work on this tomorrow.

function calculate() {
  var cents, quarters, dimes, nickels, pennys,q,d,n,p;
  cents = document.getElementById('cents').value;
  quarters = document.getElementById('one').innerHTML;//get the span innerHTML value
  dimes = document.getElementById('two').innerHTML;
  nickels = document.getElementById('three').innerHTML;
  pennys = document.getElementById('four').innerHTML;
  q = parseInt(quarters);//parse string into integer
  d = parseInt(dimes);
  n = parseInt(nickels);
  p = parseInt(pennys);
  while (cents >= q.value) {
    q += 1;
    cents -= q.value;
      if(q != 0){
        document.getElementById('quarter').classList.remove('disabled');
      }
  }
  while (cents >= 10){
    d += 1;
    cents -= 10;
      if(d != 0){
        document.getElementById('dime').classList.remove('disabled');
      }
  }
  while (cents >= 5){
    n += 1;
    cents -= 5;
      if(n != 0){
        document.getElementById('nickel').classList.remove('disabled');
      }
  }
  while (cents > 0) {
    p += 1;
    cents -= 1;
      if(p != 0){
        document.getElementById('penny').classList.remove('disabled');
      }
  }
  console.group(q,d,n,p,quarters);
  document.getElementById('quarter').innerHTML = '<span>' + q + '</span>';
  document.getElementById('dime').innerHTML = '<span>' + d + '</span>';
  document.getElementById('nickel').innerHTML = '<span>' + n + '</span>';
  document.getElementById('penny').innerHTML = '<span>' + p + '</span>';
  return;
}
*=========================================================================/
