// ---------- DATOS DE MATERIAS ----------
const creditosArea = {
  "ECONOMÍA": 30,
  "MÉTODOS CUANTITATIVOS": 40,
  "CONTABILIDAD E IMPUESTOS": 130,
  "CIENCIAS SOCIALES Y HUMANÍSTICAS": 10,
  "JURÍDICA": 40,
  "ACTIVIDADES INTEGRADORAS": 20,
  "ADMINISTRACIÓN": 50,
};
const creditosTotal = 360;

// --------- MATERIAS (COMPLETAS) -----------
const materiasPorSemestre = {
  "1": {
    "obligatorias": [
      { nombre: "Conceptos contables", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [], id: "conceptos-contables" },
      { nombre: "Administración y Gestión de las organizaciones 1", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [], id: "adm-gestion1" },
      { nombre: "Introducción a la microeconomía", creditos: 10, area: "ECONOMÍA", requisitos: [], id: "intro-micro" },
      { nombre: "Calculo 1", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: [], id: "calculo1" }
    ],
    "opcionales": []
  },
  "2": {
    "obligatorias": [
      { nombre: "Contabilidad General 1", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["conceptos-contables"], id: "contab-gen1" },
      { nombre: "Derecho Civil", creditos: 10, area: "JURÍDICA", requisitos: [], id: "der-civil" },
      { nombre: "Economía descriptiva", creditos: 10, area: "ECONOMÍA", requisitos: [], id: "eco-descriptiva" }
    ],
    "opcionales": [
      { nombre: "Administración y Gestión de las organizaciones 2", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["adm-gestion1"], id: "adm-gestion2" },
      { nombre: "Ciencia Política", creditos: 10, area: "CIENCIAS SOCIALES Y HUMANÍSTICAS", requisitos: [], id: "ciencia-politica" },
      { nombre: "Desarrollo y Bienestar", creditos: 10, area: "CIENCIAS SOCIALES Y HUMANÍSTICAS", requisitos: [], id: "desarrollo-bienestar" },
      { nombre: "Algebra lineal", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: [], id: "algebra-lineal" }
    ]
  },
  "3": {
    "obligatorias": [
      { nombre: "Introducción a la estadística", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: ["calculo1"], id: "intro-estadistica" },
      { nombre: "Contabilidad General 2", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gen1"], id: "contab-gen2" },
      { nombre: "Derecho Comercial", creditos: 10, area: "JURÍDICA", requisitos: ["der-civil"], id: "der-comercial" },
      { nombre: "Procesos y Sistemas de información", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["adm-gestion1"], id: "proc-sistemas" }
    ],
    "opcionales": [
      { nombre: "Macroeconomía 1", creditos: 10, area: "ECONOMÍA", requisitos: ["intro-micro"], id: "macro1" },
      { nombre: "Taller de iniciación a la investigación", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 40 }], id: "taller-investigacion" }
    ]
  },
  "4": {
    "obligatorias": [
      { nombre: "Contabilidad General 3", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gen2"], id: "contab-gen3" },
      { nombre: "Matematica financiera", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: ["calculo1"], id: "mat-financiera" },
      { nombre: "Legislación laboral y seguridad social", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["conceptos-contables", "der-civil"], id: "leg-laboral" },
      { nombre: "Derecho societario", creditos: 10, area: "JURÍDICA", requisitos: ["der-civil"], id: "der-societario" }
    ],
    "opcionales": [
      { nombre: "Economía Circular", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 100 }], id: "eco-circular" },
      { nombre: "Administración de Recursos humanos", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["adm-gestion2"], id: "adm-rrhh" },
      { nombre: "Sistemas de información", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["adm-gestion1", "contab-gen1"], id: "sistemas-info" },
      { nombre: "Sociología de la empresa y Management", creditos: 10, area: "CIENCIAS SOCIALES Y HUMANÍSTICAS", requisitos: [{ tipo: "creditos", valor: 80 }], id: "soc-empresa" },
      { nombre: "Sociología contemporánea", creditos: 10, area: "CIENCIAS SOCIALES Y HUMANÍSTICAS", requisitos: [], id: "soc-contemp" },
      { nombre: "Sociología económica", creditos: 10, area: "CIENCIAS SOCIALES Y HUMANÍSTICAS", requisitos: [], id: "soc-economica" }
    ]
  },
  "5": {
    "obligatorias": [
      { nombre: "Modelos y sistemas de costos", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gen3"], id: "modelos-costos" },
      { nombre: "Derecho tributario", creditos: 10, area: "JURÍDICA", requisitos: [{ tipo: "creditos_area", area: "JURÍDICA", valor: 10 }], id: "der-tributario" },
      { nombre: "Etica y ejercicio profesional", creditos: 5, area: "ACTIVIDADES INTEGRADORAS", requisitos: ["contab-gen2", "der-comercial"], id: "etica-ejercicio" }
    ],
    "opcionales": [
      { nombre: "EFI Microcecea", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }], id: "efi-microcecea" },
      { nombre: "Taller de ética y responsabilidad social", creditos: 5, area: "ACTIVIDADES INTEGRADORAS", requisitos: ["proc-sistemas", "modelos-costos"], id: "taller-etica" },
      { nombre: "EFI: Cooperativas de trabajo y colectivos autogestionados", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }], id: "efi-coop" },
      { nombre: "Seguros de vida", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: ["mat-financiera", "intro-estadistica"], id: "seguros-vida" },
      { nombre: "Marketing Básico", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [], id: "marketing-basico" },
      { nombre: "Análisis de datos en administración", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: ["intro-estadistica"], id: "analisis-datos" }
    ]
  },
  "6": {
    "obligatorias": [
      { nombre: "Contabilidad superior 1", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [{ tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 50 }], id: "contab-superior1" },
      { nombre: "Control interno", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["proc-sistemas", { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 40 }], id: "control-interno" },
      { nombre: "Contabilidad Gerencial", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [{ tipo: "creditos", valor: 160 }, "modelos-costos", "mat-financiera"], id: "contab-gerencial" },
      { nombre: "Tributaria 1", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gen3", "der-tributario"], id: "tributaria1" }
    ],
    "opcionales": [
      { nombre: "Contabilidad de instituciones financieras no bancarias", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [{ tipo: "creditos", valor: 160 }, "contab-gen3", "der-comercial"], id: "contab-instit-fin" },
      { nombre: "Derecho Público", creditos: 10, area: "JURÍDICA", requisitos: [], id: "der-publico" },
      { nombre: "EFI - Costos para la Gestión de Emprendimientos Sociales y Comunitarios", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: ["contab-gerencial"], id: "efi-costos-gest" },
      { nombre: "Marketing Estratégico", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["marketing-basico"], id: "marketing-estrategico" },
      { nombre: "Comercio Internacional", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [{ tipo: "creditos_area", area: "JURÍDICA", valor: 15 }, "mat-financiera", "modelos-costos"], id: "comercio-intl" },
      { nombre: "Introd. al emprendedurismo", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [{ tipo: "creditos", valor: 240 }], id: "intro-emprend" },
      { nombre: "Economía y finanzas públicas", creditos: 10, area: "ECONOMÍA", requisitos: ["intro-micro", "eco-descriptiva"], id: "eco-fin-pub" },
      { nombre: "Historia Económica del Uruguay", creditos: 10, area: "CIENCIAS SOCIALES Y HUMANÍSTICAS", requisitos: [{ tipo: "creditos_area", area: "ECONOMÍA", valor: 30 }], id: "hist-eco-uy" },
      { nombre: "Métodos Cuantitativos en Decisiones Gerenciales", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: ["mat-financiera", "intro-estadistica", { tipo: "creditos", valor: 160 }], id: "mq-decision" },
      { nombre: "Derecho Digital", creditos: 10, area: "JURÍDICA", requisitos: [{ tipo: "creditos", valor: 150 }, "der-comercial", "der-societario"], id: "der-digital" },
      { nombre: "Modelos de Comportamiento Estratégico", creditos: 10, area: "MÉTODOS CUANTITATIVOS", requisitos: ["intro-estadistica"], id: "modelos-comp-est" }
    ]
  },
  "7": {
    "obligatorias": [
      { nombre: "Auditoría 1", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [{ tipo: "creditos", valor: 160 }, "der-societario", "leg-laboral", "control-interno", "contab-superior1"], id: "auditoria1" },
      { nombre: "Tributaria 2", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["tributaria1"], id: "tributaria2" },
      { nombre: "Finanzas corporativas", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["adm-gestion1", "mat-financiera", "intro-estadistica", { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 40 }, { tipo: "creditos_area", area: "ECONOMÍA", valor: 30 }, { tipo: "creditos", valor: 180 }], id: "finanzas-corp" }
    ],
    "opcionales": [
      { nombre: "Contabilidad Bancaria", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [{ tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 50 }], id: "contab-bancaria" },
      { nombre: "Práctica Profesional Inicial", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 100 }, "tributaria1"], id: "practica-prof-inicial" },
      { nombre: "EFI - Emprendimientos productivos en contexto de encierro", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }], id: "efi-encierro" },
      { nombre: "Contabilidad Superior 2", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-superior1"], id: "contab-superior2" },
      { nombre: "Marketing de Servicios", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["marketing-estrategico"], id: "marketing-servicios" },
      { nombre: "Marketing Digital", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["marketing-estrategico"], id: "marketing-digital" },
      { nombre: "Comportamiento Organizacional", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [{ tipo: "creditos", valor: 170 }], id: "comp-organizacional" },
      { nombre: "Contabilidad Social y Ambiental", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gerencial"], id: "contab-social" },
      { nombre: "Contabilidad Gerencial Avanzada", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gerencial"], id: "contab-ger-avanzada" },
      { nombre: "Blockchain y Contabilidad", creditos: 5, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }, { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 60 }], id: "blockchain-contab" },
      { nombre: "Modelización y Automatización Robótica de Procesos", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }, { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 60 }], id: "modelizacion-robotica" }
    ]
  },
  "8": {
    "obligatorias": [
      { nombre: "Informes profesionales de contador público", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["auditoria1"], id: "informes-prof" },
      { nombre: "Práctica pericial en el ámbito Judicial", creditos: 5, area: "ACTIVIDADES INTEGRADORAS", requisitos: ["contab-superior1", "der-comercial", "der-societario", "etica-ejercicio"], id: "practica-pericial" },
      { nombre: "Gestión financiera del estado", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [{ tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 30 }, { tipo: "creditos_area", area: "ADMINISTRACIÓN", valor: 20 }, { tipo: "creditos_area", area: "JURÍDICA", valor: 15 }, { tipo: "creditos", valor: 180 }], id: "gestion-fin-estado" }
    ],
    "opcionales": [
      { nombre: "Contabilidades Especiales", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [{ tipo: "creditos", valor: 270 }, "contab-superior1", "auditoria1"], id: "contab-especiales" },
      { nombre: "Costos y Gestión de Actividades", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gerencial"], id: "costos-gestion" },
      { nombre: "Tributaria III", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["der-tributario", "tributaria1", "tributaria2"], id: "tributaria3" },
      { nombre: "Auditoría Interna", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["control-interno", "auditoria1"], id: "auditoria-interna" },
      { nombre: "Logística y Cadena de Suministros", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: ["contab-gerencial"], id: "logistica" },
      { nombre: "Contabilidad en Sistemas Integrados de Gestión (SIG/ERP)", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }, { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 60 }], id: "contab-sig" },
      { nombre: "Información Analítica para la Gestión", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: [{ tipo: "creditos", valor: 180 }, { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 60 }], id: "info-analitica" },
      { nombre: "EFI: CCEEmprende", creditos: 10, area: "ACTIVIDADES INTEGRADORAS", requisitos: ["adm-gestion1", "mat-financiera", "intro-estadistica", { tipo: "creditos_area", area: "CONTABILIDAD E IMPUESTOS", valor: 40 }, { tipo: "creditos_area", area: "ECONOMÍA", valor: 30 }, { tipo: "creditos", valor: 180 }], id: "efi-cceemprende" },
      { nombre: "Mercados Financieros", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["finanzas-corp", { tipo: "creditos", valor: 270 }], id: "mercados-fin" },
      { nombre: "Proyectos de Inversión", creditos: 10, area: "ADMINISTRACIÓN", requisitos: ["finanzas-corp", { tipo: "creditos_area", area: "ECONOMÍA", valor: 30 }, { tipo: "creditos", valor: 270 }], id: "proyectos-inv" },
      { nombre: "Economía y Gestión de Organizaciones de Salud", creditos: 10, area: "ADMINISTRACIÓN", requisitos: [{ tipo: "creditos_area", area: "ADMINISTRACIÓN", valor: 20 }, { tipo: "creditos", valor: 100 }], id: "eco-gestion-salud" },
      { nombre: "Auditoría de Sistemas de Información", creditos: 10, area: "CONTABILIDAD E IMPUESTOS", requisitos: [], id: "auditoria-sistemas" }
    ]
  }
};

