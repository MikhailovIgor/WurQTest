import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { Text } from './Text'
import { CustomCard } from './CustomCard';
import { useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

type HistoryProps = {
  history: object
}
export const History:FC<HistoryProps> = ({ history }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  <View style={$container}>
    <Text preset='formHelper' text='History:' weight='semiBold' style={$title} />
    <CustomCard history={history} />
  </View>
)}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  marginHorizontal: 18,
  marginBottom: 36,
}

const $title = {
  color: '#fff',
  marginLeft: 24,
  marginBottom: 56,
  fontSize: 20,
  fontFamily: 'Montserrat_500Medium',
  textDecorationLine: 'underline',
}
