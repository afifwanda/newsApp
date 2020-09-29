import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

function ShimmerNews(){
  
  return(
    <View style={{flex:1,flexDirection:'row',width:'90%',height:90}}>
      <View style={{flex:1,flexDirection:'column',width:'70%',height:90,justifyContent:'center'}}>
        <ShimmerPlaceHolder style={{marginBottom:10,height:10}}/>
        <ShimmerPlaceHolder style={{marginBottom:10,height:10}}/>
        <ShimmerPlaceHolder style={{height:10}}/>
      </View>
      <View style={{width: '30%'}}>
      <View style={{width:'100%',height:'100%'}}>
        <ShimmerPlaceHolder
          style={{width:100,height:80}}
        />
      </View>
      </View>
    </View>
  )
}

export default ShimmerNews