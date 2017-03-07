// Set the total that we want to divide into chips
var betValue = 191;

// Set the chip values
var chipValues = [
    1,
    5,
    10,
    25
];

// Work out how many of each chip is required to make up the bet value
var tempBet = betValue;
var tempChips = [];
for (var i = chipValues.length - 1; i >= 0; i--) {
    var chipValue = chipValues[i];
    var divided = Math.floor(tempBet / chipValue);

    if (divided >= 1) {
        tempChips[i] = divided;
        tempBet -= divided * chipValues[i];
    }

    if (tempBet == 0) { break; }
}

// Display the chips and how many of each make up the betValue
for (var i in tempChips) {
    console.log(tempChips[i] + ' of ' + chipValues[i]);
}
