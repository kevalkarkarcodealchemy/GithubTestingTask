import {ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

interface Address {
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface UserProfile {
  image: string;
  id: number;
  firstName: string;
  lastName: string;
  company: Company;
}

type ButtonVariant = 'text' | 'outlined' | 'contained' | 'elevated';

export type CustomButtonProps = {
  title: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  inputIcon?: React.ReactElement<SvgProps>;
  toggleStyle?: ViewStyle;
};

export type DataFieldCardProps = {
  renderData: UserProfile;
};
export type DataFieldCardProps1 = {
  renderData: string;
};

export type GetUsersPayload = {
  pageSize: number;
  offset: number;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type InputFieldProps = {
  placeholderText: string;
  secureTextEntry: boolean;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeValue: (text: string) => void;
  inputIcon?: React.ReactElement<SvgProps>;
  errorMessage?: string;
  isError?: boolean;
};

export type UserCredentialType = {
  userName: string;
  password: string;
};

export interface Action {
  type: string;
  payload: string;
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
