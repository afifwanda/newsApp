import React, {useState,useRef} from 'react';
import {
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import {addArticle} from '../store/action';
import {useDispatch} from 'react-redux';
import {actions,defaultActions,RichEditor,RichToolbar} from 'react-native-pell-rich-editor'
//import ImagePicker from 'react-native-image-picker';
import {Picker} from '@react-native-community/picker';

function CreateArticle({navigation}){
  const dispatch = useDispatch()

  const [disabled,setDisabled] = useState(false)
  const [title,setTitle] = useState('')
  const [categories,setCategories] = useState('News')
  const [thumbnail,setThumbnail] = useState('')
  const [content,setContent] = useState('')
  const [image,setImage] = useState('')
  const richText = useRef()

  function editorInitializedCallback() {
    richText.current.registerToolbar(function(items){
      console.log('Toolbar click, selected items (insert end callback):', items);
    })
  }

  const handleContentChange = (html) =>{
    setContent(html)
  }

    // const createFormData = (image) => {
  //   const data = new FormData()
  //   data.append("image",{
  //     name: image.fileName,
  //     type: image.type,
  //     uri : Platform.OS === 'android' ? image.uri : image.uri.replace("file://","")
  //   },image.fileName)
  //   console.log(data,'ini data')
  // }

  // const addImage = () => {
  //   const options = {
  //     quality: 1.0,
  //     maxWidth: 400,
  //     maxHeight: 400,
  //   }

  //   ImagePicker.showImagePicker(options, response =>{
  //     if (response.didCancel) {
  //       console.log('User cancelled photo picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       setTimeout(() => {
  //         console.log(response,'ini uri')
  //         fetch("https://secure-coast-32465.herokuapp.com/upload",{
  //           method: "POST",
  //           body: createFormData(response)
  //         })
  //         .then(response=>response.json())
  //         .then(response=>{
  //           console.log('success',response)
  //         })
  //         .catch(err=>{
  //           console.log(err)
  //         })
  //       }, 100);
  //     }
  //   })
  // }


  function handleSubmit(title,categories,thumbnail,article){
    dispatch(addArticle(title,categories,thumbnail,article))
    navigation.navigate('Member')
  }


  const contentStyle = {
    backgroundColor: '#fff',
    color: 'black',
    placeholderColor: 'grey',
    contentCSSText: 'font-size: 16px; min-height: 300px; width:100%',
  }

  return(
    <View style={styles.container}>
      <Navbar />
      <View style={{marginTop:'15%',backgroundColor:'white'}}>
      <ScrollView
        nestedScrollEnabled={true}
      >
        <View style={{backgroundColor:'white',marginBottom:'5%',alignItems:'center'}}>
          <Text style={styles.title}>   
            Create Article
          </Text>
          <View style={styles.inputContainer}>
            <Text>Title :</Text>
            <TextInput
              style={{borderRadius:5,borderWidth:1,borderColor:'grey',height:40}}
              placeholder="Insert the title"
              onChangeText={text=> setTitle(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Categories :</Text>
            <View style={{borderRadius:5,borderWidth:1,borderColor:'grey'}}>
              <Picker
                selectedValue={categories}
                style={{height: 40}}
                onValueChange={(itemValue, itemIndex) =>
                  setCategories(itemValue)
                }
              >
                <Picker.Item label="News" value="News" />
                <Picker.Item label="Sports" value="Sports" />
                <Picker.Item label="Tech" value="Tech" />
              </Picker>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text>Image Thumbnail :</Text>
            <TextInput
              style={{borderRadius:5,borderWidth:1,borderColor:'grey',height:40}}
              placeholder="Insert image url"
              onChangeText={text=> setThumbnail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Article :</Text>
            <RichEditor 
              placeholder = {'please input content'}
              editorStyle = {contentStyle}
              disabled = {disabled}
              style = {styles.editorBox}
              ref = {richText}
              onChange = {handleContentChange}
              editorInitializedCallback = {()=>editorInitializedCallback}
            />
            <RichToolbar 
              style={styles.toolbar}
              editor={richText}
              disabled={disabled}
              //onPressAddImage={addImage}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={()=>handleSubmit(title,categories,thumbnail,content)}>
            <Text style={{fontFamily:'Qualy',color:'white',fontSize:15,paddingBottom:10,paddingTop:10}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
      </View>
    </View>
  )
}


export default CreateArticle