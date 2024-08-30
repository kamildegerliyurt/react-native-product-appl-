import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from './styles'



const ProductDetails = ({route}) => {
//------------------------------
const navigation = useNavigation()
const [number, setNumber]= useState(0)
const [totalPrice, setTotalPrice] = useState(0)
//------------------------------
const total = route.params.data
const title = total.title
const image = total.image
const price = total.price
const description = total.description
const category = total.category
const rating = total.rating.rate
//-----------------------------------Minus
  const handleMinus = () => {
    if (number > 0) {
      setNumber(number - 1);
      setTotalPrice(prevTotalPrice => Math.max(0, prevTotalPrice - price));
    }
  };
//-----------------------------------Plus
  const handlePlus = () => {
    if (number < 10) {
      setNumber(number + 1)
      setTotalPrice(totalPrice + price)
    }
  }
//-----------------------------------Restart
   const handleRestart = () => {
     setTotalPrice(0)
     setNumber(0)
   }
//-----------------------------------ProductList
  const handleBack = ()=> {
    navigation.navigate("ProductList")
  }
//-----------------------------------
   



  return (
    <SafeAreaView style={styles.productDetailsContainer}>
 
        <View style={styles.backButton}>          
          <Pressable style={styles.priceButton} onPress={handleRestart}>
            <MaterialIcons name="restart-alt" size={30} color="black" />
          </Pressable>


          <Pressable style={styles.priceButton} onPress={handleBack}>
           <Ionicons name="chevron-back" size={40} color="black" />
          </Pressable>
          
        </View>

        <Image style={styles.productDetailsImage} source={{uri: image}}/>
        <Text style={styles.productDetailsText}>{title}</Text>
        <Text style={styles.productDetailsText}>{description}</Text>
        <Text style={styles.productDetailsText}>Category: [ {category} ]</Text>

        <View style={styles.horizontalContainer}>
          <Text style={styles.productDetailsText}>Price: {totalPrice.toFixed(2)}</Text>
          <Text style={styles.productDetailsText}>Rating: {rating}</Text>
        </View>

        <View style={styles.priceChangeContainer}>

          <Pressable style={styles.priceButton} onPress={handleMinus}>
            <AntDesign name="minuscircleo" size={22} color="black" />
          </Pressable>

          <Text style={styles.numberText}>{number}</Text>
  
          <Pressable style={styles.priceButton}onPress={handlePlus}>
            <AntDesign name="pluscircleo" size={22} color="black" />
          </Pressable>
          

        </View>



 

    </SafeAreaView>
  )
}

export default ProductDetails

