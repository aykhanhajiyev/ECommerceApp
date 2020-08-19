import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import DropDownPicker from 'react-native-dropdown-picker';

const {width} = Dimensions.get('window');

export const DetailScreen = ({navigation, route}) => {
  const [color, setColor] = useState('black');
  const [size, setSize] = useState('small');

  const {
    detailId,
    detailImageUri,
    detailTitle,
    detailPriceOne,
    detailPriceTwo,
  } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: detailTitle,
    });
  }, []);

  const addToBasketHandler = async () => {
    const basketList = JSON.parse(await AsyncStorage.getItem('baskets')) ?? [];
    let flag = false; // it controls item dublicate
    if (basketList) {
      for (let i = 0; i < basketList.length; i++) {
        if (basketList[i].id === detailId) {
          flag = true;
          break;  
        }
      }
    }
    if (flag === false) {
      basketList.push({
        id: detailId,
        title: detailTitle,
        color: color,
        size: size,
        price: detailPriceOne,
        image: detailImageUri,
      });
      await AsyncStorage.setItem('baskets', JSON.stringify(basketList));
      ToastAndroid.show('Item added to basket', ToastAndroid.LONG);
      console.log(basketList);
    } else {
      ToastAndroid.show('Item has already on the basket', ToastAndroid.LONG);
    }
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView>
        {/* image */}
        <View
          style={{
            width: width,
            height: width * 0.8,
          }}>
          <Image
            source={{uri: detailImageUri}}
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
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginRight: 15,
            }}>
            $ {detailPriceOne}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'gray',
              textDecorationLine: 'line-through',
            }}>
            {detailPriceTwo}
          </Text>
          <View
            style={{
              width: width / 2 - 32,
              backgroundColor: '#F08C4F',
              borderRadius: 2,
              padding: 5,
              margin: 10,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={addToBasketHandler}>
              <View
                style={{
                  flex: 1,
                  paddingLeft: 15,
                }}>
                <Icon name="md-cart" size={20} color="white" />
              </View>
              <View
                style={{
                  flex: 2,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                  }}>
                  <Text>Add to basket</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 50, flexDirection: 'row'}}>
          <View style={{width: width / 2 - 16, marginHorizontal: 8}}>
            <DropDownPicker
              items={[
                {
                  label: 'Black',
                  value: 'black',
                },
                {
                  label: 'Yellow',
                  value: 'yellow',
                },
                {
                  label: 'Blue',
                  value: 'blue',
                },
              ]}
              defaultValue={color}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) => setColor(item.value)}
            />
          </View>
          <View style={{width: width / 2 - 16, marginHorizontal: 8}}>
            <DropDownPicker
              items={[
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
              ]}
              defaultValue={size}
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) => setSize(item.value)}
            />
          </View>
        </View>
        {/* Description */}
        {/* DescriptionBox */}
        <View
          style={{
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}>
          {/* upper */}
          <View
            style={{
              flex: 1,
              marginHorizontal: 15,
              marginVertical: 25,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#5BBC9D',
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 20,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </Text>
          </View>
          {/*upper */}
          {/* lower */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              paddingBottom: 25,
            }}>
            {/* left */}
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#5BBC9D',
                  marginBottom: 5,
                }}>
                Available Colors
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    backgroundColor: 'black',
                    width: 15,
                    height: 15,
                    marginRight: 15,
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'yellow',
                    width: 15,
                    height: 15,
                    marginRight: 15,
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'blue',
                    width: 15,
                    height: 15,
                  }}
                />
              </View>
            </View>
            {/* left */}
            {/* right */}
            <View
              style={{
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#5BBC9D',
                  marginBottom: 5,
                }}>
                Available Sizes
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                S, M, L
              </Text>
            </View>
            {/* right */}
          </View>
          {/* lower */}
        </View>
        {/* reviews */}
        <View
          style={{
            paddingLeft: 25,
            paddingVertical: 5,
            backgroundColor: '#EFF0F1',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',
            }}>
            33 Reviews
          </Text>
        </View>
        {/* reviews */}
        {/* reviewBox */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 25,
          }}>
          {/* left */}
          <View
            style={{
              flex: 1,
            }}>
            {/* profile */}
            <View
              style={{
                width: 30,
                height: 30,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 15,
                overflow: 'hidden',
              }}>
              <Image
                source={require('../../assets/reviewer.jpg')}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          {/* left */}
          {/* right */}
          <View
            style={{
              flex: 4,
            }}>
            {/* right_up */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              {/* name and star */}
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingBottom: 10,
                  }}>
                  Aykhan Hajiyev says
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'gray',
                  }}>
                  2 Hours ago
                </Text>
              </View>
              <View>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={4}
                  starSize={16}
                  fullStarColor="yellow"
                />
              </View>
            </View>
            {/* right_up */}
            {/* right_down */}
            <Text
              style={{
                color: 'gray',
                fontSize: 13,
                lineHeight: 18,
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </Text>
            {/* right_down */}
          </View>
          {/* right */}
        </View>
        {/* reviewBox */}
      </ScrollView>
    </View>
  );
};
