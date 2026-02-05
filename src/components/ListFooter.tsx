import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import Color from '../theme/Colors';

const ListFooter = memo(({loading}: {loading: boolean}) => {
  if (!loading) {
    return null;
  }
  return <ActivityIndicator size="large" color={Color.Bright_Blue} />;
});

export default ListFooter;
