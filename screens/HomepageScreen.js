import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomepageScreen = props => {
  return(
    <View style={styles.container}>
      <Text>The Homepage Screen!</Text>
      <Button title="Go to product detail screen" onPress={() => {
        props.navigation.navigate({routeName: 'ProductDetail'})
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

export default HomepageScreen;