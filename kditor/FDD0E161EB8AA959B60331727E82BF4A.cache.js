(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,rv='com.google.gwt.core.client.',sv='com.google.gwt.lang.',tv='com.google.gwt.user.client.',uv='com.google.gwt.user.client.impl.',vv='com.google.gwt.user.client.ui.',wv='com.google.gwt.user.client.ui.impl.',xv='com.kditor.client.',yv='com.kditor.client.bean.',zv='com.kditor.client.editor.',Av='com.kditor.client.editor.impl.',Bv='com.kditor.client.handler.',Cv='com.kditor.client.helper.',Dv='com.kditor.client.helper.impl.',Ev='com.kditor.client.transliterator.',Fv='com.kditor.client.util.',aw='java.lang.',bw='java.util.';function qv(){}
function vo(a){return this===a;}
function wo(){return fq(this);}
function xo(){return this.tN+'@'+this.hC();}
function to(){}
_=to.prototype={};_.eQ=vo;_.hC=wo;_.tS=xo;_.toString=function(){return this.tS();};_.tN=aw+'Object';_.tI=1;function o(a){return a==null?null:a.tN;}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=u());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=u());}
function u(){return ++v;}
var v=0;function hq(b,a){b.a=a;return b;}
function jq(){var a,b;a=o(this);b=this.a;if(b!==null){return a+': '+b;}else{return a;}}
function gq(){}
_=gq.prototype=new to();_.tS=jq;_.tN=aw+'Throwable';_.tI=3;_.a=null;function go(b,a){hq(b,a);return b;}
function fo(){}
_=fo.prototype=new gq();_.tN=aw+'Exception';_.tI=4;function zo(b,a){go(b,a);return b;}
function yo(){}
_=yo.prototype=new fo();_.tN=aw+'RuntimeException';_.tI=5;function x(c,b,a){zo(c,'JavaScript '+b+' exception: '+a);return c;}
function w(){}
_=w.prototype=new yo();_.tN=rv+'JavaScriptException';_.tI=6;function B(b,a){if(!wb(a,2)){return false;}return F(b,vb(a,2));}
function C(a){return s(a);}
function D(){return [];}
function E(){return {};}
function ab(a){return B(this,a);}
function F(a,b){return a===b;}
function bb(){return C(this);}
function db(){return cb(this);}
function cb(a){if(a.toString)return a.toString();return '[object]';}
function z(){}
_=z.prototype=new to();_.eQ=ab;_.hC=bb;_.tS=db;_.tN=rv+'JavaScriptObject';_.tI=7;function hb(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function jb(a,b,c){return a[b]=c;}
function kb(b,a){return b[a];}
function mb(b,a){return b[a];}
function lb(a){return a.length;}
function ob(e,d,c,b,a){return nb(e,d,c,b,0,lb(b),a);}
function nb(j,i,g,c,e,a,b){var d,f,h;if((f=kb(c,e))<0){throw new ro();}h=hb(new gb(),f,kb(i,e),kb(g,e),j);++e;if(e<a){j=up(j,1);for(d=0;d<f;++d){jb(h,d,nb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){jb(h,d,b);}}return h;}
function pb(f,e,c,g){var a,b,d;b=lb(g);d=hb(new gb(),b,e,c,f);for(a=0;a<b;++a){jb(d,a,mb(g,a));}return d;}
function qb(a,b,c){if(c!==null&&a.b!=0&& !wb(c,a.b)){throw new zn();}return jb(a,b,c);}
function gb(){}
_=gb.prototype=new to();_.tN=sv+'Array';_.tI=0;function tb(b,a){return !(!(b&&Ab[b][a]));}
function ub(a){return String.fromCharCode(a);}
function vb(b,a){if(b!=null)tb(b.tI,a)||zb();return b;}
function wb(b,a){return b!=null&&tb(b.tI,a);}
function xb(a){return a&65535;}
function zb(){throw new Fn();}
function yb(a){if(a!==null){throw new Fn();}return a;}
function Bb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var Ab;function Eb(a){if(wb(a,3)){return a;}return x(new w(),ac(a),Fb(a));}
function Fb(a){return a.message;}
function ac(a){return a.name;}
function cc(){cc=qv;Cc=ts(new rs());{wc=new ee();je(wc);}}
function dc(b,a){cc();ze(wc,b,a);}
function ec(a,b){cc();return ge(wc,a,b);}
function fc(){cc();return Be(wc,'div');}
function ic(b,a,d){cc();var c;c=p;{hc(b,a,d);}}
function hc(b,a,c){cc();var d;if(a===Bc){if(lc(b)==8192){Bc=null;}}d=gc;gc=b;try{c.E(b);}finally{gc=d;}}
function jc(b,a){cc();Ce(wc,b,a);}
function kc(a){cc();return qe(wc,a);}
function lc(a){cc();return De(wc,a);}
function mc(a){cc();re(wc,a);}
function nc(a){cc();return se(wc,a);}
function oc(b,a){cc();return he(wc,b,a);}
function pc(b,a){cc();return Ee(wc,b,a);}
function qc(a,b){cc();return Fe(wc,a,b);}
function rc(a){cc();return af(wc,a);}
function sc(a){cc();return te(wc,a);}
function tc(a){cc();return bf(wc,a);}
function uc(a){cc();return ue(wc,a);}
function vc(a){cc();return ve(wc,a);}
function xc(c,a,b){cc();xe(wc,c,a,b);}
function yc(b,a){cc();return ke(wc,b,a);}
function zc(a){cc();var b,c;c=true;if(Cc.b>0){b=yb(xs(Cc,Cc.b-1));if(!(c=null.nb())){jc(a,true);mc(a);}}return c;}
function Ac(b,a){cc();cf(wc,b,a);}
function Dc(a,b,c){cc();df(wc,a,b,c);}
function Ec(a,b){cc();ef(wc,a,b);}
function Fc(a,b){cc();ff(wc,a,b);}
function ad(b,a,c){cc();gf(wc,b,a,c);}
function bd(a,b){cc();me(wc,a,b);}
function cd(a){cc();return ne(wc,a);}
var gc=null,wc=null,Bc=null,Cc;function fd(a){if(wb(a,4)){return ec(this,vb(a,4));}return B(Bb(this,dd),a);}
function gd(){return C(Bb(this,dd));}
function hd(){return cd(this);}
function dd(){}
_=dd.prototype=new z();_.eQ=fd;_.hC=gd;_.tS=hd;_.tN=tv+'Element';_.tI=8;function ld(a){return B(Bb(this,id),a);}
function md(){return C(Bb(this,id));}
function nd(){return nc(this);}
function id(){}
_=id.prototype=new z();_.eQ=ld;_.hC=md;_.tS=nd;_.tN=tv+'Event';_.tI=9;function td(){td=qv;vd=ts(new rs());{ud();}}
function ud(){td();zd(new pd());}
var vd;function rd(){while((td(),vd).b>0){yb(xs((td(),vd),0)).nb();}}
function sd(){return null;}
function pd(){}
_=pd.prototype=new to();_.eb=rd;_.fb=sd;_.tN=tv+'Timer$1';_.tI=10;function yd(){yd=qv;Ad=ts(new rs());ce=ts(new rs());{Ed();}}
function zd(a){yd();us(Ad,a);}
function Bd(){yd();var a,b;for(a=Eq(Ad);xq(a);){b=vb(yq(a),5);b.eb();}}
function Cd(){yd();var a,b,c,d;d=null;for(a=Eq(Ad);xq(a);){b=vb(yq(a),5);c=b.fb();{d=c;}}return d;}
function Dd(){yd();var a,b;for(a=Eq(ce);xq(a);){b=yb(yq(a));null.nb();}}
function Ed(){yd();__gwt_initHandlers(function(){be();},function(){return ae();},function(){Fd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Fd(){yd();var a;a=p;{Bd();}}
function ae(){yd();var a;a=p;{return Cd();}}
function be(){yd();var a;a=p;{Dd();}}
var Ad,ce;function ze(c,b,a){b.appendChild(a);}
function Be(b,a){return $doc.createElement(a);}
function Ce(c,b,a){b.cancelBubble=a;}
function De(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ee(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function Fe(d,a,b){var c=a[b];return c==null?null:String(c);}
function af(b,a){return a.__eventBits||0;}
function bf(c,a){var b=a.innerHTML;return b==null?null:b;}
function cf(c,b,a){b.removeChild(a);}
function df(c,a,b,d){a[b]=d;}
function ef(c,a,b){a.__listener=b;}
function ff(c,a,b){if(!b){b='';}a.innerHTML=b;}
function gf(c,b,a,d){b.style[a]=d;}
function de(){}
_=de.prototype=new to();_.tN=uv+'DOMImpl';_.tI=0;function qe(b,a){return a.target||null;}
function re(b,a){a.preventDefault();}
function se(b,a){return a.toString();}
function te(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function ue(c,a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b||null;}
function ve(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function we(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){ic(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!zc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)ic(b,a,c);};$wnd.__captureElem=null;}
function xe(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function ye(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function oe(){}
_=oe.prototype=new de();_.tN=uv+'DOMImplStandard';_.tI=0;function ge(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function he(d,c,e){var b=0,a=c.firstChild;while(a){if(a.isSameNode(e)){return b;}if(a.nodeType==1){++b;}a=a.nextSibling;}return -1;}
function je(a){we(a);ie(a);}
function ie(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function ke(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function me(c,b,a){ye(c,b,a);le(c,b,a);}
function le(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function ne(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function ee(){}
_=ee.prototype=new oe();_.tN=uv+'DOMImplMozilla';_.tI=0;function gh(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function hh(b,a){if(b.f!==null){gh(b,b.f,a);}b.f=a;}
function ih(b,a){kh(b.f,a);}
function jh(b,a){bd(b.f,a|rc(b.f));}
function kh(a,b){Dc(a,'className',b);}
function lh(){if(this.f===null){return '(null handle)';}return cd(this.f);}
function eh(){}
_=eh.prototype=new to();_.tS=lh;_.tN=vv+'UIObject';_.tI=0;_.f=null;function Eh(a){if(a.d){throw jo(new io(),"Should only call onAttach when the widget is detached from the browser's document");}a.d=true;Ec(a.f,a);a.n();a.bb();}
function Fh(a){if(!a.d){throw jo(new io(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.db();}finally{a.o();Ec(a.f,null);a.d=false;}}
function ai(a){if(a.e!==null){nf(a.e,a);}else if(a.e!==null){throw jo(new io(),"This widget's parent does not implement HasWidgets");}}
function bi(b,a){if(b.d){Ec(b.f,null);}hh(b,a);if(b.d){Ec(a,b);}}
function ci(c,b){var a;a=c.e;if(b===null){if(a!==null&&a.d){c.F();}c.e=null;}else{if(a!==null){throw jo(new io(),'Cannot set a new parent without first clearing the old parent');}c.e=b;if(b.d){c.D();}}}
function di(){}
function ei(){}
function fi(){Eh(this);}
function gi(a){}
function hi(){Fh(this);}
function ii(){}
function ji(){}
function ki(a){bi(this,a);}
function mh(){}
_=mh.prototype=new eh();_.n=di;_.o=ei;_.D=fi;_.E=gi;_.F=hi;_.bb=ii;_.db=ji;_.hb=ki;_.tN=vv+'Widget';_.tI=11;_.d=false;_.e=null;function dg(b,a){ci(a,b);}
function fg(b,a){ci(a,null);}
function gg(){var a,b;for(b=this.z();rh(b);){a=sh(b);a.D();}}
function hg(){var a,b;for(b=this.z();rh(b);){a=sh(b);a.F();}}
function ig(){}
function jg(){}
function cg(){}
_=cg.prototype=new mh();_.n=gg;_.o=hg;_.bb=ig;_.db=jg;_.tN=vv+'Panel';_.tI=12;function qf(a){a.a=vh(new nh(),a);}
function rf(a){qf(a);return a;}
function sf(c,a,b){ai(a);wh(c.a,a);dc(b,a.f);dg(c,a);}
function uf(b,c){var a;if(c.e!==b){return false;}fg(b,c);a=c.f;Ac(vc(a),a);Ch(b.a,c);return true;}
function vf(){return Ah(this.a);}
function pf(){}
_=pf.prototype=new cg();_.z=vf;_.tN=vv+'ComplexPanel';_.tI=13;function kf(a){rf(a);a.hb(fc());ad(a.f,'position','relative');ad(a.f,'overflow','hidden');return a;}
function lf(a,b){sf(a,b,a.f);}
function nf(b,c){var a;a=uf(b,c);if(a){of(c.f);}return a;}
function of(a){ad(a,'left','');ad(a,'top','');ad(a,'position','');}
function jf(){}
_=jf.prototype=new pf();_.tN=vv+'AbsolutePanel';_.tI=14;function yf(){yf=qv;ni(),pi;}
function xf(a){ni(),pi;return a;}
function zf(b,a){switch(lc(a)){case 1:break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function Af(b,a){bi(b,a);jh(b,7041);}
function Bf(a){zf(this,a);}
function Cf(a){Af(this,a);}
function wf(){}
_=wf.prototype=new mh();_.E=Bf;_.hb=Cf;_.tN=vv+'FocusWidget';_.tI=15;function pg(){pg=qv;ni(),pi;}
function ng(a){a.b=si(new ri());}
function og(a){ni(),pi;xf(a);ng(a);hk(a,a.b.b);ih(a,'gwt-RichTextArea');return a;}
function qg(a){Eh(a);a.b.w();}
function rg(){qg(this);}
function sg(a){switch(lc(a)){case 4:case 8:case 64:case 16:case 32:break;default:zf(this,a);}}
function tg(){Fh(this);this.b.lb();}
function kg(){}
_=kg.prototype=new wf();_.D=rg;_.E=sg;_.F=tg;_.tN=vv+'RichTextArea';_.tI=16;function Ag(){Ag=qv;Fg=pu(new ut());}
function zg(b,a){Ag();kf(b);if(a===null){a=Bg();}b.hb(a);b.D();return b;}
function Cg(){Ag();return Dg(null);}
function Dg(c){Ag();var a,b;b=vb(vu(Fg,c),6);if(b!==null){return b;}a=null;if(Fg.c==0){Eg();}wu(Fg,c,b=zg(new ug(),a));return b;}
function Bg(){Ag();return $doc.body;}
function Eg(){Ag();zd(new vg());}
function ug(){}
_=ug.prototype=new jf();_.tN=vv+'RootPanel';_.tI=17;var Fg;function xg(){var a,b;for(b=xr(fs((Ag(),Fg)));Er(b);){a=vb(Fr(b),6);if(a.d){a.F();}}}
function yg(){return null;}
function vg(){}
_=vg.prototype=new to();_.eb=xg;_.fb=yg;_.tN=vv+'RootPanel$1';_.tI=18;function vh(b,a){b.a=ob('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[4],null);return b;}
function wh(a,b){zh(a,b,a.b);}
function yh(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function zh(d,e,a){var b,c;if(a<0||a>d.b){throw new lo();}if(d.b==d.a.a){c=ob('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[d.a.a*2],null);for(b=0;b<d.a.a;++b){qb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){qb(d.a,b,d.a[b-1]);}qb(d.a,a,e);}
function Ah(a){return ph(new oh(),a);}
function Bh(c,b){var a;if(b<0||b>=c.b){throw new lo();}--c.b;for(a=b;a<c.b;++a){qb(c.a,a,c.a[a+1]);}qb(c.a,c.b,null);}
function Ch(b,c){var a;a=yh(b,c);if(a==(-1)){throw new mv();}Bh(b,a);}
function nh(){}
_=nh.prototype=new to();_.tN=vv+'WidgetCollection';_.tI=0;_.a=null;_.b=0;function ph(b,a){b.b=a;return b;}
function rh(a){return a.a<a.b.b-1;}
function sh(a){if(a.a>=a.b.b){throw new mv();}return a.b.a[++a.a];}
function th(){return rh(this);}
function uh(){return sh(this);}
function oh(){}
_=oh.prototype=new to();_.u=th;_.B=uh;_.tN=vv+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function ni(){ni=qv;oi=mi(new li());pi=oi;}
function mi(a){ni();return a;}
function li(){}
_=li.prototype=new to();_.tN=wv+'FocusImpl';_.tI=0;var oi,pi;function cj(a){a.b=zi(a);return a;}
function ej(a){a.v();}
function fj(){bd(this.b,8189);}
function gj(){this.ab();}
function hj(){ej(this);}
function ij(){}
function qi(){}
_=qi.prototype=new to();_.v=fj;_.w=gj;_.ab=hj;_.lb=ij;_.tN=wv+'RichTextAreaImpl';_.tI=0;_.b=null;function wi(a){a.a=fc();}
function xi(a){cj(a);wi(a);return a;}
function zi(a){return $doc.createElement('iframe');}
function Bi(a){return a.a===null?Ai(a):tc(a.a);}
function Ai(a){return a.b.contentWindow.document.body.innerHTML;}
function Ci(b,a){b.b.contentWindow.document.body.innerHTML=a;}
function Di(b){var a=b.b;var c=a.contentWindow;c.removeEventListener('keydown',a.__gwt_handler,true);c.removeEventListener('keyup',a.__gwt_handler,true);c.removeEventListener('keypress',a.__gwt_handler,true);c.removeEventListener('mousedown',a.__gwt_handler,true);c.removeEventListener('mouseup',a.__gwt_handler,true);c.removeEventListener('mousemove',a.__gwt_handler,true);c.removeEventListener('mouseover',a.__gwt_handler,true);c.removeEventListener('mouseout',a.__gwt_handler,true);c.removeEventListener('click',a.__gwt_handler,true);c.removeEventListener('focus',a.__gwt_focusHandler,true);c.removeEventListener('blur',a.__gwt_blurHandler,true);a.__gwt_handler=null;a.__gwt_focusHandler=null;a.__gwt_blurHandler=null;}
function Ei(){var b=this.b;var c=b.contentWindow;b.__gwt_handler=function(a){if(b.__listener){b.__listener.E(a);}};b.__gwt_focusHandler=function(a){if(b.__gwt_isFocused){return;}b.__gwt_isFocused=true;b.__gwt_handler(a);};b.__gwt_blurHandler=function(a){if(!b.__gwt_isFocused){return;}b.__gwt_isFocused=false;b.__gwt_handler(a);};c.addEventListener('keydown',b.__gwt_handler,true);c.addEventListener('keyup',b.__gwt_handler,true);c.addEventListener('keypress',b.__gwt_handler,true);c.addEventListener('mousedown',b.__gwt_handler,true);c.addEventListener('mouseup',b.__gwt_handler,true);c.addEventListener('mousemove',b.__gwt_handler,true);c.addEventListener('mouseover',b.__gwt_handler,true);c.addEventListener('mouseout',b.__gwt_handler,true);c.addEventListener('click',b.__gwt_handler,true);c.addEventListener('focus',b.__gwt_focusHandler,true);c.addEventListener('blur',b.__gwt_blurHandler,true);}
function Fi(){var a=this;setTimeout(function(){a.b.contentWindow.document.designMode='On';a.ab();},1);}
function aj(){ej(this);if(this.a!==null){Ci(this,tc(this.a));this.a=null;}}
function bj(){var a;Di(this);a=Bi(this);this.a=fc();Fc(this.a,a);}
function vi(){}
_=vi.prototype=new qi();_.v=Ei;_.w=Fi;_.ab=aj;_.lb=bj;_.tN=wv+'RichTextAreaImplStandard';_.tI=0;function si(a){xi(a);return a;}
function ui(){var a=this;var b=a.b;b.onload=function(){b.onload=null;a.ab();b.contentWindow.onfocus=function(){b.contentWindow.onfocus=null;b.contentWindow.document.designMode='On';};};}
function ri(){}
_=ri.prototype=new vi();_.w=ui;_.tN=wv+'RichTextAreaImplMozilla';_.tI=0;function lj(b){var a;un();a=Bg();tn(a);}
function jj(){}
_=jj.prototype=new to();_.tN=xv+'Kditor';_.tI=0;function nj(){}
_=nj.prototype=new to();_.tN=xv+'TransliterationConstants_';_.tI=0;function rj(b,a){b.a=a;}
function sj(b,a){b.b=a;}
function pj(){}
_=pj.prototype=new to();_.tN=yv+'TransliterationAttributes';_.tI=0;_.a=null;_.b=null;function Aj(){Aj=qv;ni(),pi;}
function zj(c,b){var a,d;ni(),pi;xf(c);if(b===null){throw zo(new yo(),'Transliterable element must be non-null');}c.b=il(b);c.hb(c.b.a);d=fl(c.f);ak(c,d);a=wj(new vj(),c);ml(c.f,a);return c;}
function Bj(b,a){b.b.m(a);}
function Cj(b,a){return sk(b.b,a);}
function Dj(b,a){b.b.x(a);}
function Ej(b,a){return tk(b.b,a);}
function Fj(a,c){var b;b=gl(c);ak(a,b);}
function ak(c,d){var a,b;a=d.a;b=d.b;c.a=ol(a);c.c=pl(b);}
function bk(a){if(this.b.y(a)){al(this.a,a,this,this.c);}}
function uj(){}
_=uj.prototype=new wf();_.E=bk;_.tN=zv+'TransliterationEditor';_.tI=19;_.a=null;_.b=null;_.c=null;function wj(b,a){b.a=a;return b;}
function yj(a){Fj(this.a,vb(a,1));}
function vj(){}
_=vj.prototype=new to();_.cb=yj;_.tN=zv+'TransliterationEditor$1';_.tI=0;function sk(b,a){return tl(a);}
function tk(b,a){return vl(a);}
function uk(b,a){b.a=a;}
function vk(a){return yc(this.a,kc(a));}
function wk(a){uk(this,a);}
function qk(){}
_=qk.prototype=new to();_.y=vk;_.hb=wk;_.tN=Av+'TransliterationEditorImpl';_.tI=0;_.a=null;function kk(c,a,b){}
function lk(c,a,b){}
function mk(a){kk(this,this.a,a);}
function nk(a){lk(this,this.a,a);}
function ok(b){var a=this.a;var c=kc(b);return a.contentWindow.document.body==c;}
function pk(a){var b;b=ek(new dk(),this,a);uk(this,b.f);}
function ck(){}
_=ck.prototype=new qk();_.m=mk;_.x=nk;_.y=ok;_.hb=pk;_.tN=Av+'TransliterationEditorIframeImpl';_.tI=0;function fk(){fk=qv;ni(),pi;}
function ek(b,a,c){ni(),pi;b.a=c;og(b);ih(b,'');qg(b);return b;}
function gk(c,a){var b=c.b;b.b=a;}
function hk(b,a){Af(b,b.a);gk(b,b.a);}
function ik(a){hk(this,a);}
function dk(){}
_=dk.prototype=new kg();_.hb=ik;_.tN=Av+'TransliterationEditorIframeImpl$1$WrappingRichTextArea';_.tI=20;function zk(f,a,b){var e=a.value.substring(0,a.selectionStart-b);var d=a.value.substring(a.selectionEnd);var c=a.selectionStart-b;a.value=e+d;a.selectionStart=c;a.selectionEnd=c;}
function Ak(f,a,e){var d=a.value.substring(0,a.selectionStart);var c=a.value.substring(a.selectionEnd);var b=a.selectionStart+e.length;a.value=d+e+c;a.selectionStart=b;a.selectionEnd=b;}
function Bk(a){zk(this,this.a,a);}
function Ck(a){Ak(this,this.a,a);}
function xk(){}
_=xk.prototype=new qk();_.m=Bk;_.x=Ck;_.tN=Av+'TransliterationEditorTextBoxBaseImpl';_.tI=0;function Ek(a){a.b=0;a.a='';}
function al(e,b,a,f){var c,d;switch(lc(b)){case 1:{Ek(e);break;}case 512:case 128:case 256:{if(Ej(a,b)){Ek(e);}else{c=Cj(a,b);if(c>0){mc(b);d=f.kb(e.a+ub(c));if(d.a>1){Dj(a,d[1]);e.b=qp(d[1]);e.a=Fp(c);}else{Bj(a,e.b);Dj(a,d[0]);e.b=qp(d[0]);e.a+=ub(c);}}}break;}default:{break;}}}
function Dk(){}
_=Dk.prototype=new to();_.tN=Bv+'CharacterTransliterationHandler';_.tI=0;_.a='';_.b=0;function dl(){dl=qv;ql=new nj();jl=new wl();}
function el(g,c,f){dl();var a,d,e;e=sc(g);while(e!==null){try{d=pc(e,c);}catch(a){a=Eb(a);if(wb(a,11)){a;e=uc(e);continue;}else throw a;}if(d!==null){f.h(Bb(e,dd));}el(e,c,f);e=uc(e);}}
function fl(b){dl();var a;a=pc(b,'transliteration');return gl(a);}
function gl(b){dl();var a,c,d,e;d=kl(b);e=new pj();c=vb(vu(d,'language'),1);a=vb(vu(d,'algorithm'),1);rj(e,a);sj(e,c);return e;}
function hl(b,a){dl();var c,d,e;c=ts(new rs());el(b,a,c);d=ob('[Lcom.google.gwt.user.client.Element;',[0],[4],[c.b],null);for(e=0;e<d.a;e++){d[e]=Bb(vb(xs(c,e),4),dd);}return d;}
function il(a){dl();var b,c;c=null;b=wp(qc(a,'tagName'));if(mp('textarea',b)){c=new xk();}else if(mp('input',b)&&mp('text',wp(qc(a,'type')))){c=new xk();}else if(mp('iframe',b)){c=new ck();}else{throw zo(new yo(),"Transliteration of '"+b+"' is not supported");}c.hb(a);return c;}
function kl(a){dl();var b,c,d,e,f,g;e=pu(new ut());d=rp(xp(a),';');for(b=0;b<d.a;b++){f=rp(xp(d[b]),':');c=xp(f[0]);g=f.a>1?xp(f[1]):'';wu(e,c,g);}return e;}
function ll(a){dl();zl(jl,a);}
function ml(b,a){dl();yl(jl,b,'transliteration',a);}
function nl(b,a){dl();var c,d;d=vc(b);c=oc(d,b);Ac(d,b);lf(Cg(),a);xc(d,a.f,c);}
function ol(a){dl();var b;b=null;if(a===null||mp('',a)){b=new Dk();}else if(mp('character',a)){b=new Dk();}else{throw zo(new yo(),"Algorithm '"+a+"' is not supported");}return b;}
function pl(a){dl();var b;b=null;if(a===null||mp('',a)){b=new vm();}else if(mp('kannada',a)){b=hn(new ym());}else if(mp('devanagari',a)){b=nm(new El());}else{throw zo(new yo(),"Language '"+a+"' is not supported");}return b;}
var jl,ql;function sl(){sl=qv;ul=new Al();}
function tl(a){sl();return Cl(ul,a);}
function vl(a){sl();return Dl(ul,a);}
var ul;function yl(h,g,d,e){var f=function(b){var c=b.attrName;if(c==d){var a=g.getAttribute(d);e.cb(a);}};g.addEventListener('DOMAttrModified',f,false);}
function zl(b,a){if(a.onclick)a.addEventListener('click',a.onclick,false);if(a.ondblclick)a.addEventListener('dblclick',a.ondblclick,false);if(a.onmousedown)a.addEventListener('mousedown',a.onmousedown,false);if(a.onmouseup)a.addEventListener('mouseup',a.onmouseup,false);if(a.onmouseover)a.addEventListener('mouseover',a.onmouseover,false);if(a.onmouseout)a.addEventListener('mouseout',a.onmouseout,false);if(a.onmousemove)a.addEventListener('mousemove',a.onmousemove,false);if(a.onkeydown)a.addEventListener('keydown',a.onkeydown,false);if(a.onkeypress)a.addEventListener('keypress',a.onkeypress,false);if(a.onkeyup)a.addEventListener('keyup',a.onkeyup,false);if(a.onchange)a.addEventListener('change',a.onchange,false);if(a.onfocus)a.addEventListener('focus',a.onfocus,false);if(a.onblur)a.addEventListener('blur',a.onblur,false);if(a.onlosecapture)a.addEventListener('losecapture',a.onlosecapture,false);if(a.onscroll)a.addEventListener('scroll',a.onscroll,false);if(a.onload)a.addEventListener('load',a.onload,false);if(a.onerror)a.addEventListener('error',a.onerror,false);if(a.onmousewheel)a.addEventListener('mousewheel',a.onmousewheel,false);}
function wl(){}
_=wl.prototype=new to();_.tN=Dv+'ElementUtilImpl';_.tI=0;function Cl(b,a){if(a.type=='keypress'&&(a.which!=0&&(!a.altKey&& !a.ctrlKey)))return a.which;return 0;}
function Dl(b,a){if(a.type=='keypress'&&a.keyCode!=0)return true;return false;}
function Al(){}
_=Al.prototype=new to();_.tN=Dv+'TransliterationHelperImpl';_.tI=0;function nm(a){a.c=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$VowelEntry;',0,13,[km(new jm(),'a',2309,0),km(new jm(),'A',2310,2366),km(new jm(),'aa',2310,2366),km(new jm(),'i',2311,2367),km(new jm(),'I',2312,2368),km(new jm(),'ee',2312,2368),km(new jm(),'u',2313,2369),km(new jm(),'U',2314,2370),km(new jm(),'oo',2314,2370),km(new jm(),'Ru',2315,2371),km(new jm(),'e',2319,2375),km(new jm(),'E',2319,2375),km(new jm(),'ai',2320,2376),km(new jm(),'ei',2320,2376),km(new jm(),'o',2323,2379),km(new jm(),'O',2323,2379),km(new jm(),'au',2324,2380),km(new jm(),'Om',2384,0)]);a.b=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$VowelEntry;',0,13,[km(new jm(),'M',0,2306),km(new jm(),'H',0,2307)]);a.a=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$ConsonantEntry;',0,12,[am(new Fl(),'k',2325),am(new Fl(),'K',2326),am(new Fl(),'kh',2326),am(new Fl(),'g',2327),am(new Fl(),'G',2328),am(new Fl(),'gh',2328),am(new Fl(),'~g',2329),am(new Fl(),'c',2330),am(new Fl(),'ch',2330),am(new Fl(),'C',2331),am(new Fl(),'Ch',2331),am(new Fl(),'j',2332),am(new Fl(),'J',2333),am(new Fl(),'jh',2333),am(new Fl(),'~j',2334),am(new Fl(),'T',2335),am(new Fl(),'Th',2336),am(new Fl(),'D',2337),am(new Fl(),'Dh',2338),am(new Fl(),'N',2339),am(new Fl(),'t',2340),am(new Fl(),'th',2341),am(new Fl(),'d',2342),am(new Fl(),'dh',2343),am(new Fl(),'n',2344),am(new Fl(),'p',2346),am(new Fl(),'P',2347),am(new Fl(),'ph',2347),am(new Fl(),'b',2348),am(new Fl(),'B',2349),am(new Fl(),'bh',2349),am(new Fl(),'m',2350),am(new Fl(),'y',2351),am(new Fl(),'Y',2351),am(new Fl(),'r',2352),am(new Fl(),'R',2352),am(new Fl(),'l',2354),am(new Fl(),'v',2357),am(new Fl(),'w',2357),am(new Fl(),'sh',2358),am(new Fl(),'Sh',2359),am(new Fl(),'s',2360),am(new Fl(),'h',2361),am(new Fl(),'L',2355),am(new Fl(),'M',2350),am(new Fl(),'H',2361),am(new Fl(),'S',2360)]);kt(a.c);kt(a.a);return a;}
function pm(c,b){var a;for(a=c.a.a-1;a>=0;a--){if(tp(b.b,c.a[a].a)){fm(b,a);gm(b,up(b.b,qp(c.a[a].a)));break;}}}
function qm(c,b){var a;for(a=c.b.a-1;a>=0;a--){if(tp(b.b,c.b[a].c)){hm(b,a);gm(b,up(b.b,qp(c.b[a].c)));break;}}}
function rm(c,b){var a;for(a=c.c.a-1;a>=0;a--){if(tp(b.b,c.c[a].c)){im(b,a);gm(b,up(b.b,qp(c.c[a].c)));break;}}}
function sm(c,b){var a;a=new dm();gm(a,b);rm(c,a);if(a.d>=0){qm(c,a);}else{pm(c,a);if(a.a>=0){rm(c,a);if(a.d>=0){qm(c,a);}}}return a;}
function tm(b,a){var c;c=Do(new Co());if(a.a>=0){Eo(c,b.a[a.a].b);}if(a.d>=0){if(a.a>=0){if(b.c[a.d].a!=0){Eo(c,b.c[a.d].a);}}else{Eo(c,b.c[a.d].b);}if(a.c>=0){Eo(c,b.b[a.c].a);}}else if(a.a>=0){Eo(c,2381);}return dp(c);}
function um(i){var a,b,c,d,e,f,g,h;h=ts(new rs());e=i;while(qp(e)>0){c=sm(this,e);if(mp(c.b,e)){if(qp(e)>1){us(h,vp(e,0,1));e=up(e,1);continue;}break;}f=tm(this,c);us(h,f);e=c.b;}if(qp(e)>0){us(h,e);}for(b=h.b-1;b>0;b--){d=bq(pb('[C',0,(-1),[2352,2315,2371]));a=jp(xs(h,b).tS(),0);if(op(d,a)>=0){Bs(h,b-1,xs(h,b-1).tS()+xs(h,b));As(h,b);}}g=ob('[Ljava.lang.String;',[0],[1],[h.b],null);for(b=0;b<g.a;b++){g[b]=vb(xs(h,b),1);}return g;}
function El(){}
_=El.prototype=new to();_.kb=um;_.tN=Ev+'DevanagariTransliterator';_.tI=0;_.a=null;_.b=null;_.c=null;function am(b,a,c){b.a=a;b.b=xb(c);return b;}
function cm(a){return lp(this.a,vb(a,12).a);}
function Fl(){}
_=Fl.prototype=new to();_.i=cm;_.tN=Ev+'DevanagariTransliterator$ConsonantEntry';_.tI=21;_.a=null;_.b=0;function fm(b,a){b.a=a;}
function gm(b,a){b.b=a;}
function hm(b,a){b.c=a;}
function im(a,b){a.d=b;}
function dm(){}
_=dm.prototype=new to();_.tN=Ev+'DevanagariTransliterator$ParseResult';_.tI=0;_.a=(-1);_.b='';_.c=(-1);_.d=(-1);function km(d,c,b,a){d.c=c;d.b=xb(b);d.a=xb(a);return d;}
function mm(a){return lp(this.c,vb(a,13).c);}
function jm(){}
_=jm.prototype=new to();_.i=mm;_.tN=Ev+'DevanagariTransliterator$VowelEntry';_.tI=22;_.a=0;_.b=0;_.c=null;function xm(a){if(a===null||mp('',a)){return pb('[Ljava.lang.String;',0,1,['']);}return pb('[Ljava.lang.String;',0,1,[vp(a,0,qp(a)-1),up(a,qp(a)-1)]);}
function vm(){}
_=vm.prototype=new to();_.kb=xm;_.tN=Ev+'EchoTransliterator';_.tI=0;function hn(a){a.c=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$VowelEntry;',0,15,[en(new dn(),'a',3205,0),en(new dn(),'A',3206,3262),en(new dn(),'aa',3206,3262),en(new dn(),'i',3207,3263),en(new dn(),'I',3208,3264),en(new dn(),'ee',3208,3264),en(new dn(),'u',3209,3265),en(new dn(),'U',3210,3266),en(new dn(),'oo',3210,3266),en(new dn(),'Ru',3211,3267),en(new dn(),'RU',3296,3268),en(new dn(),'e',3214,3270),en(new dn(),'E',3215,3271),en(new dn(),'ai',3216,3272),en(new dn(),'ei',3216,3272),en(new dn(),'o',3218,3274),en(new dn(),'O',3219,3275),en(new dn(),'au',3220,3276)]);a.b=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$VowelEntry;',0,15,[en(new dn(),'M',0,3202),en(new dn(),'H',0,3203)]);a.a=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$ConsonantEntry;',0,14,[Am(new zm(),'k',3221),Am(new zm(),'K',3222),Am(new zm(),'kh',3222),Am(new zm(),'g',3223),Am(new zm(),'G',3224),Am(new zm(),'gh',3224),Am(new zm(),'~g',3225),Am(new zm(),'c',3226),Am(new zm(),'ch',3226),Am(new zm(),'C',3227),Am(new zm(),'Ch',3227),Am(new zm(),'j',3228),Am(new zm(),'J',3229),Am(new zm(),'jh',3229),Am(new zm(),'~j',3230),Am(new zm(),'T',3231),Am(new zm(),'Th',3232),Am(new zm(),'D',3233),Am(new zm(),'Dh',3234),Am(new zm(),'N',3235),Am(new zm(),'t',3236),Am(new zm(),'th',3237),Am(new zm(),'d',3238),Am(new zm(),'dh',3239),Am(new zm(),'n',3240),Am(new zm(),'p',3242),Am(new zm(),'P',3243),Am(new zm(),'ph',3243),Am(new zm(),'b',3244),Am(new zm(),'B',3245),Am(new zm(),'bh',3245),Am(new zm(),'m',3246),Am(new zm(),'y',3247),Am(new zm(),'Y',3247),Am(new zm(),'r',3248),Am(new zm(),'R',3248),Am(new zm(),'rx',3249),Am(new zm(),'l',3250),Am(new zm(),'v',3253),Am(new zm(),'w',3253),Am(new zm(),'sh',3254),Am(new zm(),'Sh',3255),Am(new zm(),'s',3256),Am(new zm(),'h',3257),Am(new zm(),'~h',3257),Am(new zm(),'L',3251),Am(new zm(),'Lx',3294),Am(new zm(),'M',3246),Am(new zm(),'H',3257),Am(new zm(),'S',3256)]);kt(a.c);kt(a.a);return a;}
function kn(c,b){var a;for(a=c.a.a-1;a>=0;a--){if(tp(b.b,c.a[a].a)){Fm(b,a);an(b,up(b.b,qp(c.a[a].a)));break;}}}
function ln(c,b){var a;for(a=c.b.a-1;a>=0;a--){if(tp(b.b,c.b[a].c)){bn(b,a);an(b,up(b.b,qp(c.b[a].c)));break;}}}
function mn(c,b){var a;for(a=c.c.a-1;a>=0;a--){if(tp(b.b,c.c[a].c)){cn(b,a);an(b,up(b.b,qp(c.c[a].c)));break;}}}
function nn(c,b){var a;a=new Dm();an(a,b);mn(c,a);if(a.d>=0){ln(c,a);}else{kn(c,a);if(a.a>=0){mn(c,a);if(a.d>=0){ln(c,a);}}}return a;}
function on(b,a){var c;c=Do(new Co());if(a.a>=0){Eo(c,b.a[a.a].b);}if(a.d>=0){if(a.a>=0){if(b.c[a.d].a!=0){Eo(c,b.c[a.d].a);}}else{Eo(c,b.c[a.d].b);}if(a.c>=0){Eo(c,b.b[a.c].a);}}else if(a.a>=0){Eo(c,3277);}return dp(c);}
function pn(i){var a,b,c,d,e,f,g,h;h=ts(new rs());e=i;while(qp(e)>0){c=nn(this,e);if(mp(c.b,e)){if(qp(e)>1){us(h,vp(e,0,1));e=up(e,1);continue;}break;}f=on(this,c);us(h,f);e=c.b;}if(qp(e)>0){us(h,e);}for(b=h.b-1;b>0;b--){d=bq(pb('[C',0,(-1),[3248,3211,3267,3296,3268]));a=jp(xs(h,b).tS(),0);if(op(d,a)>=0){Bs(h,b-1,xs(h,b-1).tS()+xs(h,b));As(h,b);}}g=ob('[Ljava.lang.String;',[0],[1],[h.b],null);for(b=0;b<g.a;b++){g[b]=vb(xs(h,b),1);}return g;}
function ym(){}
_=ym.prototype=new to();_.kb=pn;_.tN=Ev+'KannadaTransliterator';_.tI=0;_.a=null;_.b=null;_.c=null;function Am(b,a,c){b.a=a;b.b=xb(c);return b;}
function Cm(a){return lp(this.a,vb(a,14).a);}
function zm(){}
_=zm.prototype=new to();_.i=Cm;_.tN=Ev+'KannadaTransliterator$ConsonantEntry';_.tI=23;_.a=null;_.b=0;function Fm(b,a){b.a=a;}
function an(b,a){b.b=a;}
function bn(b,a){b.c=a;}
function cn(a,b){a.d=b;}
function Dm(){}
_=Dm.prototype=new to();_.tN=Ev+'KannadaTransliterator$ParseResult';_.tI=0;_.a=(-1);_.b='';_.c=(-1);_.d=(-1);function en(d,c,b,a){d.c=c;d.b=xb(b);d.a=xb(a);return d;}
function gn(a){return lp(this.c,vb(a,15).c);}
function dn(){}
_=dn.prototype=new to();_.i=gn;_.tN=Ev+'KannadaTransliterator$VowelEntry';_.tI=24;_.a=0;_.b=0;_.c=null;function tn(c){var a,d,e,f;e=hl(c,(dl(),ql,'transliteration'));for(f=0;f<e.a;f++){d=e[f];try{vn(d);}catch(a){a=Eb(a);if(wb(a,11)){}else throw a;}}}
function un(){$wnd.kditor_autoInjectTransliterability=function(a){tn(a);};$wnd.kditor_makeTransliterable=function(a){vn(a);};$wnd.kditor_transliterate=function(b,a){return xn(b,a);};$wnd.kditor_transliterateForHtml=function(b,a){return wn(b,a);};}
function vn(b){var a;ll(b);a=zj(new uj(),b);nl(b,a);}
function xn(d,b){var a,c,e,f;f=pl(b);c=f.kb(d);e=Do(new Co());for(a=0;a<c.a;a++){Fo(e,c[a]);}return dp(e);}
function wn(e,d){var a,b,c,f;f=xn(e,d);b='';for(c=0;c<qp(f);c++){a=jp(f,c);if(a>=3072&&a<3328){b+='&#'+a+';';}else{b+=ub(jp(f,c));}}return b;}
function zn(){}
_=zn.prototype=new yo();_.tN=aw+'ArrayStoreException';_.tI=25;function En(a){return Fp(a);}
function ao(b,a){zo(b,a);return b;}
function Fn(){}
_=Fn.prototype=new yo();_.tN=aw+'ClassCastException';_.tI=26;function jo(b,a){zo(b,a);return b;}
function io(){}
_=io.prototype=new yo();_.tN=aw+'IllegalStateException';_.tI=27;function mo(b,a){zo(b,a);return b;}
function lo(){}
_=lo.prototype=new yo();_.tN=aw+'IndexOutOfBoundsException';_.tI=28;function qo(a,b){return a<b?a:b;}
function ro(){}
_=ro.prototype=new yo();_.tN=aw+'NegativeArraySizeException';_.tI=29;function jp(b,a){return b.charCodeAt(a);}
function lp(f,c){var a,b,d,e,g,h;h=qp(f);e=qp(c);b=qo(h,e);for(a=0;a<b;a++){g=jp(f,a);d=jp(c,a);if(g!=d){return g-d;}}return h-e;}
function mp(b,a){if(!wb(a,1))return false;return zp(b,a);}
function np(g){var a=Cp;if(!a){a=Cp={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function op(b,a){return b.indexOf(String.fromCharCode(a));}
function pp(b,a){return b.indexOf(a);}
function qp(a){return a.length;}
function rp(b,a){return sp(b,a,0);}
function sp(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=yp(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function tp(b,a){return pp(b,a)==0;}
function up(b,a){return b.substr(a,b.length-a);}
function vp(c,a,b){return c.substr(a,b-a);}
function wp(a){return a.toLowerCase();}
function xp(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function yp(a){return ob('[Ljava.lang.String;',[0],[1],[a],null);}
function zp(a,b){return String(a)==b;}
function Ap(a){if(wb(a,1)){return lp(this,vb(a,1));}else{throw ao(new Fn(),'Cannot compare '+a+" with String '"+this+"'");}}
function Bp(a){return mp(this,a);}
function Dp(){return np(this);}
function Ep(){return this;}
function Fp(a){return String.fromCharCode(a);}
function cq(e,b,a){var c,d;if(b<0){throw hp(new gp(),b);}if(a<0){throw hp(new gp(),a);}if(b>e.a-a){throw hp(new gp(),b+a);}c='';d=b+a;while(b<d){c+=En(e[b++]);}return c;}
function bq(a){return cq(a,0,a.a);}
function aq(a){return a!==null?a.tS():'null';}
_=String.prototype;_.i=Ap;_.eQ=Bp;_.hC=Dp;_.tS=Ep;_.tN=aw+'String';_.tI=2;var Cp=null;function Do(a){ap(a);return a;}
function Eo(a,b){return Fo(a,Fp(b));}
function Fo(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function ap(a){bp(a,'');}
function bp(b,a){b.js=[a];b.length=a.length;}
function dp(a){a.C();return a.js[0];}
function ep(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function fp(){return dp(this);}
function Co(){}
_=Co.prototype=new to();_.C=ep;_.tS=fp;_.tN=aw+'StringBuffer';_.tI=0;function hp(b,a){mo(b,'String index out of range: '+a);return b;}
function gp(){}
_=gp.prototype=new lo();_.tN=aw+'StringIndexOutOfBoundsException';_.tI=30;function fq(a){return t(a);}
function lq(b,a){zo(b,a);return b;}
function kq(){}
_=kq.prototype=new yo();_.tN=aw+'UnsupportedOperationException';_.tI=31;function oq(d,a,b){var c;while(a.u()){c=a.B();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function qq(a){throw lq(new kq(),'add');}
function rq(b){var a;a=oq(this,this.z(),b);return a!==null;}
function sq(){var a,b,c;c=Do(new Co());a=null;Fo(c,'[');b=this.z();while(b.u()){if(a!==null){Fo(c,a);}else{a=', ';}Fo(c,aq(b.B()));}Fo(c,']');return dp(c);}
function nq(){}
_=nq.prototype=new to();_.h=qq;_.l=rq;_.tS=sq;_.tN=bw+'AbstractCollection';_.tI=0;function Dq(b,a){throw mo(new lo(),'Index: '+a+', Size: '+b.b);}
function Eq(a){return vq(new uq(),a);}
function Fq(b,a){throw lq(new kq(),'add');}
function ar(a){this.g(this.jb(),a);return true;}
function br(e){var a,b,c,d,f;if(e===this){return true;}if(!wb(e,16)){return false;}f=vb(e,16);if(this.jb()!=f.jb()){return false;}c=Eq(this);d=f.z();while(xq(c)){a=yq(c);b=yq(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function cr(){var a,b,c,d;c=1;a=31;b=Eq(this);while(xq(b)){d=yq(b);c=31*c+(d===null?0:d.hC());}return c;}
function dr(){return Eq(this);}
function er(a){throw lq(new kq(),'remove');}
function tq(){}
_=tq.prototype=new nq();_.g=Fq;_.h=ar;_.eQ=br;_.hC=cr;_.z=dr;_.gb=er;_.tN=bw+'AbstractList';_.tI=32;function vq(b,a){b.c=a;return b;}
function xq(a){return a.a<a.c.jb();}
function yq(a){if(!xq(a)){throw new mv();}return a.c.s(a.b=a.a++);}
function zq(a){if(a.b<0){throw new io();}a.c.gb(a.b);a.a=a.b;a.b=(-1);}
function Aq(){return xq(this);}
function Bq(){return yq(this);}
function uq(){}
_=uq.prototype=new to();_.u=Aq;_.B=Bq;_.tN=bw+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function ds(f,d,e){var a,b,c;for(b=ku(f.p());du(b);){a=eu(b);c=a.q();if(d===null?c===null:d.eQ(c)){if(e){fu(b);}return a;}}return null;}
function es(b){var a;a=b.p();return hr(new gr(),b,a);}
function fs(b){var a;a=uu(b);return vr(new ur(),b,a);}
function gs(a){return ds(this,a,false)!==null;}
function hs(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!wb(d,17)){return false;}f=vb(d,17);c=es(this);e=f.A();if(!os(c,e)){return false;}for(a=jr(c);qr(a);){b=rr(a);h=this.t(b);g=f.t(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function is(b){var a;a=ds(this,b,false);return a===null?null:a.r();}
function js(){var a,b,c;b=0;for(c=ku(this.p());du(c);){a=eu(c);b+=a.hC();}return b;}
function ks(){return es(this);}
function ls(){var a,b,c,d;d='{';a=false;for(c=ku(this.p());du(c);){b=eu(c);if(a){d+=', ';}else{a=true;}d+=aq(b.q());d+='=';d+=aq(b.r());}return d+'}';}
function fr(){}
_=fr.prototype=new to();_.k=gs;_.eQ=hs;_.t=is;_.hC=js;_.A=ks;_.tS=ls;_.tN=bw+'AbstractMap';_.tI=33;function os(e,b){var a,c,d;if(b===e){return true;}if(!wb(b,18)){return false;}c=vb(b,18);if(c.jb()!=e.jb()){return false;}for(a=c.z();a.u();){d=a.B();if(!e.l(d)){return false;}}return true;}
function ps(a){return os(this,a);}
function qs(){var a,b,c;a=0;for(b=this.z();b.u();){c=b.B();if(c!==null){a+=c.hC();}}return a;}
function ms(){}
_=ms.prototype=new nq();_.eQ=ps;_.hC=qs;_.tN=bw+'AbstractSet';_.tI=34;function hr(b,a,c){b.a=a;b.b=c;return b;}
function jr(b){var a;a=ku(b.b);return or(new nr(),b,a);}
function kr(a){return this.a.k(a);}
function lr(){return jr(this);}
function mr(){return this.b.a.c;}
function gr(){}
_=gr.prototype=new ms();_.l=kr;_.z=lr;_.jb=mr;_.tN=bw+'AbstractMap$1';_.tI=35;function or(b,a,c){b.a=c;return b;}
function qr(a){return a.a.u();}
function rr(b){var a;a=b.a.B();return a.q();}
function sr(){return qr(this);}
function tr(){return rr(this);}
function nr(){}
_=nr.prototype=new to();_.u=sr;_.B=tr;_.tN=bw+'AbstractMap$2';_.tI=0;function vr(b,a,c){b.a=a;b.b=c;return b;}
function xr(b){var a;a=ku(b.b);return Cr(new Br(),b,a);}
function yr(a){return tu(this.a,a);}
function zr(){return xr(this);}
function Ar(){return this.b.a.c;}
function ur(){}
_=ur.prototype=new nq();_.l=yr;_.z=zr;_.jb=Ar;_.tN=bw+'AbstractMap$3';_.tI=0;function Cr(b,a,c){b.a=c;return b;}
function Er(a){return a.a.u();}
function Fr(a){var b;b=a.a.B().r();return b;}
function as(){return Er(this);}
function bs(){return Fr(this);}
function Br(){}
_=Br.prototype=new to();_.u=as;_.B=bs;_.tN=bw+'AbstractMap$4';_.tI=0;function ss(a){{vs(a);}}
function ts(a){ss(a);return a;}
function us(b,a){ft(b.a,b.b++,a);return true;}
function vs(a){a.a=D();a.b=0;}
function xs(b,a){if(a<0||a>=b.b){Dq(b,a);}return bt(b.a,a);}
function ys(b,a){return zs(b,a,0);}
function zs(c,b,a){if(a<0){Dq(c,a);}for(;a<c.b;++a){if(at(b,bt(c.a,a))){return a;}}return (-1);}
function As(c,a){var b;b=xs(c,a);dt(c.a,a,1);--c.b;return b;}
function Bs(d,a,b){var c;c=xs(d,a);ft(d.a,a,b);return c;}
function Ds(a,b){if(a<0||a>this.b){Dq(this,a);}Cs(this.a,a,b);++this.b;}
function Es(a){return us(this,a);}
function Cs(a,b,c){a.splice(b,0,c);}
function Fs(a){return ys(this,a)!=(-1);}
function at(a,b){return a===b||a!==null&&a.eQ(b);}
function ct(a){return xs(this,a);}
function bt(a,b){return a[b];}
function et(a){return As(this,a);}
function dt(a,c,b){a.splice(c,b);}
function ft(a,b,c){a[b]=c;}
function gt(){return this.b;}
function rs(){}
_=rs.prototype=new tq();_.g=Ds;_.h=Es;_.l=Fs;_.s=ct;_.gb=et;_.jb=gt;_.tN=bw+'ArrayList';_.tI=36;_.a=null;_.b=0;function jt(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.j(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function kt(a){jt(a,a.a,(rt(),st));}
function rt(){rt=qv;st=new ot();}
var st;function qt(a,b){return vb(a,19).i(b);}
function ot(){}
_=ot.prototype=new to();_.j=qt;_.tN=bw+'Comparators$1';_.tI=0;function ru(){ru=qv;yu=Eu();}
function ou(a){{qu(a);}}
function pu(a){ru();ou(a);return a;}
function qu(a){a.a=D();a.d=E();a.b=Bb(yu,z);a.c=0;}
function su(b,a){if(wb(a,1)){return cv(b.d,vb(a,1))!==yu;}else if(a===null){return b.b!==yu;}else{return bv(b.a,a,a.hC())!==yu;}}
function tu(a,b){if(a.b!==yu&&av(a.b,b)){return true;}else if(Du(a.d,b)){return true;}else if(Bu(a.a,b)){return true;}return false;}
function uu(a){return iu(new Ft(),a);}
function vu(c,a){var b;if(wb(a,1)){b=cv(c.d,vb(a,1));}else if(a===null){b=c.b;}else{b=bv(c.a,a,a.hC());}return b===yu?null:b;}
function wu(c,a,d){var b;if(a!==null){b=fv(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=ev(c.a,a,d,np(a));}if(b===yu){++c.c;return null;}else{return b;}}
function xu(c,a){var b;if(wb(a,1)){b=hv(c.d,vb(a,1));}else if(a===null){b=c.b;c.b=Bb(yu,z);}else{b=gv(c.a,a,a.hC());}if(b===yu){return null;}else{--c.c;return b;}}
function zu(e,c){ru();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.h(a[f]);}}}}
function Au(d,a){ru();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=yt(c.substring(1),e);a.h(b);}}}
function Bu(f,h){ru();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(av(h,d)){return true;}}}}return false;}
function Cu(a){return su(this,a);}
function Du(c,d){ru();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(av(d,a)){return true;}}}return false;}
function Eu(){ru();}
function Fu(){return uu(this);}
function av(a,b){ru();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function dv(a){return vu(this,a);}
function bv(f,h,e){ru();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(av(h,d)){return c.r();}}}}
function cv(b,a){ru();return b[':'+a];}
function ev(f,h,j,e){ru();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(av(h,d)){var i=c.r();c.ib(j);return i;}}}else{a=f[e]=[];}var c=yt(h,j);a.push(c);}
function fv(c,a,d){ru();a=':'+a;var b=c[a];c[a]=d;return b;}
function gv(f,h,e){ru();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(av(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.r();}}}}
function hv(c,a){ru();a=':'+a;var b=c[a];delete c[a];return b;}
function ut(){}
_=ut.prototype=new fr();_.k=Cu;_.p=Fu;_.t=dv;_.tN=bw+'HashMap';_.tI=37;_.a=null;_.b=null;_.c=0;_.d=null;var yu;function wt(b,a,c){b.a=a;b.b=c;return b;}
function yt(a,b){return wt(new vt(),a,b);}
function zt(b){var a;if(wb(b,20)){a=vb(b,20);if(av(this.a,a.q())&&av(this.b,a.r())){return true;}}return false;}
function At(){return this.a;}
function Bt(){return this.b;}
function Ct(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Dt(a){var b;b=this.b;this.b=a;return b;}
function Et(){return this.a+'='+this.b;}
function vt(){}
_=vt.prototype=new to();_.eQ=zt;_.q=At;_.r=Bt;_.hC=Ct;_.ib=Dt;_.tS=Et;_.tN=bw+'HashMap$EntryImpl';_.tI=38;_.a=null;_.b=null;function iu(b,a){b.a=a;return b;}
function ku(a){return bu(new au(),a.a);}
function lu(c){var a,b,d;if(wb(c,20)){a=vb(c,20);b=a.q();if(su(this.a,b)){d=vu(this.a,b);return av(a.r(),d);}}return false;}
function mu(){return ku(this);}
function nu(){return this.a.c;}
function Ft(){}
_=Ft.prototype=new ms();_.l=lu;_.z=mu;_.jb=nu;_.tN=bw+'HashMap$EntrySet';_.tI=39;function bu(c,b){var a;c.c=b;a=ts(new rs());if(c.c.b!==(ru(),yu)){us(a,wt(new vt(),null,c.c.b));}Au(c.c.d,a);zu(c.c.a,a);c.a=Eq(a);return c;}
function du(a){return xq(a.a);}
function eu(a){return a.b=vb(yq(a.a),20);}
function fu(a){if(a.b===null){throw jo(new io(),'Must call next() before remove().');}else{zq(a.a);xu(a.c,a.b.q());a.b=null;}}
function gu(){return du(this);}
function hu(){return eu(this);}
function au(){}
_=au.prototype=new to();_.u=gu;_.B=hu;_.tN=bw+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function mv(){}
_=mv.prototype=new yo();_.tN=bw+'NoSuchElementException';_.tI=40;function yn(){lj(new jj());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{yn();}catch(a){b(d);}else{yn();}}
var Ab=[{},{},{1:1,19:1},{3:1},{3:1},{3:1,11:1},{3:1,11:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{6:1,7:1,8:1,9:1,10:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{12:1,19:1},{13:1,19:1},{14:1,19:1},{15:1,19:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{16:1},{17:1},{18:1},{18:1},{16:1},{17:1},{20:1},{18:1},{3:1,11:1}];if (com_kditor_Kditor) {  var __gwt_initHandlers = com_kditor_Kditor.__gwt_initHandlers;  com_kditor_Kditor.onScriptLoad(gwtOnLoad);}})();