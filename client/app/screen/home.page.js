import React, {useState} from 'react';
import {
    Text,
    View,
    TextInput,
    ScrollView
} from 'react-native';
import {styles} from '../styles/stylesheet';
import Slider from '../components/slider.component';
import Splash from '../components/splash.component';
import Navbar from '../components/navbar.component';
import Card from '../components/card.component';

function Home(){
  const [splash,setSplash] = useState(true)

  setTimeout(() => {
    setSplash(false)
  }, 2000);

  return(
    <>
      {
        splash ? <Splash /> :
        <View style={{backgroundColor:'white',height:'100%'}}>
          <Navbar />
          <View style={{height:'8%',marginTop:'20%',alignItems:'center'}}>
            <TextInput
            style={{width:'90%',borderRadius:10,borderWidth:1,borderColor:'grey',height:'70%'}}
            placeholder="search here"
            />
          </View>
          <Text style={{fontFamily:'Qualy',fontSize:20,marginLeft:'5%',marginBottom:'2%'}}>Latest News</Text>
          <Slider />
          <View style={{height:'50%',backgroundColor:'white'}}>
            <Text style={{fontFamily:'Qualy',fontSize:20,marginLeft:'5%',marginTop:'2%',marginBottom:'1%',color:'black'}}>   
              Around The World
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
            <View style={{flex:1,alignItems:'center'}}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </View>
            </ScrollView>
          </View>
        </View>
      }
    </>
  )
}

export default Home