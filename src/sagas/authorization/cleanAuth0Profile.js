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
          case 'picture': profile.picture.small = auth0Profile[key]; break;
          case 'picture_large': profile.picture.large = auth0Profile[key]; break;
          case 'age_range': profile.userStory.age = auth0Profile[key].min; break;
          case 'devices': profile.contactInfo.devices = auth0Profile[key]; break;
          case 'link': profile.contactInfo.socialNetworks = [{
            type: 'Facebook',
            link: auth0Profile[key],
          }]; break;
          case 'locale': 
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
