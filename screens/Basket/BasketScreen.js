import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {BasketItem} from '../../components/BasketItem';
import {BasketTotalList} from '../../components/BasketTotalList';

export const BasketScreen = ({navigation}) => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getBasketList = async () => {
    const basketList = JSON.parse(await AsyncStorage.getItem('baskets')) ?? [];
    await setBasket(basketList);
  };

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
      total += basket[i].price;
    }
    return total;
  };
  const deleteFromBasket = async (id) => {
    let basketList = JSON.parse(await AsyncStorage.getItem('baskets')) ?? [];
    if (basketList) {
      basketList = basketList.filter((item) => item.id !== id);
      await AsyncStorage.setItem('baskets', JSON.stringify(basketList));
    }
  };
  useEffect(() => {
    getBasketList();
    if (basket) {
      setTotalPrice(getTotalPrice());
    }
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EFF0F1',
      }}>
      {/* ItemLists_upper */}
      <View
        style={{
          flex: 2,
        }}>
        <FlatList
          data={basket}
          renderItem={({item}) => (
            <BasketItem
              editIcon={true}
              imageUri={item.image}
              name={item.title}
              price={item.price}
              color={item.color}
              size={item.size}
              id={item.id}
              deleteHandler={deleteFromBasket}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
        />
      </View>
      {/* ItemLists_upper */}
      {/* total_lower */}
      <View
        style={{
          flex: 1,
          paddingTop: 10,
        }}>
        <BasketTotalList label="Shipping" price={0} />
        <BasketTotalList label="Your total" price={totalPrice} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'flex-end',
            paddingBottom: 15,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => alert("Place your order")}
            style={{
              flexDirection: 'row',
              backgroundColor: '#F08C4F',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 2,
              shadowOffset: {width: 1, height: 2},
              shadowColor: '#000',
              shadowOpacity: 0.4,
              elevation: 4,
              paddingVertical: 10,
            }}>
            <View
              style={{
                marginRight: 15,
              }}>
              <Icon name="md-cart" size={20} color="white" />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: 'white',
              }}>
              Place your order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* total_lower */}
    </View>
  );
};
