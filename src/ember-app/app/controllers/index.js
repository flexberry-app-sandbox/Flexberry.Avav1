import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.avav.caption'),
          title: i18n.t('forms.application.sitemap.avav.title'),
          children: [{
            link: 'i-i-s-avav-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.avav.i-i-s-avav-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.avav.i-i-s-avav-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-avav-согласие-l',
            caption: i18n.t('forms.application.sitemap.avav.i-i-s-avav-согласие-l.caption'),
            title: i18n.t('forms.application.sitemap.avav.i-i-s-avav-согласие-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})