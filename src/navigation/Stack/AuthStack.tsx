import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../../screen/Home/HomeScreen';
import DisplayScreen from '../../screen/Display/DisplayScreen';
import CaptureScreen from '../../screen/Capture/CaptureScreen';
import screenName from '../../utils/screenName';
import DrawerNavigation from '../Drawer/Drawernavigation';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={screenName.mainTab} component={DrawerNavigation} />
      <Stack.Screen name={screenName.homeScreen} component={HomeScreen} />
      <Stack.Screen name={screenName.displayScreen} component={DisplayScreen} />
      <Stack.Screen name={screenName.captureScreen} component={CaptureScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
