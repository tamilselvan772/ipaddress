var r = parseInt(prompt("enter the r"));
var h = parseInt(prompt("enter the h"));
var l = parseInt(prompt("enter the l"));
var volume = (1 / 3) * 3.14 * r * r * h;
var total = 3.14 * r * (l + r);
var area = 2 * 3.14 * r * l;
document.write("rightcircularcone volume" + volume + "<br>");
document.write("rightcircularcone surface area" + total + "<br>");
document.write("rightcircularcone curved area" + area + "<br>");
