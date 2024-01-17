import React, { FC } from "react"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { Screen, CustomHeader, CustomChart, History, PointsForm } from "../../components"
import { spacing } from "../../theme"

const mockData = [{value:15}, {value:-2}, {value:-5}, {value:8}, {value:10}, {value:6}, {value:-2}, {value:12} ]
const mockHistoryData = [];

export const HomeScreen: FC = () => {

  return (
    <Screen preset="scroll" contentContainerStyle={$container}>
      <CustomHeader icon={'logo'} />
      <CustomChart data={mockData} />
      <History data={mockHistoryData}/>
      <PointsForm />
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg,
  // paddingHorizontal: spacing.md,
  backgroundColor: '#333F48',
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}