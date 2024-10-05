import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import SidebarContent from './SidebarContent';

const Drawer = createDrawerNavigator();

function SideBar() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SidebarContent {...props} />}
      screenOptions={() => ({
        drawerType: 'slide',
        headerShown: false,
        headerTintColor: '#fff',
        drawerStyle: {
          width: 350,
        },
        drawerPosition: 'left',
      })}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

export default SideBar;