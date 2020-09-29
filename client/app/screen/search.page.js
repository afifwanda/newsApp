import React, {useState} from 'react';
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


function Search({navigation,route}){

  const result = useSelector(state=>state.reducer.searchResult);
  result.sort(function(a, b){return b.id-a.id});

  return(
    <View style={styles.container}>
      <Navbar />
      <View style={{marginTop:'15%',backgroundColor:'white'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        <Text style={styles.title}>   
          Search Result :
        </Text>
        <View style={{flex:1,alignItems:'center',minHeight:500}}>
        {
          result.map((element)=>{
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

export default Search