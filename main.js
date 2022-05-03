
/**************************************************************************************
*       Simulador para controlar gastos para fines personales o comerciales.          *
*     Se ingresa un monto incial para luego ir controlando cuanto dinero se gasta.    *
**************************************************************************************/



// Usuario ingresa entrada de información

let nombre = prompt("Ingrese su nombre de usuario");

function saludar(nombreIngresado) {

  alert(`¡Hola ${nombreIngresado}!`);

}

function despedirse(nombreIngresado) {

  alert(`¡Nos vemos ${nombreIngresado}!`);

}

saludar(nombre);

let billetera = Number(prompt(`${nombre}, ingresa tu dinero (* Sólo números *)`));

let listaGastos = [];

let tieneGastos = false;

class Persona {

  constructor(nombre,dinero) {

    this.nombre = nombre;

    this.dinero = dinero;

  }

// Método dónde se calcula la resta del dinero del usuario con el gasto

  calcularGasto() {

    let gasto = Number(prompt("Ingresa el monto que gastaste"));

    if (gasto !== "" && gasto <= this.dinero) {

      this.dinero -= gasto;

      let motivo = prompt("¿En qué gastaste tu dinero?");

      const nuevoGasto = {

        motivoGasto: motivo,

        dineroGastado: gasto,

      };

      listaGastos.push(nuevoGasto);

      tieneGastos = true;

      alert(`Tu dinero ahora es de $${this.dinero}`);

    }

    else {

      alert("Error en cantidad ingresada");

      alert(`Tienes $${this.dinero} en tu billetera`)

    };

  }

// Método dónde se muestran los datos procesados y el estado de la billetera

  verGastos() {

    for (const elemento of listaGastos) {

    alert(`Gastaste $${elemento.dineroGastado}, en ${elemento.motivoGasto}`);

    }

    alert(`Tu dinero ahora es $${this.dinero}`);
  
  };

}

const usuario = new Persona(nombre,billetera);

// Bucle para verificar lo que realiza el usuario con el monto

while (usuario.dinero >= 0) {

  if (usuario.dinero === 0) {

    alert("¡No tienes más dinero!");

    break;

  } 

  else {

    let consulta = prompt("¿Gastaste tu dinero? (Escribe 'Si' o 'No')");

    if (consulta === "si" || consulta === "Si" || consulta === "SI") {

      usuario.calcularGasto();

    } 
      
    else if (consulta === "no" || consulta === "No" || consulta === "NO") {

      break;

    } 
      
    else {

      alert("Error al ingresar respuesta");

    }

  }

}

if (tieneGastos === true) {

  let consultaGastos = prompt("¿Quieres ver tus gastos? (Escribe 'Si' o 'No')");

  if (consultaGastos === "si" || consultaGastos === "Si" || consultaGastos === "SI") {

    usuario.verGastos();
  
  } 
    
  else if (consultaGastos === "no" || consultaGastos === "No" || consultaGastos === "NO") {
  
    despedirse(usuario.nombre);
  
  }

  else {

    alert("Error al ingresar respuesta");
  
  }

}

else {

  alert(`No tienes gastos. Tu dinero sigue siendo $${usuario.dinero}`);

  despedirse(usuario.nombre);

}
