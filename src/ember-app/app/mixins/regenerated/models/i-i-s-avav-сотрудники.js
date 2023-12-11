import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  телефон: DS.attr('string'),
  фио: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-avav-сотрудники.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-avav-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фио: {
    descriptionKey: 'models.i-i-s-avav-сотрудники.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-avav-согласие'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-avav-сотрудники', {
    номер: attr('Номер', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-avav-сотрудники', {
    номер: attr('Номер', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });
};
