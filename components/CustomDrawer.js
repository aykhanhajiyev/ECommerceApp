import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import backgroundImage from '../assets/drawer_bg.jpg';
import reviewerImage from '../assets/reviewer.jpg';

export const CustomDrawer = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={backgroundImage}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(91, 188, 157, 0.9)',
            paddingTop: 15,
            paddingHorizontal: 10,
            paddingBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Menu
            </Text>
            <Icon
              onPress={() => navigation.closeDrawer()}
              name="ios-close"
              color="white"
              size={50}
            />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'space-around',
              marginVertical: 20,
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Main');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon name="ios-home" color="white" size={40} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: '400',
                  marginLeft: 5,
                }}>
                home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Main');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon name="ios-search" color="white" size={40} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: '400',
                  marginLeft: 5,
                }}>
                search
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Main');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon name="ios-list" color="white" size={40} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: '400',
                  marginLeft: 5,
                }}>
                categories
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Basket');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
              }}>
              <Icon name="ios-cart" color="white" size={40} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: '400',
                  marginLeft: 5,
                }}>
                basket
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  overflow: 'hidden',
                  borderRadius: 15,
                  marginRight: 5,
                }}>
                <Image
                  source={reviewerImage}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: '400',
                }}>
                Account
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
