import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getProducts} from '../../store/products';
import {ItemList} from '../../components/ItemList';
import {FlatList} from 'react-native-gesture-handler';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});
export const CategoryScreen = connect(mapStateToProps)(
  ({navigation, route, products}) => {
    const categoryName = route.params.name;
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
      navigation.setOptions({
        headerTitle: categoryName,
      });
      setProductsByCategory(
        products.filter((product) => {
          if (product.category.toLowerCase() === categoryName.toLowerCase()) {
            return product;
          }
        }),
      );
      setLoader(true);
    }, []);
    return productsByCategory.length !== 0 ? (
      <FlatList
        data={productsByCategory}
        renderItem={({item}) => (
          <ItemList
            key={item.id}
            imageUri={item.imageUri}
            name={item.name}
            priceOne={item.priceOne}
            priceTwo={item.priceTwo}
            onPress={() => {
              navigation.navigate('Detail', {
                detailImageUri: item.imageUri,
                detailTitle: item.name,
                detailPriceOne: item.priceOne,
                detailPriceTwo: item.priceTwo,
              });
            }}
          />
        )}
        initialNumToRender={2}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eee',
        }}>
        {loader === false ? (
          <ActivityIndicator size={50} color={'#5BBC9D'} />
        ) : (
          <Text
            style={{
              fontSize: 20,
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 20,
            }}>
            There is no product in this category
          </Text>
        )}
      </View>
    );
  },
);
