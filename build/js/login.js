webpackJsonp([1],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

$(".submit").click(function () {
    var form = $("#form").serializeArray();
    var formObject = JSON.parse(JSON.stringify(form));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = formObject[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (!item.value) {
                alert('有欄位沒填寫！');
                return;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    $.ajax({
        url: "/login",
        method: "POST",
        data: form
    }).done(function (res) {
        $("#form")[0].reset();
        alert(res.message);
        window.location.href = window.location.origin + '/index';
    }).fail(function (res) {
        alert(textStatus);
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[2]);