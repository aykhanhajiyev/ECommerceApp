import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
} from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
export const BasketItem = ({
  id,
  imageUri,
  name,
  color,
  size,
  price,
  editIcon,
  navigation,
  deleteHandler,
}) => {
  const renderEditIcon = () => {
    if (!editIcon) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => console.log('EDIT Basket')}
        style={{marginRight: 8}}>
        <FAIcon
          name="edit"
          size={30}
          color="gray"
          style={{
            marginBottom: -5,
          }}
        />
      </TouchableOpacity>
    );
  };
  const {width} = Dimensions.get('window');
  return (
    <View
      style={{
        height: 100,
        width: width - 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 14,
        marginBottom: 15,
      }}>
      {/* image */}
      <View
        style={{
          width: 50,
          height: 50,
          marginRight: 10,
        }}>
        <Image
          source={{uri: imageUri}}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'contain',
          }}
        />
      </View>
      {/* image */}
      {/* imageInfo_right */}
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* imageInfo */}
        <View
          style={{
            flex: 3,
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              color: '#5BBC9D',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: color,
                width: 10,
                height: 10,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: 'gray',
                fontSize: 15,
                marginRight: 5,
              }}>
              {color} ,
            </Text>

            <Text
              style={{
                color: 'gray',
                fontSize: 15,
              }}>
              {size}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {renderEditIcon()}
            <TouchableOpacity onPress={() => deleteHandler(id)}>
              <FAIcon name="trash-o" size={30} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
        {/* imageInfo */}
        {/* imageInfo_price */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            ${price}
          </Text>
        </View>
        {/* imageInfo_price */}
      </View>
      {/* imageInfo_right */}
    </View>
  );
};
