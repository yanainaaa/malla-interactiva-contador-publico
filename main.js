const materiasPorSemestre = {
  "1": {
    "obligatorias": [
      { nombre: "Conceptos contables", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [], id: "conceptos-contables" }
    ],
    "opcionales": []
  }
};

function renderMalla() {
  const malla = document.getElementById("malla-grid");
  malla.innerHTML = "";
  for (let s = 1; s <= 1; s++) {
    const box = document.createElement("div");
    box.innerText = materiasPorSemestre[s]["obligatorias"][0].nombre;
    malla.appendChild(box);
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
