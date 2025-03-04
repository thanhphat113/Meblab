/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var a=a||{};a.global=this||self;a.exportPath_=function(b,c,d,e){b=b.split(".");e=e||a.global;b[0]in e||typeof e.execScript=="undefined"||e.execScript("var "+b[0]);for(var f;b.length&&(f=b.shift());)if(b.length||c===void 0)e=e[f]&&e[f]!==Object.prototype[f]?e[f]:e[f]={};else if(!d&&a.isObject(c)&&a.isObject(e[f]))for(var g in c)c.hasOwnProperty(g)&&(e[f][g]=c[g]);else e[f]=c};a.define=function(b,c){return c};a.FEATURESET_YEAR=2012;a.DEBUG=!0;a.LOCALE="vi";a.TRUSTED_SITE=!0;
a.DISALLOW_TEST_ONLY_CODE=!a.DEBUG;a.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;a.readFlagInternalDoNotUseOrElse=function(b,c){var d=a.getObjectByName();b=d&&d[b];return b!=null?b:c};a.FLAGS_OBJECT_="CLOSURE_FLAGS";a.FLAGS_STAGING_DEFAULT=!0;a.readToggleInternalDoNotCallDirectly=function(b){var c=typeof CLOSURE_TOGGLE_ORDINALS==="object"?CLOSURE_TOGGLE_ORDINALS:void 0;b=c&&c[b];return typeof b!=="number"?!!b:!!(a.TOGGLES_[Math.floor(b/30)]&1<<b%30)};a.TOGGLE_VAR_="_F_toggles";
a.TOGGLES_=a.global[a.TOGGLE_VAR_]||[];a.LEGACY_NAMESPACE_OBJECT_=a.global;a.provide=function(b){if(a.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");a.constructNamespace_(b)};a.constructNamespace_=function(b,c,d){a.exportPath_(b,c,d,a.LEGACY_NAMESPACE_OBJECT_)};a.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/;
a.getScriptNonce_=function(b){b=(b||a.global).document;return(b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&a.NONCE_PATTERN_.test(b)?b:""};a.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
a.module=function(b){if(typeof b!=="string"||!b||b.search(a.VALID_MODULE_RE_)==-1)throw Error("Invalid module identifier");if(!a.isInGoogModuleLoader_())throw Error("Module "+b+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");if(a.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");
a.moduleLoaderState_.moduleName=b};a.module.get=function(){return null};a.module.getInternal_=function(){return null};a.requireDynamic=function(){return null};a.importHandler_=null;a.uncompiledChunkIdHandler_=null;a.setImportHandlerInternalDoNotCallOrElse=function(b){a.importHandler_=b};a.setUncompiledChunkIdHandlerInternalDoNotCallOrElse=function(b){a.uncompiledChunkIdHandler_=b};a.maybeRequireFrameworkInternalOnlyDoNotCallOrElse=function(){};a.ModuleType={ES6:"es6",GOOG:"goog"};
a.moduleLoaderState_=null;a.isInModuleLoader_=function(){return a.isInGoogModuleLoader_()||a.isInEs6ModuleLoader_()};a.isInGoogModuleLoader_=function(){return!!a.moduleLoaderState_&&a.moduleLoaderState_.type==a.ModuleType.GOOG};a.isInEs6ModuleLoader_=function(){if(a.moduleLoaderState_&&a.moduleLoaderState_.type==a.ModuleType.ES6)return!0;var b=a.LEGACY_NAMESPACE_OBJECT_.$jscomp;return b?typeof b.getCurrentModulePath!="function"?!1:!!b.getCurrentModulePath():!1};
a.module.declareLegacyNamespace=function(){a.moduleLoaderState_.declareLegacyNamespace=!0};a.declareModuleId=function(b){if(a.moduleLoaderState_)a.moduleLoaderState_.moduleName=b;else{var c=a.LEGACY_NAMESPACE_OBJECT_.$jscomp;if(!c||typeof c.getCurrentModulePath!="function")throw Error('Module with namespace "'+b+'" has been loaded incorrectly.');c=c.require(c.getCurrentModulePath());a.loadedModules_[b]={exports:c,type:a.ModuleType.ES6,moduleId:b}}};
a.setTestOnly=function(b){if(a.DISALLOW_TEST_ONLY_CODE)throw b=b||"",Error("Importing test-only code into non-debug environment"+(b?": "+b:"."));};a.forwardDeclare=function(){};a.getObjectByName=function(){for(var b=a.FLAGS_OBJECT_.split("."),c=a.global,d=0;d<b.length;d++)if(c=c[b[d]],c==null)return null;return c};a.addDependency=function(){};a.ENABLE_DEBUG_LOADER=!1;a.logToConsole_=function(b){a.global.console&&a.global.console.error(b)};a.require=function(){};a.requireType=function(){return{}};
a.basePath="";a.abstractMethod=function(){throw Error("unimplemented abstract method");};a.addSingletonGetter=function(b){b.instance_=void 0;b.getInstance=function(){if(b.instance_)return b.instance_;a.DEBUG&&(a.instantiatedSingletons_[a.instantiatedSingletons_.length]=b);return b.instance_=new b}};a.instantiatedSingletons_=[];a.LOAD_MODULE_USING_EVAL=!0;a.SEAL_MODULE_EXPORTS=a.DEBUG;a.loadedModules_={};a.DEPENDENCIES_ENABLED=!1;a.ASSUME_ES_MODULES_TRANSPILED=!1;a.TRUSTED_TYPES_POLICY_NAME="goog";
a.hasBadLetScoping=null;
a.loadModule=function(b){var c=a.moduleLoaderState_;try{a.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:a.ModuleType.GOOG};var d={},e=d;if(typeof b==="function")e=b.call(void 0,e);else if(typeof b==="string")e=a.loadModuleFromSource_.call(void 0,e,b);else throw Error("Invalid module definition");var f=a.moduleLoaderState_.moduleName;if(typeof f==="string"&&f)a.moduleLoaderState_.declareLegacyNamespace?a.constructNamespace_(f,e,d!==e):a.SEAL_MODULE_EXPORTS&&Object.seal&&typeof e==
"object"&&e!=null&&Object.seal(e),a.loadedModules_[f]={exports:e,type:a.ModuleType.GOOG,moduleId:a.moduleLoaderState_.moduleName};else throw Error('Invalid module name "'+f+'"');}finally{a.moduleLoaderState_=c}};a.loadModuleFromSource_=function(b,c){eval(a.CLOSURE_EVAL_PREFILTER_.createScript(c));return b};a.normalizePath_=function(b){b=b.split("/");for(var c=0;c<b.length;)b[c]=="."?b.splice(c,1):c&&b[c]==".."&&b[c-1]&&b[c-1]!=".."?b.splice(--c,2):c++;return b.join("/")};
a.loadFileSync_=function(b){if(a.global.CLOSURE_LOAD_FILE_SYNC)return a.global.CLOSURE_LOAD_FILE_SYNC(b);try{var c=new a.global.XMLHttpRequest;c.open("get",b,!1);c.send();return c.status==0||c.status==200?c.responseText:null}catch(d){return null}};a.typeOf=function(b){var c=typeof b;return c!="object"?c:b?Array.isArray(b)?"array":c:"null"};a.isArrayLike=function(b){var c=a.typeOf(b);return c=="array"||c=="object"&&typeof b.length=="number"};
a.isDateLike=function(b){return a.isObject(b)&&typeof b.getFullYear=="function"};a.isObject=function(b){var c=typeof b;return c=="object"&&b!=null||c=="function"};a.getUid=function(b){return Object.prototype.hasOwnProperty.call(b,a.UID_PROPERTY_)&&b[a.UID_PROPERTY_]||(b[a.UID_PROPERTY_]=++a.uidCounter_)};a.hasUid=function(b){return!!b[a.UID_PROPERTY_]};a.removeUid=function(b){b!==null&&"removeAttribute"in b&&b.removeAttribute(a.UID_PROPERTY_);try{delete b[a.UID_PROPERTY_]}catch(c){}};
a.UID_PROPERTY_="closure_uid_"+(Math.random()*1E9>>>0);a.uidCounter_=0;a.cloneObject=function(b){var c=a.typeOf(b);if(c=="object"||c=="array"){if(typeof b.clone==="function")return b.clone();if(typeof Map!=="undefined"&&b instanceof Map)return new Map(b);if(typeof Set!=="undefined"&&b instanceof Set)return new Set(b);c=c=="array"?[]:{};for(var d in b)c[d]=a.cloneObject(b[d]);return c}return b};a.bindNative_=function(b,c,d){return b.call.apply(b.bind,arguments)};
a.bindJs_=function(b,c,d){if(!b)throw Error();if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,e);return b.apply(c,f)}}return function(){return b.apply(c,arguments)}};a.bind=function(b,c,d){a.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?a.bindNative_:a.bindJs_;return a.bind.apply(null,arguments)};
a.partial=function(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice();e.push.apply(e,arguments);return b.apply(this,e)}};a.now=function(){return Date.now()};a.globalEval=function(b){(0,eval)(b)};
a.getCssName=function(b,c){if(String(b).charAt(0)==".")throw Error('className passed in goog.getCssName must not start with ".". You passed: '+b);var d=function(f){return a.cssNameMapping_[f]||f},e=function(f){f=f.split("-");for(var g=[],h=0;h<f.length;h++)g.push(d(f[h]));return g.join("-")};e=a.cssNameMapping_?a.cssNameMappingStyle_=="BY_WHOLE"?d:e:function(f){return f};b=c?b+"-"+e(c):e(b);return a.global.CLOSURE_CSS_NAME_MAP_FN?a.global.CLOSURE_CSS_NAME_MAP_FN(b):b};
a.setCssNameMapping=function(b,c){a.cssNameMapping_=b;a.cssNameMappingStyle_=c};a.GetMsgOptions=function(){};a.getMsg=function(b,c,d){d&&d.html&&(b=b.replace(/</g,"&lt;"));d&&d.unescapeHtmlEntities&&(b=b.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&"));c&&(b=b.replace(/\{\$([^}]+)}/g,function(e,f){return c!=null&&f in c?c[f]:e}));return b};a.getMsgWithFallback=function(b){return b};
a.exportSymbol=function(){a.exportPath_("google.ime.l10n.Messages",{MSG_ARABIC_STYLE:"Ki\u1ec3u \u1ea2 R\u1eadp",MSG_BRAZILIAN:"Ti\u1ebfng Brazil",MSG_CANGJIE:"Cangjie",MSG_CANGJIE_V5:"Th\u01b0\u01a1ng Hi\u1ec7t (Phi\u00ean b\u1ea3n 5)",MSG_CANTONESE:"Qu\u1ea3ng \u0110\u00f4ng",MSG_JYUTPING:"VI\u1ec6T B\u00cdNH",MSG_CYRILLIC:"Ch\u1eef c\u00e1i kirin",MSG_DISABLE_PERSONAL_DICTIONARY:"T\u1eaft t\u1eeb \u0111i\u1ec3n c\u00e1 nh\u00e2n",MSG_EASTERN:"Ph\u01b0\u01a1ng T\u00e2y",MSG_ENABLE_PERSONAL_DICTIONARY:"B\u1eadt t\u1eeb \u0111i\u1ec3n c\u00e1 nh\u00e2n",
MSG_ENGLISH_STYLE:"Ki\u1ec3u Anh",MSG_EUROPEAN:"Ch\u00e2u \u00c2u",MSG_HANDWRITE:"Vi\u1ebft tay",MSG_HIDE_KEYBOARD:"\u1ea8n b\u00e0n ph\u00edm",MSG_INPUT_TOOLS_SETTINGS:"C\u00e0i \u0111\u1eb7t c\u00f4ng c\u1ee5 nh\u1eadp li\u1ec7u",MSG_LATIN:"Ti\u1ebfng Latinh",MSG_QUICK:"QUICK",MSG_PHONETIC:"Phi\u00ean \u00e2m",MSG_PINYIN:"B\u00ednh \u00e2m",MSG_PRIMARY:"Ch\u00ednh",MSG_SECONDARY:"Ph\u1ee5",MSG_SHOW_KEYBOARD:"Hi\u1ec7n b\u00e0n ph\u00edm",MSG_SIMPLIFIED:"Gi\u1ea3n th\u1ec3",MSG_SWISS_GERMAN:"\u0110\u1ee9c ki\u1ec3u Th\u1ee5y S\u0129",
MSG_TRADITIONAL:"Ph\u1ed3n th\u1ec3",MSG_US_I18N:"B\u00e0n ph\u00edm qu\u1ed1c t\u1ebf Hoa K\u1ef3",MSG_WESTERN:"Ph\u01b0\u01a1ng \u0110\u00f4ng",MSG_WUBI:"Ng\u0169 b\u00fat",MSG_ZHUYIN:"Ch\u00fa \u00e2m"},!0)};a.exportProperty=function(b,c,d){b[c]=d};
a.inherits=function(b,c){function d(){}d.prototype=c.prototype;b.superClass_=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.base=function(e,f,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return c.prototype[f].apply(e,h)}};a.scope=function(b){if(a.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");b.call(a.global)};
a.defineClass=function(b,c){var d=c.constructor,e=c.statics;d&&d!=Object.prototype.constructor||(d=function(){throw Error("cannot instantiate an interface (no constructor defined).");});d=a.defineClass.createSealingConstructor_(d);b&&a.inherits(d,b);delete c.constructor;delete c.statics;a.defineClass.applyProperties_(d.prototype,c);e!=null&&(e instanceof Function?e(d):a.defineClass.applyProperties_(d,e));return d};a.defineClass.SEAL_CLASS_INSTANCES=a.DEBUG;
a.defineClass.createSealingConstructor_=function(b){return a.defineClass.SEAL_CLASS_INSTANCES?function(){var c=b.apply(this,arguments)||this;c[a.UID_PROPERTY_]=c[a.UID_PROPERTY_];return c}:b};a.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
a.defineClass.applyProperties_=function(b,c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d]);for(var e=0;e<a.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;e++)d=a.defineClass.OBJECT_PROTOTYPE_FIELDS_[e],Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d])};a.identity_=function(b){return b};a.createTrustedTypesPolicy=function(b){var c=null,d=a.global.trustedTypes;if(!d||!d.createPolicy)return c;try{c=d.createPolicy(b,{createHTML:a.identity_,createScript:a.identity_,createScriptURL:a.identity_})}catch(e){a.logToConsole_(e.message)}return c};a.exportSymbol();
