import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';

import { PRODUCTS } from '../data/dummy-data';

const renderGridItem = itemData => {
  console.log(itemData)
  return (
    <View style={styles.container}>
      <Text>{itemData.item.type}</Text>
      <Text>{itemData.item.brand}</Text>
      <Text>€{itemData.item.price}</Text>
      <Image source={{uri: itemData.item.image_url}} style={{height: 100, width: 100}}></Image>
      <Button title='View' onPress={() => {
            props.navigation.navigate('ProductDetail', { item: itemData.item })
      }}/>
    </View>
  )
}

const renderRealGridItem = () => {
  return fetch('https://thenextcloset.com/api/v3/products', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      page: '1',
    })
  })
  .then((response) => response.json())
  .then((json) => {
    return json.products;
  })
  .catch((error) => {
    console.error(error);
  });
}

const ProductsListScreen = props => {
  return (
    <FlatList
    data={renderRealGridItem}
    renderItem={renderGridItem}
    numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductsListScreen;