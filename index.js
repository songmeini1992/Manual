/**
 * Created by Administrator on 2015/12/12.
 */
var $doc = $(document)
$doc.on("click", ".menu_box h3", function () {
    var $this = $(this);
    /* ��ԭ��������Jquery���õ� */
    $this.toggleClass('on');
    /* ��this��on����on֮�����״̬�л� */
    var $p = $this.find("p");
    /* �ҵ�this���Ӽ�p��һ��Ҫ�ӡ�.��*/
    $p.toggle();
    /* p����ʽת�� */
})
var $nav = $("nav")
$doc.on("click", ".btn_drive", function () {
    $nav.toggleClass("on")


})