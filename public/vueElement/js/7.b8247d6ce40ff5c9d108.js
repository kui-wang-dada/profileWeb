webpackJsonp([7],{GIrZ:function(e,t,l){var o=l("P0j/");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);l("rjj0")("09bf3948",o,!0)},"P0j/":function(e,t,l){(e.exports=l("FZ+f")(!1)).push([e.i,"\n.mainsecond {\n  padding: 10px 15px;\n}\n.tittle {\n  padding: 10px 15px;\n  line-height: 20px;\n  font-size: 18px;\n  /* border-bottom: 1px solid #DCDFE6; */\n  /* margin-bottom: 10px; */\n}\n.form {\n  padding: 15px 300px 15px 20px;\n  border: 1px solid #dcdfe6;\n  -webkit-box-shadow: 0px 1px 1px #dcdfe6;\n          box-shadow: 0px 1px 1px #dcdfe6;\n}\n",""])},fx65:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{tittle:"修改会场轮播",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{goback:function(){this.$emit("c","true")},onSubmit:function(){console.log("submit!")}}},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mainsecond"},[l("div",{staticClass:"tittle"},[e._v("\n    "+e._s(e.tittle)+"\n  ")]),e._v(" "),l("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"110px","label-position":"left"}},[l("el-form-item",{attrs:{label:"标题"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"运营区"}},[l("el-select",{attrs:{placeholder:"搜索板块"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"厦门市",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"福州市",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动开始时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"搜索板块"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动结束时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"搜索板块"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动类型"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"会场活动",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"普通运营区活动",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"展示类别"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"轮播方式",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"轮播方式+会场活动",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"展示方式"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"会场列表",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"商品列表",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"详情"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"上传图片"}},[l("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"show-file-list":"true"}},[l("i",{staticClass:"el-icon-plus"})]),e._v(" "),l("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),l("el-form-item",{attrs:{label:"详情图"}},[l("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"show-file-list":"true"}},[l("i",{staticClass:"el-icon-plus"})]),e._v(" "),l("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),l("el-button",{on:{click:e.goback}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var i=l("VU/8")(o,a,!1,function(e){l("GIrZ")},null,null);t.default=i.exports}});