// cube calculation
function cube_tsa() {
  var a = parseInt(document.getElementById("area").value);
  var total = 6 * a * a;
  document.getElementById("root").innerHTML = "Total Surface Area : " + total;
}
function cube_csa() {
  var a = parseInt(document.getElementById("area").value);
  var total = 4 * a * a;
  document.getElementById("root").innerHTML =
    "Total  curved Surface Area : " + total;
}
function cube_vol() {
  var a = parseInt(document.getElementById("area").value);
  var total = a * a * a;
  document.getElementById("root").innerHTML = "Total Volume : " + total;
}
// cuboid calculation

function cuboid_tsa() {
  let l = parseInt(document.getElementById("length").value);
  let h = parseInt(document.getElementById("height").value);
  let b = parseInt(document.getElementById("Cbreth").value);
  var total = 2 * h * (l + b);
  document.getElementById("croot").innerHTML = "Total Surface Area : " + total;
}
function cuboid_csa() {
  let l = parseInt(document.getElementById("length").value);
  let h = parseInt(document.getElementById("height").value);
  let b = parseInt(document.getElementById("Cbreth").value);
  var total = 2 * (l * b + b * h + l * h);
  document.getElementById("croot").innerHTML =
    "Total  curved Surface Area : " + total;
}
function cuboid_vol() {
  let l = parseInt(document.getElementById("length").value);
  let h = parseInt(document.getElementById("height").value);
  let b = parseInt(document.getElementById("Cbreth").value);
  var total = l * b * h;
  document.getElementById("croot").innerHTML = "Total Volume : " + total;
}
// cone calculation
function cone_tsa() {
  let r = parseInt(document.getElementById("conelength").value);
  let l = parseInt(document.getElementById("coneheight").value);
  var total = 3.14 * r * (l + r);
  document.getElementById("coneroot").innerHTML =
    "Total Surface Area : " + total;
}
function cone_csa() {
  let r = parseInt(document.getElementById("conelength").value);
  let l = parseInt(document.getElementById("coneheight").value);
  var total = 2 * 3.14 * r * l;
  document.getElementById("coneroot").innerHTML =
    "Total  curved Surface Area : " + total;
}
function cone_vol() {
  let r = parseInt(document.getElementById("conelength").value);
  let h = parseInt(document.getElementById("coneheight").value);
  var total = (1 / 3) * 3.14 * r * r * h;

  document.getElementById("coneroot").innerHTML =
    "Total Volume : " + total.toFixed(2);
}
// cylinder calculation
function cylidner_tsac() {
  let r = parseInt(document.getElementById("cylinderlength").value);
  let h = parseInt(document.getElementById("cylinederheight").value);
  var total = 3.14 * r * r * h;
  document.getElementById("cylinderroot").innerHTML =
    "Total Surface Area : " + total;
}
function cylinder_csac() {
  let r = parseInt(document.getElementById("cylinderlength").value);
  let h = parseInt(document.getElementById("cylinderheight").value);
  var total = 2 * 3.14 * r * (r + h);
  document.getElementById("cylinderroot").innerHTML =
    "Total  curved Surface Area : " + total;
}
function cylinder_volc() {
  let r = parseInt(document.getElementById("cylinderlength").value);
  let h = parseInt(document.getElementById("cylinderheight").value);
  var total = 2 * 3.14 * r * h;

  document.getElementById("cylinderroot").innerHTML =
    "Total Volume : " + total.toFixed(2);
}
// sphere
function sphere_tsa() {
  let r = parseInt(document.getElementById("sphereRectangle").value);
  var total = (4 / 3) * 3.14 * r * r * r;
  document.getElementById("sphereroot").innerHTML =
    "Total Surface Area : " + total;
}
function sphere_csa() {
  let r = parseInt(document.getElementById("sphererectangle").value);
  var total = 4 * 3.14 * r;
  document.getElementById("sphereroot").innerHTML =
    "Total  curved Surface Area : " + total;
}
function sphere_vol() {
  let r = parseInt(document.getElementById("sphererectangle").value);
  var total = 4 * 3.14 * r;
  document.getElementById("sphereroot").innerHTML = "Total Volume : " + total;
}
