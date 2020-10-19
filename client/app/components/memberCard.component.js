import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getDetailArticle,deleteArticle } from '../store/action';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import {styles} from '../styles/stylesheet';

function MemberCard(props){
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [onRefresh,setOnRefresh] = useState(false)

  function handleClick(id){
    dispatch(getDetailArticle(Number(id)))
    navigation.navigate("Article")
  }

  function deletePost(id){
    dispatch(deleteArticle(Number(id)))
    setOnRefresh(true)
    setOnRefresh(false)
  }

  function handleDelete(id){
    Alert.alert(
      "Are You Sure",
      "Want to Delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => deletePost(id) }
      ],
      { cancelable: false}
    );
  }

  return(
    <TouchableOpacity onPress={() => handleClick(props.id)} style={{width:'90%',borderTopWidth:1,borderColor:'black',height:130,padding:'2%'}}>
      <View style={{flex:1,flexDirection:'column',width:'100%'}}>
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
        <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:60}}>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('EditArticle',
          {id:props.id,
          thumbnailEdit:props.thumbnail,
          titleEdit:props.title,
          articleEdit:props.article,
          categoriesEdit:props.categories})
          } 
          style={styles.editorButton}
          >
            <Text style={{color:"white"}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>handleDelete(props.id)} 
          style={styles.deleteButton}
          >
            <Text style={{color:"white"}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MemberCard