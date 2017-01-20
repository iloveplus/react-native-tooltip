# 使用如下： #

    <ToolTip 
       actions={[ 
         {text: '复制', onPress:this._copy}, 
         {text: '粘贴', onPress: this._paste} 
       ]} 
       isCenter={false} 
       tipTop={this.state.tipTop} />

## 参数说明： ##

1. actions:为所需要处理的按钮事件
2. isCenter:为true时居于屏幕正中央，为false时需配合width属性一块使用（width为tooltip宽度，当按钮共四个字此属性可省略）
3. tipTop:{isShow:false,top:0,left:0,sectionID:-1,data:{}} 
- isShow:控制tooltip显示与隐藏
- top:tooltip距顶部距离
- left：tooltip据左边距离
- sectionID：控制选中组件样式变化
- data：选中组件数据

## 效果图： ##

![](https://github.com/iloveplus/react-native-tooltip/blob/master/demo.png)