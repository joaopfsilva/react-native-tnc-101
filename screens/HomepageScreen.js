import React from 'react';
import Welcome from '../components/Welcome';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Alert} from 'react-native';

const imageBackground = { uri: 'https://assets.thenextcloset.com/system/uploads/content_block/desktop_image/1/l_Marie-Kondo_highlighted-blog-desktop.jpg' };
const tncLogo = require('../assets/tnc_2.png')

const HomepageScreen = props => {
  return(
    <View style={styles.container}>
      <Welcome />
      {/* <ImageBackground source={imageBackground} style={styles.image}>
      <View style={styles.textBox}>

        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Welcome to</Text>
        <Image source={tncLogo} style={styles.logo}/>
        <Text style={{fontSize: 20}}>Sell your pre-loved items in just a few simple step and give them a second life.</Text>
        <Text style={{fontWeight: 'bold'}}>#letstartthisfashionrevolution</Text>

      </View> */}
      {/* <Button style={styles.btn} color="rgb(77,77,77)" onPress={() => Alert.alert('No action (yet!)')} title="Next"/> */}
      <Button color="rgb(77,77,77)"  title="Go to product detail screen" onPress={() => {
        props.navigation.navigate({routeName: 'ProductDetail'})
      }}/>
      <Button color="rgb(77,77,77)"  title="Go to product list page" onPress={() => {
        props.navigation.navigate({routeName: 'ProductsList'})
      }}/>
      <Button color="rgb(77,77,77)"  title="Go Backjkkkkkkkkkkk" onPress={() => {
        props.navigation.goBack()
      }}/>
    {/* </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: '400'
  },
  btn: {
    color: 'white',
    backgroundColor: 'rgb(77,77,77)',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 40
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