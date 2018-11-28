/**
 * Desc: 统一加载状态视图
 *
 * Created by WangGanxin on 2018/11/27
 * Email: mail@wangganxin.me
 */
import React, {Component, PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';

import PropTypes from 'prop-types';

export const LoadingSatus = {
  STATUS_LOADING :   0,  //加载中
  STATUS_EMPTY   :   1,  //无数据
  STATUS_ERROR   :   2,  //出错
  STATUS_NO_NETWORK: 3,  //无网络
  STATUS_SUCCESS   : 4,  //加载成功
};

export default class LoadingLayout extends PureComponent {

  static propTypes = {
    status: PropTypes.number.isRequired,
    color:PropTypes.string,
    clickable:PropTypes.bool,
    loadingText:PropTypes.string,
    emptyText:PropTypes.string,
    errorText:PropTypes.string,
    noNetworkText:PropTypes.string,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      loadingStatus: this.props.status,

      loadingTips:this.props.loadingText!==undefined ?this.props.loadingText:'加载中...',
      emptyTips:this.props.emptyText!==undefined ?this.props.emptyText:'啊哦，当前还没有数据呢',
      errorTips:this.props.errorText!==undefined ?this.props.errorText:'啊哦，加载失败了',
      noNetworkTips:this.props.noNetworkText!==undefined ?this.props.noNetworkText:'当前没有网络，请稍后尝试',

      loadingColor:this.props.color,
      isClickable: this.props.clickable,
      rotateValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this._startAnimation();
  }

  componentWillReceiveProps(nextProps){

    if (nextProps.status !== undefined && nextProps.status !== this.props.status){
      this.setState({
        loadingStatus:nextProps.status
      },() => {
        if(this.state.loadingStatus===LoadingSatus.STATUS_LOADING){
          this._startAnimation();
        }
      });
    }

    if (nextProps.tips !== undefined && nextProps.tips !== this.props.tips){
      this.setState({
        loadingTips:nextProps.tips
      });
    }

    if (nextProps.clickable !== undefined && nextProps.clickable !== this.props.clickable){
      this.setState({
        isClickable:nextProps.clickable
      });
    }

    if (nextProps.color !== undefined && nextProps.color !== this.props.color){
      this.setState({
        loadingColor:nextProps.color
      });
    }

  }

  _startAnimation() {

    if (this.state.loadingStatus === LoadingSatus.STATUS_LOADING){
      this.state.rotateValue.setValue(0);
      Animated.timing(this.state.rotateValue,{
        toValue: 360,
        duration: 1000,
        easing: Easing.linear
      }).start(() => this._startAnimation());
    }
  }

  getCurrentStatus(){
    return this.state.loadingStatus;
  }

  _onViewPress(){

    if (this.state.isClickable && this.state.loadingStatus !== LoadingSatus.STATUS_LOADING){
      this.props.onClick();
    }
  }

  _renderContent(){

    if (this.state.loadingStatus === LoadingSatus.STATUS_LOADING){

      return <View style={styles.wrapper} >
        <View style={styles.content}>
          <Animated.Image
            style = {[styles.loadingStyle,
              {transform:[{rotate: this.state.rotateValue
                .interpolate({inputRange: [0, 360],outputRange: ['0deg', '360deg']})
              }]
              }]}
            source = {require('./images/loading_progress.png')}
            resizeMode={'contain'}
            tintColor={this.state.loadingColor}/>

          <Text style={styles.tipsStyle2}>{this.state.loadingTips}</Text>
        </View>
      </View>;
    }
    else if (this.state.loadingStatus === LoadingSatus.STATUS_EMPTY){
      return <View style={styles.wrapper} >
        <View style={styles.content}>
          <Image style={styles.imageStyle} source={require('./images/icon_loading_no_data.png')} />
          <Text style={styles.tipsStyle}>{this.state.emptyTips}</Text>
        </View>
      </View>;
    }
    else if (this.state.loadingStatus === LoadingSatus.STATUS_ERROR){
      return <View style={styles.wrapper} ><View style={styles.content}>
        <Image style={styles.imageStyle} source={require('./images/icon_loading_no_data.png')} />
        <Text style={styles.tipsStyle}>{this.state.errorTips}</Text>
      </View>
      </View>;
    }
    else if (this.state.loadingStatus === LoadingSatus.STATUS_NO_NETWORK){
      return <View style={styles.wrapper} ><View style={styles.content}>
        <Image style={styles.imageStyle} source={require('./images/icon_loading_no_network.png')} />
        <Text style={styles.tipsStyle}>{this.state.noNetworkTips}</Text>
      </View>
      </View>;
    }
    else if (this.state.loadingStatus === LoadingSatus.STATUS_SUCCESS){
      return <View/>;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this._onViewPress()}>
        {this._renderContent()}
      </TouchableWithoutFeedback>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    width: '100%',
    height: '100%',
  },

  content:{
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
  },

  loadingStyle:{
    width:50,
    height:50,
    top:-50,
  },

  imageStyle:{
    width:200,
    height:200,
    top:-70,
  },

  tipsStyle:{
    fontSize:16,
    color:'#999999',
    top:-70,
  },

  tipsStyle2:{
    fontSize:16,
    color:'#999999',
    top:-45,
  }
});

