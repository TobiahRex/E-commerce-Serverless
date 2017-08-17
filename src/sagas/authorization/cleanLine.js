export default ({ orders, user, geo, locale, mobile }, auth0Line) => {
  const profile = {
    name: {
      first: auth0Line.name,
      last: '',
      display: auth0Line.displayName,
    },
    pictures: {
      small: auth0Line.pictureUrl,
      large: auth0Line.pictureUrl,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Line.created_at,
      totalLogins: 1,
      ageVerified: user.ageVerified,
    },
    authenticationLogins: [{
      date: new Date(),
      device: mobile.mobileType || 'computer',
    }],
    authenticationAuth0Identities: [...auth0Line.identities],
    contactInfo: {
      email: '',
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
    contactInfoDevices: [],
    contactInfoSocialNetworks: [{
      name: 'Line',
      link: null,
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
      bio: '',
      gender: '',
    },
    socialProfileBlob: {
      line: JSON.stringify(auth0Line, null, 2),
    },
  };

  if (!!orders.cart && orders.cart.length) {
    profile.shoppingCart = orders.cart.map(({ _id, qty }) => ({ product: _id, qty }));
  }

  return {
    profile,
    loginType: 'line',
    auth0Id: auth0Line.identities[0].user_id,
  };
};
