import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-avav-сотрудники';

import СогласиеModel from './i-i-s-avav-согласие';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-avav-согласие';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = СогласиеModel.extend(СотрудникиMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
