import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ProductDetailScreen = props => {
  console.log(props);
  return(
    <View style={styles.container}>
      <Text>The Product Detail Screen!</Text>
      <Button title="Go to homepage" onPress={() => {
        props.navigation.navigate({routeName: 'Homepage'})
      }}/>
      <Button title="Go to product list page" onPress={() => {
        props.navigation.navigate({routeName: 'ProductsList'})
      }}/>
      <Button title="Go Back" onPress={() => {
        props.navigation.goBack()
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductDetailScreen;