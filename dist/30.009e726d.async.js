webpackJsonp([30],{689:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),u=a(r),o=n(118),s=a(o),c=n(286),l=a(c);n(287);var d=n(280);n(176);t.default={namespace:"job",state:{jobs:[],job:{},lossAmount:0},effects:{run:s.default.mark(function e(t,n){var a,r,u,o,c,i,p=t.payload,f=n.call,y=n.put,h=n.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({type:"changeLoading",payload:!0});case 2:return e.next=4,y({type:"setRunConfig",payload:p});case 4:return e.next=6,h(function(e){return e.model.model.id});case 6:return a=e.sent,e.next=9,h(function(e){return e.job});case 9:return r=e.sent,u=r.epochs,o=r.batchSize,e.next=14,f(d.createJob,{modelId:a,epochs:u,batchSize:o});case 14:if(c=e.sent,setTimeout(function(){return y({type:"train"})},5e3),200!==c.code||!c.result||!c.result.id){e.next=25;break}return e.next=19,y({type:"fetch"});case 19:return e.next=21,f(d.startJob,c.result.id);case 21:i=e.sent,200===i.code?l.default.success({message:"Start Running!"}):l.default.error({message:"Run Failed!"}),e.next=26;break;case 25:l.default.error({message:"Create Failed!"});case 26:return e.next=28,y({type:"changeLoading",payload:!1});case 28:case"end":return e.stop()}},e,this)}),train:s.default.mark(function e(t,n){n.call,n.put,n.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("hello");case 1:case"end":return e.stop()}},e,this)}),fetch:s.default.mark(function e(t,n){var a,r,u=t.payload,o=n.call,c=n.put,l=n.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:"changeLoading",payload:!0});case 2:return e.next=4,l(function(e){return e.model.model.id});case 4:return a=e.sent,e.next=7,o(d.queryJobByModel,u||a);case 7:return r=e.sent,e.next=10,c({type:"queryJobs",payload:Array.isArray(r.result)?r.result:[]});case 10:return e.next=12,c({type:"changeLoading",payload:!1});case 12:case"end":return e.stop()}},e,this)}),fetchJob:s.default.mark(function e(t,n){var a,r=t.payload,u=n.call,o=n.put;n.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"changeLoading",payload:!0});case 2:return e.next=4,u(d.queryJob,r);case 4:return a=e.sent,e.next=7,o({type:"queryJob",payload:a.result});case 7:return e.next=9,o({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{queryJobs:function(e,t){var n=t.payload;return(0,u.default)({},e,{jobs:n,job:n.length?n[n.length-1]:void 0})},queryLossAmount:function(e,t){var n=t.payload;return(0,u.default)({},e,{lossAmount:n})},queryJob:function(e,t){var n=t.payload;return(0,u.default)({},e,{job:n})},setRunConfig:function(e,t){var n=t.payload;return(0,u.default)({},e,{epochs:n.epochs,batchSize:n.batchSize})}}},e.exports=t.default}});