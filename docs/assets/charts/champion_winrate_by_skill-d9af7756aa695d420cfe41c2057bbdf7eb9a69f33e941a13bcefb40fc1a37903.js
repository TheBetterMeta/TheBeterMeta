"use strict";!function(){function t(t,n,r){for(var a=tbm.Champions.withRole(t),i=0;i<a.length;i++){var o=a[i];r&&h.toggleChampion(o),e(o,n,!1)}r&&n.draw()}function e(t,e,n){e.toggleSeries(t,!0),n&&e.draw()}function n(t,e,n,r,a){e.setData(function(e,n){e.Champion;return e.Patch!=r?void 0:[e[t]]},t),n&&e.draw()}function r(t,e,n,r,a){if(!n)throw"missing handler";for(var i=$("#"+r),o=i.find(a),c=0;c<o.length;c++){var l=$(o[c]);l.on(e,function(e){n(t,e)})}var u=o.filter(".default");if(u.length>1)throw"Too many defaults";u[0]&&u[0].click()}function a(t){for(var e={},n=0,r=0;r<t.getNumberOfColumns();r++){var a=t.getColumnLabel(r),i=tbm.Champions.roleIndex(a);if(void 0!=i){var o={};o.color=tbm.colors[i.index],o.pointSize=u[i.role],o.pointShape=l[i.role],e[n]=o,n++}}return e}function i(t,e,n){for(var r=t.rawData(),a=Number.MIN_VALUE,i=Number.MAX_VALUE,o=0;o<r.length;o++){var c=r[o],l=c["Effective Winrate"];l>a&&(a=l),i>l&&(i=l)}for(var u=e?0:Math.floor(i/n)*n,h=[u];a>=u;)u+=n,h.push(u);return h}function o(n,r){var o=a(r),c=n.basicOptions();c.series=o,c.hAxis.format="percent",c.vAxis.format="percent",c.hAxis.title="Skill Percentile",c.chartArea.right=15,c.hAxis.ticks=[0,.05,.1,.2,.3,.4,.5,.6,.7,.8,.9,.95],c.vAxis.ticks=i(n,!1,.05),c.hAxis.maxAlternation=1,c.hAxis.showTextEvery=1,c.hAxis.minTextSpacing=2,n.finalize({chartType:"LineChart",options:c}),t("Damage",n,!1),t("Flank",n,!1),t("Support",n,!1),h.addClickHandlers(function(e){return t(e,n,!0)},function(t){return e(t,n,!0)}),n.formatX(new google.visualization.NumberFormat({pattern:"#0.0% Percentile"})),n.formatY(new google.visualization.NumberFormat({pattern:"#0.0% Eff Winrate"}))}var c={csv:tbm.assets.champion_winrate_by_skill,pageName:"Champion Winrate by Skill",containerId:"champion-rating-body"},l={Tank:"circle",Flank:"triangle",Support:"square",Damage:"star"},u={Tank:10*(2/3),Flank:14*(2/3),Support:14*(2/3),Damage:10},h=new tbm.ChampionLegend(tbm.Champions.champions(),tbm.Champions.nameToId(),c.pageName),s=function(t){var e=t.Chart().rawData();if(e){for(var n={},a=0;a<e.length;a++){var i=e[a],o=i.Patch;n[o]=!0}var c=Object.keys(n);c.sort();for(var a=0;a<c.length;a++){var o=c[a],l=document.createElement("option");l.text=o,a==c.length-1&&(l.selected=!0),$("#input_patch_text").append(l)}$("button").click(function(){$("#input_patch_text :selected")[this.id]().prop("selected",!0)}),t.currentPatch=c[c.length-1],r(t,"change keyup input mousewheel",p,"chart-controls","#input_patch_text"),r(t,"click",p,"chart-controls","#prev"),r(t,"click",p,"chart-controls","#next"),m(t)}},p=function(t,e){var n=$("#input_patch_text").find(":selected"),r=n.text();t.currentPatch!=r&&(t.currentPatch=r,m(t))},m=function(t){t.Chart().wipe(),n("Effective Winrate",t.Chart(),!0,t.currentPatch)},f=function(t,e){return new tbm.Chart(t.containerId,e,{type:"number",label:"Percentile",value:function(t){return t.Percentile}},{type:"string",value:function(t){var e={label:t.Champion,type:"number",role:"data"};return[{name:t.Champion,cols:[e]}]}})},v=new tbm.ChartOnPage(c,f,o);v.ready(function(){return s(v)})}();