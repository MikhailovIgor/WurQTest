import React, { FC, useState } from 'react';
import { View, ViewStyle, TextInput, Button } from 'react-native';

import { Text } from './Text'
import { useFonts, Montserrat_700Bold,  } from '@expo-google-fonts/montserrat';


export const PointsForm: FC = () => {
  const [pointsValue, setPointsValue] = useState<number>(0);
  const [nameValue, setName2Value] = useState<string>('');

  const handlePointsInputChange = (number) => setPointsValue(number);

  const handleNameInputChange = (text) => setName2Value(text);

  const handleButtonPress = () => null

  return (
    <View style={$container}>
      <TextInput
        placeholder='Points'
        value={pointsValue}
        onChangeText={handlePointsInputChange}
        style={$input}
      />
      <TextInput
        placeholder='Name'
        value={nameValue}
        onChangeText={handleNameInputChange}
        style={$input}
      />
      <Button
        title="Submit"
        onPress={handleButtonPress}
      />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: 'center',
}

const $input = {}
