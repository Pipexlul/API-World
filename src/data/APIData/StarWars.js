export const data = {
  apiName: "Star Wars",
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
        },
        {
          name: "Titulo",
          desc: "Titulo de la pelicula",
          sortable: true,
          customSort: null,
        },
        {
          name: "Director",
          desc: "Nombre del director de la pelicula",
          sortable: true,
          customSort: null,
        },
        {
          name: "Productor(es)",
          desc: "Nombre de el/los productor(es) de la pelicula",
          sortable: true,
          customSort: null,
        },
        {
          name: "Fecha de estreno",
          desc: "Fecha de estreno de la pelicula en formato Año/Mes/Dia",
          sortable: true,
          customSort: null,
        },
      ],
      enabled: true,
    },
    {
      name: "Personajes",
      endpoint: "https://swapi.dev/api/people/",
      fields: [],
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
