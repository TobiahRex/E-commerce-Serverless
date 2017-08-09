import {
  GraphQLID as MongoId,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLObjectType as ObjectType,

} from 'graphql';

const rootType = new ObjectType({
  name: 'Sagawa',
  fields: () => ({
    transactionId: {
      description: 'The Mongo _id for the Transaction associated with this Document.',
      type: MongoId,
    },
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
});
