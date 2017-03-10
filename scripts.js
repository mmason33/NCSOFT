function calculate() {
  //declare variables
  var cents, quarters, dimes, nickels, pennys;

  //gather the input value for cents
  cents = document.getElementById('cents').value;

  //zero out variables - each time cents is divisible by a given value, 1 will be added to the following variables
  quarters = 0;
  dimes = 0;
  nickels = 0;
  pennys = 0;

  //begin the four while loops - while cents is greater than or equal to the given value - parseInt(document.getElementById('id').textContent)) - this value will be subtracted from cents and 1 will be added to the specified variable.
  while (cents >= parseInt(document.getElementById('one').textContent)) {
    quarters += 1;
    cents -= parseInt(document.getElementById('one').textContent);
      if(quarters != 0){
        document.getElementById('quarter').classList.remove('disabled');//if the variable is not equal to zero, remove class "disabled".
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
  while (cents > 0) {
    pennys += 1;
    cents -= 1;
      if(pennys != 0){
        document.getElementById('penny').classList.remove('disabled');
      }
  }
  console.group(quarters,dimes,nickels,pennys);//console.group variables
  document.getElementById('quarter').innerHTML = '<span>' + quarters + '</span>';//append the output of the variables into <span>$variable</span>
  document.getElementById('dime').innerHTML = '<span>' + dimes + '</span>';
  document.getElementById('nickel').innerHTML = '<span>' + nickels + '</span>';
  document.getElementById('penny').innerHTML = '<span>' + pennys + '</span>';
  return;
}
