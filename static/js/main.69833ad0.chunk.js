(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),l=(n(14),n(3)),i=n(4),c=n(6),u=n(5),m=n(7),d=["Choose car brand","Choose car model","Choose transmission type","Choose fuel type","Your choice"],p=[{brand:"Volkswagen",models:["Polo","Golf","Scirocco","Beetle"]},{brand:"Peugeot",models:["206","406","407","408"]},{brand:"Subaru",models:["Impreza","Legacy","Ascent","Forester"]},{brand:"Lada",models:["Kalina","Priora","Vesta","Granta"]}],h=["auto","manual","hybrid","robotic"],v=["petrol","diesel","gas","electric"],b=function(e){var t=e.brand,n=e.model,a=e.transmission,r=e.fuel,s=e.step,l=e.onChooseBrand,i=e.onChooseModel,c=e.onChooseTransmission,u=e.onChooseFuel;return o.a.createElement("div",{className:"options"},o.a.createElement("h4",{className:"title"},d[s]),0===s&&o.a.createElement(o.a.Fragment,null,p.map(function(e,n){return o.a.createElement("button",{key:n,className:t===e.brand?"option selected":"option",value:e.brand,onClick:l},e.brand)})),1===s&&p.map(function(e,a){return t===e.brand?o.a.createElement(o.a.Fragment,{key:a},p[a].models.map(function(e,t){return o.a.createElement("button",{key:t,className:n===e?"option selected":"option",value:e,onClick:i},e)})):null}),2===s&&o.a.createElement(o.a.Fragment,null,h.map(function(e,t){return o.a.createElement("button",{key:t,className:a===e?"option selected":"option",value:e,onClick:c},e)})),3===s&&o.a.createElement(o.a.Fragment,null,v.map(function(e,t){return o.a.createElement("button",{key:t,className:r===e?"option selected":"option",value:e,onClick:u},e)})),4===s&&o.a.createElement("div",{className:"result"},o.a.createElement("p",null,o.a.createElement("span",null,"Brand: "),t),o.a.createElement("p",null,o.a.createElement("span",null,"Model: "),n),o.a.createElement("p",null,o.a.createElement("span",null,"Transmission type: "),a),o.a.createElement("p",null,o.a.createElement("span",null,"Fuel type: "),r)))},f=function(e){var t=e.brand,n=e.model,a=e.transmission,r=e.fuel,s=e.step,l=e.onPrevStepNavigationHandler,i=e.onNextStepNavigationHandler,c=function(e){return e?0===s:0===s&&""===t||1===s&&""===n||2===s&&""===a||3===s&&""===r||4===s&&""!==t&&""!==n&&""!==a&&""!==r};return o.a.createElement("div",{className:"controls"},o.a.createElement("button",{className:"btn-nav",onClick:l,disabled:c(!0)},"Back"),o.a.createElement("button",{className:"btn-nav",onClick:i,disabled:c(!1)},"Next"))},E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={brand:"",model:"",transmission:"",fuel:"",step:0},n.chooseBrand=function(e){n.setState({brand:e.target.value})},n.chooseModel=function(e){n.setState({model:e.target.value})},n.chooseTransmission=function(e){n.setState({transmission:e.target.value})},n.chooseFuel=function(e){n.setState({fuel:e.target.value})},n.prevStepNavigationHandler=function(){1===n.state.step&&n.setState({model:""}),n.setState({step:n.state.step-1})},n.nextStepNavigationHandler=function(){n.setState({step:n.state.step+1})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.step,a=t.brand,r=t.model,s=t.transmission,l=t.fuel;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"wizard"},d.map(function(t,i){return n===d.indexOf(t)&&o.a.createElement(b,{key:i,brand:a,model:r,transmission:s,fuel:l,step:n,onChooseBrand:e.chooseBrand,onChooseModel:e.chooseModel,onChooseTransmission:e.chooseTransmission,onChooseFuel:e.chooseFuel})}),o.a.createElement(f,{brand:a,model:r,transmission:s,fuel:l,step:n,onPrevStepNavigationHandler:this.prevStepNavigationHandler,onNextStepNavigationHandler:this.nextStepNavigationHandler})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.69833ad0.chunk.js.map