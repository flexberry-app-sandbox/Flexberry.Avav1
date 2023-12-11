import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvavСогласиеLForm from './forms/i-i-s-avav-согласие-l';
import IISAvavСотрудникиLForm from './forms/i-i-s-avav-сотрудники-l';
import IISAvavСогласиеEForm from './forms/i-i-s-avav-согласие-e';
import IISAvavСотрудникиEForm from './forms/i-i-s-avav-сотрудники-e';
import IISAvavСогласиеModel from './models/i-i-s-avav-согласие';
import IISAvavСотрудникиModel from './models/i-i-s-avav-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avav-согласие': IISAvavСогласиеModel,
    'i-i-s-avav-сотрудники': IISAvavСотрудникиModel
  },

  'application-name': 'Avav',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avav',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avav',
          title: 'Avav'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        avav: {
          caption: 'Avav',
          title: 'Avav',
          'i-i-s-avav-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-avav-согласие-l': {
            caption: 'Согласие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avav-согласие-l': IISAvavСогласиеLForm,
    'i-i-s-avav-сотрудники-l': IISAvavСотрудникиLForm,
    'i-i-s-avav-согласие-e': IISAvavСогласиеEForm,
    'i-i-s-avav-сотрудники-e': IISAvavСотрудникиEForm
  },

});

export default translations;
