import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

import colors from '../configs/colors';
import fonts from '../configs/fonts';

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgba(${red}, ${green}, ${blue},1)`;
};
const randomColor=["#DA4131","#FFD30D","#5FB425","#25B471","#25A7B4","#2566B4","#5325B4","#B42525"]
function getRandomNumber() {
  return Math.floor(Math.random() * 8);
}

export default function Enrollments({navigation}) {
  const enrolls = ['Computer Architecture', 'OOP', 'Dld', 'Big Data'];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {enrolls ? (
          enrolls.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={{
                height: 150,
                width: 130,
                borderRadius: 10,
                backgroundColor: randomColor[getRandomNumber()] || 'green',
                margin: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={()=>navigation.navigate("attendance",{classname:item})}
            >
              <Text style={{ color: colors.white, fontFamily: fonts.Rbold, textAlign: 'center' }}>{item}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.htext}>No Enrollments</Text>
        )}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  htext: {
    color: colors.green,
    fontFamily: fonts.Nbold,
    fontSize: 18,
  },
});
