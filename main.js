// Simulador para controlar gastos para fines personales o comerciales. Se ingresa un monto incial para luego ir controlando cuanto dinero se gasta.

function calcularGasto() {
    let gasto = Number(prompt("Ingresa el monto que gastaste"));
    if (gasto !== "" && gasto <= billetera) {
      billetera -= gasto;
      let asunto = prompt("¿En qué gastaste tu dinero?");
      listaGastos += `\n Gastaste $${gasto} en ${asunto} \n`;
    }
    alert(`Tu dinero ahora es de $${billetera}`);
  }
  
  function verGastos() {
    if (listaGastos !== "") {
      alert(`Tus gastos son los siguientes: ${listaGastos}`);
      alert(`Tu dinero ahora es $${billetera}`);
    } else {
      alert("No tienes gastos");
      alert(`Tu dinero sigue siendo $${billetera}`);
    }
  }
  
  let nombre = prompt("¡Hola! ¿cómo te llamas?");
  alert(`Bienvenid@, ${nombre}`);
  let billetera = Number(
    prompt(`${nombre}, ingresa tu dinero (* Sólo números *)`)
  );
  let listaGastos = "";
  while (billetera !== "" && billetera > 0) {
    if (billetera < 0) {
      alert("No tienes más dinero");
      break;
    } else {
      let consulta = prompt("¿Gastaste tu dinero? (Escribe 'Si' o 'No')");
      if (consulta === "si" || consulta === "Si" || consulta === "SI") {
        calcularGasto();
      } else if (consulta === "no" || consulta === "No" || consulta === "NO") {
        break;
      } else {
        alert("Error al ingresar respuesta");
      }
    }
  }
  
  verGastos();