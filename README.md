**使用如下：**<hr>
<link rel='stylesheet' type='text/css' href='http://tools.oschina.net/js/syntaxhighlighter_3.0.83/styles/shCoreRDark.css'/><div id="highlighter_708099" class="syntaxhighlighter nogutter  js"><div class="toolbar"><span><a href="#" class="toolbar_item command_help help">?</a></span></div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2"><code class="js plain">&lt;ToolTip&nbsp;actions={[&nbsp;</code></div><div class="line number2 index1 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">{text:&nbsp;</code><code class="js string">'复制'</code><code class="js plain">,&nbsp;onPress:</code><code class="js keyword">this</code><code class="js plain">._copy},&nbsp;</code></div><div class="line number3 index2 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">{text:&nbsp;</code><code class="js string">'粘贴'</code><code class="js plain">,&nbsp;onPress:&nbsp;</code><code class="js keyword">this</code><code class="js plain">._paste}&nbsp;</code></div><div class="line number4 index3 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">]}&nbsp;</code></div><div class="line number5 index4 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">isCenter={</code><code class="js keyword">false</code><code class="js plain">}&nbsp;</code></div><div class="line number6 index5 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">tipTop={</code><code class="js keyword">this</code><code class="js plain">.state.tipTop}&nbsp;</code></div><div class="line number7 index6 alt2"><code class="js spaces">&nbsp;&nbsp;&nbsp;</code><code class="js plain">/&gt;</code></div></div></td></tr></tbody></table></div>
<br><br>
<hr/>
  <ul>
    <li>actions:为所需要处理的按钮事件</li>  
    <li>isCenter:为true时居于屏幕正中央，为false时需配合width属性一块使用（width为tooltip宽度，当按钮共四个字此属性可省略）</li>
    <li>tipTop:{isShow:false,top:0,left:0,sectionID:-1,data:{}}</li>
    <ul>
        <li>isShow:控制tooltip显示与隐藏</li>
        <li>top:tooltip距顶部距离</li>
        <li>left：tooltip据左边距离</li>
        <li>sectionID：控制选中组件样式变化</li>
        <li>data：选中组件数据</li>
    </ul>
  </ul>
  
  <hr/>
 效果图：
 <img style="width:400px;display: block;" src="demo.png">  