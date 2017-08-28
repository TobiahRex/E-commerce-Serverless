function* uploadGenerator(dbSagawas, sagawaModel) {
  yield dbSagawas
  .map(({ _id }) => _id)
  .map(async (id) => {
    const result = await sagawaModel.uploadOrder(id);
    return result;
  });
}

export default function sagawaGenerator(dbSagawas, sagawaModel) {
  return new Promise((resolve, reject) => {
    try {
      const generator = uploadGenerator(dbSagawas, sagawaModel);
      const { value } = generator.next();
      resolve(value);
    } catch (e) {
      reject(e);
    }
  });
}
