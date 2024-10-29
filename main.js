// Programa para Calcular Aumento de alquiler de inmueble, expensas y seguridad

// Tipo de incremento segun inmueble
// IPC: indice precio al consumidor = 15%  
// ICL: indice contrato de locacion = 10%

let opc;
do {
  alert("--- Bienvenido a la Calculadora de Alquileres ---");
  opc = prompt(
    "Seleccione una opcion colocando el numero correspondiente:\n 1 - Para calcular aumento de inmueble\n 2 - Para calcular aumento de expensas\n 3 - Para calcular aumento de seguridad\n 0 - Para salir"
  );
  switch (opc) {
    case "1":
      calcularAumentoAlquiler();
      break;
    case "2":
      calcularExpensas();
      break;
    case "3":
      calcularSeguridad();
      break;
    case "0":
      break;
    default:
      alert("Opcion no valida");
      break;
  }
} while (opc != 0);

//* Funciones

// 1: Aumento Alquiler
function calcularAumentoAlquiler() {
  // Solicitar al usuario un Alquiler
  let alquiler = parseFloat(prompt("Ingrese un alquiler"));
    const ipc = 0.10
    const icl = 0.08
  //tipo de aumento
  let tipoAumento;
  do {
    tipoAumento = prompt("Que tipo de aumento es: IPC, ICL o ambos: ");
    tipoAumento = tipoAumento.toUpperCase()
  } while (tipoAumento != "IPC" && tipoAumento != "ICL" && tipoAumento != 'AMBOS');

  if(tipoAumento == 'IPC'){
    alquiler = alquiler * ipc * 100
  }else if (tipoAumento == 'ICL'){
    alquiler = alquiler * icl * 100
  }else if (tipoAumento == 'AMBOS'){
    alquiler = alquiler * (ipc + icl) * 100
  }
  alert(`Su alquiler es = ${alquiler.toFixed(2)}`)
}

// 2: Expensa

function calcularExpensas(){
    let expensas = prompt('Ingrese valor expensa: ')
    const aumentoExpensa = 0.05 

    expensas *= aumentoExpensa * 100
    alert(`Su expensa es = ${expensas.toFixed(2)}`)
}

// 3: Seguridad
function calcularSeguridad(){
    let seguridad = prompt('Ingrese valor de la seguridad: ')
    const aumentoSeguridad = 0.07

    seguridad *= aumentoSeguridad * 100
    alert(`Su seguridad cuesta = ${seguridad.toFixed(2)}`)
}