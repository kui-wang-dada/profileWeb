webpackJsonp([43],{"7d3c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l),n=a("woOf"),r=a.n(n),s=a("viA7"),o=a("cAgV"),d=a("0xDb"),u=a("kdCj"),c=[{key:"2",display_name:"审核通过"},{key:"1",display_name:"待审核"},{key:"0",display_name:"退回"}],p=c.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),m=a("ZgUE"),h={name:"complexTable",directives:{waves:o.a},data:function(){return{tableKey:0,list:m.data,total:null,listLoading:!1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:c,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1,addContent:{title:"新增商品上下架审核",width:"90%",type:1,label:[{type:1,label:"所属运营区",width:"190",options:["福州市","三明市","龙岩市","浙江区","宁德区"]},{type:1,label:"上下架商品",width:"190",options:["福州市","三明市","龙岩市","浙江区","宁德区"]},{type:1,label:"所属商户",width:"190",options:["福州市","三明市","龙岩市","浙江区","宁德区"]},{type:1,label:"上下架商品类型",width:"190",options:["福州市","三明市","龙岩市","浙江区","宁德区"]},{type:1,label:"操作类型",width:"190",options:["系统管理员","录入员","审核员","测试员","123"]}],content:[{model:[]}]}}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]},typeFilter:function(t){return p[t]}},methods:{add:function(){this.$refs.addDialog.add()},getList:function(){var t=this;this.listLoading=!0,Object(s.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",Object(s.a)(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=r()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=r()({},t.temp);a.timestamp=+new Date(a.timestamp),Object(s.e)(a).then(function(){var e=!0,a=!1,l=void 0;try{for(var n,r=i()(t.list);!(e=(n=r.next()).done);e=!0){var s=n.value;if(s.id===t.temp.id){var o=t.list.indexOf(s);t.list.splice(o,1,t.temp);break}}}catch(t){a=!0,l=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw l}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(s.d)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e(62),a.e(61)]).then(a.bind(null,"zWO4")).then(function(e){var a=t.formatJson(["timestamp","title","type","importance","status"],t.list);e.export_json_to_excel(["timestamp","title","type","importance","status"],a,"table-list"),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(d.a)(e[t]):e[t]})})}},components:{addDialog:u.a}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索板块"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索板块"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索板块"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.key,attrs:{label:"搜索板块",value:t.key}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.add}},[t._v(t._s(t.$t("table.add")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"billNo",label:"搜索板块",width:"240",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createUser",label:"搜索板块",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createDate",label:"搜索板块",width:"180",formatter:t.formattime,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateUser",label:"搜索板块",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateDate",label:"搜索板块","min-width":"180",formatter:t.formattimet,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"checkStatus",label:"搜索板块",width:"120",formatter:t.formatcheck,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"delFlag",label:"搜索板块",width:"120",formatter:t.formatdel,align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"搜索板块","min-width":"150",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.handleDel(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.date"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.title"),prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.status")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.importance")}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.remark")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1),t._v(" "),a("add-dialog",{ref:"addDialog",attrs:{addContent:t.addContent}})],1)},staticRenderFns:[]},y=a("VU/8")(h,f,!1,null,null,null);e.default=y.exports},ZgUE:function(t,e){t.exports={draw:1,recordsTotal:87,recordsFiltered:87,data:[{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20180130152718",checkStatus:"2",opType:"1",updateDate:1517297276e3,updateUser:"admin",createDate:1517297238e3,upDown:null,createDateStr:"2018-01-30 15:27:18",isAudit:null,updateDateStr:"2018-01-30 15:27:56",reason:null,id:101},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20180122095856",checkStatus:"2",opType:"1",updateDate:1516586341e3,updateUser:"admin",createDate:1516586337e3,upDown:null,createDateStr:"2018-01-22 09:58:57",isAudit:null,updateDateStr:"2018-01-22 09:59:01",reason:null,id:100},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20180122095209",checkStatus:"2",opType:"1",updateDate:1516585934e3,updateUser:"admin",createDate:151658593e4,upDown:null,createDateStr:"2018-01-22 09:52:10",isAudit:null,updateDateStr:"2018-01-22 09:52:14",reason:null,id:99},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20180118114403",checkStatus:"2",opType:"1",updateDate:1516247047e3,updateUser:"admin",createDate:1516247044e3,upDown:null,createDateStr:"2018-01-18 11:44:04",isAudit:null,updateDateStr:"2018-01-18 11:44:07",reason:null,id:98},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20180102234633",checkStatus:"2",opType:"1",updateDate:1514907997e3,updateUser:"admin",createDate:1514907993e3,upDown:null,createDateStr:"2018-01-02 23:46:33",isAudit:null,updateDateStr:"2018-01-02 23:46:37",reason:null,id:97},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20171222134820",checkStatus:"2",opType:"1",updateDate:1513921706e3,updateUser:"admin",createDate:1513921701e3,upDown:null,createDateStr:"2017-12-22 13:48:21",isAudit:null,updateDateStr:"2017-12-22 13:48:26",reason:null,id:96},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20171221212201",checkStatus:"2",opType:"1",updateDate:1513862529e3,updateUser:"admin",createDate:1513862521e3,upDown:null,createDateStr:"2017-12-21 21:22:01",isAudit:null,updateDateStr:"2017-12-21 21:22:09",reason:null,id:95},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20171221113332",checkStatus:"2",opType:"1",updateDate:1513827216e3,updateUser:"admin",createDate:1513827212e3,upDown:null,createDateStr:"2017-12-21 11:33:32",isAudit:null,updateDateStr:"2017-12-21 11:33:36",reason:null,id:94},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20171221113255",checkStatus:"2",opType:"1",updateDate:1513827182e3,updateUser:"admin",createDate:1513827176e3,upDown:null,createDateStr:"2017-12-21 11:32:56",isAudit:null,updateDateStr:"2017-12-21 11:33:02",reason:null,id:93},{createUser:"admin",updateId:1,delFlag:"1",createId:1,audits:null,billNo:"SPSXJ20171220101036",checkStatus:"2",opType:"1",updateDate:1513735841e3,updateUser:"admin",createDate:1513735836e3,upDown:null,createDateStr:"2017-12-20 10:10:36",isAudit:null,updateDateStr:"2017-12-20 10:10:41",reason:null,id:92}]}}});