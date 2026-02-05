import React, {memo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Color from '../theme/Colors';
import {SIZE, WEIGHT} from '../theme/Font';
import {InputFieldProps} from '../utils/Type';
import {TextInput} from 'react-native-gesture-handler';
import {InVisibleEyes, VisibleEyes} from '../assets/svg';
import ApplicationStyles from '../theme/ApplicationStyle';
import {moderateScale} from 'react-native-size-matters';

const InputFiled = memo((props: InputFieldProps) => {
  const {
    placeholderText,
    secureTextEntry,
    inputIcon,
    onChangeValue,
    value,
    errorMessage,
  } = props;

  const [isVisible, setIsVisible] = useState<boolean>(secureTextEntry);

  return (
    <View>
      <View style={styles.inputContainer}>
        {inputIcon}
        <TextInput
          placeholder={placeholderText}
          style={styles.input}
          placeholderTextColor={Color.Gray_Dark}
          secureTextEntry={isVisible}
          value={value}
          onChangeText={onChangeValue}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            {isVisible ? (
              <InVisibleEyes
                width={moderateScale(17)}
                height={moderateScale(17)}
              />
            ) : (
              <VisibleEyes
                width={moderateScale(17)}
                height={moderateScale(17)}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    ...ApplicationStyles.directionRowAlineCenter,
    borderWidth: 1,
    borderColor: Color.Bright_Gray,
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
  },
  input: {
    flex: 1,
    color: Color.Black,
    marginLeft: moderateScale(15),
    fontSize: SIZE.f14,
    fontWeight: WEIGHT.w500,
    paddingVertical: 5,
  },
  errorText: {
    marginTop: 5,
    color: Color.Red,
    fontSize: SIZE.f12,
    fontWeight: WEIGHT.w500,
  },
});

export default InputFiled;
