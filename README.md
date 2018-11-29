# react-native-loading-layout
a simple loadinglayout for react native.

### Sample 

![loading-layout](https://www.npmjs.com/package/react-native-loading-layout/loading-layout-demo.png)

### Usage 

- LoadingLayout

> status : 加载状态，包括Loading、Empty、Error、NoNetwork、Success五种
> 
> clickable : 是否可点击
> 
> onClick() : 空白区域点击事件
> 
> color : 转圈圈的颜色
> 
> loadingText : 加载状态自定义文本
> 
> emptyText : 空白状态自定义文本
> 
> errorText : 错误状态自定义文本
> 
> noNetworkText : 无网络状态自定义文本
> 
>

```

        <LoadingLayout
          status={this.state.loadingStatus}
          clickable={true}
          color={'blue'}
          loadingText={'加载中...'}
          emptyText={'暂无数据'}
          errorText={'出错了'}
          noNetworkText={'没有网络'}
          onClick={() => this._onPressReload()}/>
 
```


### Contact

- QQ：445253393（注明来自GitHub）
- Email：[mail@wangganxin.me](mail@wangganxin.me)

### License
    MIT License

	Copyright (c) 2018 守望君

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

