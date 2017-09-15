import {
  GraphQLID as MongoID,
  GraphQLList as ListType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLInputObjectType as InputObject,
  GraphQLObjectType as ObjectType,
  GraphQLEnumType as EnumType,
} from 'graphql';
import { rootType as UserRootType } from './userTypes';

const rootType = new ObjectType({
  name: 'Transaction',
  description: 'An application transaction.',
  fields: {
    _id: {
      description: 'The ID of the Product.',
      type: new NonNull(MongoID),
    },
    error: {
      description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
      type: new NonNull(
        new ObjectType({
          name: 'TransactionError',
          fields: () => ({
            hard: {
              description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
              type: BoolType,
            },
            soft: {
              description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
              type: BoolType,
            },
            message: {
              description: 'Amplifying information about error.  Should be written for user readibility.',
              type: new ObjectType({
                en: {
                  description: 'English translation.',
                  type: StringType,
                },
                ja: {
                  description: 'English translation.',
                  type: StringType,
                },
              }),
            },
          }),
        }),
      ),
    },
    date: {
      description: 'The date this transaction occured.',
      type: StringType,
    },
    comments: {
      description: 'Options comments written by the customer at the time of checkout.',
      type: StringType,
    },
    termsAgreement: {
      description: 'Did the user agree to the Terms & Agreement for this transaction.',
      type: BoolType,
    },
    user: {
      description: 'The _id of the user who executed this transaction.',
      type: MongoID,
    },
    products: {
      description: 'An array of product(s) ID\'s and their respective quantities, that were purchased.',
      type: new ListType(
        new ObjectType({
          name: 'TransactionProductList',
          fields: () => ({
            _id: {
              description: 'The _id of the Product',
              type: MongoID,
            },
            qty: {
              description: 'The quantity purchased for the respective product.',
              type: IntType,
            },
          }),
        }),
      ),
    },
    sagawa: {
      description: 'The reference Mongo _id for the Sagawa document that was generated due to this transaction.',
      type: MongoID,
    },
    emailAddress: {
      description: 'The customer\'s email address.',
      type: StringType,
    },
    emailLanguage: {
      description: 'The language the customer preferred at the time of purchase.',
      type: new EnumType({
        name: 'EmailLanguageEnum',
        values: {
          english: {
            value: 'english',
            description: 'The user is assumed to speak english.',
          },
          japanese: {
            value: 'japanese',
            description: 'The user is assumed to speak japanese.',
          },
        },
      }),
    },
    invoiceEmailNoTracking: {
      description: 'The Html Body data for the Invoice Email that was sent if the transaction was executed on off-business hours.',
      type: StringType,
    },
    invoiceEmail: {
      description: 'The Html Body data for the Invoice  Email that was sent.',
      type: StringType,
    },
    trackingLink: {
      description: 'The tracking url containing the user\'s tracking token.',
      type: StringType,
    },
    jpyFxRate: {
      description: 'The foreign exchange rate between USD & JPY at the time of the transaction.',
      type: StringType,
    },
    taxes: {
      description: 'The global tax information at the trime of executing this transaction',
      type: new ObjectType({
        name: 'TransactionTaxesInfo',
        fields: () => ({
          cityRate: { type: StringType },
          stateRate: { type: StringType },
          totalRate: { type: StringType },
        }),
      }),
    },
    total: {
      description: 'The final amount totals including discount & taxes for this transaction.',
      type: new ObjectType({
        name: 'TransactionTotalsInfo',
        fields: () => ({
          subTotal: { type: StringType },
          taxes: { type: StringType },
          grandTotal: { type: StringType },
          discount: {
            description: 'Description of any discounts that were applied to this transaction.',
            type: new ObjectType({
              name: 'TransactionDiscounts',
              fields: () => ({
                qty: {
                  description: 'Boolean describing whether or not the user has received the 25% OFF "Quantity Discount" for this Transaction.',
                  type: BoolType,
                },
                qtyAmount: {
                  description: 'The dollar amount value if receiving this discount.',
                  type: StringType,
                },
                register: {
                  description: 'Boolean describing whether or not the user has received the 10% OFF "Register Discount" for this Transaction.',
                  type: BoolType,
                },
                registerAmount: {
                  description: 'The dollar amount value if receiving this discount.',
                  type: StringType,
                },
              }),
            }),
          },
        }),
      }),
    },
    square: {
      description: 'The information associated with billing and payment services.',
      type: new ObjectType({
        name: 'TransactionSqaureInformation',
        fields: () => ({
          idempotency_key: {
            description: 'The unique id randomly generated at the time of Credit Card charge.',
            type: StringType,
          },
          billingCountry: {
            description: 'The registered country for the Credit Card that was used.',
            type: StringType,
          },
          shippingAddress: {
            description: 'The address information required by Square.',
            type: new ObjectType({
              name: 'TransactionSquareShippingAddress',
              fields: () => ({
                shippingPrefecture: { type: StringType },
                shippingCity: { type: StringType },
              }),
            }),
          },
          tender: {
            description: 'The return object from Square at the time of charging the customers card.',
            type: new ObjectType({
              name: 'TransactionSquareTender',
              fields: () => ({
                id: {
                  description: 'The tender id - Required for issuing refunds.',
                  type: StringType,
                },
                location_id: {
                  description: 'The Square location ID that this transaction was added to.',
                  type: StringType,
                },
                transaction_id: {
                  description: 'The Square transaction ID for this transaction.',
                  type: StringType,
                },
                created_at: {
                  description: 'JS date object.',
                  type: StringType,
                },
                note: {
                  description: 'Note given at the time of charging the customers card',
                  type: StringType,
                },
                amount_money: {
                  description: 'The Fiat Amount details.',
                  type: new ObjectType({
                    name: 'TransactionSquareTenderAmount',
                    fields: () => ({
                      amount: {
                        description: 'The units of money that was charged as a non-float integer (i.e. 2400 = $24.00)',
                        type: IntType,
                      },
                      currency: {
                        description: 'The 2 digit currency of the charge.',
                        type: StringType,
                      },
                    }),
                  }),
                },
                type: {
                  description: 'The type of square transaction that was executed.',
                  type: StringType,
                },
                card_details: {
                  description: 'A collection of info about the credit card that was used',
                  type: new ObjectType({
                    name: 'TrransactionSquareTenderCard',
                    fields: () => ({
                      status: {
                        description: 'The current status of the charge.',
                        type: StringType,
                      },
                      card: {
                        description: 'The non-sensitie card specific details.',
                        type: new ObjectType({
                          name: 'TranscationSquareTenderCardDetails',
                          fields: () => ({
                            card_brand: { type: StringType },
                            last_4: { type: StringType },
                            nameOnCard: { type: StringType },
                            cardNonce: {
                              description: 'The unique code generated by the Square payment form required for completing a transaction.',
                              type: StringType,
                            },
                            postalCode: {
                              description: 'The postal code for US | UK | CA cards.',
                              type: StringType,
                            },
                          }),
                        }),
                      },
                      entry_method: {
                        description: 'Whether the charge as "Point of Sale" or "API Charge".',
                        type: StringType,
                      },
                    }),
                  }),
                },
              }),
            }),
          },
          refund: {
            description: 'The refund details (if any) for the any transactions made on this document.',
            type: new ObjectType({
              name: 'TransactionSquareRefund',
              fields: () => ({
                id: {
                  description: 'The square refund id.',
                  type: StringType,
                },
                location_id: { type: StringType },
                transaction_id: { type: StringType },
                tender_id: { type: StringType },
                created_at: { type: StringType },
                reason: { type: StringType },
                amount_money: {
                  description: 'The fiat amount issued for a refund.',
                  type: new ObjectType({
                    name: 'TransactionSquareRefundAmount',
                    fields: () => ({
                      amount: { type: IntType },
                      currency: { type: StringType },
                    }),
                  }),
                },
                status: { type: StringType },
              }),
            }),
          },
        }),
      }),
    },
  },
});

