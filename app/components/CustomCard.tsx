import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { CustomCardLeftBlock } from './CustomCardLeftBlock';
import { CustomCardRightBlock } from './CustomCardRightBlock';
import { useFonts, Montserrat_700Bold,  } from '@expo-google-fonts/montserrat';

const leftBlockData = {};
const rightBlockData = {};

type CustomCardProps = {
  data: any
}

export const CustomCard:FC<CustomCardProps> = ({ data }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={$container}>
      <CustomCardLeftBlock data={leftBlockData} />
      <CustomCardRightBlock data={rightBlockData} />
  </View>
)}

const $container: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  height: 201,
  width: '100%',
  backgroundColor: '#20262A',
  borderRadius: 11,
  justifyContent: 'center',
  alignContent: 'center',
}
