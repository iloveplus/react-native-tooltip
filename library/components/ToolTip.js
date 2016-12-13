/**
 * author:徐航
 * time:2016年12月12日13:35:29
 * blogs:http://www.iloveplus.cn
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import style from '../styles/ToolTip';

class ToolTip extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.tipTop&&this.props.tipTop.isShow){
            let windowWidth=Dimensions.get('window').width;
            let arrowDirection=this.props.tipTop.top>60;
            let top=arrowDirection?this.props.tipTop.top-50:this.props.tipTop.top + (this.props.itemHeight || 45);
            let left=0;
            let tipStyle={width:windowWidth}
            if(!this.props.isCenter){
                let width=this.props.width||90;
                if(this.props.tipTop.left<width/2){
                    left=0;
                }else if(windowWidth-this.props.tipTop.left<width/2){
                    left=windowWidth-width;
                }else{
                    left=this.props.tipTop.left-width/2;
                }
                tipStyle={width:width,left:left};
            }
            return (
                <View  style={[style.body,tipStyle,{top:top}]}>
                    {!arrowDirection&&<View style={[style.arrow,{borderBottomColor:"#2a2a2a"}]}/>}
                    <View style={style.content}>
                        {this.props.actions.map((item,index)=>{
                            return <Text style={index==this.props.actions.length-1?style.text:[style.text,style.textLeft]} key={`toolTip${index}`} onPress={item.onPress}>{item.text}</Text>
                        })}
                    </View>
                    {arrowDirection&&<View style={[style.arrow,{borderTopColor:"#2a2a2a"}]}/>}
                </View>
            )
        }else{
            return <View/>
        }
    }
}

export default ToolTip;