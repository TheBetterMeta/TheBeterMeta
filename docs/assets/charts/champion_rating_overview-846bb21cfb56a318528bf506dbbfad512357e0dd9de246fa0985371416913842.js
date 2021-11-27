"use strict";!function(){function t(t,e,n){for(var r=tbm.Champions.withRole(t),o=0;o<r.length;o++){var i=r[o];n&&c.toggleChampion(i),a(i,e,!1)}n&&e.draw()}function a(t,a,e){a.toggleSeries(t,!1),e&&a.draw()}function e(t,a,e){a.setData(function(a,e){var n=a.Champion,r=tbm.Champions.roleIndex(n),o={};void 0!=r&&(o.color=tbm.colors[r.index]);var i="color: "+o.color+";";return[a[t],i]},t),e&&a.draw()}function n(t,a,e,n){if(!a)throw"missing handler";for(var r=$("#"+e),o=r.find("."+n),i=0;i<o.length;i++){var c=$(o[i]);c.click(function(e){a(t,e)})}var m=r.find(".default");if(m.length>1)throw"Too many defaults";m[0]&&m[0].click()}function r(t){for(var a={},e=0,n=0;n<t.getNumberOfColumns();n++){var r=t.getColumnLabel(n),o=tbm.Champions.roleIndex(r);if(void 0!=o){var i={};i.color=tbm.colors[o.index],a[e]=i,e++}}return a}function o(n,o){var i=(r(o),n.basicOptions());i.hAxis.format="percent",i.hAxis.maxAlternation=1,i.hAxis.showTextEvery=1,i.hAxis.minTextSpacing=2,i.chartArea.left=80,i.chartArea.right=20,i.areaOpacity=.5,i.isStacked="percent",n.finalize({chartType:"AreaChart",options:i}),t("Damage",n,!1),t("Flank",n,!1),t("Support",n,!1),c.addClickHandlers(function(a){return t(a,n,!0)},function(t){return a(t,n,!0)}),e("Smoothed Normalized Count",n,!0),n.formatX(new google.visualization.NumberFormat({pattern:"#0.0% Advantage"}));var m=new google.visualization.NumberFormat({pattern:"0.0000"});n.formatY(m),n.setNiceHorizontalTicks(.05),n.draw()}var i={csv:tbm.assets.champion_rating_overview,pageName:"Champion Rating Overview",containerId:"champion-rating-body"},c=new tbm.ChampionLegend(tbm.Champions.champions(),tbm.Champions.nameToId(),i.pageName),m=function(t,a){var e=a.target||a.srcElement,n=$("#chart-controls .smoothed")[0];s(e.checked,n.checked)},l=function(t,a){var e=a.target||a.srcElement,n=$("#chart-controls .normalized")[0];s(n.checked,e.checked)},s=function(t,a){a?t?e("Smoothed Normalized Count",f.Chart(),!0):e("Smoothed Count",f.Chart(),!0):t?e("Normalized Count",f.Chart(),!0):e("Count",f.Chart(),!0)},d=function(t,a){var e=a.target||a.srcElement,n=t.getOptions();"unstacked"==e.value?(n.isStacked=!1,n.areaOpacity=0,n.vAxis.format="decimal"):"stacked"==e.value?(n.isStacked=!0,n.areaOpacity=.5,n.vAxis.format="decimal"):(n.isStacked="percent",n.areaOpacity=.5,n.vAxis.format="percent"),t.draw()},h=function(t){n(t,d,"chart-controls","cro-radio"),n(t,m,"chart-controls","normalized"),n(t,l,"chart-controls","smoothed")},u=function(t,a){return new tbm.Chart(t.containerId,a,{type:"number",label:"Advantage",value:function(t){return t.Advantage}},{type:"string",value:function(t){var a={label:t.Champion,type:"number",role:"data"},e={type:"string",role:"style"};return[{name:t.Champion,cols:[a,e]}]}})},f=new tbm.ChartOnPage(i,u,o);f.ready(function(){return h(f)})}();