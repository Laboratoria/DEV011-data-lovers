// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data = [
  {
    num: "002",
    name: "ivysaur",
    generation: {
      num: "generation i",
      name: "kanto",
    },
    about:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    img: "https://www.serebii.net/pokemongo/pokemon/002.png",
    size: {
      height: "0.99 m",
      weight: "13.0 kg",
    },
    "pokemon-rarity": "normal",
    type: ["grass", "poison"],
    encounter: {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.1",
    },
    "spawn-chance": "0.042",
    stats: {
      "base-attack": "151",
      "base-defense": "143",
      "base-stamina": "155",
      "max-cp": "1699",
      "max-hp": "134",
    },
    resistant: ["water", "electric", "grass", "fighting", "fairy"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
    "quick-move": [
      {
        name: "razor leaf",
        type: "grass",
        "base-damage": "13",
        energy: "7",
        "move-duration-seg": "1",
      },
      {
        name: "vine whip",
        type: "grass",
        "base-damage": "7",
        energy: "6",
        "move-duration-seg": "0.6",
      },
    ],
    "special-attack": [
      {
        name: "sludge bomb",
        type: "poison",
        "base-damage": "80",
        energy: "-50",
        "move-duration-seg": "2.3",
      },
      {
        name: "solar beam",
        type: "grass",
        "base-damage": "180",
        energy: "-100",
        "move-duration-seg": "4.9",
      },
      {
        name: "power whip",
        type: "grass",
        "base-damage": "90",
        energy: "-50",
        "move-duration-seg": "2.6",
      },
    ],
    egg: "not in eggs",
    "buddy-distance-km": "3",
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
    num: "003",
    name: "venusaur",
    generation: {
      num: "generation i",
      name: "kanto",
    },
    about:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    img: "https://www.serebii.net/pokemongo/pokemon/003.png",
    size: {
      height: "2.01 m",
      weight: "100.0 kg",
    },
    "pokemon-rarity": "normal",
    type: ["grass", "poison"],
    encounter: {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.05",
    },
    "spawn-chance": "0.017",
    stats: {
      "base-attack": "198",
      "base-defense": "189",
      "base-stamina": "190",
      "max-cp": "2720",
      "max-hp": "162",
    },
    resistant: ["water", "electric", "grass", "fighting", "fairy"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
    "quick-move": [
      {
        name: "razor leaf",
        type: "grass",
        "base-damage": "13",
        energy: "7",
        "move-duration-seg": "1",
      },
      {
        name: "vine whip",
        type: "grass",
        "base-damage": "7",
        energy: "6",
        "move-duration-seg": "0.6",
      },
    ],
    "special-attack": [
      {
        name: "sludge bomb",
        type: "poison",
        "base-damage": "80",
        energy: "-50",
        "move-duration-seg": "2.3",
      },
      {
        name: "petal blizzard",
        type: "grass",
        "base-damage": "110",
        energy: "-100",
        "move-duration-seg": "2.6",
      },
      {
        name: "solar beam",
        type: "grass",
        "base-damage": "180",
        energy: "-100",
        "move-duration-seg": "4.9",
      },
    ],
    egg: "not in eggs",
    "buddy-distance-km": "3",
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
  {
    num: "099",
    name: "kingler",
    generation: {
      num: "generation i",
      name: "kanto",
    },
    about:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    img: "https://www.serebii.net/pokemongo/pokemon/099.png",
    size: {
      height: "1.30 m",
      weight: "60.0 kg",
    },
    "pokemon-rarity": "normal",
    type: ["water"],
    encounter: {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.2",
    },
    "spawn-chance": "0.062",
    stats: {
      "base-attack": "240",
      "base-defense": "181",
      "base-stamina": "146",
      "max-cp": "2829",
      "max-hp": "127",
    },
    resistant: ["fire", "water", "ice", "steel"],
    weaknesses: ["electric", "grass"],
    "quick-move": [
      {
        name: "metal claw",
        type: "steel",
        "base-damage": "8",
        energy: "7",
        "move-duration-seg": "0.7",
      },
      {
        name: "bubble",
        type: "water",
        "base-damage": "12",
        energy: "14",
        "move-duration-seg": "1.2",
      },
      {
        name: "mud shot",
        type: "ground",
        "base-damage": "5",
        energy: "7",
        "move-duration-seg": "0.6",
      },
    ],
    "special-attack": [
      {
        name: "vice grip",
        type: "normal",
        "base-damage": "35",
        energy: "-33",
        "move-duration-seg": "1.9",
      },
      {
        name: "x scissor",
        type: "water",
        "base-damage": "50",
        energy: "-100",
        "move-duration-seg": "4.7",
      },
      {
        name: "water pulse",
        type: "water",
        "base-damage": "70",
        energy: "-50",
        "move-duration-seg": "3.2",
      },
    ],
    egg: "not in eggs",
    "buddy-distance-km": "3",
    evolution: {
      candy: "krabby candy",
      "prev-evolution": [
        {
          num: "098",
          name: "krabby",
          "candy-cost": "50",
        },
      ],
    },
  },
];

export const resultFilter = [
  {
    num: "099",
    name: "kingler",
    generation: {
      num: "generation i",
      name: "kanto",
    },
    about:
      "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    img: "https://www.serebii.net/pokemongo/pokemon/099.png",
    size: {
      height: "1.30 m",
      weight: "60.0 kg",
    },
    "pokemon-rarity": "normal",
    type: ["water"],
    encounter: {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.2",
    },
    "spawn-chance": "0.062",
    stats: {
      "base-attack": "240",
      "base-defense": "181",
      "base-stamina": "146",
      "max-cp": "2829",
      "max-hp": "127",
    },
    resistant: ["fire", "water", "ice", "steel"],
    weaknesses: ["electric", "grass"],
    "quick-move": [
      {
        name: "metal claw",
        type: "steel",
        "base-damage": "8",
        energy: "7",
        "move-duration-seg": "0.7",
      },
      {
        name: "bubble",
        type: "water",
        "base-damage": "12",
        energy: "14",
        "move-duration-seg": "1.2",
      },
      {
        name: "mud shot",
        type: "ground",
        "base-damage": "5",
        energy: "7",
        "move-duration-seg": "0.6",
      },
    ],
    "special-attack": [
      {
        name: "vice grip",
        type: "normal",
        "base-damage": "35",
        energy: "-33",
        "move-duration-seg": "1.9",
      },
      {
        name: "x scissor",
        type: "water",
        "base-damage": "50",
        energy: "-100",
        "move-duration-seg": "4.7",
      },
      {
        name: "water pulse",
        type: "water",
        "base-damage": "70",
        energy: "-50",
        "move-duration-seg": "3.2",
      },
    ],
    egg: "not in eggs",
    "buddy-distance-km": "3",
    evolution: {
      candy: "krabby candy",
      "prev-evolution": [
        {
          num: "098",
          name: "krabby",
          "candy-cost": "50",
        },
      ],
    },
  },
];
