const boton = document.querySelectorAll(".BJUM");
const darR = document.getElementById("pantallajuMDALT");
const pantalla = document.getElementById("pantallajuMD");

boton.forEach(boton => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if (boton.id === "borrar") {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "ERROR!";
      }
      return;
    }
  });
});
