export default {
  pageHeader: 'User Stories',
  content: [
    {
      component: 'UserCard',
      props: {
        CardImg: {
          link: '/images/default-avatar.png',
        },
        CardHdr: {
          header: 'user-stories.card1.header',
        },
        CardDate: {
          date: 'user-stories.card1.date',
        },
        CardBlurb: {
          blurb: 'user-stories.card1.blurb',
        },
      },
    },
  ],
};
