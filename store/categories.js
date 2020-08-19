export const MODULE_NAME = 'categories';
export const getCategories = (state) => state[MODULE_NAME].categories;

const initialState = {
  categories: [
    {
      id: `${Math.random()}${Date.now()}`,
      titleFirst: 'Women',
      titleSecond: 'Fashion',
      subTitle: 'Spring Season. Opened!',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/women_fashion.jpg',
    },
    {
      id: `${Math.random()}${Date.now()}`,
      titleFirst: 'Men',
      titleSecond: 'Fashion',
      subTitle: 'Pure. Old Fashioned.',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/men_fashion.jpeg',
    },
    {
      id: `${Math.random()}${Date.now()}`,
      titleFirst: 'Kids',
      titleSecond: 'Fashion',
      subTitle: 'For the smallest.',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/kids_fashion.jpg',
    },
  ],
};

export function reducer(state = initialState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}
