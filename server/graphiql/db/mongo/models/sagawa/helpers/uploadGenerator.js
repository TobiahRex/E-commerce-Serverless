function* uploadGenerator(reqBodyArray, sagawaModel) {
  yield reqBodyArray
  .map(async (reqBody) => {
    const result = await sagawaModel.uploadOrderAndSendEmail(reqBody);
    return result;
  });
}

export default function sagawaGenerator(reqBodyArray, sagawaModel) {
  return new Promise((resolve, reject) => {
    try {
      const generator = uploadGenerator(reqBodyArray, sagawaModel);
      const { value } = generator.next();
      resolve(value);
    } catch (e) {
      reject(e);
    }
  });
}
