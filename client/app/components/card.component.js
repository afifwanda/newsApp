import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getDetailArticle } from '../store/action';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import {styles} from '../styles/stylesheet';

function Card(props){
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function handleClick(id){
    dispatch(getDetailArticle(Number(id)))
    navigation.navigate("Article")
  }

  return(
    <TouchableOpacity onPress={() => handleClick(props.id)} style={{width:'90%',borderTopWidth:1,borderColor:'black',height:90,padding:'2%'}}>
      <View style={{flex:1,flexDirection:'row',width:'100%'}}>
        <View style={{flex:1,flexDirection:'column',width:'70%'}}>
          <Text style={{marginBottom:10}}>{props.title}</Text>
          <Text style={{fontFamily:'Dosis'}}>{props.article.substring(0,50).replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")}...</Text>
        </View>
        <View style={{width: '30%'}}>
        <View style={{width:'100%',height:'100%'}}>
          <Image
            source={{uri:`${props.thumbnail}`}}
            style={{width:100,height:80}}
          />
        </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card