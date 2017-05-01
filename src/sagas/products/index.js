import { call, put, take } from 'redux-saga/effects';
import apiActions from '../../redux/api';
import productActions, { productTypes } from '../../redux/products';

export default function* fetchProductById() {
  while (true) {  //eslint-disable-line
    const { id } = yield take(productTypes.FETCH_PRODUCT_BY_ID);
    const responses = yield [
      put(apiActions.fetching()),
      call(() => {
        console.info(`EXAMPLE REQUEST: \napi.fetchProductById(${id})`) //eslint-disable-line
        return ({
          ok: true,
          error: false,
          body: {
            id: new Buffer('fruity_bamm_bamm', 'utf8').toString('base64'),
            mainTitle: 'Vape Juice',
            title: 'Fruity Bamm-Bamm',
            price: '30',
            images: [{
              purpose: 'card',
              url: '../images/nj2jp_juice_card_fbb.png',
            }, {
              purpose: 'large',
              url: '../images/nj2jp-fvm.jpg',
            }],
            nicotine_strengths: ['2mg', '4mg', '6mg', '8mg'],
            imageUrl: '../images/nj2jp_juice_card_fbb.png',
            routeTag: 'fruity_bamm_bamm',
          },
        });
      }),
    ];
    const response = responses[1];
    if (response.ok) {
      yield [
        put(apiActions.apiSuccess()),
        put(productActions.receivedProductById(response.body)),
      ];
    } else {
      yield put(apiActions.apiFail(response.problem));
    }
  }
}