const queryTypes = {
  SquareLocations: new ObjectType({
    name: 'SquareLocations',
    fields: () => ({
      error: {
        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
        type: new ObjectType({
          name: 'SquareLocationError',
          fields: () => ({
            hard: {
              description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
              type: BoolType,
            },
            soft: {
              description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
              type: BoolType,
            },
            message: {
              description: 'Amplifying information about error.  Should be written for user readibility.',
              type: StringType,
            },
          }),
        }),
      },
      id: {
        description: 'The location id.',
        type: StringType,
      },
      name: {
        description: 'The name of this location.',
        type: StringType,
      },
      address: {
        type: new ObjectType({
          name: 'SqaureLocationAddressInfo',
          fields: () => ({
            address_line_1: { type: StringType },
            locality: { type: StringType },
            administrative_district_level_1: { type: StringType },
            postal_code: { type: StringType },
            country: {
              description: 'Two character country code.',
              type: StringType,
            },
          }),
        }),
      },
      timezone: {
        description: '"Country"/"City" format.',
        type: StringType,
      },
      capabilities: {
        description: 'Lists the assigned permissions for the location.',
        type: new ListType(StringType),
      },
    }),
  }),
};

const queries = {
  FetchSquareLocations: {
    type: queryTypes.SquareLocations,
    args: {
      // userId: {
      //   description: 'The user\'s unique _id.',
      //   type: MongoID,
      // },
      // accessToken: {
      //   description: 'The user\'s Auth0 access token.',
      //   type: StringType,
      // },
    },
    resolve: (_, args, Transaction) => Transaction.fetchSquareLocation(),
  },
};

