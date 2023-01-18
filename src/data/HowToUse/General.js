export const data = {
  sectionName: "General",
  subSections: [
    {
      title: "Selección",
      helperTexts: [
        {
          main: "Comienza seleccionando una API en la sección de abajo",
          hint: "",
        },
        {
          main: "Opcionalmente, puedes limitar el número de resultados que quieres mostrar en la tabla de datos (0 o vacio significa sin limites)",
          hint: "Internamente, se guardan todos los resultados, pero el limitar solo hace que se muestren algunos. Asi que al filtrar u ordenar, esto se hará sobre los datos internos",
        },
        {
          main: "Luego, haz click en una de las secciones que ofrece la API seleccionada y se cargaran los resultados",
          hint: "Hay un limite de 1 solicitud por segundo, asi que no spamees las secciones! (Filtrar y Ordenar no tienen limites)",
        },
      ],
    },
    {
      title: "Filtrar",
      helperTexts: [
        {
          main: "Prueba a filtrar los resultados llenando los campos",
          hint: "Los campos vacios no se tienen en cuenta",
        },
        {
          main: "Un filtro intenta buscar en su campo correspondiente algun resultado que contenga el texto del filtro",
          hint: "No te preocupes por mayusculas o minusculas, se ignoran",
        },
        {
          main: "Si hay mas de un filtro, solo se mostraran los resultados que cumplan con TODOS los filtros usados",
          hint: "",
        },
        {
          main: "Para hacer un filtro, presiona el boton 'Filtrar'. Y para limpiar todo, el boton 'Limpiar Filtros'",
          hint: "",
        },
      ],
    },
    {
      title: "Ordenar",
      helperTexts: [
        {
          main: "Prueba a ordenar los resultados seleccionando en las flechas que aparecen al lado de algun header de la tabla",
          hint: "Los resultados se ordenan de forma ascendente o descendente segun la flecha seleccionada",
        },
        {
          main: "No todos los campos son ordenables",
          hint: "Asi que no te preocupes si no aparecen flechas en todos los headers",
        },
      ],
    },
  ],
};
