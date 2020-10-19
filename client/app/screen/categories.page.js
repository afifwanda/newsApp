import React from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import Card from '../components/card.component';
import ShimmerNews from '../components/shimmer.component';

function Categories({navigation,route}){
  const categories = route.params.Category

  const article = useSelector(state=>state.reducer.articleCategories);
  article.sort(function(a, b){return b.id-a.id});
  

  return(
    <View style={styles.container}>
      <Navbar />
      <View style={{marginTop:'15%',backgroundColor:'white'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        <Text style={styles.title}>   
          Categories : {categories}
        </Text>
        <View style={{flex:1,alignItems:'center',minHeight:560}}>
        {
          article.length === 0 ? <ShimmerNews /> :
          article.map((element)=>{
            return <Card key={element.id}
            id={element.id}
            title={element.title}
            thumbnail={element.thumbnail}
            article={element.article}
            />
          })
        }
        </View>
        <Footer />
        </ScrollView>
      </View>
    </View>
  )
}

export default Categories