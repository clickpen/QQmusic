// 单首渲染操作

(function($, root) {
    var $scope = $(document.body);
    function renderInfo(info) {
        var _html = '<div class="song-name">'+ info.name +'</div>\
        <div class="singer-name">'+ info.singer +'</div>\
        <div class="album-name">'+ info.album +'</div>'
        $(".song-info", $scope).html(_html);
    }
    function renderImg(src) {
        var _img = new Image();
        _img.src = src;
        _img.onload = function() {
            $scope.find(".song-img img").attr("src", src);
            root.blurImg(_img, $scope);
        }
    }
    function renderLike(isLike) {
        if(isLike) {
            $scope.find(".like-btn").addClass("liked");
        } else {
            $scope.find(".like-btn").removeClass("liked");
        }
    }
    root.render = function render(data) {
        if(!data) {
            console.log("render未获取到数据");
            return;
        }
        renderInfo(data);
        renderImg(data.images);
        renderLike(data.isLike);
    }
    // 通过window.player来暴露此函数
})(window.Zepto, window.player || (window.player = {}))