// ARRAY相关
let _Array = {
    find (_p) {
        console.log('find');
        let length = this.length;
        for (let i = 0; i < length; i++) {
            if (_p(this[i])) return this[i];
        }
        return null;
    }
};

export default {
    init () {
        // 扩展
        if (!('find' in [])) {
            window.Array.prototype.find = _Array.find;
        }
        if (!window.Array.prototype.filter) {
            window.Array.prototype.filter = function (iterator, context) {
                var arr = [];
                var i;
                for (i = 0; i < this.length; i += 1) {
                    if (iterator.call(context, this[i])) {
                        arr.push(this[i]);
                    }
                }
                return arr;
            };
        }
        if (!window.Array.prototype.reject) {
            window.Array.prototype.reject = function (iterator, context) {
                return this.filter(function (item) {
                    return !iterator.call(context, item);
                });
            };
        }

        // alert增强
        (function () {
            var $that = this;
            var $alertTip = function (message) {
                if (document.querySelector('.js-alert')) {
                    var $removeDiv = document.querySelector('.js-alert');
                    document.body.removeChild($removeDiv);
                }
                var div = document.createElement('div');
                div.className = 'js-alert';
                div.innerHTML = message;
                document.body.appendChild(div);
                var _alert = document.querySelector('.js-alert');
                setTimeout(function () {
                    try {
                        document.body.removeChild(_alert);
                    } catch (err) {}
                }, 5000);
            };
            $that.alertTip = $alertTip;
        }).call(window);
    }
};
