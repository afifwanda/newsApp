import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/stylesheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNewspaper,faIdCard,faPowerOff} from '@fortawesome/free-solid-svg-icons';

function MemberCategoriesComponent(){
  const navigation = useNavigation()
  return(
    <View style={{width:"100%",alignItems:"center"}}>
      <View style={{width:"90%",height:30,flex:1,flexDirection:'row'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity 
          onPress={()=>navigation.navigate('CreateArticle')} 
          style={styles.categoriesButton}
          >
            <FontAwesomeIcon icon={ faNewspaper } size={20} style={{color:"white",marginRight:10}} />
            <Text style={{color:"white"}}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Categories',{Category:'Sports'})} 
          style={styles.categoriesButton}
          >
            <FontAwesomeIcon icon={ faIdCard } size={20} style={{color:"white",marginRight:10}} />
            <Text style={{color:"white"}}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('Categories',{Category:'Tech'})} 
          style={styles.categoriesButton}
          >
            <FontAwesomeIcon icon={ faPowerOff } size={20} style={{color:"white",marginRight:10}} />
            <Text style={{color:"white"}}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default MemberCategoriesComponent