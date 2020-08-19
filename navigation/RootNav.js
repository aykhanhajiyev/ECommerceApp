import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { HomeStack } from './HomeStack';
import { CustomDrawer } from '../components/CustomDrawer';
import { Dimensions } from 'react-native';


const {Navigator,Screen} = createDrawerNavigator();
export const RootNav = (props)=>{
    return(
        <Navigator drawerContent={(props)=><CustomDrawer {...props}/>} drawerStyle={{width:Dimensions.get("window").width}}>
            <Screen name="Home" component={HomeStack}/>
        </Navigator>
    )
}