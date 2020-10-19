import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {styles} from '../styles/stylesheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNewspaper,faIdCard,faPowerOff} from '@fortawesome/free-solid-svg-icons';

function MemberCategoriesComponent(){
  const navigation = useNavigation()
  const [logout,setLogOut] = useState(false)

  function logoutUser() {
    AsyncStorage.removeItem('loginToken', (error, result) => {
      setLogOut(true)
      navigation.navigate('Home')
      setLogOut(false)
    });
  }

  const handleLogout = () => {
    Alert.alert(
      "Are You Sure",
      "Want to Logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Logout", onPress: () => logoutUser() }
      ],
      { cancelable: false}
    );
  }

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
          onPress={handleLogout} 
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