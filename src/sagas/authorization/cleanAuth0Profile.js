import cleanLine from './cleanLine';
import cleanFacebook from './cleanFacebook';
import cleanGoogle from './cleanGoogle';
import cleanTwitter from './cleanTwitter';
import cleanLinkedin from './cleanLinkedin';

export default (reduxState, auth0Profile) => {
  switch (reduxState.user.socialLoginType) {
    case 'loginWithLine': return cleanLine(reduxState, auth0Profile);
    case 'loginWithFacebook': return cleanFacebook(reduxState, auth0Profile);
    case 'loginWithGoogle': return cleanGoogle(reduxState, auth0Profile);
    case 'loginWithTwitter': return cleanTwitter(reduxState, auth0Profile);
    case 'loginWithLinkedin': return cleanLinkedin(reduxState, auth0Profile);
    default: break;
  }
  return 0;
};
