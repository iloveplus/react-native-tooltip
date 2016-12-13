/**
 * author:徐航
 * time:2016年12月12日13:35:29
 * blogs:http://www.iloveplus.cn
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ListView,
    Clipboard,
    TextInput,
    AppRegistry,
    Dimensions
} from 'react-native';
import ToolTip from './library/components/ToolTip';

export default class ToolTipDemo extends Component{
  constructor(props) {
    super(props);
    this.state={
      tipTop:{
        isShow:false,
        top:0,
        left:0,
        sectionID:-1,
        data:{}
      },
      data:[
        {title:"这是测试案例1",id:"001"},
        {title:"这是测试案例2",id:"002"},
        {title:"这是测试案例3",id:"003"},
        {title:"这是测试案例4",id:"004"},
        {title:"这是测试案例5",id:"005"},
        {title:"这是测试案例6",id:"006"},
        {title:"这是测试案例7",id:"007"},
        {title:"这是测试案例8",id:"008"}
      ],
      content:""
    }
  };

  longPress(e,rowData,sectionID){
    let nativeEvent=e.nativeEvent;
    this.setState({tipTop:{isShow:true,top:nativeEvent.pageY - nativeEvent.locationY,left:nativeEvent.pageX,sectionID:sectionID,data:rowData}});
  };

  _Press=(rowData)=>{
    if(this.state.tipTop.isShow){
      this.setState({tipTop:{isShow:false,top:0,left:0,sectionID:-1,data:{}}});
    }else{
      alert("点击响应！")
    }
  };

  _copy=()=>{
    Clipboard.setString(this.state.tipTop.data.title);
    alert("复制成功！");
  };

  _paste=()=>{
    try {
      var content = Clipboard.getString();
      this.setState({content});
    } catch (e) {
      this.setState({content:e.message});
    }
  };

  _renderRow=(rowData, sectionID, rowID) => {
    return (
        <TouchableHighlight style={[styles.item,{backgroundColor:rowID==this.state.tipTop.sectionID?"#F5FCFF":"white"}]} onLongPress={(e)=>{this.longPress(e,rowData,rowID)}} onPress={()=>{this._Press(rowData)}} underlayColor={"#F5FCFF"}>
          <Text>{rowData.title}</Text>
        </TouchableHighlight>
    )
  };

  render() {
    return (
        <View style={{flex:1,width:Dimensions.get('window').width,position:"relative"}}>
          <ListView style={{flex:1}}
                    dataSource={new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2}).cloneWithRows(this.state.data)}
                    renderRow={this._renderRow}/>
          <TextInput style={{borderWidth:StyleSheet.hairlineWidth,borderColor:"red",height:40}}/>
          <ToolTip
              actions={[
                {text: '复制', onPress:this._copy},
                {text: '粘贴', onPress: this._paste}
              ]}
              isCenter={false}
              tipTop={this.state.tipTop}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width,
    height:45,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:"black"
  }
});


AppRegistry.registerComponent('tooltip', () => ToolTipDemo);
