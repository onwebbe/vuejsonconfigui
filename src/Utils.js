class Utils {
  static checkFieldType (fieldValue) {
    if (fieldValue == null) {
      return 'FieldString';
    }
    if (fieldValue === true || fieldValue === false) {
      return 'FieldBoolean';
    }
    if (Number.isInteger(fieldValue)) {
      return 'FieldNumber';
    }
    if (Number.isFinite(fieldValue)) {
      return 'FieldDecimal';
    }
    if (Array.isArray(fieldValue)) {
      return 'FieldArray';
    }
    if (typeof fieldValue === 'string') {
      return 'FieldString';
    }
    if (fieldValue instanceof Object) {
      return 'FieldMap';
    }
    return 'FieldString';
  }

  static getSupportedTypes () {
    return ['String', 'Number', 'Decimal', 'Boolean', 'Array', 'Map'];
  }

  static getDefaultValueFromType (type) {
    let returnV = null;
    switch (type) {
    case 'String':
      returnV = '';
      break;
    case 'Number':
      returnV = 0;
      break;
    case 'Decimal':
      returnV = 0.1;
      break;
    case 'Boolean':
      returnV = true;
      break;
    case 'Array':
      returnV = [];
      break;
    case 'Map':
      returnV = {};
      break;
    default:
      returnV = '';
    }
    return returnV;
  }
}
export default Utils;
