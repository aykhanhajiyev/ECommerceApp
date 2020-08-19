import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export const HomeCategory = ({
  navigation,
  imageUri,
  titleFirst,
  titleSecond,
  subTitle,
}) => {
//   const [imageDimensions, setImageDimensions] = useState({
//     width: Image.resolveAssetSource(imageUri).width,
//     height: Image.resolveAssetSource(imageUri).height,
//   });
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Category', {
          name: titleFirst,
        })
      }
      style={{
        height: 400,
      }}>
      <ImageBackground
        source={imageUri}
        style={{
          flex: 1,
          width: width,
          height: 400,
          alignSelf: 'stretch',
          resizeMode: 'contain',
          paddingLeft: 10,
        }}>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '500',
            }}>
            {titleFirst}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '500',
            }}>
            {titleSecond}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'gray',
              fontWeight: '500',
            }}>
            {subTitle}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
