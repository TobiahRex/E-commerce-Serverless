
import { create } from 'apisauce';

const createSquareAPI = () => {
  const api = create({
    basURL: 'https://connect.squareup.com/v2',
  });

  const authorizeDelayTransaction  ({ locationId }) => api.post(
    `/locations/${locationId}/transactions`,
    {
      data: {
        "idempotency_key": <GUID>,
          "buyer_email_address": "abc@gmail.com",
          "shipping_address": {
            "address_line_1": "Room no: 1121, 3-21-2",
            "locality": "Shin Yokohama",
            "administrative_district_level_1": "Kanagawa",
            "postal_code": "220033",
            "country": "JP"
          },
          "billing_address": {
            "address_line_1": "Room no: 1121, 3-21-2",
            "locality": "Shin Yokohama",
            "administrative_district_level_1": "Kanagawa",
            "postal_code": "220033",
            "country": "JP"
          },
          "amount_money": {
            "amount": 100,
            "currency": "USD"
          },
          "card_nonce": <CARD_NONCE_FROM_STEP-3>,
            "reference_id": "some optional reference id",
            "note": "some optional note",
            "delay_capture": true

            }
            },
            { headers: {} }
            )
            }

            axios({
              method:'post',
              url:'https://connect.squareup.com/v2/locations/'+ <LOCATION_ID_FROM_STEP-4.1> + '/transactions',
              headers: {'Authorization': 'Bearer ' + <Personal Access Token>},
              data: {
                "idempotency_key": <GUID>,
                  "buyer_email_address": "abc@gmail.com",
                  "shipping_address": {
                    "address_line_1": "Room no: 1121, 3-21-2",
                    "locality": "Shin Yokohama",
                    "administrative_district_level_1": "Kanagawa",
                    "postal_code": "220033",
                    "country": "JP"
                  },
                  "billing_address": {
                    "address_line_1": "Room no: 1121, 3-21-2",
                    "locality": "Shin Yokohama",
                    "administrative_district_level_1": "Kanagawa",
                    "postal_code": "220033",
                    "country": "JP"
                  },
                  "amount_money": {
                    "amount": 100,
                    "currency": "USD"
                  },
                  "card_nonce": <CARD_NONCE_FROM_STEP-3>,
                    "reference_id": "some optional reference id",
                    "note": "some optional note",
                    "delay_capture": true
                    }
                    })
                    .then(function (response) {
                      console.log(JSON.stringify(response.data));
                      /*
                      The response will contain transactionId and tenders. Tenders in turn will contain
                      tenderId, cardDetails and so on.
                      */
                    })
                    .catch(function (error) {
                      console.log(error.response.data);
                    });
                    
