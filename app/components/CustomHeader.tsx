import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { Icon, IconTypes } from './Icon';

type CustomHeaderProps = {
  icon: IconTypes
}
export const CustomHeader:FC<CustomHeaderProps> = ({ icon }) => (
  <View style={$container}>
    <Icon icon={icon} />
  </View>
)

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: 5,
  borderBottomWidth: 3,
  borderBottomColor: 'rgba(0, 0, 0, 0.25)'
}
