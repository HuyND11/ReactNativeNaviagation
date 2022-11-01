import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
function Banner(props) {
  return (
    <View style={styles.banner}>
      <Image style={styles.bannerImage} source={props.imageUri} />
      <View style={styles.bannerTitle}>
        <Text style={styles.BannerTitle}>{props.title}</Text>
        <Text style={styles.paragraph}>{props.paragraph}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    marginTop: 18,
  },

  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
    position: 'relative',
  },

  bannerTitle: {
    maxWidth: 130,
    position: 'absolute',
    top: 30,
    left: 23,
  },
  BannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1987FB',
  },
  paragraph: {
    fontSize: 12,
    color: 'rgba(9, 15, 71, 0.65)',
  },
});
export default Banner;
