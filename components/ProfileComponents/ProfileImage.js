import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
export default class ProfileImage extends Component {
  constructor({ route }) {
    super()
    this.state = {
      ImageWidth: null,
      ImageHeight: null,
    }
    console.log(route.params)
    this.ImageURI = route.params
  }
  componentDidMount() {
    Image.getSize(
      this.ImageURI,
      (Width, Height) => {
        this.setState({ ImageWidth: Width, ImageHeight: Height })
      },
      (errorMsg) => {
        console.log(errorMsg)
      })}

  render() {
    const ScreenHeight = Dimensions.get('window').height
    const ScreenWidth = Dimensions.get('window').width
    if (this.state.ImageWidth >= ScreenWidth + 74) {
      this.setState({
        ImageWidth:
          this.state.ImageWidth - (this.state.ImageWidth - ScreenWidth) - 75,
      })
    }
    if (this.state.ImageHeight >= ScreenHeight + 74) {
      this.setState({
        ImageHeight: 
        this.state.ImageHeight - (this.state.ImageHeight - ScreenHeight) - 75,
      })
    }
    return (
      <SafeAreaView style={styles.MainContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={{ uri: this.ImageURI }}
            style={[
              styles.ImageStyle, { height: this.state.ImageHeight,
              width: this.state.ImageWidth, 
              },
            ]
            } />
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    resizeMode: 'cover',
  },
})