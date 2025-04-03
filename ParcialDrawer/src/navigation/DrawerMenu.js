import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Personajes from '../screens/Personajes';
import Ubicaciones from '../screens/Ubicaciones';
import Capitulos from '../screens/Capitulos';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Personajes' component={Personajes}/>
      <Drawer.Screen name='Ubicaciones' component={Ubicaciones}/>
      <Drawer.Screen name='Episodios' component={Capitulos}/>
    </Drawer.Navigator>
  );
}
