import {ValidationSchema} from './validationRules';

type Errors = {
  [field: string]: string;
};

export const validate = (
  values: {[key: string]: string},
  schema: ValidationSchema,
): Errors => {
  const errors: Errors = {};

  Object.keys(schema).forEach(field => {
    const rules = schema[field];
    const value = values[field];
    for (const rule of rules) {
      if (rule.required && !value) {
        errors[field] = rule.message;
        break;
      }

      if (rule.minLength && value?.length < rule.minLength) {
        errors[field] = rule.message;
        break;
      }

      if (rule.maxLength && value?.length > rule.maxLength) {
        errors[field] = rule.message;
        break;
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        errors[field] = rule.message;
        break;
      }
    }
  });

  return errors;
};
