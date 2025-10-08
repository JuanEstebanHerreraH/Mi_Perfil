function Contactar() {
  fetch("/Assets/Html's/ModalCode/Contacto/Contacto.html")
    .then(res => res.text())
    .then(html => {
      const acomodador = document.getElementById("Acomodador");
      acomodador.innerHTML = html;
      acomodador.style.display = "flex"; 
    })
    .catch(err => console.log("Error Fetch: " + err.message));

    document.addEventListener("click", e => {
  if (e.target.id === "cerrar") {
    const acomodador = document.getElementById("Acomodador");
    acomodador.style.display = "none";
    acomodador.innerHTML = "";
  }
});
}
function JuegoUno(){
    fetch("/Assets/Html's/ModalCode/JuegoCalculo/juegocalculo.html")
    .then(res => res.text())
    .then(html => {
        const juego = document.getElementById("JuegoUnoMODAL");
        juego.innerHTML = html;
        juego.style.display = "flex"; 
        
        iniciarJuegoCalculo(); 
    })
    .catch(err => console.log("Error Fetch: " + err.message));
    
    document.addEventListener("click", e => {
        if (e.target.id === "cerrarjuego") {
            const juego = document.getElementById("JuegoUnoMODAL");
            juego.style.display = "none";
            juego.innerHTML = "";
        }
    });
}
function iniciarJuegoCalculo() {
    const boton = document.querySelectorAll(".BJUM");
    const darR = document.getElementById("pantallajuMDALT");
    const pantalla = document.getElementById("pantallajuMD");
    const puntaje = document.getElementById("puntajeMDJU");

    let operador = ["+", "/", "-", "*"];
    let num1;
    let num2;
    let num3;
    let puntos = 0;

    nuevaOperacion();

    function nuevaOperacion() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        num3 = Math.floor(Math.random() * 4);
        darR.textContent = num1 + operador[num3] + num2;
        if (operador[num3] === "-" && num2 > num1) {
            let x = num1;
            num1 = num2;
            num2 = x;
            darR.textContent = num1 + operador[num3] + num2;
            return;
        }
    }

    boton.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonApretado = boton.textContent;

            if (boton.id === "borrar") {
                if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
                    pantalla.textContent = "";
                } else {
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                }
                return;
            }

            if (boton.id === "igual") {
                if (parseFloat(eval(darR.textContent))) {
                    let valor = eval(darR.textContent);
                    valor = parseFloat(valor.toFixed(2));
                }
                let userValor = parseFloat(eval(pantalla.textContent).toFixed(2));
                let correcto = parseFloat(eval(darR.textContent).toFixed(2));
                try {
                    if (userValor === correcto) {
                        nuevaOperacion();
                        puntos++;
                        puntaje.textContent = puntos;
                        pantalla.textContent = "";
                    } else {
                        pantalla.textContent = "ERROR";
                    }
                } catch {
                    pantalla.textContent = "ERROR";
                }
                return;
            }


            if (pantalla.textContent === "" || pantalla.textContent.toUpperCase() === "ERROR") {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            }
        });
    });
}
 function Sobremi() {
    let sobremi = document.getElementById("pruebap");
    sobremi.textContent = " Estudiante en ingeneria de sistemas interesado en aprender. Cursando cuarto semestre en la CUN ";
    return;
 }

 function menu(){
let menu = document.getElementById("pruebap");
menu.textContent="    Corporación Unificada Nacional de Educación Superior - CUN 4er-Semestre Ing Sistemas Juan Esteban Herrera Herrera  Colombia, Bogota, 19 años";
    return;
 }

 function Habilidades(){
let panelcentrar= document.getElementById("panelcentrar");
let hbld= document.getElementById("pruebap");
 panelcentrar.style.flexWrap ="wrap";
 panelcentrar.style.flexDirection = "row";
 hbld.textContent = "holaaaaaaaaaaaa hola hola ";
    return;
 }