var nombre = prompt("¿Como te llamas?");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lienas = 30;
var a = 0;
var b = 10;
var fi = 300;
function dibujarLinea(color, xi, yi,xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}
for(var i = 0; i < lienas; i++)
{
dibujarLinea("red",0,a,b,300);
dibujarLinea("purple",300,a,a,0);
dibujarLinea("orange",0,fi,a,0);
dibujarLinea("blue",a,300,300,fi);
a = b + 10;
b = b + 10;
fi = fi - 10;
}
alert("\"Hola mundo\"");
document.write("Dibujo de: " + nombre);
