import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avav',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avav',
          title: 'Avav'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-avav-согласие-l': IISAvavСогласиеLForm,
    'i-i-s-avav-сотрудники-l': IISAvavСотрудникиLForm,
    'i-i-s-avav-согласие-e': IISAvavСогласиеEForm,
    'i-i-s-avav-сотрудники-e': IISAvavСотрудникиEForm
  },

});

export default translations;
