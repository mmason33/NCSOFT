function calculate() {
  var cents, quarters, dimes, nickels, pennys;
  cents = document.getElementById('cents').value;
  quarters = 0;
  dimes = 0;
  nickels = 0;
  pennys = 0;
  while (cents >= parseInt(document.getElementById('one').textContent)) {
    quarters += 1;
    cents -= parseInt(document.getElementById('one').textContent);
      if(quarters != 0){
        document.getElementById('quarter').classList.remove('disabled');
      }
  }
  while (cents >= parseInt(document.getElementById('two').textContent)){
    dimes += 1;
    cents -= parseInt(document.getElementById('two').textContent);
      if(dimes != 0){
        document.getElementById('dime').classList.remove('disabled');
      }
  }
  while (cents >= parseInt(document.getElementById('three').textContent)){
    nickels += 1;
    cents -= parseInt(document.getElementById('three').textContent);
      if(nickels != 0){
        document.getElementById('nickel').classList.remove('disabled');
      }
  }
  while (cents >= parseInt(document.getElementById('four').textContent)) {
    pennys += 1;
    cents -= parseInt(document.getElementById('one').textContent);
      if(pennys != 0){
        document.getElementById('penny').classList.remove('disabled');
      }
  }
console.group(quarters,dimes,nickels,pennys,cents);
console.log(parseInt(document.getElementById('one').textContent));
  document.getElementById('quarter').innerHTML = '<span>' + quarters + '</span>';
  document.getElementById('dime').innerHTML = '<span>' + dimes + '</span>';
  document.getElementById('nickel').innerHTML = '<span>' + nickels + '</span>';
  document.getElementById('penny').innerHTML = '<span>' + pennys + '</span>';
  return;
}
