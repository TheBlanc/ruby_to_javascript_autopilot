var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");
console.log("----------------");


var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
  'iced cap': 'A delicious milk-based dessert.',
  'university': 'A place of learning.',
};
console.log(materials);
console.log(words);
console.log("----------------");


var num = 7;
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num == 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " is less than 10.");
}
console.log("----------------");


var x = 0;
while (x < 10) {
  console.log("Doing the same thing over and over.");
  x++
};
console.log("----------------");


var base = 5;
var x = 0;
while (x < 20) {
  console.log(x + base);
  x++;
};
console.log("----------------");


var total = 0;
var x = 0;
while (x < 100) {
  total += x;
  x++;
};
console.log(total);
console.log("----------------");


var heights = [];
var x = 3;
while (x < 16) {
  heights.push(x);
  x++;
}

for (var i = 0; i < heights.length; i++) {
  var height = heights[i];
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  }
  else {
    console.log("You are too short to ride this rollercoaster.");
  }
}
console.log("----------------");


var containers = ['purse', 'wallet', 'backpack']
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}
console.log("----------------");


function helloWorld(){
  console.log("Hello world!");
}
helloWorld()
console.log("----------------");


function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

var amount = add(5, 7);
console.log(amount);
