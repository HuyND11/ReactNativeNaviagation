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
import ProductType from './productType';
import {data} from '../../constant';

function DiabeticDiet({navigation}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {headerTitle: item.title});
        }}
       style = {styles.item}>
        <ProductType url={item.url} title={item.title} />
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.catagory}>Diabetic Diet</Text>
      <View style={styles.listProduct}>
        <FlatList
          style={styles.containerProduct}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
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
  listProduct: {
    marginVertical: 15,
    position: 'relative',
    zIndex: 100000,
  },
  containerProduct: {
    // flex:1,
    display: 'flex',
  },
});
export default DiabeticDiet;
