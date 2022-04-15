(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a2c0006"],{"30c0":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",[e._v("Student Account Creation")])])],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("p",[e._v("Complete this form to create your account.")]),r("p",[e._v("If you have a classroom code, you can enter it here.")]),r("p",[e._v("If you don't have your classroom code yet, you can enter it later.")])])],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-form",{ref:"form",staticClass:"student-signin-form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.usernameRules,label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{rules:e.nameRules,label:"Educational institution"},model:{value:e.institution,callback:function(t){e.institution=t},expression:"institution"}}),r("v-select",{attrs:{items:["Male","Female","Other"],label:"Gender"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}}),r("v-text-field",{attrs:{label:"Classroom Code"},model:{value:e.classroomCode,callback:function(t){e.classroomCode=t},expression:"classroomCode"}}),e.errorMessage?r("v-alert",{attrs:{color:"red lighten-2"}},[e._v(e._s(e.errorMessage))]):e._e(),e.successMessage?r("v-alert",{attrs:{color:"green lighten-2"}},[e._v(e._s(e.successMessage))]):e._e(),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validateAndSubmit}},[e._v("Create")])],1)],1)],1)],1)},a=[],n=r("1da1"),o=r("5530"),i=r("d4ec"),c=r("bee2"),u=r("262e"),l=r("2caf"),d=(r("96cf"),r("9ab4")),f=r("1b40"),b=r("321e"),m=r("cb87"),v=r("2f62"),p=r("0613"),h=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.title="Create Student Account",e.username="TestStudent",e.classroomCode="",e.valid=!0,e.email="teststudent@testschool.edu",e.password="testpass",e.institution="TestSchool",e.age=null,e.gender=null,e.nameRules=b["b"],e.emailRules=b["a"],e.passwordRules=b["c"],e.usernameRules=b["d"],e.errorMessage="",e.successMessage="",e}return Object(c["a"])(r,[{key:"beforeCreate",value:function(){this.$options.methods=Object(o["a"])(Object(o["a"])({},this.$options.methods),Object(v["b"])(p["a"],["submitStudentSignUp","validateClassroomCode"]))}},{key:"submit",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.submitStudentSignUp({username:this.username,email:this.email,password:this.password,institution:this.institution,age:this.age,gender:this.gender,classroomCode:this.classroomCode}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"validateAndSubmit",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.errorMessage="",this.successMessage="",t=this.validate(),!t){e.next=19;break}if(!this.classroomCode){e.next=12;break}return e.next=7,this.validateClassroomCode(this.classroomCode);case 7:if(r=e.sent,console.log("Valid code: ".concat(r)),r){e.next=12;break}return this.errorMessage="Not a valid classroom code. Try again or check with your instructor for the correct code.",e.abrupt("return");case 12:return e.next=14,this.submit();case 14:s=e.sent,a=s.data.status,n=s.data.success,console.log(s),n?this.$router.push("/student-account-created"):this.errorMessage="email_already_exists"===a?"An account with this email already exists.":"An error occurred. We apologize for the inconvenience.";case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(m["a"]);h=Object(d["a"])([f["a"]],h);var g=h,O=g,w=r("2877"),y=Object(w["a"])(O,s,a,!1,null,null,null);t["default"]=y.exports},"321e":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o}));r("ac1f"),r("00b4");var s=[function(e){return!!e||"Name is required"}],a=[function(e){return!!e||"Username is required"}],n=[function(e){return!!e||"Email is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],o=[function(e){return!!e||"Password is required"}]},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},cb87:function(e,t,r){"use strict";var s=r("d4ec"),a=r("bee2"),n=r("262e"),o=r("2caf"),i=r("9ab4"),c=r("1b40"),u=function(e){Object(n["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return Object(a["a"])(r,[{key:"validate",value:function(){return this.$refs.form.validate()}},{key:"reset",value:function(){this.$refs.form.reset()}}]),r}(c["b"]);u=Object(i["a"])([c["a"]],u);var l,d,f=u,b=f,m=r("2877"),v=Object(m["a"])(b,l,d,!1,null,null,null);t["a"]=v.exports},dbb4:function(e,t,r){var s=r("23e7"),a=r("83ab"),n=r("56ef"),o=r("fc6a"),i=r("06cf"),c=r("8418");s({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,s=o(e),a=i.f,u=n(s),l={},d=0;while(u.length>d)r=a(s,t=u[d++]),void 0!==r&&c(l,t,r);return l}})},e439:function(e,t,r){var s=r("23e7"),a=r("d039"),n=r("fc6a"),o=r("06cf").f,i=r("83ab"),c=a((function(){o(1)})),u=!i||c;s({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(n(e),t)}})}}]);
//# sourceMappingURL=chunk-6a2c0006.f1d6f358.js.map