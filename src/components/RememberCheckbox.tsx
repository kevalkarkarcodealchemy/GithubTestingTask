import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from '../theme/Colors';
import {HEIGHT, SIZE, WEIGHT} from '../theme/Font';
import {Checked, UnChecked} from '../assets/svg';

interface RememberCheckboxProps {
  isValue: boolean;
  onChange: () => void;
  label: string;
}

const RememberCheckbox = memo(
  ({isValue, onChange, label}: RememberCheckboxProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={onChange}
        accessibilityRole="checkbox"
        accessibilityState={{checked: isValue}}>
        {isValue ? (
          <Checked width={HEIGHT.h16} height={HEIGHT.h16} />
        ) : (
          <UnChecked width={HEIGHT.h16} height={HEIGHT.h16} />
        )}
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  },
);

export default RememberCheckbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: SIZE.f12,
    fontWeight: WEIGHT.w600,
    color: Color.Gray_Dark,
  },
});
