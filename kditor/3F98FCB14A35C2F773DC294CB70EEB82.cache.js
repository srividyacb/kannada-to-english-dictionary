(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,Av='com.google.gwt.core.client.',Bv='com.google.gwt.lang.',Cv='com.google.gwt.user.client.',Dv='com.google.gwt.user.client.impl.',Ev='com.google.gwt.user.client.ui.',Fv='com.google.gwt.user.client.ui.impl.',aw='com.kditor.client.',bw='com.kditor.client.bean.',cw='com.kditor.client.editor.',dw='com.kditor.client.editor.impl.',ew='com.kditor.client.handler.',fw='com.kditor.client.helper.',gw='com.kditor.client.helper.impl.',hw='com.kditor.client.transliterator.',iw='com.kditor.client.util.',jw='java.lang.',kw='java.util.';function zv(){}
function Eo(a){return this===a;}
function Fo(){return oq(this);}
function ap(){return this.tN+'@'+this.hC();}
function Co(){}
_=Co.prototype={};_.eQ=Eo;_.hC=Fo;_.tS=ap;_.toString=function(){return this.tS();};_.tN=jw+'Object';_.tI=1;function o(a){return a==null?null:a.tN;}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=u());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=u());}
function u(){return ++v;}
var v=0;function qq(b,a){b.a=a;return b;}
function sq(){var a,b;a=o(this);b=this.a;if(b!==null){return a+': '+b;}else{return a;}}
function pq(){}
_=pq.prototype=new Co();_.tS=sq;_.tN=jw+'Throwable';_.tI=3;_.a=null;function po(b,a){qq(b,a);return b;}
function oo(){}
_=oo.prototype=new pq();_.tN=jw+'Exception';_.tI=4;function cp(b,a){po(b,a);return b;}
function bp(){}
_=bp.prototype=new oo();_.tN=jw+'RuntimeException';_.tI=5;function x(c,b,a){cp(c,'JavaScript '+b+' exception: '+a);return c;}
function w(){}
_=w.prototype=new bp();_.tN=Av+'JavaScriptException';_.tI=6;function B(b,a){if(!wb(a,2)){return false;}return F(b,vb(a,2));}
function C(a){return s(a);}
function D(){return [];}
function E(){return {};}
function ab(a){return B(this,a);}
function F(a,b){return a===b;}
function bb(){return C(this);}
function db(){return cb(this);}
function cb(a){if(a.toString)return a.toString();return '[object]';}
function z(){}
_=z.prototype=new Co();_.eQ=ab;_.hC=bb;_.tS=db;_.tN=Av+'JavaScriptObject';_.tI=7;function hb(c,a,d,b,e){c.a=a;c.b=b;c.tN=e;c.tI=d;return c;}
function jb(a,b,c){return a[b]=c;}
function kb(b,a){return b[a];}
function mb(b,a){return b[a];}
function lb(a){return a.length;}
function ob(e,d,c,b,a){return nb(e,d,c,b,0,lb(b),a);}
function nb(j,i,g,c,e,a,b){var d,f,h;if((f=kb(c,e))<0){throw new Ao();}h=hb(new gb(),f,kb(i,e),kb(g,e),j);++e;if(e<a){j=Dp(j,1);for(d=0;d<f;++d){jb(h,d,nb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){jb(h,d,b);}}return h;}
function pb(f,e,c,g){var a,b,d;b=lb(g);d=hb(new gb(),b,e,c,f);for(a=0;a<b;++a){jb(d,a,mb(g,a));}return d;}
function qb(a,b,c){if(c!==null&&a.b!=0&& !wb(c,a.b)){throw new co();}return jb(a,b,c);}
function gb(){}
_=gb.prototype=new Co();_.tN=Bv+'Array';_.tI=0;function tb(b,a){return !(!(b&&Ab[b][a]));}
function ub(a){return String.fromCharCode(a);}
function vb(b,a){if(b!=null)tb(b.tI,a)||zb();return b;}
function wb(b,a){return b!=null&&tb(b.tI,a);}
function xb(a){return a&65535;}
function zb(){throw new jo();}
function yb(a){if(a!==null){throw new jo();}return a;}
function Bb(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var Ab;function Eb(a){if(wb(a,3)){return a;}return x(new w(),ac(a),Fb(a));}
function Fb(a){return a.message;}
function ac(a){return a.name;}
function cc(){cc=zv;Cc=Cs(new As());{wc=new fe();le(wc);}}
function dc(b,a){cc();Be(wc,b,a);}
function ec(a,b){cc();return ie(wc,a,b);}
function fc(){cc();return De(wc,'div');}
function ic(b,a,d){cc();var c;c=p;{hc(b,a,d);}}
function hc(b,a,c){cc();var d;if(a===Bc){if(lc(b)==8192){Bc=null;}}d=gc;gc=b;try{c.E(b);}finally{gc=d;}}
function jc(b,a){cc();Ee(wc,b,a);}
function kc(a){cc();return se(wc,a);}
function lc(a){cc();return Fe(wc,a);}
function mc(a){cc();te(wc,a);}
function nc(a){cc();return ue(wc,a);}
function oc(b,a){cc();return je(wc,b,a);}
function pc(b,a){cc();return af(wc,b,a);}
function qc(a,b){cc();return bf(wc,a,b);}
function rc(a){cc();return cf(wc,a);}
function sc(a){cc();return ve(wc,a);}
function tc(a){cc();return df(wc,a);}
function uc(a){cc();return we(wc,a);}
function vc(a){cc();return xe(wc,a);}
function xc(c,a,b){cc();ze(wc,c,a,b);}
function yc(b,a){cc();return me(wc,b,a);}
function zc(a){cc();var b,c;c=true;if(Cc.b>0){b=yb(at(Cc,Cc.b-1));if(!(c=null.nb())){jc(a,true);mc(a);}}return c;}
function Ac(b,a){cc();ef(wc,b,a);}
function Dc(a,b,c){cc();ff(wc,a,b,c);}
function Ec(a,b){cc();gf(wc,a,b);}
function Fc(a,b){cc();hf(wc,a,b);}
function ad(b,a,c){cc();jf(wc,b,a,c);}
function bd(a,b){cc();oe(wc,a,b);}
function cd(a){cc();return pe(wc,a);}
var gc=null,wc=null,Bc=null,Cc;function fd(a){if(wb(a,4)){return ec(this,vb(a,4));}return B(Bb(this,dd),a);}
function gd(){return C(Bb(this,dd));}
function hd(){return cd(this);}
function dd(){}
_=dd.prototype=new z();_.eQ=fd;_.hC=gd;_.tS=hd;_.tN=Cv+'Element';_.tI=8;function ld(a){return B(Bb(this,id),a);}
function md(){return C(Bb(this,id));}
function nd(){return nc(this);}
function id(){}
_=id.prototype=new z();_.eQ=ld;_.hC=md;_.tS=nd;_.tN=Cv+'Event';_.tI=9;function td(){td=zv;vd=Cs(new As());{ud();}}
function ud(){td();zd(new pd());}
var vd;function rd(){while((td(),vd).b>0){yb(at((td(),vd),0)).nb();}}
function sd(){return null;}
function pd(){}
_=pd.prototype=new Co();_.eb=rd;_.fb=sd;_.tN=Cv+'Timer$1';_.tI=10;function yd(){yd=zv;Ad=Cs(new As());ce=Cs(new As());{Ed();}}
function zd(a){yd();Ds(Ad,a);}
function Bd(){yd();var a,b;for(a=hr(Ad);ar(a);){b=vb(br(a),5);b.eb();}}
function Cd(){yd();var a,b,c,d;d=null;for(a=hr(Ad);ar(a);){b=vb(br(a),5);c=b.fb();{d=c;}}return d;}
function Dd(){yd();var a,b;for(a=hr(ce);ar(a);){b=yb(br(a));null.nb();}}
function Ed(){yd();__gwt_initHandlers(function(){be();},function(){return ae();},function(){Fd();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function Fd(){yd();var a;a=p;{Bd();}}
function ae(){yd();var a;a=p;{return Cd();}}
function be(){yd();var a;a=p;{Dd();}}
var Ad,ce;function Be(c,b,a){b.appendChild(a);}
function De(b,a){return $doc.createElement(a);}
function Ee(c,b,a){b.cancelBubble=a;}
function Fe(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function af(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function bf(d,a,b){var c=a[b];return c==null?null:String(c);}
function cf(b,a){return a.__eventBits||0;}
function df(c,a){var b=a.innerHTML;return b==null?null:b;}
function ef(c,b,a){b.removeChild(a);}
function ff(c,a,b,d){a[b]=d;}
function gf(c,a,b){a.__listener=b;}
function hf(c,a,b){if(!b){b='';}a.innerHTML=b;}
function jf(c,b,a,d){b.style[a]=d;}
function de(){}
_=de.prototype=new Co();_.tN=Dv+'DOMImpl';_.tI=0;function se(b,a){return a.target||null;}
function te(b,a){a.preventDefault();}
function ue(b,a){return a.toString();}
function ve(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function we(c,a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b||null;}
function xe(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function ye(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){ic(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!zc(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)ic(b,a,c);};$wnd.__captureElem=null;}
function ze(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function Ae(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function qe(){}
_=qe.prototype=new de();_.tN=Dv+'DOMImplStandard';_.tI=0;function ie(c,a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function je(d,c,e){var b=0,a=c.firstChild;while(a){if(a.isSameNode(e)){return b;}if(a.nodeType==1){++b;}a=a.nextSibling;}return -1;}
function le(a){ye(a);ke(a);}
function ke(d){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function me(d,c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function oe(c,b,a){Ae(c,b,a);ne(c,b,a);}
function ne(c,b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function pe(d,a){var b=a.cloneNode(true);var c=$doc.createElement('DIV');c.appendChild(b);outer=c.innerHTML;b.innerHTML='';return outer;}
function ee(){}
_=ee.prototype=new qe();_.tN=Dv+'DOMImplMozilla';_.tI=0;function fe(){}
_=fe.prototype=new ee();_.tN=Dv+'DOMImplMozillaOld';_.tI=0;function ih(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function jh(b,a){if(b.f!==null){ih(b,b.f,a);}b.f=a;}
function kh(b,a){mh(b.f,a);}
function lh(b,a){bd(b.f,a|rc(b.f));}
function mh(a,b){Dc(a,'className',b);}
function nh(){if(this.f===null){return '(null handle)';}return cd(this.f);}
function gh(){}
_=gh.prototype=new Co();_.tS=nh;_.tN=Ev+'UIObject';_.tI=0;_.f=null;function ai(a){if(a.d){throw so(new ro(),"Should only call onAttach when the widget is detached from the browser's document");}a.d=true;Ec(a.f,a);a.n();a.bb();}
function bi(a){if(!a.d){throw so(new ro(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.db();}finally{a.o();Ec(a.f,null);a.d=false;}}
function ci(a){if(a.e!==null){pf(a.e,a);}else if(a.e!==null){throw so(new ro(),"This widget's parent does not implement HasWidgets");}}
function di(b,a){if(b.d){Ec(b.f,null);}jh(b,a);if(b.d){Ec(a,b);}}
function ei(c,b){var a;a=c.e;if(b===null){if(a!==null&&a.d){c.F();}c.e=null;}else{if(a!==null){throw so(new ro(),'Cannot set a new parent without first clearing the old parent');}c.e=b;if(b.d){c.D();}}}
function fi(){}
function gi(){}
function hi(){ai(this);}
function ii(a){}
function ji(){bi(this);}
function ki(){}
function li(){}
function mi(a){di(this,a);}
function oh(){}
_=oh.prototype=new gh();_.n=fi;_.o=gi;_.D=hi;_.E=ii;_.F=ji;_.bb=ki;_.db=li;_.hb=mi;_.tN=Ev+'Widget';_.tI=11;_.d=false;_.e=null;function fg(b,a){ei(a,b);}
function hg(b,a){ei(a,null);}
function ig(){var a,b;for(b=this.z();th(b);){a=uh(b);a.D();}}
function jg(){var a,b;for(b=this.z();th(b);){a=uh(b);a.F();}}
function kg(){}
function lg(){}
function eg(){}
_=eg.prototype=new oh();_.n=ig;_.o=jg;_.bb=kg;_.db=lg;_.tN=Ev+'Panel';_.tI=12;function sf(a){a.a=xh(new ph(),a);}
function tf(a){sf(a);return a;}
function uf(c,a,b){ci(a);yh(c.a,a);dc(b,a.f);fg(c,a);}
function wf(b,c){var a;if(c.e!==b){return false;}hg(b,c);a=c.f;Ac(vc(a),a);Eh(b.a,c);return true;}
function xf(){return Ch(this.a);}
function rf(){}
_=rf.prototype=new eg();_.z=xf;_.tN=Ev+'ComplexPanel';_.tI=13;function mf(a){tf(a);a.hb(fc());ad(a.f,'position','relative');ad(a.f,'overflow','hidden');return a;}
function nf(a,b){uf(a,b,a.f);}
function pf(b,c){var a;a=wf(b,c);if(a){qf(c.f);}return a;}
function qf(a){ad(a,'left','');ad(a,'top','');ad(a,'position','');}
function lf(){}
_=lf.prototype=new rf();_.tN=Ev+'AbsolutePanel';_.tI=14;function Af(){Af=zv;wi(),yi;}
function zf(a){wi(),yi;return a;}
function Bf(b,a){switch(lc(a)){case 1:break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function Cf(b,a){di(b,a);lh(b,7041);}
function Df(a){Bf(this,a);}
function Ef(a){Cf(this,a);}
function yf(){}
_=yf.prototype=new oh();_.E=Df;_.hb=Ef;_.tN=Ev+'FocusWidget';_.tI=15;function rg(){rg=zv;wi(),yi;}
function pg(a){a.b=Bi(new Ai());}
function qg(a){wi(),yi;zf(a);pg(a);qk(a,a.b.b);kh(a,'gwt-RichTextArea');return a;}
function sg(a){ai(a);a.b.w();}
function tg(){sg(this);}
function ug(a){switch(lc(a)){case 4:case 8:case 64:case 16:case 32:break;default:Bf(this,a);}}
function vg(){bi(this);this.b.lb();}
function mg(){}
_=mg.prototype=new yf();_.D=tg;_.E=ug;_.F=vg;_.tN=Ev+'RichTextArea';_.tI=16;function Cg(){Cg=zv;bh=yu(new Dt());}
function Bg(b,a){Cg();mf(b);if(a===null){a=Dg();}b.hb(a);b.D();return b;}
function Eg(){Cg();return Fg(null);}
function Fg(c){Cg();var a,b;b=vb(Eu(bh,c),6);if(b!==null){return b;}a=null;if(bh.c==0){ah();}Fu(bh,c,b=Bg(new wg(),a));return b;}
function Dg(){Cg();return $doc.body;}
function ah(){Cg();zd(new xg());}
function wg(){}
_=wg.prototype=new lf();_.tN=Ev+'RootPanel';_.tI=17;var bh;function zg(){var a,b;for(b=as(os((Cg(),bh)));hs(b);){a=vb(is(b),6);if(a.d){a.F();}}}
function Ag(){return null;}
function xg(){}
_=xg.prototype=new Co();_.eb=zg;_.fb=Ag;_.tN=Ev+'RootPanel$1';_.tI=18;function xh(b,a){b.a=ob('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[4],null);return b;}
function yh(a,b){Bh(a,b,a.b);}
function Ah(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function Bh(d,e,a){var b,c;if(a<0||a>d.b){throw new uo();}if(d.b==d.a.a){c=ob('[Lcom.google.gwt.user.client.ui.Widget;',[0],[8],[d.a.a*2],null);for(b=0;b<d.a.a;++b){qb(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){qb(d.a,b,d.a[b-1]);}qb(d.a,a,e);}
function Ch(a){return rh(new qh(),a);}
function Dh(c,b){var a;if(b<0||b>=c.b){throw new uo();}--c.b;for(a=b;a<c.b;++a){qb(c.a,a,c.a[a+1]);}qb(c.a,c.b,null);}
function Eh(b,c){var a;a=Ah(b,c);if(a==(-1)){throw new vv();}Dh(b,a);}
function ph(){}
_=ph.prototype=new Co();_.tN=Ev+'WidgetCollection';_.tI=0;_.a=null;_.b=0;function rh(b,a){b.b=a;return b;}
function th(a){return a.a<a.b.b-1;}
function uh(a){if(a.a>=a.b.b){throw new vv();}return a.b.a[++a.a];}
function vh(){return th(this);}
function wh(){return uh(this);}
function qh(){}
_=qh.prototype=new Co();_.u=vh;_.B=wh;_.tN=Ev+'WidgetCollection$WidgetIterator';_.tI=0;_.a=(-1);function wi(){wi=zv;xi=qi(new oi());yi=xi!==null?vi(new ni()):xi;}
function vi(a){wi();return a;}
function ni(){}
_=ni.prototype=new Co();_.tN=Fv+'FocusImpl';_.tI=0;var xi,yi;function ri(){ri=zv;wi();}
function pi(a){si(a);ti(a);ui(a);}
function qi(a){ri();vi(a);pi(a);return a;}
function si(b){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function ti(b){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function ui(a){return function(){this.firstChild.focus();};}
function oi(){}
_=oi.prototype=new ni();_.tN=Fv+'FocusImplOld';_.tI=0;function lj(a){a.b=cj(a);return a;}
function nj(a){a.v();}
function oj(){bd(this.b,8189);}
function pj(){this.ab();}
function qj(){nj(this);}
function rj(){}
function zi(){}
_=zi.prototype=new Co();_.v=oj;_.w=pj;_.ab=qj;_.lb=rj;_.tN=Fv+'RichTextAreaImpl';_.tI=0;_.b=null;function Fi(a){a.a=fc();}
function aj(a){lj(a);Fi(a);return a;}
function cj(a){return $doc.createElement('iframe');}
function ej(a){return a.a===null?dj(a):tc(a.a);}
function dj(a){return a.b.contentWindow.document.body.innerHTML;}
function fj(b,a){b.b.contentWindow.document.body.innerHTML=a;}
function gj(b){var a=b.b;var c=a.contentWindow;c.removeEventListener('keydown',a.__gwt_handler,true);c.removeEventListener('keyup',a.__gwt_handler,true);c.removeEventListener('keypress',a.__gwt_handler,true);c.removeEventListener('mousedown',a.__gwt_handler,true);c.removeEventListener('mouseup',a.__gwt_handler,true);c.removeEventListener('mousemove',a.__gwt_handler,true);c.removeEventListener('mouseover',a.__gwt_handler,true);c.removeEventListener('mouseout',a.__gwt_handler,true);c.removeEventListener('click',a.__gwt_handler,true);c.removeEventListener('focus',a.__gwt_focusHandler,true);c.removeEventListener('blur',a.__gwt_blurHandler,true);a.__gwt_handler=null;a.__gwt_focusHandler=null;a.__gwt_blurHandler=null;}
function hj(){var b=this.b;var c=b.contentWindow;b.__gwt_handler=function(a){if(b.__listener){b.__listener.E(a);}};b.__gwt_focusHandler=function(a){if(b.__gwt_isFocused){return;}b.__gwt_isFocused=true;b.__gwt_handler(a);};b.__gwt_blurHandler=function(a){if(!b.__gwt_isFocused){return;}b.__gwt_isFocused=false;b.__gwt_handler(a);};c.addEventListener('keydown',b.__gwt_handler,true);c.addEventListener('keyup',b.__gwt_handler,true);c.addEventListener('keypress',b.__gwt_handler,true);c.addEventListener('mousedown',b.__gwt_handler,true);c.addEventListener('mouseup',b.__gwt_handler,true);c.addEventListener('mousemove',b.__gwt_handler,true);c.addEventListener('mouseover',b.__gwt_handler,true);c.addEventListener('mouseout',b.__gwt_handler,true);c.addEventListener('click',b.__gwt_handler,true);c.addEventListener('focus',b.__gwt_focusHandler,true);c.addEventListener('blur',b.__gwt_blurHandler,true);}
function ij(){var a=this;setTimeout(function(){a.b.contentWindow.document.designMode='On';a.ab();},1);}
function jj(){nj(this);if(this.a!==null){fj(this,tc(this.a));this.a=null;}}
function kj(){var a;gj(this);a=ej(this);this.a=fc();Fc(this.a,a);}
function Ei(){}
_=Ei.prototype=new zi();_.v=hj;_.w=ij;_.ab=jj;_.lb=kj;_.tN=Fv+'RichTextAreaImplStandard';_.tI=0;function Bi(a){aj(a);return a;}
function Di(){var a=this;var b=a.b;b.onload=function(){b.onload=null;a.ab();b.contentWindow.onfocus=function(){b.contentWindow.onfocus=null;b.contentWindow.document.designMode='On';};};}
function Ai(){}
_=Ai.prototype=new Ei();_.w=Di;_.tN=Fv+'RichTextAreaImplMozilla';_.tI=0;function uj(b){var a;Dn();a=Dg();Cn(a);}
function sj(){}
_=sj.prototype=new Co();_.tN=aw+'Kditor';_.tI=0;function wj(){}
_=wj.prototype=new Co();_.tN=aw+'TransliterationConstants_';_.tI=0;function Aj(b,a){b.a=a;}
function Bj(b,a){b.b=a;}
function yj(){}
_=yj.prototype=new Co();_.tN=bw+'TransliterationAttributes';_.tI=0;_.a=null;_.b=null;function dk(){dk=zv;wi(),yi;}
function ck(c,b){var a,d;wi(),yi;zf(c);if(b===null){throw cp(new bp(),'Transliterable element must be non-null');}c.b=rl(b);c.hb(c.b.a);d=ol(c.f);jk(c,d);a=Fj(new Ej(),c);vl(c.f,a);return c;}
function ek(b,a){b.b.m(a);}
function fk(b,a){return Bk(b.b,a);}
function gk(b,a){b.b.x(a);}
function hk(b,a){return Ck(b.b,a);}
function ik(a,c){var b;b=pl(c);jk(a,b);}
function jk(c,d){var a,b;a=d.a;b=d.b;c.a=xl(a);c.c=yl(b);}
function kk(a){if(this.b.y(a)){jl(this.a,a,this,this.c);}}
function Dj(){}
_=Dj.prototype=new yf();_.E=kk;_.tN=cw+'TransliterationEditor';_.tI=19;_.a=null;_.b=null;_.c=null;function Fj(b,a){b.a=a;return b;}
function bk(a){ik(this.a,vb(a,1));}
function Ej(){}
_=Ej.prototype=new Co();_.cb=bk;_.tN=cw+'TransliterationEditor$1';_.tI=0;function Bk(b,a){return Cl(a);}
function Ck(b,a){return El(a);}
function Dk(b,a){b.a=a;}
function Ek(a){return yc(this.a,kc(a));}
function Fk(a){Dk(this,a);}
function zk(){}
_=zk.prototype=new Co();_.y=Ek;_.hb=Fk;_.tN=dw+'TransliterationEditorImpl';_.tI=0;_.a=null;function tk(c,a,b){}
function uk(c,a,b){}
function vk(a){tk(this,this.a,a);}
function wk(a){uk(this,this.a,a);}
function xk(b){var a=this.a;var c=kc(b);return a.contentWindow.document.body==c;}
function yk(a){var b;b=nk(new mk(),this,a);Dk(this,b.f);}
function lk(){}
_=lk.prototype=new zk();_.m=vk;_.x=wk;_.y=xk;_.hb=yk;_.tN=dw+'TransliterationEditorIframeImpl';_.tI=0;function ok(){ok=zv;wi(),yi;}
function nk(b,a,c){wi(),yi;b.a=c;qg(b);kh(b,'');sg(b);return b;}
function pk(c,a){var b=c.b;b.b=a;}
function qk(b,a){Cf(b,b.a);pk(b,b.a);}
function rk(a){qk(this,a);}
function mk(){}
_=mk.prototype=new mg();_.hb=rk;_.tN=dw+'TransliterationEditorIframeImpl$1$WrappingRichTextArea';_.tI=20;function cl(f,a,b){var e=a.value.substring(0,a.selectionStart-b);var d=a.value.substring(a.selectionEnd);var c=a.selectionStart-b;a.value=e+d;a.selectionStart=c;a.selectionEnd=c;}
function dl(f,a,e){var d=a.value.substring(0,a.selectionStart);var c=a.value.substring(a.selectionEnd);var b=a.selectionStart+e.length;a.value=d+e+c;a.selectionStart=b;a.selectionEnd=b;}
function el(a){cl(this,this.a,a);}
function fl(a){dl(this,this.a,a);}
function al(){}
_=al.prototype=new zk();_.m=el;_.x=fl;_.tN=dw+'TransliterationEditorTextBoxBaseImpl';_.tI=0;function hl(a){a.b=0;a.a='';}
function jl(e,b,a,f){var c,d;switch(lc(b)){case 1:{hl(e);break;}case 512:case 128:case 256:{if(hk(a,b)){hl(e);}else{c=fk(a,b);if(c>0){mc(b);d=f.kb(e.a+ub(c));if(d.a>1){gk(a,d[1]);e.b=zp(d[1]);e.a=iq(c);}else{ek(a,e.b);gk(a,d[0]);e.b=zp(d[0]);e.a+=ub(c);}}}break;}default:{break;}}}
function gl(){}
_=gl.prototype=new Co();_.tN=ew+'CharacterTransliterationHandler';_.tI=0;_.a='';_.b=0;function ml(){ml=zv;zl=new wj();sl=new Fl();}
function nl(g,c,f){ml();var a,d,e;e=sc(g);while(e!==null){try{d=pc(e,c);}catch(a){a=Eb(a);if(wb(a,11)){a;e=uc(e);continue;}else throw a;}if(d!==null){f.h(Bb(e,dd));}nl(e,c,f);e=uc(e);}}
function ol(b){ml();var a;a=pc(b,'transliteration');return pl(a);}
function pl(b){ml();var a,c,d,e;d=tl(b);e=new yj();c=vb(Eu(d,'language'),1);a=vb(Eu(d,'algorithm'),1);Aj(e,a);Bj(e,c);return e;}
function ql(b,a){ml();var c,d,e;c=Cs(new As());nl(b,a,c);d=ob('[Lcom.google.gwt.user.client.Element;',[0],[4],[c.b],null);for(e=0;e<d.a;e++){d[e]=Bb(vb(at(c,e),4),dd);}return d;}
function rl(a){ml();var b,c;c=null;b=Fp(qc(a,'tagName'));if(vp('textarea',b)){c=new al();}else if(vp('input',b)&&vp('text',Fp(qc(a,'type')))){c=new al();}else if(vp('iframe',b)){c=new lk();}else{throw cp(new bp(),"Transliteration of '"+b+"' is not supported");}c.hb(a);return c;}
function tl(a){ml();var b,c,d,e,f,g;e=yu(new Dt());d=Ap(aq(a),';');for(b=0;b<d.a;b++){f=Ap(aq(d[b]),':');c=aq(f[0]);g=f.a>1?aq(f[1]):'';Fu(e,c,g);}return e;}
function ul(a){ml();cm(sl,a);}
function vl(b,a){ml();bm(sl,b,'transliteration',a);}
function wl(b,a){ml();var c,d;d=vc(b);c=oc(d,b);Ac(d,b);nf(Eg(),a);xc(d,a.f,c);}
function xl(a){ml();var b;b=null;if(a===null||vp('',a)){b=new gl();}else if(vp('character',a)){b=new gl();}else{throw cp(new bp(),"Algorithm '"+a+"' is not supported");}return b;}
function yl(a){ml();var b;b=null;if(a===null||vp('',a)){b=new Em();}else if(vp('kannada',a)){b=rn(new bn());}else if(vp('devanagari',a)){b=wm(new hm());}else{throw cp(new bp(),"Language '"+a+"' is not supported");}return b;}
var sl,zl;function Bl(){Bl=zv;Dl=new dm();}
function Cl(a){Bl();return fm(Dl,a);}
function El(a){Bl();return gm(Dl,a);}
var Dl;function bm(h,g,d,e){var f=function(b){var c=b.attrName;if(c==d){var a=g.getAttribute(d);e.cb(a);}};g.addEventListener('DOMAttrModified',f,false);}
function cm(b,a){if(a.onclick)a.addEventListener('click',a.onclick,false);if(a.ondblclick)a.addEventListener('dblclick',a.ondblclick,false);if(a.onmousedown)a.addEventListener('mousedown',a.onmousedown,false);if(a.onmouseup)a.addEventListener('mouseup',a.onmouseup,false);if(a.onmouseover)a.addEventListener('mouseover',a.onmouseover,false);if(a.onmouseout)a.addEventListener('mouseout',a.onmouseout,false);if(a.onmousemove)a.addEventListener('mousemove',a.onmousemove,false);if(a.onkeydown)a.addEventListener('keydown',a.onkeydown,false);if(a.onkeypress)a.addEventListener('keypress',a.onkeypress,false);if(a.onkeyup)a.addEventListener('keyup',a.onkeyup,false);if(a.onchange)a.addEventListener('change',a.onchange,false);if(a.onfocus)a.addEventListener('focus',a.onfocus,false);if(a.onblur)a.addEventListener('blur',a.onblur,false);if(a.onlosecapture)a.addEventListener('losecapture',a.onlosecapture,false);if(a.onscroll)a.addEventListener('scroll',a.onscroll,false);if(a.onload)a.addEventListener('load',a.onload,false);if(a.onerror)a.addEventListener('error',a.onerror,false);if(a.onmousewheel)a.addEventListener('mousewheel',a.onmousewheel,false);}
function Fl(){}
_=Fl.prototype=new Co();_.tN=gw+'ElementUtilImpl';_.tI=0;function fm(b,a){if(a.type=='keypress'&&(a.which!=0&&(!a.altKey&& !a.ctrlKey)))return a.which;return 0;}
function gm(b,a){if(a.type=='keypress'&&a.keyCode!=0)return true;return false;}
function dm(){}
_=dm.prototype=new Co();_.tN=gw+'TransliterationHelperImpl';_.tI=0;function wm(a){a.c=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$VowelEntry;',0,13,[tm(new sm(),'a',2309,0),tm(new sm(),'A',2310,2366),tm(new sm(),'aa',2310,2366),tm(new sm(),'i',2311,2367),tm(new sm(),'I',2312,2368),tm(new sm(),'ee',2312,2368),tm(new sm(),'u',2313,2369),tm(new sm(),'U',2314,2370),tm(new sm(),'oo',2314,2370),tm(new sm(),'Ru',2315,2371),tm(new sm(),'e',2319,2375),tm(new sm(),'E',2319,2375),tm(new sm(),'ai',2320,2376),tm(new sm(),'ei',2320,2376),tm(new sm(),'o',2323,2379),tm(new sm(),'O',2323,2379),tm(new sm(),'au',2324,2380),tm(new sm(),'Om',2384,0)]);a.b=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$VowelEntry;',0,13,[tm(new sm(),'M',0,2306),tm(new sm(),'H',0,2307)]);a.a=pb('[Lcom.kditor.client.transliterator.DevanagariTransliterator$ConsonantEntry;',0,12,[jm(new im(),'k',2325),jm(new im(),'K',2326),jm(new im(),'kh',2326),jm(new im(),'g',2327),jm(new im(),'G',2328),jm(new im(),'gh',2328),jm(new im(),'~g',2329),jm(new im(),'c',2330),jm(new im(),'ch',2330),jm(new im(),'C',2331),jm(new im(),'Ch',2331),jm(new im(),'j',2332),jm(new im(),'J',2333),jm(new im(),'jh',2333),jm(new im(),'~j',2334),jm(new im(),'T',2335),jm(new im(),'Th',2336),jm(new im(),'D',2337),jm(new im(),'Dh',2338),jm(new im(),'N',2339),jm(new im(),'t',2340),jm(new im(),'th',2341),jm(new im(),'d',2342),jm(new im(),'dh',2343),jm(new im(),'n',2344),jm(new im(),'p',2346),jm(new im(),'P',2347),jm(new im(),'ph',2347),jm(new im(),'b',2348),jm(new im(),'B',2349),jm(new im(),'bh',2349),jm(new im(),'m',2350),jm(new im(),'y',2351),jm(new im(),'Y',2351),jm(new im(),'r',2352),jm(new im(),'R',2352),jm(new im(),'l',2354),jm(new im(),'v',2357),jm(new im(),'w',2357),jm(new im(),'sh',2358),jm(new im(),'Sh',2359),jm(new im(),'s',2360),jm(new im(),'h',2361),jm(new im(),'L',2355),jm(new im(),'M',2350),jm(new im(),'H',2361),jm(new im(),'S',2360)]);tt(a.c);tt(a.a);return a;}
function ym(c,b){var a;for(a=c.a.a-1;a>=0;a--){if(Cp(b.b,c.a[a].a)){om(b,a);pm(b,Dp(b.b,zp(c.a[a].a)));break;}}}
function zm(c,b){var a;for(a=c.b.a-1;a>=0;a--){if(Cp(b.b,c.b[a].c)){qm(b,a);pm(b,Dp(b.b,zp(c.b[a].c)));break;}}}
function Am(c,b){var a;for(a=c.c.a-1;a>=0;a--){if(Cp(b.b,c.c[a].c)){rm(b,a);pm(b,Dp(b.b,zp(c.c[a].c)));break;}}}
function Bm(c,b){var a;a=new mm();pm(a,b);Am(c,a);if(a.d>=0){zm(c,a);}else{ym(c,a);if(a.a>=0){Am(c,a);if(a.d>=0){zm(c,a);}}}return a;}
function Cm(b,a){var c;c=gp(new fp());if(a.a>=0){hp(c,b.a[a.a].b);}if(a.d>=0){if(a.a>=0){if(b.c[a.d].a!=0){hp(c,b.c[a.d].a);}}else{hp(c,b.c[a.d].b);}if(a.c>=0){hp(c,b.b[a.c].a);}}else if(a.a>=0){hp(c,2381);}return mp(c);}
function Dm(i){var a,b,c,d,e,f,g,h;h=Cs(new As());e=i;while(zp(e)>0){c=Bm(this,e);if(vp(c.b,e)){if(zp(e)>1){Ds(h,Ep(e,0,1));e=Dp(e,1);continue;}break;}f=Cm(this,c);Ds(h,f);e=c.b;}if(zp(e)>0){Ds(h,e);}for(b=h.b-1;b>0;b--){d=kq(pb('[C',0,(-1),[2352,2315,2371]));a=sp(at(h,b).tS(),0);if(xp(d,a)>=0){et(h,b-1,at(h,b-1).tS()+at(h,b));dt(h,b);}}g=ob('[Ljava.lang.String;',[0],[1],[h.b],null);for(b=0;b<g.a;b++){g[b]=vb(at(h,b),1);}return g;}
function hm(){}
_=hm.prototype=new Co();_.kb=Dm;_.tN=hw+'DevanagariTransliterator';_.tI=0;_.a=null;_.b=null;_.c=null;function jm(b,a,c){b.a=a;b.b=xb(c);return b;}
function lm(a){return up(this.a,vb(a,12).a);}
function im(){}
_=im.prototype=new Co();_.i=lm;_.tN=hw+'DevanagariTransliterator$ConsonantEntry';_.tI=21;_.a=null;_.b=0;function om(b,a){b.a=a;}
function pm(b,a){b.b=a;}
function qm(b,a){b.c=a;}
function rm(a,b){a.d=b;}
function mm(){}
_=mm.prototype=new Co();_.tN=hw+'DevanagariTransliterator$ParseResult';_.tI=0;_.a=(-1);_.b='';_.c=(-1);_.d=(-1);function tm(d,c,b,a){d.c=c;d.b=xb(b);d.a=xb(a);return d;}
function vm(a){return up(this.c,vb(a,13).c);}
function sm(){}
_=sm.prototype=new Co();_.i=vm;_.tN=hw+'DevanagariTransliterator$VowelEntry';_.tI=22;_.a=0;_.b=0;_.c=null;function an(a){if(a===null||vp('',a)){return pb('[Ljava.lang.String;',0,1,['']);}return pb('[Ljava.lang.String;',0,1,[Ep(a,0,zp(a)-1),Dp(a,zp(a)-1)]);}
function Em(){}
_=Em.prototype=new Co();_.kb=an;_.tN=hw+'EchoTransliterator';_.tI=0;function rn(a){a.c=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$VowelEntry;',0,15,[on(new nn(),'a',3205,0),on(new nn(),'A',3206,3262),on(new nn(),'aa',3206,3262),on(new nn(),'i',3207,3263),on(new nn(),'I',3208,3264),on(new nn(),'ee',3208,3264),on(new nn(),'u',3209,3265),on(new nn(),'U',3210,3266),on(new nn(),'oo',3210,3266),on(new nn(),'Ru',3211,3267),on(new nn(),'RU',3296,3268),on(new nn(),'e',3214,3270),on(new nn(),'E',3215,3271),on(new nn(),'ai',3216,3272),on(new nn(),'ei',3216,3272),on(new nn(),'o',3218,3274),on(new nn(),'O',3219,3275),on(new nn(),'au',3220,3276)]);a.b=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$VowelEntry;',0,15,[on(new nn(),'M',0,3202),on(new nn(),'H',0,3203)]);a.a=pb('[Lcom.kditor.client.transliterator.KannadaTransliterator$ConsonantEntry;',0,14,[dn(new cn(),'k',3221),dn(new cn(),'K',3222),dn(new cn(),'kh',3222),dn(new cn(),'g',3223),dn(new cn(),'G',3224),dn(new cn(),'gh',3224),dn(new cn(),'~g',3225),dn(new cn(),'c',3226),dn(new cn(),'ch',3226),dn(new cn(),'C',3227),dn(new cn(),'Ch',3227),dn(new cn(),'j',3228),dn(new cn(),'J',3229),dn(new cn(),'jh',3229),dn(new cn(),'~j',3230),dn(new cn(),'T',3231),dn(new cn(),'Th',3232),dn(new cn(),'D',3233),dn(new cn(),'Dh',3234),dn(new cn(),'N',3235),dn(new cn(),'t',3236),dn(new cn(),'th',3237),dn(new cn(),'d',3238),dn(new cn(),'dh',3239),dn(new cn(),'n',3240),dn(new cn(),'p',3242),dn(new cn(),'P',3243),dn(new cn(),'ph',3243),dn(new cn(),'b',3244),dn(new cn(),'B',3245),dn(new cn(),'bh',3245),dn(new cn(),'m',3246),dn(new cn(),'y',3247),dn(new cn(),'Y',3247),dn(new cn(),'r',3248),dn(new cn(),'R',3248),dn(new cn(),'rx',3249),dn(new cn(),'l',3250),dn(new cn(),'v',3253),dn(new cn(),'w',3253),dn(new cn(),'sh',3254),dn(new cn(),'Sh',3255),dn(new cn(),'s',3256),dn(new cn(),'h',3257),dn(new cn(),'~h',3257),dn(new cn(),'L',3251),dn(new cn(),'Lx',3294),dn(new cn(),'M',3246),dn(new cn(),'H',3257),dn(new cn(),'S',3256)]);tt(a.c);tt(a.a);return a;}
function tn(c,b){var a;for(a=c.a.a-1;a>=0;a--){if(Cp(b.b,c.a[a].a)){jn(b,a);kn(b,Dp(b.b,zp(c.a[a].a)));break;}}}
function un(c,b){var a;for(a=c.b.a-1;a>=0;a--){if(Cp(b.b,c.b[a].c)){ln(b,a);kn(b,Dp(b.b,zp(c.b[a].c)));break;}}}
function vn(c,b){var a;for(a=c.c.a-1;a>=0;a--){if(Cp(b.b,c.c[a].c)){mn(b,a);kn(b,Dp(b.b,zp(c.c[a].c)));break;}}}
function wn(c,b){var a;a=new gn();kn(a,b);vn(c,a);if(a.d>=0){un(c,a);}else{tn(c,a);if(a.a>=0){vn(c,a);if(a.d>=0){un(c,a);}}}return a;}
function xn(b,a){var c;c=gp(new fp());if(a.a>=0){hp(c,b.a[a.a].b);}if(a.d>=0){if(a.a>=0){if(b.c[a.d].a!=0){hp(c,b.c[a.d].a);}}else{hp(c,b.c[a.d].b);}if(a.c>=0){hp(c,b.b[a.c].a);}}else if(a.a>=0){hp(c,3277);}return mp(c);}
function yn(i){var a,b,c,d,e,f,g,h;h=Cs(new As());e=i;while(zp(e)>0){c=wn(this,e);if(vp(c.b,e)){if(zp(e)>1){Ds(h,Ep(e,0,1));e=Dp(e,1);continue;}break;}f=xn(this,c);Ds(h,f);e=c.b;}if(zp(e)>0){Ds(h,e);}for(b=h.b-1;b>0;b--){d=kq(pb('[C',0,(-1),[3248,3211,3267,3296,3268]));a=sp(at(h,b).tS(),0);if(xp(d,a)>=0){et(h,b-1,at(h,b-1).tS()+at(h,b));dt(h,b);}}g=ob('[Ljava.lang.String;',[0],[1],[h.b],null);for(b=0;b<g.a;b++){g[b]=vb(at(h,b),1);}return g;}
function bn(){}
_=bn.prototype=new Co();_.kb=yn;_.tN=hw+'KannadaTransliterator';_.tI=0;_.a=null;_.b=null;_.c=null;function dn(b,a,c){b.a=a;b.b=xb(c);return b;}
function fn(a){return up(this.a,vb(a,14).a);}
function cn(){}
_=cn.prototype=new Co();_.i=fn;_.tN=hw+'KannadaTransliterator$ConsonantEntry';_.tI=23;_.a=null;_.b=0;function jn(b,a){b.a=a;}
function kn(b,a){b.b=a;}
function ln(b,a){b.c=a;}
function mn(a,b){a.d=b;}
function gn(){}
_=gn.prototype=new Co();_.tN=hw+'KannadaTransliterator$ParseResult';_.tI=0;_.a=(-1);_.b='';_.c=(-1);_.d=(-1);function on(d,c,b,a){d.c=c;d.b=xb(b);d.a=xb(a);return d;}
function qn(a){return up(this.c,vb(a,15).c);}
function nn(){}
_=nn.prototype=new Co();_.i=qn;_.tN=hw+'KannadaTransliterator$VowelEntry';_.tI=24;_.a=0;_.b=0;_.c=null;function Cn(c){var a,d,e,f;e=ql(c,(ml(),zl,'transliteration'));for(f=0;f<e.a;f++){d=e[f];try{En(d);}catch(a){a=Eb(a);if(wb(a,11)){}else throw a;}}}
function Dn(){$wnd.kditor_autoInjectTransliterability=function(a){Cn(a);};$wnd.kditor_makeTransliterable=function(a){En(a);};$wnd.kditor_transliterate=function(b,a){return ao(b,a);};$wnd.kditor_transliterateForHtml=function(b,a){return Fn(b,a);};}
function En(b){var a;ul(b);a=ck(new Dj(),b);wl(b,a);}
function ao(d,b){var a,c,e,f;f=yl(b);c=f.kb(d);e=gp(new fp());for(a=0;a<c.a;a++){ip(e,c[a]);}return mp(e);}
function Fn(e,d){var a,b,c,f;f=ao(e,d);b='';for(c=0;c<zp(f);c++){a=sp(f,c);if(a>=3072&&a<3328){b+='&#'+a+';';}else{b+=ub(sp(f,c));}}return b;}
function co(){}
_=co.prototype=new bp();_.tN=jw+'ArrayStoreException';_.tI=25;function io(a){return iq(a);}
function ko(b,a){cp(b,a);return b;}
function jo(){}
_=jo.prototype=new bp();_.tN=jw+'ClassCastException';_.tI=26;function so(b,a){cp(b,a);return b;}
function ro(){}
_=ro.prototype=new bp();_.tN=jw+'IllegalStateException';_.tI=27;function vo(b,a){cp(b,a);return b;}
function uo(){}
_=uo.prototype=new bp();_.tN=jw+'IndexOutOfBoundsException';_.tI=28;function zo(a,b){return a<b?a:b;}
function Ao(){}
_=Ao.prototype=new bp();_.tN=jw+'NegativeArraySizeException';_.tI=29;function sp(b,a){return b.charCodeAt(a);}
function up(f,c){var a,b,d,e,g,h;h=zp(f);e=zp(c);b=zo(h,e);for(a=0;a<b;a++){g=sp(f,a);d=sp(c,a);if(g!=d){return g-d;}}return h-e;}
function vp(b,a){if(!wb(a,1))return false;return cq(b,a);}
function wp(g){var a=fq;if(!a){a=fq={};}var e=':'+g;var b=a[e];if(b==null){b=0;var f=g.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=g.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function xp(b,a){return b.indexOf(String.fromCharCode(a));}
function yp(b,a){return b.indexOf(a);}
function zp(a){return a.length;}
function Ap(b,a){return Bp(b,a,0);}
function Bp(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=bq(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function Cp(b,a){return yp(b,a)==0;}
function Dp(b,a){return b.substr(a,b.length-a);}
function Ep(c,a,b){return c.substr(a,b-a);}
function Fp(a){return a.toLowerCase();}
function aq(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function bq(a){return ob('[Ljava.lang.String;',[0],[1],[a],null);}
function cq(a,b){return String(a)==b;}
function dq(a){if(wb(a,1)){return up(this,vb(a,1));}else{throw ko(new jo(),'Cannot compare '+a+" with String '"+this+"'");}}
function eq(a){return vp(this,a);}
function gq(){return wp(this);}
function hq(){return this;}
function iq(a){return String.fromCharCode(a);}
function lq(e,b,a){var c,d;if(b<0){throw qp(new pp(),b);}if(a<0){throw qp(new pp(),a);}if(b>e.a-a){throw qp(new pp(),b+a);}c='';d=b+a;while(b<d){c+=io(e[b++]);}return c;}
function kq(a){return lq(a,0,a.a);}
function jq(a){return a!==null?a.tS():'null';}
_=String.prototype;_.i=dq;_.eQ=eq;_.hC=gq;_.tS=hq;_.tN=jw+'String';_.tI=2;var fq=null;function gp(a){jp(a);return a;}
function hp(a,b){return ip(a,iq(b));}
function ip(c,d){if(d===null){d='null';}var a=c.js.length-1;var b=c.js[a].length;if(c.length>b*b){c.js[a]=c.js[a]+d;}else{c.js.push(d);}c.length+=d.length;return c;}
function jp(a){kp(a,'');}
function kp(b,a){b.js=[a];b.length=a.length;}
function mp(a){a.C();return a.js[0];}
function np(){if(this.js.length>1){this.js=[this.js.join('')];this.length=this.js[0].length;}}
function op(){return mp(this);}
function fp(){}
_=fp.prototype=new Co();_.C=np;_.tS=op;_.tN=jw+'StringBuffer';_.tI=0;function qp(b,a){vo(b,'String index out of range: '+a);return b;}
function pp(){}
_=pp.prototype=new uo();_.tN=jw+'StringIndexOutOfBoundsException';_.tI=30;function oq(a){return t(a);}
function uq(b,a){cp(b,a);return b;}
function tq(){}
_=tq.prototype=new bp();_.tN=jw+'UnsupportedOperationException';_.tI=31;function xq(d,a,b){var c;while(a.u()){c=a.B();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function zq(a){throw uq(new tq(),'add');}
function Aq(b){var a;a=xq(this,this.z(),b);return a!==null;}
function Bq(){var a,b,c;c=gp(new fp());a=null;ip(c,'[');b=this.z();while(b.u()){if(a!==null){ip(c,a);}else{a=', ';}ip(c,jq(b.B()));}ip(c,']');return mp(c);}
function wq(){}
_=wq.prototype=new Co();_.h=zq;_.l=Aq;_.tS=Bq;_.tN=kw+'AbstractCollection';_.tI=0;function gr(b,a){throw vo(new uo(),'Index: '+a+', Size: '+b.b);}
function hr(a){return Eq(new Dq(),a);}
function ir(b,a){throw uq(new tq(),'add');}
function jr(a){this.g(this.jb(),a);return true;}
function kr(e){var a,b,c,d,f;if(e===this){return true;}if(!wb(e,16)){return false;}f=vb(e,16);if(this.jb()!=f.jb()){return false;}c=hr(this);d=f.z();while(ar(c)){a=br(c);b=br(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function lr(){var a,b,c,d;c=1;a=31;b=hr(this);while(ar(b)){d=br(b);c=31*c+(d===null?0:d.hC());}return c;}
function mr(){return hr(this);}
function nr(a){throw uq(new tq(),'remove');}
function Cq(){}
_=Cq.prototype=new wq();_.g=ir;_.h=jr;_.eQ=kr;_.hC=lr;_.z=mr;_.gb=nr;_.tN=kw+'AbstractList';_.tI=32;function Eq(b,a){b.c=a;return b;}
function ar(a){return a.a<a.c.jb();}
function br(a){if(!ar(a)){throw new vv();}return a.c.s(a.b=a.a++);}
function cr(a){if(a.b<0){throw new ro();}a.c.gb(a.b);a.a=a.b;a.b=(-1);}
function dr(){return ar(this);}
function er(){return br(this);}
function Dq(){}
_=Dq.prototype=new Co();_.u=dr;_.B=er;_.tN=kw+'AbstractList$IteratorImpl';_.tI=0;_.a=0;_.b=(-1);function ms(f,d,e){var a,b,c;for(b=tu(f.p());mu(b);){a=nu(b);c=a.q();if(d===null?c===null:d.eQ(c)){if(e){ou(b);}return a;}}return null;}
function ns(b){var a;a=b.p();return qr(new pr(),b,a);}
function os(b){var a;a=Du(b);return Er(new Dr(),b,a);}
function ps(a){return ms(this,a,false)!==null;}
function qs(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!wb(d,17)){return false;}f=vb(d,17);c=ns(this);e=f.A();if(!xs(c,e)){return false;}for(a=sr(c);zr(a);){b=Ar(a);h=this.t(b);g=f.t(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function rs(b){var a;a=ms(this,b,false);return a===null?null:a.r();}
function ss(){var a,b,c;b=0;for(c=tu(this.p());mu(c);){a=nu(c);b+=a.hC();}return b;}
function ts(){return ns(this);}
function us(){var a,b,c,d;d='{';a=false;for(c=tu(this.p());mu(c);){b=nu(c);if(a){d+=', ';}else{a=true;}d+=jq(b.q());d+='=';d+=jq(b.r());}return d+'}';}
function or(){}
_=or.prototype=new Co();_.k=ps;_.eQ=qs;_.t=rs;_.hC=ss;_.A=ts;_.tS=us;_.tN=kw+'AbstractMap';_.tI=33;function xs(e,b){var a,c,d;if(b===e){return true;}if(!wb(b,18)){return false;}c=vb(b,18);if(c.jb()!=e.jb()){return false;}for(a=c.z();a.u();){d=a.B();if(!e.l(d)){return false;}}return true;}
function ys(a){return xs(this,a);}
function zs(){var a,b,c;a=0;for(b=this.z();b.u();){c=b.B();if(c!==null){a+=c.hC();}}return a;}
function vs(){}
_=vs.prototype=new wq();_.eQ=ys;_.hC=zs;_.tN=kw+'AbstractSet';_.tI=34;function qr(b,a,c){b.a=a;b.b=c;return b;}
function sr(b){var a;a=tu(b.b);return xr(new wr(),b,a);}
function tr(a){return this.a.k(a);}
function ur(){return sr(this);}
function vr(){return this.b.a.c;}
function pr(){}
_=pr.prototype=new vs();_.l=tr;_.z=ur;_.jb=vr;_.tN=kw+'AbstractMap$1';_.tI=35;function xr(b,a,c){b.a=c;return b;}
function zr(a){return a.a.u();}
function Ar(b){var a;a=b.a.B();return a.q();}
function Br(){return zr(this);}
function Cr(){return Ar(this);}
function wr(){}
_=wr.prototype=new Co();_.u=Br;_.B=Cr;_.tN=kw+'AbstractMap$2';_.tI=0;function Er(b,a,c){b.a=a;b.b=c;return b;}
function as(b){var a;a=tu(b.b);return fs(new es(),b,a);}
function bs(a){return Cu(this.a,a);}
function cs(){return as(this);}
function ds(){return this.b.a.c;}
function Dr(){}
_=Dr.prototype=new wq();_.l=bs;_.z=cs;_.jb=ds;_.tN=kw+'AbstractMap$3';_.tI=0;function fs(b,a,c){b.a=c;return b;}
function hs(a){return a.a.u();}
function is(a){var b;b=a.a.B().r();return b;}
function js(){return hs(this);}
function ks(){return is(this);}
function es(){}
_=es.prototype=new Co();_.u=js;_.B=ks;_.tN=kw+'AbstractMap$4';_.tI=0;function Bs(a){{Es(a);}}
function Cs(a){Bs(a);return a;}
function Ds(b,a){ot(b.a,b.b++,a);return true;}
function Es(a){a.a=D();a.b=0;}
function at(b,a){if(a<0||a>=b.b){gr(b,a);}return kt(b.a,a);}
function bt(b,a){return ct(b,a,0);}
function ct(c,b,a){if(a<0){gr(c,a);}for(;a<c.b;++a){if(jt(b,kt(c.a,a))){return a;}}return (-1);}
function dt(c,a){var b;b=at(c,a);mt(c.a,a,1);--c.b;return b;}
function et(d,a,b){var c;c=at(d,a);ot(d.a,a,b);return c;}
function gt(a,b){if(a<0||a>this.b){gr(this,a);}ft(this.a,a,b);++this.b;}
function ht(a){return Ds(this,a);}
function ft(a,b,c){a.splice(b,0,c);}
function it(a){return bt(this,a)!=(-1);}
function jt(a,b){return a===b||a!==null&&a.eQ(b);}
function lt(a){return at(this,a);}
function kt(a,b){return a[b];}
function nt(a){return dt(this,a);}
function mt(a,c,b){a.splice(c,b);}
function ot(a,b,c){a[b]=c;}
function pt(){return this.b;}
function As(){}
_=As.prototype=new Cq();_.g=gt;_.h=ht;_.l=it;_.s=lt;_.gb=nt;_.jb=pt;_.tN=kw+'ArrayList';_.tI=36;_.a=null;_.b=0;function st(d,h,e){if(h==0){return;}var i=new Array();for(var g=0;g<h;++g){i[g]=d[g];}if(e!=null){var f=function(a,b){var c=e.j(a,b);return c;};i.sort(f);}else{i.sort();}for(g=0;g<h;++g){d[g]=i[g];}}
function tt(a){st(a,a.a,(At(),Bt));}
function At(){At=zv;Bt=new xt();}
var Bt;function zt(a,b){return vb(a,19).i(b);}
function xt(){}
_=xt.prototype=new Co();_.j=zt;_.tN=kw+'Comparators$1';_.tI=0;function Au(){Au=zv;bv=hv();}
function xu(a){{zu(a);}}
function yu(a){Au();xu(a);return a;}
function zu(a){a.a=D();a.d=E();a.b=Bb(bv,z);a.c=0;}
function Bu(b,a){if(wb(a,1)){return lv(b.d,vb(a,1))!==bv;}else if(a===null){return b.b!==bv;}else{return kv(b.a,a,a.hC())!==bv;}}
function Cu(a,b){if(a.b!==bv&&jv(a.b,b)){return true;}else if(gv(a.d,b)){return true;}else if(ev(a.a,b)){return true;}return false;}
function Du(a){return ru(new iu(),a);}
function Eu(c,a){var b;if(wb(a,1)){b=lv(c.d,vb(a,1));}else if(a===null){b=c.b;}else{b=kv(c.a,a,a.hC());}return b===bv?null:b;}
function Fu(c,a,d){var b;if(a!==null){b=ov(c.d,a,d);}else if(a===null){b=c.b;c.b=d;}else{b=nv(c.a,a,d,wp(a));}if(b===bv){++c.c;return null;}else{return b;}}
function av(c,a){var b;if(wb(a,1)){b=qv(c.d,vb(a,1));}else if(a===null){b=c.b;c.b=Bb(bv,z);}else{b=pv(c.a,a,a.hC());}if(b===bv){return null;}else{--c.c;return b;}}
function cv(e,c){Au();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.h(a[f]);}}}}
function dv(d,a){Au();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=bu(c.substring(1),e);a.h(b);}}}
function ev(f,h){Au();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.r();if(jv(h,d)){return true;}}}}return false;}
function fv(a){return Bu(this,a);}
function gv(c,d){Au();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(jv(d,a)){return true;}}}return false;}
function hv(){Au();}
function iv(){return Du(this);}
function jv(a,b){Au();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function mv(a){return Eu(this,a);}
function kv(f,h,e){Au();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(jv(h,d)){return c.r();}}}}
function lv(b,a){Au();return b[':'+a];}
function nv(f,h,j,e){Au();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(jv(h,d)){var i=c.r();c.ib(j);return i;}}}else{a=f[e]=[];}var c=bu(h,j);a.push(c);}
function ov(c,a,d){Au();a=':'+a;var b=c[a];c[a]=d;return b;}
function pv(f,h,e){Au();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.q();if(jv(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.r();}}}}
function qv(c,a){Au();a=':'+a;var b=c[a];delete c[a];return b;}
function Dt(){}
_=Dt.prototype=new or();_.k=fv;_.p=iv;_.t=mv;_.tN=kw+'HashMap';_.tI=37;_.a=null;_.b=null;_.c=0;_.d=null;var bv;function Ft(b,a,c){b.a=a;b.b=c;return b;}
function bu(a,b){return Ft(new Et(),a,b);}
function cu(b){var a;if(wb(b,20)){a=vb(b,20);if(jv(this.a,a.q())&&jv(this.b,a.r())){return true;}}return false;}
function du(){return this.a;}
function eu(){return this.b;}
function fu(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function gu(a){var b;b=this.b;this.b=a;return b;}
function hu(){return this.a+'='+this.b;}
function Et(){}
_=Et.prototype=new Co();_.eQ=cu;_.q=du;_.r=eu;_.hC=fu;_.ib=gu;_.tS=hu;_.tN=kw+'HashMap$EntryImpl';_.tI=38;_.a=null;_.b=null;function ru(b,a){b.a=a;return b;}
function tu(a){return ku(new ju(),a.a);}
function uu(c){var a,b,d;if(wb(c,20)){a=vb(c,20);b=a.q();if(Bu(this.a,b)){d=Eu(this.a,b);return jv(a.r(),d);}}return false;}
function vu(){return tu(this);}
function wu(){return this.a.c;}
function iu(){}
_=iu.prototype=new vs();_.l=uu;_.z=vu;_.jb=wu;_.tN=kw+'HashMap$EntrySet';_.tI=39;function ku(c,b){var a;c.c=b;a=Cs(new As());if(c.c.b!==(Au(),bv)){Ds(a,Ft(new Et(),null,c.c.b));}dv(c.c.d,a);cv(c.c.a,a);c.a=hr(a);return c;}
function mu(a){return ar(a.a);}
function nu(a){return a.b=vb(br(a.a),20);}
function ou(a){if(a.b===null){throw so(new ro(),'Must call next() before remove().');}else{cr(a.a);av(a.c,a.b.q());a.b=null;}}
function pu(){return mu(this);}
function qu(){return nu(this);}
function ju(){}
_=ju.prototype=new Co();_.u=pu;_.B=qu;_.tN=kw+'HashMap$EntrySetIterator';_.tI=0;_.a=null;_.b=null;function vv(){}
_=vv.prototype=new bp();_.tN=kw+'NoSuchElementException';_.tI=40;function bo(){uj(new sj());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{bo();}catch(a){b(d);}else{bo();}}
var Ab=[{},{},{1:1,19:1},{3:1},{3:1},{3:1,11:1},{3:1,11:1},{2:1},{2:1,4:1},{2:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{6:1,7:1,8:1,9:1,10:1},{5:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{12:1,19:1},{13:1,19:1},{14:1,19:1},{15:1,19:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{3:1,11:1},{16:1},{17:1},{18:1},{18:1},{16:1},{17:1},{20:1},{18:1},{3:1,11:1}];if (com_kditor_Kditor) {  var __gwt_initHandlers = com_kditor_Kditor.__gwt_initHandlers;  com_kditor_Kditor.onScriptLoad(gwtOnLoad);}})();