export default {
  activeViewProduct: {
    id: '',
    images: [
      {
        purpose: '',
        url: '',
      },
    ],
    nicotine_strengths: [''],
    price: '',
    qty: 0,
    routeTag: '',
    strength: 0,
    mainTitle: '',
    title: '',
  },
  popJuices: [
    {
      id: new Buffer('fruity_bamm_bamm', 'utf8').toString('base64'),
      mainTitle: 'Vape Juice',
      title: 'Fruity Bamm-Bamm',
      price: '30',
      nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
      images: [
        {
          purpose: 'card',
          url: '../images/nj2jp_juice_card_fbb.png',
        },
        {
          purpose: 'large',
          url: '../images/nj2jp-fvm.jpg',
        },
      ],
      routeTag: 'fruity_bamm_bamm',
    },
    {
      id: new Buffer('pina_colada', 'utf8').toString('base64'),
      mainTitle: 'Vape Juice',
      title: 'Pina Colada',
      price: '30',
      nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
      images: [{
        purpose: 'card',
        url: '../images/nj2jp_juice_card_pc.png',
      },
      {
        purpose: 'large',
        url: '../images/nj2jp-fvm.jpg',
      }],
      routeTag: 'pina_colada',
    },
    {
      id: new Buffer('strawberries_n_cream', 'utf8').toString('base64'),
      mainTitle: 'Vape Juice',
      title: "Strawberries N' Cream",
      price: '30',
      nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
      images: [{
        purpose: 'card',
        url: '../images/nj2jp_juice_card_pc.png',
      }, {
        purpose: 'large',
        url: '../images/nj2jp-fvm.jpg',
      }],
      routeTag: 'strawberries_n_cream',
    },
    {
      id: new Buffer('keylime_pie', 'utf8').toString('base64'),
      mainTitle: 'Vape Juice',
      title: 'Keylime Pie',
      price: '30',
      nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
      images: [{
        purpose: 'card',
        url: '../images/nj2jp_juice_card_klp.png',
      }, {
        purpose: 'large',
        url: '../images/nj2jp-fvm.jpg',
      }],
      routeTag: 'keylime_pie',
    },
    {
      id: new Buffer('papple_berry', 'utf8').toString('base64'),
      mainTitle: 'Vape Juice',
      title: 'Papple Berry',
      price: '30',
      nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
      images: [{
        purpose: 'card',
        url: '../images/nj2jp_juice_card_klp.png',
      }, {
        purpose: 'large',
        url: '../images/nj2jp-fvm.jpg',
      }],
      routeTag: 'papple_berry',
    },
    {
      id: new Buffer('french_vanilla_mocha', 'utf8').toString('base64'),
      mainTitle: 'Vape Juice',
      title: 'French Vanilla Mocha',
      price: '30',
      nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
      images: [{
        purpose: 'card',
        url: '../images/nj2jp_juice_card_fvm.png',
      }, {
        purpose: 'large',
        url: '../images/nj2jp-fvm.jpg',
      }],
      routeTag: 'french_vanilla_mocha',
    },
  ],
  error: null,
};
