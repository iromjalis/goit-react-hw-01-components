(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"Followers":5603,"Views":4827,"Likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),r=(a(14),a(15),a(16),a.p+"static/media/defaultPhoto.9c8e0ce3.jpg"),d=a(9),l=a(2),o=a.n(l),b=a(0),u=function(e){var t=Object(d.a)(e.stat,2),a=t[0],c=t[1];return Object(b.jsxs)("li",{className:"StatItem",children:[Object(b.jsx)("span",{className:"label",children:a}),Object(b.jsxs)("span",{className:"quantity",children:[c," "]})]})};u.prototypes={key:o.a.string.isRequired,value:o.a.string.isRequired};var j=u,p=function(e){var t=e.name,a=e.tag,c=e.location,n=e.avatar,s=e.stats;return Object(b.jsx)("div",{className:"ProfileWrapper",children:Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("img",{src:n,className:"avatar",width:"150",alt:t}),Object(b.jsx)("b",{children:Object(b.jsxs)("p",{className:"name",children:[t," "]})}),Object(b.jsxs)("p",{className:"tag",children:["@",a]}),Object(b.jsx)("p",{className:"location",children:c})]}),Object(b.jsx)("ul",{className:"Stats",children:Object.entries(s).map((function(e,t){return Object(b.jsx)(j,{stat:e},t)}))})]})})};p.defaultProps={avatar:r};var m=p,f=(a(20),function(e){var t=e.title,a=e.children;return Object(b.jsxs)("div",{className:"ContainerWrapper",children:[t&&Object(b.jsxs)("h1",{children:[t," "]}),Object(b.jsx)("div",{children:a})]})}),h=(a(21),function(e){var t=e.backgroundColor,a=e.stat,c=a.id,n=a.label,s=a.percentage;return Object(b.jsxs)("li",{className:"stat-item",style:{backgroundColor:"".concat(t)},children:[Object(b.jsx)("span",{className:"label",children:n}),Object(b.jsxs)("span",{className:"percentage",children:[s," %"]})]},c)});h.prototypes={backgroundColor:o.a.string,id:o.a.string,label:o.a.string,percentage:o.a.number},h.defaultProps={backgroundColor:""};var O=h,v=function(e){var t=e.title,a=e.stats;return Object(b.jsx)("div",{className:"StatisticsWrapper",children:Object(b.jsxs)("section",{className:"statistics",children:[t&&Object(b.jsx)("h2",{className:"title",children:t}),Object(b.jsx)("ul",{className:"stat-list",children:a.map((function(e,t){var a=function(){var e=Math.round(255*Math.random()),t=Math.round(255*Math.random()),a=Math.round(255*Math.random());return"rgb(".concat(e,", ").concat(t,", ").concat(a,")")}();return Object(b.jsx)(O,{stat:e,backgroundColor:a},e.id)}))})]})})};v.defaultProps={title:""};var y=v,x=(a(22),function(e){var t=e.items;return Object(b.jsx)("div",{className:"TransactionHistoryWrapper",children:Object(b.jsxs)("table",{className:"transaction-history",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Amount"}),Object(b.jsx)("th",{children:"Currency"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.type,c=e.amount,n=e.currency;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"type",children:a}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{children:n})]},t)}))})]})})});x.defaultProps={};var g=x,w=a(3),N=a(6),P=a(7),k=(a(23),function(e){var t=e.name,a=e.avatar,c=e.isOnline;return Object(b.jsxs)("li",{className:"FriendsItem-item",children:[Object(b.jsxs)("span",{className:"status",children:[c?"\ud83d\udfe2":"\ud83d\udd34"," "]}),Object(b.jsx)("img",{className:"avatar",src:a,alt:t,width:"48"}),Object(b.jsxs)("p",{className:"name",children:[t," "]})]})});k.defaultProps={avatar:r};var C=k,M=(a(24),function(e){var t=e.friends;return Object(b.jsx)("ul",{className:"friend-list",children:t.map((function(e){var t=e.avatar,a=e.name,c=e.isOnline,n=e.id;return Object(b.jsx)(C,{avatar:t,name:a,isOnline:c},n)}))})}),S=a(8);var U=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(f,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438:",children:Object(b.jsx)(m,{name:w.name,tag:w.tag,location:w.location,avatar:w.avatar,stats:w.stats})}),Object(b.jsx)(f,{title:"\u0421\u0435\u043a\u0446\u0438\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438:",children:Object(b.jsx)(y,{title:"Upload stats",stats:N})}),Object(b.jsx)(f,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439:",children:Object(b.jsx)(M,{friends:P})}),Object(b.jsx)(f,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439:",children:Object(b.jsx)(g,{items:S})})]})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.5c6af136.chunk.js.map