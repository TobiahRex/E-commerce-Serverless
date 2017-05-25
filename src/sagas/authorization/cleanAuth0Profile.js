import cleanLine from './cleanLine';
import cleanLine from './cleanLine';
import cleanFacebook from './cleanFacebook';
import cleanGoogle from './cleanGoogle';
import cleanTwitter from './cleanTwitter';
import cleanLinkedin from './cleanLinkedin';

export default (reduxState, auth0Profile) => {
  let profile = {
    shopping: {
      cart: [],
    },
  };

  switch (reduxState.user.socialLoginType) {
    case 'loginWithLine': profile = cleanLine(reduxState, auth0Profile); break;
    case 'loginWithFacebook': profile = cleanFacebook(reduxState, auth0Profile); break;
    case 'loginWithGoogle': profile = cleanGoogle(reduxState, auth0Profile); break;
    case 'loginWithTwitter': profile = cleanTwitter(reduxState, auth0Profile); break;
    case 'loginWithLinkedin': profile = cleanLinkedin(reduxState, auth0Profile); break;
    default: break;
  }
  return profile;
};
