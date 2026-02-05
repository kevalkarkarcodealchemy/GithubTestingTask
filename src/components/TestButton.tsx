import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const TestButton = memo(({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>testButton</Text>
    </TouchableOpacity>
  );
});

export default TestButton;

// const styles = StyleSheet.create({})
