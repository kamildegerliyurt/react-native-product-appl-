import {Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import styles from "../screen/styles"


import { useNavigation } from '@react-navigation/native'


const RenderItem = (props) => {
//---------------------------------
const data = props.data
const title = data.title
const image = data.image
//---------------------------------
const navigation = useNavigation()
//---------------------------------
const handleButton = ()=> {
  navigation.navigate("ProductDetails",
    {
      data: props.data
    }
  )
}
//---------------------------------



  return (
    <View style={styles.renderContainer}>
      <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.buttonContainer]}
                 onPress={handleButton}>
          <Image style={styles.imageContainer}
                source={{uri: image}}/>
          <Text style={styles.renderTitleText} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
      </Pressable>
    </View>
  )
}

export default RenderItem

