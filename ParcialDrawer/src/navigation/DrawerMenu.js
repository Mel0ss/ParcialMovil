import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Personajes from '../screens/Personajes';
import Naves from '../screens/Naves';
import Planetas from '../screens/Planetas';

const Drawer = createDrawerNavigator();
export default function DrawerMenu() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name='Personajes' component={Personajes} />
      <Drawer.Screen name='Planetas' component={Planetas}/>
      <Drawer.Screen name='Naves' component={Naves}/>
    </Drawer.Navigator>
  );
}
