import React, {useState} from 'react';
import {
    Text,
    View,
} from 'react-native';
import {styles} from '../styles/stylesheet';

function Card(){
  return(
    <View style={{width:'90%',borderTopWidth:1,borderColor:'black',height:90,padding:'2%'}}>
      <View style={{flex:1,flexDirection:'row',width:'100%'}}>
        <View style={{flex:1,flexDirection:'column',width:'70%'}}>
          <Text style={{marginBottom:10,fontFamily:'Addison'}}>Dolores ipsum amet sur vetis</Text>
          <Text>Que sando ultra solers mhethdks ehbjkste tsbtem</Text>
        </View>
        <View style={{width: '30%'}}>
          <View style={{width:'100%',height:'100%',backgroundColor:'purple'}}></View>
        </View>
      </View>
    </View>
  )
}

export default Card