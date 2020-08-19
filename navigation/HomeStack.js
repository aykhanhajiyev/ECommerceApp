import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';

import {MainScreen} from '../screens/Main/MainScreen';
import {CategoryScreen} from '../screens/Category/CategoryScreen';
import {DetailScreen} from '../screens/Detail/DetailScreen';
import {BasketScreen} from '../screens/Basket/BasketScreen';

const {Navigator, Screen} = createStackNavigator();
export const HomeStack = () => {
  return (
    <Navigator
      screenOptions={({navigation}) => ({
        headerTitle: '',
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
        },
        headerStyle: {
          backgroundColor: '#5BBC9D',
        },
        headerLeft: () => (
          <Icon
            name="md-menu"
            color="white"
            size={30}
            style={{paddingLeft: 10}}
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <Icon
            name="ios-search"
            color="white"
            size={26}
            style={{
              paddingRight: 10,
            }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}>
      <Screen
        name="Main"
        component={MainScreen}
        options={{headerTitle: 'Home'}}
      />
      <Screen
        name="Category"
        component={CategoryScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <Icon
              name="ios-arrow-back"
              color="white"
              size={30}
              style={{paddingLeft: 10}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Screen
        name="Detail"
        component={DetailScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <Icon
              name="ios-arrow-back"
              color="white"
              size={30}
              style={{paddingLeft: 10}}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Screen name="Basket" component={BasketScreen} />
    </Navigator>
  );
};
