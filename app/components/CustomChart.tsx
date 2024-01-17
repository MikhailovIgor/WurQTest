import React, { FC } from 'react'
import { View } from 'react-native'
import { useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';


import { LineChartBicolor } from 'react-native-gifted-charts'
import { Text } from './Text'

type CustomChartProps = {
  data: number[]
}

export const CustomChart:FC<CustomChartProps> = ({ data }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={$container}>
      <Text preset='formHelper' text='Points per WOD' weight='semiBold' style={$title} />
        <LineChartBicolor
        data={data}
        xAxisColor="#fff"
        yAxisColor="#fff"
        xAxisType='dashed'
        xAxisThickness={3}
        thickness={2}
        spacing={40}
        noOfSections={4}
        noOfSectionsBelowXAxis={4}
        dataPointsColor={'#A8FF89'}
        dataPointsColorNegative={'#fff'}
        height={140}
        color='#fff'
        colorNegative="#fff"
        stepValue={5}
        yAxisTextStyle={$chartYAxis}
        backgroundColor={'#222B31'}
        />
    </View>
  )
}

const $container = {
  marginLeft: 12,
  marginRight: 33,
  marginTop: 34,
  marginBottom: 6,
}

const $title = {
  color: '#fff',
  marginBottom: 2,
  fontSize: 16,
  fontFamily: 'Montserrat_500Medium',
}

const $chartYAxis = {
  color: '#fff',
}
