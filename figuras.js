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

//Onclicks - Cálculos
function calcularPerimetroCuadrado(){
    const TbxLado = document.getElementById("lado");
    alert(perimetroCuadrado(TbxLado.value));
}
function calcularAreaCuadrado(){
    const TbxLado = document.getElementById("lado");
    alert(areaCuadrado(TbxLado.value));
}
function calcularPerimetroTriangulo (){
    const TbxLado1 = document.getElementById("lado1");
    const TbxLado2 = document.getElementById("lado2");
    const TbxLado3 = document.getElementById("lado3");
    alert(perimetroTriangulo(Number(TbxLado1.value),Number(TbxLado2.value),Number(TbxLado3.value)));
}
function calcularAreaTriangulo (){
    const TbxLado1 = document.getElementById("lado1");
    const TbxLado2 = document.getElementById("lado2");
    const TbxLado3 = document.getElementById("lado3");
    alert(areaTriangulo(Number(TbxLado1.value),Number(TbxLado2.value),Number(TbxLado3.value)));
}
function calcularPerimetroCirculo (){
    const TbxRadio = document.getElementById("radio");
    alert(perimetroCirculo(radio.value));
}
function calcularAreaCirculo (){
    const TbxRadio = document.getElementById("radio");
    alert(areaCirculo(radio.value));
}