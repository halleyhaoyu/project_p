/**
 * Created by admin on 2016/4/27.
 */
function listitem(json,obj){
    this.obj = $('<div class="list">' +
                    '<p class="list-title">返回</p>' +
                    '<div class="list-bg"></div>' +
                    '<ul class="list-content"></ul>' +
                '</div>');
    this.vobj = obj;
    $('.list-title',this.obj).css({'position':'fixed',
                                    'z-index':'10',
                                    'width':'100%',
                                    'top':'0',
                                    'border-bottom': '1px solid #c9c9c9',
                                    'padding': '0.8em .6em',
                                    'background-color': 'whitesmoke',
                                    'cursor': 'pointer',
                                    });
    $('.list-bg',this.obj).css({'background-color':'white',
                                'position':'fixed',
                                'z-index':'8',
                                'top':'0',
                                'width':'100%',
                                'height':'100%',
                                });
    $('.list-content',this.obj).css({'position':'absolute',
                                        'width':'100%',
                                        'z-index':'9',
                                        'padding-left':'.8em',
                                        'box-sizing': 'border-box',
                                        'margin': 0
                                    });

    this.initPage(json);
    this.initEvent();

    $('.list-content li',this.obj).css({'list-style':'none',
                                        'border-bottom':'1px solid #D8D8D8',
                                        'padding':'.8em .6em',
                                        'cursor': 'pointer'
                                        });

}

listitem.prototype = {
    constructor:listitem,
    initPage:function(json){
        var listContent = $(".list-content",this.obj);
        listContent.empty();
        for(var i=0;i<json.length;i++){
            var li = $('<li></li>');
            li.attr('data-id',i);
            li.html(json[i]);
            listContent.append(li);
        }
        $('body').append(this.obj);
        this.body_scrollTop = document.body.scrollTop;
        document.body.scrollTop = 0
        var ht = $(".list-title",this.obj)[0].offsetHeight + "px";
        listContent.css("top",ht);
    },
    initEvent:function(){
        var that = this;
        $(document).on('click','li',function(e){
            var vstr = $(this).html();
            that.vobj.html(vstr).val(vstr);
            $('.list-title').click();
        });
        $(document).on('click','.list-title',function(e){
            document.body.scrollTop = that.body_scrollTop;
            $(document).off('click','li');
            $(document).off('click','.list-title');
            that.obj.remove();
        });
    }
}