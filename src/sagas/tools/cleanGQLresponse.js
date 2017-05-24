export default function cleanGQLresponse(response) {
  console.log('GraphQL response: ', response);
  if (response.data) {
    const { errors, errorMessage, errorType } = response.data;
    if (errors || errorMessage) {
      response.problem = `${errorType}: ${
        errors ? errors[0].message : errorMessage
      }`;
      response.ok = false;
    }
    return response;
  }
  response.problem = 'GraphQL returned an empty result. Verify your settings.';
  response.ok = false;
  return response;
}
