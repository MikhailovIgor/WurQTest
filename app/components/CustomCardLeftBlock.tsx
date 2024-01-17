import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { Text } from './Text'
import { HeartIcon } from './HeartIcon';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular  } from '@expo-google-fonts/montserrat';

type CustomCardProps = {
  data: any
}

const mockDataValues = [
  '50 Box Step Ups (24/20)',
  '40 Kb Swings (53/35)',
  '30 Ab-Mat',
  '20 Barbell Thruster 95/65',
  '10 Barbell Hang Clean 95/65',
]

export const CustomCardLeftBlock:FC<CustomCardProps> = ({ data }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    
      <View style={$leftBlock}>
        <View style={$header}>
          <View>          
            <Text text='07/30/2022' weight='bold' style={$date} />
            <Text text='WOD Newton' weight='bold' style={$title} />
          </View>
          <View style={$iconWrapper}>
            <HeartIcon />
          </View>
        </View>
        <View style={$description}>
          <View style={$infoWrapper}>
            <Text text='Time:' style={$time} />
            <Text text='12:53' weight='bold' style={$boldValue} />
          </View>
          <View style={$infoWrapper}>
            <Text text='Rest:' style={$time} />
            <Text text='0:37 | 5%' weight='bold' style={$regularValue} />
          </View>
          <View style={$infoWrapper}>
            <Text text='167' weight='bold' style={$boldValue} />
          </View>
        </View>
        <View style={$itemsContainer}>
          {mockDataValues.map(item => (
            <Text text={item} style={$item} key={item}/>
          ))}
        </View>
      </View>
)}

const $leftBlock: ViewStyle = {
  flex: 0.7,
  height: 201,
  paddingLeft: 10,
  paddingBottom: 14,
}

const $date = {
  color: '#8C8279',
  fontSize: 11,
  fontFamily: 'Montserrat_700Bold',
}

const $title = {
  color: '#fff',
  fontSize: 15,
  fontFamily: 'Montserrat_700Bold',
  lineHeight: 32,
}

const $header: ViewStyle = {
  flexDirection: 'row',
}

const $iconWrapper: ViewStyle = {
  position: 'absolute',
  right: 42,
  top: 16,
}

const $description: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 16
}

const $time = {
  color: '##7B7B7B',
  fontSize: 11,
  fontFamily: 'Montserrat_400Regular',
  lineHeight: 24,
}

const $boldValue = {
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Montserrat_700Bold',
  lineHeight: 32,
  marginLeft: 2
}

const $regularValue = {
  color: '#fff',
  fontSize: 16,
  fontFamily: 'Montserrat_400Regular',
  lineHeight: 32,
  marginLeft: 2
}

const $infoWrapper: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
}

const $item = {
  color: '#fff',
  fontSize: 11,
  fontFamily: 'Montserrat_400Regular',
  lineHeight:15,
  paddingVertical: 1,
}

const $itemsContainer = {
  paddingTop: 16,
}