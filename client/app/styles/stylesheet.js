import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    categoriesButton:{
      flex:1,
      flexDirection:"row",
      backgroundColor:'#91c28d',
      width:100,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      marginLeft:5,
    },
    inputContainer:{
      width:"90%",
      marginTop:5,
      marginBottom:5,
    },
    container:{
      backgroundColor:'white',
      minHeight:"100%"
    },
    editorBox: {
      flex:1,
      height:200,
      borderWidth:0.5,
      borderColor:'black',
      width:'100%'
    },
    toolbar: {
      height:50,
      width:'100%',
      borderWidth:0.5,
      borderColor:'black',
      backgroundColor:'#F5FCFF'
    },
    title:{
      fontFamily:'Qualy',
      fontSize:20,
      marginLeft:'5%',
      marginTop:'2%',
      marginBottom:'2%',
      color:'black'
    },
    submitButton:{
      flex:1,
      backgroundColor:'#91c28d',
      width:100,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      marginTop:10,
      height:25,
    },
    splashContainer:{
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
      backgroundColor: '#242526',
      height: '8%',
      width: '100%',
      elevation: 2,
    },
    footer:{
      flex:1,
      bottom: 0,
      flexDirection:'column',
      backgroundColor: '#242526',
      height: 80,
      width: '100%',
      elevation: 2,
    }
})