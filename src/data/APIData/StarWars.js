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

                return bYear - aYear;
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

                return aYear - bYear;
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
      fields: [
        {
          name: "Nombre",
          desc: "Nombre del planeta",
          sortable: true,
          customSort: null,
          jsonTag: "name",
        },
        {
          name: "Poblacion",
          desc: "Poblacion del planeta de seres sintientes",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aPopulation = Number(a);
                const bPopulation = Number(b);

                return aPopulation - bPopulation;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aPopulation = Number(a);
                const bPopulation = Number(b);

                return bPopulation - aPopulation;
              }
            },
          },
          jsonTag: "population",
        },
        {
          name: "Diametro (km)",
          desc: "Diametro del planeta en kilometros",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aDiameter = Number(a);
                const bDiameter = Number(b);

                return aDiameter - bDiameter;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aDiameter = Number(a);
                const bDiameter = Number(b);

                return bDiameter - aDiameter;
              }
            },
          },
          jsonTag: "diameter",
        },
        {
          name: "Clima",
          desc: "Clima del planeta",
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
          jsonTag: "climate",
        },
        {
          name: "Terreno",
          desc: "Terreno del planeta",
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
          jsonTag: "terrain",
        },
        {
          name: "Rotacion (horas)",
          desc: "Tiempo de rotacion del planeta en horas",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aRotation = Number(a);
                const bRotation = Number(b);

                return aRotation - bRotation;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else {
                const aRotation = Number(a);
                const bRotation = Number(b);

                return bRotation - aRotation;
              }
            },
          },
          jsonTag: "rotation_period",
        },
      ],
      enabled: true,
    },
    {
      name: "Especies",
      endpoint: "https://swapi.dev/api/species/",
      fields: [
        {
          name: "Nombre",
          desc: "Nombre de la especie",
          sortable: true,
          customSort: null,
          jsonTag: "name",
        },
        {
          name: "Lenguaje",
          desc: "Lenguaje más comun de la especie",
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
          jsonTag: "language",
        },
        {
          name: "Clasificacion",
          desc: "Clasificacion de la especie",
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
          jsonTag: "classification",
        },
        {
          name: "Promedio de vida (años)",
          desc: "Promedio de vida de la especie en años",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "indefinite") {
                return 1;
              } else if (b === "indefinite") {
                return -1;
              } else {
                const aAverage = Number(a);
                const bAverage = Number(b);

                return aAverage - bAverage;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "indefinite") {
                return -1;
              } else if (b === "indefinite") {
                return 1;
              } else {
                const aAverage = Number(a);
                const bAverage = Number(b);

                return bAverage - aAverage;
              }
            },
          },
          jsonTag: "average_lifespan",
        },
      ],
      enabled: true,
    },
    {
      name: "Naves",
      endpoint: "https://swapi.dev/api/starships/",
      fields: [
        {
          name: "Nombre",
          desc: "Nombre de la nave",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              return a.localeCompare(b);
            },
            descending: (a, b) => {
              return b.localeCompare(a);
            },
          },
          jsonTag: "name",
        },
        {
          name: "Modelo",
          desc: "Modelo de la nave",
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
          jsonTag: "model",
        },
        {
          name: "Clase",
          desc: "Tipo de la nave",
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
          jsonTag: "starship_class",
        },
        {
          name: "Fabricante",
          desc: "Fabricante de la nave",
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
          jsonTag: "manufacturer",
        },
        {
          name: "Costo (creditos)",
          desc: "Costo de la nave en creditos galacticos",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return 1;
              } else if (b === "n/a") {
                return -1;
              } else {
                const aCost = Number(a);
                const bCost = Number(b);

                return aCost - bCost;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return -1;
              } else if (b === "n/a") {
                return 1;
              } else {
                const aCost = Number(a);
                const bCost = Number(b);

                return bCost - aCost;
              }
            },
          },
          jsonTag: "cost_in_credits",
        },
        {
          name: "Tripulacion",
          desc: "Cantidad de tripulacion de la nave (Gente escencial)",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return 1;
              } else if (b === "n/a") {
                return -1;
              } else {
                const aHasRange = a.indexOf("-");
                const bHasRange = b.indexOf("-");

                const aCrew = Number(
                  (aHasRange === -1 ? a : a.slice(0, aHasRange)).replace(
                    ",",
                    ""
                  )
                );
                const bCrew = Number(
                  (bHasRange === -1 ? b : b.slice(0, bHasRange)).replace(
                    ",",
                    ""
                  )
                );

                return aCrew - bCrew;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return -1;
              } else if (b === "n/a") {
                return 1;
              } else {
                const aHasRange = a.indexOf("-");
                const bHasRange = b.indexOf("-");

                const aCrew = Number(
                  (aHasRange === -1 ? a : a.slice(0, aHasRange)).replace(
                    ",",
                    ""
                  )
                );
                const bCrew = Number(
                  (bHasRange === -1 ? b : b.slice(0, bHasRange)).replace(
                    ",",
                    ""
                  )
                );

                return bCrew - aCrew;
              }
            },
          },
          jsonTag: "crew",
        },
        {
          name: "Pasajeros",
          desc: "Cantidad de pasajeros de la nave (Gente no escencial)",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return 1;
              } else if (b === "n/a") {
                return -1;
              } else {
                const aPassengers = Number(a.replace(",", ""));
                const bPassengers = Number(b.replace(",", ""));

                return aPassengers - bPassengers;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return -1;
              } else if (b === "n/a") {
                return 1;
              } else {
                const aPassengers = Number(a.replace(",", ""));
                const bPassengers = Number(b.replace(",", ""));

                return bPassengers - aPassengers;
              }
            },
          },
          jsonTag: "passengers",
        },
      ],
      enabled: true,
    },
    {
      name: "Vehiculos",
      endpoint: "https://swapi.dev/api/vehicles/",
      fields: [
        {
          name: "Nombre",
          desc: "Nombre del vehiculo",
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
          jsonTag: "name",
        },
        {
          name: "Modelo",
          desc: "Modelo del vehiculo",
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
          jsonTag: "model",
        },
        {
          name: "Clase",
          desc: "Clase del vehiculo",
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
          jsonTag: "vehicle_class",
        },
        {
          name: "Fabricante",
          desc: "Fabricante del vehiculo",
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
          jsonTag: "manufacturer",
        },
        {
          name: "Costo (creditos)",
          desc: "Costo del vehiculo en creditos galacticos",
          sortable: true,
          customSort: {
            ascending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return 1;
              } else if (b === "n/a") {
                return -1;
              } else {
                const aCost = Number(a.replace(",", ""));
                const bCost = Number(b.replace(",", ""));

                return aCost - bCost;
              }
            },
            descending: (a, b) => {
              if (a === "unknown") {
                return 1;
              } else if (b === "unknown") {
                return -1;
              } else if (a === "n/a") {
                return -1;
              } else if (b === "n/a") {
                return 1;
              } else {
                const aCost = Number(a.replace(",", ""));
                const bCost = Number(b.replace(",", ""));

                return bCost - aCost;
              }
            },
          },
          jsonTag: "cost_in_credits",
        },
      ],
      enabled: true,
    },
  ],
};
