import React from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {HomeCategory} from '../../components/HomeCategory';
import {getCategories} from '../../store/categories';

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

export const MainScreen = connect(mapStateToProps)(({categories, ...rest}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView scrollEnabled={true}>
        {/* <HomeCategory
        imageUri={require("../../assets/women_fashion.jpg")}
        titleFirst="Women"
        titleSecond="Fashion"
        subTitle="Spring Season. Opened!"
        screenProps="Super"
        {...rest}
      />
      <HomeCategory
        imageUri={require("../../assets/men_fashion.jpeg")}
        titleFirst="Men"
        titleSecond="Fashion"
        subTitle="Pure. Old Fashioned."
        {...rest}
      />
      <HomeCategory
        imageUri={require("../../assets/kids_fashion.jpg")}
        titleFirst="Kids"
        titleSecond="Fashion"
        subTitle="For the smallest."
        {...rest}
      /> */}
        {categories.map((category) => (
          <HomeCategory
            key={category.id}
            imageUri={{uri:category.imageUri}}
            titleFirst={category.titleFirst}
            titleSecond={category.titleSecond}
            subTitle={category.subTitle}
            {...rest}
          />
        ))}
      </ScrollView>
    </View>
  );
});
