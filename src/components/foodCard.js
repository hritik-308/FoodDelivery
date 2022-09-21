import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';
import {ScreenWidth} from '@rneui/base';

export default function FoodCard({
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  NumberOfReviews,
  businessAddress,
  farAway,
  averageReview,
  images,
  ScreenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{...StyleSheet.cardview, width: ScreenWidth}}>
        <Image
          style={{...styles.image, width: ScreenWidth}}
          source={{uri: images}}
        />


<View>
        <View>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.distance}>
            <Icon
            name="place"
            type="material"
            color={colors.grey2}
            size={18}
            iconStyle={{
              marginTop:3
            }}
            />
            <Text style={styles.Min}>{farAway} Min</Text>
          </View>
          <View style={{flex:9,flexDirection:"row"}}>
            <Text style={styles.address}>
              {businessAddress}
              </Text>  

          </View>
        </View> 
      </View>
      </View>
      
      <View style={styles.review}>
        <Text style={styles.average}>
          {averageReview}
        </Text>
        <Text style={styles.NumberOfReview}>{NumberOfReviews} Reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardview: {
    marginHorizontal: 9,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 15,
    height: 150
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft:10
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min:{
    fontSize:12,
    fontWeight:"bold",
    paddingTop:5,
    color:colors.grey3
  },
  address:{
    fontSize:12,
    paddingTop:5,
    paddingHorizontal:10,
    color:colors.grey2
  },
  review:{
    position:"absolute",
    top:0,
    right:10,
    backgroundColor:"rgba(52,52,52,0.3)",
    padding:2,
    alignItems:"center",
    justifyContent:"center",
    borderTopRightRadius:5,
    borderBottomLeftRadius:12
  },
  average:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    marginTop:-3
  },
  NumberOfReview:{
    color:"white",
    fontSize:14,
    marginLeft:0,
    marginRight:0
  }
});
