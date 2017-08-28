function* uploadGenerator(reqObjs, sagawaModel) {
  yield reqObjs
  .map(async (reqBody) => {
    const result = await sagawaModel.uploadOrderAndSendEmail(reqBody);
    return result;
  });
}

export default function sagawaGenerator(reqObjs, sagawaModel) {
  return new Promise((resolve, reject) => {
    try {
      const generator = uploadGenerator(reqObjs, sagawaModel);
      const { value } = generator.next();
      resolve(value);
    } catch (e) {
      reject(e);
    }
  });
}