// ------- UTILIDADES DE LOCALSTORAGE --------
function getEstado() {
  return JSON.parse(localStorage.getItem("estado-materias")) || {};
}
function setEstado(obj) {
  localStorage.setItem("estado-materias", JSON.stringify(obj));
}

// --------- FUNCIONES DE UI Y LÓGICA ---------
function renderMalla() {
  const malla = document.getElementById("malla-grid");
  malla.innerHTML = "";
  for (let fila = 0; fila < 2; fila++) {
    const row = document.createElement("div");
    row.className = "semestres-row";
    for (let s = 1 + fila * 4; s <= 4 + fila * 4; s++) {
      const semBox = document.createElement("div");
      semBox.className = "semestre-box";
      // Título semestre
      const titulo = document.createElement("div");
      titulo.className = "semestre-titulo";
      titulo.innerText = `Semestre ${s}`;
      semBox.appendChild(titulo);

      // Obligatorias y opcionales
      ["obligatorias", "opcionales"].forEach(tipo => {
        const seccion = document.createElement("div");
        seccion.className = "materias-seccion";
        // Subtitulo
        const subtitulo = document.createElement("div");
        subtitulo.className = "seccion-titulo";
        subtitulo.innerText = tipo === "obligatorias" ? "Obligatorias" : "Opcionales";
        seccion.appendChild(subtitulo);

        const lista = document.createElement("div");
        lista.className = "materias-lista";
        (materiasPorSemestre[s] && materiasPorSemestre[s][tipo] || []).forEach(materia => {
          lista.appendChild(renderMateria(materia));
        });
        seccion.appendChild(lista);
        semBox.appendChild(seccion);
      });

      row.appendChild(semBox);
    }
    malla.appendChild(row);
  }
}

