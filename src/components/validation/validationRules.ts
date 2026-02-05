import {patternRegex} from '../../utils';
import {APP_CONSTANTS} from '../../constants';

export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
};

export type ValidationSchema = {
  [field: string]: ValidationRule[];
};

export const validationRules: ValidationSchema = {
  userName: [
    {
      required: true,
      message: APP_CONSTANTS.REQUIRED_USERNAME,
    },
    {
      minLength: 3,
      message: APP_CONSTANTS.MUST_BE_THREE_CHARACTERS,
    },
    {
      pattern: patternRegex,
      message: APP_CONSTANTS.USERNAME_LETTERS_NUMBER,
    },
  ],

  password: [
    {
      required: true,
      message: APP_CONSTANTS.REQUIRED_PASSWORD,
    },
    {
      minLength: 8,
      message: APP_CONSTANTS.MUST_BE_EIGHT_CHARACTERS,
    },
    {
      pattern: patternRegex,
      message: APP_CONSTANTS.PASSWORD_LETTERS_NUMBER,
    },
  ],
};
