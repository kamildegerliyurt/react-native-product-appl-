import React, { useState } from 'react';
import { TextInput, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../screen/styles';

const SearchBar = (props) => {
//--------------------------------------------
const search = props.getSearchData;
//--------------------------------------------
const [searchText, setSearchText] = useState('');
//--------------------------------------------Clear
const handleClear = () => {
  setSearchText('');
  search('');
};
//--------------------------------------------
const handleChangeText = (text) => {
   setSearchText(text);
   search(text); 
};
//--------------------------------------------

  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.textInputContainer}
                 placeholder='Search...'
                 placeholderTextColor={'gray'}
                 value={searchText} 
                 onChangeText={handleChangeText} 
                />

      {searchText.length > 0 && 
        ( 
        <Pressable onPress={handleClear} style={styles.clearButton}>
          <AntDesign name="closecircle" size={20} color="gray" />
        </Pressable>
        )
      }

    </View>
  );
};

export default SearchBar;
