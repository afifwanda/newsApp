import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getDetailArticle } from '../store/action';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import Swiper from 'react-native-swiper';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

function Slider() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const listTitle = useSelector(state=>state.reducer.article);
  listTitle.sort(function(a, b){return b.id-a.id});

  function handleClick(id){
    dispatch(getDetailArticle(Number(id)))
    navigation.navigate("Article")
  }

  return(
    <>
    {
      listTitle.length === 0 ?
      <View style={{width:'100%',flex:1,alignItems:'center'}}>
        <ShimmerPlaceHolder style={{height:150,borderRadius:10,width:'90%'}}/> 
      </View>
       :
      <Swiper
      height={150}
      autoplay={true}
      autoplayTimeout={10}
      style={styles.slider}
      showsPagination={false}
    >
    {
      listTitle.map((element)=>{
        return <View style={styles.slide1} key={element.id}>
          <TouchableOpacity
          onPress={()=>handleClick(element.id)}
          >
            <Text style={styles.text}>
              {element.title}
            </Text>
          </TouchableOpacity>
        </View>
      })
    }
    </Swiper>
    }
  </>
  )
}

const styles = StyleSheet.create({
  slider:{
    backgroundColor:'white'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#77a2bd',
    borderRadius: 20,
    width:'90%',
    marginLeft: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  text: {
    color: '#fff',
    fontFamily: 'Dosis',
    fontSize:20,
    textAlign:'justify'
  }
})

export default Slider