import React, {useEffect,useState} from 'react';
import {
    Text,
    Image,
    View,
    ScrollView, 
    TextInput,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {login} from '../store/action';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import AsyncStorage from '@react-native-community/async-storage';


function Login(){
  const navigation = useNavigation()
  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)
  const [warning,setWarning] = useState(false)

  const getUser =() => {
    try {
      AsyncStorage.getItem('loginToken', (error, result) => {
        if (result === 'ekekekeke') {
          setWarning(false)
          navigation.navigate('Member')
        }
        else{
          setWarning(true)
        }
    });
      console.log(value)
    } catch(e) {
      // error reading value
    }
  }

  function handleSubmit(username,password){
    login(username,password)
    getUser()
  }


  return(
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
      <View style={{flex:1,alignItems:'center',backgroundColor:'#242526'}}>
        <View style={{marginTop:'15%',backgroundColor:'#242526',width:'90%'}}>
          <View style={{marginTop:'5%', marginBottom:'5%',alignItems:'center',minHeight:450}}>
            <Text style={{color:'white', fontFamily:'Qualy',fontSize:20, marginBottom:10}}>Welcome Back !</Text>
            <Image 
            source={require('../../assets/image/humaaans.png')}
            style={{height:'50%',width:'65%'}}
            resizeMode={'stretch'}
            />
            <View style={styles.inputContainer}>
              <Text style={{color:'white'}}>Username :</Text>
              <TextInput
                style={{borderRadius:5,borderWidth:1,borderColor:'white',height:40,color:'white'}}
                inputStyle={{color:'white'}}
                onChangeText={text=> setUsername(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color:'white'}}>Password :</Text>
              <TextInput
                style={{borderRadius:5,borderWidth:1,borderColor:'white',height:40,color:'white'}}
                inputStyle={{color:'white'}}
                secureTextEntry={true}
                onChangeText={text=> setPassword(text)}
              />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={()=>handleSubmit(username,password)}>
              <Text style={{fontFamily:'Qualy',color:'white',fontSize:15,paddingBottom:0,paddingTop:0}}>Submit</Text>
            </TouchableOpacity>
            {warning ?             
              <View style={{marginTop:10}}>
              <Text style={{color:'white'}}>Wrong Username/Password. Try Again.</Text>
              </View> : 
              <View/>
            }
          </View>
        </View>
      </View>
      <Footer/>
      </ScrollView>
    </View>
  )
}

export default Login