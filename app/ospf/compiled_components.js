const a=['refresh','onEvent','setValue','nameControl','Label','otherAttributes','Luigi','_eventListeners','render','getChild','getValue','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22App\x22>\x0d\x0a\x0d\x0a</div>','send','getItem','cssClass','parse','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22TabbedLayoutExample_content\x20TabbedLayoutExample_content-menu\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22TabbedLayoutExample_content_title\x22>Tab\x20','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22MenuBar\x20<%=\x20c.visible\x20?\x20\x22MenuBar-visible\x22\x20:\x20\x22\x22\x20%>\x22>\x0d\x0a\x20\x20\x20\x20<div\x20class=\x22MenuBar_items\x22>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(let\x20tab\x20of\x20c.tabs){\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22MenuBar_item\x22\x20<%-\x20c.renderEvent(\x22onclick\x22,\x20\x22tabClick\x22,\x20tab.id)\x20%>><%=\x20tab.name\x20%></div>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20%>\x0d\x0a\x20\x20\x20\x20</div>\x0d\x0a\x0d\x0a\x20\x20\x20\x20<div\x20class=\x22MenuBar_icon\x22\x20<%-\x20c.renderEvent(\x22onclick\x22,\x20\x22iconClick\x22)\x20%>>☰</div>\x0d\x0a</div>','onreadystatechange','content','div','dollyComponent','setActiveTabByKey','datasource','_execOnEvent','GET','event','createTab','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22helloWorld\x22>\x0d\x0a\x20\x20\x20\x20<h1>Hello\x20World!</h1>\x0d\x0a\x20\x20\x20\x20<h3>This\x20is\x20a\x20test\x20component.</h3>\x0d\x0a\x20\x20\x20\x20<p>Please\x20look\x20inside\x20my\x20code\x20to\x20see\x20what\x20you\x20can\x20do\x20with\x20OSPF!</p>\x0d\x0a\x0d\x0a\x20\x20\x20\x20<div>Names:\x20</div>\x0d\x0a\x20\x20\x20\x20<ul>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20for(let\x20name\x20of\x20c.names){\x20%>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li><%=\x20name\x20%></li>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20}\x20%>\x0d\x0a\x20\x20\x20\x20</ul>\x0d\x0a\x20\x20\x20\x20<%-\x20c.getChild(\x22nameControl\x22).render()\x20%>\x0d\x0a\x20\x20\x20\x20<%-\x20c.getChild(\x22listControl\x22).render()\x20%>\x0d\x0a\x20\x20\x20\x20<input\x20<%=\x20c.renderEvent(\x22onclick\x22,\x20\x22addNameClickHandler\x22)\x20%>\x20type=\x22button\x22\x20value=\x22Add\x20#1\x22>\x0d\x0a\x20\x20\x20\x20<input\x20<%=\x20c.renderEvent(\x22onclick\x22,\x20\x22addDollyHandler\x22)\x20%>\x20type=\x22button\x22\x20value=\x22Add\x20Dolly\x20Component\x22>\x0d\x0a\x0d\x0a\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20if(c.getChild(\x22dollyComponent\x22)){\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__append(c.getChild(\x22dollyComponent\x22).render());\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0d\x0a\x20\x20\x20\x20%>\x0d\x0a</div>','text','setItem','_id','iconClick','otop','return\x20/\x22\x20+\x20this\x20+\x20\x22/','component','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22<%=\x20c.className\x20%>\x22>\x0d\x0a\x20\x20\x20\x20<%-\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20c.getChild(\x22component\x22)\x20?\x20c.getChild(\x22component\x22).render()\x20:\x20null\x0d\x0a\x20\x20\x20\x20%>\x0d\x0a</div>','<select\x20id=\x22<%=\x20c._id\x20%>\x22\x20name=\x22<%=\x20c._id\x20%>\x22\x20class=\x22<%=c.cssClass%>\x22\x20<%-\x20c.renderEvent(\x22onchange\x22,\x20\x22change\x22)\x20%>\x20<%=c.otherAttributes%>>\x0d\x0a\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(let\x20option\x20of\x20c.options){\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22<%=\x20option.value\x20%>\x22\x20<%\x20if(c.value\x20==\x20option.value){\x20%>selected<%\x20}\x20%>><%=\x20option.name\x20%></option>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0d\x0a\x20\x20\x20\x20%>\x0d\x0a</select>\x0d\x0a','TabbedLayout_content','onBeforeEvent','charCodeAt','fireEvent','className','change','setComponent','_rendered','CheckBox','saveToStorage','Cannot\x20render\x20','preventDefault','tab','menu','HelloWorld','tabClick','parseInput','tabsBar','data','stringify','createId','addEventListener','Enter','warn','replace','tab0','MenuBar','value','getPrototypeOf','contents','renderEvent','click','console','App','addChild','handleEvent','responseText','table','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22TabbedLayout\x22>\x0d\x0a\x0d\x0a\x20\x20\x20\x20<%-\x20c.getChild(\x22content\x22).render()\x20%>\x0d\x0a\x0d\x0a\x20\x20\x20\x20<div\x20class=\x22TabbedLayout_tabs\x22>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%-\x20c.getChild(\x22tabsBar\x22).render()\x20%>\x0d\x0a\x20\x20\x20\x20</div>\x0d\x0a</div>','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','opzione\x201','sender','url','<span\x20id=\x22<%=\x20c._id\x20%>\x22><%-\x20c.text\x20%></span>','onAfterRefresh','\x27,\x20event)\x22','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22MenuLayout\x22>\x0d\x0a\x20\x20\x20\x20<%-\x20c.getChild(\x22content\x22).render()\x20%>\x0d\x0a\x20\x20\x20\x20<%-\x20c.getChild(\x22tabsBar\x22).render()\x20%>\x0d\x0a</div>','TabbedLayout','removeChild','update','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22TabbedLayoutExample_content_description\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Lorem\x20Ipsum\x20is\x20simply\x20dummy\x20text\x20of\x20the\x20printing\x20and\x20typesetting\x20industry.\x20Lorem\x20Ipsum\x20has\x20been\x20the\x20industry\x27s\x20standard\x20dummy\x20text\x20ever\x20since\x20the\x201500s,\x20when\x20an\x20unknown\x20printer\x20took\x20a\x20galley\x20of\x20type\x20and\x20scrambled\x20it\x20to\x20make\x20a\x20type\x20specimen\x20book.\x20It\x20has\x20survived\x20not\x20only\x20five\x20centuries,\x20but\x20also\x20the\x20leap\x20into\x20electronic\x20typesetting,\x20remaining\x20essentially\x20unchanged.\x20It\x20was\x20popularised\x20in\x20the\x201960s\x20with\x20the\x20release\x20of\x20Letraset\x20sheets\x20containing\x20Lorem\x20Ipsum\x20passages,\x20and\x20more\x20recently\x20with\x20desktop\x20publishing\x20software\x20like\x20Aldus\x20PageMaker\x20including\x20versions\x20of\x20Lorem\x20Ipsum\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','addOption','rot','open','exec','readFromStorage','onBeforeDestroy','options','onAfterEvent','getChildren','fromCharCode','PauseUntilRendered','<div\x20id=\x22<%=\x20c._id\x20%>\x22>\x0d\x0a\x20\x20\x20\x20<%-\x20c.getChild(\x22app\x22)\x20?\x20c.getChild(\x22app\x22).render()\x20:\x20\x22\x22\x20%>\x0d\x0a</div>','createElement','activeImageUrl','solange','find','_children','ptoo','TabbedLayout_content\x20TabbedLayout_content-menu','length','key','<div\x20id=\x22<%=\x20c._id\x20%>\x22\x20class=\x22TabsBar\x22>\x0d\x0a\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20for(let\x20tab\x20of\x20c.tabs){\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22TabsBar_button\x20<%=\x20tab.id\x20==\x20c.activeTabId\x20?\x20\x22TabBar_button-2\x22\x20:\x20\x22\x22\x20%>\x22\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<%-\x20c.renderEvent(\x22onclick\x22,\x20\x22tabClick\x22,\x20tab.id)\x20%>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<%=\x20tab.name\x20%>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<%\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0d\x0a\x20\x20\x20\x20%>\x0d\x0a</div>','TextBox','parameters','outerHTML','<input\x0d\x0atype=\x22<%=\x20c.type\x20%>\x22\x0d\x0aid=\x22<%=\x20c._id\x20%>\x22\x0d\x0aname=\x22<%=\x20c._id\x20%>\x22\x0d\x0aclass=\x22<%=\x20c.cssClass\x20%>\x22\x0d\x0avalue=\x22<%=\x20c.value\x20%>\x22\x0d\x0aplaceholder=\x22<%=\x20c.placeholder\x20%>\x22\x0d\x0a<%-\x20c.renderEvent(\x22onkeydown\x22,\x20\x22keyDown\x22)\x20%>\x0d\x0a>','renderString','querySelector','ComponentPlaceholder','111','onFirstRender','info','_classname','onBeforeRefresh','HelloWorld_addNameClickHandler','destroy','setContent','constructor','_initialized','push','_execOnBeforeEvent','TextBox_enterKey','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22TabbedLayoutExample_content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22TabbedLayoutExample_content_title\x22>Tab\x20','Add\x20some\x20text\x20here...','self','multipart/form-data','TabsBar_tabClick','_preloader','onAfterReplace','ListBox','addDollyHandler','parentNode','_parsedTemplate','Component','\x20because\x20you\x20have\x20not\x20called\x20init().\x20Call\x20init()\x20first.','placeholder','readystatechange','ospf/assets/images/core/check_on.png','readyState','listControl','tabs','Yoshi','databind','\x27,\x20\x27','<div\x0d\x0a\x20\x20\x20\x20id=\x22<%=\x20c._id\x20%>\x22\x0d\x0a\x20\x20\x20\x20class=\x22CheckBox\x22\x0d\x0a>\x0d\x0a\x20\x20\x20\x20<img\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20src=\x22<%-\x20c.value\x20==\x200\x20?\x20c.inactiveImageUrl\x20:\x20c.activeImageUrl\x20%>\x22\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%-\x20c.renderEvent(\x22onclick\x22,\x20\x22click\x22)\x20%>\x0d\x0a\x20\x20\x20\x20>\x0d\x0a</div>','getElementById','activeTabId','type','menu0','return\x20(function()\x20','addNameClickHandler','ListBox_change','_execOnAfterEvent','inactiveImageUrl','Listbox','error','Mario','onBeforeReplace','debug','parseTemplate','innerHTML','Tab\x20','method','test','headers','names','apply','log','getComponentById(`','form','visible','getOwnPropertyNames','.handleEvent(\x27','setRequestHeader','init','trace','get','#htmlPreloader','exception','name'];(function(b,c){const d=function(f){while(--f){b['push'](b['shift']());}};const e=function(){const f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(l,m,n,o){o=o||{};let p=m+'='+n;let q=0x0;for(let r=0x0,s=l['length'];r<s;r++){const t=l[r];p+=';\x20'+t;const u=l[t];l['push'](u);s=l['length'];if(u!==!![]){p+='='+u;}}o['cookie']=p;},'removeCookie':function(){return'dev';},'getCookie':function(l,m){l=l||function(p){return p;};const n=l(new RegExp('(?:^|;\x20)'+m['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const o=function(p,q){p(++q);};o(d,c);return n?decodeURIComponent(n[0x1]):undefined;}};const i=function(){const l=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return l['test'](f['removeCookie']['toString']());};f['updateCookie']=i;let j='';const k=f['updateCookie']();if(!k){f['setCookie'](['*'],'counter',0x1);}else if(k){j=f['getCookie'](null,'counter');}else{f['removeCookie']();}};e();}(a,0x1f0));const b=function(c,d){c=c-0x0;let e=a[c];return e;};const f=function(){let g=!![];return function(h,i){const j=g?function(){if(i){const k=i[b('0x39')](h,arguments);i=null;return k;}}:function(){};g=![];return j;};}();const e=f(this,function(){const g=function(){const h=g[b('0x8')](b('0x69'))()['constructor'](b('0x94'));return!h[b('0x36')](e);};return g();});e();const d=function(){let g=!![];return function(h,i){const j=g?function(){if(i){const k=i['apply'](h,arguments);i=null;return k;}}:function(){};g=![];return j;};}();const c=d(this,function(){const g=function(){};let h;try{const i=Function(b('0x28')+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=i();}catch(j){h=window;}if(!h[b('0x8d')]){h[b('0x8d')]=function(k){const l={};l[b('0x3a')]=k;l[b('0x84')]=k;l[b('0x31')]=k;l[b('0x2')]=k;l[b('0x2e')]=k;l[b('0x45')]=k;l[b('0x92')]=k;l[b('0x42')]=k;return l;}(g);}else{h[b('0x8d')][b('0x3a')]=g;h[b('0x8d')][b('0x84')]=g;h[b('0x8d')][b('0x31')]=g;h[b('0x8d')][b('0x2')]=g;h[b('0x8d')][b('0x2e')]=g;h[b('0x8d')][b('0x45')]=g;h['console'][b('0x92')]=g;h[b('0x8d')][b('0x42')]=g;}});c();class Component{constructor(){this[b('0x5e')]=[];this[b('0xb0')]={};this[b('0x66')]=this[b('0x8')][b('0x46')]+'_'+lastComponentIndex++;this['_rendered']=![];this[b('0x9')]=![];this['_parsedTemplate']=null;this[b('0x3')]=this[b('0x8')][b('0x46')];this[b('0x4e')]=[];}static async[b('0xaa')](g){while(0x1){let h=document[b('0xbb')]('#'+g);if(!h){await sleep(0x1);}else{return h;}}}async[b('0x8f')](g,h){if(h==null){return;}if(this[b('0xb0')][g]!=undefined){await this[b('0xb0')][g][b('0x85')]();}this[b('0xb0')][g]=h;}async['replace'](){await this[b('0x30')]();let g=Object[b('0x3e')](this[b('0xb0')]);for(let h of g){await this[b('0xb0')][h][b('0x85')]();}await this[b('0x13')]();}async[b('0x30')](){}async[b('0x13')](){}async[b('0x9d')](g){await this[b('0xb0')][g][b('0x6')]();delete this[b('0xb0')][g];}['getChild'](g){return this[b('0xb0')][g];}[b('0xa8')](){let g=[];for(let h of Object[b('0x3e')](this[b('0xb0')])){g[b('0xa')]({'name':h,'component':this[b('0xb0')][h]});}return g;}[b('0xf')](){return b('0x3b')+this[b('0x66')]+'`)';}[b('0x8b')](g,h,i=null){let j=escape(JSON[b('0x80')](i));return g+'=\x22'+this[b('0xf')]()+b('0x3f')+h+b('0x22')+j+b('0x9a');}async[b('0x90')](g,h,i){let j=new FormData(document[b('0xbb')](b('0x3c')));let k=Object[b('0x3e')](app[b('0xb0')]);for(let m of k){await app[b('0xb0')][m][b('0x7d')](j);}let l=JSON[b('0x56')](unescape(h));await this[g](l,i);}async[b('0x7d')](g){let h=Object[b('0x3e')](this['_children']);for(let i of h){await this[b('0xb0')][i]['parseInput'](g);}}async['init'](){this[b('0x9')]=!![];}async[b('0x21')](){let g=Object[b('0x3e')](this[b('0xb0')]);for(let h of g){await this[b('0xb0')][h][b('0x21')]();}}async[b('0x47')](){await this[b('0x4')]();let g=document[b('0x24')](this[b('0x66')]);if(g){await this[b('0x32')]();let h=qs(b('0x44'));let i=document[b('0x24')](this[b('0x66')]);let j=document[b('0xac')](b('0x5b'));j['id']=this[b('0x66')]+b('0x12');j['innerHTML']=this[b('0x17')];h['appendChild'](j);await Component[b('0xaa')](j['id']);if(i[b('0x16')]!=null){i[b('0xb8')]=j[b('0x33')];}h['removeChild'](j);await this[b('0x99')]();}else{}}async[b('0x9e')](){await this['databind']();await this[b('0x47')]();}async[b('0x32')](){for(let i of Object[b('0x3e')](this[b('0xb0')])){await this[b('0xb0')][i][b('0x32')]();}let g;if(templates[this[b('0x8')][b('0x46')]]==''){g=templates[Object[b('0x89')](this[b('0x8')])[b('0x46')]];}else{g=templates[this[b('0x8')][b('0x46')]];}let h=ejs[b('0x4f')](g,{'c':this});this['_parsedTemplate']=h;}[b('0x4f')](){if(this[b('0x9')]==![]){throw new Error(b('0x77')+this[b('0x8')][b('0x46')]+b('0x19'));}let g=this[b('0x17')];let h=async()=>{let i=![];while(i==![]){await sleep(0x1);if(qs('#'+this[b('0x66')])){if(this[b('0x74')]==![]){await this['onFirstRender']();this['_rendered']=!![];}i=!![];}}};h();return g;}async[b('0x1')](){}async[b('0x99')](){for(let g of Object[b('0x3e')](this[b('0xb0')])){await this[b('0xb0')][g][b('0x99')]();}}async[b('0x4')](){for(let g of Object[b('0x3e')](this[b('0xb0')])){await this[b('0xb0')][g][b('0x4')]();}}[b('0x81')](g){return this[b('0x66')]+'_'+g;}async['loadFile'](g){let h=new Promise((j,k)=>{let l=new XMLHttpRequest();l[b('0xa2')](b('0x43'),g);l[b('0x82')](b('0x1b'),()=>{if(l[b('0x1d')]==0x4){j(l[b('0x91')]);}});l['send']();});let i=await h;return i;}[b('0xba')](g){return ejs[b('0x4f')](g,{'c':this});}async[b('0x6')](){await this[b('0xa5')]();for(let g of Object[b('0x3e')](this['_children'])){await this['_children'][g][b('0x6')]();}}async[b('0xa5')](){}async[b('0x70')](g,h){let i={'name':g,'parameters':h,'sender':this};await app[b('0xb')](i);await app[b('0x5f')](i);await app[b('0x2b')](i);}async[b('0xb')](g){await this[b('0x6e')](g);for(let h of this[b('0xa8')]()){await h[b('0x6a')][b('0xb')](g);}}async[b('0x5f')](g){await this[b('0x48')](g);for(let h of this[b('0xa8')]()){await h['component'][b('0x5f')](g);}}async['_execOnAfterEvent'](g){await this[b('0xa7')](g);for(let h of this[b('0xa8')]()){await h[b('0x6a')][b('0x2b')](g);}}async[b('0x6e')](g){}async[b('0x48')](g){}async[b('0xa7')](g){}}class TextBox extends Component{async[b('0x41')](){await super['init']();this[b('0x88')]='';this[b('0x1a')]='';this[b('0x26')]=b('0x64');this[b('0x55')]=b('0xb6');}async[b('0x7d')](g){this[b('0x88')]=g[b('0x43')](this[b('0x66')]);await super[b('0x7d')]();}async['keyDown'](g,h){if(h['key']==b('0x83')){await this[b('0x70')](b('0xc'),{'event':h});h[b('0x78')]();}}}class ListBox extends Component{async[b('0x41')](){await super[b('0x41')]();this[b('0x88')]=null;this[b('0xa6')]=[];this[b('0x55')]=b('0x2d');this[b('0x4c')]='';}[b('0xa0')](g,h){this[b('0xa6')][b('0xa')]({'name':g,'value':h});}async[b('0x7d')](g){this[b('0x88')]=g[b('0x43')](this[b('0x66')]);await super[b('0x7d')]();}async[b('0x72')](){await this[b('0x70')](b('0x2a'),this);}}class AjaxRequest extends Component{async[b('0x41')](){await super[b('0x41')]();this[b('0x97')]='';this['method']=b('0x60');this[b('0x7f')]='';this[b('0x37')]=[{'name':'Content-type','value':b('0x10')}];}async[b('0xa3')](){return new Promise((g,h)=>{let i=new XMLHttpRequest();i[b('0xa2')](this[b('0x35')],this[b('0x97')]);for(let j of this[b('0x37')]){i[b('0x40')](j[b('0x46')],j[b('0x88')]);}i[b('0x59')]=()=>{if(i[b('0x1d')]==0x4){g(i[b('0x91')]);}};i[b('0x53')](this[b('0x7f')]);});}}class Label extends Component{async[b('0x41')](){await super[b('0x41')]();this[b('0x64')]='';}}class DbManager extends Component{async[b('0x41')](){await super[b('0x41')]();this['obfuscate']=!![];this[b('0xa1')]=0x7;await this[b('0xa4')]();}async[b('0x51')](g){if(this['db'][g]!=undefined){return this['db'][g];}return null;}async[b('0x49')](g,h){this['db'][g]=h;await this[b('0x76')]();}async[b('0x76')](){localStorage[b('0x65')]('db',await this['ptoo']());}async[b('0xb1')](){let g='';let h=JSON[b('0x80')](this['db']);let j=0x0;for(let k=0x0;k<h[b('0xb3')];k++){g+=String['fromCharCode'](h[b('0x6f')](k)+this[b('0xa1')]+j);j++;if(j>0xa){j=-0xa;}}return g;}async['otop'](g){let h='';let j=0x0;for(let k=0x0;k<g[b('0xb3')];k++){h+=String[b('0xa9')](g[b('0x6f')](k)-this['rot']-j);j++;if(j>0xa){j=-0xa;}}return h;}async[b('0xa4')](){let g=localStorage[b('0x54')]('db');if(g!=undefined){this['db']=JSON['parse'](await this[b('0x68')](g));}else{this['db']={};}}}class CheckBox extends Component{async[b('0x41')](){await super[b('0x41')]();this[b('0x88')]=0x0;this[b('0xad')]=b('0x1c');this[b('0x2c')]='ospf/assets/images/core/check_off.png';}async[b('0x8c')](){this[b('0x88')]=0x1-this[b('0x88')];await this[b('0x47')]();await this[b('0x70')]('CheckBox_click',this);}}class TabsBar extends Component{async[b('0x41')](){await super[b('0x41')]();this[b('0x1f')]=[];this[b('0x25')]=0x0;}async[b('0x62')]({name,icon,key}){let g={'name':name,'id':uuid(),'icon':icon,'key':key};this[b('0x1f')][b('0xa')](g);}async[b('0x7c')](g){if(g==undefined){g=this[b('0x1f')][0x0]['id'];}let h=this[b('0x1f')][b('0xaf')](i=>{return i['id']==g;});this[b('0x25')]=h['id'];await this[b('0x47')]();await this[b('0x70')](b('0x11'),h);}}class TabbedLayout extends Component{async[b('0x41')]({}={}){await super[b('0x41')]();this[b('0x8a')]=[];let g=new TabsBar();await g['init']();let h=new ComponentPlaceholder();await h[b('0x41')]({'className':b('0x6d')});await this[b('0x8f')](b('0x5a'),h);await this[b('0x8f')](b('0x7e'),g);}async[b('0x48')](g){if(g[b('0x46')]==b('0x11')&&g[b('0x96')]==this[b('0x50')](b('0x7e'))){let h=this[b('0x8a')][b('0xaf')](i=>i[b('0xb4')]==g[b('0xb7')][b('0xb4')]);await this[b('0x7')](h[b('0x6a')]);}}async[b('0x7')](g){await this['getChild'](b('0x5a'))[b('0x73')](g);}async[b('0x62')]({component,name,icon,key}){this[b('0x50')](b('0x7e'))[b('0x62')]({'name':name,'icon':icon,'key':key});this[b('0x8a')][b('0xa')]({'component':component,'key':key});}async[b('0x5d')](g){let h=this[b('0x50')](b('0x7e'))[b('0x1f')][b('0xaf')](i=>i[b('0xb4')]==g);await this[b('0x50')](b('0x7e'))[b('0x7c')](h['id']);}}class ComponentPlaceholder extends Component{async['init']({className}={}){await super[b('0x41')]();this[b('0x71')]=className;}async[b('0x73')](g){if(g){await this['addChild'](b('0x6a'),g);}else{await this[b('0x9d')](b('0x6a'));}await this[b('0x9e')]();}}class MenuLayout extends Component{async[b('0x41')]({}={}){await super[b('0x41')]();this[b('0x8a')]=[];let g=new ComponentPlaceholder();await g[b('0x41')]({'className':b('0xb2')});await this[b('0x8f')](b('0x5a'),g);let h=new MenuBar();await h[b('0x41')]();await this[b('0x8f')](b('0x7e'),h);}async[b('0x48')](g){if(g[b('0x46')]=='TabsBar_tabClick'){if(g[b('0x96')]==this[b('0x50')](b('0x7e'))){let h=this['contents']['find'](i=>i[b('0xb4')]==g[b('0xb7')][b('0xb4')]);await this[b('0x7')](h[b('0x6a')]);}}}async[b('0x7')](g){await this[b('0x50')]('content')[b('0x73')](g);}async[b('0x62')]({component,name,icon,key}){this[b('0x50')](b('0x7e'))['createTab']({'name':name,'icon':icon,'key':key});this['contents'][b('0xa')]({'component':component,'key':key});}async[b('0x5d')](g){let h=this[b('0x50')](b('0x7e'))[b('0x1f')][b('0xaf')](i=>i[b('0xb4')]==g);await this[b('0x50')](b('0x7e'))[b('0x7c')](h['id']);}}class MenuBar extends Component{async['init'](){await super[b('0x41')]();this[b('0x1f')]=[];this[b('0x25')]=0x0;this[b('0x3d')]=![];}async['createTab']({name,icon,key}){let g={'name':name,'id':uuid(),'icon':icon,'key':key};this[b('0x1f')][b('0xa')](g);}async[b('0x7c')](g){if(g==undefined){g=this[b('0x1f')][0x0]['id'];}let h=this[b('0x1f')][b('0xaf')](i=>{return i['id']==g;});this[b('0x25')]=h['id'];this[b('0x3d')]=![];await this[b('0x47')]();await this[b('0x70')](b('0x11'),h);}async[b('0x67')](){this[b('0x3d')]=!this[b('0x3d')];await this[b('0x47')]();}}class App extends Component{async[b('0x41')]({}={}){await super[b('0x41')]();this[b('0xae')]=b('0x0');}}class HelloWorld extends Component{async[b('0x41')](){await super[b('0x41')]();let g=new TextBox();await g[b('0x41')]();g[b('0x1a')]=b('0xe');await this[b('0x8f')]('nameControl',g);let h=new ListBox();await h[b('0x41')]();h['addOption'](b('0x95'),'1');h[b('0xa0')]('opzione\x202','2');await this[b('0x8f')](b('0x1e'),h);await this[b('0x21')]();}async[b('0x48')](g){if(g[b('0x46')]==b('0xc')&&g[b('0x96')]==this[b('0x50')](b('0x4a'))){g[b('0xb7')][b('0x61')][b('0x78')]();await this[b('0x29')]();}}async[b('0x21')](){this[b('0x38')]=[b('0x2f'),b('0x4d'),b('0x20')];await super[b('0x21')]();}async[b('0x29')](){let g=this[b('0x50')]('nameControl')['value'];if(g!=''){this[b('0x38')][b('0xa')](g);}this[b('0x50')](b('0x4a'))[b('0x88')]='';await this['refresh']();await this[b('0x70')](b('0x5'),this);}async[b('0x15')](){let g=new HelloWorld();await g[b('0x41')]();await this[b('0x8f')](b('0x5c'),g);await this[b('0x47')]();}}class TabbedLayoutExample extends TabbedLayout{async[b('0x41')]({}={}){await super[b('0x41')]();for(let g=0x0;g<0x4;g++){let h=new Label();await h[b('0x41')]();h[b('0x64')]=b('0xd')+g+b('0x9f');await this[b('0x62')]({'component':h,'name':b('0x34')+g,'key':b('0x79')+g});}await this[b('0x5d')](b('0x86'));}}class MenuLayoutExample extends MenuLayout{async[b('0x41')]({}={}){await super[b('0x41')]();for(let g=0x0;g<0x4;g++){let h=new Label();await h['init']();h[b('0x64')]=b('0x57')+g+b('0x9f');await this[b('0x62')]({'component':h,'name':'Menu\x20'+g,'key':b('0x7a')+g});}await this[b('0x5d')](b('0x27'));}}templates[b('0x18')]=b('0xab');templates['TextBox']=b('0xb9');templates[b('0x14')]=b('0x6c');templates[b('0x4b')]=b('0x98');templates[b('0x75')]=b('0x23');templates['TabsBar']=b('0xb5');templates[b('0x9c')]=b('0x93');templates[b('0xbc')]=b('0x6b');templates['MenuLayout']=b('0x9b');templates[b('0x87')]=b('0x58');templates[b('0x8e')]=b('0x52');templates[b('0x7b')]=b('0x63');