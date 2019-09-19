VBI.Configurations=
function(){"use strict";var c={};c.m_configdata=[];c.clear=function(){c.m_configdata=[];};c.load=function(d,a){if(d.Set){c.clear();var r=d.Set.P;if(jQuery.type(r)=='object'){c.m_configdata[r.name]=r.value;}else if(jQuery.type(r)=='array'){for(var n=0,l=r.length;n<l;++n){c.m_configdata[r[n].name]=r[n].value;}}}};c.GetData=function(n){return c.m_configdata[n];};return c;}
;
