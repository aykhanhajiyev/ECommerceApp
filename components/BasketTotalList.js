import React from 'react';
import {View, Text} from 'react-native';

export const BasketTotalList = ({label, price}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 0.6,
        borderTopColor: 'gray',
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        ${price}
      </Text>
    </View>
  );
};
