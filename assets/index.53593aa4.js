var de=Object.defineProperty,fe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var U=(e,t,u)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[t]=u,z=(e,t)=>{for(var u in t||(t={}))he.call(t,u)&&U(e,u,t[u]);if(L)for(var u of L(t))pe.call(t,u)&&U(e,u,t[u]);return e},G=(e,t)=>fe(e,me(t));import{r as Ve}from"./index.da0cbce8.js";import{_ as Ee}from"./Footer.c748d00b.js";const X=Vue.defineComponent({props:{data:{type:Array,default:()=>[]}},setup(e){const t=e,u=Vue.ref(null);return Vue.watch(()=>t.data,o=>{new chartXkcd.Bar(u.value,{data:{labels:t.data.map(n=>n.time),datasets:[{data:t.data.map(n=>n.count)}]},options:{backgroundColor:"#212121",strokeColor:"#fff",unxkcdify:!1}})}),(o,n)=>(Vue.openBlock(),Vue.createElementBlock("svg",{class:"bar-chart",ref_key:"bar",ref:u},null,512))}}),Y=Vue.defineComponent({props:{data:{type:Array,default:()=>[]}},setup(e){const t=e,u=Vue.ref(null);return Vue.watch(()=>t.data,o=>{new chartXkcd.Pie(u.value,{data:{labels:t.data.map(n=>n.time),datasets:[{data:t.data.map(n=>n.count)}]},options:{backgroundColor:"#212121",strokeColor:"#fff"}})}),(o,n)=>(Vue.openBlock(),Vue.createElementBlock("svg",{class:"bar-chart",ref_key:"bar",ref:u},null,512))}}),Fe={},S=()=>{},_e=()=>!1,ke=(e,t)=>{const u=e.indexOf(t);u>-1&&e.splice(u,1)},T=Array.isArray,ye=e=>j(e)==="[object Map]",Ce=e=>j(e)==="[object Set]",g=e=>typeof e=="function",J=e=>e!==null&&typeof e=="object",ve=e=>J(e)&&g(e.then)&&g(e.catch),ge=Object.prototype.toString,j=e=>ge.call(e),we=e=>j(e)==="[object Object]",K=(e,t)=>!Object.is(e,t);let Ne;function De(e,t=Ne){t&&t.active&&t.effects.push(e)}const Be=e=>(e.w&F)>0,xe=e=>(e.n&F)>0,be=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=F},Ae=e=>{const{deps:t}=e;if(t.length){let u=0;for(let o=0;o<t.length;o++){const n=t[o];Be(n)&&!xe(n)?n.delete(e):t[u++]=n,n.w&=~F,n.n&=~F}t.length=u}};let R=0,F=1;const Z=30;let w;class Se{constructor(t,u=null,o){this.fn=t,this.scheduler=u,this.active=!0,this.deps=[],this.parent=void 0,De(this,o)}run(){if(!this.active)return this.fn();let t=w,u=H;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=w,w=this,H=!0,F=1<<++R,R<=Z?be(this):Q(this),this.fn()}finally{R<=Z&&Ae(this),F=1<<--R,w=this.parent,H=u,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w===this?this.deferStop=!0:this.active&&(Q(this),this.onStop&&this.onStop(),this.active=!1)}}function Q(e){const{deps:t}=e;if(t.length){for(let u=0;u<t.length;u++)t[u].delete(e);t.length=0}}let H=!0;function P(e){return Te(e)?P(e.__v_raw):!!(e&&e.__v_isReactive)}function Te(e){return!!(e&&e.__v_isReadonly)}function Re(e){return!!(e&&e.__v_isShallow)}function I(e){return!!(e&&e.__v_isRef===!0)}function k(e,t,u,o){let n;try{n=o?e(...o):e()}catch(r){ee(r,t,u)}return n}function M(e,t,u,o){if(g(e)){const r=k(e,t,u,o);return r&&ve(r)&&r.catch(i=>{ee(i,t,u)}),r}const n=[];for(let r=0;r<e.length;r++)n.push(M(e[r],t,u,o));return n}function ee(e,t,u,o=!0){const n=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=u;for(;r;){const c=r.ec;if(c){for(let a=0;a<c.length;a++)if(c[a](e,i,l)===!1)return}r=r.parent}const s=t.appContext.config.errorHandler;if(s){k(s,null,10,[e,i,l]);return}}Pe(e,u,n,o)}function Pe(e,t,u,o=!0){console.error(e)}let O=!1,$=!1;const N=[];let D=0;const B=[];let x=null,y=0;const b=[];let E=null,C=0;const Me=Promise.resolve();function We(){!O&&!$&&($=!0,Me.then(ne))}function te(e,t,u,o){T(e)?u.push(...e):(!t||!t.includes(e,e.allowRecurse?o+1:o))&&u.push(e),We()}function je(e){te(e,x,B,y)}function He(e){te(e,E,b,C)}function ue(e,t=null){if(B.length){for(x=[...new Set(B)],B.length=0,y=0;y<x.length;y++)x[y]();x=null,y=0,ue(e,t)}}function Ie(e){if(b.length){const t=[...new Set(b)];if(b.length=0,E){E.push(...t);return}for(E=t,E.sort((u,o)=>W(u)-W(o)),C=0;C<E.length;C++)E[C]();E=null,C=0}}const W=e=>e.id==null?1/0:e.id;function ne(e){$=!1,O=!0,ue(e),N.sort((u,o)=>W(u)-W(o));const t=S;try{for(D=0;D<N.length;D++){const u=N[D];u&&u.active!==!1&&k(u,null,14)}}finally{D=0,N.length=0,Ie(),O=!1,(N.length||B.length||b.length)&&ne(e)}}function Oe(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):He(e)}const oe={};function $e(e,t,u){return qe(e,t,u)}function qe(e,t,{immediate:u,deep:o,flush:n,onTrack:r,onTrigger:i}=Fe){const l=Ue;let s,c=!1,a=!1;if(I(e)?(s=()=>e.value,c=Re(e)):P(e)?(s=()=>e,o=!0):T(e)?(a=!0,c=e.some(P),s=()=>e.map(m=>{if(I(m))return m.value;if(P(m))return v(m);if(g(m))return k(m,l,2)})):g(e)?t?s=()=>k(e,l,2):s=()=>{if(!(l&&l.isUnmounted))return h&&h(),M(e,l,3,[d])}:s=S,t&&o){const m=s;s=()=>v(m())}let h,d=m=>{h=p.onStop=()=>{k(m,l,4)}};if(ze)return d=S,t?u&&M(t,l,3,[s(),a?[]:void 0,d]):s(),S;let f=a?[]:oe;const V=()=>{if(!!p.active)if(t){const m=p.run();(o||c||(a?m.some((ie,ae)=>K(ie,f[ae])):K(m,f)))&&(h&&h(),M(t,l,3,[m,f===oe?void 0:f,d]),f=m)}else p.run()};V.allowRecurse=!!t;let _;n==="sync"?_=V:n==="post"?_=()=>re(V,l&&l.suspense):_=()=>{!l||l.isMounted?je(V):V()};const p=new Se(s,_);return t?u?V():f=p.run():n==="post"?re(p.run.bind(p),l&&l.suspense):p.run(),()=>{p.stop(),l&&l.scope&&ke(l.scope.effects,p)}}function v(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),I(e))v(e.value,t);else if(T(e))for(let u=0;u<e.length;u++)v(e[u],t);else if(Ce(e)||ye(e))e.forEach(u=>{v(u,t)});else if(we(e))for(const u in e)v(e[u],t);return e}function Le(){return{app:null,config:{isNativeTag:_e,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const re=Oe;Le();let Ue=null,ze=!1;function se(e){return e.reduce((t,u)=>t+u.count,0)}function q(e,t,u=2){return+(e/t*100).toFixed(u)}function A(e=[]){return e[Math.floor(Math.random()*e.length)]}function Ge(e=0){const t=[-21,0,48,63,100,130,150];let u=Number.MAX_VALUE,o=0;for(let n=0;n<t.length;n++){const r=t[n],i=Math.abs(e-r);i<u&&(u=i,o=n)}return t[o]}const Xe={class:"table-box"},Ye={class:"container table"},Je=Vue.createElementVNode("th",{class:"l"},"\u65F6\u95F4\u7C7B\u578B",-1),Ke={class:"l"},Ze=Vue.createElementVNode("p",{class:"tips"},"* \u9AD8\u4EAE\u5217\u4E3A\u8BE5\u9879\u76EE\u6700\u63A5\u8FD1\u7684\u6307\u6807",-1),Qe=Vue.defineComponent({props:{index996:{type:Number}},setup(e){const t=e,u=[{label:"\u65E5\u5747\u516C\u53F8\u6253\u5361\u65F6\u957F",key:"value",unit:"h"},{label:"\u65E5\u5747\u6709\u6548\u5DE5\u4F5C\u65F6\u95F4",key:"codeTime",unit:"h"},{label:"\u6BCF\u5468\u5B9E\u9645\u5DE5\u65F6",key:"weekTime",unit:"h"},{label:"\u9884\u8BA1\u6BCF\u5468\u52A0\u73ED\u65F6\u957F",key:"overtime",unit:"h"},{label:"\u52A0\u73ED\u65F6\u95F4\u5360\u6BD4",key:"overtimeRate",unit:"%"},{label:"996\u6307\u6570",key:"index996",unit:""}],o=[{type:"955",value:8,codeTime:6,weekTime:30,overtime:-7.5,overtimeRate:-16,index996:-21},{type:"965",value:9,codeTime:7.5,weekTime:37.5,overtime:0,overtimeRate:0,index996:0},{type:"966",value:9,codeTime:7.5,weekTime:45,overtime:7.5,overtimeRate:16,index996:48},{type:"995",value:12,codeTime:9.5,weekTime:47.5,overtime:10,overtimeRate:21,index996:63},{type:"996",value:12,codeTime:9.5,weekTime:57,overtime:19.5,overtimeRate:34,index996:100},{type:"997",value:12,codeTime:9.5,weekTime:66.5,overtime:29,overtimeRate:50,index996:130},{type:"9126",value:15,codeTime:12,weekTime:75,overtime:37.5,overtimeRate:100,index996:150}],n=Vue.ref(0);$e(()=>t.index996,i=>{n.value=Ge(i)});const r=i=>n.value===i?"active":"";return(i,l)=>(Vue.openBlock(),Vue.createElementBlock("div",Xe,[Vue.createElementVNode("table",Ye,[Vue.createElementVNode("thead",null,[Vue.createElementVNode("tr",null,[Je,(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o,s=>Vue.createElementVNode("th",{class:Vue.normalizeClass(r(s.index996))},Vue.toDisplayString(s.type),3)),64))])]),Vue.createElementVNode("tbody",null,[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u,s=>Vue.createElementVNode("tr",null,[Vue.createElementVNode("td",Ke,Vue.toDisplayString(s.label),1),(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(o,c=>Vue.createElementVNode("td",{class:Vue.normalizeClass(r(c.index996))},Vue.toDisplayString(c[s.key])+Vue.toDisplayString(s.unit),3)),64))])),64))])]),Ze]))}});function et(e){const{openingTime:t,closingTime:u}=tt(e),{workHourPl:o}=ut(e,t);return{openingTime:t,closingTime:u,workHourPl:o}}function tt(e){const t=e.reduce((c,a)=>c+a.count**2,0)/e.length,u=Math.sqrt(t),n=e.map((c,a)=>{var d,f;const h=c.count/u;return G(z({},c),{score:h,prevScore:(c.count-(((d=e[a-1])==null?void 0:d.count)||c.count))/u,nextScore:((((f=e[a+1])==null?void 0:f.count)||c.count)-c.count)/u})}).filter(c=>c.score>=.5),r=n.filter(c=>+c.time>=8&&+c.time<=12),i=n.filter(c=>+c.time>=17&&+c.time<=23),l=r.sort((c,a)=>Number(c.time)-Number(a.time))[0],s=i.sort((c,a)=>Number(a.time)-Number(c.time))[0];return Math.abs(l==null?void 0:l.prevScore),(s==null?void 0:s.score)+(s==null?void 0:s.nextScore)<.25||(s==null?void 0:s.score)+(s==null?void 0:s.nextScore)>.5,{openingTime:l,closingTime:s}}function ut(e=[],t){const u=e.filter(d=>+d.time>=+(t==null?void 0:t.time)&&+d.time<=+(t==null?void 0:t.time)+9),o=e.filter(d=>!u.includes(d)),n=u.reduce((d,f)=>d+f.count,0),r=o.reduce((d,f)=>d+f.count,0),i=e.sort((d,f)=>f.count-d.count),l=i.slice(0,9),s=i.slice(9,i.length+1),c=l.reduce((d,f)=>d+f.count,0),a=s.reduce((d,f)=>d+f.count,0);return{workHourPl:[{time:"\u5DE5\u4F5C",count:n,timeCount:l.length},{time:"\u52A0\u73ED",count:r,timeCount:s.length}],workingTimeCount:n,workingElseTimeCount:r,top9TimeCount:c,top9ElseTimeCount:a}}function nt(e){const t=e.slice(0,5),u=e[5],o=e[6],n=se(e),r={workday:se(t),saturday:u.count,sunday:o.count},i={workday:q(r.workday,n),saturday:q(r.saturday,n),sunday:q(r.sunday,n)},l=[{time:"\u5DE5\u4F5C\u65E5",count:r.workday},{time:"\u5468\u672B",count:r.saturday+r.sunday}],s=ot(i),a=[5,6,6,7,7][s-1];return{totalCount:n,commitCount:r,commitRatio:i,workDayType:s,workDayTypeValue:a,workWeekPl:l}}function ot(e){let t=1;return e.workday>=90?t=1:e.workday>=85&&e.workday<90?t=2:e.workday>=79&&e.workday<85?t=3:e.workday>=72&&e.workday<79?t=4:e.workday<72&&(t=5),t}function ce(e=""){let t=[];return e.split(",").forEach(u=>{const o=u.split("_");t.push({time:o[1],count:Number(o[0])})}),t}function rt(e){return[{name:"\u5468\u4E00",key:"1"},{name:"\u5468\u4E8C",key:"2"},{name:"\u5468\u4E09",key:"3"},{name:"\u5468\u56DB",key:"4"},{name:"\u5468\u4E94",key:"5"},{name:"\u5468\u516D",key:"6"},{name:"\u5468\u65E5",key:"7"}].map(u=>{const o=e.find(n=>n.time===u.key);return{time:u.name,count:(o==null?void 0:o.count)||0}})}function st(){const e=VueRouter.useRouter(),{query:t}=e.currentRoute.value;(!t.time||!t.hour||!t.week)&&e.push({name:"index",query:{error:"url_query_error"}})}function le(){const e=VueRouter.useRouter(),{query:t}=e.currentRoute.value,u=ce(t.hour),o=rt(ce(t.week)),n=t.time.split("_"),r=`${n[0]} \u223C ${n[1]}`,i=u.reduce((l,s)=>l+s.count,0);return{hourData:u,weekData:o,timeRange:n,timeStr:r,totalCount:i}}function ct(){const{hourData:e,weekData:t}=le(),{openingTime:u,closingTime:o,workHourPl:n}=et(e),{workDayTypeValue:r,workWeekPl:i}=nt(t),{index996:l,index996Str:s,overTimeRadio:c}=lt({workHourPl:n,workWeekPl:i}),a=it({workHourPl:n,workWeekPl:i,index996:l,overTimeRadio:c}),h=Number(u==null?void 0:u.time),d=Number(o==null?void 0:o.time)%12;return{workingType:`${h}${d}${r}`,workHourPl:n,workWeekPl:i,index996:l,index996Str:s,MSG_TYPE:a}}function lt({workHourPl:e,workWeekPl:t}){const u=e[0].count,o=e[1].count,n=t[0].count,r=t[1].count,i=(o+u*r/(n+r)).toFixed(0),l=u+o,s=Math.ceil(i/l*100),c=s*3;let a="";return c<=10?a=A(["\u4EE4\u4EBA\u7FA1\u6155\u7684\u5DE5\u4F5C","\u606D\u559C\uFF0C\u4F60\u4EEC\u6CA1\u6709\u798F\u62A5"]):c>10&&c<=50?a=A(["\u4F60\u8FD8\u6709\u5269\u4F59\u4EF7\u503C"]):c>50&&c<=90?a=A(["\u4F60\u80CC\u53DB\u4E86\u5DE5\u4EBA\u9636\u7EA7\uFF01","\u52A0\u6CB9\uFF0C\u8001\u677F\u7684\u6CD5\u62C9\u5229\u9760\u4F60\u4E86"]):c>90&&c<=110?a=A(["\u597D\u5144\u5F1F\uFF0C\u4E0B\u8F88\u5B50\u522B996\u4E86","\u4F60\u7684\u798F\u62A5\u5DF2\u7ECF\u4FEE\u6EE1\u4E86"]):c>110&&(a=A(["\u4F60\u4EEC\u60F3\u5FC5\u5C31\u662F\u5377\u738B\u4E2D\u7684\u5377\u738B\u5427","\u5176\u5B9E\u4F60\u8FD8\u6709\u5176\u4ED6\u9009\u62E9"])),{index996:c,index996Str:a,overTimeRadio:s}}function it(e){const{workHourPl:t,workWeekPl:u,overTimeRadio:o}=e;let n="";const r=t[0].count+t[1].count,i=u[0].count+u[1].count;return r!==i&&(n="commit_is_fake"),(r<100||i<100)&&(n="commit_is_low"),o>65&&(n="overTimeRadio_is_too_high"),n}const at={class:"result"},dt=Vue.createElementVNode("h1",null,"#CODE996 Result",-1),ft={class:"main wrapper"},mt={class:"top-result container"},ht=Vue.createElementVNode("h1",null,"\u8BE5\u9879\u76EE\u7684996\u6307\u6570\u662F\uFF1A",-1),pt={class:"result-line"},Vt={class:"score-box"},Et={class:"score-number"},Ft={class:"subtitle"},_t={class:"content"},kt=Vue.createTextVNode(" \u63A8\u6D4B\u4F60\u4EEC\u7684\u5DE5\u4F5C\u65F6\u95F4\u7C7B\u578B\u4E3A\uFF1A "),yt=Vue.createTextVNode(" \u603B commit \u6570\uFF1A "),Ct=Vue.createTextVNode(" \u5206\u6790\u65F6\u95F4\u6BB5\uFF1A "),vt=Vue.createElementVNode("div",{className:"exp"},[Vue.createElementVNode("p",null,[Vue.createTextVNode(" 996\u6307\u6570\uFF1A\u4E3A0\u5219\u4E0D\u52A0\u73ED\uFF0C\u503C\u8D8A\u5927\u4EE3\u8868\u52A0\u73ED\u8D8A\u4E25\u91CD\uFF0C996\u5DE5\u4F5C\u5236\u5BF9\u5E94\u7684\u503C\u4E3A100\u3002 "),Vue.createElementVNode("a",null,"\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u65B9\u8868\u683C")])],-1),gt={class:"content container"},wt={class:"section"},Nt={class:"item"},Dt=Vue.createElementVNode("h2",null,"\u6309\u5C0F\u65F6commit\u5206\u5E03",-1),Bt={class:"item"},xt=Vue.createElementVNode("h2",null,"\u52A0\u73ED/\u5DE5\u4F5Ccommit\u5360\u6BD4\uFF08\u6309\u5C0F\u65F6\uFF09",-1),bt={class:"section"},At={class:"item"},St=Vue.createElementVNode("h2",null,"\u6309\u5929commit\u5206\u5E03",-1),Tt={class:"item"},Rt=Vue.createElementVNode("h2",null,"\u52A0\u73ED/\u5DE5\u4F5Ccommit\u5360\u6BD4\uFF08\u6309\u5929\uFF09",-1),Pt=Vue.createElementVNode("h2",null,"\u5DE5\u4F5C\u65F6\u95F4\u53C2\u7167\u8868\uFF1A",-1),Mt=Vue.createElementVNode("div",{class:"container"},[Vue.createElementVNode("h2",{class:"title"},"\u6CE8\u610F\u4E8B\u9879\uFF1A"),Vue.createElementVNode("p",null,"\u5206\u6790\u7ED3\u679C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u4EE3\u8868\u4EFB\u4F55\u5EFA\u8BAE"),Vue.createElementVNode("p",null,"\u539F\u59CB\u5206\u6790\u6570\u636E\u901A\u8FC7 URL \u4F20\u8F93\uFF0C\u8BF7\u614E\u91CD\u5206\u4EAB URL \u7ED9\u7B2C\u4E09\u65B9"),Vue.createElementVNode("p",null,"\u8BF7\u52FF\u7528\u4E8E\u6B63\u5F0F\u573A\u5408")],-1),It=Vue.defineComponent({setup(e){const t=Vue.ref([]),u=Vue.ref([]),o=Vue.ref([]),n=Vue.ref([]),r=Vue.ref({});function i(){const{hourData:s,weekData:c,timeStr:a,totalCount:h}=le(),{workingType:d,index996:f,index996Str:V,workHourPl:_,workWeekPl:p}=ct();t.value=[...s],u.value=[...c],o.value=[..._],n.value=[...p],r.value={workingType:d,totalCount:h,timeStr:a,index996:f,index996Str:V}}const l=()=>{Ve.push({name:"index"})};return st(),Vue.onMounted(()=>{i()}),(s,c)=>(Vue.openBlock(),Vue.createElementBlock("div",at,[Vue.createElementVNode("div",{class:"header"},[Vue.createElementVNode("div",{class:"wrapper"},[Vue.createElementVNode("span",{class:"button back",onClick:l},"\u8FD4\u56DE"),dt])]),Vue.createElementVNode("div",ft,[Vue.createElementVNode("div",mt,[ht,Vue.createElementVNode("div",pt,[Vue.createElementVNode("div",Vt,[Vue.createElementVNode("div",Et,Vue.toDisplayString(r.value.index996),1),Vue.createElementVNode("div",Ft,Vue.toDisplayString(r.value.index996Str),1)]),Vue.createElementVNode("div",_t,[Vue.createElementVNode("p",null,[kt,Vue.createElementVNode("span",null,Vue.toDisplayString(r.value.workingType),1)]),Vue.createElementVNode("p",null,[yt,Vue.createElementVNode("span",null,Vue.toDisplayString(r.value.totalCount),1)]),Vue.createElementVNode("p",null,[Ct,Vue.createElementVNode("span",null,Vue.toDisplayString(r.value.timeStr),1)]),vt])])]),Vue.createElementVNode("div",gt,[Vue.createElementVNode("div",wt,[Vue.createElementVNode("div",Nt,[Dt,Vue.createVNode(X,{data:t.value},null,8,["data"])]),Vue.createElementVNode("div",Bt,[xt,Vue.createVNode(Y,{data:o.value},null,8,["data"])])]),Vue.createElementVNode("div",bt,[Vue.createElementVNode("div",At,[St,Vue.createVNode(X,{data:u.value},null,8,["data"])]),Vue.createElementVNode("div",Tt,[Rt,Vue.createVNode(Y,{data:n.value},null,8,["data"])])])]),Pt,Vue.createVNode(Qe,{index996:r.value.index996},null,8,["index996"]),Mt]),Vue.createVNode(Ee)]))}});export{It as default};
