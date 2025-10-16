let panelwrap = document.getElementById("panelcentrardos");
let panelcentrar= document.getElementById("panelcentrar");
let texto = document.getElementById("pruebap");
let cv = document.getElementById("cv");
let contc = document.getElementById("JuegoUnoMODAL");
let game = document.getElementById("Acomodador");

game.style.position ="absolute";
contc.style.position ="absolute";
panelwrap.style.display = "none";
cv.style.display ="none";
function resturar(){
        panelcentrar.style.display= "flex";
panelwrap.style.display ="none";
cv.style.display ="none";
return;
}
function Contactar() {
  fetch("Assets/Html's/ModalCode/Contacto/Contacto.html")
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
    fetch("Assets/Html's/ModalCode/JuegoCalculo/juegocalculo.html")
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
    texto.textContent = " Estudiante en ingeneria de sistemas interesado en aprender. Cursando cuarto semestre en la CUN ";
    resturar();
    return;
 }

 function menu(){
texto.textContent="   Juan Esteban Herrera Herrera  Colombia, Bogota D.C, 19 años";
resturar();
return;
 }

 function Habilidades(){
panelcentrar.style.display= "none";
cv.style.display ="none";
panelwrap.style.display ="flex";
panelwrap.style.flexWrap ="wrap";
panelwrap.style.justifyContent ="center";
panelwrap.style.gap = "30px";
panelwrap.style.overflowY ="auto";
panelwrap.style.backgroundColor = "rgba(27, 26, 26, 0.38)";
panelwrap.style.padding = "5";
panelwrap.style.height = "90%"; 
panelwrap.style.width = "100%";
panelwrap.style.marginBottom ="0";
panelwrap.style.borderRadius = "none";
panelwrap.style.border = "none";
    return;
 }

 function CV(){
    cv.style.display ="flex";
    panelcentrar.style.display="none";
    panelwrap.style.display ="none";
    cv.style.height = "100%";
    cv.style.width = "100%";
    return;
 }