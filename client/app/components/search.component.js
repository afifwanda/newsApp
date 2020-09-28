import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { searchArticle } from '../store/action';
import {
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function Search(){
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [keyword,setKeyword] = useState('')

  function handleSearch(keyword){
    dispatch(searchArticle(keyword))
    navigation.navigate("Search")
  }

  return(
    <View style={{width:'100%',height:50,marginTop:'15%',alignItems:'center', flex:1}}>
      <View style={{width:"90%",flexDirection:'row',alignItems:'center',justifyContent:'center', flex:1}}>
        <TextInput
        style={{width:'90%',borderRadius:10,borderWidth:1,borderColor:'grey',height:'70%'}}
        placeholder="search by title"
        onChangeText={text => setKeyword(text)}
        />
        <TouchableOpacity onPress={()=>handleSearch(keyword)} style={{width:'10%'}}>
        <FontAwesomeIcon icon={ faSearch } size={20} style={{color:"black",marginLeft:5}} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search