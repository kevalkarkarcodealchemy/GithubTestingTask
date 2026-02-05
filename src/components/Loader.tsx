import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Color from '../theme/Colors';
import ApplicationStyles from '../theme/ApplicationStyle';

interface LoaderProps {
  color: string;
}

const Loader = memo((props: LoaderProps) => {
  const {color} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={color} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...ApplicationStyles.alignCenterJustifyCenter,
    backgroundColor: Color.Transparent_Black,
    zIndex: 1,
  },
});

export default Loader;
