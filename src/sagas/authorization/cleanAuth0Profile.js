export default ({ user, geo, orders }, auth0Profile) => {
  let profile = {
    shopping: {
      cart: [],
    }
  };
  switch (reduxState.user.socialLoginType) {
    case 'loginWithLine': {

    } break;
    case 'loginWithFacebook': {
      Object.keys(auth0Profile).forEach((key) => {
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
            user_id: auth0Profile.user_id,
            updated_at: auth0Profile.updated_at,
          }]; break;
          case 'locale': profile.contactInfo.locale = auth0Profile[key]; break;
          case 'timezone': profile.contactInfo.timezone = auth0Profile[key]; break;
          case 'identities': profile.authentication.auth0Identities = auth0Profile[key]; break;
          default: break;
        }
        // add Age Verification
        profile.authentication.ageVerified = user.ageVerified;

        // add guest orders (if any) to the request object so as to transfer items to the new/dbUser's active cart.
        orders.guest.forEach(({ id, qty, strength }) => {
          profile.shopping.cart.push({
            qty,
            strength,
            product: id,
          });
        });
        //
      });
      return profile;
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
