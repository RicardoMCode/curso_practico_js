//Ecmas6+

//CUADRADO
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado**2;

//TRIANGULO
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base,altura) => (base * altura) / 2;

//Circulo
const diametroCirculo = (radio) => radio * 2; 
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
const areaCirculo = (radio) => radio**2 *Math.PI;