function renderMateria(materia) {
  const estado = getEstado();
  const div = document.createElement("div");
  div.className = "materia-item";
  div.id = `mat-${materia.id}`;

  // Estado: tachada, bloqueada
  const tacha = estado[materia.id] && estado[materia.id].t;
  const bloqueada = !cumpleRequisitos(materia);
  if (tacha) div.classList.add("tachada");
  if (bloqueada && !tacha) div.classList.add("bloqueada");

  // Info
  const info = document.createElement("div");
  info.className = "materia-info";
  info.innerHTML = `<span class="materia-nombre">${materia.nombre}</span>
    <span class="materia-area">${materia.area}</span>`;
  div.appendChild(info);

  // Créditos
  const cr = document.createElement("span");
  cr.className = "materia-credito";
  cr.innerText = `${materia.creditos} créditos`;
  div.appendChild(cr);

  // Click: solo si desbloqueada o tachada (para destachar)
  div.addEventListener("click", (e) => {
    e.preventDefault();
    if (bloqueada && !tacha) return;
    let nuevoEstado = getEstado();
    nuevoEstado[materia.id] = { t: !tacha };
    setEstado(nuevoEstado);
    renderTodo();
  });

  // Tooltip requisitos
  if (materia.requisitos.length) {
    let reqs = materia.requisitos.map(r => {
      if (typeof r === "string") return getMateriaNombre(r);
      if (r.tipo === "creditos") return `${r.valor} créditos aprobados`;
      if (r.tipo === "creditos_area") return `${r.valor} créditos en ${r.area}`;
      return "";
    });
    div.title = "Requisitos: " + reqs.join(", ");
  }

  return div;
}

