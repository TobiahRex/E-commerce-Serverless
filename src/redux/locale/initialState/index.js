import english from './english/';
import japanese from './japanese/';

export default {
  activeLanguage: navigator.language.slice(0, 2),
  country: null,
  translations: {
    en: english,
    ja: japanese,
  },
};
