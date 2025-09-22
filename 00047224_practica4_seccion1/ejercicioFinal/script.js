var agenda = {
  lunes: "Atender a un cliente específico",
  martes: "Visitar una agencia fuera de la ciudad",
  miercoles: "Llevar a mi hija al ballet",
  jueves: "Priorizar entregas de desarrollo",
  viernes: "Atender problemas de manera remota",
  sabado: "Hacer lo que mi esposa quiera",
  domingo: "Sin actividad programada",
};

var hoy = new Date();
document.getElementById("fecha").innerHTML =
  "Hoy es " + hoy.toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

function recordarActividad() {
  var dia = document.getElementById("dia").value;
  var mensaje = document.getElementById("mensaje").value;
  var resultado = document.getElementById("resultado");

  var actividad = agenda[dia];
  var mensajeFinal = "El " + dia + " tienes: " + actividad;

  if (mensaje !== "") {
    mensajeFinal += "<br>Recordatorio personal: " + mensaje;
  }

  var diaHoy = hoy.toLocaleDateString("es-ES", { weekday: "long" }).toLowerCase();
  if (dia === diaHoy) {
    mensajeFinal = "¡Es hoy! " + actividad;
    if (mensaje !== "") {
      mensajeFinal += "<br>Recordatorio personal: " + mensaje;
    }
  }

  resultado.innerHTML = mensajeFinal;
}
