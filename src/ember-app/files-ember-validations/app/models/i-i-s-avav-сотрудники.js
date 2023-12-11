import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-avav-сотрудники';

import СогласиеModel from './i-i-s-avav-согласие';

let Model = СогласиеModel.extend(СотрудникиMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
