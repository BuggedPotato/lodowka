(()=>{"use strict";!function(){function t(){}t.showEditForm=function(){document.getElementById("wysiwyg").style.display="flex",t.addButtonsToStatus()},t.hideEditForm=function(e){e.preventDefault(),document.getElementById("wysiwyg").style.display="none",t.removeButtonsFromStatus()},t.addButtonsToStatus=function(){var e=document.getElementsByClassName("tox-statusbar__text-container")[0],n=document.createElement("button");n.classList.add("btnTinyMCE"),n.id="TinyMCECancel",e.appendChild(n);var o=document.createElement("button");o.classList.add("btnTinyMCE"),o.id="TinyMCESave",e.appendChild(o),n.addEventListener("click",t.hideEditForm)},t.removeButtonsFromStatus=function(){var t=document.getElementsByClassName("tox-statusbar__text-container")[0],e=document.getElementById("TinyMCECancel"),n=document.getElementById("TinyMCESave");t.removeChild(e),t.removeChild(n)},t.scriptSource="https://cdn.tiny.cloud/1/s50o1drzeq136sblv5lon7ji7r5esiq2o5ycwl1kwwypxa91/tinymce/5/tinymce.min.js"}()})();