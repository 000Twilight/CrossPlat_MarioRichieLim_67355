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
        headerStyle: { backgroundColor: '#0d0d0d' },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#b5b5b5',
          width: 330,
          border: 0,
        },
        drawerPosition: 'left',
      })}
    >
      <Drawer.Screen name="HomeTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

export default SideBar;