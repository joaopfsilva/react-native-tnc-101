import React from 'react';
import Welcome from '../components/Welcome';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Alert} from 'react-native';

const HomepageScreen = props => {
  return(
    <View style={styles.container}>
      <Welcome />
      <Button color="rgb(77,77,77)"  title="Next" onPress={() => {
        props.navigation.navigate({routeName: 'ProductsList'})
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    padding: 20,
    fontSize: 100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: '400'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 28,
    width: 297,
    resizeMode: 'contain',
    marginTop: 15,
    marginBottom: 20,
  },
  textBox: {
    fontFamily: 'sans-serif',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(222,222,222, 0.6)',
    flex: 0.5,
    padding: 15,
    width: 350,
    bottom: 0,
    borderRadius: 15
  },
  p_bold: {
    fontWeight: 'bold',
    fontSize: 15,

  }
});

export default HomepageScreen;