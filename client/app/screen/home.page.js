import React, {useState,useEffect} from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getArticle } from '../store/action';
import {styles} from '../styles/stylesheet';
import Search from '../components/search.component';
import Slider from '../components/slider.component';
import Splash from '../components/splash.component';
import CategoriesComponent from '../components/categories.component'
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import Card from '../components/card.component';
import ShimmerNews from '../components/shimmer.component';

function Home({navigation}){
  const dispatch = useDispatch()

  const [splash,setSplash] = useState(true)

  setTimeout(() => {
    setSplash(false)
  }, 2000);

  useEffect(()=>{
    dispatch(getArticle())
  },[dispatch]);

  const listArticle = useSelector(state=>state.reducer.article);
  listArticle.sort(function(a, b){return b.id-a.id});

  return(
    <>
      {
        splash ? <Splash /> :
        <View style={styles.container}>
          <Navbar />
          <ScrollView
            nestedScrollEnabled={true}
          >
            <Search />
            <Text style={styles.title}>Categories</Text>
            <CategoriesComponent />
            <Text style={styles.title}>Latest News</Text>
            <Slider />
            <View style={{height:270,backgroundColor:'white',marginBottom:'5%'}}>
              <Text style={styles.title}>   
                Around The World
              </Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
              >
              <View style={{flex:1,alignItems:'center'}}>
                {listArticle.length === 0 ?
                  <ShimmerNews /> :
                  listArticle.map((element)=>{
                    return <Card key={element.id}
                    id={element.id}
                    title={element.title}
                    thumbnail={element.thumbnail}
                    article={element.article}
                    />
                  })
                }
              </View>
              </ScrollView>
            </View>
            <Footer />
          </ScrollView>
        </View>
      }
    </>
  )
}

export default Home