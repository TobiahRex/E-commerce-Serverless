import {
  GraphQLID as MongoId,
  GraphQLList as ListType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BoolType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,
} from 'graphql';

const rootType = new ObjectType({
  name: 'Transaction',
  description: 'A application transaction.',
  fields: {
    _id: {
      description: 'The ID of the Product.',
      type: new NonNull(MongoId),
    },
    error: {
      description: 'Any errors that occur during a backend operation will be flagged and provided a message within this object.',
      type: new ObjectType({
        name: 'ProductError',
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
    date: {
      description: 'The date this transaction occured.',
      type: StringType,
    },
    user: {
      description: 'The _id of the user who executed this transaction.',
      type: MongoId,
    },
    products: new ListType(
      new ObjectType({
        name: 'TransactionProductList',
        fields: () => ({
          id: {
            description: 'The _id of the Product',
            type: MongoId,
          },
          qty: {
            description: 'The quantity purchased.',
            type: IntType,
          },
        }),
      }),
    ),
    discount: new ObjectType({
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
    subTotal: {
      description: 'The subTotal amount for this transaction.',
      type: StringType,
    },
    tax: {
      description: 'The taxes amount for this transaction.',
      type: StringType,
    },
    grandTotal: {
      description: 'The grand total amount for this transaction.',
      type: StringType,
    },
    sagawa: new ObjectType({
      name: 'TransactionSagawaInfo',
      fields: () => ({
        awbNumber: {
          description: 'One of the unique numbers associated with an individual Sagawa order.',
          type: StringType,
        },
        referenceNumber: {
          description: 'The unique reference number associated with an individual Sagawa order.',
          type: IntType,
        },
        address: new ObjectType({
          name: 'TransactionSagawaShippingAddress',
          fields: () => ({
            boxId: { type: StringType },
            shipDate: { type: StringType },
            customerName: { type: StringType },
            postal: { type: IntType },
            jpAddress1: { type: StringType },
            jpAddress2: { type: StringType },
            phoneNumber: { type: IntType },
            kbn: { type: IntType },
            wgt: { type: IntType },
            totalPrice: { type: IntType },
            deliveryDate: { type: StringType },
            deliveryTime: { type: StringType },
            souryo: { type: IntType },
            tesuryo: { type: IntType },
            ttlAmount: { type: IntType },
            codFlg: { type: IntType },
          }),
        }),
        item: new ObjectType({
          name: 'TransactionSagawaItemInfo',
          fields: () => ({
            upcCode: { type: IntType },
            itemName: { type: StringType },
            usage: { type: IntType },
            origin: { type: StringType },
            piece: { type: IntType },
            unitPrice: { type: IntType },
          }),
        }),
      }),
      square: new ObjectType({
        name: 'TransactionSquareInfo',
        fields: () => ({
          billingInfo: {
            description: 'Billing information used to purchase products.',
            type: new ObjectType({
              name: 'TransactionSquareBillingInfo',
              fields: () => ({
                nameOnCard: { type: StringType },
                last4: { type: StringType },
                amount: { type: StringType },
                email: { type: StringType },
              }),
            }),
          },
          locationId: {
            description: 'The Square location Id used for this transaction.',
            type: StringType,
          },
          transactionId: {
            description: 'The Square transaction Id generated for this transaction.',
            type: StringType,
          },
          cardNonce: {
            description: 'The Square generated, unique code that maps all sensitive CC info to this transaction.',
          },
        }),
      }),
      marketHero: new ObjectType({
        name: 'TransactionMarketHeroInfo',
        fields: () => ({
          leadUpdated: {
            description: 'Identifies if Market Hero Lead has been updated with tags that identify the lead as having purchased products from this application.',
            type: BoolType,
          },
          tags: new ListType(
            new ObjectType({
              name: 'TransactionMarketHeroLeadsInfo',
              fields: () => ({
                name: {
                  description: 'The name of the Tag assigned to the lead.',
                  type: StringType,
                },
                purpose: {
                  description: 'The meaning for this tag.',
                  type: StringType,
                },
              }),
            }),
          ),
        }),
      }),
      sesEmail: new ObjectType({
        name: 'Transaction`'
      }),
    }),
  },
});
