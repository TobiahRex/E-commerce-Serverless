export default () => {
  /**
   * ----------------------------------------------------------------------
   * Webflow: Interactions 2.0: Init
   */
  Webflow.require('ix2').init({
    events: {
      'e-19': {
        id: 'e-19',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-5',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-20',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3',
        },
        config: { loop: false },
        createdOn: 1509356527236,
      },
      'e-20': {
        id: 'e-20',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-6',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-19',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3',
        },
        config: { loop: false },
        createdOn: 1509356527236,
      },
      'e-21': {
        id: 'e-21',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-5',
            affectedElements: {
              '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3': {
                id: '5a0147c7240da900013d1bee|3748d4fe-e6de-c11e-bea8-e9bca070b253',
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-22',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|3748d4fe-e6de-c11e-bea8-e9bca070b253',
        },
        config: { loop: false },
        createdOn: 1509356752789,
      },
      'e-22': {
        id: 'e-22',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-6',
            affectedElements: {
              '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3': {
                id: '5a0147c7240da900013d1bee|3748d4fe-e6de-c11e-bea8-e9bca070b253',
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-21',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|3748d4fe-e6de-c11e-bea8-e9bca070b253',
        },
        config: { loop: false },
        createdOn: 1509356752789,
      },
      'e-27': {
        id: 'e-27',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--usr-stories',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ee9d3a43-1148-ff18-5ea1-52e718760dd7',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--usr-stories',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '686b16b4-2ad1-d5ca-964c-2c9f34a8caba',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-28',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61',
        },
        config: { loop: false },
        createdOn: 1509358597784,
      },
      'e-28': {
        id: 'e-28',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--usr-stories',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ee9d3a43-1148-ff18-5ea1-52e718760dd7',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--usr-stories',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '686b16b4-2ad1-d5ca-964c-2c9f34a8caba',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-27',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61',
        },
        config: { loop: false },
        createdOn: 1509358597784,
      },
      'e-29': {
        id: 'e-29',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--vape-news',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  'bcc4bbc2-932a-bd87-30aa-5d6e68b5d676',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--vape-news',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ecadbd54-b2dd-18a4-d380-e56eaf814c26',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-30',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|92907191-e543-67e4-93de-1c7b8c06b2f4',
        },
        config: { loop: false },
        createdOn: 1509358907894,
      },
      'e-30': {
        id: 'e-30',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--vape-news',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  'bcc4bbc2-932a-bd87-30aa-5d6e68b5d676',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--vape-news',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ecadbd54-b2dd-18a4-d380-e56eaf814c26',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-29',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|92907191-e543-67e4-93de-1c7b8c06b2f4',
        },
        config: { loop: false },
        createdOn: 1509358907894,
      },
      'e-31': {
        id: 'e-31',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--vape-news',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  'bcc4bbc2-932a-bd87-30aa-5d6e68b5d676',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--vape-news',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ecadbd54-b2dd-18a4-d380-e56eaf814c26',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-32',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|4a7d0630-c62b-445e-6592-e285c4df08e8',
        },
        config: { loop: false },
        createdOn: 1509359002113,
      },
      'e-32': {
        id: 'e-32',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--vape-news',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ecadbd54-b2dd-18a4-d380-e56eaf814c26',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--vape-news',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  'bcc4bbc2-932a-bd87-30aa-5d6e68b5d676',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-31',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|4a7d0630-c62b-445e-6592-e285c4df08e8',
        },
        config: { loop: false },
        createdOn: 1509359002114,
      },
      'e-35': {
        id: 'e-35',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--juice-reviews',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '82bd36a0-d121-307f-4791-8ab7bb4b14f3',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--juice-reviews',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '62ec9f07-5662-3d48-b6c2-a5267689bd93',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-36',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|46ecfcfe-b463-92ff-3eb6-332646f2ecf5',
        },
        config: { loop: false },
        createdOn: 1509359156744,
      },
      'e-36': {
        id: 'e-36',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--juice-reviews',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '82bd36a0-d121-307f-4791-8ab7bb4b14f3',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--juice-reviews',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '62ec9f07-5662-3d48-b6c2-a5267689bd93',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-35',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|46ecfcfe-b463-92ff-3eb6-332646f2ecf5',
        },
        config: { loop: false },
        createdOn: 1509359156745,
      },
      'e-39': {
        id: 'e-39',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--contact-us',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '6d352bfd-4e8d-0c8c-086a-a8ba111a8533',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--contact-us',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '481bc689-376d-33c9-7593-36b3c81ce6a7',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-40',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|ddb5d08f-5dc4-2cee-505f-20d37d489b8f',
        },
        config: { loop: false },
        createdOn: 1509359338549,
      },
      'e-40': {
        id: 'e-40',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--contact-us',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '6d352bfd-4e8d-0c8c-086a-a8ba111a8533',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--contact-us',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '481bc689-376d-33c9-7593-36b3c81ce6a7',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-39',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|ddb5d08f-5dc4-2cee-505f-20d37d489b8f',
        },
        config: { loop: false },
        createdOn: 1509359338550,
      },
      'e-42': {
        id: 'e-42',
        eventTypeId: 'PAGE_FINISH',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-41',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: { appliesTo: 'PAGE', id: '5a0147c7240da900013d1bee' },
        config: { loop: false },
        createdOn: 1509520697205,
      },
      'e-43': {
        id: 'e-43',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-3',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--1',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '5a16c943-0ad4-7da7-7b15-d29a48dbe872',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--1',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  'a469b944-cb88-37df-301c-2a34b856cf6e',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--1',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  'd37e3675-7bbe-75c6-4d38-12113988ab8c',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-44',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|773985a0-cf3f-1f87-2c73-1cade111ecfd',
        },
        config: { loop: false },
        createdOn: 1509605109131,
      },
      'e-44': {
        id: 'e-44',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--1',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  'a469b944-cb88-37df-301c-2a34b856cf6e',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--1',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  'd37e3675-7bbe-75c6-4d38-12113988ab8c',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--1',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '5a16c943-0ad4-7da7-7b15-d29a48dbe872',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-43',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|773985a0-cf3f-1f87-2c73-1cade111ecfd',
        },
        config: { loop: false },
        createdOn: 1509605109132,
      },
      'e-45': {
        id: 'e-45',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-3',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--2',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  'e08f52fc-8bf5-67df-6d2c-2897c226751a',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--2',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '3e72efe6-cd6f-d396-bd02-f673ad57591a',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--2',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '64ab5bd0-ba9b-69cb-cf51-10509badcbf5',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-46',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|1b600c16-0f5d-b4c1-87a4-c4bf0ec480bc',
        },
        config: { loop: false },
        createdOn: 1509605833286,
      },
      'e-46': {
        id: 'e-46',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--2',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '3e72efe6-cd6f-d396-bd02-f673ad57591a',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--2',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '64ab5bd0-ba9b-69cb-cf51-10509badcbf5',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--2',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  'e08f52fc-8bf5-67df-6d2c-2897c226751a',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-45',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|1b600c16-0f5d-b4c1-87a4-c4bf0ec480bc',
        },
        config: { loop: false },
        createdOn: 1509605833286,
      },
      'e-47': {
        id: 'e-47',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-3',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--3',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '654fa687-804e-2cc1-8255-0cc9b6239f74',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--3',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '588f53ee-1dee-5145-eb7b-19010118f0a9',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--3',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  'b40b0706-7b2e-d38b-2d4f-5fa2bc6cb61d',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-48',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|da1ae609-7d24-34fc-99b7-6f66df750a77',
        },
        config: { loop: false },
        createdOn: 1509606329150,
      },
      'e-48': {
        id: 'e-48',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--3',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  'b40b0706-7b2e-d38b-2d4f-5fa2bc6cb61d',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--3',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '654fa687-804e-2cc1-8255-0cc9b6239f74',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--3',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '588f53ee-1dee-5145-eb7b-19010118f0a9',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-47',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|da1ae609-7d24-34fc-99b7-6f66df750a77',
        },
        config: { loop: false },
        createdOn: 1509606329151,
      },
      'e-49': {
        id: 'e-49',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-3',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--4',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '274d58e8-a6b8-aed6-2c79-f8fe9a0f9613',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--4',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '1fb3ca3c-34b9-e722-2e77-65e7c2e67948',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--4',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '9f8fda80-b385-02c0-48f1-7136ebbc866e',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-50',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|6632fc19-4d27-b639-8d4d-eeff77e37be1',
        },
        config: { loop: false },
        createdOn: 1509606519849,
      },
      'e-50': {
        id: 'e-50',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--4',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '1fb3ca3c-34b9-e722-2e77-65e7c2e67948',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--4',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '9f8fda80-b385-02c0-48f1-7136ebbc866e',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--4',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '274d58e8-a6b8-aed6-2c79-f8fe9a0f9613',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-49',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|6632fc19-4d27-b639-8d4d-eeff77e37be1',
        },
        config: { loop: false },
        createdOn: 1509606519850,
      },
      'e-51': {
        id: 'e-51',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-3',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--5',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '55001b37-210c-074b-437b-092151d94dc2',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--5',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '24a15d36-9d11-a96a-c63c-15b280bd4d21',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--5',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '4fb45721-1035-df1d-ebfe-7f0a5bee6249',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-52',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|ec5cc1c6-f37f-cef6-0293-875d7e6dbebc',
        },
        config: { loop: false },
        createdOn: 1509606651330,
      },
      'e-52': {
        id: 'e-52',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--5',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '55001b37-210c-074b-437b-092151d94dc2',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--5',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '4fb45721-1035-df1d-ebfe-7f0a5bee6249',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--5',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '24a15d36-9d11-a96a-c63c-15b280bd4d21',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-51',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|ec5cc1c6-f37f-cef6-0293-875d7e6dbebc',
        },
        config: { loop: false },
        createdOn: 1509606651330,
      },
      'e-53': {
        id: 'e-53',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-3',
            affectedElements: {
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--6',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '7791a7bc-e287-efa8-5587-66e806e979c4',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--6',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '4ad627df-42fa-0e88-ccbb-5a956e3df4c8',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--6',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '90c3d349-52fc-b526-8173-7e6f03d76ba5',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-54',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|52dfc179-224e-802e-e628-f06b1adc0ecc',
        },
        config: { loop: false },
        createdOn: 1509608230294,
      },
      'e-54': {
        id: 'e-54',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-4',
            affectedElements: {
              '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077': {
                selector: '.card-container__juice-card.juice-card--6',
                selectorGuids: [
                  'f7bee97f-110d-2a31-beec-ae7a02a825f6',
                  '4ad627df-42fa-0e88-ccbb-5a956e3df4c8',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8': {
                selector: '.juice-img__card-img.card-img--6',
                selectorGuids: [
                  '54121f4c-ce5e-724f-b76a-bd04f7500d5f',
                  '7791a7bc-e287-efa8-5587-66e806e979c4',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6': {
                selector: '.hdr-container__juice-card-hdr.juice-card-hdr--6',
                selectorGuids: [
                  'cf711f95-00f6-92fc-1ee1-fdc9f7542c0c',
                  '90c3d349-52fc-b526-8173-7e6f03d76ba5',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-53',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|52dfc179-224e-802e-e628-f06b1adc0ecc',
        },
        config: { loop: false },
        createdOn: 1509608230295,
      },
      'e-55': {
        id: 'e-55',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--usr-stories',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ee9d3a43-1148-ff18-5ea1-52e718760dd7',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--usr-stories',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '686b16b4-2ad1-d5ca-964c-2c9f34a8caba',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-56',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|2d03065a-6035-f88d-4b3f-9f56c61072ca',
        },
        config: { loop: false },
        createdOn: 1510032062555,
      },
      'e-56': {
        id: 'e-56',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--usr-stories',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ee9d3a43-1148-ff18-5ea1-52e718760dd7',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--usr-stories',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '686b16b4-2ad1-d5ca-964c-2c9f34a8caba',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-55',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|2d03065a-6035-f88d-4b3f-9f56c61072ca',
        },
        config: { loop: false },
        createdOn: 1510032062556,
      },
      'e-57': {
        id: 'e-57',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--vape-news',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ecadbd54-b2dd-18a4-d380-e56eaf814c26',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--vape-news',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  'bcc4bbc2-932a-bd87-30aa-5d6e68b5d676',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-58',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|aad86a7e-3f36-1984-6801-e3081f250cf0',
        },
        config: { loop: false },
        createdOn: 1510032376426,
      },
      'e-58': {
        id: 'e-58',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--vape-news',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  'ecadbd54-b2dd-18a4-d380-e56eaf814c26',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--vape-news',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  'bcc4bbc2-932a-bd87-30aa-5d6e68b5d676',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-57',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|aad86a7e-3f36-1984-6801-e3081f250cf0',
        },
        config: { loop: false },
        createdOn: 1510032376427,
      },
      'e-59': {
        id: 'e-59',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--juice-reviews',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '62ec9f07-5662-3d48-b6c2-a5267689bd93',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--juice-reviews',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '82bd36a0-d121-307f-4791-8ab7bb4b14f3',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-60',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|1760c8e6-f29b-e27e-9997-9cc3596f7755',
        },
        config: { loop: false },
        createdOn: 1510032512699,
      },
      'e-60': {
        id: 'e-60',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--juice-reviews',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '62ec9f07-5662-3d48-b6c2-a5267689bd93',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--juice-reviews',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '82bd36a0-d121-307f-4791-8ab7bb4b14f3',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-59',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|1760c8e6-f29b-e27e-9997-9cc3596f7755',
        },
        config: { loop: false },
        createdOn: 1510032512700,
      },
      'e-61': {
        id: 'e-61',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-7',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--contact-us',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '481bc689-376d-33c9-7593-36b3c81ce6a7',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--contact-us',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '6d352bfd-4e8d-0c8c-086a-a8ba111a8533',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-62',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|8526c16d-72a5-cf15-8b4c-d1e37d5fb252',
        },
        config: { loop: false },
        createdOn: 1510032602955,
      },
      'e-62': {
        id: 'e-62',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-8',
            affectedElements: {
              '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613': {
                selector: '.media-hdr__section-text.section-text--contact-us',
                selectorGuids: [
                  'd2de667d-4712-4c82-f2e0-34295e75a4f6',
                  '481bc689-376d-33c9-7593-36b3c81ce6a7',
                ],
                limitAffectedElements: null,
              },
              '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61': {
                selector: '.img-container__media-section-img.media-section-img--contact-us',
                selectorGuids: [
                  '7865729e-346e-f4e6-4b58-531373c54251',
                  '6d352bfd-4e8d-0c8c-086a-a8ba111a8533',
                ],
                limitAffectedElements: null,
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-61',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|8526c16d-72a5-cf15-8b4c-d1e37d5fb252',
        },
        config: { loop: false },
        createdOn: 1510032602956,
      },
      'e-63': {
        id: 'e-63',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-5',
            affectedElements: {
              '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3': {
                id: '5a0147c7240da900013d1bee|0a1bcd4d-ed7f-4373-8f05-a846e358d69d',
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-64',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|0a1bcd4d-ed7f-4373-8f05-a846e358d69d',
        },
        config: { loop: false },
        createdOn: 1510035913094,
      },
      'e-64': {
        id: 'e-64',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-6',
            affectedElements: {
              '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3': {
                id: '5a0147c7240da900013d1bee|0a1bcd4d-ed7f-4373-8f05-a846e358d69d',
              },
            },
            playInReverse: false,
            autoStopEventId: 'e-63',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|0a1bcd4d-ed7f-4373-8f05-a846e358d69d',
        },
        config: { loop: false },
        createdOn: 1510035913094,
      },
      'e-67': {
        id: 'e-67',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-11',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-68',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|f0db6205-47f1-21c7-784b-18b8d37a443f',
        },
        config: { loop: false },
        createdOn: 1510039166746,
      },
      'e-68': {
        id: 'e-68',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-12',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-67',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|f0db6205-47f1-21c7-784b-18b8d37a443f',
        },
        config: { loop: false },
        createdOn: 1510039166747,
      },
      'e-69': {
        id: 'e-69',
        eventTypeId: 'MOUSE_OVER',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-13',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-70',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
        },
        config: { loop: false },
        createdOn: 1510039895227,
      },
      'e-70': {
        id: 'e-70',
        eventTypeId: 'MOUSE_OUT',
        action: {
          id: '',
          actionTypeId: 'GENERAL_START_ACTION',
          config: {
            delay: 0,
            easing: '',
            duration: 0,
            actionListId: 'a-14',
            affectedElements: {},
            playInReverse: false,
            autoStopEventId: 'e-69',
          },
        },
        mediaQueries: ['main', 'medium', 'small', 'tiny'],
        target: {
          appliesTo: 'ELEMENT',
          id: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
        },
        config: { loop: false },
        createdOn: 1510039895227,
      },
    },
    actionLists: {
      'a-3': {
        id: 'a-3',
        title: 'Nav-B Juice Hover In',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-3-n-3',
                actionTypeId: 'STYLE_TEXT_COLOR',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6',
                  rValue: 252,
                  gValue: 37,
                  bValue: 37,
                  aValue: 1,
                },
              },
              {
                id: 'a-3-n',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077',
                  xValue: 1.04,
                  yValue: 1.04,
                  locked: true,
                },
              },
              {
                id: 'a-3-n-2',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6',
                  xValue: 1.05,
                  yValue: 1.05,
                  locked: true,
                },
              },
              {
                id: 'a-3-n-4',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8',
                  xValue: 1.1,
                  yValue: 1.1,
                  locked: true,
                },
              },
            ],
          },
        ],
        createdOn: 1509347199092,
        useFirstGroupAsInitialState: false,
      },
      'a-4': {
        id: 'a-4',
        title: 'Nav-B Juice Hover Out',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-4-n',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|47e6690d-24d0-3c57-a9fd-d83e836e0077',
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
              {
                id: 'a-4-n-2',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6',
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
              {
                id: 'a-4-n-3',
                actionTypeId: 'STYLE_TEXT_COLOR',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|2ff1c2f5-6d5e-0b6c-a47d-13c589299bc6',
                  rValue: 54,
                  gValue: 88,
                  bValue: 153,
                  aValue: 1,
                },
              },
              {
                id: 'a-4-n-4',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|33dd70ee-da17-2354-e582-355026faf0a8',
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
            ],
          },
        ],
        createdOn: 1509347332514,
        useFirstGroupAsInitialState: false,
      },
      'a-5': {
        id: 'a-5',
        title: 'Nav-B Nav Btn Hover In',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-5-n',
                actionTypeId: 'STYLE_BACKGROUND_COLOR',
                config: {
                  delay: 0,
                  easing: 'inSine',
                  duration: 500,
                  target: '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3',
                  rValue: 252,
                  gValue: 37,
                  bValue: 37,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        createdOn: 1509356530952,
        useFirstGroupAsInitialState: false,
      },
      'a-6': {
        id: 'a-6',
        title: 'Nav-B Nav Btn Hover Out',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-6-n',
                actionTypeId: 'STYLE_BACKGROUND_COLOR',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 1000,
                  target: '5a0147c7240da900013d1bee|76bb03a9-66f7-5ff2-1465-07ac802931b3',
                  rValue: 54,
                  gValue: 88,
                  bValue: 153,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        createdOn: 1509356640038,
        useFirstGroupAsInitialState: false,
      },
      'a-7': {
        id: 'a-7',
        title: 'Nav-B Media Page Hover In',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-7-n',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 300,
                  target: '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613',
                  xValue: 1.1,
                  yValue: 1.1,
                  locked: true,
                },
              },
              {
                id: 'a-7-n-2',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61',
                  xValue: 1.1,
                  yValue: 1.1,
                  locked: true,
                },
              },
            ],
          },
        ],
        createdOn: 1509358451859,
        useFirstGroupAsInitialState: false,
      },
      'a-8': {
        id: 'a-8',
        title: 'Nav-B Media Page Hover Out',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-8-n',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 300,
                  target: '5a0147c7240da900013d1bee|6803b97a-57b2-25d2-ef50-b1d970923613',
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
              {
                id: 'a-8-n-2',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 350,
                  target: '5a0147c7240da900013d1bee|5e088016-08ed-f6bf-90c4-7bbc3792af61',
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
            ],
          },
        ],
        createdOn: 1509358451859,
        useFirstGroupAsInitialState: false,
      },
      'a-10': {
        id: 'a-10',
        title: 'Nav-B Mycart Qty Animation',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-10-n-4',
                actionTypeId: 'STYLE_OPACITY',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 500,
                  target: '5a0147c7240da900013d1bee|3372092a-d183-4ba0-c720-be9c8b5a75e5',
                  value: 0,
                  unit: '',
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: 'a-10-n-2',
                actionTypeId: 'TRANSFORM_MOVE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 300,
                  target: '5a0147c7240da900013d1bee|3372092a-d183-4ba0-c720-be9c8b5a75e5',
                  yValue: 30,
                  xUnit: 'PX',
                  yUnit: 'PX',
                  zUnit: 'PX',
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: 'a-10-n',
                actionTypeId: 'STYLE_OPACITY',
                config: {
                  delay: 0,
                  easing: 'inCubic',
                  duration: 500,
                  target: '5a0147c7240da900013d1bee|3372092a-d183-4ba0-c720-be9c8b5a75e5',
                  value: 1,
                  unit: '',
                },
              },
              {
                id: 'a-10-n-3',
                actionTypeId: 'TRANSFORM_MOVE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 500,
                  target: '5a0147c7240da900013d1bee|3372092a-d183-4ba0-c720-be9c8b5a75e5',
                  yValue: 0,
                  xUnit: 'PX',
                  yUnit: 'PX',
                  zUnit: 'PX',
                },
              },
            ],
          },
        ],
        createdOn: 1509520811540,
        useFirstGroupAsInitialState: false,
      },
      'a-11': {
        id: 'a-11',
        title: 'Nav-B Language Switcher Hover In',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-11-n-2',
                actionTypeId: 'STYLE_BACKGROUND_COLOR',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|09dc2a28-68cd-fc3e-d475-3c752121f228',
                  rValue: 252,
                  gValue: 37,
                  bValue: 37,
                  aValue: 1,
                },
              },
              {
                id: 'a-11-n-3',
                actionTypeId: 'GENERAL_DISPLAY',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 0,
                  value: 'flex',
                  target: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: 'a-11-n-5',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: 'easeIn',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
                  xValue: 1,
                  yValue: 1,
                  locked: true,
                },
              },
              {
                id: 'a-11-n-6',
                actionTypeId: 'STYLE_OPACITY',
                config: {
                  delay: 0,
                  easing: 'easeIn',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
                  value: 1,
                  unit: '',
                },
              },
            ],
          },
        ],
        createdOn: 1510037364032,
        useFirstGroupAsInitialState: false,
      },
      'a-12': {
        id: 'a-12',
        title: 'Nav-B Language Switcher Hover Out',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-12-n',
                actionTypeId: 'STYLE_BACKGROUND_COLOR',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 500,
                  target: '5a0147c7240da900013d1bee|09dc2a28-68cd-fc3e-d475-3c752121f228',
                  rValue: 54,
                  gValue: 88,
                  bValue: 153,
                  aValue: 1,
                },
              },
              {
                id: 'a-12-n-2',
                actionTypeId: 'TRANSFORM_SCALE',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
                  yValue: 0.5,
                  locked: false,
                },
              },
              {
                id: 'a-12-n-4',
                actionTypeId: 'STYLE_OPACITY',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
                  value: 0,
                  unit: '',
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: 'a-12-n-3',
                actionTypeId: 'GENERAL_DISPLAY',
                config: {
                  delay: 0,
                  easing: '',
                  duration: 0,
                  value: 'none',
                  target: '5a0147c7240da900013d1bee|e9f32610-a155-548f-827d-226f00b30fd4',
                },
              },
            ],
          },
        ],
        createdOn: 1510037364032,
        useFirstGroupAsInitialState: false,
      },
      'a-13': {
        id: 'a-13',
        title: 'Nav-B Language Alt Hover In',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-13-n',
                actionTypeId: 'STYLE_BACKGROUND_COLOR',
                config: {
                  delay: 0,
                  easing: 'easeIn',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|c7a6150e-3c9f-7c03-49b3-e0ecf90cb46b',
                  rValue: 54,
                  gValue: 88,
                  bValue: 153,
                  aValue: 1,
                },
              },
              {
                id: 'a-13-n-2',
                actionTypeId: 'STYLE_TEXT_COLOR',
                config: {
                  delay: 0,
                  easing: 'easeIn',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|036eb129-a653-57f8-fd66-62821743c287',
                  rValue: 255,
                  gValue: 255,
                  bValue: 255,
                  aValue: 1,
                },
              },
            ],
          },
        ],
        createdOn: 1510039902216,
        useFirstGroupAsInitialState: false,
      },
      'a-14': {
        id: 'a-14',
        title: 'Nav-B Language Alt Hover Out',
        actionItemGroups: [
          {
            actionItems: [
              {
                id: 'a-14-n',
                actionTypeId: 'STYLE_TEXT_COLOR',
                config: {
                  delay: 0,
                  easing: 'easeIn',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|036eb129-a653-57f8-fd66-62821743c287',
                  rValue: 54,
                  gValue: 88,
                  bValue: 153,
                  aValue: 1,
                },
              },
              {
                id: 'a-14-n-2',
                actionTypeId: 'STYLE_BACKGROUND_COLOR',
                config: {
                  delay: 0,
                  easing: 'easeIn',
                  duration: 200,
                  target: '5a0147c7240da900013d1bee|c7a6150e-3c9f-7c03-49b3-e0ecf90cb46b',
                  rValue: 0,
                  gValue: 0,
                  bValue: 0,
                  aValue: 0,
                },
              },
            ],
          },
        ],
        createdOn: 1510039988162,
        useFirstGroupAsInitialState: false,
      },
    },
    site: {
      mediaQueries: [
        { key: 'main', min: 992, max: 10000 },
        { key: 'medium', min: 768, max: 991 },
        { key: 'small', min: 480, max: 767 },
        { key: 'tiny', min: 0, max: 479 },
      ],
    },
  });
};
