import { call, put } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions from '../../redux/products';

function* fetchProductById(api, id) {
  const response = yield [
    put(apiActions.fetching()),
    call (() => {
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
    }),
  ];

  if (response.ok) {
    yield [
      put(apiActions.apiSuccess()),
      put(productActions.receivedProductByid(response.body)),
    ];
  } else {
    yield [
      put(apiActions.apiFail(response.problem)),
      put(productActions.productApiError()),
    ]
  }
}
