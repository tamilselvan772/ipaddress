var r = parseInt(prompt("enter the r"));
var h = parseInt(prompt("enter the h"));
var volume = 3.14 * r * r * h;
var total = 2 * 3.14 * r * (r + h);
var area = 2 * 3.14 * r * h;
document.write("cube volume" + volume + "<br>");
document.write("cube total surface area" + total + "<br>");
document.write("cube curved  surface area" + area + "<br>");
