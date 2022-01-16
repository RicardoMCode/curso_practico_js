const calcularPrecioConDescuento = (precio, porcentajeDescuento) =>{
    let montoDescuento = precio*(porcentajeDescuento/100);
    return (precio- montoDescuento);
}

function OnClickCalcularPrecioConDescuento(){
    const precio = Number(document.getElementById("precio").value);
    const porcentajeDescuento = Number(document.getElementById("porcentajeDescuento").value);
    const result = document.getElementById("precioConDescuento");
    result.innerText = "El precio del producto con descuento es de " + calcularPrecioConDescuento(precio, porcentajeDescuento);

}

let cupones =[ 
    {
        codigo: "cinco",
        descuento: 5,
    },
    {
        codigo : "enero",
        descuento : 10,
    },
    {
        codigo: "primo",
        descuento: 20,
    },
    {
        codigo: "exito",
        descuento: 30,
    },
]
function OnClickCalcularPrecioDescuentoCupon(){
    codigoCupon = document.getElementById("codigoCupon").value;
    const userCupon = (cupones.find((cupon)=>{return cupon.codigo === codigoCupon}));
    if(!userCupon)
        alert("Cupón no valido");
    else 
    {
        const precio = Number(document.getElementById("precioParaCupon").value);
        const result = document.getElementById("resultadoCupon");
        result.innerText = `Cupón del ${userCupon.descuento}% aplicado, el nuevo precio es de: ${calcularPrecioConDescuento(precio, userCupon.descuento)}`;
    }
}