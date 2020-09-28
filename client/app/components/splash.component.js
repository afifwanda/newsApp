import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
    Text,
    View
} from 'react-native';
import {styles} from '../styles/stylesheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons';

function Splash(){
  return(
    <View style={styles.splashContainer}>
      <Animatable.View animation="bounceIn" duration={3000}>
        <FontAwesomeIcon icon={ faNewspaper } size={40} style={{color:"white",marginRight:10}} />
      </Animatable.View>
      <Text style={styles.splashTitle}>   
        Denně
      </Text>
    </View>
  )
}

export default Splash