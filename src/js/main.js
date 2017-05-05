"use strict";

/**
 * Created by Павел on 07.04.2017.
 */
function checkItemNumber(number, quantity) {
    if (number < 0) return quantity - 1;
    if (number >= quantity) return 0;
    return number;
}

function setClasses($items) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = $items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            for (var i = 0; i < $items.length; i++) {
                $(item).removeClass("gallery-thumbs__item" + i);
            }$(item).addClass("gallery-thumbs__item" + $(item).attr("data-gallery-item"));
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
}

function changeNumber($items, increment) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = $items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            var number = parseInt($(item).attr("data-gallery-item"));
            $(item).attr("data-gallery-item", "" + checkItemNumber(number + increment, 10));
            console.log($(item), checkItemNumber(number + increment, 10));
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

$(document).ready(function () {
    var $galleryItems = $(".gallery-thumbs__item");

    $(".gallery-thumbs__controls_right").click(function () {
        var $ninthItem = $(".gallery-thumbs__item9").hide();
        changeNumber($galleryItems, -1);
        setClasses($galleryItems);
        setTimeout(function () {
            $ninthItem.show();
        }, 100);
    });

    $(".gallery-thumbs__controls_left").click(function () {
        var $zeroItem = $(".gallery-thumbs__item0").hide();
        changeNumber($galleryItems, 1);
        setClasses($galleryItems);
        setTimeout(function () {
            $zeroItem.show();
        }, 100);
    });
});