/**
 * Created by Administrator on 2015/12/12.
 */
var $doc = $(document)
$doc.on("click", ".menu_box h3", function () {
    var $this = $(this);
    /* 将原生代码变成Jquery可用的 */
    $this.toggleClass('on');
    /* 在this有on和无on之间进行状态切换 */
    var $p = $this.find("p");
    /* 找到this的子级p，一定要加“.”*/
    $p.toggle();
    /* p的样式转换 */
})
var $nav = $("nav")
$doc.on("click", ".btn_drive", function () {
    $nav.toggleClass("on")


})