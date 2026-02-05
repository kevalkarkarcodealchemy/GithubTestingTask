import React, {useCallback, useReducer, useState} from 'react';
import {View, Text, StatusBar, ImageBackground, Image} from 'react-native';
import Color from '../../theme/Colors';
import {APP_CONSTANTS} from '../../constants';
import {HeaderBgImage} from '../../assets/image';
// import {loginUser} from '../../store/user/UserThunks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CustomButton,
  InputFiled,
  Loader,
  RememberCheckbox,
} from '../../components';
import {styles} from './style';
import {HEIGHT} from '../../theme/Font';
import DeviceInfo from 'react-native-device-info';
import {validate} from '../../components/validation/validate';
import {RootState, useAppDispatch, useAppSelector} from '../../store/Store';
import {AppleIcon, EmailIcon, GoogleIcon, LockIcon} from '../../assets/svg';
import {validationRules} from '../../components/validation/validationRules';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loginUser} from '../../store/user/UserThunks';
import {Action, UserCredentialType} from '../../utils/Type';

const userCredential = {
  userName: '',
  password: '',
};

function reducer(state: UserCredentialType, action: Action) {
  return {...state, [action.type]: action.payload};
}
const Login = () => {
  const dispatch = useAppDispatch();
  const [apiError, setApiError] = useState<string>('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [activeToggle, setActiveToggle] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const {loading} = useAppSelector((state: RootState) => state.userList);
  const isTablet = DeviceInfo.isTablet();
  const [state, setUserCredential] = useReducer(reducer, userCredential);

  const handleLogin = useCallback(async () => {
    const errors = validate(state, validationRules);
    if (Object.keys(errors).length > 0) {
      setUserNameError(errors.userName || '');
      setPasswordError(errors.password || '');
      setApiError('');
      return;
    }
    setUserNameError('');
    setPasswordError('');
    setApiError('');
    try {
      await dispatch(
        loginUser({
          username: state.userName,
          password: state.password,
        }),
      ).unwrap();
      // await login(state.userName, state.password);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setApiError(errorMessage);
    }
  }, [state.userName, state.password]);

  const checkBoxToggle = useCallback(() => {
    setIsCheck(!isCheck);
  }, [isCheck]);

  const onLoginPress = useCallback(() => {
    setActiveToggle(!activeToggle);
  }, [activeToggle]);

  const onRegisterPress = useCallback(() => {
    setActiveToggle(!activeToggle);
  }, [activeToggle]);

  return (
    <SafeAreaView style={styles.mainContainer} edges={['left', 'right']}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {loading && <Loader color={Color.Bright_Blue} />}
      <Image style={styles.headerImage} source={HeaderBgImage} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.titleText}>{APP_CONSTANTS.TITLE_TEXT}</Text>
        <Text style={styles.subTitle}>{APP_CONSTANTS.SUB_TITLE_TEXT}</Text>
      </View>
      <ImageBackground source={HeaderBgImage} style={styles.imageBackGround}>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            enableOnAndroid={isTablet ? false : true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.toggleContainer}>
              <CustomButton
                title={APP_CONSTANTS.LOGIN}
                onPress={onLoginPress}
                variant={!activeToggle ? 'contained' : 'text'}
                toggleStyle={styles.toggleButton}
              />
              <CustomButton
                title={APP_CONSTANTS.REGISTER}
                onPress={onRegisterPress}
                variant={activeToggle ? 'contained' : 'text'}
                toggleStyle={styles.toggleButton}
              />
            </View>

            <View style={styles.inputContainer}>
              <InputFiled
                secureTextEntry={false}
                placeholderText={APP_CONSTANTS.USERNAME}
                value={state.userName}
                onChangeValue={value =>
                  setUserCredential({type: 'userName', payload: value})
                }
                inputIcon={<EmailIcon width={HEIGHT.h20} height={HEIGHT.h20} />}
                errorMessage={userNameError}
              />
              <InputFiled
                secureTextEntry={true}
                placeholderText={APP_CONSTANTS.PASSWORD}
                value={state.password}
                onChangeValue={value =>
                  setUserCredential({type: 'password', payload: value})
                }
                inputIcon={<LockIcon width={HEIGHT.h20} height={HEIGHT.h20} />}
                errorMessage={passwordError || apiError}
              />
              <View style={styles.forgetContainer}>
                <RememberCheckbox
                  isValue={isCheck}
                  onChange={checkBoxToggle}
                  label={APP_CONSTANTS.REMEMBER_ME}
                />
                <CustomButton
                  title={APP_CONSTANTS.FORGET_PASSWORD}
                  variant="text"
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                variant="contained"
                title={APP_CONSTANTS.LOGIN}
                onPress={handleLogin}
              />
              <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.or}>{APP_CONSTANTS.LOGIN_WITH}</Text>
                <View style={styles.line} />
              </View>
              <View style={styles.socialRow}>
                <CustomButton
                  title={APP_CONSTANTS.GOOGLE}
                  variant="elevated"
                  disabled={true}
                  inputIcon={
                    <GoogleIcon width={HEIGHT.h20} height={HEIGHT.h20} />
                  }
                />
                <CustomButton
                  title={APP_CONSTANTS.APPLE}
                  variant="elevated"
                  disabled={true}
                  inputIcon={
                    <AppleIcon width={HEIGHT.h20} height={HEIGHT.h20} />
                  }
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
