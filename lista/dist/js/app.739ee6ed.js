(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,m=[];d<o.length;d++)s=o[d],a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("e8b6"),a=n.n(i);a.a},1541:function(t,e,n){},"1cc4":function(t,e,n){},"1ead":function(t,e,n){"use strict";var i=n("8746"),a=n.n(i);a.a},"2ea3":function(t,e,n){"use strict";var i=n("fd99"),a=n.n(i);a.a},"3dfd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r={name:"app"},s=r,o=(n("034f"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=c.exports},"402c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=n("bb71");n("da64");i["default"].use(a["a"],{iconfont:"md"})},"41cb":function(t,e,n){"use strict";var i=n("59ca"),a=n.n(i),r=(n("ea7b"),n("2b0e")),s=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{ref:"Header",on:{"add-list-dialog":t.addListDialog,"items-list":t.renderItems,"cur-list":t.setCurList}}),t.currentList?n("div",[n("div",{staticClass:"homeHeader"},[n("h1",{staticClass:"currentList",attrs:{currentList:t.currentList}},[t._v(t._s(t.currentList.Name))]),n("button",{staticClass:"showHideSharedWith",on:{click:function(e){t.isHidden=!t.isHidden}}},[t._v("Shared with:  \n        "),t.isHidden?n("div",[n("font-awesome-icon",{attrs:{icon:"chevron-down"}})],1):n("div",[n("font-awesome-icon",{attrs:{icon:"chevron-up"}})],1)]),t.isHidden?t._e():n("div",t._l(t.listSharedTo,function(e){return n("p",{key:e,staticClass:"sharedTo"},[t._v(t._s(e))])}),0)]),n("AddItem",{on:{"add-item":t.addItem}}),n("Items",{attrs:{items:t.items},on:{"delete-item":t.deleteItem}})],1):n("div",{staticClass:"noListsDiv"},[t._v('Start by pressing the "+" button!')])],1)},c=[],u=n("f499"),l=n.n(u),d=(n("ac6a"),n("75fc")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.items,function(e){return n("div",{key:e.Item_id},[t.itemCompleted(e)?t._e():n("Item",{attrs:{item:e},on:{"delete-item":function(n){t.$emit("delete-item",e.Item_id)}}})],1)}),n("br"),t._l(t.items,function(e){return n("div",{key:e.Item_id+"completed"},[t.itemCompleted(e)?n("Item",{attrs:{item:e},on:{"delete-item":function(n){t.$emit("delete-item",e.Item_id)}}}):t._e()],1)}),n("br")],2)},h=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item",class:{"is-complete":t.item.Completed}},[n("button",{staticClass:"checkComplete",attrs:{alt:"Set the item as done"},on:{click:t.setComplete}},[t.item.Completed?n("font-awesome-icon",{attrs:{icon:"chevron-up"}}):n("font-awesome-icon",{attrs:{icon:"check"}})],1),n("div",{staticClass:"item"},[t._v(t._s(t.item.Name))]),n("button",{staticClass:"delete",on:{click:function(e){t.$emit("delete-item",t.item.Item_id)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)])},p=[],v=(n("cadf"),n("551c"),n("097d"),n("424c")),g={name:"Item",props:["item"],methods:{setComplete:function(){0===this.item.Completed?this.item.Completed=1:this.item.Completed=0,v.setItemStatus(this.item.Item_id,this.item.Completed)}}},b=g,w=(n("eee4"),n("2877")),y=Object(w["a"])(b,f,p,!1,null,"43ad96e2",null),_=y.exports,L={name:"Items",components:{Item:_},props:["items"],methods:{itemCompleted:function(t){return 1===t.Completed||0!==t.Completed&&void 0}}},k=L,I=Object(w["a"])(k,m,h,!1,null,"6c5d7808",null),x=I.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:t.checkForm}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Name,expression:"Name"}],ref:"itemInput",attrs:{autocomplete:"off",type:"text",name:"Name",placeholder:"Add something"},domProps:{value:t.Name},on:{input:function(e){e.target.composing||(t.Name=e.target.value)}}}),n("button",{staticClass:"btn fa fa-cross",attrs:{type:"submit",value:"Add"}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)])])},S=[],$={name:"AddItem",data:function(){return{Name:"",error:""}},methods:{addItem:function(t){t.preventDefault();var e={Name:this.Name};this.$emit("add-item",e),this.Name=""},checkForm:function(t){if(this.Name)return this.addItem(t),!0;this.error="",this.Name,t.preventDefault()}},mounted:function(){this.$refs.itemInput.focus()}},O=$,N=(n("8da3"),Object(w["a"])(O,C,S,!1,null,"9e940b00",null)),E=N.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("AddListDialog",{ref:"addList",on:{"agree-add":t.agree}}),n("h1",[t._v("List.A")]),n("div",{attrs:{id:"nav"}},[n("SideBar",{ref:"SideBar",staticClass:"menuBtn",on:{"items-list":t.itemsList,"cur-list":t.emitCurList}}),n("button",{staticClass:"menuBtn",on:{click:function(e){t.$emit("add-list-dialog")}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1)],1)},V=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("DeleteDialog",{ref:"delete"}),n("ShareDialog",{ref:"share",on:{"agree-share":t.shareList}}),n("Slide",{attrs:{right:""}},[t._v("\n        "+t._s(t.testStuff)+"\n        "),n("div",{staticClass:"loggedInUser"},[t._v(t._s(t.curUser.email))]),t._l(t.userLists,function(e){return n("div",{key:e.id},[n("div",{staticClass:"listElement",attrs:{href:"#"}},[n("span",{staticClass:"iconBtn shareBtn",on:{click:function(n){t.openShareDialog(e)}}},[n("font-awesome-icon",{attrs:{icon:"share"}})],1),n("span",{staticClass:"listName",on:{click:function(n){t.openList(e)}}},[t._v(t._s(e.Name))]),n("span",{staticClass:"iconBtn deleteBtn",attrs:{list:e},on:{click:function(n){t.openDeleteDialog(e)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])}),n("button",{staticClass:"signOutBtn",on:{click:t.signOut}},[n("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),t._v("  Sign out\n        ")],1)],2)],1)},T=[],B=(n("7514"),n("a481"),n("cebc")),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Menu",t._b({on:{openMenu:t.openMenu,closeMenu:t.closeMenu}},"Menu",this.$attrs,!1),[t._t("default")],2)],1)},U=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bm-menu",attrs:{id:"sideNav"}},[n("nav",{staticClass:"bm-item-list"},[t._t("default")],2),n("span",{staticClass:"bm-cross-button cross-style",class:{hidden:!t.crossIcon},on:{click:t.closeMenu}},t._l(2,function(t,e){return n("span",{key:t,staticClass:"bm-cross",style:{position:"absolute",width:"3px",height:"14px",transform:1===e?"rotate(45deg)":"rotate(-45deg)"}})}),0)]),n("div",{staticClass:"bm-burger-button",class:{hidden:!t.burgerIcon},on:{click:t.openMenu}},[n("font-awesome-icon",{attrs:{icon:"bars"}})],1)])},D=[],P={name:"menubar",data:function(){return{isSideBarOpen:!1}},props:{isOpen:{type:Boolean,required:!1},right:{type:Boolean,required:!1},width:{type:[String],required:!1,default:"300"},disableEsc:{type:Boolean,required:!1},noOverlay:{type:Boolean,required:!1},onStateChange:{type:Function,required:!1},burgerIcon:{type:Boolean,required:!1,default:!0},crossIcon:{type:Boolean,required:!1,default:!0}},methods:{openMenu:function(){this.$emit("openMenu"),this.isSideBarOpen=!0,this.noOverlay||(document.body.className+="bm-overlay"),this.right&&(document.querySelector(".bm-menu").style.left="auto",document.querySelector(".bm-menu").style.right="0px"),this.$nextTick(function(){document.getElementById("sideNav").style.width=this.width?this.width+"px":"300px"})},closeMenu:function(){this.$emit("closeMenu"),this.isSideBarOpen=!1,document.body.className=document.body.className.replace("bm-overlay",""),document.getElementById("sideNav").style.width="0px"},closeMenuOnEsc:function(t){t=t||window.event,"Escape"!==t.key&&27!==t.keyCode||(document.getElementById("sideNav").style.width="0px",document.body.style.backgroundColor="inherit",this.isSideBarOpen=!1)},documentClick:function(t){var e=document.querySelector(".bm-burger-button"),n=null;t&&t.target&&(n=t.target),e&&e!==n&&!e.contains(n)&&"bm-menu"!==t.target.className&&this.isSideBarOpen&&this.closeMenu()}},mounted:function(){this.disableEsc||document.addEventListener("keyup",this.closeMenuOnEsc)},created:function(){document.addEventListener("click",this.documentClick)},destroyed:function(){document.removeEventListener("keyup",this.closeMenuOnEsc),document.removeEventListener("click",this.documentClick)},watch:{isOpen:{deep:!0,immediate:!0,handler:function(t,e){!e&&t&&this.openMenu(),e&&!t&&this.closeMenu()}},right:{deep:!0,immediate:!0,handler:function(t,e){t&&this.$nextTick(function(){document.querySelector(".bm-burger-button").style.left="auto",document.querySelector(".bm-burger-button").style.right="36px",document.querySelector(".bm-menu").style.left="auto",document.querySelector(".bm-menu").style.right="0px"}),e&&document.querySelector(".bm-burger-button").hasAttribute("style")&&(document.querySelector(".bm-burger-button").removeAttribute("style"),document.getElementById("sideNav").style.right="auto")}}}},q=P,H=(n("7d0a"),Object(w["a"])(q,M,D,!1,null,null,null)),z=H.exports,J={name:"slide",components:{Menu:z},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},F=J,G=Object(w["a"])(F,R,U,!1,null,null,null),W=G.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-app":""}},[n("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{"max-width":t.options.width},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?t.cancel(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.agree(e):null}]},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.title))])],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}]},[t._v(t._s(t.message))]),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),n("v-btn",{attrs:{color:"primary darken-1",flat:"flat"},nativeOn:{click:function(e){return t.agree(e)}}},[t._v("Yes")]),n("v-btn",{attrs:{color:"grey",flat:"flat"},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v("Cancel")])],1)],1)],1)],1)},K=[],Y=n("795b"),Q=n.n(Y),X=n("5176"),tt=n.n(X),et={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"primary",width:310,zIndex:240}}},methods:{open:function(t,e,n){var i=this;return this.dialog=!0,this.title=t,this.message=e,this.options=tt()(this.options,n),new Q.a(function(t,e){i.resolve=t,i.reject=e})},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1},getIsDeleted:function(){return this.isDeleted}}},nt=et,it=n("6544"),at=n.n(it),rt=n("8336"),st=n("b0af"),ot=n("99d9"),ct=n("169a"),ut=n("9910"),lt=n("71d9"),dt=n("2a7f"),mt=Object(w["a"])(nt,Z,K,!1,null,null,null),ht=mt.exports;at()(mt,{VBtn:rt["a"],VCard:st["a"],VCardActions:ot["a"],VCardText:ot["b"],VDialog:ct["a"],VSpacer:ut["a"],VToolbar:lt["a"],VToolbarTitle:dt["a"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-app":""}},[n("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{"max-width":t.options.width},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?t.cancel(e):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("agree-share",t.email)}]},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.title))])],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}]},[t._v(t._s(t.message))]),n("v-flex",{staticClass:"email",attrs:{xs12:"",color:"#f44336"}},[n("v-text-field",{attrs:{autofocus:"",type:"email",label:"Email*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-alert",{staticClass:"warning",attrs:{color:"orange",value:this.inputAlert,type:"warning"}},[t._v("The address is not valid.")])],1),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),n("v-btn",{attrs:{color:"primary darken-1",flat:"flat"},nativeOn:{click:function(e){t.$emit("agree-share",t.email)}}},[t._v("Share")]),n("v-btn",{attrs:{color:"grey",flat:"flat"},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v("Cancel")])],1)],1)],1)],1)},pt=[],vt={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,email:null,inputAlert:!1,options:{color:"primary",width:320,zIndex:300}}},methods:{open:function(t,e,n){var i=this;return this.email=null,this.dialog=!0,this.title=t,this.message=e,this.options=tt()(this.options,n),new Q.a(function(t,e){i.resolve=t,i.reject=e})},alertEmail:function(){var t=this;if(this.validateEmail(this.email))return!0;this.inputAlert=!0,setTimeout(function(){t.inputAlert=!1},1e3)},alertShare:function(){var t=this;this.inputAlert=!0,setTimeout(function(){t.inputAlert=!1},1e3)},cancel:function(){this.resolve(!1),this.dialog=!1},validateEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/;return e.test(String(t).toLowerCase())}}},gt=vt,bt=(n("6c84"),n("0798")),wt=n("0e8f"),yt=n("2677"),_t=Object(w["a"])(gt,ft,pt,!1,null,"43fee958",null),Lt=_t.exports;at()(_t,{VAlert:bt["a"],VBtn:rt["a"],VCard:st["a"],VCardActions:ot["a"],VCardText:ot["b"],VDialog:ct["a"],VFlex:wt["a"],VSpacer:ut["a"],VTextField:yt["a"],VToolbar:lt["a"],VToolbarTitle:dt["a"]});var kt=n("2f62"),It=n("424c"),xt={data:function(){return{items:[],userLists:[],listIdToShare:null,curUser:a.a.auth().currentUser,currentList:JSON.parse(localStorage.getItem("curList"))}},components:{Slide:W,DeleteDialog:ht,ShareDialog:Lt},computed:Object(B["a"])({},Object(kt["b"])(["testStuff"])),methods:{openDeleteDialog:function(t){var e=this;this.$root.$delete.open("List removal",'Are you sure you want to delete the list "'+t.Name+'"?',{color:"gray"}).then(function(n){n&&e.deleteList(t)})},openShareDialog:function(t){this.listIdToShare=t.List_id,this.$root.$share.open("List sharing",'Who do you want to share the list "'+t.Name+'" with?',{color:"gray"})},deleteList:function(t){var e=this;It.deleteList(t.List_id).then(function(){e.userLists.pop(t),t.List_id===JSON.parse(localStorage.getItem("curList")).List_id&&(0===e.userLists.length?(localStorage.removeItem("curList"),e.currentList=null,location.reload()):localStorage.setItem("curList",l()(e.userLists[e.userLists.length-1]))),e.getUserLists()})},openList:function(t){this.currentList=t,this.loadItems(this.currentList.List_id)},openListByName:function(t){return It.getListIdByName(t,this.curUser.uid)},signOut:function(){var t=this;a.a.auth().signOut().then(function(){t.$router.replace("login")}),localStorage.removeItem("curList")},getUserLists:function(){var t=this;It.getListsOfUser(this.curUser.uid).then(function(e){t.userLists=e.data,0!=t.userLists.length&&(null===localStorage.getItem("curList")?t.currentList=t.userLists[0]:t.currentList=JSON.parse(localStorage.getItem("curList")),t.loadItems(t.currentList.List_id))})},addList:function(t){var e=this;It.addList(this.curUser.uid,t).then(function(){It.getListsOfUser(e.curUser.uid).then(function(n){e.userLists=n.data,e.openListByName(t).then(function(t){e.currentList=e.userLists.find(function(e){return e.List_id===t.data[0]["List_id"]}),e.openList(e.currentList)})})})},addItem:function(t){var e=this;this.currentList.List_id&&It.addItem(this.currentList.List_id,t.Name).then(function(){e.loadItems(e.currentList.List_id)})},loadItems:function(t){var e=this;It.getItems(t).then(function(t){e.items.push(t.data)}).then(function(){e.$emit("cur-list",e.currentList),e.$emit("items-list",e.items[0]),e.items=[]})},deleteItem:function(t,e,n){t&&e&&n&&It.deleteItem(t,e,n)},shareList:function(t){var e=this;this.$refs.share.alertEmail(t)&&It.checkUserExists(t).then(function(n){n=n.data[0]["COUNT(*)"],1===n?(It.shareList(t,e.listIdToShare),e.$refs.share.resolve(!0),e.$refs.share.dialog=!1):e.$refs.share.alertShare(t)})}},mounted:function(){this.getUserLists(),this.$root.$delete=this.$refs.delete,this.$root.$share=this.$refs.share}},Ct=xt,St=(n("ccf3"),Object(w["a"])(Ct,j,T,!1,null,"1f733c87",null)),$t=St.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-app":""}},[n("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{"max-width":t.options.width},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?t.cancel(e):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("agree-add",t.listName)}]},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:"",flat:""}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.title))])],1),n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}]},[t._v(t._s(t.message))]),n("v-flex",{staticClass:"listName",attrs:{xs12:"",color:"#f44336"}},[n("v-text-field",{attrs:{autofocus:"",type:"listName",label:"List name",required:""},model:{value:t.listName,callback:function(e){t.listName=e},expression:"listName"}}),n("v-alert",{staticClass:"warning",attrs:{color:"orange",value:this.inputAlert,type:"warning"}},[t._v("The name should be at least 2 characters long.")])],1),n("v-card-actions",{staticClass:"pt-0"},[n("v-spacer"),n("v-btn",{attrs:{color:"primary darken-1",flat:"flat"},nativeOn:{click:function(e){t.$emit("agree-add",t.listName)}}},[t._v("Add")]),n("v-btn",{attrs:{color:"grey",flat:"flat"},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v("Cancel")])],1)],1)],1)],1)},Nt=[],Et={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,listName:null,inputAlert:!1,curUser:a.a.auth().currentUser,options:{color:"primary",width:320,zIndex:300}}},methods:{open:function(t,e,n){var i=this;return this.listName=null,this.dialog=!0,this.title=t,this.message=e,this.options=tt()(this.options,n),new Q.a(function(t,e){i.resolve=t,i.reject=e})},cancel:function(){this.resolve(!1),this.dialog=!1}}},At=Et,Vt=(n("1ead"),Object(w["a"])(At,Ot,Nt,!1,null,"5d97d528",null)),jt=Vt.exports;at()(Vt,{VAlert:bt["a"],VBtn:rt["a"],VCard:st["a"],VCardActions:ot["a"],VCardText:ot["b"],VDialog:ct["a"],VFlex:wt["a"],VSpacer:ut["a"],VTextField:yt["a"],VToolbar:lt["a"],VToolbarTitle:dt["a"]});var Tt={name:"Header",components:{SideBar:$t,AddListDialog:jt},data:function(){return{items:[]}},methods:{itemsList:function(t){this.$emit("items-list",t)},addItem:function(t){this.$refs.SideBar.addItem(t)},deleteItem:function(t,e,n){this.$refs.SideBar.deleteItem(t,e,n)},agree:function(t){this.validateListName(t)&&(this.$refs.SideBar.addList(t),this.$refs.addList.resolve(!0),this.$refs.addList.dialog=!1)},validateListName:function(t){var e=this;if(t&&t.length>1)return!0;this.$refs.addList.inputAlert=!0,setTimeout(function(){e.$refs.addList.inputAlert=!1},1e3)},emitCurList:function(t){this.$emit("cur-list",t)}},mounted:function(){this.$root.$addList=this.$refs.addList}},Bt=Tt,Rt=(n("df06"),Object(w["a"])(Bt,A,V,!1,null,"c9b26ffe",null)),Ut=Rt.exports,Mt=n("424c"),Dt={name:"Home",components:{Items:x,AddItem:E,Header:Ut},data:function(){return{items:[],user:a.a.auth().currentUser,currentList:JSON.parse(localStorage.getItem("curList")),listSharedTo:[],isHidden:!0,listStorage:window.localStorage}},methods:{deleteItem:function(t){var e=this.items.filter(function(e){return e.Item_id===t})[0];this.items=this.items.filter(function(e){return e.Item_id!==t}),this.$refs.Header.deleteItem(e.List_id,e.Item_id,e.Name)},addItem:function(t){this.items=[].concat(Object(d["a"])(this.items),[t.Name]),this.$refs.Header.addItem(t)},addListDialog:function(){this.$root.$addList.open("Add list","",{color:"gray"})},renderItems:function(t){var e=this;this.items=[],t.forEach(function(t){e.items.push(t)})},setCurList:function(t){this.currentList=t,this.listStorage.setItem("curList",l()(t)),this.getListSharedTo()},getListSharedTo:function(){var t=this;this.listSharedTo=[],Mt.getSharedToUsers(this.currentList.List_id).then(function(e){e.data.forEach(function(e){t.listSharedTo.push(e["email"])})})}},created:function(){this.user&&Mt.addUser(this.user.uid,this.user.email)}},Pt=Dt,qt=(n("cccb"),Object(w["a"])(Pt,o,c,!1,null,null,null)),Ht=qt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h3",[t._v("Welcome to NodeNote!")]),n("div",{staticClass:"container tabs",attrs:{id:"tabs"}},[n("div",{staticClass:"tabs"},[n("a",{class:[1===t.activetab?"active":""],on:{click:function(e){t.activetab=1,t.email="",t.password=""}}},[t._v("SIGN IN")]),n("a",{class:[2===t.activetab?"active":""],on:{click:function(e){t.activetab=2,t.email="",t.password="",t.confirmPassword=""}}},[t._v("REGISTER")])])]),n("div",{staticClass:"tabcontent"},[1===t.activetab?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Sähköposti"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Salasana"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{on:{click:t.signIn}},[t._v("Sign in")])]):t._e(),2===t.activetab?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Sähköposti"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Salasana"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Varmista salasana"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),n("button",{on:{click:t.signUp}},[t._v("Register")])]):t._e(),n("button",{staticClass:"google",on:{click:t.signInGoogle}},[t._v("Google")]),n("v-alert",{staticClass:"warning",attrs:{color:"orange",value:this.emailAlert,type:"warning"}},[t._v("Check the address.")]),n("v-alert",{staticClass:"warning",attrs:{color:"orange",value:this.passwordAlert,type:"warning"}},[t._v("The password should be at least 6 characters long.")]),n("v-alert",{staticClass:"warning",attrs:{color:"green",value:this.emailVerificationAlert,type:"warning"}},[t._v("Activation email sent!")]),n("v-alert",{staticClass:"warning",attrs:{color:"orange",value:this.checkEmailVerificationAlert,type:"warning"}},[t._v("Check the activation email.")])],1)])},Jt=[],Ft=n("424c"),Gt=new a.a.auth.GoogleAuthProvider;Gt.addScope("https://www.googleapis.com/auth/contacts.readonly");var Wt={name:"login",data:function(){return{activetab:1,email:"",password:"",confirmPassword:"",emailAlert:!1,passwordAlert:!1,emailVerificationAlert:"",checkEmailVerificationAlert:""}},methods:{signIn:function(){var t=this;this.validateEmail(this.email)&&a.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){var n=e.user;t.CheckEmailVerification(n)&&t.$router.replace("home")},function(e){throw t.checkEmailVerificationAlert=!0,setTimeout(function(){t.checkEmailVerificationAlert=!1},1200),e.message})},signUp:function(){var t=this;this.validateEmail(this.email)&&this.validatePassword(this.password)&&this.password===this.confirmPassword&&a.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){var n=e.user;t.CheckEmailVerification(n)?t.$router.replace("home"):t.sendEmailVerification(n)},function(t){throw t.message})},signInGoogle:function(){var t=this;a.a.auth().signInWithRedirect(Gt).then(function(){t.$router.replace("home")},function(t){throw t.message})},sendEmailVerification:function(t){var e=this;t.sendEmailVerification().then(function(){e.emailVerificationAlert=!0,setTimeout(function(){e.emailVerificationAlert=!1},3e3)}).catch(function(t){throw t.message})},CheckEmailVerification:function(t){return!!t.emailVerified&&(Ft.addUser(t.uid,t.email),!0)},validateEmail:function(t){var e=this,n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/;return!!n.test(String(t).toLowerCase())||(this.emailAlert=!0,setTimeout(function(){e.emailAlert=!1},1200),!1)},validatePassword:function(t){var e=this;return!(t.length<6)||(this.passwordAlert=!0,setTimeout(function(){e.passwordAlert=!1},1200),!1)}}},Zt=Wt,Kt=(n("2ea3"),Object(w["a"])(Zt,zt,Jt,!1,null,"749a01d8",null)),Yt=Kt.exports;at()(Kt,{VAlert:bt["a"]}),r["default"].use(s["a"]);var Qt=new s["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:Yt},{path:"/home",name:"Home",component:Ht,meta:{requiresAuth:!0}}]});Qt.beforeEach(function(t,e,n){var i=a.a.auth().currentUser,r=t.matched.some(function(t){return t.meta.requiresAuth});r&&!i?n("login"):!r&&i?n("home"):n()});e["a"]=Qt},"424c":function(t,e,n){"use strict";n.r(e),n.d(e,"addUser",function(){return u}),n.d(e,"checkUserExists",function(){return d}),n.d(e,"getListsOfUser",function(){return h}),n.d(e,"getSharedToUsers",function(){return p}),n.d(e,"shareList",function(){return g}),n.d(e,"addList",function(){return w}),n.d(e,"addReferenceToUserLists",function(){return _}),n.d(e,"deleteList",function(){return k}),n.d(e,"getListIdByName",function(){return x}),n.d(e,"getItems",function(){return S}),n.d(e,"addItem",function(){return O}),n.d(e,"deleteItem",function(){return E}),n.d(e,"setItemStatus",function(){return V});n("96cf");var i=n("3b8d"),a=n("bc3a"),r=n.n(a),s="https://anttus.ddns.net:8081/";function o(t){return c.apply(this,arguments)}function c(){return c=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.get(e,function(t){return t<500}).catch(function(t){throw new Error(t.message)});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)})),c.apply(this,arguments)}function u(t,e){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s+"api/users?userId="+e+"&email="+n,t.abrupt("return",r.a.put(i).catch(function(t){throw t}));case 2:case"end":return t.stop()}},t,this)})),l.apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=s+"api/users/ifexists?email="+e,t.next=3,o(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),m.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=s+"api/lists?userId="+e,t.next=3,o(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),f.apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return v=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=s+"api/lists/users/shared?listId="+e,t.next=3,o(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),v.apply(this,arguments)}function g(t,e){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s+"api/lists/users/shared?email="+e+"&listId="+n,t.abrupt("return",r.a.put(i).catch(function(t){throw t}));case 2:case"end":return t.stop()}},t,this)})),b.apply(this,arguments)}function w(t,e){return y.apply(this,arguments)}function y(){return y=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s+"api/lists?userId="+e+"&listName="+n,t.next=3,r.a.put(i).catch(function(t){throw t});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),y.apply(this,arguments)}function _(t,e){return L.apply(this,arguments)}function L(){return L=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=s+"api/lists/users?email="+e+"&listId="+n,r.a.put(i).catch(function(t){throw t});case 2:case"end":return t.stop()}},t,this)})),L.apply(this,arguments)}function k(t){return I.apply(this,arguments)}function I(){return I=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=s+"api/lists/"+e,t.abrupt("return",r.a.delete(n).catch(function(t){throw t}));case 2:case"end":return t.stop()}},t,this)})),I.apply(this,arguments)}function x(t,e){return C.apply(this,arguments)}function C(){return C=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s+"api/listbyname?listName="+e+"&userId="+n,t.abrupt("return",o(i));case 2:case"end":return t.stop()}},t,this)})),C.apply(this,arguments)}function S(t){return $.apply(this,arguments)}function $(){return $=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=s+"api/items?listId="+e,t.next=3,o(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),$.apply(this,arguments)}function O(t,e){return N.apply(this,arguments)}function N(){return N=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s+"api/items?name="+n+"&listId="+e,t.abrupt("return",r.a.put(i).catch(function(t){throw t}));case 2:case"end":return t.stop()}},t,this)})),N.apply(this,arguments)}function E(t,e,n){return A.apply(this,arguments)}function A(){return A=Object(i["a"])(regeneratorRuntime.mark(function t(e,n,i){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=s+"api/items?listId="+e+"&itemId="+n+"&itemName="+i,r.a.delete(a).catch(function(t){throw t});case 2:case"end":return t.stop()}},t,this)})),A.apply(this,arguments)}function V(t,e){return j.apply(this,arguments)}function j(){return j=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s+"api/items/status?itemId="+e+"&completed="+n,t.abrupt("return",r.a.patch(i).catch(function(t){throw t}));case 2:case"end":return t.stop()}},t,this)})),j.apply(this,arguments)}},"55f8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),function(t){n("cadf"),n("551c"),n("097d");var e=n("2b0e"),i=(n("402c"),n("3dfd")),a=n("41cb"),r=n("c0d6"),s=n("ecee"),o=n("c074"),c=n("ad3d"),u=n("ce5b"),l=n.n(u),d=n("59ca"),m=n.n(d),h=(n("ea7b"),{apiKey:"AIzaSyAlJb_344MJ-PhG4Ssmv7P6NqDHkyyo51s",authDomain:"nodenote-c4a38.firebaseapp.com",databaseURL:"https://nodenote-c4a38.firebaseio.com",projectId:"nodenote-c4a38",storageBucket:"nodenote-c4a38.appspot.com",messagingSenderId:"442898762075"}),f="";e["default"].config.productionTip=!1,e["default"].prototype.$firebase=m.a,m.a.initializeApp(h),s["c"].add(o["e"]),s["c"].add(o["h"]),s["c"].add(o["a"]),s["c"].add(o["f"]),s["c"].add(o["i"]),s["c"].add(o["g"]),s["c"].add(o["c"]),s["c"].add(o["d"]),s["c"].add(o["b"]),e["default"].component("font-awesome-icon",c["a"]),e["default"].use(l.a),m.a.auth().onAuthStateChanged(function(){f||(f=new e["default"]({router:a["a"],store:r["a"],render:function(t){return t(i["a"])}}).$mount("#app"))}),t.vm=f}.call(this,n("c8ba"))},"68b2":function(t,e,n){},"6c84":function(t,e,n){"use strict";var i=n("e7d6"),a=n.n(i);a.a},"7d0a":function(t,e,n){"use strict";var i=n("f523"),a=n.n(i);a.a},8746:function(t,e,n){},"8da3":function(t,e,n){"use strict";var i=n("68b2"),a=n.n(i);a.a},"9c21":function(t,e,n){},c0d6:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=n("2f62");i["default"].use(a["a"]),e["a"]=new a["a"].Store({state:{},mutations:{},actions:{}})},cccb:function(t,e,n){"use strict";var i=n("55f8"),a=n.n(i);a.a},ccf3:function(t,e,n){"use strict";var i=n("1cc4"),a=n.n(i);a.a},df06:function(t,e,n){"use strict";var i=n("9c21"),a=n.n(i);a.a},e7d6:function(t,e,n){},e8b6:function(t,e,n){},eee4:function(t,e,n){"use strict";var i=n("1541"),a=n.n(i);a.a},f523:function(t,e,n){},fd99:function(t,e,n){}});
//# sourceMappingURL=app.739ee6ed.js.map