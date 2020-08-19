import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';

export const ItemList = ({imageUri, name, priceOne, priceTwo, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          width: Dimensions.get('window').width/2-32,
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            marginBottom: 10,
          }}>
          <Image
            source={{uri:imageUri}}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#63CBA7',
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 5,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              ${priceOne}
            </Text>
            <Text
              style={{
                fontSize: 12,
                textDecorationLine: 'line-through',
                marginLeft: 10,
              }}>
              {priceTwo}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
