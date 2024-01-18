"use strict";(self.webpackChunkcyb=self.webpackChunkcyb||[]).push([[274],{"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}})},"./src/styles/_variables.css":function(){},"./src/styles/_base.scss":function(){},"./src/components/custom/custom-select/CustomSelect.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CustomSelect_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),CustomInput=__webpack_require__("./src/components/custom/custom-input/CustomInput.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CustomSelectStyled=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: relative;\n    font-size: ",";\n"])),(function(_ref){var $size=_ref.$size;return"small"===$size?".808rem":"large"===$size?"1.12rem":"1rem"})),CustomSelectOptionsStyled=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    position: absolute;\n    z-index: 999;\n"]))),CustomSelectOptionsListStyled=styled_components_browser_esm.ZP.ul(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    background-color: var(--color-dark);\n    box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);\n    padding: .6em 0;\n    border-radius: var(--main-border-radius);\n    margin-top: 0.6em;\n    transition: all .2s ease;\n"]))),CustomSelectOptionsListItemStyled=styled_components_browser_esm.ZP.li(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    font-family: 'Poppins', sans-serif;\n    padding: .4em 1em;\n    cursor: pointer;\n    color: var(--main-font);\n    transition: background-color .2s ease;\n\n    &:hover:not(.empty) {\n        background-color: rgba(255, 255, 255, 0.2);\n    }\n\n    &.active {\n        background-color: rgba(255, 255, 255, 0.2);\n    }\n\n    &.empty {\n        cursor: default;\n        font-size: .8rem;\n    }\n\n    &:hover > "," {\n        background-color: pink;\n    }\n"])),CustomSelectOptionsListStyled),CustomSelect=function CustomSelect(_ref2){var _ref2$value=_ref2.value,value=void 0===_ref2$value?"":_ref2$value,_ref2$size=_ref2.size,size=void 0===_ref2$size?"medium":_ref2$size,_ref2$placeholder=_ref2.placeholder,placeholder=void 0===_ref2$placeholder?"select":_ref2$placeholder,className=_ref2.className,_ref2$items=_ref2.items,items=void 0===_ref2$items?[]:_ref2$items,_ref2$valueKey=_ref2.valueKey,valueKey=void 0===_ref2$valueKey?"id":_ref2$valueKey,_ref2$name=_ref2.name,name=void 0===_ref2$name?"name":_ref2$name,_ref2$returnObject=_ref2.returnObject,returnObject=void 0===_ref2$returnObject||_ref2$returnObject,_ref2$required=_ref2.required,required=void 0!==_ref2$required&&_ref2$required,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,onChange=_ref2.onChange,_useState=(0,react.useState)(items),_useState2=(0,slicedToArray.Z)(_useState,2),selectItems=_useState2[0],setSelectItems=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),selectValue=_useState4[0],setSelectValue=_useState4[1],_useState5=(0,react.useState)(null),_useState6=(0,slicedToArray.Z)(_useState5,2),selectOption=_useState6[0],setSelectOption=_useState6[1],_useState7=(0,react.useState)(!1),_useState8=(0,slicedToArray.Z)(_useState7,2),showOptions=_useState8[0],setShowOptions=_useState8[1];(0,react.useEffect)((function(){value&&setSelectValue(value)}),[value]);return(0,jsx_runtime.jsxs)(CustomSelectStyled,{className:"custom--select ".concat(className),$size:size,children:[(0,jsx_runtime.jsx)(CustomInput.Z,{type:"search",size:size,placeholder:placeholder,value:selectValue,required:required,disabled:disabled,onChange:function onChangeHandler(e){setSelectValue(e.target.value),e.target.value||setSelectOption(null);var newItems=items.filter((function(item){return item[name].includes(e.target.value)}));setSelectItems(newItems)},onFocus:function onFocusHandler(){disabled||setTimeout((function(){setShowOptions(!0)}),100)},onBlur:function onBlurHandler(){disabled||setTimeout((function(){setShowOptions(!1)}),100)}}),showOptions&&(0,jsx_runtime.jsx)(CustomSelectOptionsStyled,{className:"custom--select__options w-100",children:(0,jsx_runtime.jsx)(CustomSelectOptionsListStyled,{className:"custom--select__options-list",children:selectItems.length?selectItems.map((function(item){return(0,jsx_runtime.jsx)(CustomSelectOptionsListItemStyled,{className:"custom--select__options-list_item ".concat((null==selectOption?void 0:selectOption[valueKey])===item[valueKey]?"active":""),onClick:function onClick(){return function clickOption(optionId){var option=items.find((function(item){return item[valueKey]===optionId}));option&&(setSelectOption(option),setSelectValue(option[name]),onChange(returnObject?option:option[name]))}(item[valueKey])},children:item[name]},item[valueKey])})):(0,jsx_runtime.jsx)(CustomSelectOptionsListItemStyled,{className:"custom--select__options-list_item empty text-center",children:"no items for select"})})})]})},custom_select_CustomSelect=CustomSelect;try{CustomSelect.displayName="CustomSelect",CustomSelect.__docgenInfo={description:"",displayName:"CustomSelect",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"TCustomValue"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placeholder:{defaultValue:{value:"select"},description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"TCustomItem[]"}},valueKey:{defaultValue:{value:"id"},description:"",name:"valueKey",required:!1,type:{name:"string"}},name:{defaultValue:{value:"name"},description:"",name:"name",required:!1,type:{name:"string"}},returnObject:{defaultValue:{value:"true"},description:"",name:"returnObject",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string | TCustomItem) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/custom/custom-select/CustomSelect.tsx#CustomSelect"]={docgenInfo:CustomSelect.__docgenInfo,name:"CustomSelect",path:"src/components/custom/custom-select/CustomSelect.tsx#CustomSelect"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/styles/_variables.css"),__webpack_require__("./src/styles/_base.scss");var _Default$parameters,_Default$parameters2,_Default$parameters2$,CustomSelect_stories={title:"CustomSelect",component:custom_select_CustomSelect,argTypes:{size:{type:"string",description:"Custom Select size",defaultValue:"medium",options:["small","medium","large"],control:{type:"select"}}}},Default={args:{className:"",size:"medium",value:null,placeholder:"select",items:[{id:1,name:"someName"}],valueKey:"id",name:"name",returnObject:!0,required:!1,disabled:!1,onChange:function onChange(e){return function onChangeHandler(e){console.log(e)}(e)}}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    className: '',\n    size: 'medium',\n    value: null,\n    placeholder: 'select',\n    items: [{\n      id: 1,\n      name: 'someName'\n    }],\n    valueKey: 'id',\n    name: 'name',\n    returnObject: true,\n    required: false,\n    disabled: false,\n    onChange: (e: MouseEventHandler<HTMLInputElement>) => onChangeHandler(e)\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/custom/custom-input/CustomInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_home_runner_work_cyb_cyb_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SearchCancelBtn=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(_templateObject||(_templateObject=(0,_home_runner_work_cyb_cyb_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    -webkit-appearance: none;\n    height: 1em;\n    width: 1em;\n    cursor: pointer;\n    background: url(/assets/icons/xmark-solid.svg) no-repeat 50% 50%;\n    background-size: contain;\n    transition: all .2s ease;\n"]))),CustomInputStyled=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input(_templateObject2||(_templateObject2=(0,_home_runner_work_cyb_cyb_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    background: ",";\n    border: ",";\n    border-radius: var(--main-border-radius);\n    width: 18em;\n    height: 2em;\n    padding: 2em;\n    outline: none;\n    color: ",";\n\n    font-size: ",";\n\n    opacity: ",";\n    cursor: ",";\n\n    &::placeholder {\n        color: var(--main-font);\n    }\n\n    &::-webkit-search-cancel-button {","}\n"])),(function(_ref){return _ref.$disabled?"#acacac":"transparent"}),(function(_ref2){return _ref2.$disabled?"1px solid #7f7f7f":"1px solid var(--main-font)"}),(function(_ref3){return _ref3.$disabled?"#7f7f7f":"var(--main-font)"}),(function(_ref4){var $size=_ref4.$size;return"small"===$size?".808rem":"large"===$size?"1.12rem":"1rem"}),(function(_ref5){return _ref5.$disabled?".4":"1"}),(function(_ref6){return _ref6.$disabled?"default":"text"}),SearchCancelBtn),CustomInput=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref7,ref){var _ref7$className=_ref7.className,className=void 0===_ref7$className?"":_ref7$className,_ref7$type=_ref7.type,type=void 0===_ref7$type?"search":_ref7$type,_ref7$size=_ref7.size,size=void 0===_ref7$size?"medium":_ref7$size,_ref7$placeholder=_ref7.placeholder,placeholder=void 0===_ref7$placeholder?"search":_ref7$placeholder,_ref7$name=_ref7.name,name=void 0===_ref7$name?"":_ref7$name,_ref7$value=_ref7.value,value=void 0===_ref7$value?"":_ref7$value,_ref7$required=_ref7.required,required=void 0!==_ref7$required&&_ref7$required,_ref7$disabled=_ref7.disabled,disabled=void 0!==_ref7$disabled&&_ref7$disabled,onChange=_ref7.onChange,onFocus=_ref7.onFocus,onBlur=_ref7.onBlur;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomInputStyled,{className:"custom--input w-100 ".concat(className),type:type,placeholder:placeholder,name:name,value:value,required:required,$size:size,$disabled:disabled,disabled:disabled,onChange:onChange,onFocus:onFocus,onBlur:onBlur})}));__webpack_exports__.Z=CustomInput;try{CustomInput.displayName="CustomInput",CustomInput.__docgenInfo={description:"",displayName:"CustomInput",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"search"},description:"",name:"type",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placeholder:{defaultValue:{value:"search"},description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"TCustomValue"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/custom/custom-input/CustomInput.tsx#CustomInput"]={docgenInfo:CustomInput.__docgenInfo,name:"CustomInput",path:"src/components/custom/custom-input/CustomInput.tsx#CustomInput"})}catch(__react_docgen_typescript_loader_error){}}}]);