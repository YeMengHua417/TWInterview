'use strict';
import Event from "../src/components/event"

var doc = document;
var addBtnLists = doc.querySelectorAll('.icon-plus');

window.onload=function () {

  for (var i = 0 , len = addBtnLists.length ; i < len ; i++) {
  Event.addEvent(addBtnLists[i], 'click' , function (event) {
    var event = Event.getEvent(event);

    if(event.target != event.currentTarget){
      return;
    }

    var m = new Modal({
      width:'405px',
      height:'110px',
      parentNode:this,
      message:'Separate multiple resource name with commas',
      buttons:[
        {
          text:'',
          type:'green',
          callback:function () {
          }
        },{
          text:'',
          type:'green',
          callback:function () {

          }
        }
      ]})

    // event.stopPropagation()

  })
}

  // 删除

  var ul = document.getElementsByClassName('browser-types');

  for (var j = 0; j < ul.length; j++) {
    Event.addEvent(ul[j], 'click', function (event) {

      var tar = event.target || event.srcElement;

      // var tar = event.target;
      if (tar.nodeName.toLowerCase() == "i") {
        tar.parentNode.parentNode.removeChild(tar.parentNode);
      }
    });
  }


  var expandBtn = document.getElementById("expand");
  var reduceBtn = document.getElementById("reduce");

  Event.addEvent(expandBtn, 'click', function (event) {
    var classVal = expandBtn.getAttribute("class");

    if (classVal.indexOf("acitve") != -1) {
      return;
    } else {
      classVal = classVal.concat(" active");
      expandBtn.setAttribute("class", classVal); // 给点击的button添加样式，并给对方的去掉
      reduceBtn.setAttribute("class", "icon icon-th-list")

      // 展开
      if (document.body.offsetWidth > 1024) {
        var sidebar = document.getElementById("sidebar");
        sidebar.style.display = "none";
        var main = document.getElementById("main");
        main.setAttribute("class", "grid-item main main-expand")

      }

    }

  })

  Event.addEvent(reduceBtn, 'click', function (event) {
    var classVal = expandBtn.getAttribute("class");

    if (classVal.indexOf("acitve") != -1) {
      return;
    } else {
      classVal = classVal.concat(" active");
      reduceBtn.setAttribute("class", classVal); // 给点击的button添加样式，并给对方的去掉
      expandBtn.setAttribute("class", "icon icon-th-list")

      // 缩起
      if (document.body.offsetWidth > 1024) {
        var sidebar = document.getElementById("sidebar");
        sidebar.style.display = "block";
        var main = document.getElementById("main");
        main.setAttribute("class", "grid-item main")
      }
    }
  })

}