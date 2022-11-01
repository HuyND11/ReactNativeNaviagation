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
import Icon from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('screen');
const ProductItem = props => {
  const sale = props.sale;
  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={props.url}></Image>
        </View>
        <View
          style={{
            paddingRight: 30,
            paddingLeft: 16,
            paddingTop: 10,
          }}>
          <Text
            style={{
              color: '#090F47',
              fontSize: 13,
              textAlign: 'left',
              fontWeight: '400',
              marginBottom: 8,
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              color: '#090F47',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            ${props.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 15,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: 48,
          height: 24,
          backgroundColor: '#FFC000',
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Icon name="star" size={17} color="#fff" />
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: '700',
          }}>
          {props.star}
        </Text>
      </View>
      {sale === 100 ? (
        <View style={[styles.sale, {backgroundColor: '#FF5A5A'}]}>
          <Text style={styles.saleText}>SALE</Text>
        </View>
      ) : sale > 0 && sale < 100 ? (
        <View style={[styles.sale, {backgroundColor: '#FFC618'}]}>
          <Text style={styles.saleText}>{props.sale}% OFF</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - 50 - 15) / 2,
    height: 250,
    borderRadius: 10,
    // backgroundColor: "red",
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginBottom: 15,
  },
  containerImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#F5F7FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: (width - 50 - 15) / 2 - 40,
    height: 120,
  },
  sale: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#FF5A5A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-45deg'}],
    right: 65,
    top: -8,
  },
  saleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    paddingBottom: 5,
    paddingTop: 25,
  },
});

export default ProductItem;
