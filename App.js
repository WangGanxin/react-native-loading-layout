/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoadingLayout from './LoadingLayout';
import {LoadingSatus} from './LoadingLayout';

type Props = {};
export default class App extends PureComponent<Props> {

  constructor(props) {
    super(props);

    this.state = {
      loadingStatus:LoadingSatus.STATUS_LOADING,
    };

  }

  componentDidMount() {
    this.timer = setInterval(
      () => {

        this.setState({
          loadingStatus:this.state.loadingStatus+1,
        });

        if(this.state.loadingStatus===LoadingSatus.STATUS_NO_NETWORK){
          this._cancelTimer();
        }

      }, 2000);
  }

  componentWillUnmount() {

  }

  _cancelTimer(){
    this.timer && clearInterval(this.timer);
  }

  _onPressReload() {
    console.warn('reload click...');

    this.setState({
      loadingStatus:LoadingSatus.STATUS_SUCCESS,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LoadingLayout
          status={this.state.loadingStatus}
          clickable={true}
          color={'blue'}
          onClick={() => this._onPressReload()}/>

        <View style={styles.content}>
          <Text  style={styles.welcome}> React Native App !</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width:'100%',
    height:100,
    marginTop:170,
    alignItems:'center',
    justifyContent:'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});
