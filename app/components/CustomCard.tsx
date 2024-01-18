import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { CustomCardLeftBlock } from './CustomCardLeftBlock';
import { CustomCardRightBlock } from './CustomCardRightBlock';
import { useFonts, Montserrat_700Bold,  } from '@expo-google-fonts/montserrat';

type CustomCardProps = {
  history: any
}

export const CustomCard:FC<CustomCardProps> = ({ history }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={$container}>
      <CustomCardLeftBlock history={history[0]} />
      <CustomCardRightBlock points={history[0]?.points} />
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
