import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { Text } from './Text'
import { useFonts, Montserrat_700Bold,  } from '@expo-google-fonts/montserrat';

type CustomCardProps = {
  points: number
}
export const CustomCardRightBlock:FC<CustomCardProps> = ({ points }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={$container}>
      <Text text={`+${points}`} weight='bold' style={$totalPointsValue} />
      <Text text='Total Points' weight='bold' style={$totalPoints} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 0.3,
  height: 201,
  backgroundColor: '#000',
  borderBottomRightRadius: 11,
  borderTopRightRadius: 11,
  alignItems: 'center',
}

const $totalPoints = {
  color: '#7B7B7B',
  fontSize: 13,
  fontFamily: 'Montserrat_700Bold',
}

const $totalPointsValue = {
  color: '#A8FF89',
  fontSize: 32,
  fontFamily: 'Montserrat_700Bold',
  paddingTop: 50,
}
