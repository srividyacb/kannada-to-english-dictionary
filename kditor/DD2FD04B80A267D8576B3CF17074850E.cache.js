(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,cw='com.google.gwt.core.client.',dw='com.google.gwt.lang.',ew='com.google.gwt.user.client.',fw='com.google.gwt.user.client.impl.',gw='com.google.gwt.user.client.ui.',hw='com.google.gwt.user.client.ui.impl.',iw='com.kditor.client.',jw='com.kditor.client.bean.',kw='com.kditor.client.editor.',lw='com.kditor.client.editor.impl.',mw='com.kditor.client.handler.',nw='com.kditor.client.helper.',ow='com.kditor.client.helper.impl.',pw='com.kditor.client.transliterator.',qw='com.kditor.client.util.',rw='java.lang.',sw='java.util.';function bw(){}
function gp(a){return this===a;}
function hp(){return wq(this);}
function ip(){return this.tN+'@'+this.hC();}
function ep(){}
_=ep.prototype={};_.eQ=gp;_.hC=hp;_.tS=ip;_.toString=function(){return this.tS();};_.tN=rw+'Object';_.tI=1;function o(a){return a==null?null:a.tN;}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=u());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=u());}
function u(){return ++v;}
var v=0;function yq(b,a){b.a=a;return b;}
function Aq(){var a,b;a=o(this);b=this.a;if(b!==null){return a+': '+b;}else{return a;}}
function xq(){}
_=xq.prototype=new ep();_.tS=Aq;_.tN=rw+'Throwable';_.tI=3;_.a=null;function xo(b,a){yq(b,a);return b;}
function wo(){}
_=wo.prototype=new xq();_.tN=rw+'Exception';_.tI=4;function kp(b,a){xo(b,a);return b;}
function jp(){}
_=jp.prototype=new wo();_.tN=rw+'RuntimeException';_.tI=5;function x(c,b,a){kp(c,'JavaScript '+b+' exception: '+a);return c;}
function w(){}
_=w.prototype=new jp();_.tN=cw+'JavaScriptException';_.tI=6;function B(b,a){if(!wb(a,2)){return false;}return F(b,vb(a,2));}
function C(a){return s(a);}
function D(){return [];}
function E(){return {};}
function ab(a){return B(this,a);}
function F(a,b){return a===b;}
function bb(){return C(this);}
function db(){return cb(this);}
function cb(a){if(a.toString)return a.toString();return '[object]';}
function z(){}
_=z.prototype=new ep();_.eQ=ab;_.hC=bb;_.tS=db;_.tN=cw+'JavaScriptObject';_.tI=7;function hb(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function jb(a,b,c){return a[b]=c;}
function kb(b,a){return b[a];}
function mb(b,a){return b[a];}
function lb(a){return a.length;}
function ob(e,d,c,b,a){return nb(e,d,c,b,0,lb(b),a);}
function nb(j,i,g,c,e,a,b){var d,f,h;if((f=kb(c,e))<0){throw new cp();}h=hb(new gb(),f,kb(i,e),kb(g,e),j);++e;if(e<a){j=fq(j,1);for(d=0;d<f;++d){jb(h,d,nb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){jb(h,d,b);}}return h;}
function pb(f,e,c,g){var a,b,d;b=lb(g);d=hb(new gb(),b,e,c,f);for(a=0;a<b;++a){jb(d,a,mb(g,a));}return d;}
function qb(a,b,c){if(c!==null&&a.b!=0&& !wb(c,a.b)){throw new lo();}return jb(a,b,c);}
function gb(){}
_=gb.prototype=new ep();_.tN=dw+'Array';_.tI=0;function tb(b,a){return !(!(b&&Ab[b][a]));}
function ub(a){return String.fromCharCode(a);}
function vb(b,a){if(b!=null)tb(b.tI,a)||zb();return b;}
function wb(b,a){return b!=null&&tb(b.tI,a);}
function xb(a){return a&65535;}
function zb(){throw new ro();}
function yb(a){if(a!==null){throw new ro();}return a;}
function Bb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var Ab;function Eb(a){if(wb(a,3)){return a;}return x(new w(),ac(a),Fb(a));}
function Fb(a){return a.message;}
function ac(a){return a.name;}
function cc(){cc=bw;Dc=et(new ct());{xc=new fe();pe(xc);}}
function dc(b,a){cc();ue(xc,b,a);}
function ec(a,b){cc();return he(xc,a,b);}
function fc(){cc();return we(xc,'div');}
function ic(b,a,d){cc();var c;c=p;{hc(b,a,d);}}
function hc(b,a,c){cc();var d;if(a===Cc){if(mc(b)==8192){Cc=null;}}d=gc;gc=b;try{c.ab(b);}finally{gc=d;}}
function jc(b,a){cc();xe(xc,b,a);}
function kc(a){cc();return ye(xc,a);}
function lc(a){cc();return ie(xc,a);}
function mc(a){cc();return ze(xc,a);}
function nc(a){cc();je(xc,a);}
function oc(a){cc();return ke(xc,a);}
function pc(b,a){cc();return le(xc,b,a);}
function qc(b,a){cc();return Ae(xc,b,a);}
function rc(a,b){cc();return Be(xc,a,b);}
function sc(a){cc();return Ce(xc,a);}
function tc(a){cc();return me(xc,a);}
function uc(a){cc();return De(xc,a);}
function vc(a){cc();return ne(xc,a);}
function wc(a){cc();return oe(xc,a);}
function yc(c,a,b){cc();qe(xc,c,a,b);}
function zc(b,a){cc();return re(xc,b,a);}
function Ac(a){cc();var b,c;c=true;if(Dc.b>0){b=yb(it(Dc,Dc.b-1));if(!(c=null.qb())){jc(a,true);nc(a);}}return c;}
function Bc(b,a){cc();Ee(xc,b,a);}
function Ec(a,b,c){cc();Fe(xc,a,b,c);}
function Fc(a,b){cc();af(xc,a,b);}
function ad(a,b){cc();bf(xc,a,b);}
function bd(b,a,c){cc();cf(xc,b,a,c);}
function cd(a,b){cc();se(xc,a,b);}
function dd(a){cc();return df(xc,a);}
var gc=null,xc=null,Cc=null,Dc;function gd(a){if(wb(a,4)){return ec(this,vb(a,4));}return B(Bb(this,ed),a);}
function hd(){return C(Bb(this,ed));}
function id(){return dd(this);}
function ed(){}
_=ed.prototype=new z();_.eQ=gd;_.hC=hd;_.tS=id;_.tN=ew+'Element';_.tI=8;function md(a){return B(Bb(this,jd),a);}
function nd(){return C(Bb(this,jd));}
function od(){return oc(this);}
function jd(){}
_=jd.prototype=new z();_.eQ=md;_.hC=nd;_.tS=od;_.tN=ew+'Event';_.tI=9;function ud(){ud=bw;wd=et(new ct());{vd();}}
function vd(){ud();Ad(new qd());}
var wd;function sd(){while((ud(),wd).b>0){yb(it((ud(),wd),0)).qb();}}
function td(){return null;}
function qd(){}
_=qd.prototype=new ep();_.gb=sd;_.hb=td;_.tN=ew+'Timer$1';_.tI=10;function zd(){zd=bw;Bd=et(new ct());de=et(new ct());{Fd();}}
function Ad(a){zd();ft(Bd,a);}
function Cd(){zd();var a,b;for(a=pr(Bd);ir(a);){b=vb(jr(a),5);b.gb();}}
function Dd(){zd();var a,b,c,d;d=null;for(a=pr(Bd);ir(a);){b=vb(jr(a),5);c=b.hb();{d=c;}}return d;}
function Ed(){zd();var a,b;for(a=pr(de);ir(a);){b=yb(jr(a));null.qb();}}
function Fd(){zd();__gwt_initHandlers(function(){ce();},function(){return be();},function(){ae();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ae(){zd();var a;a=p;{Cd();}}
function be(){zd();var a;a=p;{return Dd();}}
function ce(){zd();var a;a=p;{Ed();}}
var Bd,de;function ue(c,b,a){b.appendChild(a);}
function we(b,a){return $doc.createElement(a);}
function xe(c,b,a){b.cancelBubble=a;}
function ye(b,a){return a.which||(a.keyCode|| -1);}
function ze(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function Ae(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function Be(d,a,b){var c=a[b];return c==null?null:String(c);}
function Ce(b,a){return a.__eventBits||0;}
function De(c,a){var b=a.innerHTML;return b==null?null:b;}
function Ee(c,b,a){b.removeChild(a);}
function Fe(c,a,b,d){a[b]=d;}
function af(c,a,b){a.__listener=b;}
function bf(c,a,b){if(!b){b='';}a.innerHTML=b;}
function cf(c,b,a,d){b.style[a]=d;}
function df(b,a){return a.outerHTML;}
function ee(){}
_=ee.prototype=new ep();_.tN=fw+'DOMImpl';_.tI=0;function he(c,a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function ie(b,a){return a.srcElement||null;}
function je(b,a){a.returnValue=false;}
function ke(b,a){if(a.toString)return a.toString();return '[object Event]';}
function le(e,d,a){var b=d.children.length;for(var c=0;c<b;++c){if(a.uniqueID==d.children[c].uniqueID)return c;}return -1;}
function me(c,b){var a=b.firstChild;return a||null;}
function ne(c,a){var b=a.nextSibling;return b||null;}
function oe(c,a){var b=a.parentElement;return b||null;}
function pe(d){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}$wnd.__dispatchEvent=function(){var c=te;te=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Ac($wnd.event)){te=c;return;}}var b,a=this;while(a&& !(b=a.__listener))a=a.parentElement;if(b)ic($wnd.event,a,b);te=c;};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function qe(d,c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b]);}
function re(c,b,a){while(a){if(b.uniqueID==a.uniqueID)return true;a=a.parentElement;}return false;}
function se(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function fe(){}
_=fe.prototype=new ee();_.tN=fw+'DOMImplIE6';_.tI=0;var te=null;function dh(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function eh(b,a){if(b.f!==null){dh(b,b.f,a);}b.f=a;}
function fh(b,a){hh(b.f,a);}
function gh(b,a){cd(b.f,a|sc(b.f));}
function hh(a,b){Ec(a,'className',b);}
function ih(){if(this.f===null){return '(null handle)';}return dd(this.f);}
function bh(){}
_=bh.prototype=new ep();_.tS=ih;_.tN=gw+'UIObject';_.tI=0;_.f=null;function Bh(a){if(a.d){throw Ao(new zo(),"Should only call onAttach when the widget is detached from the browser's document");}a.d=true;Fc(a.f,a);a.o();a.db();}
function Ch(a){if(!a.d){throw Ao(new zo(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.fb();}finally{a.p();Fc(a.f,null);a.d=false;}}
function Dh(a){if(a.e!==null){kf(a.e,a);}else if(a.e!==null){throw Ao(new zo(),"This widget's parent does not implement HasWidgets");}}
function Eh(b,a){if(b.d){Fc(b.f,null);}eh(b,a);if(b.d){Fc(a,b);}}
function Fh(c,b){var a;a=c.e;if(b===null){if(a!==null&&a.d){c.bb();}c.e=null;}else{if(a!==null){throw Ao(new zo(),'Cannot set a new parent without first clearing the old parent');}c.e=b;if(b.d){c.F();}}}
function ai(){}
function bi(){}
function ci(){Bh(this);}
function di(a){}
function ei(){Ch(this);}
function fi(){}
function gi(){}
function hi(a){Eh(this,a);}
function jh(){}
_=jh.prototype=new bh();_.o=ai;_.p=bi;_.F=ci;_.ab=di;_.bb=ei;_.db=fi;_.fb=gi;_.jb=hi;_.tN=gw+'Widget';_.tI=11;_.d=false;_.e=null;function ag(b,a){Fh(a,b);}
function cg(b,a){Fh(a,null);}
function dg(){var a,b;for(b=this.B();oh(b);){a=ph(b);a.F();}}
function eg(){var a,b;for(b=this.B();oh(b);){a=ph(b);a.bb();}}
function fg(){}
function gg(){}
function Ff(){}
_=Ff.prototype=new jh();_.o=dg;_.p=eg;_.db=fg;_.fb=gg;_.tN=gw+'Panel';_.tI=12;function nf(a){a.a=sh(new kh(),a);}
function of(a){nf(a);return a;}
function pf(c,a,b){Dh(a);th(c.a,a);dc(b,a.f);ag(c,a);}
function rf(b,c){var a;if(c.e!==b){return false;}cg(b,c);a=c.f;Bc(wc(a),a);zh(b.a,c);return true;}
function sf(){return xh(this.a);}
function mf(){}
_=mf.prototype=new Ff();_.B=sf;_.tN=gw+'ComplexPanel';_.tI=13;function gf(a){of(a);a.jb(fc());bd(a.f,'position','relative');bd(a.f,'overflow','hidden');return a;}
function hf(a,b){pf(a,b,a.f);}
function kf(b,c){var a;a=rf(b,c);if(a){lf(c.f);}return a;}
function lf(a){bd(a,'left','');bd(a,'top','');bd(a,'position','');}
function ff(){}
_=ff.prototype=new mf();_.tN=gw+'AbsolutePanel';_.tI=14;function vf(){vf=bw;ni(),pi;}
function uf(a){ni(),pi;return a;}
function wf(b,a){switch(mc(a)){case 1:break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function xf(b,a){Eh(b,a);gh(b,7041);}
function yf(a){wf(this,a);}
function zf(a){xf(this,a);}
function tf(){}
_=tf.prototype=new jh();_.ab=yf;_.jb=zf;_.tN=gw+'FocusWidget';_.tI=15;function mg(){mg=bw;ni(),pi;}
function kg(a){a.b=si(new ri());}
function lg(a){ni(),pi;uf(a);kg(a);kk(a,a.b.b);fh(a,'gwt-RichTextArea');return a;}
function ng(a){Bh(a);a.b.x();}
function og(){ng(this);}
function pg(a){switch(mc(a)){case 4:case 8:case 64:case 16:case 32:break;default:wf(this,a);}}
function qg(){Ch(this);this.b.ob();}
function hg(){}
_=hg.prototype=new tf();_.F=og;_.ab=pg;_.bb=qg;_.tN=gw+'RichTextArea';_.tI=16;function xg(){xg=bw;Cg=av(new fu());}
function wg(b,a){xg();gf(b);if(a===null){a=yg();}b.jb(a);b.F();return b;}
function zg(){xg();return Ag(null);}
function Ag(c){xg();var a,b;b=vb(gv(Cg,c),6);if(b!==null){return b;}a=null;if(Cg.c==0){Bg();}hv(Cg,c,b=wg(new rg(),a));return b;}
function yg(){xg();return $doc.body;}
function Bg(){xg();Ad(new sg());}
function rg(){}
_=rg.prototype=new ff();_.tN=gw+'RootPanel';_.tI=17;var Cg;function ug(){var a,b;for(b=is(ws((xg(),Cg)));ps(b);){a=vb(qs(b),6);if(a.d){a.bb();}}}
function vg(){return null;}
function sg(){}
_=sg.prototype=new ep();_.gb=ug;_.hb=vg;_.tN=gw+'RootPanel$1';_.tI=18;function sh(b,a){b.a=ob('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[4],null);return b;}
function th(a,b){wh(a,b,a.b);}
function vh(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function wh(d,e,a){var b,c;if(a<0||a>d.b){throw new Co();}if(d.b==d.a.a){c=ob('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[d.a.a*2],null);for(b=0;b<d.a.a;++b){qb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){qb(d.a,b,d.a[b-1]);}qb(d.a,a,e);}
function xh(a){return mh(new lh(),a);}
function yh(c,b){var a;if(b<0||b>=c.b){throw new Co();}--c.b;for(a=b;a<c.b;++a){qb(c.a,a,c.a[a+1]);}qb(c.a,c.b,null);}
function zh(b,c){var a;a=vh(b,c);if(a==(-1)){throw new Dv();}yh(b,a);}
function kh(){}
_=kh.prototype=new ep();_.tN=gw+'WidgetCollection';_.tI=0;_.a=null;_.b=0;function mh(b,a){b.b=a;return b;}
function oh(a){return a.a<a.b.b-1;}
function ph(a){if(a.a>=a.b.b){throw new Dv();}return a.b.a[++a.a];}
function qh(){return oh(this);}
function rh(){return ph(this);}
function lh(){}
_=lh.prototype=new ep();_.v=qh;_.D=rh;_.tN=gw+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function ni(){ni=bw;oi=ki(new ji());pi=oi;}
function mi(a){ni();return a;}
function ii(){}
_=ii.prototype=new ep();_.tN=hw+'FocusImpl';_.tI=0;var oi,pi;function li(){li=bw;ni();}
function ki(a){li();mi(a);return a;}
function ji(){}
_=ji.prototype=new ii();_.tN=hw+'FocusImplIE6';_.tI=0;function fj(a){a.b=ui(a);return a;}
function hj(a){a.w();}
function ij(){cd(this.b,8189);}
function jj(){this.cb();}
function kj(){hj(this);}
function lj(){}
function qi(){}
_=qi.prototype=new ep();_.w=ij;_.x=jj;_.cb=kj;_.ob=lj;_.tN=hw+'RichTextAreaImpl';_.tI=0;_.b=null;function zi(a){a.a=fc();}
function Ai(a){fj(a);zi(a);return a;}
function Ci(a){return $doc.createElement('iframe');}
function Ei(a){return a.a===null?Di(a):uc(a.a);}
function Di(a){return a.b.contentWindow.document.body.innerHTML;}
function Fi(b,a){b.b.contentWindow.document.body.innerHTML=a;}
function aj(){var b=this.b;var c=b.contentWindow;b.__gwt_handler=function(a){if(b.__listener){b.__listener.ab(a);}};b.__gwt_focusHandler=function(a){if(b.__gwt_isFocused){return;}b.__gwt_isFocused=true;b.__gwt_handler(a);};b.__gwt_blurHandler=function(a){if(!b.__gwt_isFocused){return;}b.__gwt_isFocused=false;b.__gwt_handler(a);};c.addEventListener('keydown',b.__gwt_handler,true);c.addEventListener('keyup',b.__gwt_handler,true);c.addEventListener('keypress',b.__gwt_handler,true);c.addEventListener('mousedown',b.__gwt_handler,true);c.addEventListener('mouseup',b.__gwt_handler,true);c.addEventListener('mousemove',b.__gwt_handler,true);c.addEventListener('mouseover',b.__gwt_handler,true);c.addEventListener('mouseout',b.__gwt_handler,true);c.addEventListener('click',b.__gwt_handler,true);c.addEventListener('focus',b.__gwt_focusHandler,true);c.addEventListener('blur',b.__gwt_blurHandler,true);}
function bj(){var a=this;setTimeout(function(){a.b.contentWindow.document.designMode='On';a.cb();},1);}
function cj(){hj(this);if(this.a!==null){Fi(this,uc(this.a));this.a=null;}}
function dj(){var a=this.b;var b=a.contentWindow;b.removeEventListener('keydown',a.__gwt_handler,true);b.removeEventListener('keyup',a.__gwt_handler,true);b.removeEventListener('keypress',a.__gwt_handler,true);b.removeEventListener('mousedown',a.__gwt_handler,true);b.removeEventListener('mouseup',a.__gwt_handler,true);b.removeEventListener('mousemove',a.__gwt_handler,true);b.removeEventListener('mouseover',a.__gwt_handler,true);b.removeEventListener('mouseout',a.__gwt_handler,true);b.removeEventListener('click',a.__gwt_handler,true);b.removeEventListener('focus',a.__gwt_focusHandler,true);b.removeEventListener('blur',a.__gwt_blurHandler,true);a.__gwt_handler=null;a.__gwt_focusHandler=null;a.__gwt_blurHandler=null;}
function ej(){var a;this.nb();a=Ei(this);this.a=fc();ad(this.a,a);}
function yi(){}
_=yi.prototype=new qi();_.w=aj;_.x=bj;_.cb=cj;_.nb=dj;_.ob=ej;_.tN=hw+'RichTextAreaImplStandard';_.tI=0;function si(a){Ai(a);return a;}
function ui(b){var a;a=Ci(b);Ec(a,'src',"javascript:''");return a;}
function vi(){var c=this.b;var b=c.contentWindow.document.body;var d=function(){if(c.__listener){var a=c.contentWindow.event;c.__listener.ab(a);}};b.onkeydown=b.onkeyup=b.onkeypress=b.onmousedown=b.onmouseup=b.onmousemove=b.onmouseover=b.onmouseout=b.onclick=d;c.contentWindow.onfocus=c.contentWindow.onblur=d;}
function wi(){var c=this;window.setTimeout(function(){var b=c.b;var a=b.contentWindow.document;a.write('<html><body CONTENTEDITABLE="true"><\/body><\/html>');c.cb();},1);}
function xi(){var b=this.b;var a=b.contentWindow.document.body;if(a){a.onkeydown=a.onkeyup=a.onkeypress=a.onmousedown=a.onmouseup=a.onmousemove=a.onmouseover=a.onmouseout=a.onclick=null;b.contentWindow.onfocus=b.contentWindow.onblur=null;}}
function ri(){}
_=ri.prototype=new yi();_.w=vi;_.x=wi;_.nb=xi;_.tN=hw+'RichTextAreaImplIE6';_.tI=0;function oj(b){var a;go();a=yg();fo(a);}
function mj(){}
_=mj.prototype=new ep();_.tN=iw+'Kditor';_.tI=0;function qj(){}
_=qj.prototype=new ep();_.tN=iw+'TransliterationConstants_';_.tI=0;function uj(b,a){b.a=a;}
function vj(b,a){b.b=a;}
function sj(){}
_=sj.prototype=new ep();_.tN=jw+'TransliterationAttributes';_.tI=0;_.a=null;_.b=null;function Dj(){Dj=bw;ni(),pi;}
function Cj(c,b){var a,d;ni(),pi;uf(c);if(b===null){throw kp(new jp(),'Transliterable element must be non-null');}c.b=tl(b);c.jb(c.b.a);d=ql(c.f);dk(c,d);a=zj(new yj(),c);xl(c.f,a);return c;}
function Ej(b,a){b.b.m(a);}
function Fj(b,a){return zk(b.b,a);}
function ak(b,a){b.b.z(a);}
function bk(b,a){return Ak(b.b,a);}
function ck(a,c){var b;b=rl(c);dk(a,b);}
function dk(c,d){var a,b;a=d.a;b=d.b;c.a=zl(a);c.c=Al(b);}
function ek(a){if(this.b.A(a)){ll(this.a,a,this,this.c);}}
function xj(){}
_=xj.prototype=new tf();_.ab=ek;_.tN=kw+'TransliterationEditor';_.tI=19;_.a=null;_.b=null;_.c=null;function zj(b,a){b.a=a;return b;}
function Bj(a){ck(this.a,vb(a,1));}
function yj(){}
_=yj.prototype=new ep();_.eb=Bj;_.tN=kw+'TransliterationEditor$1';_.tI=0;function zk(b,a){return El(a);}
function Ak(b,a){return am(a);}
function Bk(b,a){b.a=a;}
function Ck(a){return zc(this.a,lc(a));}
function Dk(a){Bk(this,a);}
function xk(){}
_=xk.prototype=new ep();_.A=Ck;_.jb=Dk;_.tN=lw+'TransliterationEditorImpl';_.tI=0;_.a=null;function rk(a){this.n(this.a,a);}
function sk(a,b){}
function uk(a){this.y(this.a,a);}
function tk(a,b){}
function vk(b){var a=this.a;var c=lc(b);return a.contentWindow.document.body==c;}
function wk(a){var b;b=hk(new gk(),this,a);Bk(this,b.f);}
function fk(){}
_=fk.prototype=new xk();_.m=rk;_.n=sk;_.z=uk;_.y=tk;_.A=vk;_.jb=wk;_.tN=lw+'TransliterationEditorIframeImpl';_.tI=0;function ik(){ik=bw;ni(),pi;}
function hk(b,a,c){ni(),pi;b.a=c;lg(b);fh(b,'');ng(b);return b;}
function jk(c,a){var b=c.b;b.b=a;}
function kk(b,a){xf(b,b.a);jk(b,b.a);}
function lk(a){kk(this,a);}
function gk(){}
_=gk.prototype=new hg();_.jb=lk;_.tN=lw+'TransliterationEditorIframeImpl$1$WrappingRichTextArea';_.tI=20;function ok(a,b){var c=a.document.selection.createRange();c.moveStart('character',-b);c.text='';}
function pk(a,c){var b=a.document.selection.createRange();b.text=c;b.collapse(true);b.select();}
function mk(){}
_=mk.prototype=new fk();_.n=ok;_.y=pk;_.tN=lw+'TransliterationEditorIframeImplIE';_.tI=0;function el(a){this.n(this.a,a);}
function fl(a,b){var e=a.value.substring(0,a.selectionStart-b);var d=a.value.substring(a.selectionEnd);var c=a.selectionStart-b;a.value=e+d;a.selectionStart=c;a.selectionEnd=c;}
function hl(a){this.y(this.a,a);}
function gl(a,e){var d=a.value.substring(0,a.selectionStart);var c=a.value.substring(a.selectionEnd);var b=a.selectionStart+e.length;a.value=d+e+c;a.selectionStart=b;a.selectionEnd=b;}
function Ek(){}
_=Ek.prototype=new xk();_.m=el;_.n=fl;_.z=hl;_.y=gl;_.tN=lw+'TransliterationEditorTextBoxBaseImpl';_.tI=0;function bl(a,b){var c=a.document.selection.createRange();c.moveStart('character',-b);c.text='';}
function cl(a,c){var b=a.document.selection.createRange();b.text=c;b.collapse(true);b.select();}
function Fk(){}
_=Fk.prototype=new Ek();_.n=bl;_.y=cl;_.tN=lw+'TransliterationEditorTextBoxBaseImplIE';_.tI=0;function jl(a){a.b=0;a.a='';}
function ll(e,b,a,f){var c,d;switch(mc(b)){case 1:{jl(e);break;}case 512:case 128:case 256:{if(bk(a,b)){jl(e);}else{c=Fj(a,b);if(c>0){nc(b);d=f.mb(e.a+ub(c));if(d.a>1){ak(a,d[1]);e.b=bq(d[1]);e.a=qq(c);}else{Ej(a,e.b);ak(a,d[0]);e.b=bq(d[0]);e.a+=ub(c);}}}break;}default:{break;}}}
function il(){}
_=il.prototype=new ep();_.tN=mw+'CharacterTransliterationHandler';_.tI=0;_.a='';_.b=0;function ol(){ol=bw;Bl=new qj();ul=new cm();}
function pl(g,c,f){ol();var a,d,e;e=tc(g);while(e!==null){try{d=qc(e,c);}catch(a){a=Eb(a);if(wb(a,11)){a;e=vc(e);continue;}else throw a;}if(d!==null){f.h(Bb(e,ed));}pl(e,c,f);e=vc(e);}}
function ql(b){ol();var a;a=qc(b,'transliteration');return rl(a);}
function rl(b){ol();var a,c,d,e;d=vl(b);e=new sj();c=vb(gv(d,'language'),1);a=vb(gv(d,'algorithm'),1);uj(e,a);vj(e,c);return e;}
function sl(b,a){ol();var c,d,e;c=et(new ct());pl(b,a,c);d=ob('[Lcom.google.gwt.user.client.Element;',[0],[4],[c.b],null);for(e=0;e<d.a;e++){d[e]=Bb(vb(it(c,e),4),ed);}return d;}
function tl(a){ol();var b,c;c=null;b=hq(rc(a,'tagName'));if(Dp('textarea',b)){c=new Fk();}else if(Dp('input',b)&&Dp('text',hq(rc(a,'type')))){c=new Fk();}else if(Dp('iframe',b)){c=new mk();}else{throw kp(new jp(),"Transliteration of '"+b+"' is not supported");}c.jb(a);return c;}
function vl(a){ol();var b,c,d,e,f,g;e=av(new fu());d=cq(iq(a),';');for(b=0;b<d.a;b++){f=cq(iq(d[b]),':');c=iq(f[0]);g=f.a>1?iq(f[1]):'';hv(e,c,g);}return e;}
function wl(a){ol();fm(ul,a);}
function xl(b,a){ol();em(ul,b,'transliteration',a);}
function yl(b,a){ol();var c,d;d=wc(b);c=pc(d,b);Bc(d,b);hf(zg(),a);yc(d,a.f,c);}
function zl(a){ol();var b;b=null;if(a===null||Dp('',a)){b=new il();}else if(Dp('character',a)){b=new il();}else{throw kp(new jp(),"Algorithm '"+a+"' is not supported");}return b;}
function Al(a){ol();var b;b=null;if(a===null||Dp('',a)){b=new gn();}else if(Dp('kannada',a)){b=zn(new kn());}else if(Dp('devanagari',a)){b=Em(new pm());}else{throw kp(new jp(),"Language '"+a+"' is not supported");}return b;}
var ul,Bl;function Dl(){Dl=bw;Fl=km(new im());}
function El(a){Dl();return mm(Fl,a);}
function am(a){Dl();return nm(Fl,a);}
var Fl;function bm(){}
_=bm.prototype=new ep();_.tN=ow+'ElementUtilImpl';_.tI=0;function em(h,g,d,e){var f=function(){var b=$wnd.event;var c=b.propertyName;if(c==d){var a=g.getAttribute(d);e.eb(a);}};g.attachEvent('onpropertychange',f);}
function fm(b,a){if(a.onclick)a.attachEvent('onclick',a.onclick);if(a.ondblclick)a.attachEvent('ondblclick',a.ondblclick);if(a.onmousedown)a.attachEvent('onmousedown',a.onmousedown);if(a.onmouseup)a.attachEvent('onmouseup',a.onmouseup);if(a.onmouseover)a.attachEvent('onmouseover',a.onmouseover);if(a.onmouseout)a.attachEvent('onmouseout',a.onmouseout);if(a.onmousemove)a.attachEvent('onmousemove',a.onmousemove);if(a.onkeydown)a.attachEvent('onkeydown',a.onkeydown);if(a.onkeypress)a.attachEvent('onkeypress',a.onkeypress);if(a.onkeyup)a.attachEvent('onkeyup',a.onkeyup);if(a.onchange)a.attachEvent('onchange',a.onchange);if(a.onfocus)a.attachEvent('onfocus',a.onfocus);if(a.onblur)a.attachEvent('onblur',a.onblur);if(a.onlosecapture)a.attachEvent('onlosecapture',a.onlosecapture);if(a.onscroll)a.attachEvent('onscroll',a.onscroll);if(a.onload)a.attachEvent('onload',a.onload);if(a.onerror)a.attachEvent('onerror',a.onerror);if(a.onmousewheel)a.attachEvent('onmousewheel',a.onmousewheel);}
function cm(){}
_=cm.prototype=new bm();_.tN=ow+'ElementUtilImplIE';_.tI=0;function hm(){}
_=hm.prototype=new ep();_.tN=ow+'TransliterationHelperImpl';_.tI=0;function jm(a){a.a=sq(pb('[C',0,(-1),[8,9,13,27,33,34,35,36,37,38,39,40]));}
function km(a){jm(a);return a;}
function mm(b,a){if(a.type=='keypress'&&a.keyCode!=27)return a.keyCode;return 0;}
function nm(b,a){if(mc(a)==128&&Fp(b.a,kc(a))>=0){return true;}return false;}
function im(){}
_=im.prototype=new hm();_.tN=ow+'TransliterationHelperImplIE';_.tI=0;function Em(a){a.c=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$VowelEntry;',0,13,[Bm(new Am(),'a',2309,0),Bm(new Am(),'A',2310,2366),Bm(new Am(),'aa',2310,2366),Bm(new Am(),'i',2311,2367),Bm(new Am(),'I',2312,2368),Bm(new Am(),'ee',2312,2368),Bm(new Am(),'u',2313,2369),Bm(new Am(),'U',2314,2370),Bm(new Am(),'oo',2314,2370),Bm(new Am(),'Ru',2315,2371),Bm(new Am(),'e',2319,2375),Bm(new Am(),'E',2319,2375),Bm(new Am(),'ai',2320,2376),Bm(new Am(),'ei',2320,2376),Bm(new Am(),'o',2323,2379),Bm(new Am(),'O',2323,2379),Bm(new Am(),'au',2324,2380),Bm(new Am(),'Om',2384,0)]);a.b=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$VowelEntry;',0,13,[Bm(new Am(),'M',0,2306),Bm(new Am(),'H',0,2307)]);a.a=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$ConsonantEntry;',0,12,[rm(new qm(),'k',2325),rm(new qm(),'K',2326),rm(new qm(),'kh',2326),rm(new qm(),'g',2327),rm(new qm(),'G',2328),rm(new qm(),'gh',2328),rm(new qm(),'~g',2329),rm(new qm(),'c',2330),rm(new qm(),'ch',2330),rm(new qm(),'C',2331),rm(new qm(),'Ch',2331),rm(new qm(),'j',2332),rm(new qm(),'J',2333),rm(new qm(),'jh',2333),rm(new qm(),'~j',2334),rm(new qm(),'T',2335),rm(new qm(),'Th',2336),rm(new qm(),'D',2337),rm(new qm(),'Dh',2338),rm(new qm(),'N',2339),rm(new qm(),'t',2340),rm(new qm(),'th',2341),rm(new qm(),'d',2342),rm(new qm(),'dh',2343),rm(new qm(),'n',2344),rm(new qm(),'p',2346),rm(new qm(),'P',2347),rm(new qm(),'ph',2347),rm(new qm(),'b',2348),rm(new qm(),'B',2349),rm(new qm(),'bh',2349),rm(new qm(),'m',2350),rm(new qm(),'y',2351),rm(new qm(),'Y',2351),rm(new qm(),'r',2352),rm(new qm(),'R',2352),rm(new qm(),'l',2354),rm(new qm(),'v',2357),rm(new qm(),'w',2357),rm(new qm(),'sh',2358),rm(new qm(),'Sh',2359),rm(new qm(),'s',2360),rm(new qm(),'h',2361),rm(new qm(),'L',2355),rm(new qm(),'M',2350),rm(new qm(),'H',2361),rm(new qm(),'S',2360)]);Bt(a.c);Bt(a.a);return a;}
function an(c,b){var a;for(a=c.a.a-1;a>=0;a--){if(eq(b.b,c.a[a].a)){wm(b,a);xm(b,fq(b.b,bq(c.a[a].a)));break;}}}
function bn(c,b){var a;for(a=c.b.a-1;a>=0;a--){if(eq(b.b,c.b[a].c)){ym(b,a);xm(b,fq(b.b,bq(c.b[a].c)));break;}}}
function cn(c,b){var a;for(a=c.c.a-1;a>=0;a--){if(eq(b.b,c.c[a].c)){zm(b,a);xm(b,fq(b.b,bq(c.c[a].c)));break;}}}
function dn(c,b){var a;a=new um();xm(a,b);cn(c,a);if(a.d>=0){bn(c,a);}else{an(c,a);if(a.a>=0){cn(c,a);if(a.d>=0){bn(c,a);}}}return a;}
function en(b,a){var c;c=op(new np());if(a.a>=0){pp(c,b.a[a.a].b);}if(a.d>=0){if(a.a>=0){if(b.c[a.d].a!=0){pp(c,b.c[a.d].a);}}else{pp(c,b.c[a.d].b);}if(a.c>=0){pp(c,b.b[a.c].a);}}else if(a.a>=0){pp(c,2381);}return up(c);}
function fn(i){var a,b,c,d,e,f,g,h;h=et(new ct());e=i;while(bq(e)>0){c=dn(this,e);if(Dp(c.b,e)){if(bq(e)>1){ft(h,gq(e,0,1));e=fq(e,1);continue;}break;}f=en(this,c);ft(h,f);e=c.b;}if(bq(e)>0){ft(h,e);}for(b=h.b-1;b>0;b--){d=sq(pb('[C',0,(-1),[2352,2315,2371]));a=Ap(it(h,b).tS(),0);if(Fp(d,a)>=0){mt(h,b-1,it(h,b-1).tS()+it(h,b));lt(h,b);}}g=ob('[Ljava.lang.String;',[0],[1],[h.b],null);for(b=0;b<g.a;b++){g[b]=vb(it(h,b),1);}return g;}
function pm(){}
_=pm.prototype=new ep();_.mb=fn;_.tN=pw+'DevanagariTransliterator';_.tI=0;_.a=null;_.b=null;_.c=null;function rm(b,a,c){b.a=a;b.b=xb(c);return b;}
function tm(a){return Cp(this.a,vb(a,12).a);}
function qm(){}
_=qm.prototype=new ep();_.i=tm;_.tN=pw+'DevanagariTransliterator$ConsonantEntry';_.tI=21;_.a=null;_.b=0;function wm(b,a){b.a=a;}
function xm(b,a){b.b=a;}
function ym(b,a){b.c=a;}
function zm(a,b){a.d=b;}
function um(){}
_=um.prototype=new ep();_.tN=pw+'DevanagariTransliterator$ParseResult';_.tI=0;_.a=(-1);_.b='';_.c=(-1);_.d=(-1);function Bm(d,c,b,a){d.c=c;d.b=xb(b);d.a=xb(a);return d;}
function Dm(a){return Cp(this.c,vb(a,13).c);}
function Am(){}
_=Am.prototype=new ep();_.i=Dm;_.tN=pw+'DevanagariTransliterator$VowelEntry';_.tI=22;_.a=0;_.b=0;_.c=null;function jn(a){if(a===null||Dp('',a)){return pb('[Ljava.lang.String;',0,1,['']);}return pb('[Ljava.lang.String;',0,1,[gq(a,0,bq(a)-1),fq(a,bq(a)-1)]);}
function gn(){}
_=gn.prototype=new ep();_.mb=jn;_.tN=pw+'EchoTransliterator';_.tI=0;function zn(a){a.c=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$VowelEntry;',0,15,[wn(new vn(),'a',3205,0),wn(new vn(),'A',3206,3262),wn(new vn(),'aa',3206,3262),wn(new vn(),'i',3207,3263),wn(new vn(),'I',3208,3264),wn(new vn(),'ee',3208,3264),wn(new vn(),'u',3209,3265),wn(new vn(),'U',3210,3266),wn(new vn(),'oo',3210,3266),wn(new vn(),'Ru',3211,3267),wn(new vn(),'RU',3296,3268),wn(new vn(),'e',3214,3270),wn(new vn(),'E',3215,3271),wn(new vn(),'ai',3216,3272),wn(new vn(),'ei',3216,3272),wn(new vn(),'o',3218,3274),wn(new vn(),'O',3219,3275),wn(new vn(),'au',3220,3276)]);a.b=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$VowelEntry;',0,15,[wn(new vn(),'M',0,3202),wn(new vn(),'H',0,3203)]);a.a=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$ConsonantEntry;',0,14,[mn(new ln(),'k',3221),mn(new ln(),'K',3222),mn(new ln(),'kh',3222),mn(new ln(),'g',3223),mn(new ln(),'G',3224),mn(new ln(),'gh',3224),mn(new ln(),'~g',3225),mn(new ln(),'c',3226),mn(new ln(),'ch',3226),mn(new ln(),'C',3227),mn(new ln(),'Ch',3227),mn(new ln(),'j',3228),mn(new ln(),'J',3229),mn(new ln(),'jh',3229),mn(new ln(),'~j',3230),mn(new ln(),'T',3231),mn(new ln(),'Th',3232),mn(new ln(),'D',3233),mn(new ln(),'Dh',3234),mn(new ln(),'N',3235),mn(new ln(),'t',3236),mn(new ln(),'th',3237),mn(new ln(),'d',3238),mn(new ln(),'dh',3239),mn(new ln(),'n',3240),mn(new ln(),'p',3242),mn(new ln(),'P',3243),mn(new ln(),'ph',3243),mn(new ln(),'b',3244),mn(new ln(),'B',3245),mn(new ln(),'bh',3245),mn(new ln(),'m',3246),mn(new ln(),'y',3247),mn(new ln(),'Y',3247),mn(new ln(),'r',3248),mn(new ln(),'R',3248),mn(new ln(),'rx',3249),mn(new ln(),'l',3250),mn(new ln(),'v',3253),mn(new ln(),'w',3253),mn(new ln(),'sh',3254),mn(new ln(),'Sh',3255),mn(new ln(),'s',3256),mn(new ln(),'h',3257),mn(new ln(),'~h',3257),mn(new ln(),'L',3251),mn(new ln(),'Lx',3294),mn(new ln(),'M',3246),mn(new ln(),'H',3257),mn(new ln(),'S',3256)]);Bt(a.c);Bt(a.a);return a;}
function Bn(c,b){var a;for(a=c.a.a-1;a>=0;a--){if(eq(b.b,c.a[a].a)){rn(b,a);sn(b,fq(b.b,bq(c.a[a].a)));break;}}}
function Cn(c,b){var a;for(a=c.b.a-1;a>=0;a--){if(eq(b.b,c.b[a].c)){tn(b,a);sn(b,fq(b.b,bq(c.b[a].c)));break;}}}
function Dn(c,b){var a;for(a=c.c.a-1;a>=0;a--){if(eq(b.b,c.c[a].c)){un(b,a);sn(b,fq(b.b,bq(c.c[a].c)));break;}}}
function En(c,b){var a;a=new pn();sn(a,b);Dn(c,a);if(a.d>=0){Cn(c,a);}else{Bn(c,a);if(a.a>=0){Dn(c,a);if(a.d>=0){Cn(c,a);}}}return a;}
function Fn(b,a){var c;c=op(new np());if(a.a>=0){pp(c,b.a[a.a].b);}if(a.d>=0){if(a.a>=0){if(b.c[a.d].a!=0){pp(c,b.c[a.d].a);}}else{pp(c,b.c[a.d].b);}if(a.c>=0){pp(c,b.b[a.c].a);}}else if(a.a>=0){pp(c,3277);}return up(c);}
function ao(i){var a,b,c,d,e,f,g,h;h=et(new ct());e=i;while(bq(e)>0){c=En(this,e);if(Dp(c.b,e)){if(bq(e)>1){ft(h,gq(e,0,1));e=fq(e,1);continue;}break;}f=Fn(this,c);ft(h,f);e=c.b;}if(bq(e)>0){ft(h,e);}for(b=h.b-1;b>0;b--){d=sq(pb('[C',0,(-1),[3248,3211,3267,3296,3268]));a=Ap(it(h,b).tS(),0);if(Fp(d,a)>=0){mt(h,b-1,it(h,b-1).tS()+it(h,b));lt(h,b);}}g=ob('[Ljava.lang.String;',[0],[1],[h.b],null);for(b=0;b<g.a;b++){g[b]=vb(it(h,b),1);}return g;}
function kn(){}
_=kn.prototype=new ep();_.mb=ao;_.tN=pw+'KannadaTransliterator';_.tI=0;_.a=null;_.b=null;_.c=null;function mn(b,a,c){b.a=a;b.b=xb(c);return b;}
function on(a){return Cp(this.a,vb(a,14).a);}
function ln(){}
_=ln.prototype=new ep();_.i=on;_.tN=pw+'KannadaTransliterator$ConsonantEntry';_.tI=23;_.a=null;_.b=0;function rn(b,a){b.a=a;}
function sn(b,a){b.b=a;}
function tn(b,a){b.c=a;}
function un(a,b){a.d=b;}
function pn(){}
_=pn.prototype=new ep();_.tN=pw+'KannadaTransliterator$ParseResult';_.tI=0;_.a=(-1);_.b='';_.c=(-1);_.d=(-1);function wn(d,c,b,a){d.c=c;d.b=xb(b);d.a=xb(a);return d;}
function yn(a){return Cp(this.c,vb(a,15).c);}
function vn(){}
_=vn.prototype=new ep();_.i=yn;_.tN=pw+'KannadaTransliterator$VowelEntry';_.tI=24;_.a=0;_.b=0;_.c=null;function fo(c){var a,d,e,f;e=sl(c,(ol(),Bl,'transliteration'));for(f=0;f<e.a;f++){d=e[f];try{ho(d);}catch(a){a=Eb(a);if(wb(a,11)){}else throw a;}}}
function go(){$wnd.kditor_autoInjectTransliterability=function(a){fo(a);};$wnd.kditor_makeTransliterable=function(a){ho(a);};$wnd.kditor_transliterate=function(b,a){return jo(b,a);};$wnd.kditor_transliterateForHtml=function(b,a){return io(b,a);};}
function ho(b){var a;wl(b);a=Cj(new xj(),b);yl(b,a);}
function jo(d,b){var a,c,e,f;f=Al(b);c=f.mb(d);e=op(new np());for(a=0;a<c.a;a++){qp(e,c[a]);}return up(e);}
function io(e,d){var a,b,c,f;f=jo(e,d);b='';for(c=0;c<bq(f);c++){a=Ap(f,c);if(a>=3072&&a<3328){b+='&#'+a+';';}else{b+=ub(Ap(f,c));}}return b;}
function lo(){}
_=lo.prototype=new jp();_.tN=rw+'ArrayStoreException';_.tI=25;function qo(a){return qq(a);}
function so(b,a){kp(b,a);return b;}
function ro(){}
_=ro.prototype=new jp();_.tN=rw+'ClassCastException';_.tI=26;function Ao(b,a){kp(b,a);return b;}
function zo(){}
_=zo.prototype=new jp();_.tN=rw+'IllegalStateException';_.tI=27;function Do(b,a){kp(b,a);return b;}
function Co(){}
_=Co.prototype=new jp();_.tN=rw+'IndexOutOfBoundsException';_.tI=28;function bp(a,b){return a<b?a:b;}
function cp(){}
_=cp.prototype=new jp();_.tN=rw+'NegativeArraySizeException';_.tI=29;function Ap(b,a){return b.charCodeAt(a);}
function Cp(f,c){var a,b,d,e,g,h;h=bq(f);e=bq(c);b=bp(h,e);for(a=0;a<b;a++){g=Ap(f,a);d=Ap(c,a);if(g!=d){return g-d;}}return h-e;}
function Dp(b,a){if(!wb(a,1))return false;return kq(b,a);}
function Ep(g){var a=nq;if(!a){a=nq={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function Fp(b,a){return b.indexOf(String.fromCharCode(a));}
function aq(b,a){return b.indexOf(a);}
function bq(a){return a.length;}
function cq(b,a){return dq(b,a,0);}
function dq(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=jq(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function eq(b,a){return aq(b,a)==0;}
function fq(b,a){return b.substr(a,b.length-a);}
function gq(c,a,b){return c.substr(a,b-a);}
function hq(a){return a.toLowerCase();}
function iq(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function jq(a){return ob('[Ljava.lang.String;',[0],[1],[a],null);}
function kq(a,b){return String(a)==b;}
function lq(a){if(wb(a,1)){return Cp(this,vb(a,1));}else{throw so(new ro(),'Cannot compare '+a+" with String '"+this+"'");}}
function mq(a){return Dp(this,a);}
function oq(){return Ep(this);}
function pq(){return this;}
function qq(a){return String.fromCharCode(a);}
function tq(e,b,a){var c,d;if(b<0){throw yp(new xp(),b);}if(a<0){throw yp(new xp(),a);}if(b>e.a-a){throw yp(new xp(),b+a);}c='';d=b+a;while(b<d){c+=qo(e[b++]);}return c;}
function sq(a){return tq(a,0,a.a);}
function rq(a){return a!==null?a.tS():'null';}
_=String.prototype;_.i=lq;_.eQ=mq;_.hC=oq;_.tS=pq;_.tN=rw+'String';_.tI=2;var nq=null;function op(a){rp(a);return a;}
function pp(a,b){return qp(a,qq(b));}
function qp(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function rp(a){sp(a,'');}
function sp(b,a){b.js=[a];b.length=a.length;}
function up(a){a.E();return a.js[0];}
function vp(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function wp(){return up(this);}
function np(){}
_=np.prototype=new ep();_.E=vp;_.tS=wp;_.tN=rw+'StringBuffer';_.tI=0;function yp(b,a){Do(b,'String index out of range: '+a);return b;}
function xp(){}
_=xp.prototype=new Co();_.tN=rw+'StringIndexOutOfBoundsException';_.tI=30;function wq(a){return t(a);}
function Cq(b,a){kp(b,a);return b;}
function Bq(){}
_=Bq.prototype=new jp();_.tN=rw+'UnsupportedOperationException';_.tI=31;function Fq(d,a,b){var c;while(a.v()){c=a.D();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function br(a){throw Cq(new Bq(),'add');}
function cr(b){var a;a=Fq(this,this.B(),b);return a!==null;}
function dr(){var a,b,c;c=op(new np());a=null;qp(c,'[');b=this.B();while(b.v()){if(a!==null){qp(c,a);}else{a=', ';}qp(c,rq(b.D()));}qp(c,']');return up(c);}
function Eq(){}
_=Eq.prototype=new ep();_.h=br;_.l=cr;_.tS=dr;_.tN=sw+'AbstractCollection';_.tI=0;function or(b,a){throw Do(new Co(),'Index: '+a+', Size: '+b.b);}
function pr(a){return gr(new fr(),a);}
function qr(b,a){throw Cq(new Bq(),'add');}
function rr(a){this.g(this.lb(),a);return true;}
function sr(e){var a,b,c,d,f;if(e===this){return true;}if(!wb(e,16)){return false;}f=vb(e,16);if(this.lb()!=f.lb()){return false;}c=pr(this);d=f.B();while(ir(c)){a=jr(c);b=jr(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function tr(){var a,b,c,d;c=1;a=31;b=pr(this);while(ir(b)){d=jr(b);c=31*c+(d===null?0:d.hC());}return c;}
function ur(){return pr(this);}
function vr(a){throw Cq(new Bq(),'remove');}
function er(){}
_=er.prototype=new Eq();_.g=qr;_.h=rr;_.eQ=sr;_.hC=tr;_.B=ur;_.ib=vr;_.tN=sw+'AbstractList';_.tI=32;function gr(b,a){b.c=a;return b;}
function ir(a){return a.a<a.c.lb();}
function jr(a){if(!ir(a)){throw new Dv();}return a.c.t(a.b=a.a++);}
function kr(a){if(a.b<0){throw new zo();}a.c.ib(a.b);a.a=a.b;a.b=(-1);}
function lr(){return ir(this);}
function mr(){return jr(this);}
function fr(){}
_=fr.prototype=new ep();_.v=lr;_.D=mr;_.tN=sw+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function us(f,d,e){var a,b,c;for(b=Bu(f.q());uu(b);){a=vu(b);c=a.r();if(d===null?c===null:d.eQ(c)){if(e){wu(b);}return a;}}return null;}
function vs(b){var a;a=b.q();return yr(new xr(),b,a);}
function ws(b){var a;a=fv(b);return gs(new fs(),b,a);}
function xs(a){return us(this,a,false)!==null;}
function ys(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!wb(d,17)){return false;}f=vb(d,17);c=vs(this);e=f.C();if(!Fs(c,e)){return false;}for(a=Ar(c);bs(a);){b=cs(a);h=this.u(b);g=f.u(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function zs(b){var a;a=us(this,b,false);return a===null?null:a.s();}
function As(){var a,b,c;b=0;for(c=Bu(this.q());uu(c);){a=vu(c);b+=a.hC();}return b;}
function Bs(){return vs(this);}
function Cs(){var a,b,c,d;d='{';a=false;for(c=Bu(this.q());uu(c);){b=vu(c);if(a){d+=', ';}else{a=true;}d+=rq(b.r());d+='=';d+=rq(b.s());}return d+'}';}
function wr(){}
_=wr.prototype=new ep();_.k=xs;_.eQ=ys;_.u=zs;_.hC=As;_.C=Bs;_.tS=Cs;_.tN=sw+'AbstractMap';_.tI=33;function Fs(e,b){var a,c,d;if(b===e){return true;}if(!wb(b,18)){return false;}c=vb(b,18);if(c.lb()!=e.lb()){return false;}for(a=c.B();a.v();){d=a.D();if(!e.l(d)){return false;}}return true;}
function at(a){return Fs(this,a);}
function bt(){var a,b,c;a=0;for(b=this.B();b.v();){c=b.D();if(c!==null){a+=c.hC();}}return a;}
function Ds(){}
_=Ds.prototype=new Eq();_.eQ=at;_.hC=bt;_.tN=sw+'AbstractSet';_.tI=34;function yr(b,a,c){b.a=a;b.b=c;return b;}
function Ar(b){var a;a=Bu(b.b);return Fr(new Er(),b,a);}
function Br(a){return this.a.k(a);}
function Cr(){return Ar(this);}
function Dr(){return this.b.a.c;}
function xr(){}
_=xr.prototype=new Ds();_.l=Br;_.B=Cr;_.lb=Dr;_.tN=sw+'AbstractMap$1';_.tI=35;function Fr(b,a,c){b.a=c;return b;}
function bs(a){return a.a.v();}
function cs(b){var a;a=b.a.D();return a.r();}
function ds(){return bs(this);}
function es(){return cs(this);}
function Er(){}
_=Er.prototype=new ep();_.v=ds;_.D=es;_.tN=sw+'AbstractMap$2';_.tI=0;function gs(b,a,c){b.a=a;b.b=c;return b;}
function is(b){var a;a=Bu(b.b);return ns(new ms(),b,a);}
function js(a){return ev(this.a,a);}
function ks(){return is(this);}
function ls(){return this.b.a.c;}
function fs(){}
_=fs.prototype=new Eq();_.l=js;_.B=ks;_.lb=ls;_.tN=sw+'AbstractMap$3';_.tI=0;function ns(b,a,c){b.a=c;return b;}
function ps(a){return a.a.v();}
function qs(a){var b;b=a.a.D().s();return b;}
function rs(){return ps(this);}
function ss(){return qs(this);}
function ms(){}
_=ms.prototype=new ep();_.v=rs;_.D=ss;_.tN=sw+'AbstractMap$4';_.tI=0;function dt(a){{gt(a);}}
function et(a){dt(a);return a;}
function ft(b,a){wt(b.a,b.b++,a);return true;}
function gt(a){a.a=D();a.b=0;}
function it(b,a){if(a<0||a>=b.b){or(b,a);}return st(b.a,a);}
function jt(b,a){return kt(b,a,0);}
function kt(c,b,a){if(a<0){or(c,a);}for(;a<c.b;++a){if(rt(b,st(c.a,a))){return a;}}return (-1);}
function lt(c,a){var b;b=it(c,a);ut(c.a,a,1);--c.b;return b;}
function mt(d,a,b){var c;c=it(d,a);wt(d.a,a,b);return c;}
function ot(a,b){if(a<0||a>this.b){or(this,a);}nt(this.a,a,b);++this.b;}
function pt(a){return ft(this,a);}
function nt(a,b,c){a.splice(b,0,c);}
function qt(a){return jt(this,a)!=(-1);}
function rt(a,b){return a===b||a!==null&&a.eQ(b);}
function tt(a){return it(this,a);}
function st(a,b){return a[b];}
function vt(a){return lt(this,a);}
function ut(a,c,b){a.splice(c,b);}
function wt(a,b,c){a[b]=c;}
function xt(){return this.b;}
function ct(){}
_=ct.prototype=new er();_.g=ot;_.h=pt;_.l=qt;_.t=tt;_.ib=vt;_.lb=xt;_.tN=sw+'ArrayList';_.tI=36;_.a=null;_.b=0;function At(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.j(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function Bt(a){At(a,a.a,(cu(),du));}
function cu(){cu=bw;du=new Ft();}
var du;function bu(a,b){return vb(a,19).i(b);}
function Ft(){}
_=Ft.prototype=new ep();_.j=bu;_.tN=sw+'Comparators$1';_.tI=0;function cv(){cv=bw;jv=pv();}
function Fu(a){{bv(a);}}
function av(a){cv();Fu(a);return a;}
function bv(a){a.a=D();a.d=E();a.b=Bb(jv,z);a.c=0;}
function dv(b,a){if(wb(a,1)){return tv(b.d,vb(a,1))!==jv;}else if(a===null){return b.b!==jv;}else{return sv(b.a,a,a.hC())!==jv;}}
function ev(a,b){if(a.b!==jv&&rv(a.b,b)){return true;}else if(ov(a.d,b)){return true;}else if(mv(a.a,b)){return true;}return false;}
function fv(a){return zu(new qu(),a);}
function gv(c,a){var b;if(wb(a,1)){b=tv(c.d,vb(a,1));}else if(a===null){b=c.b;}else{b=sv(c.a,a,a.hC());}return b===jv?null:b;}
function hv(c,a,d){var b;if(a!==null){b=wv(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=vv(c.a,a,d,Ep(a));}if(b===jv){++c.c;return null;}else{return b;}}
function iv(c,a){var b;if(wb(a,1)){b=yv(c.d,vb(a,1));}else if(a===null){b=c.b;c.b=Bb(jv,z);}else{b=xv(c.a,a,a.hC());}if(b===jv){return null;}else{--c.c;return b;}}
function kv(e,c){cv();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.h(a[f]);}}}}
function lv(d,a){cv();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=ju(c.substring(1),e);a.h(b);}}}
function mv(f,h){cv();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.s();if(rv(h,d)){return true;}}}}return false;}
function nv(a){return dv(this,a);}
function ov(c,d){cv();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(rv(d,a)){return true;}}}return false;}
function pv(){cv();}
function qv(){return fv(this);}
function rv(a,b){cv();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function uv(a){return gv(this,a);}
function sv(f,h,e){cv();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(rv(h,d)){return c.s();}}}}
function tv(b,a){cv();return b[':'+a];}
function vv(f,h,j,e){cv();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(rv(h,d)){var i=c.s();c.kb(j);return i;}}}else{a=f[e]=[];}var c=ju(h,j);a.push(c);}
function wv(c,a,d){cv();a=':'+a;var b=c[a];c[a]=d;return b;}
function xv(f,h,e){cv();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(rv(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.s();}}}}
function yv(c,a){cv();a=':'+a;var b=c[a];delete c[a];return b;}
function fu(){}
_=fu.prototype=new wr();_.k=nv;_.q=qv;_.u=uv;_.tN=sw+'HashMap';_.tI=37;_.a=null;_.b=null;_.c=0;_.d=null;var jv;function hu(b,a,c){b.a=a;b.b=c;return b;}
function ju(a,b){return hu(new gu(),a,b);}
function ku(b){var a;if(wb(b,20)){a=vb(b,20);if(rv(this.a,a.r())&&rv(this.b,a.s())){return true;}}return false;}
function lu(){return this.a;}
function mu(){return this.b;}
function nu(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function ou(a){var b;b=this.b;this.b=a;return b;}
function pu(){return this.a+'='+this.b;}
function gu(){}
_=gu.prototype=new ep();_.eQ=ku;_.r=lu;_.s=mu;_.hC=nu;_.kb=ou;_.tS=pu;_.tN=sw+'HashMap$EntryImpl';_.tI=38;_.a=null;_.b=null;function zu(b,a){b.a=a;return b;}
function Bu(a){return su(new ru(),a.a);}
function Cu(c){var a,b,d;if(wb(c,20)){a=vb(c,20);b=a.r();if(dv(this.a,b)){d=gv(this.a,b);return rv(a.s(),d);}}return false;}
function Du(){return Bu(this);}
function Eu(){return this.a.c;}
function qu(){}
_=qu.prototype=new Ds();_.l=Cu;_.B=Du;_.lb=Eu;_.tN=sw+'HashMap$EntrySet';_.tI=39;function su(c,b){var a;c.c=b;a=et(new ct());if(c.c.b!==(cv(),jv)){ft(a,hu(new gu(),null,c.c.b));}lv(c.c.d,a);kv(c.c.a,a);c.a=pr(a);return c;}
function uu(a){return ir(a.a);}
function vu(a){return a.b=vb(jr(a.a),20);}
function wu(a){if(a.b===null){throw Ao(new zo(),'Must call next() before remove().');}else{kr(a.a);iv(a.c,a.b.r());a.b=null;}}
function xu(){return uu(this);}
function yu(){return vu(this);}
function ru(){}
_=ru.prototype=new ep();_.v=xu;_.D=yu;_.tN=sw+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function Dv(){}
_=Dv.prototype=new jp();_.tN=sw+'NoSuchElementException';_.tI=40;function ko(){oj(new mj());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ko();}catch(a){b(d);}else{ko();}}
var Ab=[{},{},{1:1,19:1},{3:1},{3:1},{3:1,11:1},{3:1,11:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{6:1,7:1,8:1,9:1,10:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{12:1,19:1},{13:1,19:1},{14:1,19:1},{15:1,19:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{16:1},{17:1},{18:1},{18:1},{16:1},{17:1},{20:1},{18:1},{3:1,11:1}];if (com_kditor_Kditor) {  var __gwt_initHandlers = com_kditor_Kditor.__gwt_initHandlers;  com_kditor_Kditor.onScriptLoad(gwtOnLoad);}})();