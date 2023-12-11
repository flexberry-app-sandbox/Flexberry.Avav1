import { Serializer as СотрудникиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avav-сотрудники';
import СогласиеSerializer from './i-i-s-avav-согласие';

export default СогласиеSerializer.extend(СотрудникиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
