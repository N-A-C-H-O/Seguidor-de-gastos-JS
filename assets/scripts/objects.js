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
  
    setNombreUsuario(nombreUsuario) {
  
      this.nombre = nombreUsuario;
  
    }
  
    setDineroUsuario(dineroUsuario) {
  
      this.dinero = dineroUsuario;
  
    }
  
  }