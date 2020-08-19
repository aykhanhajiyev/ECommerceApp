export const MODULE_NAME = 'products';
export const getProducts = (state) => state[MODULE_NAME].products;

const initialState = {
  products: [
    {
      id: 1,
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/dresses/dresses_1.jpg',
      name: 'Short dress',
      priceOne: 19.99,
      priceTwo: '$39.99',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Helena',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/dresses/dresses_2.jpg',
      priceOne: 120,
      priceTwo: '$190',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Marie anne short',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/dresses/dresses_3.jpg',
      priceOne: 180,
      priceTwo: null,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      categoryId: 1,
    },
    {
      id: 4,
      name: 'Nike shoes',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 59.99,
      priceTwo: null,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      categoryId: 3,
    },
    {
      id: 5,
      name: 'Baby shoes',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_2.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 6,
      name: 'FLO Kids ',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_3.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 7,
      name: 'Shoes for kids comfortable',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 8,
      name: 'Shoes for kids comfortable',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 9,
      name: 'Shoes for kids comfortable',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 10,
      name: 'Shoes for kids comfortable',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 11,
      name: 'Shoes for kids comfortable',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
    {
      id: 12,
      name: 'Shoes for kids comfortable',
      imageUri:
        'https://aykhanhajiyev.com/assets/ecommerceapp/shoes/shoes_1.jpg',
      priceOne: 99.99,
      priceTwo: '$299.5',
      description:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in",
      categoryId: 3,
    },
  ],
};

export function reducer(state = initialState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}
