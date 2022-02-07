import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screen/Home/HomeScreen';
import DisplayScreen from '../../screen/Display/DisplayScreen';
import CaptureScreen from '../../screen/Capture/CaptureScreen';
import DrawerScreen from './DrawerScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '80%'},
        drawerType: 'front',
      }}>
      <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
      <Drawer.Screen name="DisplayDrawer" component={DisplayScreen} />
      <Drawer.Screen name="CaptureDrawer" component={CaptureScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
