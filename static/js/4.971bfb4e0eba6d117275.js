webpackJsonp([4],{1280:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(339),i=r(l),n=a(866),s=r(n),o=a(52);t.default={data:function(){return{loading:!1,disabledBtn:!1,retreatStrategysDetail:[],delIdlList:[],data:{reserve2:"",deadlineDateType:"",groupId:"",list:[],delIdlList:[]},index:"",dialogEditName:!1,dialogAdd:!1,dialogEdit:!1,addList:!1,submit:{reserve2:"",deadlineDateType:"",list:[]},addStrategyDialog:!1,addRules:{refundName:[{required:!0,message:"请输入规则名",trigger:"blur"}],compensationRate:[{required:!0,type:"number",trigger:"change"}],refundDateName:[{required:!0,message:"请输入退改日命名",trigger:"blur"}],refundDays:[{required:!0,validator:function(e,t,a){t?"number"!=typeof t?a(new Error("请输入数字")):t&&!(0,s.default)(t)?a(new Error("请输入整数天数")):a():a(new Error("请输入退改日期"))},trigger:"blur"}],status:[{required:!0,type:"number",message:"请选择退改状态",trigger:"change"}],note:[{required:!0,message:"请输入备注/描述",trigger:"blur"}]},retreatStrategy:{},tempRetreatStrategy:{refundName:"",compensationRate:0,refundDateName:"",refundDays:"",note:"",refundId:""}}},methods:{editName:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogEditName=!1})},handleAdd:function(e,t){this.dialogAdd=!0,this.index=e},addRetreatStrategys:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a=(0,i.default)({},t.tempRetreatStrategy);t.retreatStrategysDetail.splice(t.index+1,0,a),t.dialogAdd=!1;for(var r in t.tempRetreatStrategy)t.tempRetreatStrategy[r]=""})},handleEdit:function(e,t){this.dialogEdit=!0,this.retreatStrategy=(0,i.default)({},t),this.index=e},editRetreatStrategys:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;for(var a in t.retreatStrategysDetail[t.index])t.retreatStrategysDetail[t.index][a]=t.retreatStrategy[a];t.dialogEdit=!1})},handleDelete:function(e,t){if(t.refundId){var a={refundId:t.refundId+""};this.delIdlList.push(a)}this.retreatStrategysDetail.splice(e,1)},saveStrategy:function(){var e=this;if(this.retreatStrategysDetail.forEach(function(t,a,r){if(a>0&&t.refundDays<=r[a-1].refundDays)return void e.$message({title:"警告",message:"第"+(a+1)+"条退改日期必须比第"+a+"条天数大",type:"warning"})}),this.retreatStrategysDetail.every(function(e,t,a){return!(t>0)||e.refundDays>a[t-1].refundDays})&&this.retreatStrategysDetail.length>0){this.retreatStrategysDetail.forEach(function(e){for(var t in e)e[t]+="","createTime"!=t&&"updateTime"!=t||delete e[t]});var t={reserve2:this.data.reserve2,deadlineDateType:this.data.deadlineDateType+"",groupId:this.data.groupId+"",list:this.retreatStrategysDetail,delIdlList:this.delIdlList};this.disabledBtn=!0,this.loading=!0,(0,o.retreatStrategyUpdate)(t).then(function(t){"0001"===t.data.code?(e.$message({title:"成功",message:"修改成功",type:"success"}),console.log(t),e.loading=!1,e.disabledBtn=!1,e.$router.push({path:"/admin/system/retreatStrategy/retreatStrategyList"})):(e.$message({title:"提示",message:"修改失败，请稍后重试",type:"warning"}),e.loading=!1)}).catch(function(t){console.log(t),e.$catchError(err),e.loading=!1})}else this.$message({title:"提示",message:"您还有未填写的信息，请完善",type:"error"})}},created:function(){var e=this;this.loading=!0;var t=this.$route.query.data;t&&(0,o.retreatStrategyEdit)(t).then(function(t){"0001"===t.data.code?(e.loading=!1,e.data.reserve2=t.data.result.reserve2,e.data.deadlineDateType=t.data.result.deadlineDateType,e.data.groupId=t.data.result.groupId,e.strategyName=t.data.result.reserve2,e.retreatStrategysDetail=t.data.result.list.sort(function(e,t){return e.refundDays-t.refundDays}),e.$message({message:"退改策略获取成功",type:"success"})):e.$message({message:"获取列表失败，请稍后重试",type:"warning"}),e.loading=!1}).catch(function(t){e.$catchError(err),e.loading=!1})}}},1463:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"retreatStrategyEdit"},[a("el-row",[a("el-col",[a("span",{staticStyle:{"line-height":"36px"}},[e._v("策略名称："),a("span",{domProps:{textContent:e._s(e.data.reserve2)}})]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogEditName=!0}}},[e._v("修改名称")])],1)],1),e._v(" "),a("el-dialog",{attrs:{size:"tiny",title:"修改策略名称",visible:e.dialogEditName},on:{"update:visible":function(t){e.dialogEditName=t}}},[a("el-form",{ref:"data",attrs:{model:e.data,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"策略名称:",prop:"reserve2",rules:[{required:!0,message:"策略名称不能为空"}]}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.data.reserve2,callback:function(t){e.data.reserve2=e._n(t)},expression:"data.reserve2"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editName("data")}}},[e._v("修改")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogEditName=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.retreatStrategysDetail,border:""}},[a("el-table-column",{attrs:{label:"规则名",prop:"refundName"}}),e._v(" "),a("el-table-column",{attrs:{label:"赔偿比例",prop:"compensationRate"}}),e._v(" "),a("el-table-column",{attrs:{label:"退改日命名",prop:"refundDateName"}}),e._v(" "),a("el-table-column",{attrs:{label:"退改日期",prop:"refundDays"}}),e._v(" "),a("el-table-column",{attrs:{label:"备注/描述",prop:"note"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleAdd(t.$index,t.row)}}},[e._v("添加")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{size:"tiny",title:"新增",visible:e.dialogAdd},on:{"update:visible":function(t){e.dialogAdd=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"tempRetreatStrategy",attrs:{"label-width":"120px",rules:e.addRules,model:e.tempRetreatStrategy}},[a("el-form-item",{attrs:{label:"规则名：",prop:"refundName"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入规则名"},model:{value:e.tempRetreatStrategy.refundName,callback:function(t){e.tempRetreatStrategy.refundName=t},expression:"tempRetreatStrategy.refundName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"赔偿比例：",prop:"compensationRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:e.tempRetreatStrategy.compensationRate,callback:function(t){e.tempRetreatStrategy.compensationRate=e._n(t)},expression:"tempRetreatStrategy.compensationRate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退改日命名：",prop:"refundDateName"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入退改日命名"},model:{value:e.tempRetreatStrategy.refundDateName,callback:function(t){e.tempRetreatStrategy.refundDateName=t},expression:"tempRetreatStrategy.refundDateName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退改日期：",prop:"refundDays"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入整数天数"},model:{value:e.tempRetreatStrategy.refundDays,callback:function(t){e.tempRetreatStrategy.refundDays=e._n(t)},expression:"tempRetreatStrategy.refundDays"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注/描述：",prop:"note"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},size:"small",placeholder:"请输入备注/描述",type:"textarea"},model:{value:e.tempRetreatStrategy.note,callback:function(t){e.tempRetreatStrategy.note=t},expression:"tempRetreatStrategy.note"}})],1)],1)],1)],1),e._v(" "),a("div",{slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogAdd=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addRetreatStrategys("tempRetreatStrategy")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{size:"tiny",title:"编辑",visible:e.dialogEdit},on:{"update:visible":function(t){e.dialogEdit=t}}},[a("el-form",{ref:"retreatStrategy",attrs:{"label-width":"120px",rules:e.addRules,model:e.retreatStrategy}},[a("el-form-item",{attrs:{label:"规则名：",prop:"refundName"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入规则名"},model:{value:e.retreatStrategy.refundName,callback:function(t){e.retreatStrategy.refundName=t},expression:"retreatStrategy.refundName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"赔偿比例：",prop:"compensationRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:e.retreatStrategy.compensationRate,callback:function(t){e.retreatStrategy.compensationRate=e._n(t)},expression:"retreatStrategy.compensationRate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退改日命名：",prop:"refundDateName"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入退改日命名"},model:{value:e.retreatStrategy.refundDateName,callback:function(t){e.retreatStrategy.refundDateName=t},expression:"retreatStrategy.refundDateName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退改日期：",prop:"refundDays"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入整数天数"},model:{value:e.retreatStrategy.refundDays,callback:function(t){e.retreatStrategy.refundDays=e._n(t)},expression:"retreatStrategy.refundDays"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注/描述：",prop:"note"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},size:"small",placeholder:"请输入备注/描述",type:"textarea"},model:{value:e.retreatStrategy.note,callback:function(t){e.retreatStrategy.note=t},expression:"retreatStrategy.note"}})],1)],1),e._v(" "),a("div",{slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogEdit=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editRetreatStrategys("retreatStrategy")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary",disabled:e.disabledBtn},on:{click:e.saveStrategy}},[e._v("保存")])],1)],1)},staticRenderFns:[]}},761:function(e,t,a){var r=a(7)(a(1280),a(1463),null,null);e.exports=r.exports},866:function(e,t,a){e.exports={default:a(867),__esModule:!0}},867:function(e,t,a){a(869),e.exports=a(37).Number.isInteger},868:function(e,t,a){var r=a(72),l=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&l(e)===e}},869:function(e,t,a){var r=a(71);r(r.S,"Number",{isInteger:a(868)})}});
//# sourceMappingURL=4.971bfb4e0eba6d117275.js.map