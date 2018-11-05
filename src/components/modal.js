import Event from './event'

;(function () {

  function Modal(config) {
    // 默认参数
    this.config = {
      parentNode: null,
      width: 'auto',
      height: 'auto',
      message: '',
      buttons: null
    };

    if (config) {
      Object.assign(this.config, config); //合并
    }
    // console.log(this.config)

    var message = '';
    if (this.config.message) {
      message = "<div class='illustrate'>" + this.config.message + "</div>";
    }

    var buttonGroup = '';
    if (this.config.buttons) {
      buttonGroup = "<div class='btn-group'>" +
        "<button class='btn-add-resource'>Add Resource</button>"+
           "<button class='btn-cancle'>Cancle</button>\"+" +
        "</div>"
    }

    var modalTempl = "<div class='md-modal'>" +
      "<div class='dialog-box'>" +
      "<div class='tri'></div>" +
      "<div class='close'>" +
      "<i class='icon icon-close' id='icon-close'></i>" +
      "</div>" +
      message +
      "<input class='resource-input'>" +
      buttonGroup +
      "</div>" +
      "</div>" +
      "<div class='mask'></div>";


    var modal =  this.open(modalTempl);


    var that = this;

    Event.addEvent(document.querySelector(".md-modal .icon-close"),'click',function (event) {
      that.close();
    });

    Event.addEvent(document.querySelector(".md-modal .btn-cancle"),'click',function (event) {
      that.close();
    });

    Event.addEvent(document.querySelector(".md-modal .btn-add-resource"),'click',function (event) {
        that.addResoure(modal);

    });

  }

  Modal.prototype = {
    open:function (html) {

      var parentNode = this.config.parentNode;
      if(parentNode) {  // 如果有，就是挂在parentNode下面，如果没有，就是固定位置的展示
        var div = document.createElement("div");
        div.innerHTML = html;
        parentNode.appendChild(div);
        return div;
      }
    },
    close:function () {
      var parentNode = this.config.parentNode;
      if(parentNode) {  // 如果有，就是挂在parentNode下面，如果没有，就是固定位置的展示
          parentNode.removeChild(parentNode.firstChild);
      }
    },
    addResoure:function (modal) { // 这部分后续放到modal中

      function getNextElement(element){  // ie6的一些bug
        var e = element.nextSibling;
        if(e == null){//测试同胞节点是否存在，否则返回空
          return null;
        }
        if(e.nodeType==3){//如果同胞元素为文本节点
          var two = getNextElement(e);
          if(two.nodeType == 1)
            return two;
        }else{
          if(e.nodeType == 1){//确认节点为元素节点才返回
            return e;
          }else{
            return false;
          }
        }
      }

      var parentNode = this.config.parentNode;
      var text = modal.querySelector(".resource-input").value;

      if(text == ""){
        return;
      }

      var resourceArr = text.split(",");

      for(var index = 0;index < resourceArr.length;index++){
        var resoureHTML = "<span>"+resourceArr[index]+"</span>" +
          "<i class='icon icon-trash'></i>"
        var resource = document.createElement("li");
        resource.innerHTML = resoureHTML;
        resource.setAttribute("class","browser-type");

        getNextElement(modal.parentNode.parentNode).appendChild(resource)
      }

      parentNode.removeChild(modal);
     }

  };

  window.Modal = Modal;

})();