import React, {useState} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import Card from '../components/card.component';
import MemberCategoriesComponent from '../components/memberCategories.component';

function Member({navigation,route}){

  return(
    <View style={styles.container}>
      <Navbar />
      <View style={{marginTop:'15%',backgroundColor:'white'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        <View style={{alignItems:'center'}}>
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
          <View style={{flex:1,alignItems:'center',minHeight:500}}>
            
          </View>
        </View>
        <Footer/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Member