webpackJsonp([1],{1277:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(339),o=r(l),s=a(861),d=r(s),n=a(74),i=(r(n),a(52));e.default={data:function(){var t=this,e=function(t,e,a){""===e?a(new Error("请输入天数")):(0,d.default)(Number(e))?Number(e)>31||Number(e)<=0?a(new Error("日期不得大于31或小于0")):a():a(new Error("请输入整天数"))};return{isAddShow:!1,isEditShow:!1,secondDaysDisabled:!1,loading:!1,pageInfo:{count:0,currPage:1,pageSize:20,currentPage:1},addStrategy:{settleName:"",commissionRate:"",firstSetttleDateType:"",firstSetttleDateName:"",firstDays:1,firstRate:"",secondSetttleDateType:"",secondSetttleDateName:"",secondDays:"",secondRate:"",status:"",note:"",firstTopHalfMonthStar:"",firstLowerHalfMonthEnd:"",secondTopHalfMonthStar:"",secondLowerHalfMonthEnd:"",firstTopHalfMonthDelayDay:"",firstLowerHalfMonthDelayDay:"",secondTopHalfMonthDelayDay:"",secondLowerHalfMonthDelayDay:"",allMonthStar:"",allFirstMonthdelayDay:"",allSecondMonthdelayDay:"",firstDelayDay:"",secondDelayDay:""},addStrategyRules:{settleName:[{required:!0,message:"请输入规则名",trigger:"blur"}],commissionRate:[{required:!0,type:"number",message:"请填写比率",trigger:"blur"}],firstSetttleDateType:[{required:!0,type:"number",message:"请选择类型",trigger:"change"}],firstSetttleDateName:[{required:!0,message:"请输入首次结算日期规则名称",trigger:"blur"}],firstDays:[{required:!0,type:"number",message:"请选择类型",trigger:"change"}],firstRate:[{required:!0,type:"number",message:"请填写比率",trigger:"blur"}],secondSetttleDateName:[{required:!0,message:"请输入二次结算日期规则名称",trigger:"blur"}],secondDays:[{required:!0,type:"number",message:"请选择类型",trigger:"change"}],status:[{type:"number",required:!0,message:"请选择类型",trigger:"change"}],note:[{required:!0,message:"请输入备注/描述",trigger:"blur"}],firstTopHalfMonthStar:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?Number(a)<=0||Number(a)>14?r(new Error("上半月起始日在1-14号之间")):(t.$refs.addStrategy.validateField("firstLowerHalfMonthEnd"),r()):r(new Error("请输入整天数"))},trigger:"blur,change"}],firstLowerHalfMonthEnd:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?Number(a)<=0||Number(a)>31?r(new Error("上半月起始日在1-31号之间")):Number(a)<=Number(t.addStrategy.firstTopHalfMonthStar)?r(new Error("必须大于起始日期")):(t.$refs.addStrategy.validateField("secondTopHalfMonthStar"),r()):r(new Error("请输入整天数"))},trigger:"blur,change"}],secondTopHalfMonthStar:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?31==t.addStrategy.firstLowerHalfMonthEnd?(t.addStrategy.secondTopHalfMonthStar=0,t.addStrategy.secondLowerHalfMonthEnd=0,r()):Number(a)<=0||Number(a)>31?r(new Error("上半月起始日在1-31号之间")):a<=Number(t.addStrategy.firstLowerHalfMonthEnd)?r(new Error("必须大于上半月结束日期")):r():r(new Error("请输入整天数"))},trigger:"blur,change"}],secondLowerHalfMonthEnd:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?31==t.addStrategy.firstLowerHalfMonthEnd?(t.addStrategy.secondTopHalfMonthStar=0,t.addStrategy.secondLowerHalfMonthEnd=0,r()):Number(a)<=0||Number(a)>31?r(new Error("上半月起始日在1-31号之间")):r():r(new Error("请输入整天数"))},trigger:"blur,change"}],firstTopHalfMonthDelayDay:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?t.addStrategy.secondTopHalfMonthDelayDay&&Number(a)>=Number(t.addStrategy.secondTopHalfMonthDelayDay)?r(new Error("首次结算延后天数不得大于二次结算延后天数")):1===t.addStrategy.firstSetttleDateType&&a<0?r(new Error("不能小于0")):r():r(new Error("请输入整天数"))},trigger:"blur"}],secondTopHalfMonthDelayDay:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?t.addStrategy.firstTopHalfMonthDelayDay&&Number(a)<=Number(t.addStrategy.firstTopHalfMonthDelayDay)?r(new Error("二次结算延后天数不得小于首次结算延后天数")):1===t.addStrategy.firstSetttleDateType&&a<0?r(new Error("不能小于0")):r():r(new Error("请输入整天数"))},trigger:"blur"}],allMonthStar:[{required:!0,validator:e,trigger:"blur"}],allFirstMonthdelayDay:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?t.addStrategy.allSecondMonthdelayDay&&Number(a)>=Number(t.addStrategy.allSecondMonthdelayDay)?r(new Error("首次结算延后天数不得大于二次结算延后天数")):1===t.addStrategy.firstSetttleDateType&&a<0?r(new Error("不能小于0")):r():r(new Error("请输入整天数"))},trigger:"blur"}],allSecondMonthdelayDay:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?t.addStrategy.allFirstMonthdelayDay&&Number(a)<=Number(t.addStrategy.allFirstMonthdelayDay)?r(new Error("二次结算延后天数不得小于首次结算延后天数")):1===t.addStrategy.firstSetttleDateType&&a<0?r(new Error("不能小于0")):r():r(new Error("请输入整天数"))},trigger:"blur"}],firstDelayDay:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?t.addStrategy.secondDelayDay&&Number(a)>=Number(t.addStrategy.secondDelayDay)?r(new Error("首次结算延后天数不得大于二次结算延后天数")):1===t.addStrategy.firstSetttleDateType&&a<0?r(new Error("不能小于0")):r():r(new Error("请输入整天数"))},trigger:"blur"}],secondDelayDay:[{required:!0,validator:function(e,a,r){""!==a||(0,d.default)(Number(a))?t.addStrategy.firstDelayDay&&Number(a)<=Number(t.addStrategy.firstDelayDay)?r(new Error("二次结算延后天数不得小于首次结算延后天数")):1===t.addStrategy.firstSetttleDateType&&a<0?r(new Error("不能小于0")):r():r(new Error("请输入整天数"))},trigger:"blur"}]},strategy:[]}},methods:{secondDaysChange:function(){0===this.addStrategy.secondDays?(this.secondDaysDisabled=!0,this.addStrategy.secondRate=0):this.secondDaysDisabled=!1},secondDaysChange1:function(){0===this.editStrategy.secondDays?(this.secondDaysDisabled=!0,this.editStrategy.secondRate=0):this.secondDaysDisabled=!1},formatTooltip:function(t){return t+"%"},handleSizeChange:function(t){var e=this;this.loading=!0;var a={pageSize:t,currPage:this.pageInfo.currPage};(0,i.sysSettleInfoList)(a).then(function(t){if("0001"===t.data.code){var a=t.data.result.pageInfo;e.pageInfo.count=a.count,e.pageInfo.currPage=a.currPage,e.pageInfo.pageSize=a.pageSize,e.strategy=t.data.result.settleInfoList,e.loading=!1}else e.$message("获取失败,请稍后再试"),e.loading=!1}).catch(function(t){console.log(t),e.$catchError(err),e.loading=!1})},changeFirstDays:function(){switch(this.addStrategy.firstDays){case 1:this.addStrategy.allMonthStar="",this.addStrategy.allFirstMonthdelayDay="",this.addStrategy.allSecondMonthdelayDay="",this.addStrategy.firstDelayDay="",this.addStrategy.secondDelayDay="";break;case 2:this.addStrategy.firstTopHalfMonthStar="",this.addStrategy.firstLowerHalfMonthEnd="",this.addStrategy.secondTopHalfMonthStar="",this.addStrategy.secondLowerHalfMonthEnd="",this.addStrategy.firstTopHalfMonthDelayDay="",this.addStrategy.secondTopHalfMonthDelayDay="",this.addStrategy.firstDelayDay="",this.addStrategy.secondDelayDay="";break;case 3:this.addStrategy.firstTopHalfMonthStar="",this.addStrategy.firstLowerHalfMonthEnd="",this.addStrategy.secondTopHalfMonthStar="",this.addStrategy.secondLowerHalfMonthEnd="",this.addStrategy.firstTopHalfMonthDelayDay="",this.addStrategy.secondTopHalfMonthDelayDay="",this.addStrategy.allMonthStar="",this.addStrategy.allFirstMonthdelayDay="",this.addStrategy.allSecondMonthdelayDay="";break;default:this.addStrategy.firstTopHalfMonthStar="",this.addStrategy.firstLowerHalfMonthEnd="",this.addStrategy.secondTopHalfMonthStar="",this.addStrategy.secondLowerHalfMonthEnd="",this.addStrategy.firstTopHalfMonthDelayDay="",this.addStrategy.secondTopHalfMonthDelayDay="",this.addStrategy.allMonthStar="",this.addStrategy.allFirstMonthdelayDay="",this.addStrategy.allSecondMonthdelayDay="",this.addStrategy.firstDelayDay="",this.addStrategy.secondDelayDay=""}},handleCurrentChange:function(t){var e=this;this.loading=!0;var a={currPage:t,pageSize:this.pageInfo.pageSize};(0,i.sysSettleInfoList)(a).then(function(t){if("0001"===t.data.code){var a=t.data.result.pageInfo;e.pageInfo.count=a.count,e.strategy=t.data.result.settleInfoList,e.loading=!1}else e.$message("获取失败,请稍后再试"),e.loading=!1}).catch(function(t){console.log(t),e.$catchError(err),e.loading=!1})},handleEdit:function(t,e){this.isEditShow=!0,console.log(e),this.addStrategy=(0,o.default)({},e)},updatePageStrategy:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;if(e.addStrategy.commissionRate+e.addStrategy.firstRate+e.addStrategy.secondRate===1){var a=(0,o.default)({},e.addStrategy);for(var r in a)a[r]+="";(0,i.updateStrategy)(a).then(function(t){e.isEditShow=!1,e.loading=!0,"0001"===t.data.code?(e.getList(),e.pageInfo.currPage=1,e.$message({message:"修改成功",type:"success"}),e.loading=!1):(e.$message({message:"修改失败,请稍后再试",type:"error"}),e.loading=!1)}).catch(function(t){e.$catchError(err),e.loading=!1})}else 0!==e.addStrategy.secondDays?e.$message({message:"平台佣金率，首次结算比率，二次结算比率，和必须为1！",type:"warning"}):e.$message({message:"平台佣金率，首次结算比率,和必须为1！",type:"warning"})})},handleDelete:function(t,e){var a=this;this.$confirm("是否删除该条规则","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0;var t={settleId:e.settleId};(0,i.deleteStrategy)(t).then(function(t){console.log(t),"0001"===t.data.code?(a.getList(a.pageInfo.currPage,a.pageInfo.pageSize),a.$message({type:"success",message:"删除成功!"}),a.loading=!1):(a.$message.error("删除失败,请稍后再试"),a.loading=!1)}).catch(function(t){a.loading=!1,a.$catchError(err),console.log(t)})}).catch(function(){a.$message({type:"info",message:"已取消删除"}),a.loading=!1})},setttleDateTypeFilter:function(t){return 1===t.firstSetttleDateType?"下单日期":"出团日期"},statusFilter:function(t){return 1===t.status?"启用":"禁用"},firstDaysFilter:function(t){return 1===t.firstDays?"半月结":2===t.firstDays?"月结":3===t.firstDays?"单笔订单结算":""},commissionRateFilter:function(t){return 100*t.commissionRate+"%"},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;this.loading=!0;var r={pageSize:a,currPage:e};(0,i.sysSettleInfoList)(r).then(function(e){if(console.log(e),"0001"===e.data.code){var a=e.data.result.pageInfo;t.pageInfo.count=a.count,t.pageInfo.currPage=a.currPage,t.pageInfo.pageSize=a.pageSize,t.strategy=e.data.result.settleInfoList,t.loading=!1}else t.$message("获取失败,请稍后再试"),t.loading=!1}).catch(function(e){console.log(e),t.loading=!1,t.$catchError(e)})},addStrategyDialog:function(){this.isAddShow=!0;for(var t in this.addStrategy)this.addStrategy[t]=""},saveAddStrategy:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;if(e.addStrategy.commissionRate+e.addStrategy.firstRate+e.addStrategy.secondRate===1){e.loading=!0,e.isAddShow=!1,e.addStrategy.secondSetttleDateType=e.addStrategy.firstSetttleDateType;for(var a in e.addStrategy)e.addStrategy[a]+="";var r={settleName:e.addStrategy.settleName,commissionRate:e.addStrategy.commissionRate,firstSetttleDateType:e.addStrategy.firstSetttleDateType,firstSetttleDateName:e.addStrategy.firstSetttleDateName,firstDays:e.addStrategy.firstDays,firstRate:e.addStrategy.firstRate,secondSetttleDateType:e.addStrategy.secondSetttleDateType,secondSetttleDateName:e.addStrategy.secondSetttleDateName,secondDays:e.addStrategy.secondDays,secondRate:e.addStrategy.secondRate,status:e.addStrategy.status,note:e.addStrategy.note,firstTopHalfMonthStar:e.addStrategy.firstTopHalfMonthStar,firstLowerHalfMonthEnd:e.addStrategy.firstLowerHalfMonthEnd,secondTopHalfMonthStar:e.addStrategy.secondTopHalfMonthStar,secondLowerHalfMonthEnd:e.addStrategy.secondLowerHalfMonthEnd,firstTopHalfMonthDelayDay:e.addStrategy.firstTopHalfMonthDelayDay,firstLowerHalfMonthDelayDay:e.addStrategy.firstLowerHalfMonthDelayDay,secondTopHalfMonthDelayDay:e.addStrategy.secondTopHalfMonthDelayDay,secondLowerHalfMonthDelayDay:e.addStrategy.secondLowerHalfMonthDelayDay,allMonthStar:e.addStrategy.allMonthStar,allFirstMonthdelayDay:e.addStrategy.allFirstMonthdelayDay,allSecondMonthdelayDay:e.addStrategy.allSecondMonthdelayDay,firstDelayDay:e.addStrategy.firstDelayDay,secondDelayDay:e.addStrategy.secondDelayDay};(0,i.insertStrategy)(r).then(function(t){if("0001"===t.data.code){e.getList(),e.pageInfo.currPage=1,e.$message({message:"新增成功",type:"success"});for(var a in e.addStrategy)e.addStrategy[a]="";e.firstSetttleDateType=1,e.secondSetttleDateType=e.firstSetttleDateType,e.loading=!1}else e.$message.error({message:t.data.message}),e.loading=!1}).catch(function(t){e.$catchError(err),e.loading=!1})}else 0!==e.addStrategy.secondDays?e.$message({message:"平台佣金率，首次结算比率，二次结算比率，和必须为1！",type:"warning"}):e.$message({message:"平台佣金率，首次结算比率,和必须为1！",type:"warning"})})}},created:function(){this.getList(1,20)}}},1358:function(t,e,a){e=t.exports=a(736)(),e.push([t.i,".add[data-v-677247d0]{margin-bottom:20px}.settlement .el-col[data-v-677247d0]{margin-right:10px}.toolbar[data-v-677247d0]{text-align:right}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/admin/system/settlementStrategy.vue"],names:[],mappings:"AACA,sBACC,kBAAoB,CACpB,AACD,qCACC,iBAAkB,CAClB,AACD,0BACC,gBAAkB,CAClB",file:"settlementStrategy.vue",sourcesContent:["\n.add[data-v-677247d0]{\n\tmargin-bottom: 20px;\n}\n.settlement .el-col[data-v-677247d0]{\n\tmargin-right:10px;\n}\n.toolbar[data-v-677247d0]{\n\ttext-align: right;\n}\n"],sourceRoot:""}])},1404:function(t,e,a){var r=a(1358);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(737)("2ca5a742",r,!0)},1467:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settlementStrategy"},[a("el-row",{staticClass:"toolbar"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addStrategyDialog}},[t._v("新增")])],1),t._v(" "),a("el-dialog",{attrs:{title:"新增",visible:t.isAddShow},on:{"update:visible":function(e){t.isAddShow=e}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:18}},[a("el-form",{ref:"addStrategy",attrs:{rules:t.addStrategyRules,"label-width":"146px",model:t.addStrategy}},[a("el-form-item",{attrs:{label:"规则名:",prop:"settleName"}},[a("el-input",{attrs:{placeholder:"请输入规则名",size:"small","auto-complete":"off"},model:{value:t.addStrategy.settleName,callback:function(e){t.addStrategy.settleName=e},expression:"addStrategy.settleName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"平台佣金率:",prop:"commissionRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:t.addStrategy.commissionRate,callback:function(e){t.addStrategy.commissionRate=t._n(e)},expression:"addStrategy.commissionRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"日期类型:",prop:"firstSetttleDateType"}},[a("el-radio-group",{model:{value:t.addStrategy.firstSetttleDateType,callback:function(e){t.addStrategy.firstSetttleDateType=e},expression:"addStrategy.firstSetttleDateType"}},[a("el-radio",{attrs:{label:1}},[t._v("下单日期")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("返程结束日期")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"结算类型:",prop:"firstDays"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择"},on:{change:t.changeFirstDays},model:{value:t.addStrategy.firstDays,callback:function(e){t.addStrategy.firstDays=e},expression:"addStrategy.firstDays"}},[a("el-option",{attrs:{label:"半月结",value:1}}),t._v(" "),a("el-option",{attrs:{label:"月结",value:2}}),t._v(" "),a("el-option",{attrs:{label:"单笔订单结算",value:3}})],1)],1),t._v(" "),1===t.addStrategy.firstDays?a("div",[a("el-form-item",{attrs:{label:"上半月结算日期:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstTopHalfMonthStar"}},[a("el-input",{attrs:{size:"small",placeholder:"上半月起始日","auto-complete":"off"},model:{value:t.addStrategy.firstTopHalfMonthStar,callback:function(e){t.addStrategy.firstTopHalfMonthStar=e},expression:"addStrategy.firstTopHalfMonthStar"}})],1)],1),t._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstLowerHalfMonthEnd"}},[a("el-input",{attrs:{size:"small",placeholder:"上半月结束日","auto-complete":"off"},model:{value:t.addStrategy.firstLowerHalfMonthEnd,callback:function(e){t.addStrategy.firstLowerHalfMonthEnd=e},expression:"addStrategy.firstLowerHalfMonthEnd"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"下半月结算日期:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondTopHalfMonthStar"}},[a("el-input",{attrs:{size:"small",placeholder:"下半月起始日","auto-complete":"off",disabled:31==t.addStrategy.firstLowerHalfMonthEnd},model:{value:t.addStrategy.secondTopHalfMonthStar,callback:function(e){t.addStrategy.secondTopHalfMonthStar=e},expression:"addStrategy.secondTopHalfMonthStar"}})],1)],1),t._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondLowerHalfMonthEnd"}},[a("el-input",{attrs:{size:"small",placeholder:"下半月结束日","auto-complete":"off",disabled:31==t.addStrategy.firstLowerHalfMonthEnd},model:{value:t.addStrategy.secondLowerHalfMonthEnd,callback:function(e){t.addStrategy.secondLowerHalfMonthEnd=e},expression:"addStrategy.secondLowerHalfMonthEnd"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"首次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstTopHalfMonthDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"首次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.firstTopHalfMonthDelayDay,callback:function(e){t.addStrategy.firstTopHalfMonthDelayDay=e},expression:"addStrategy.firstTopHalfMonthDelayDay"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondTopHalfMonthDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"二次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.secondTopHalfMonthDelayDay,callback:function(e){t.addStrategy.secondTopHalfMonthDelayDay=e},expression:"addStrategy.secondTopHalfMonthDelayDay"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),2===t.addStrategy.firstDays?a("div",[a("el-form-item",{attrs:{label:"结算日期:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"allMonthStar"}},[a("el-input",{attrs:{size:"small",placeholder:"起始日","auto-complete":"off"},model:{value:t.addStrategy.allMonthStar,callback:function(e){t.addStrategy.allMonthStar=e},expression:"addStrategy.allMonthStar"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"首次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"allFirstMonthdelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"首次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.allFirstMonthdelayDay,callback:function(e){t.addStrategy.allFirstMonthdelayDay=e},expression:"addStrategy.allFirstMonthdelayDay"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"allSecondMonthdelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"二次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.allSecondMonthdelayDay,callback:function(e){t.addStrategy.allSecondMonthdelayDay=e},expression:"addStrategy.allSecondMonthdelayDay"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),3===t.addStrategy.firstDays?a("div",[a("el-form-item",{attrs:{label:"首次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"首次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.firstDelayDay,callback:function(e){t.addStrategy.firstDelayDay=e},expression:"addStrategy.firstDelayDay"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"二次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.secondDelayDay,callback:function(e){t.addStrategy.secondDelayDay=e},expression:"addStrategy.secondDelayDay"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"首次结算规则名称:",prop:"firstSetttleDateName"}},[a("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:t.addStrategy.firstSetttleDateName,callback:function(e){t.addStrategy.firstSetttleDateName=e},expression:"addStrategy.firstSetttleDateName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"首次结算比率:",prop:"firstRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:t.addStrategy.firstRate,callback:function(e){t.addStrategy.firstRate=t._n(e)},expression:"addStrategy.firstRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算规则名称:",prop:"secondSetttleDateName"}},[a("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:t.addStrategy.secondSetttleDateName,callback:function(e){t.addStrategy.secondSetttleDateName=e},expression:"addStrategy.secondSetttleDateName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算比率:",prop:"secondRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:t.addStrategy.secondRate,callback:function(e){t.addStrategy.secondRate=t._n(e)},expression:"addStrategy.secondRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"结算状态",prop:"status"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择状态"},model:{value:t.addStrategy.status,callback:function(e){t.addStrategy.status=e},expression:"addStrategy.status"}},[a("el-option",{attrs:{label:"启用",value:1}}),t._v(" "),a("el-option",{attrs:{label:"禁用",value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"备注/描述:",prop:"note"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},"auto-complete":"off"},model:{value:t.addStrategy.note,callback:function(e){t.addStrategy.note=e},expression:"addStrategy.note"}})],1)],1)],1)],1),t._v(" "),a("div",{slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.saveAddStrategy("addStrategy")}}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.isAddShow=!1}}},[t._v("取消")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"操作中,请稍后O(∩_∩)O",data:t.strategy,border:""}},[a("el-table-column",{attrs:{prop:"settleId",label:"结算规则ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"settleName",label:"规则名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commissionRate",formatter:t.commissionRateFilter,label:"平台佣金费率"}}),t._v(" "),a("el-table-column",{attrs:{prop:"firstDays",formatter:t.firstDaysFilter,label:"结算类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"firstSetttleDateType",formatter:t.setttleDateTypeFilter,label:"日期类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",formatter:t.statusFilter,label:"结算状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"note",label:"备注/描述"}}),t._v(" "),a("el-table-column",{attrs:{width:"180",label:"结算操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.isEditShow},on:{"update:visible":function(e){t.isEditShow=e}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:18}},[a("el-form",{ref:"addStrategy",attrs:{rules:t.addStrategyRules,"label-width":"146px",model:t.addStrategy}},[a("el-form-item",{attrs:{label:"规则名:",prop:"settleName"}},[a("el-input",{attrs:{placeholder:"请输入规则名",size:"small","auto-complete":"off"},model:{value:t.addStrategy.settleName,callback:function(e){t.addStrategy.settleName=e},expression:"addStrategy.settleName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"平台佣金率:",prop:"commissionRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:t.addStrategy.commissionRate,callback:function(e){t.addStrategy.commissionRate=t._n(e)},expression:"addStrategy.commissionRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"日期类型:",prop:"firstSetttleDateType"}},[a("el-radio-group",{model:{value:t.addStrategy.firstSetttleDateType,callback:function(e){t.addStrategy.firstSetttleDateType=e},expression:"addStrategy.firstSetttleDateType"}},[a("el-radio",{attrs:{label:1}},[t._v("下单日期")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("返程结束日期")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"结算类型:",prop:"firstDays"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择"},on:{change:t.changeFirstDays},model:{value:t.addStrategy.firstDays,callback:function(e){t.addStrategy.firstDays=e},expression:"addStrategy.firstDays"}},[a("el-option",{attrs:{label:"半月结",value:1}}),t._v(" "),a("el-option",{attrs:{label:"月结",value:2}}),t._v(" "),a("el-option",{attrs:{label:"单笔订单结算",value:3}})],1)],1),t._v(" "),1===t.addStrategy.firstDays?a("div",[a("el-form-item",{attrs:{label:"上半月结算日期:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstTopHalfMonthStar"}},[a("el-input",{attrs:{size:"small",placeholder:"上半月起始日","auto-complete":"off"},model:{value:t.addStrategy.firstTopHalfMonthStar,callback:function(e){t.addStrategy.firstTopHalfMonthStar=e},expression:"addStrategy.firstTopHalfMonthStar"}})],1)],1),t._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstLowerHalfMonthEnd"}},[a("el-input",{attrs:{size:"small",placeholder:"上半月结束日","auto-complete":"off"},model:{value:t.addStrategy.firstLowerHalfMonthEnd,callback:function(e){t.addStrategy.firstLowerHalfMonthEnd=e},expression:"addStrategy.firstLowerHalfMonthEnd"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"下半月结算日期:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondTopHalfMonthStar"}},[a("el-input",{attrs:{size:"small",placeholder:"下半月起始日","auto-complete":"off",disabled:31==t.addStrategy.firstLowerHalfMonthEnd},model:{value:t.addStrategy.secondTopHalfMonthStar,callback:function(e){t.addStrategy.secondTopHalfMonthStar=e},expression:"addStrategy.secondTopHalfMonthStar"}})],1)],1),t._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondLowerHalfMonthEnd"}},[a("el-input",{attrs:{size:"small",placeholder:"下半月结束日","auto-complete":"off",disabled:31==t.addStrategy.firstLowerHalfMonthEnd},model:{value:t.addStrategy.secondLowerHalfMonthEnd,callback:function(e){t.addStrategy.secondLowerHalfMonthEnd=e},expression:"addStrategy.secondLowerHalfMonthEnd"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"首次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstTopHalfMonthDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"首次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.firstTopHalfMonthDelayDay,callback:function(e){t.addStrategy.firstTopHalfMonthDelayDay=e},expression:"addStrategy.firstTopHalfMonthDelayDay"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondTopHalfMonthDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"二次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.secondTopHalfMonthDelayDay,callback:function(e){t.addStrategy.secondTopHalfMonthDelayDay=e},expression:"addStrategy.secondTopHalfMonthDelayDay"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),2===t.addStrategy.firstDays?a("div",[a("el-form-item",{attrs:{label:"结算日期:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"allMonthStar"}},[a("el-input",{attrs:{size:"small",placeholder:"起始日","auto-complete":"off"},model:{value:t.addStrategy.allMonthStar,callback:function(e){t.addStrategy.allMonthStar=e},expression:"addStrategy.allMonthStar"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"首次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"allFirstMonthdelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"首次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.allFirstMonthdelayDay,callback:function(e){t.addStrategy.allFirstMonthdelayDay=e},expression:"addStrategy.allFirstMonthdelayDay"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"allSecondMonthdelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"二次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.allSecondMonthdelayDay,callback:function(e){t.addStrategy.allSecondMonthdelayDay=e},expression:"addStrategy.allSecondMonthdelayDay"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),3===t.addStrategy.firstDays?a("div",[a("el-form-item",{attrs:{label:"首次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"firstDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"首次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.firstDelayDay,callback:function(e){t.addStrategy.firstDelayDay=e},expression:"addStrategy.firstDelayDay"}})],1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算延后日:"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{"label-width":"0px",prop:"secondDelayDay"}},[a("el-input",{attrs:{size:"small",placeholder:"二次结算延后日","auto-complete":"off"},model:{value:t.addStrategy.secondDelayDay,callback:function(e){t.addStrategy.secondDelayDay=e},expression:"addStrategy.secondDelayDay"}})],1)],1)],1)],1)],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"首次结算规则名称:",prop:"firstSetttleDateName"}},[a("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:t.addStrategy.firstSetttleDateName,callback:function(e){t.addStrategy.firstSetttleDateName=e},expression:"addStrategy.firstSetttleDateName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"首次结算比率:",prop:"firstRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:t.addStrategy.firstRate,callback:function(e){t.addStrategy.firstRate=t._n(e)},expression:"addStrategy.firstRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算规则名称:",prop:"secondSetttleDateName"}},[a("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:t.addStrategy.secondSetttleDateName,callback:function(e){t.addStrategy.secondSetttleDateName=e},expression:"addStrategy.secondSetttleDateName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二次结算比率:",prop:"secondRate"}},[a("el-input-number",{attrs:{placeholder:"请选择赔偿比例",size:"small",step:.01,min:0,max:1},model:{value:t.addStrategy.secondRate,callback:function(e){t.addStrategy.secondRate=t._n(e)},expression:"addStrategy.secondRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"结算状态",prop:"status"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择状态"},model:{value:t.addStrategy.status,callback:function(e){t.addStrategy.status=e},expression:"addStrategy.status"}},[a("el-option",{attrs:{label:"启用",value:1}}),t._v(" "),a("el-option",{attrs:{label:"禁用",value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"备注/描述:",prop:"note"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},"auto-complete":"off"},model:{value:t.addStrategy.note,callback:function(e){t.addStrategy.note=e},expression:"addStrategy.note"}})],1)],1)],1)],1),t._v(" "),a("div",{slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.updatePageStrategy("addStrategy")}}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.isEditShow=!1}}},[t._v("取消")])],1)],1),t._v(" "),a("el-row",{staticClass:"toolbar"},[a("el-pagination",{attrs:{"current-page":t.pageInfo.currPage,"page-sizes":[10,20,30,40],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},758:function(t,e,a){a(1404);var r=a(7)(a(1277),a(1467),"data-v-677247d0",null);t.exports=r.exports},861:function(t,e,a){t.exports={default:a(862),__esModule:!0}},862:function(t,e,a){a(864),t.exports=a(37).Number.isInteger},863:function(t,e,a){var r=a(72),l=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&l(t)===t}},864:function(t,e,a){var r=a(71);r(r.S,"Number",{isInteger:a(863)})}});
//# sourceMappingURL=1.8c3fc633ec1475579c7e.js.map