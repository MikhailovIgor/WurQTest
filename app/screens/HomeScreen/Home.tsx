import React, { FC, useState, useEffect } from "react"
import { ActivityIndicator, ViewStyle, View } from "react-native"
import { Screen, CustomHeader, CustomChart, History, PointsForm } from "../../components"
import { spacing } from "../../theme"

export const HomeScreen: FC = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://awqgdt2ss8.execute-api.us-east-1.amazonaws.com/Prod/history')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));

      return () => setIsLoading(true);  // unmount
  }, [])

  return (
    <Screen preset="scroll" contentContainerStyle={$container}>
      <CustomHeader icon={'logo'} />
      {isLoading ? (
        <View style={$activityIndicatorWrapper}> 
          <ActivityIndicator size={'large'} color='#A8FF89' />
        </View>
      ) : (
        <>
        <CustomChart data={data?.points_per_wod} />
        <History history={data?.history}/>
        <PointsForm />
      </>
)}
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg,
  backgroundColor: '#333F48',
}

const $activityIndicatorWrapper = {
  heigth: 600,
  width: '100%',
  backgroundColor: '#333F48',
}