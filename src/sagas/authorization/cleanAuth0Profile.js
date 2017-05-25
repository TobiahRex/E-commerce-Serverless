export default (auth0Profile, auth0LoginType) => {
  let profile = {};
  switch (auth0LoginType) {
    case 'loginWithLine': {

    } break;
    case 'loginWithFacebook': {
      Object.keys(auth0Profile)
      .map((key) => {
        switch (key) {
          case 'name': profile.name.display = auth0Profile[key]; break;
          case 'given_name': profile.name.first = auth0Profile[key]; break;
          case 'family_name': profile.name.last = auth0Profile[key]; break;
        }
      })
    } break;
    case 'loginWithGoogle': {

    } break;
    case 'loginWithTwitter': {

    } break;
    case 'loginWithLinkedin': {

    } break;
    default: break;
  }
  return profile;
};
