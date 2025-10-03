function Contactar() {
  fetch("/Mi_Perfil/Assets/ModalCode/Contacto/Contacto.html")
    .then(res => res.text())
    .then(html => {
      const acomodador = document.getElementById("Acomodador");
      acomodador.innerHTML = html;
      acomodador.style.display = "flex"; // muestra modal
    })
    .catch(err => console.log("Error Fetch: " + err.message));
}

// Botón cerrar
document.addEventListener("click", e => {
  if (e.target.id === "cerrar") {
    const acomodador = document.getElementById("Acomodador");
    acomodador.style.display = "none";
    acomodador.innerHTML = "";
  }
});
