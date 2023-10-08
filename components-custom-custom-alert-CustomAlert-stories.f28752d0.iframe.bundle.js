"use strict";(self.webpackChunkcyb=self.webpackChunkcyb||[]).push([[363],{"./src/components/custom/custom-alert/CustomAlert.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CustomAlert_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AlertContext=(0,react.createContext)({show:!1,type:"info",message:"info message",setShow:function setShow(){},setType:function setType(){},setMessage:function setMessage(){}}),AlertContextProvider=function AlertContextProvider(_ref){var children=_ref.children,_useState=useState(!1),_useState2=_slicedToArray(_useState,2),show=_useState2[0],setShow=_useState2[1],_useState3=useState("info"),_useState4=_slicedToArray(_useState3,2),type=_useState4[0],setType=_useState4[1],_useState5=useState("info message"),_useState6=_slicedToArray(_useState5,2),value={show:show,type:type,message:_useState6[0],setShow:setShow,setType:setType,setMessage:_useState6[1]};return _jsx(AlertContext.Provider,{value:value,children:children})};try{AlertContextProvider.displayName="AlertContextProvider",AlertContextProvider.__docgenInfo={description:"",displayName:"AlertContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context/alert.context.tsx#AlertContextProvider"]={docgenInfo:AlertContextProvider.__docgenInfo,name:"AlertContextProvider",path:"src/context/alert.context.tsx#AlertContextProvider"})}catch(__react_docgen_typescript_loader_error){}var esm_InformationCircleIcon=react.forwardRef((function InformationCircleIcon({title:title,titleId:titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}));var esm_XCircleIcon=react.forwardRef((function XCircleIcon({title:title,titleId:titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}));var esm_CheckCircleIcon=react.forwardRef((function CheckCircleIcon({title:title,titleId:titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))}));var _templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,esm_ExclamationCircleIcon=react.forwardRef((function ExclamationCircleIcon({title:title,titleId:titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))})),CustomAlertStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: fixed;\n    width: 22em;\n    opacity: .9;\n    height: fit-content;\n    cursor: pointer;\n    border-radius: var(--main-border-radius);\n    padding: 1em;\n    box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);\n    transition: opacity 0.3s ease;\n    transition: box-shadow 0.3s ease;\n\n    background: ",";\n\n    color: ",";\n\n    top: ",";\n    bottom: ",";\n    left: ",";\n    right: ",";\n\n    animation: ",";\n\n    &:hover {\n        opacity: 1!important;\n        box-shadow: none;\n    }\n\n    .custom--alert__icon {\n        width: 24px;\n    }\n"])),(function(_ref){var $type=_ref.$type;return"success"===$type?"#4CAF50":"error"===$type?"#BF360C":"warning"===$type?"#FFB74D":"info"===$type?"#424242":"none"}),(function(_ref2){return"warning"===_ref2.$type?"#212121":"inherit"}),(function(_ref3){return _ref3.$top?"1em!important":"unset"}),(function(_ref4){return _ref4.$bottom?"1em!important":"unset"}),(function(_ref5){return _ref5.$left?"-28em":"unset"}),(function(_ref6){return _ref6.$right?"-28em":"unset"}),(function(_ref7){var $right=_ref7.$right,$left=_ref7.$left,$show=_ref7.$show;return $right&&$show?"showAlertRight .4s forwards":$left&&$show?"showAlertLeft .4s forwards":"unset"})),CustomAlert=function CustomAlert(_ref8){var _ref8$type=_ref8.type,type=void 0===_ref8$type?"info":_ref8$type,_ref8$title=_ref8.title,title=void 0===_ref8$title?"":_ref8$title,_ref8$message=_ref8.message,message=void 0===_ref8$message?"custom alert":_ref8$message,_ref8$hideDelay=_ref8.hideDelay,hideDelay=void 0===_ref8$hideDelay?"4000":_ref8$hideDelay,_ref8$show=_ref8.show,show=void 0!==_ref8$show&&_ref8$show,_ref8$top=_ref8.top,top=void 0!==_ref8$top&&_ref8$top,_ref8$left=_ref8.left,left=void 0!==_ref8$left&&_ref8$left,_ref8$right=_ref8.right,right=void 0===_ref8$right||_ref8$right,_ref8$bottom=_ref8.bottom,bottom=void 0===_ref8$bottom||_ref8$bottom,setShow=(0,react.useContext)(AlertContext).setShow;return(0,react.useEffect)((function(){setShow&&(setShow(show),show&&hideDelay&&setTimeout((function(){setShow(!1)}),+hideDelay))}),[show,setShow,hideDelay]),(0,jsx_runtime.jsxs)(CustomAlertStyled,{className:"custom--alert flex f-col gap",$type:type,$top:top,$left:left,$right:right,$bottom:bottom,$show:show,children:[(0,jsx_runtime.jsxs)("div",{className:"flex gap align-center",children:["info"===type&&(0,jsx_runtime.jsx)(esm_InformationCircleIcon,{className:"custom--alert__icon"}),"error"===type&&(0,jsx_runtime.jsx)(esm_XCircleIcon,{className:"custom--alert__icon"}),"success"===type&&(0,jsx_runtime.jsx)(esm_CheckCircleIcon,{className:"custom--alert__icon"}),"warning"===type&&(0,jsx_runtime.jsx)(esm_ExclamationCircleIcon,{className:"custom--alert__icon"}),(0,jsx_runtime.jsxs)("h2",{className:"custom--alert__title",children:[" ",title||type]})]}),(0,jsx_runtime.jsx)("p",{className:"custom--alert__message",children:message})]})},custom_alert_CustomAlert=CustomAlert;try{CustomAlert.displayName="CustomAlert",CustomAlert.__docgenInfo={description:"",displayName:"CustomAlert",props:{type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},show:{defaultValue:{value:"false"},description:"",name:"show",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},message:{defaultValue:{value:"custom alert"},description:"",name:"message",required:!1,type:{name:"string"}},hideDelay:{defaultValue:{value:"4000"},description:"",name:"hideDelay",required:!1,type:{name:"string | number"}},top:{defaultValue:{value:"false"},description:"",name:"top",required:!1,type:{name:"boolean"}},left:{defaultValue:{value:"false"},description:"",name:"left",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"true"},description:"",name:"right",required:!1,type:{name:"boolean"}},bottom:{defaultValue:{value:"true"},description:"",name:"bottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/custom/custom-alert/CustomAlert.tsx#CustomAlert"]={docgenInfo:CustomAlert.__docgenInfo,name:"CustomAlert",path:"src/components/custom/custom-alert/CustomAlert.tsx#CustomAlert"})}catch(__react_docgen_typescript_loader_error){}var CustomAlert_stories={title:"CustomAlert",component:custom_alert_CustomAlert,argTypes:{type:{type:"string",description:"Custom Select type",defaultValue:"info",options:["info","success","warning","error"],control:{type:"select"}},top:{type:"boolean",description:"Custom Alert top position",defaultValue:!0},bottom:{type:"boolean",description:"Custom Alert bottom position",defaultValue:!1},left:{type:"boolean",description:"Custom Alert left position",defaultValue:!0},right:{type:"boolean",description:"Custom Alert right position",defaultValue:!0}}},Default={args:{type:"info",title:"",message:"custom alert",hideDelay:0,show:!0,top:!0,left:!0,right:!1,bottom:!1,hideAlert:function hideAlertHandle(){console.log("Custom Alert has been hided.")}}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    type: 'info',\n    title: '',\n    message: 'custom alert',\n    hideDelay: 0,\n    show: true,\n    top: true,\n    left: true,\n    right: false,\n    bottom: false,\n    hideAlert: hideAlertHandle\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]}}]);