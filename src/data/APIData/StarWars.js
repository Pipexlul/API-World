export const data = {
  apiName: "Star Wars",
  resultsField: "results",
  continueField: "next",
  endpoints: [
    {
      name: "Peliculas",
      endpoint: "https://swapi.dev/api/films/",
      fields: [
        {
          name: "Episodio",
          desc: "Número de episodio dentro de la saga",
          sortable: true,
          customSort: null,
          jsonTag: "episode_id",
        },
        {
          name: "Titulo",
          desc: "Titulo de la pelicula",
          sortable: true,
          customSort: null,
          jsonTag: "title",
        },
        {
          name: "Director",
          desc: "Nombre del director de la pelicula",
          sortable: true,
          customSort: null,
          jsonTag: "director",
        },
        {
          name: "Productor(es)",
          desc: "Nombre de el/los productor(es) de la pelicula",
          sortable: true,
          customSort: null,
          jsonTag: "producer",
        },
        {
          name: "Fecha de estreno",
          desc: "Fecha de estreno de la pelicula en formato Año/Mes/Dia",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              const aDate = new Date(a);
              const bDate = new Date(b);

              return aDate - bDate;
            },
            descending: (a, b) => {
              const aDate = new Date(a);
              const bDate = new Date(b);

              return bDate - aDate;
            },
          },
          jsonTag: "release_date",
        },
      ],
      enabled: true,
    },
    {
      name: "Personajes",
      endpoint: "https://swapi.dev/api/people/",
      fields: [
        {
          name: "Nombre",
          desc: "Nombre del personaje",
          sortable: true,
          customSort: null,
          jsonTag: "name",
        },
        {
          name: "Genero",
          desc: "Genero del personaje",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "none" || a === "n/a") {
                return 1;
              } else if (b === "none" || b === "n/a") {
                return -1;
              } else {
                return a.localeCompare(b);
              }
            },
            descending: (a, b) => {
              if (a === "none" || a === "n/a") {
                return 1;
              } else if (b === "none" || b === "n/a") {
                return -1;
              } else {
                return b.localeCompare(a);
              }
            },
          },
          jsonTag: "gender",
        },
        {
          name: "Año de nacimiento",
          desc: "Año de nacimiento del personaje",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aYear = Number(a.replace("BBY", ""));
                const bYear = Number(b.replace("BBY", ""));

                return aYear - bYear;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aYear = Number(a.replace("BBY", ""));
                const bYear = Number(b.replace("BBY", ""));

                return bYear - aYear;
              }
            },
          },
          jsonTag: "birth_year",
        },
        {
          name: "Masa (kg)",
          desc: "Masa del personaje en kilogramos",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aMass = Number(a);
                const bMass = Number(b);

                return aMass - bMass;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aMass = Number(a);
                const bMass = Number(b);

                return bMass - aMass;
              }
            },
          },
          jsonTag: "mass",
        },
        {
          name: "Altura (cm)",
          desc: "Altura del personaje en centimetros",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aHeight = Number(a);
                const bHeight = Number(b);

                return aHeight - bHeight;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aHeight = Number(a);
                const bHeight = Number(b);

                return bHeight - aHeight;
              }
            },
          },
          jsonTag: "height",
        },
        {
          name: "Color de ojos",
          desc: "Color de ojos del personaje",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                return a.localeCompare(b);
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                return b.localeCompare(a);
              }
            },
          },
          jsonTag: "eye_color",
        },
      ],
      enabled: true,
    },
    {
      name: "Planetas",
      endpoint: "https://swapi.dev/api/planets/",
      fields: [],
      enabled: true,
    },
    {
      name: "Especies",
      endpoint: "https://swapi.dev/api/species/",
      fields: [],
      enabled: true,
    },
    {
      name: "Naves",
      endpoint: "https://swapi.dev/api/starships/",
      fields: [],
      enabled: true,
    },
    {
      name: "Vehiculos",
      endpoint: "https://swapi.dev/api/vehicles/",
      fields: [],
      enabled: true,
    },
  ],
};
