/**
 *
 */
window.wangEditor.fullscreen = {
    // editor create之后调用
    init: function (editorSelector) {
        $(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_fullscreen" href="javascript:window.wangEditor.fullscreen.toggleFullscreen(\'' + editorSelector + '\')">全屏</a></div>');
        /*$(editorSelector + " .w-e-toolbar").append('<div class="w-e-menu"><a class="_wangEditor_btn_preview" href="javascript:window.wangEditor.fullscreen.preview()">预览</a></div>');*/
    },
    toggleFullscreen: function (editorSelector) {
        $(editorSelector).toggleClass('fullscreen-editor');
        if ($(editorSelector + ' ._wangEditor_btn_fullscreen').text() == '全屏') {
            $(editorSelector + ' ._wangEditor_btn_fullscreen').text('退出全屏');
        } else {
            $(editorSelector + ' ._wangEditor_btn_fullscreen').text('全屏');
        }
    },
    preview: function () {
        var layIndex = layer.open({//layui的弹出层直接把获取到的编辑器html内容放到里面就可以显示
            title: '效果预览'
            , content: one_editor.txt.html()//通过编辑器的监听onchange事件把编辑器内容放到id为bBody的input里
        });
        layer.full(layIndex);
    }
};

