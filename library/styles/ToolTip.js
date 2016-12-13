/**
 * author:徐航
 * time:2016年12月12日13:35:29
 * blogs:http://www.iloveplus.cn
 */

import React, {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    body:{
        position:"absolute",
        height:45,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:10
    },
    arrow:{
        borderWidth:9,
        borderColor:"transparent",
        width:0,
        height:0
    },
    content:{
        height:35,
        backgroundColor:"#2a2a2a",
        borderRadius:9,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        paddingLeft:8,
        paddingRight:8,
        color:"white",
        textAlign:"center"
    },
    textLeft:{
        borderRightWidth:StyleSheet.hairlineWidth,
        borderRightColor:"white"
    }
})

export default styles;