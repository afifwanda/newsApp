import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {styles} from '../styles/stylesheet';

function Navbar(){

  return(
    <View style={styles.navbar}>
      <Text style={{fontFamily:'Qualy',color:'white',fontSize:25}}>Denně</Text>
    </View>
  )
}

export default Navbar