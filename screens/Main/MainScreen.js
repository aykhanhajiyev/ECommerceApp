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
        {categories.map((category) => (
          <HomeCategory
            key={category.id}
            imageUri={{uri: category.imageUri}}
            titleFirst={category.titleFirst}
            titleSecond={category.titleSecond}
            subTitle={category.subTitle}
            categoryId={category.id}
            {...rest}
          />
        ))}
      </ScrollView>
    </View>
  );
});
