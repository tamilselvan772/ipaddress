var l = parseInt(prompt("enter the l"));
var b = parseInt(prompt("enter the b"));
var h = parseInt(prompt("enter the height"));
var volume = l * b * h;
var total = 2 * h * (l + b);
var area = 2 * (l * b + b * h + l * h);
document.write("cuboid volume " + volume + "<br>");
document.write("cuboid total surface area " + total + "<br>");
document.write("cuboid curved  surface area " + area + "<br>");
