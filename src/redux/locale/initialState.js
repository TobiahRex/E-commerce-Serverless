export default {
  activeLanguage: navigator.language.slice(0, 2),
  country: null,
  translations: {
    en: {
      messages: {
        'contactus.header': 'Contact Us',
        'contactus.breadcrumb.paths1': 'Home',
        'contactus.breadcrumb.lastcrumb': 'Contact Us',
        'contactus.label.name': 'Name',
        'contactus.label.email': 'Email',
        'contactus.label.message': 'Message',
        'contactus.input.placeholder.name': 'Enter your name',
        'contactus.input.placeholder.email': 'Enter your email',
        'contactus.input.placeholder.message': 'What would you like to say?',
        'contactus.checkbox.desc': 'Send a copy of this email to yourself',
        'contactus.button.desc': 'Send',
      },
    },
    ja: {
      messages: {
        'contactus.header': 'お問い合わせ',
        'contactus.breadcrumb.paths1': '自宅',
        'contactus.breadcrumb.lastcrumb': 'お問い合わせ',
        'contactus.label.name': '名前',
        'contactus.label.email': '電子メイル',
        'contactus.label.message': 'メッセージ',
        'contactus.input.placeholder.name': 'あなたの名前を入力してください',
        'contactus.input.placeholder.email': 'メールアドレスを入力してください',
        'contactus.input.placeholder.message': 'あなたは何を言いたいのですか？',
        'contactus.checkbox.desc': 'あなたにこのメールのコピーを送ってください',
        'contactus.button.desc': '送る',
      },
    },
  },
};
