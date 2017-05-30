export default ({ orders, user, geo, locale, mobile }, auth0Twitter) => {
  console.log('%cauth0Twitter', 'background:red;', auth0Twitter);
  const profile = {
    name: {
      first: auth0Twitter.name.split(' ')[0],
      last: auth0Twitter.name.split(' ')[1],
      display: auth0Twitter.screen_name,
    },
    pictures: {
      small: auth0Twitter.picture,
      large: auth0Twitter.picture,
    },
    authentication: {
      signedUp: new Date(),
      password: '',
      createdAt: auth0Twitter.created_at,
      totalLogins: 1,
      ageVerified: user.ageVerified,
    },
    authenticationLogins: [{
      date: new Date(),
      device: mobile.mobileType || 'computer',
    }],
    authenticationAuth0Identities: [...auth0Twitter.identities],
    contactInfo: {
      email: '',
      phone: '',
      locale: auth0Twitter.lang,
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
      name: 'Twitter',
      link: auth0Twitter.url,
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
      bio: auth0Twitter.description,
      gender: '',
    },
    socialProfileBlob: {
      twitter: JSON.stringify(auth0Twitter, null, 2),
    },
  };

  if (orders.guest && orders.guest.length) {
    orders.guest.forEach(({ id: product, qty, strength }) => {
      profile.shopping.cart.push({ qty, strength, product });
    });
  }
  return {
    profile,
    loginType: 'twitter',
    auth0Id: auth0Twitter.identities[0].user_id,
  };
};
