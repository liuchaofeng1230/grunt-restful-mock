# grunt-restful-mock

> 模拟 AJAX 请求返回的 JSON 数据，减少前端工程师对后端接口的依赖，在接口规范的基础之上，实现与后端并行开发。

## 目录

 - [开始使用](https://github.com/bubkoo/grunt-restful-mock/wiki/开始使用)
 - [使用示例](https://github.com/bubkoo/grunt-restful-mock/wiki/使用示例)
 - [数据模板语法规则](https://github.com/bubkoo/grunt-restful-mock/wiki/数据模板语法规则)
 - [内置占位符](https://github.com/bubkoo/grunt-restful-mock/wiki/内置占位符)

## 特性

- 基于数据模板生成随机数据
- 支持 RESTful 风格的 RUI
- 兼容 JSONP 请求
- 模拟 HTTPOnly 的 Cookie
- 模拟 HTTP 响应状态码，模拟请求超时，模拟网络延时
- 热重启，修改 mock 配置后自动重启服务
- 自定义数据模板占位符

## 意义

使用过 [mockjax](https://github.com/appendto/jquery-mockjax) 的同学应该遇到过一个
苦恼的问题，那就是需要在业务代码中添加许多调试用的 mock 配置，上线时需要人肉删除这些 JS
代码，具有侵入性且容易出错，同时 mock 环境和测试环境的切换也不是很方便。作者在经历过这些痛点
之后，基于 grunt 开发了该插件。

## 历史

- 2015-04-02 发布版本 0.1.21，将依赖项 gaze 的版本从 0.6.4 降为 0.5.1，以修复 NodeJS v0.12 导致的问题，[issues](https://github.com/shama/gaze/issues/175)
- 2015-03-03 增加 fromFile 占位符，支持从文件中获取 json 数据
- 2014-12-27 增加自定义占位符接口
- 2014-12-04 组合 HTTP 谓词（`get|post`），谓词混同参数（`get[param1=value1]`）
- 2014-12-03 更新 connect 到最新的 v3.3.3，修复一些被弃用的方法。
- 2014-12-02 重构 random，将 random 按类别分放在不同的文件中。