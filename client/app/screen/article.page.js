import React from 'react';
import {
    Text,
    Image,
    View,
    ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
// import { WebView } from 'react-native-webview';
import HTML from "react-native-render-html";
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';

function Article(){

  const article = useSelector(state=>state.reducer.detailArticle[0]);

  return(
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
      <View style={{flex:1,alignItems:'center'}}>
        <View style={{marginTop:'15%',backgroundColor:'white',width:'90%',minHeight:500}}>
          <Text style={{fontFamily:'Dosis',fontSize:25}}>{article.title}</Text>
          <View style={{marginTop:'5%', marginBottom:'5%',alignItems:'center'}}>
            <View style={{height:150,width:200}}>
              <Image
                style={{height:150,width:200}}
                source={{uri:`${article.thumbnail}`}}
              />
            </View>
          </View>
          <HTML
          html= {`${article.article}`}
          style={{textAlign:'justify',fontFamily:'dosis',fontSize:50}}
          />
        </View>
      </View>
      <Footer />
      </ScrollView>
    </View>
  )
}

export default Article