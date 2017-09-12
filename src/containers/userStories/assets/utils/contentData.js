export default {
  english: {
    pageHeader: 'User Stories',
    content: [
      {
        component: 'UserCard',
        props: {
          CardImg: {
            link: '/images/default-avatar.png',
          },
          CardHdr: {
            header: 'User Story 1',
          },
          CardDate: {
            date: 'Sep 8, 2017',
          },
          CardBlurb: {
            blurb: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
          },
        },
      },
    ],
  },
  japanese: {
    pageHeader: 'ユーザーストーリー',
    content: [
      {
        component: 'UserCard',
        props: {
          CardImg: {
            link: '/images/default-avatar.png',
          },
          CardHdr: {
            header: 'ユーザーストーリータイトル 1',
          },
          CardDate: {
            date: '2017年9月8日',
          },
          CardBlurb: {
            blurb: 'クイックブラウンキツネは怠惰な犬の上を飛びます。 クイックブラウンキツネは怠惰な犬の上を飛びます。 クイックブラウンキツネは怠惰な犬の上を飛びます。 クイックブラウンキツネは怠惰な犬の上を飛びます。 クイックブラウンキツネは怠惰な犬の上を飛びます。',
          },
        },
      },
    ],
  },
};
