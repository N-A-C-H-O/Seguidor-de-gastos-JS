
/**************************************************************************************
*       Simulador para controlar gastos para fines personales o comerciales.          *
*     Se ingresa un monto incial para luego ir controlando cuanto dinero se gasta.    *
**************************************************************************************/



// Se declaran todas las variables utilizadas en el algoritmo

let nombre;

let billetera;

let gasto;

let motivo;

let listaGastos = [];

let tieneGastos = false;

let formulario = document.getElementById("formularioDatos"); 

let inputUsuarioNombre = document.getElementById("usuarioNombre");

let inputUsuarioDinero = document.getElementById("usuarioDinero");

let inputTituloGasto = document.getElementById("usuarioTituloGasto");

let inputMontoGasto = document.getElementById("usuarioMontoGasto");

let botonUsuarioGastos = document.getElementById("botonUsuarioGastos");

let botonEnviarDatos = document.getElementById("botonEnviarDatos");

let botonCrearGasto = document.getElementById("botonCrearGasto");

let botonVerGastos = document.getElementById("botonVerGastos");

let botonVolver = document.getElementById("botonVolver");

class Persona {

  constructor(nombre,dinero) {

    this.nombre = nombre;

    this.dinero = dinero;

  }

  calcularGasto() {

    if(gasto > 0) {

      this.dinero -= gasto;

      const nuevoGasto = {

        motivoGasto: motivo,

        dineroGastado: gasto,

      };

      listaGastos.push(nuevoGasto);

      tieneGastos = true;

    }

  }

  verGastos() {

    for (const elemento of listaGastos) {

    let li = document.createElement("LI");

    li.innerHTML = `Gastaste $${elemento.dineroGastado}, en ${elemento.motivoGasto}`;

    document.getElementById("listaDeGastos").append(li);

    }
  
  };

}

// Se crea una variable para almacenar los datos de un nuevo objeto

let usuario;

// Secuencia del evento al enviar datos

formulario.addEventListener("submit",(e) => {

  e.preventDefault();
  
  nombre = inputUsuarioNombre.value;
  
  inputUsuarioNombre.value = "";
  
  billetera = Number(inputUsuarioDinero.value);
  
  inputUsuarioDinero.value = "";
  
  usuario = new Persona(nombre,billetera);
  
  document.querySelector(".primer-formulario").style.display = "none";
  
  botonEnviarDatos.style.display = "none";
  
  document.getElementById("tituloUsuario").style.display = "block";
  
  document.getElementById("tituloUsuario").innerHTML = `¡Bienvenido ${usuario.nombre}!`;

  document.getElementById("tituloBilletera").style.display = "block";
  
  document.getElementById("tituloBilletera").innerHTML = `Tu dinero es de: $${usuario.dinero}`;
  
  botonUsuarioGastos.style.display = "block";

  document.getElementById("botonResetearDatos").style.display = "none";
  
});

// Secuencia de evento al agregar gastos

botonUsuarioGastos.addEventListener("click",() => {

  document.querySelector(".segundo-formulario").style.display = "block";
  
  botonUsuarioGastos.style.display = "none";
  
  botonCrearGasto.style.display = "block";

  document.getElementById("botonResetearDatos").style.display = "block";
  
});

// Secuencia para el evento de crear un nuevo gasto

botonCrearGasto.addEventListener("click",() => {

  gasto = Number(inputMontoGasto.value);
  
  inputMontoGasto.value = "";
  
  motivo = inputTituloGasto.value;
  
  inputTituloGasto.value = "";

  if (usuario.dinero === 0) {

    document.querySelector(".segundo-formulario").style.display = "none";
  
    botonCrearGasto.style.display = "none";
  
    document.getElementById("botonResetearDatos").style.display = "none";
  
    let sinDinero = document.createElement("P");
    
    sinDinero.innerHTML = "¡No tienes más dinero!";
  
    sinDinero.setAttribute("class","text-center mt-2 mb-2")
  
    document.getElementById("main").append(sinDinero);
  
  }

  else if (gasto <= usuario.dinero) {
    
    usuario.calcularGasto();
    
  }
    
  document.getElementById("tituloBilletera").innerHTML = `Tu dinero es de: $${usuario.dinero}`;
  
  if (tieneGastos === true) {
  
    botonVerGastos.style.display = "block";
  
  }
  
});

// Secuencia para el evento de ver los gastos del usuario

botonVerGastos.addEventListener("click", () => {
  
  document.querySelector(".segundo-formulario").style.display = "none";
  
  usuario.verGastos();
  
  botonVerGastos.style.display = "none";
  
  botonCrearGasto.style.display = "none";

  document.getElementById("botonResetearDatos").style.display = "none";
  
});
