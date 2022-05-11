
/**************************************************************************************
*       Simulador para controlar gastos para fines personales o comerciales.          *
*     Se ingresa un monto incial para luego ir controlando cuanto dinero se gasta.    *
**************************************************************************************/


let nombre;

let billetera;

let gasto;

let motivo;

let listaGastos = [];

let tieneGastos = false;


const usuario = new Persona("user",0);

formulario.addEventListener("submit",(e) => {

  e.preventDefault();
  
  nombre = inputUsuarioNombre.value;

  usuario.setNombreUsuario(nombre);
  
  inputUsuarioNombre.value = "";
  
  billetera = Number(inputUsuarioDinero.value);

  usuario.setDineroUsuario(billetera);
  
  inputUsuarioDinero.value = "";
  
  document.querySelector(".primer-formulario").style.display = "none";
  
  botonEnviarDatos.style.display = "none";
  
  document.getElementById("tituloUsuario").style.display = "block";
  
  document.getElementById("tituloUsuario").innerHTML = `¡Bienvenido ${usuario.nombre}!`;

  document.getElementById("tituloBilletera").style.display = "block";
  
  document.getElementById("tituloBilletera").innerHTML = `Tu dinero es de: $${usuario.dinero}`;
  
  botonUsuarioGastos.style.display = "block";

  document.getElementById("botonResetearDatos").style.display = "none";
  
});

botonUsuarioGastos.addEventListener("click",() => {

  document.querySelector(".segundo-formulario").style.display = "block";
  
  botonUsuarioGastos.style.display = "none";
  
  botonCrearGasto.style.display = "block";

  document.getElementById("botonResetearDatos").style.display = "block";
  
});

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

botonVerGastos.addEventListener("click", () => {
  
  document.querySelector(".segundo-formulario").style.display = "none";
  
  usuario.verGastos();
  
  botonVerGastos.style.display = "none";
  
  botonCrearGasto.style.display = "none";

  document.getElementById("botonResetearDatos").style.display = "none";
  
});
