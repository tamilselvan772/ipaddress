var a, b, c;
a = parseInt(prompt("enter the 1st number"));
b = parseInt(prompt("enter the 2nd number"));
c = parseInt(prompt("enter the 3rd value"));
if (a > b && a > c) {
  document.write("The given a the is greater");
} else if (b > a && b > c) {
  document.write("The given b is  greater");
} else {
  document.write("The given c is greater");
}
