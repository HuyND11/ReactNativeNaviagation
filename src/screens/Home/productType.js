import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Data from '../../constant';
function ProductType(props) {
  return (
    <View style={styles.productItem}>
      <Image style={styles.productImage} source={props.url}></Image>
      <Text style={{padding: 14, fontSize: 13, color: '#090F47'}}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  catagory: {
    fontSize: 16,
    color: '#090F47',
    fontWeight: 'bold',
  },
  productItem: {
    width: 110,
    height: 160,
    backgroundColor: '#F5F7FA',
    marginEnd: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 100,
  },
});

export default ProductType;
