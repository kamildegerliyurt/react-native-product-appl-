import React from 'react'
import { FlatList, View, TouchableWithoutFeedback, Keyboard, RefreshControl} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import {RenderItem, BestRated, OtherRenderItem, SearchBar} from "../components/index"
import styles from "./styles"



const ProductList = () => {
//--------------------------------------------
const [refreshing, setRefreshing] = useState(false);
//--------------------------------------------
const [productData, setProductData]= useState([])
const [searchData, setSearchData]= useState("")
const [filterList, setFilterList]= useState([])
//--------------------------------------------Refresh
const onRefresh = useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);
//--------------------------------------------Axios
useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
    .then((res)=> {
        setProductData(res.data)
    })
}, [])
//--------------------------------------------Filter
const handleSearchData = (value)=> {
  setSearchData(value)


const filtered = productData.filter((item)=>
 item.title.toLowerCase().includes(searchData.toLowerCase())
)

setFilterList(filtered)

}
//----------------------------------------Slice

const firstProductData = productData.slice(0,10)
const secondProductData = productData.slice(10,20)
//----------------------------------------


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      

        <SafeAreaView style={styles.productListContainer}>
       

          <SearchBar getSearchData={handleSearchData}/>

            <View style={styles.flatListContainer}>
              <FlatList data={filterList.length > 0 ? filterList :  firstProductData}
                        numColumns={(2)}
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=> {
                          return(
                            <RenderItem data={item}/>
                          )
                        }}/>
            </View>


            <BestRated />


            <View style={styles.otherFlatListContainer}>
              <FlatList data={filterList.length > 0 ? filterList :  secondProductData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        alwaysBounceHorizontal={false}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=> {
                          return(
                            <OtherRenderItem data={item}/>
                          )
                        }}/>
            </View>

            

        </SafeAreaView>
                
        
    </TouchableWithoutFeedback>
  )
}

export default ProductList

