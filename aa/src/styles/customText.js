import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default class CustomText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'Pretendard-Black': require('../assets/fonts/Pretendard-Black.ttf'),
      'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.ttf'),
      'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
      'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.ttf'),
      'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.ttf'),
      'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
      'Pretendard-Thin': require('../assets/fonts/Pretendard-Black.ttf'),
      'Pretendard-Light': require('../assets/fonts/Pretendard-Light.ttf'),
      'Pretendard-ExtraLight': require('../assets/fonts/Pretendard-ExtraLight.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Text style={[styles.text, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pretendard-Regular',
  },
});