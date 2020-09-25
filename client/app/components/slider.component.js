import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';
import Swiper from 'react-native-swiper';

class Slider extends Component {
  render(){

    return(
      <Swiper
        height={150}
        autoplay={true}
        autoplayTimeout={10}
        style={styles.slider}
        showsPagination={false}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet mdjsgsjk kadhnsagu lsllsl lsllls lslldkjao
          </Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide1}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  slider:{
    backgroundColor:'white'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#e69393',
    borderRadius: 20,
    width:'90%',
    marginLeft: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    borderRadius: 20,
    width:'90%',
    marginLeft: '5%'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    borderRadius: 20,
    width:'90%',
    marginLeft: '5%'
  },
  text: {
    color: '#fff',
    fontFamily: 'Dosis',
    fontSize:20,
  }
})

export default Slider