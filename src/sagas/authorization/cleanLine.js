export default ({ orders, user, geo, locale, mobile }, auth0Line) => {
  console.log('%cauth0Line', 'background:red;', auth0Line);
  const profile = {
    name: {
      first: auth0Line.name,
      last: '',
      display: auth0Line.displayName,
    },
    pictures: {
      small: auth0Line.picture,
      large: auth0Line.picture_large,
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
      locale: auth0Line.locale,
      timezone: auth0Line.timezone,
    },
    contactInfoLocation: {
      ipAddress: geo.ipAddress,
      lat: geo.latLong.split(',')[0],
      long: geo.latLong.split(',')[1],
      country: locale.country,
    },
    contactInfoDevices: [...auth0Line.devices],
    contactInfoSocialNetworks: [{
      name: 'Facebook',
      link: auth0Line.link,
    }],
    shopping: {
      transactions: [],
    },
    shoppingCart: [],
    permissions: {
      role: 'user',
    },
    userStory: {
      age: auth0Line.age_range.min,
      birthday: '',
      bio: '',
      gender: auth0Line.gender,
    },
    socialProfileBlob: {
      facebook: JSON.stringify(auth0Line, null, 2),
    },
  };

  if (orders.guest && orders.guest.length) {
    orders.guest.forEach(({ id: product, qty, strength }) => {
      profile.shopping.cart.push({ qty, strength, product });
    });
  }
  return {
    profile,
    loginType: 'facebook',
    auth0Id: auth0Line.identities[0].user_id,
  };
};
