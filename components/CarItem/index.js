import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {

  let {name, tagline, image, taglineCTA} = props.cars

  return (
    <View style={styles.carContainer}>
        <ImageBackground 
          source={image}
          style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}{' '}
            <Text style={styles.subtitleSTA}>
              {taglineCTA}
            </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <StyledButton type="primary" content="Custom order"/>
          <StyledButton type="secondary" content="Existing Inventory"/>
        </View>
      </View>
  )
}

export default CarItem
