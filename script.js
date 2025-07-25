// Definición de la malla curricular
const malla = [
  // SEMESTRES 1-4
  {
    semestre: 1,
    obligatorias: [
      {
        id: "conceptos-contables",
        nombre: "Conceptos contables",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: []
      },
      {
        id: "admin-gestion-1",
        nombre: "Administración y Gestión de las organizaciones 1",
        creditos: 10,
        area: "Administración",
        requisitos: []
      },
      {
        id: "microeconomia",
        nombre: "Introducción a la microeconomía",
        creditos: 10,
        area: "Economía",
        requisitos: []
      },
      {
        id: "calculo-1",
        nombre: "Cálculo 1",
        creditos: 10,
        area: "Métodos cuantitativos",
        requisitos: []
      },
    ],
    opcionales: []
  },
  {
    semestre: 2,
    obligatorias: [
      {
        id: "contabilidad-1",
        nombre: "Contabilidad General 1",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["conceptos-contables"]
      },
      {
        id: "derecho-civil",
        nombre: "Derecho Civil",
        creditos: 10,
        area: "Jurídica",
        requisitos: []
      },
      {
        id: "economia-descriptiva",
        nombre: "Economía descriptiva",
        creditos: 10,
        area: "Economía",
        requisitos: []
      },
    ],
    opcionales: [
      {
        id: "admin-gestion-2",
        nombre: "Administración y Gestión de las organizaciones 2",
        creditos: 10,
        area: "Administración",
        requisitos: ["admin-gestion-1"]
      },
      {
        id: "ciencia-politica",
        nombre: "Ciencia Política",
        creditos: 10,
        area: "Ciencias Sociales y Humanísticas",
        requisitos: []
      },
      {
        id: "desarrollo-bienestar",
        nombre: "Desarrollo y Bienestar",
        creditos: 10,
        area: "Ciencias Sociales y Humanísticas",
        requisitos: []
      },
      {
        id: "algebra-lineal",
        nombre: "Álgebra lineal",
        creditos: 10,
        area: "Métodos cuantitativos",
        requisitos: []
      }
    ]
  },
  {
    semestre: 3,
    obligatorias: [
      {
        id: "estadistica",
        nombre: "Introducción a la estadística",
        creditos: 10,
        area: "Métodos cuantitativos",
        requisitos: ["calculo-1"]
      },
      {
        id: "contabilidad-2",
        nombre: "Contabilidad General 2",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["contabilidad-1"]
      },
      {
        id: "derecho-comercial",
        nombre: "Derecho Comercial",
        creditos: 10,
        area: "Jurídica",
        requisitos: ["derecho-civil"]
      },
      {
        id: "procesos-sistemas",
        nombre: "Procesos y Sistemas de información",
        creditos: 10,
        area: "Administración",
        requisitos: ["admin-gestion-1"]
      }
    ],
    opcionales: [
      {
        id: "macroeconomia-1",
        nombre: "Macroeconomía 1",
        creditos: 10,
        area: "Economía",
        requisitos: ["microeconomia"]
      },
      {
        id: "taller-investigacion",
        nombre: "Taller de iniciación a la investigación",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [{type: "creditos", total: 40}]
      }
    ]
  },
  {
    semestre: 4,
    obligatorias: [
      {
        id: "contabilidad-3",
        nombre: "Contabilidad General 3",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["contabilidad-2"]
      },
      {
        id: "matematica-financiera",
        nombre: "Matemática financiera",
        creditos: 10,
        area: "Métodos cuantitativos",
        requisitos: ["calculo-1"]
      },
      {
        id: "legislacion-laboral",
        nombre: "Legislación laboral y seguridad social",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["conceptos-contables", "derecho-civil"]
      },
      {
        id: "derecho-societario",
        nombre: "Derecho societario",
        creditos: 10,
        area: "Jurídica",
        requisitos: ["derecho-civil"]
      }
    ],
    opcionales: [
      {
        id: "eco-circular",
        nombre: "Economía Circular",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [{type: "creditos", total: 100}]
      },
      {
        id: "admin-rrhh",
        nombre: "Administración de Recursos humanos",
        creditos: 10,
        area: "Administración",
        requisitos: ["admin-gestion-2"]
      },
      {
        id: "sis-info",
        nombre: "Sistemas de información",
        creditos: 10,
        area: "Administración",
        requisitos: ["admin-gestion-1", "contabilidad-1"]
      },
      {
        id: "soc-empresa",
        nombre: "Sociología de la empresa y Management",
        creditos: 10,
        area: "Ciencias Sociales y Humanísticas",
        requisitos: [
          {type: "creditos", total: 80},
          {type: "o", ids: ["admin-gestion-1", "microeconomia"]}
        ]
      },
      {
        id: "soc-contemporanea",
        nombre: "Sociología contemporánea",
        creditos: 10,
        area: "Ciencias Sociales y Humanísticas",
        requisitos: []
      },
      {
        id: "soc-economica",
        nombre: "Sociología económica",
        creditos: 10,
        area: "Ciencias Sociales y Humanísticas",
        requisitos: []
      }
    ]
  },
  // SEMESTRES 5-8
  {
    semestre: 5,
    obligatorias: [
      {
        id: "costos",
        nombre: "Modelos y sistemas de costos",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["contabilidad-3"]
      },
      {
        id: "derecho-tributario",
        nombre: "Derecho tributario",
        creditos: 10,
        area: "Jurídica",
        requisitos: [{type: "creditos-area", area: "Jurídica", total: 10}]
      },
      {
        id: "etica-ejercicio",
        nombre: "Ética y ejercicio profesional",
        creditos: 5,
        area: "Actividades integradoras",
        requisitos: ["contabilidad-2", "derecho-comercial"]
      }
    ],
    opcionales: [
      {
        id: "efi-microcecea",
        nombre: "EFI Microcecea",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [{type: "creditos", total: 180}]
      },
      {
        id: "taller-etica",
        nombre: "Taller de ética y responsabilidad social",
        creditos: 5,
        area: "Actividades integradoras",
        requisitos: ["procesos-sistemas", "costos"]
      },
      {
        id: "efi-coop",
        nombre: "EFI: Cooperativas de trabajo y colectivos autogestionados",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [{type: "creditos", total: 180}]
      },
      {
        id: "seguros-vida",
        nombre: "Seguros de vida",
        creditos: 10,
        area: "Métodos cuantitativos",
        requisitos: ["matematica-financiera", "estadistica"]
      },
      {
        id: "marketing-basico",
        nombre: "Marketing Básico",
        creditos: 10,
        area: "Administración",
        requisitos: []
      },
      {
        id: "analisis-datos",
        nombre: "Análisis de datos en administración",
        creditos: 10,
        area: "Métodos cuantitativos",
        requisitos: ["estadistica"]
      }
    ]
  },
  {
    semestre: 6,
    obligatorias: [
      {
        id: "contabilidad-superior-1",
        nombre: "Contabilidad superior 1",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: [{type: "creditos-area", area: "Contabilidad e impuestos", total: 50}]
      },
      {
        id: "control-interno",
        nombre: "Control interno",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["procesos-sistemas", {type: "creditos-area", area: "Contabilidad e impuestos", total: 40}]
      },
      {
        id: "contabilidad-gerencial",
        nombre: "Contabilidad Gerencial",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: [
          {type: "creditos", total: 160},
          "costos", "matematica-financiera"
        ]
      },
      {
        id: "tributaria-1",
        nombre: "Tributaria 1",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["contabilidad-3", "derecho-tributario"]
      }
    ],
    opcionales: [
      {
        id: "contabilidad-instituciones",
        nombre: "Contabilidad de instituciones financieras no bancarias",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: [
          {type: "creditos", total: 160},
          "contabilidad-3",
          "derecho-comercial"
        ]
      },
      {
        id: "derecho-publico",
        nombre: "Derecho Público",
        creditos: 10,
        area: "Jurídica",
        requisitos: []
      },
      {
        id: "efi-costos-gestion",
        nombre: "EFI - Costos para la Gestión de Emprendimientos Sociales y Comunitarios",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: ["contabilidad-gerencial"]
      },
      {
        id: "marketing-estrategico",
        nombre: "Marketing Estratégico",
        creditos: 10,
        area: "Administración",
        requisitos: ["marketing-basico"]
      },
      {
        id: "comercio-internacional",
        nombre: "Comercio Internacional",
        creditos: 10,
        area: "Administración",
        requisitos: [
          {type: "creditos-area", area: "Jurídica", total: 15},
          "matematica-financiera",
          "costos"
        ]
      },
      {
        id: "emprendedurismo",
        nombre: "Intro. al emprendedurismo",
        creditos: 10,
        area: "Administración",
        requisitos: [{type: "creditos", total: 240}]
      },
      {
        id: "eco-finanzas-publicas",
        nombre: "Economía y finanzas públicas",
        creditos: 10,
        area: "Economía",
        requisitos: ["microeconomia", "economia-descriptiva"]
      },
      {
        id: "historia-eco-uy",
        nombre: "Historia Económica del Uruguay",
        creditos: 10,
        area: "Ciencias Sociales y Humanísticas",
        requisitos: [
          {type: "creditos-area", area: "Economía", total: 30}
        ]
      },
      {
        id: "metodos-cuantitativos-dec",
        nombre: "Métodos Cuantitativos en Decisiones Gerenciales",
        creditos: 10,
        area: "Métodos Cuantitativos",
        requisitos: [
          "matematica-financiera",
          "estadistica",
          {type: "creditos", total: 160}
        ]
      },
      {
        id: "derecho-digital",
        nombre: "Derecho Digital",
        creditos: 10,
        area: "Jurídica",
        requisitos: [
          {type: "creditos", total: 150},
          "derecho-comercial",
          "derecho-societario"
        ]
      },
      {
        id: "modelos-comportamiento",
        nombre: "Modelos de Comportamiento Estratégico",
        creditos: 10,
        area: "Métodos Cuantitativos",
        requisitos: ["estadistica"]
      }
    ]
  },
  {
    semestre: 7,
    obligatorias: [
      {
        id: "auditoria-1",
        nombre: "Auditoría 1",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: [
          {type: "creditos", total: 160},
          "derecho-societario",
          "legislacion-laboral",
          "control-interno",
          "contabilidad-superior-1"
        ]
      },
      {
        id: "tributaria-2",
        nombre: "Tributaria 2",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["tributaria-1"]
      },
      {
        id: "finanzas-corporativas",
        nombre: "Finanzas corporativas",
        creditos: 10,
        area: "Administración",
        requisitos: [
          "admin-gestion-1",
          "matematica-financiera",
          "estadistica",
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 40},
          {type: "creditos-area", area: "Economía", total: 30},
          {type: "creditos", total: 180}
        ]
      }
    ],
    opcionales: [
      {
        id: "contabilidad-bancaria",
        nombre: "Contabilidad Bancaria",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: [{type: "creditos-area", area: "Contabilidad e impuestos", total: 50}]
      },
      {
        id: "practica-prof-inicial",
        nombre: "Práctica Profesional Inicial",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 100},
          "tributaria-1"
        ]
      },
      {
        id: "efi-encierro",
        nombre: "EFI - Emprendimientos productivos en contexto de encierro",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [{type: "creditos", total: 180}]
      },
      {
        id: "contabilidad-superior-2",
        nombre: "Contabilidad Superior 2",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: ["contabilidad-superior-1"]
      },
      {
        id: "marketing-servicios",
        nombre: "Marketing de Servicios",
        creditos: 10,
        area: "Administración",
        requisitos: ["marketing-estrategico"]
      },
      {
        id: "marketing-digital",
        nombre: "Marketing Digital",
        creditos: 10,
        area: "Administración",
        requisitos: ["marketing-estrategico"]
      },
      {
        id: "comportamiento-org",
        nombre: "Comportamiento Organizacional",
        creditos: 10,
        area: "Administración",
        requisitos: [{type: "creditos", total: 170}]
      },
      {
        id: "contabilidad-social",
        nombre: "Contabilidad Social y Ambiental",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: ["contabilidad-gerencial"]
      },
      {
        id: "contabilidad-gerencial-av",
        nombre: "Contabilidad Gerencial Avanzada",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: ["contabilidad-gerencial"]
      },
      {
        id: "blockchain",
        nombre: "Blockchain y Contabilidad",
        creditos: 5,
        area: "Actividades integradoras",
        requisitos: [
          {type: "creditos", total: 180},
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 60}
        ]
      },
      {
        id: "automatizacion-rpa",
        nombre: "Modelización y Automatización Robótica de Procesos",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [
          {type: "creditos", total: 180},
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 60}
        ]
      }
    ]
  },
  {
    semestre: 8,
    obligatorias: [
      {
        id: "informes-profesionales",
        nombre: "Informes profesionales de contador público",
        creditos: 10,
        area: "Contabilidad e impuestos",
        requisitos: ["auditoria-1"]
      },
      {
        id: "practica-pericial",
        nombre: "Práctica pericial en el ámbito Judicial",
        creditos: 5,
        area: "Actividades integradoras",
        requisitos: [
          "contabilidad-superior-1",
          "derecho-comercial",
          "derecho-societario",
          "etica-ejercicio"
        ]
      },
      {
        id: "gestion-financiera-estado",
        nombre: "Gestión financiera del estado",
        creditos: 10,
        area: "Administración",
        requisitos: [
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 30},
          {type: "creditos-area", area: "Administración", total: 20},
          {type: "creditos-area", area: "Jurídica", total: 15},
          {type: "creditos", total: 180}
        ]
      }
    ],
    opcionales: [
      {
        id: "contabilidades-especiales",
        nombre: "Contabilidades Especiales",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: [
          {type: "creditos", total: 270},
          "contabilidad-superior-1",
          "auditoria-1"
        ]
      },
      {
        id: "costos-gestion-actividades",
        nombre: "Costos y Gestión de Actividades",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: [{type: "o", ids: ["contabilidad-gerencial", "costos"]}]
      },
      {
        id: "tributaria-3",
        nombre: "Tributaria III",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: ["derecho-tributario", "tributaria-1", "tributaria-2"]
      },
      {
        id: "auditoria-interna",
        nombre: "Auditoría Interna",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: ["control-interno", "auditoria-1"]
      },
      {
        id: "logistica-cadena",
        nombre: "Logística y Cadena de Suministros",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: ["contabilidad-gerencial"]
      },
      {
        id: "contabilidad-sig",
        nombre: "Contabilidad en Sistemas Integrados de Gestión (SIG/ERP)",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [
          {type: "creditos", total: 180},
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 60}
        ]
      },
      {
        id: "info-analitica-gestion",
        nombre: "Información Analítica para la Gestión",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [
          {type: "creditos", total: 180},
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 60}
        ]
      },
      {
        id: "efi-cceemprende",
        nombre: "EFI: CCEEmprende",
        creditos: 10,
        area: "Actividades integradoras",
        requisitos: [
          "admin-gestion-1",
          "matematica-financiera",
          "estadistica",
          {type: "creditos-area", area: "Contabilidad e impuestos", total: 40},
          {type: "creditos-area", area: "Economía", total: 30},
          {type: "creditos", total: 180}
        ]
      },
      {
        id: "mercados-financieros",
        nombre: "Mercados Financieros",
        creditos: 10,
        area: "Administración",
        requisitos: ["finanzas-corporativas", {type: "creditos", total: 270}]
      },
      {
        id: "proyectos-inversion",
        nombre: "Proyectos de Inversión",
        creditos: 10,
        area: "Administración",
        requisitos: [
          "finanzas-corporativas",
          {type: "creditos-area", area: "Economía", total: 30},
          {type: "creditos", total: 270}
        ]
      },
      {
        id: "eco-gestion-salud",
        nombre: "Economía y Gestión de Organizaciones de Salud",
        creditos: 10,
        area: "Administración",
        requisitos: [
          {type: "creditos-area", area: "Administración", total: 20},
          {type: "creditos", total: 100}
        ]
      },
      {
        id: "auditoria-sistemas-info",
        nombre: "Auditoría de Sistemas de Información",
        creditos: 10,
        area: "Contabilidad e Impuestos",
        requisitos: []
      }
    ]
  }
];

// Estado del usuario: materias tachadas
let estado = {};
// Cargar estado desde localStorage
if (localStorage.getItem("mallaEstadoCP")) {
  estado = JSON.parse(localStorage.getItem("mallaEstadoCP"));
}

// Función para calcular créditos por área y totales
function calcularCreditos(tachadas = estado) {
  let creditos = 0;
  let areas = {};
  malla.forEach(sem => {
    ["obligatorias", "opcionales"].forEach(tipo => {
      sem[tipo].forEach(m => {
        if (tachadas[m.id]) {
          creditos += m.creditos;
          if (!areas[m.area]) areas[m.area] = 0;
          areas[m.area] += m.creditos;
     
