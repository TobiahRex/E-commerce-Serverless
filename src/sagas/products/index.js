import { call, put } from 'redux-saga/effects';

function* fetchProductById(api, id) {
  const response = yield call (() => {
    console.info('EXAMPLE REQUEST: \napi.fetchProductById(id)')
    return ({
      ok: true,
      error: false,
      body: {
        id: new Buffer('fruity_bamm_bamm', 'utf8').toString('base64'),
        title: 'Fruity Bamm-Bamm',
        price: '30',
        nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
        imageUrl: '../images/nj2jp_juice_card_fbb.png',
        routeTag: 'fruity_bamm_bamm',
      },
    });
  });

}
