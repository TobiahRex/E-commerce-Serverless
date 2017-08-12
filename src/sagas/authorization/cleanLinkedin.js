export default ({ orders, user, geo, locale, mobile }, auth0Linkedin) => {
  const profile = {
    name: {
      first: auth0Linkedin.given_name,
      last: auth0Linkedin.family_name,
      display: auth0Linkedin.name,
    },
    pictures: {
      small: auth0Linkedin.picture,
      large: auth0Linkedin.picture,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Linkedin.created_at,
      totalLogins: 1,
      ageVerified: user.ageVerified,
    },
    authenticationLogins: [{
      date: new Date(),
      device: mobile.mobileType || 'computer',
    }],
    authenticationAuth0Identities: [...auth0Linkedin.identities],
    contactInfo: {
      email: auth0Linkedin.email,
      phone: '',
      locale: `${locale.activeLanguage.slice(0, 2)}-${locale.country}`,
      timezone: (() => {
        const date = new Date();
        return ((date.getTimezoneOffset() / 60) * -1);
      })(),
    },
    contactInfoLocation: {
      ipAddress: geo.ipAddress,
      lat: geo.latLong ? geo.latLong.split(',')[0] : '',
      long: geo.latLong ? geo.latLong.split(',')[1] : '',
      country: locale.country,
    },
    contactInfoDevices: [null],
    contactInfoSocialNetworks: [{
      name: 'Linkedin',
      link: auth0Linkedin.publicProfileUrl,
    }],
    shopping: {
      transactions: [],
    },
    shoppingCart: [],
    permissions: {
      role: 'user',
    },
    userStory: {
      age: null,
      birthday: '',
      bio: auth0Linkedin.headline,
      gender: '',
    },
    socialProfileBlob: {
      linkedin: JSON.stringify(auth0Linkedin, null, 2),
    },
  };

  if (!!orders.cart && orders.cart.length) {
    profile.shoppingCart = orders.cart.map(({ _id, qty }) => ({ product: _id, qty }));
  }

  return {
    profile,
    loginType: 'linkedin',
    auth0Id: auth0Linkedin.identities[0].user_id,
  };
};
