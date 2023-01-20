export const data = {
  apiName: "Pokemon",
  resultsField: "results",
  continueField: null,
  endpoints: [
    {
      name: "Pokemons Aleatorios",
      endpoint: "https://pokeapi.co/api/v2/pokemon/",
      fields: [
        {
          name: "Nombre",
          desc: "Nombre del pokemon",
          sortable: true,
          customSort: null,
          jsonTag: "name",
        },
        {
          name: "ID",
          desc: "ID del pokemon",
          sortable: true,
          customSort: null,
          jsonTag: "id",
        },
        {
          name: "Habilidades",
          desc: "Habilidades del pokemon",
          sortable: false,
          customSort: null,
          jsonTag: "abilities",
          containerData: (data) => {
            const labels = data.map((item) => {
              return item.ability.name;
            });

            return labels;
          },
          blockFilter: true,
        },
        {
          name: "Altura (dm)",
          desc: "Altura del pokemon en decímetros",
          sortable: true,
          customSort: null,
          jsonTag: "height",
        },
        {
          name: "Peso (hg)",
          desc: "Peso del pokemon en hectogramos",
          sortable: true,
          customSort: null,
          jsonTag: "weight",
        },
        {
          name: "Juegos",
          desc: "Juegos en los que aparece el pokemon",
          sortable: false,
          customSort: null,
          jsonTag: "game_indices",
          containerData: (data) => {
            const labels = data.map((item) => {
              return item.version.name;
            });

            return labels;
          },
          blockFilter: true,
        },
      ],
      enabled: true,
      isRandom: true,
      randomField: "count",
      randomEntries: 10,
      randomQuery: "?limit=",
    },
    {
      name: "Lugares Aleatorios",
      endpoint: "https://pokeapi.co/api/v2/location/",
      fields: [
        {
          name: "Nombre",
          desc: "Nombre del lugar",
          sortable: true,
          customSort: null,
          jsonTag: "name",
        },
        {
          name: "Region",
          desc: "Region del lugar",
          sortable: false,
          customSort: null,
          jsonTag: "region",
          containerData: (data) => {
            return data.name;
          },
          blockFilter: true,
        },
        {
          name: "Juegos",
          desc: "Juegos en los que aparece el lugar",
          sortable: false,
          customSort: null,
          jsonTag: "game_indices",
          containerData: (data) => {
            const labels = data.map((item) => {
              return item.generation.name;
            });

            return labels;
          },
          blockFilter: true,
        },
      ],
      enabled: true,
      isRandom: true,
      randomField: "count",
      randomEntries: 10,
      randomQuery: "?limit=",
    },
  ],
};
