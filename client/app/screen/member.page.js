import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import { useSelector } from 'react-redux';
import MemberCategoriesComponent from '../components/memberCategories.component';
import ShimmerNews from '../components/shimmer.component';
import MemberCard from '../components/memberCard.component';

function Member({navigation}){

  const result = useSelector(state=>state.reducer.article);
  result.sort(function(a, b){return b.id-a.id});

  return(
    <View style={styles.container}>
      <Navbar />
      <View style={{marginTop:'15%',backgroundColor:'white'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
        <View style={{alignItems:'center',minHeight:600}}>
          <View style={{width:'90%',marginBottom:'5%'}}>
            <Text style={{fontFamily:'Dosis',fontSize:25,textAlign:'center'}}>   
              Welcome Contributors!
            </Text>
          </View>
          <MemberCategoriesComponent />
          <View style={{width:'90%',marginBottom:'5%',marginTop:'5%'}}>
            <Text style={{fontFamily:'Dosis',fontSize:25,textAlign:'center'}}>   
              Article List
            </Text>
          </View>
            <View style={{flex:1,alignItems:'center'}}>
              { 
              result.length === 0 ? <ShimmerNews /> :
              result.map((element)=>{
                return <MemberCard key={element.id}
                id={element.id}
                title={element.title}
                thumbnail={element.thumbnail}
                article={element.article}
                categories={element.categories}
                />
              })
            }
          </View>
        </View>
        <Footer/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Member