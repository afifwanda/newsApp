import React, {useEffect} from 'react';
import {
    Text,
    Image,
    View,
    ScrollView
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { useSelector } from 'react-redux';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';

function Login(){
  
  const WebClientID = '909510501434-6f0kjlaftkjqmrk54is4h0d2h64u9ibu.apps.googleusercontent.com'

  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: WebClientID, // client ID of type WEB for your server(needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
         });
  },[])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      console.log(info,'ini info')
      console.log('masuk')
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('masuk1')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('masuk2')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('masuk3')
      } else {
        // some other error happened
        console.log(error)
      }
    }
  };


  return(
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
      <View style={{flex:1,alignItems:'center'}}>
        <View style={{marginTop:'15%',backgroundColor:'white',width:'90%'}}>
          <View style={{marginTop:'5%', marginBottom:'5%',alignItems:'center',justifyContent: 'center',minHeight:450}}>
          <GoogleSigninButton
            style={{ width: 300, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signIn()}
          />
          </View>
        </View>
      </View>
      <Footer/>
      </ScrollView>
    </View>
  )
}

export default Login