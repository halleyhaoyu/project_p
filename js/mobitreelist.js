/**
 * Created by admin on 2016/4/29.
 */
function mobitreelist(parentobj,vobj,title,cssid){
    var ulstr = "<ul>";
    for(var i=0;i<24;i++){
        var j = i;
        if(i<10){
            j = '0' + i;
        }
        j += ":00";
        ulstr +='<li>' + j + '</li>';
    }
    ulstr +='</ul>';
    this.obj = $(ulstr);
    this.obj.attr('id',cssid);
    this.parentobj = parentobj;
    this.vobj = vobj;
    this.title = title;
    this.cssid = '#'+cssid+'_dummy';
    this.init();
}

mobitreelist.prototype = {
    constructor:mobitreelist,
    init:function() {
        var that = this;
        this.parentobj.append(this.obj);
        this.obj.mobiscroll().treelist({
            theme: "android-ics light",
            lang: "zh",
            defaultValue: [Math.floor($('li', this.obj).length / 2)],
            cancelText: null,
            onSelect: function(e){
                var data = $('li', that.obj)[e].innerHTML;
                that.vobj.val(data).html(data);
            },
            headerText: function (valueText) {
                return that.title;
            }
        });
        $(this.cssid).css({'position': 'absolute', 'width': '100%','top': '0', 'z-index': '1','opacity': '0','right':0})
    }
}