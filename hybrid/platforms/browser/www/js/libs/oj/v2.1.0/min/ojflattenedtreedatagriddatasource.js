/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojrowexpander"],function(a){a.Eh=function(g,c,b,d,e){a.o.NE(b);this.ed=g;this.mg=c;this.YM=b;this.oc=d;this.oa=e};o_("FlattenedTreeHeaderSet",a.Eh,a);a.Eh.prototype.getData=function(g,c){var b;a.o.assert(g<=this.mg&&g>=this.ed,"index out of bounds");a.o.assert(null==c||0==c,"level out of bounds");return null!=this.oa&&null!=this.oc?(b=this.oc.getData(g-this.ed+this.oc.getStart()),null!=b?b.get?b.get(this.oa):b[this.oa]:null):this.YM[g]};
a.b.g("FlattenedTreeHeaderSet.prototype.getData",{getData:a.Eh.prototype.getData});a.Eh.prototype.getMetadata=function(g,c){a.o.assert(g<=this.mg&&g>=this.ed,"index out of bounds");a.o.assert(null==c||0==c,"level out of bounds");return null!=this.oa&&null!=this.oc?this.oc.getMetadata(g-this.ed+this.oc.getStart()):{key:this.getData(g)}};a.b.g("FlattenedTreeHeaderSet.prototype.getMetadata",{getMetadata:a.Eh.prototype.getMetadata});a.Eh.prototype.getCount=function(){return null!=this.oa&&null!=this.oc?
Math.min(this.oc.getCount(),this.mg-this.ed):Math.max(0,this.mg-this.ed)};a.b.g("FlattenedTreeHeaderSet.prototype.getCount",{getCount:a.Eh.prototype.getCount});a.Eh.prototype.getLevelCount=function(){return 0<this.getCount()?1:0};a.b.g("FlattenedTreeHeaderSet.prototype.getLevelCount",{getLevelCount:a.Eh.prototype.getLevelCount});a.Eh.prototype.getExtent=function(g,c){a.o.assert(g<=this.mg&&g>=this.ed,"index out of bounds");a.o.assert(null==c||0==c,"level out of bounds");return{extent:1,more:{before:!1,
after:!1}}};a.b.g("FlattenedTreeHeaderSet.prototype.getExtent",{getExtent:a.Eh.prototype.getExtent});a.Eh.prototype.getDepth=function(g,c){a.o.assert(g<=this.mg&&g>=this.ed,"index out of bounds");a.o.assert(null==c||0==c,"level out of bounds");return 1};a.b.g("FlattenedTreeHeaderSet.prototype.getDepth",{getDepth:a.Eh.prototype.getDepth});a.il=function(g,c,b,d,e,f){a.o.NE(f);this.Ba=g;this.kb=c;this.yp=b;this.Dw=d;this.oc=e;this.Lf=f};o_("FlattenedTreeCellSet",a.il,a);a.il.prototype.getData=function(g){var c,
b,d,e;c=this.F7(g);if(null==c)return null;g=c[0];c=c[1];a.o.assert(g<this.oc.getStart()+this.oc.getCount()&&c<this.Lf.length);b=this.Lf[c];d=this.oc.getData(g);return null!=d?(g={},c=d.get?function(){return d.get(b)}:function(){return d[b]},e=d.set?function(a){return d.set(b,a)}:function(a){d[b]=a},Object.defineProperty(g,"data",{get:c,set:e}),g):null};a.b.g("FlattenedTreeCellSet.prototype.getData",{getData:a.il.prototype.getData});a.il.prototype.getMetadata=function(g){var c;c=this.F7(g);if(null==
c)return null;g=c[0];c=c[1];a.o.assert(g<this.oc.getStart()+this.oc.getCount()&&c<this.Lf.length);c=this.Lf[c];g=this.oc.getMetadata(g);g.keys={row:g.key,column:c};return g};a.b.g("FlattenedTreeCellSet.prototype.getMetadata",{getMetadata:a.il.prototype.getMetadata});a.il.prototype.F7=function(g){var c;a.o.hi(g);if(null==this.oc||0==this.oc.length)return null;c=g.row-this.Ba+this.oc.getStart();g=g.column;a.o.Dq(c,null);a.o.Dq(g,null);a.o.assert(0<=c&&0<=g);return[c,g]};a.il.prototype.getStart=function(a){return"row"===
a?this.Ba:"column"===a?this.yp:0};a.b.g("FlattenedTreeCellSet.prototype.getStart",{getStart:a.il.prototype.getStart});a.il.prototype.getCount=function(a){return"row"===a?Math.min(this.kb-this.Ba,this.oc.getCount()):"column"===a?this.Dw-this.yp:0};a.b.g("FlattenedTreeCellSet.prototype.getCount",{getCount:a.il.prototype.getCount});a.yb=function(g,c){a.yb.u.constructor.call(this,g,c)};o_("FlattenedTreeDataGridDataSource",a.yb,a);a.b.ta(a.yb,a.ua,"oj.FlattenedTreeDataGridDataSource");a.yb.prototype.Init=
function(){a.yb.u.Init.call(this);this.Lf=a.yb.u.bF.call(this,"columns");this.oa=a.yb.u.bF.call(this,"rowHeader")};a.b.g("FlattenedTreeDataGridDataSource.prototype.Init",{Init:a.yb.prototype.Init});a.yb.prototype.getCountPrecision=function(a){return"row"===a?"estimate":"actual"};a.b.g("FlattenedTreeDataGridDataSource.prototype.getCountPrecision",{getCountPrecision:a.yb.prototype.getCountPrecision});a.yb.prototype.getCount=function(a){return"row"===a?-1:"column"===a?this.Lf.length:0};a.b.g("FlattenedTreeDataGridDataSource.prototype.getCount",
{getCount:a.yb.prototype.getCount});a.yb.prototype.fetchHeaders=function(g,c,b){var d,e;d=g.axis;if("column"===d)d=g.start+g.count,d>this.getCount("column")&&(d=this.getCount("column")-g.start),e=new a.Eh(g.start,d,this.Lf);else if("row"===d&&null!=this.oa){this.sp={range:g,callbacks:c,callbackObjects:b};return}null!=c&&null!=c.success&&(null==b&&(b={}),c.success.call(b.success,e,g,null))};a.b.g("FlattenedTreeDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:a.yb.prototype.fetchHeaders});a.yb.prototype.fetchCells=
function(g,c,b){var d,e,f,h;for(d=0;d<g.length;d++)if(e=g[d],"row"==e.axis){f=e.start;h=e.count;break}a.yb.u.fp.call(this,{start:f,count:h},{success:function(a){this.NT(a,g,c,b,0)}.bind(this),error:function(a){this.lva(a,{start:f,count:h},c,b)}.bind(this)})};a.b.g("FlattenedTreeDataGridDataSource.prototype.fetchCells",{fetchCells:a.yb.prototype.fetchCells});a.yb.prototype.keys=function(g){var c,b;c=g.row;b=g.column;return new Promise(function(d){c>a.yb.u.fGa.call(this).end||b>this.Lf.length?d(null):
d({row:a.yb.u.getKey.call(this,c),column:this.Lf[b]})}.bind(this))};a.b.g("FlattenedTreeDataGridDataSource.prototype.keys",{keys:a.yb.prototype.keys});a.yb.prototype.indexes=function(g){var c,b,d,e,f;d=g.row;e=g.column;return new Promise(function(g){c=a.yb.u.Uk.call(this,d);for(f=0;f<this.Lf.length;f++)if(this.Lf[f]===e){b=f;break}0<=c||0<=b?g({row:c,column:b}):g(null)}.bind(this))};a.b.g("FlattenedTreeDataGridDataSource.prototype.indexes",{indexes:a.yb.prototype.indexes});a.yb.prototype.sort=function(g,
c,b){return a.yb.u.getWrappedDataSource.call(this).sort(g,{success:function(){this.ZT(c,b)}.bind(this),error:c.error})};a.b.g("FlattenedTreeDataGridDataSource.prototype.sort",{sort:a.yb.prototype.sort});a.yb.prototype.ZT=function(a,c){this.refresh();a.success&&(null==c&&(c={}),a.success.call(c.success))};a.yb.prototype.move=function(g,c,b,d){a.yb.u.getWrappedDataSource.call(this).move(g,c,b,d)};a.b.g("FlattenedTreeDataGridDataSource.prototype.move",{move:a.yb.prototype.move});a.yb.prototype.getCapability=
function(g){return"default"===a.yb.u.getWrappedDataSource.call(this).getCapability(g)?"column":"none"};a.b.g("FlattenedTreeDataGridDataSource.prototype.getCapability",{getCapability:a.yb.prototype.getCapability});a.yb.prototype.jF=function(g,c){a.yb.u.jF.call(this,g,c)};a.yb.prototype.NT=function(g,c,b,d){var e,f,h,k,l,m;for(e=0;e<c.length;e++)f=c[e],"row"==f.axis?(h=f.start,k=f.count):"column"==f.axis&&(l=f.start,m=f.count,l+m>this.getCount("column")&&(m=this.getCount("column")-l));this.sp&&(e=this.sp.range,
e.start==h&&e.count==k&&(this.UT(g,e,this.sp.callbacks,this.sp.callbackObjects),this.sp=null));g=new a.il(h,h+k,l,l+m,g,this.Lf);b.success&&(null==d&&(d={}),b.success.call(d.success,g,c))};a.yb.prototype.lva=function(a,c,b,d){var e;this.sp&&(e=this.sp.range,e.start==c.start&&e.count==c.count&&(c=this.sp.callbacks,e=this.sp.callbackObjects,c.error&&(null==e&&(e={}),c.error.call(e.error,a))),this.sp=null);b.error&&(null==d&&(d={}),b.success.call(d.error,a))};a.yb.prototype.UT=function(g,c,b,d){g=new a.Eh(c.start,
c.start+c.count,this.Lf,g,this.oa);b.success&&(null==d&&(d={}),b.success.call(d.success,g,c,null))};a.yb.prototype.zM=function(g,c,b){var d,e,f,h;d=null;this.oa&&(d=new a.Eh(g,g+b.getCount(),this.Lf,b,this.oa));c=new a.il(g,g+b.getCount(),0,this.Lf.length,b,this.Lf);f=[];h=[];for(e=0;e<b.getCount();e++)f.push({row:this.Fj(g+e).key}),h.push({row:g+e,column:-1});g={source:this,operation:"insert"};g.result=c;d&&(g.header=d);g.keys=f;g.indexes=h;a.yb.u.handleEvent.call(this,"change",g)};a.yb.prototype.BN=
function(g){var c,b,d;c=[];d=[];for(b=0;b<g.length;b++)c.push({row:g[b].key}),d.push({row:g[b].index,column:-1});g={source:this,operation:"delete"};g.keys=c;g.indexes=d;a.yb.u.handleEvent.call(this,"change",g)};a.yb.prototype.rY=function(g,c){c.success.call(null,new a.Xg(null,g.start))}});