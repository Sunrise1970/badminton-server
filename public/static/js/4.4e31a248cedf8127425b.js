webpackJsonp([4,6],{4:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={props:{title:{type:String,"default":""}},data:function(){return{rebackHead:!1}},computed:{},ready:function(){var t=this.$route.path;(/index/.test(t)||/competitonList/.test(t)||/result/.test(t))&&(this.rebackHead=!0)},attached:function(){},methods:{rebackHandler:function(){window.history.back()}},components:{}}},6:function(t,i,e){i=t.exports=e(2)(),i.push([t.id,".head{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.head a{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#fff;background-size:100%}.head a.active-border{border-bottom:2px solid #ccc}.reback-head{position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.pdb{padding-bottom:.05333333333333334rem}","",{version:3,sources:["/./src/components/common/head.vue"],names:[],mappings:"AAAA,MAAM,oBAAoB,oBAAoB,aAAa,eAAe,WAAW,cAAc,sBAAsB,8BAA8B,MAAM,wBAAwB,+BAA+B,CAAC,QAAQ,cAAc,mBAAmB,WAAW,OAAO,WAAW,oBAAoB,CAAC,sBAAsB,4BAA4B,CAAC,aAAa,eAAe,WAAW,cAAc,sBAAsB,8BAA8B,MAAM,wBAAwB,+BAA+B,CAAC,KAAK,oCAAqC,CAAC",file:"head.vue",sourcesContent:[".head{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.head a{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;color:#fff;background-size:100%}.head a.active-border{border-bottom:2px solid #ccc}.reback-head{position:fixed;width:100%;z-index:10000;transition:.3s linear;-webkit-transition:.3s linear;top:0;transform:translateZ(0);-webkit-transform:translateZ(0)}.pdb{padding-bottom:0.05333333333333334rem}\n"],sourceRoot:"webpack://"}])},7:function(t,i,e){var a=e(6);"string"==typeof a&&(a=[[t.id,a,""]]);e(3)(a,{});a.locals&&(t.exports=a.locals)},8:function(t,i){t.exports=' <div class="head ui-nav-box pdb" v-if=rebackHead> <a v-link="{ path: \'/index\', activeClass: \'active-border\' }">活动</a> <a v-link="{ path: \'/competitonList\', activeClass: \'active-border\' }">比赛</a> </div> <div class="reback-head clearfix ui-nav-box" v-if=!rebackHead> <i @click=rebackHandler class="iconfont ui-icon-return"></i> {{title}} </div> '},9:function(t,i,e){var a,o;e(7),a=e(4),o=e(8),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},15:function(t,i,e){var a,o;e(20),a=e(16),o=e(22),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},16:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={data:function(){return{}},computed:{},ready:function(){},attached:function(){},methods:{},components:{}}},19:function(t,i,e){i=t.exports=e(2)(),i.push([t.id,'.club-intro{padding-top:.2rem;padding-bottom:.2rem;background:url("http://placehold.it/50x50") no-repeat 0;background-size:.6666666666666666rem;text-indent:1rem}',"",{version:3,sources:["/./src/components/common/clubIntro.vue"],names:[],mappings:"AAAA,YAAY,kBAAmB,qBAAsB,wDAAkE,qCAAsC,gBAAgB,CAAC",file:"clubIntro.vue",sourcesContent:['.club-intro{padding-top:0.2rem;padding-bottom:0.2rem;background:url("http://placehold.it/50x50") no-repeat left center;background-size:0.6666666666666666rem;text-indent:1rem}\n'],sourceRoot:"webpack://"}])},20:function(t,i,e){var a=e(19);"string"==typeof a&&(a=[[t.id,a,""]]);e(3)(a,{});a.locals&&(t.exports=a.locals)},22:function(t,i){t.exports=' <div class="club-intro ui-arrowlink ui-font-14"> 石溪羽毛球俱乐部 </div> '},76:function(t,i,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0});var o=e(9),s=a(o),n=e(15),d=a(n);i["default"]={data:function(){return{}},computed:{},ready:function(){},attached:function(){},methods:{},components:{uiHead:s["default"],clubIntro:d["default"]}}},126:function(t,i,e){i=t.exports=e(2)(),i.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"activityDetail.vue",sourceRoot:"webpack://"}])},133:function(t,i,e){var a=e(126);"string"==typeof a&&(a=[[t.id,a,""]]);e(3)(a,{});a.locals&&(t.exports=a.locals)},190:function(t,i){t.exports=' <ui-head title=活动详情></ui-head> <div class="ui-common-box ui-common-pd-t"> <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p ui-bg-white"> <p class="ui-text-indent ui-txt-highlight ui-font-14"> 【羽毛球】9月3号尤雨溪宣布与阿里巴巴weex团队合作，非常鸡冻！ </p> <div class=ui-flex-between> <div> <span class=ui-tag-sm>AA</span> AA活动 </div> <div> 报名情况 <em>16/18</em> </div> </div> <div class="ui-common-mg-tb ui-common-height ui-flex-center ui-border-tb"> <div class="ui-flex-1 ui-text-center ui-border-r"> <span class="iconfont icon-zhifushijian ui-txt-highlight"></span> 09月03日 19:00 - 21:00 </div> <div class="ui-flex-1 ui-text-center"> <span class="iconfont icon-renminbi ui-txt-highlight"></span> 20元/人 </div> </div> <club-intro></club-intro> </div> <div class="ui-common-mg-b ui-common-pd-t ui-whitespace-p ui-bg-white"> <div class="ui-flex ui-border-b ui-common-pd-tb"> <div class="ui-flex-1 ui-border-r"> <div class=ui-txt-muted>场地</div> <div class=ui-font-14> 石溪羽毛球馆1、3、5 </div> </div> <div class="ui-width-80 ui-text-center"> <span class="iconfont icon-xiangqingditu ui-display-b ui-txt-highlight"></span> <em>导航</em> </div> </div> <div class="ui-flex ui-border-b ui-common-pd-tb"> <div class="ui-flex-1 ui-border-r"> <div class=ui-txt-muted>组织者</div> <div class=ui-font-14> 汤教练 13800138000 </div> </div> <div class="ui-width-80 ui-text-center"> <a href=tel:13800138000> <span class="iconfont icon-dingdanlianxidianhua ui-display-b ui-txt-highlight"></span> <em>拨打</em> </a> </div> </div> <div class=ui-common-pd-tb> <div class=ui-txt-muted>已报名会员</div> <div class="ui-common-pd-tb ui-arrowlink"> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> <div class=ui-avatar-s> <span style=background-image:url(http://placehold.it/80x80)></span> </div> </div> </div> </div> <div class="ui-common-mg-b ui-whitespace-p ui-bg-white"> <div class="activity-intro ui-common-pd-tb"> <div class="ui-info-head ui-font-14"> 活动介绍 </div> <p class="ui-common-pd-tb ui-text-indent"> 9月7号（周三）晚上七点到九点石溪羽毛球活动，现在接受报名，已预订两个场，预计12人封顶，请自备球拍。 </p> </div> </div> <div class="ui-bottom-btn ui-btn-box"> 活动进行中 </div> </div> '},203:function(t,i,e){var a,o;e(133),a=e(76),o=e(190),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}});
//# sourceMappingURL=4.4e31a248cedf8127425b.js.map