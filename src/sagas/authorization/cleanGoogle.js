export default ({ orders, user, geo, locale, mobile }, auth0Google) => {
  console.log('%cauth0Google', 'background:red;', auth0Google);
  const profile = {
    name: {
      first: auth0Google.given_name,
      last: auth0Google.family_name,
      display: auth0Google.name,
    },
    pictures: {
      small: auth0Google.picture,
      large: auth0Google.picture,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Google.created_at,
      totalLogins: 1,
      ageVerified: user.ageVerified,
    },
    authenticationLogins: [{
      date: new Date(),
      device: mobile.mobileType || 'computer',
    }],
    authenticationAuth0Identities: [...auth0Google.identities],
    contactInfo: {
      email: auth0Google.email,
      phone: '',
      locale: auth0Google.locale,
      timezone: (() => {
        const date = new Date();
        return ((date.getTimezoneOffset() / 60) * -1);
      })(),
    },
    contactInfoLocation: {
      ipAddress: geo.ipAddress,
      lat: geo.latLong.split(',')[0],
      long: geo.latLong.split(',')[1],
      country: locale.country,
    },
    contactInfoDevices: [null],
    contactInfoSocialNetworks: [{
      name: 'Google',
      link: '<email>',
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
      gender: auth0Google.gender,
    },
    socialProfileBlob: {
      google: JSON.stringify(auth0Google, null, 2),
    },
  };

  if (orders.guest && orders.guest.length) {
    orders.guest.forEach(({ id: product, qty, strength }) => {
      profile.shopping.cart.push({ qty, strength, product });
    });
  }
  return {
    profile,
    loginType: 'google',
    auth0Id: auth0Google.identities[0].user_id,
  };
};
