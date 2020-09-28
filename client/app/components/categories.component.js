import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getArticleByCategories } from '../store/action';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/stylesheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNewspaper,faRunning,faLaptopCode} from '@fortawesome/free-solid-svg-icons';

function CategoriesComponent(){
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function getCategories(categories){
    dispatch(getArticleByCategories(categories))
    navigation.navigate('Categories',{Category:categories})
  }

  return(
    <View style={{width:"100%",alignItems:"center"}}>
      <View style={{width:"90%",height:30,flex:1,flexDirection:'row'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity 
          onPress={()=> getCategories('News') } 
          style={styles.categoriesButton}
          >
            <FontAwesomeIcon icon={ faNewspaper } size={20} style={{color:"white",marginRight:10}} />
            <Text style={{color:"white"}}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>getCategories('Sports')} 
          style={styles.categoriesButton}
          >
            <FontAwesomeIcon icon={ faRunning } size={20} style={{color:"white",marginRight:10}} />
            <Text style={{color:"white"}}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>getCategories('Tech')} 
          style={styles.categoriesButton}
          >
            <FontAwesomeIcon icon={ faLaptopCode } size={20} style={{color:"white",marginRight:10}} />
            <Text style={{color:"white"}}>Tech</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default CategoriesComponent