function getMateriaNombre(id) {
  for (let s in materiasPorSemestre) {
    for (let tipo of ["obligatorias", "opcionales"]) {
      let mat = (materiasPorSemestre[s][tipo] || []).find(m => m.id === id);
      if (mat) return mat.nombre;
    }
  }
  return id;
}

// ------- LOGICA DE REQUISITOS -------
function cumpleRequisitos(materia) {
  const estado = getEstado();
  // Requisitos por materia
  if (materia.requisitos && materia.requisitos.length) {
    for (let req of materia.requisitos) {
      if (typeof req === "string") {
        if (!estado[req] || !estado[req].t) return false;
      } else if (req.tipo === "creditos") {
        if (calcularCreditos().total < req.valor) return false;
      } else if (req.tipo === "creditos_area") {
        if (calcularCreditos()[req.area] < req.valor) return false;
      }
    }
  }
  return true;
}

// -------- CREDITOS ---------
function calcularCreditos() {
  const estado = getEstado();
  const conteo = {
    "ECONOMÍA": 0,
    "MÉTODOS CUANTITATIVOS": 0,
    "CONTABILIDAD E IMPUESTOS": 0,
    "CIENCIAS SOCIALES Y HUMANÍSTICAS": 0,
    "JURÍDICA": 0,
    "ACTIVIDADES INTEGRADORAS": 0,
    "ADMINISTRACIÓN": 0,
    total: 0
  };
  for (let s in materiasPorSemestre) {
    for (let tipo of ["obligatorias", "opcionales"]) {
      for (let m of (materiasPorSemestre[s][tipo] || [])) {
        if (estado[m.id] && estado[m.id].t) {
          conteo[m.area] += m.creditos;
          conteo.total += m.creditos;
        }
      }
    }
  }
  return conteo;
}

function renderCreditos() {
  const c = calcularCreditos();
  document.getElementById("c-economia").innerText = c["ECONOMÍA"];
  document.getElementById("c-metodos").innerText = c["MÉTODOS CUANTITATIVOS"];
  document.getElementById("c-contabilidad").innerText = c["CONTABILIDAD E IMPUESTOS"];
  document.getElementById("c-sociales").innerText = c["CIENCIAS SOCIALES Y HUMANÍSTICAS"];
  document.getElementById("c-juridica").innerText = c["JURÍDICA"];
  document.getElementById("c-integradoras").innerText 
