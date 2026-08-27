/*
  SHIRT ORDER PRICING
  Customer-facing garment prices below do NOT include printing.
  Print prices are added per shirt.


*/
window.SHIRT_ORDER_CONFIG = {
  currency: "USD",

  // Google Apps Script Web App used to save completed orders.
  googleSheetsUrl: "https://script.google.com/macros/s/AKfycbyHQ3jluQpo1K497Ob4GcgtTpevm1qgZ3n9U7Cmwml_JijkQ9aes516tjPwLSgA3r89eA/exec",
  // Discount codes are validated by Google Apps Script and are not stored publicly.


  products: {
    "Short Sleeve T-Shirt": [
      { brand: "Standard", garmentPrice: 18 }
    ]
  },

  sizes: [
    { name: "Small", upcharge: 0 },
    { name: "Medium", upcharge: 0 },
    { name: "Large", upcharge: 0 },
    { name: "XLarge", upcharge: 0 },
    { name: "2XLarge", upcharge: 2 },
    { name: "3XLarge", upcharge: 2 },
    { name: "4XLarge", upcharge: 2 },
    { name: "5XLarge", upcharge: 2 }
  ],

colorCatalogs: {

  gildanShortSleeve: {
    "Black / Gray": [
      { name: "Black", hex: "#000000" },
      { name: "Blackberry", hex: "#4d4350" },
      { name: "Charcoal", hex: "#787970" },
      { name: "Dark Heather", hex: "#666465" },
      { name: "Graphite Heather", hex: "#a5a5a5" },
      { name: "Gravel", hex: "#b7b8ba" },
      { name: "Ice Grey", hex: "#c4c3cd" },
      { name: "Sport Grey", hex: "#999b9b" },
      { name: "Tweed", hex: "#929496" }
    ],

    "White / Natural / Tan": [
      { name: "White", hex: "#ffffff" },
      { name: "Off White", hex: "#eee8ce" },
      { name: "Natural", hex: "#eee6c8" },
      { name: "Sand", hex: "#c5bcac" },
      { name: "Ash Grey", hex: "#d4d4d4" },
      { name: "Cornsilk", hex: "#eee0a1" }
    ],

    "Blue": [
      { name: "Blue Dusk", hex: "#303b4b" },
      { name: "Carolina Blue", hex: "#829bd4" },
      { name: "Cobalt", hex: "#403798" },
      { name: "Heather Navy", hex: "#323c4a" },
      { name: "Heather Sapphire", hex: "#6190ce" },
      { name: "Indigo Blue", hex: "#456d8e" },
      { name: "Light Blue", hex: "#9aa9d8" },
      { name: "Midnight", hex: "#172831" },
      { name: "Navy", hex: "#252454" },
      { name: "Neon Blue", hex: "#474aa5" },
      { name: "Royal", hex: "#5d5cdc" },
      { name: "Sapphire", hex: "#497ab8" },
      { name: "Sky", hex: "#89a9cb" },
      { name: "Tropical Blue", hex: "#5e9bd0" },
      { name: "Antique Sapphire", hex: "#568ec9" },
      { name: "Aquatic", hex: "#7ea49f" }
    ],

    "Purple": [
      { name: "Purple", hex: "#571c88" },
      { name: "Lilac", hex: "#554584" },
      { name: "Violet", hex: "#b48bdc" },
      { name: "Heather Radiant Orchid", hex: "#bd50cc" }
    ],

    "Pink": [
      { name: "Azalea", hex: "#df6f9b" },
      { name: "Berry", hex: "#aa4168" },
      { name: "Coral Silk", hex: "#df737d" },
      { name: "Dusty Rose", hex: "#dfc1be" },
      { name: "Heliconia", hex: "#d600d8" },
      { name: "Light Pink", hex: "#ead5d6" },
      { name: "Safety Pink", hex: "#c85f86" }
    ],

    "Red / Burgundy": [
      { name: "Cardinal Red", hex: "#b63e4e" },
      { name: "Garnet", hex: "#971313" },
      { name: "Heather Red", hex: "#c24a5e" },
      { name: "Maroon", hex: "#98434b" },
      { name: "Red", hex: "#b71422" },
      { name: "Antique Cherry Red", hex: "#c43f55" }
    ],

    "Orange / Gold / Yellow": [
      { name: "Gold", hex: "#f5db39" },
      { name: "Old Gold", hex: "#d5b46b" },
      { name: "Orange", hex: "#e49a42" },
      { name: "S Orange", hex: "#e5a34d" },
      { name: "Tangerine", hex: "#ea9143" },
      { name: "Tennessee Orange", hex: "#dc9e28" },
      { name: "Texas Orange", hex: "#b6673c" },
      { name: "Yellow Haze", hex: "#e7e6a0" },
      { name: "Daisy", hex: "#f2f36a" },
      { name: "Antique Orange", hex: "#dc765e" },
      { name: "Sunset", hex: "#ad6040" }
    ],

    "Green": [
      { name: "Electric Green", hex: "#77ae4e" },
      { name: "Forest Green", hex: "#244636" },
      { name: "Irish Green", hex: "#337b1c" },
      { name: "Kiwi", hex: "#8fa94a" },
      { name: "Lime", hex: "#b8ef5b" },
      { name: "Military Green", hex: "#656e5e" },
      { name: "Mint Green", hex: "#acd0a4" },
      { name: "Neon Green", hex: "#a6dd62" },
      { name: "Safety Green", hex: "#b7d82e" },
      { name: "Turf Green", hex: "#438b54" },
      { name: "Antique Irish Green", hex: "#52a96f" },
      { name: "Antique Jade Dome", hex: "#4a8b87" },
      { name: "Heather Military Green", hex: "#555a4d" }
    ],

    "Brown": [
      { name: "Brown Savana", hex: "#9e8f82" },
      { name: "Dark Chocolate", hex: "#5f5442" },
      { name: "Russet", hex: "#5d4a56" }
    ]
  }
},

  printLocations: [],

  payments: {
    venmo: {
      label: "Venmo",
      handle: "@Heather-Hess-108",
      url: ""
    },
    cashapp: {
      label: "Cash App",
      handle: "$Hhess1983",
      url: ""
    },
    cash: {
      label: "Cash",
      handle: "",
      url: ""
    }
  }
};
