import React, {useState,useRef} from 'react';
import {
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert
} from 'react-native';
import {styles} from '../styles/stylesheet';
import Navbar from '../components/navbar.component';
import Footer from '../components/footer.component';
import {editArticle} from '../store/action';
import {useDispatch} from 'react-redux';
import {actions,defaultActions,RichEditor,RichToolbar} from 'react-native-pell-rich-editor'
import ImagePicker from 'react-native-image-picker';
import {Picker} from '@react-native-community/picker';

function EditArticle({navigation,route}){
  const dispatch = useDispatch()
  const {titleEdit,categoriesEdit,thumbnailEdit,articleEdit,id} = route.params;
  const baseImage ='https://secure-coast-32465.herokuapp.com/media/1601439908413-Denně.png';
  const baseUrl = 'https://secure-coast-32465.herokuapp.com';
  const [disabled,setDisabled] = useState(false)
  const [title,setTitle] = useState(titleEdit)
  const [categories,setCategories] = useState(categoriesEdit)
  const [thumbnail,setThumbnail] = useState(baseImage)
  const [content,setContent] = useState(articleEdit)
  const [image,setImage] = useState(thumbnailEdit)
  const richText = useRef()
  const initHtml = articleEdit;

  function editorInitializedCallback() {
    richText.current.registerToolbar(function(items){
      console.log('Toolbar click, selected items (insert end callback):', items);
    })
  }

  const handleContentChange = (html) =>{
    setContent(html)
  }

  const createFormData = (image) => {
    const data = new FormData()
    data.append("image",{
      name: image.fileName,
      type: image.type,
      uri : Platform.OS === 'android' ? image.uri : image.uri.replace("file://","")
    })

    return data;
  }

  const addImage = () => {
    const options = {
      quality: 1.0,
      maxWidth: 400,
      maxHeight: 400,
    }

    ImagePicker.showImagePicker(options, response =>{
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
          fetch(`${baseUrl}/upload`,{
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            body: createFormData(response)
          })
          .then(response=>response.json())
          .then(response=>{
            console.log(response)
            richText.current.insertImage(
              `${baseUrl}/${response.imageUrl}`
            )
            setThumbnail(`${baseUrl}/${response.imageUrl}`)
          })
          .catch(err=>{
            console.log(err)
          })
      }
    })
  }

  function editPost(id,title,categories,thumbnail,article){
    dispatch(editArticle(id,title,categories,thumbnail,article))
    navigation.navigate('Member')
  }

  function handleEdit(id,title,categories,thumbnail,article){
    Alert.alert(
        "Are You Sure",
        "Want to Edit?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Edit", onPress: () => editPost(id,title,categories,thumbnail,article)}
        ],
        { cancelable: false}
      );
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
            Edit Article
          </Text>
          <View style={styles.inputContainer}>
            <Text>Title :</Text>
            <TextInput
              style={{borderRadius:5,borderWidth:1,borderColor:'grey',height:40}}
              defaultValue={titleEdit}
              onChangeText={text=> setTitle(text)}
              value={title}
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
            <Text>Article :</Text>
            <RichEditor 
              placeholder = {'please input content'}
              editorStyle = {contentStyle}
              disabled = {disabled}
              style = {styles.editorBox}
              ref = {richText}
              onChange = {handleContentChange}
              editorInitializedCallback = {()=>editorInitializedCallback}
              initialContentHTML = {initHtml}
            />
            <RichToolbar 
              style={styles.toolbar}
              editor={richText}
              disabled={disabled}
              onPressAddImage={addImage}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={()=>handleEdit(id,title,categories,thumbnail,content)}>
            <Text style={{fontFamily:'Qualy',color:'white',fontSize:15,paddingBottom:10,paddingTop:10}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
      </View>
    </View>
  )
}


export default EditArticle