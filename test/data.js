// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data =[
  { num: "001", name: "bulbasaur", 
    type: ["grass", "poison"],basePromedio:119, stats: {"base-attack": 118, "base-defense": 111,"base-stamina": 128, }},
  { num: "002", name: "ivysaur", 
    type: ["grass","poison"],basePromedio: 149.66666666666666, stats: {"base-attack": 151, "base-defense": 143,"base-stamina": 155,}},
  { num: "003", name: "venusaur", 
    type: ["grass", "poison"],basePromedio:192.33333333333334, stats: { "base-attack": 198,"base-defense": 189,"base-stamina": 190,  }},
];

export const resultadoEsperadoMayor = [
  {
    num: "003",
    name: "venusaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 198, "base-defense": 189, "base-stamina": 190 },
    basePromedio: 192.33333333333334
  },
  {
    num: "002",
    name: "ivysaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 151, "base-defense": 143, "base-stamina": 155 },
    basePromedio: 149.66666666666666
  },
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 118, "base-defense": 111, "base-stamina": 128 },
    basePromedio: 119
  }
];

export const resultadoEsperadoMenor = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 118, "base-defense": 111, "base-stamina": 128 },
    basePromedio: 119
  },
  {
    num: "002",
    name: "ivysaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 151, "base-defense": 143, "base-stamina": 155 },
    basePromedio: 149.66666666666666
  },
  {
    num: "003",
    name: "venusaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 198, "base-defense": 189, "base-stamina": 190 },
    basePromedio: 192.33333333333334
  }
];

export const resultadoEsperadoIntermedio =[
  {
    num: "002",
    name: "ivysaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 151, "base-defense": 143, "base-stamina": 155 },
    basePromedio: 149.66666666666666
  },
  {
    num: "003",
    name: "venusaur",
    type: ["grass", "poison"],
    stats: { "base-attack": 198, "base-defense": 189, "base-stamina": 190 },
    basePromedio: 192.33333333333334
  }
];


export const dataType = {
  pokemon: [
    {
      name: "bulbasaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.69",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "25",
            "next-evolution": [
              {
                num: "003",
                name: "venusaur",
                "candy-cost": "100",
              },
            ],
          },
        ],
      },
    },
    {
      name: "ivysaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/002.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.042",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "next-evolution": [
          {
            num: "003",
            name: "venusaur",
            "candy-cost": "100",
          },
        ],
        "prev-evolution": [
          {
            num: "001",
            name: "bulbasaur",
            "candy-cost": "25",
          },
        ],
      },
    },
    {
      name: "venusaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      img: "https://www.serebii.net/pokemongo/pokemon/003.png",
      type: ["grass", "poison"],
      "spawn-chance": "0.017",
      resistant: ["water", "electric", "grass", "fighting", "fairy"],
      weaknesses: ["fire", "ice", "flying", "psychic"],
      evolution: {
        candy: "bulbasaur candy",
        "prev-evolution": [
          {
            num: "002",
            name: "ivysaur",
            "candy-cost": "100",
            "prev-evolution": [
              {
                num: "001",
                name: "bulbasaur",
                "candy-cost": "25",
              },
            ],
          },
        ],
      },
    },
  ],
};

export const ascendente = {
  name: ["bulbasaur", "ivysaur", "venusaur"]
};

export const descendente = {
  name: [ "venusaur","ivysaur","bulbasaur",  ]
};

