import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../utils/Type';
import Home from '../screen/Home';
import Login from '../screen/Login';
import {RootState, useAppSelector} from '../store/Store';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  const {userLoginToken} = useAppSelector((state: RootState) => state.userList);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userLoginToken ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
