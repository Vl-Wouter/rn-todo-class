import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Header } from './components'
import { LinearGradient } from 'expo'
import { primaryGradientArray } from './utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
  }
})
export class Main extends Component {
  state = {
    time:  new Date().getTime()
  }

  componentDidMount() {
    this.tick()
  }

  tick() {
    this.setState((state) => {
      return {
        ...state,
        time: new Date().getTime()
      }
    })
    setInterval(() => {
      this.tick()
    }, 200)
  }


  render() {
    const { title, color } = this.props
    const { time } = this.state

    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.centered}>
          <Header title={ title } />
        </View>
        <View style={styles.container, styles.centered}>
          <Text>{ time.toLocaleString() }</Text>
          <Text>Ayyyy</Text>
        </View>
      </LinearGradient>
    )
  }
}

export default Main
