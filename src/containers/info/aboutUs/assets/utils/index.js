export const WebflowJs = () => {
  require('./webflow.js'); // eslint-disable-line global-require
};
export WebflowAnimations from './webflow.animations.js';
export const contentData = {
  english: [
    {
      component: 'MemberCard',
      props: {
        ix: 'slide-in-brians-card',
        MemberCardPhoto: {
          src: 'images/BRIAN_264x200.png',
        },
        MemberCardTitle: {
          header: 'aboutus.brian.name',
          subHeader: 'aboutus.brian.title',
        },
        MemberCardBlurb: {
          blurb: 'aboutus.brian.blurb',
        },
        Socials: {
          facebook: '',
          github: '',
          linkedin: 'https://www.linkedin.com/in/brian-wilson-14843b105/',
          twitter: '',
          instagram: '',
        },
      },
    },
    {
      component: 'MemberCard',
      props: {
        ix: 'slide-in-tobys-card',
        MemberCardPhoto: {
          src: 'images/TOBY_264x200.png',
        },
        MemberCardTitle: {
          header: 'aboutus.toby.name',
          subHeader: 'aboutus.toby.title',
        },
        MemberCardBlurb: {
          blurb: 'aboutus.toby.blurb',
        },
        Socials: {
          facebook: '',
          github: 'https://www.github.com/tobiahrex',
          linkedin: 'https://www.linkedin.com/in/tobiahrex/',
          twitter: 'https://www.twitter.com/tobiahRex',
          instagram: 'https://www.instagram.com/tobiahrex/',
        },
      },
    },
    {
      component: 'MemberCard',
      props: {
        ix: 'slide-in-lds-card-2',
        MemberCardPhoto: {
          src: 'images/LD-264x200.jpg',
        },
        MemberCardTitle: {
          header: 'aboutus.ld.name',
          subHeader: 'aboutus.ld.title',
        },
        MemberCardBlurb: {
          blurb: 'aboutus.ld.blurb',
        },
        Socials: {
          facebook: '',
          github: 'https://github.com/lakshmantgld',
          linkedin: 'https://jp.linkedin.com/in/lakshmandiwaakar',
          twitter: 'https://twitter.com/LakshmanTgld',
          instagram: 'https://www.instagram.com/lakshmandiwaakar/',
        },
      },
    },
    {
      component: 'MemberCard',
      props: {
        ix: 'slide-in-phils-card',
        MemberCardPhoto: {
          src: 'images/PHIL_264x200.png',
        },
        MemberCardTitle: {
          header: 'aboutus.phil.name',
          subHeader: 'aboutus.phil.title',
        },
        MemberCardBlurb: {
          blurb: 'aboutus.phil.blurb',
        },
        Socials: {
          facebook: 'https://www.facebook.com/slashkun',
          github: '',
          linkedin: '',
          twitter: 'https://twitter.com/slashkun0',
          instagram: 'https://instagram.com/moorecarbs',
        },
      },
    },
  ],
};
