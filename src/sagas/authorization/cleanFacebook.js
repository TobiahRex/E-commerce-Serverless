export default ({ orders, user, geo, locale, mobile }, auth0Facebook) => {
  const profile = {
    name: {
      first: auth0Facebook.given_name,
      last: auth0Facebook.family_name,
      display: auth0Facebook.name,
    },
    pictures: {
      small: auth0Facebook.picture,
      large: auth0Facebook.picture_large,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Facebook.created_at,
      totalLogins: 1,
      ageVerified: user.ageVerified,
    },
    authenticationLogins: [{
      date: new Date(),
      device: mobile.mobileType || 'computer',
    }],
    authenticationAuth0Identities: [...auth0Facebook.identities],
    contactInfo: {
      email: '',
      phone: '',
      locale: auth0Facebook.locale,
      timezone: auth0Facebook.timezone,
    },
    contactInfoLocation: {
      ipAddress: geo.ipAddress,
      lat: geo.latLong ? geo.latLong.split(',')[0] : '',
      long: geo.latLong ? geo.latLong.split(',')[1] : '',
      country: locale.country,
    },
    contactInfoDevices: [...auth0Facebook.devices],
    contactInfoSocialNetworks: [{
      name: 'Facebook',
      link: auth0Facebook.link,
    }],
    shopping: {
      transactions: [],
    },
    shoppingCart: [],
    permissions: {
      role: 'user',
    },
    userStory: {
      age: auth0Facebook.age_range.min,
      birthday: '',
      bio: '',
      gender: auth0Facebook.gender,
    },
    socialProfileBlob: {
      facebook: JSON.stringify(auth0Facebook, null, 2),
    },
  };

  if (orders.cart && orders.cart.length) {
    orders.cart.forEach(({ _id: product, qty, strength }) => {
      profile.shopping.cart.push({ qty, strength, product });
    });
  }
  return {
    profile,
    loginType: 'facebook',
    auth0Id: auth0Facebook.identities[0].user_id,
  };
};