const mutationTypes = {
  SubmitFinalOrder: new ObjectType({
    name: 'TransactionSubmitFinalOrder',
    fields: () => ({
      error: {
        description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
        type: new ObjectType({
          name: 'SubmitFinalOrderTransactionError',
          fields: () => ({
            hard: {
              description: 'Boolean flag for a hard failure. Operations should not continue until action by user has been taken.',
              type: BoolType,
            },
            soft: {
              description: 'Boolean flag for a soft failure.  Operations should be allowed to continue.',
              type: BoolType,
            },
            message: {
              description: 'Amplifying information about error.  Should be written for user readibility.',
              type: StringType,
            },
          }),
        }),
      },
      user: {
        description: 'The updated Mongo User Document.',
        type: UserRootType,
      },
      transaction: {
        description: 'The newly created Mongo Transaction Document.',
        type: rootType,
      },
    }),
  }),
};

const mutations = {
  SubmitFinalOrder: {
    type: mutationTypes.SubmitFinalOrder,
    args: {
      // access_token: {
      //   description: 'The Auth0 issued, JWT access_token.',
      //   type: new NonNull(StringType),
      // },
      userId: {
        description: 'The Mongo _id of the User submitting the order.',
        type: new NonNull(MongoID),
      },
      comments: {
        description: 'Options comments written by the customer at the time of checkout.',
        type: StringType,
      },
      language: {
        description: 'The language the User preferred at checkout.',
        type: new NonNull(StringType),
      },
      termsAgreement: {
        description: 'User\'s agreement to the Terms & Agreement policy at the time of purchase.',
        type: new NonNull(BoolType),
      },
      newsletterDecision: {
        description: 'User\'s choice to receive future marketing newsletters.',
        type: new NonNull(BoolType),
      },
      cart: {
        description: 'The array of products to be purchased.',
        type: new NonNull(
          new ListType(
            new InputObject({
              name: 'TransactionCartProduct',
              fields: () => ({
                _id: {
                  description: 'The product to be purchased as part of this transaction.',
                  type: new NonNull(MongoID),
                },
                qty: {
                  description: 'The quantity purchased for the respective product',
                  type: new NonNull(IntType),
                },
              }),
            }),
          ),
        ),
      },
      jpyFxRate: {
        description: 'The foreign exchange rate between USD and JPY at the time of the transction.',
        type: new NonNull(StringType),
      },
      taxes: {
        description: 'The global tax information at the time of executing this transaction',
        type: new NonNull(
          new InputObject({
            name: 'TransactionTaxesInfoInput',
            fields: () => ({
              cityRate: { type: new NonNull(StringType) },
              stateRate: { type: new NonNull(StringType) },
              totalRate: { type: new NonNull(StringType) },
            }),
          }),
        ),
      },
      total: {
        description: 'The final amount totals including discount & taxes for this transaction.',
        type: new NonNull(
          new InputObject({
            name: 'TransactionTotalsInfoInput',
            fields: () => ({
              subTotal: { type: new NonNull(StringType) },
              taxes: { type: new NonNull(StringType) },
              grandTotal: { type: new NonNull(StringType) },
              discount: {
                description: 'The discount(s) applied to this transaction.',
                type: new NonNull(
                  new InputObject({
                    name: 'TransactionTotalsDiscountInput',
                    fields: () => ({
                      qty: { type: BoolType },
                      qtyAmount: { type: StringType },
                      register: { type: BoolType },
                      registerAmount: { type: StringType },
                    }),
                  }),
                ),
              },
            }),
          }),
        ),
      },
      sagawa: {
        description: 'The information associated with shipping and distribution.',
        type: new NonNull(
          new InputObject({
            name: 'TransactionSagawaInfoInput',
            fields: () => ({
              shippingAddress: {
                description: 'The shipping information generated by the user.',
                type: new NonNull(
                  new InputObject({
                    name: 'TransactionShippingInfoInput',
                    fields: () => ({
                      givenName: { type: new NonNull(StringType) },
                      familyName: { type: new NonNull(StringType) },
                      email: { type: new NonNull(StringType) },
                      postalCode: { type: new NonNull(StringType) },
                      addressLine1: { type: new NonNull(StringType) },
                      addressLine2: { type: new NonNull(StringType) },
                      country: { type: new NonNull(StringType) },
                      phoneNumber: { type: new NonNull(StringType) },
                    }),
                  }),
                ),
              },
            }),
          }),
        ),
      },
      square: {
        description: 'The information associated with billing and payment services.',
        type: new InputObject({
          name: 'TransactionSqaureInformationInput',
          fields: () => ({
            billingCountry: {
              description: 'The registered country for the Credit Card that was used.',
              type: new NonNull(StringType),
            },
            shippingAddress: {
              description: 'The address information required by Square.',
              type: new NonNull(
                new InputObject({
                  name: 'TransactionSquareShippingAddressInput',
                  fields: () => ({
                    shippingPrefecture: { type: new NonNull(StringType) },
                    shippingCity: { type: new NonNull(StringType) },
                  }),
                }),
              ),
            },
            tender: {
              description: 'The return object from Square at the time of charging the customers card.',
              type: new NonNull(
                new InputObject({
                  name: 'TransactionSquareTenderInput',
                  fields: () => ({
                    amount_money: {
                      description: 'The Fiat Amount details.',
                      type: new NonNull(
                        new InputObject({
                          name: 'TransactionSquareTenderAmountInput',
                          fields: () => ({
                            amount: {
                              description: 'The units of money that was charged as a non-float integer (i.e. 2400 = $24.00)',
                              type: new NonNull(IntType),
                            },
                            currency: {
                              description: 'The 2 digit currency of the charge.',
                              type: new NonNull(StringType),
                            },
                          }),
                        }),
                      ),
                    },
                    card_details: {
                      description: 'A collection of info about the credit card that was used',
                      type: new NonNull(
                        new InputObject({
                          name: 'TrransactionSquareTenderCardInput',
                          fields: () => ({
                            card: {
                              description: 'The non-sensitie card specific details.',
                              type: new NonNull(
                                new InputObject({
                                  name: 'TranscationSquareTenderCardDetailsInput',
                                  fields: () => ({
                                    last_4: { type: new NonNull(StringType) },
                                    nameOnCard: { type: new NonNull(StringType) },
                                    cardNonce: {
                                      description: 'The unique code generated by the Square payment form required for completing a transaction.',
                                      type: new NonNull(StringType),
                                    },
                                    postalCode: {
                                      description: 'The postal code for US | UK | CA cards.',
                                      type: StringType,
                                    },
                                  }),
                                }),
                              ),
                            },
                          }),
                        }),
                      ),
                    },
                  }),
                }),
              ),
            },
          }),
        }),
      },
    },
    resolve: (_, args, {
      Transaction,
      User,
      Product,
      Email,
      Sagawa,
      MarketHero,
    }) => Transaction.submitFinalOrder(
      args,
      User,
      Product,
      Email,
      Sagawa,
      MarketHero,
    ),
  },
};

export default {
  rootType,
  queries,
  mutations,
};
