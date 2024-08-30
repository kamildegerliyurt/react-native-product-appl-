import {Text, View, Image, Pressable } from 'react-native'
import React from 'react'

import styles from '../screen/styles'

import { useNavigation } from '@react-navigation/native'

const OtherRenderItem = (props) => {
//--------------------------------
const data = props.data
const title = data.title
const image = data.image
//--------------------------------
const navigation = useNavigation()
//--------------------------------
const otherHandleButton = ()=> {
    navigation.navigate("ProductDetails",
        {
            data: props.data
        }
    )
}
//--------------------------------

  return (
    <View style={styles.otherRenderContainer}>
        <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.otherButtonContainer]}
                   onPress={otherHandleButton}>
            <Image style={styles.renderImageContainer}
                   source={{uri: image}}/>
            <Text style={styles.otherTitleText} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
        </Pressable>
    </View>
  )
}

export default OtherRenderItem

