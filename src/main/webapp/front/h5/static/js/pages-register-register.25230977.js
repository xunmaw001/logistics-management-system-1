(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"1b91":function(r,e,i){"use strict";var o=i("d7e0"),t=i.n(o);t.a},3735:function(r,e,i){"use strict";i.r(e);var o=i("f7a6"),t=i("48c7");for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);i("1b91"),i("cdf9");var n,d=i("f0c5"),l=Object(d["a"])(t["default"],o["b"],o["c"],!1,null,"9a04de66",null,!1,o["a"],n);e["default"]=l.exports},"3c6a":function(r,e,i){var o=i("6ae1");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var t=i("4f06").default;t("48c29997",o,!0,{sourceMap:!1,shadowMode:!1})},4340:function(r,e,i){var o=i("24fb");e=o(!1),e.push([r.i,".btn-submit[data-v-9a04de66]{height:auto!important;line-height:%?88?%}",""]),r.exports=e},"48c7":function(r,e,i){"use strict";i.r(e);var o=i("4e2d"),t=i.n(o);for(var a in o)"default"!==a&&function(r){i.d(e,r,(function(){return o[r]}))}(a);e["default"]=t.a},"4e2d":function(r,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("96cf");var t=o(i("3b8d")),a={data:function(){return{kehuxingbieOptions:[],kehuxingbieIndex:0,yuangongxingbieOptions:[],yuangongxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],e=uni.getStorageSync("loginTable"),this.tableName=e,"kehu"==this.tableName&&(this.kehuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.kehuxingbieOptions[0]),"yuangong"==this.tableName&&(this.yuangongxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yuangongxingbieOptions[0]),this.styleChange();case 6:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{kehuxingbieChange:function(r){this.kehuxingbieIndex=r.target.value,this.ruleForm.xingbie=this.kehuxingbieOptions[this.kehuxingbieIndex]},yuangongxingbieChange:function(r){this.yuangongxingbieIndex=r.target.value,this.ruleForm.xingbie=this.yuangongxingbieOptions[this.yuangongxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.kehuzhanghao||"kehu"!=this.tableName){r.next=3;break}return this.$utils.msg("客户账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima||"kehu"!=this.tableName){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if("kehu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=9;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 9:if("kehu"!=this.tableName||!this.ruleForm.kehushouji||this.$validate.isMobile(this.ruleForm.kehushouji)){r.next=12;break}return this.$utils.msg("客户手机应输入手机格式"),r.abrupt("return");case 12:if(this.ruleForm.yuangonggonghao||"yuangong"!=this.tableName){r.next=15;break}return this.$utils.msg("员工工号不能为空"),r.abrupt("return");case 15:if("yuangong"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=18;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 18:if(this.ruleForm.yuangongxingming||"yuangong"!=this.tableName){r.next=21;break}return this.$utils.msg("员工姓名不能为空"),r.abrupt("return");case 21:if("yuangong"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){r.next=24;break}return this.$utils.msg("联系方式应输入手机格式"),r.abrupt("return");case 24:if("yuangong"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=27;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 27:return r.next=29,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 29:this.$utils.msgBack("注册成功");case 31:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=a},"6ae1":function(r,e,i){var o=i("24fb");e=o(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-9a04de66]{height:calc(100vh - 44px);overflow:auto}.content[data-v-9a04de66]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220212/49b4234c9a534b86a8a0e4daf94749bc.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-9a04de66]{text-align:center}.logo uni-image[data-v-9a04de66]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-9a04de66]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-9a04de66]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-9a04de66]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-9a04de66]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-9a04de66]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-9a04de66]{color:#b49950}.picker-select-input[data-v-9a04de66]{line-height:%?88?%}',""]),r.exports=e},cdf9:function(r,e,i){"use strict";var o=i("3c6a"),t=i.n(o);t.a},d7e0:function(r,e,i){var o=i("4340");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var t=i("4f06").default;t("494cde32",o,!0,{sourceMap:!1,shadowMode:!1})},f7a6:function(r,e,i){"use strict";var o,t=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{padding:"48rpx 48rpx 140rpx",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 5%",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0 0 300rpx 300rpx",borderWidth:"0",width:"90%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220212/ad27dde95af143db9a6447f869150241.jfif",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220212/ad27dde95af143db9a6447f869150241.jfif",mode:"aspectFill"}})],1),"kehu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"客户账号"},model:{value:r.ruleForm.kehuzhanghao,callback:function(e){r.$set(r.ruleForm,"kehuzhanghao",e)},expression:"ruleForm.kehuzhanghao"}})],1):r._e(),"kehu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"kehu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"kehu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"客户姓名"},model:{value:r.ruleForm.kehuxingming,callback:function(e){r.$set(r.ruleForm,"kehuxingming",e)},expression:"ruleForm.kehuxingming"}})],1):r._e(),"kehu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.kehuxingbieIndex,range:r.kehuxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.kehuxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"kehu"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"客户手机"},model:{value:r.ruleForm.kehushouji,callback:function(e){r.$set(r.ruleForm,"kehushouji",e)},expression:"ruleForm.kehushouji"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"员工工号"},model:{value:r.ruleForm.yuangonggonghao,callback:function(e){r.$set(r.ruleForm,"yuangonggonghao",e)},expression:"ruleForm.yuangonggonghao"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"员工姓名"},model:{value:r.ruleForm.yuangongxingming,callback:function(e){r.$set(r.ruleForm,"yuangongxingming",e)},expression:"ruleForm.yuangongxingming"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.yuangongxingbieIndex,range:r.yuangongxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.yuangongxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"部门"},model:{value:r.ruleForm.bumen,callback:function(e){r.$set(r.ruleForm,"bumen",e)},expression:"ruleForm.bumen"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"职位"},model:{value:r.ruleForm.zhiwei,callback:function(e){r.$set(r.ruleForm,"zhiwei",e)},expression:"ruleForm.zhiwei"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系方式"},model:{value:r.ruleForm.lianxifangshi,callback:function(e){r.$set(r.ruleForm,"lianxifangshi",e)},expression:"ruleForm.lianxifangshi"}})],1):r._e(),"yuangong"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1):r._e(),i("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 20%",borderColor:"#ccc",backgroundColor:"rgba(209, 176, 134, 1)",borderRadius:"80rpx",color:"#333",borderWidth:"2rpx",width:"60%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},a=[];i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))}}]);