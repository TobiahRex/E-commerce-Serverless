export default ({ orders, user, geo, locale, mobile }, auth0Profile) => {
  const cleanProfile = {
    name: {
      first: auth0Profile.given_name,
      last: auth0Profile.family_name,
      display: auth0Profile.name,
    },
    pictures: {
      small: auth0Profile.picture,
      large: auth0Profile.picture_large,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Profile.created_at,
      totalLogins: 1,
      lastLogin: [],
      ageVerified: user.ageVerified,
      auth0Identities: [...auth0Profile.identities],
    },
    contactInfo: {
      email: '',
      phone: '',
      locale: auth0Profile.locale,
      timezone: auth0Profile.timezone,
      location: {
        ipAddress: geo.ipAddress,
        lat: geo.latLong.split(',')[0],
        long: geo.latLong.split(',')[1],
        country: locale.country,
      },
      devices: [...auth0Profile.devices],
      socialNetworks: [],
    },
    shopping: {
      cart: [],
    },
    permissions: {
      role: 'user',
    },
    userStory: {
      age: auth0Profile.age_range,
      bio: '',
      gender: auth0Profile.gender,
    },
    socialProfileBlob: {
      facebook: JSON.stringify(auth0Profile, null, 2),
    },
  };

  cleanProfile.contactInfo.socialNetworks.push({
    name: 'Facebook',
    link: auth0Profile.link,
  });
  cleanProfile.authentication.lastLogin.push({
    date: new Date(),
    loginDevice: mobile.mobileType || 'computer',
  });
  if (orders.guest && order.guest.length) {
    orders.guest.forEach(({ id: product, qty, strength }) => {
      cleanProfile.shopping.cart.push({ qty, strength, product });
    });
  }
  return {
    cleanProfile,
    loginType: 'facebook',
    auth0Id: auth0Profile.identities[0].user_id,
  };
};
