"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var num = 3;

var fn = function fn() {
  return 1;
};

var TopBar = /*#__PURE__*/function () {
  function TopBar(props) {
    _classCallCheck(this, TopBar);

    this.el = props.el;
    this.title = props.title;
    this.info = props.info;
    this.init();
  }

  _createClass(TopBar, [{
    key: "init",
    value: function init() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      console.log(localStorage.getItem('token'));
      var dom = "\n      <div class=\"zgys-title\">".concat(this.title, "</div>\n    ");
      document.getElementById(this.el).innerHTML = dom;
    }
  }]);

  return TopBar;
}();