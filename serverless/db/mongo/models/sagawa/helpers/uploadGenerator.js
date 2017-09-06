/* eslint-disable no-console */
function* uploadGenerator(reqObjs, sagawaModel) {
  console.log('\n@Sagawa.uploadGenerator\n');

  console.log('Request Objs: ', reqObjs);
  yield reqObjs
  .map(async (reqBody) => {
    const result = await sagawaModel.uploadOrderAndSendEmail(reqBody);
    console.log('\nSUCCEEDED: Call Sagawa.uploadOrderAndSendEmail. Result = ', result);
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
