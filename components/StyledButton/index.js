import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = ({type,content}) => {

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFF' : '#171A20'

  return (
    <View style={styles.container}>
        <Pressable 
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => {
            console.warn('Hey there')
        }}>
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
    </View>
  )
}

export default StyledButton
