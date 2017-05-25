import cleanLine from './cleanLine';
import cleanFacebook from './cleanFacebook';
import cleanGoogle from './cleanGoogle';
import cleanTwitter from './cleanTwitter';
import cleanLinkedin from './cleanLinkedin';

export default (reduxState, auth0Profile) => {
  let cleanProfile;
  switch (reduxState.user.socialLoginType) {
    case 'loginWithLine': cleanProfile = cleanLine(reduxState, auth0Profile); break;
    case 'loginWithFacebook': cleanProfile = cleanFacebook(reduxState, auth0Profile); break;
    case 'loginWithGoogle': cleanProfile = cleanGoogle(reduxState, auth0Profile); break;
    case 'loginWithTwitter': cleanProfile = cleanTwitter(reduxState, auth0Profile); break;
    case 'loginWithLinkedin': cleanProfile = cleanLinkedin(reduxState, auth0Profile); break;
    default: break;
  }
  return { cleanProfile };
};
