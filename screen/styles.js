import {COLORS} from "./color"
import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  productListContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:COLORS.white,
  },
  flatListContainer: {
    flex:2,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    
  },
  imageContainer: {
    width:100,
    height:100,
    resizeMode:"center",
  },
  renderContainer: {
    margin:10,
    alignItems:"center",
    justifyContent:"center",
    width:"45%",
    paddingVertical:10,
    borderRadius:10,
  },
  buttonContainer: {
    alignItems:"center",
    justifyContent:"center",
  },
  renderTitleText: {
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.gunMetal,
    textAlign:"center",
    padding:10,
    marginTop:5,
    borderRadius:10,
    borderWidth:2,
    backgroundColor:COLORS.lightGray,
    borderColor:COLORS.gray,
  },
  bestRatedContainer: {
    width:"95%",
    marginVertical:10,
    paddingVertical:10,
    
  },
  bestRatedText: {
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.gunMetal,
    borderBottomWidth:1,
    borderColor:COLORS.gunMetal,

  },
  otherFlatListContainer: {
    flex:1,
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
  },
  renderImageContainer: {
    width:100,
    height:100,
    resizeMode:"center",
  },
  otherRenderContainer: {
    margin:10,
    width:160,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
  },
  otherTitleText: {
    borderWidth:2,
    textAlign:"center",
    padding:10,
    marginTop:5,
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.gunMetal,
    borderRadius:10,
    backgroundColor:COLORS.lightGray,
    borderColor:COLORS.gray,
  },
  otherButtonContainer: {
    alignItems:"center",
    justifyContent:"center",
  },
  searchBarContainer: {
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
  },
  textInputContainer: {
    width:"95%",
    borderRadius:20,
    textAlign:"center",
    padding:7,
    backgroundColor:COLORS.lightGray,
    fontSize:16,
    fontWeight:"bold",

  },
  keyBoardViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetailsContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:COLORS.white,
  },
  productDetailsImage:{
    width:250,
    height:250, 
    resizeMode:"center",
    marginBottom:10,
  },
  productDetailsText: {
    fontSize:16,
    fontWeight:"bold",
    color:COLORS.gunMetal,
    textAlign:"center",
    margin:5,
  },
  horizontalContainer: {
    width:"95%",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    borderBottomWidth:1,
  },
  priceChangeContainer: {
    borderWidth:2,
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:50,
    padding:10,
    borderRadius:20,
    backgroundColor:COLORS.lightGray,
    marginBottom:40,
    borderColor:COLORS.gray,
  },
  priceButton: {
    alignItems:"center",
    justifyContent:"center",
  },
  numberText:{
    fontSize: 20, 
    fontWeight: "bold",

  },
  backButton:{
    width:"100%",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:40,
    flexDirection:"row",
    paddingHorizontal:10,
  },

  

});

export default styles;