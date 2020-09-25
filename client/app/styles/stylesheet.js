import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'row',
			position: 'absolute',
			width: '100%',
			height: '100%',
			backgroundColor: '#171717',
			alignItems: "center",
      justifyContent: 'center',  
    },
    splashTitle:{
      fontFamily: "Qualy",
      fontSize: 40,
      color: 'white'
    },
    navbar:{
      flex:1,
      alignItems: "center",
      justifyContent: 'center', 
      position: 'absolute',
      top: 0,
      backgroundColor: 'black',
      height: '8%',
      width: '100%',
      elevation: 2,
    }
})