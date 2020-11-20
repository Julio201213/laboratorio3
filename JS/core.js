alert('Programar el calculo del servicio')

let propietario;
let descuento10;
let descuento15;
let total = 0;

function Calcular(){
    propietario = String(document.getElementById('Propietario').value);
    modelo = String(document.getElementById('modelo').value);
    placa = String(document.getElementById('Placa').value);
    tipo = String(document.getElementById('tipo').value);
    entryDate = String(document.getElementById('entryDate').value);
    let horaInicio = Number(document.getElementById('inicio').value.split(':')[0]);
    let horaSalida = Number(document.getElementById('salida').value.split(':')[0]);
    let cantidadHoras = horaSalida - horaInicio;

    switch (tipo) {
        case 'carro':
            descuento10 = true;
            break;
        case 'moto':
            descuento15 = true;
            break;
    }

    if (cantidadHoras >= 2) {
        total = 5000 * 2;
        cantidadHoras = cantidadHoras - 2;
    }

    if (cantidadHoras >= 3) {
        total = total + 4000 * 3;
        cantidadHoras = cantidadHoras - 3;
    }

    if (cantidadHoras >= 5) {
        total = total + 3000 * 5;
        cantidadHoras = cantidadHoras - 5;
    }

    if (cantidadHoras > 0) {
        total = total + 2000 * cantidadHoras;
    }

    let factura = "";

    factura = "Propietario: " + propietario;
    factura = factura + "\nTipo de vehiculo: " + tipo;
    factura = factura + "\nModelo: " + modelo;
    factura = factura + "\nPlaca: " + placa;
    factura = factura + "\nFecha ingreso: " + entryDate;
    factura = factura + "\nSubtotal: $" + total;

    if (descuento10 == true) {
        factura = factura + "\nDescuento 10%";
        total = total * 0.9;
        factura = factura + "\nTotal: $" + total; 
    }

    if (descuento15 == true) {
        factura = factura + "\nDescuento 15%"
        total = total * 0.75;
        factura = factura + "\nTotal: $" + total;    
    }

    alert(factura);
}


/*Crear un sistema de información que permita ingresar los datos básicos de un vehículo y el tiempo del servicio.
Si el vehículo es un carro se dará un 10% descuento, si el vehículo es una moto el descuento será del 15%. El sistema
permitirá ingresar el propietario, la placa, el modelo, fecha, hora inicio y cantidad de horas de parqueo.
El pago por horas es el siguiente:

Las dos primeras horas a 5.000 c/u.
Las siguientes tres a 4.000 c/u.
Las cinco siguientes a 3.000 c/u.
Después de diez horas el costo por cada hora es de 2000 pesos.

Imprimir toda la información de la factura del cliente, el descuento y el total a pagar.
Realizar una bitácora con las etiquetas HTML (mínimo 20).
Realizar una bitácora con los estilos CSS (mínimo 20).
La información debe estar en el repositorio y agregar la URL del proyecto en un archivo de Excel, en la carpeta de 
evidencia laboratorios.*/