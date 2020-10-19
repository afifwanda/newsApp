import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styles/stylesheet';

function Footer(){
  const navigation = useNavigation()

  return(
    <View style={styles.footer}>
      <View style={{flex:1,flexDirection:'row',height:'50%',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity style={{height:40,paddingTop:15}} onPress={()=>navigation.navigate('Home')}>
          <Text style={{fontFamily:'Dosis',color:'white',fontSize:15,textAlign:'center',marginTop:'1%',marginLeft:'5%'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40,paddingTop:15}} onPress={()=>navigation.navigate('Member')}>
          <Text style={{fontFamily:'Dosis',color:'white',fontSize:15,textAlign:'center',marginTop:'1%',marginLeft:'5%'}}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40,paddingTop:15}} onPress={()=>navigation.navigate('Login')}>
          <Text style={{fontFamily:'Dosis',color:'white',fontSize:15,textAlign:'center',marginTop:'1%',marginLeft:'5%'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{height:'50%'}}>
      <Text style={{fontFamily:'Dosis',color:'white',fontSize:15,textAlign:'center',marginTop:'3%'}}>@2020 Powered by Denně created with love by Afif</Text>
      </View>
    </View>
  )
}

export default Footer