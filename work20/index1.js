//获取按钮添加单击事件，获取第一个下拉框中被选中的option添加到第二个下拉框
$('#toRight').click(function (){
    $('#right>select').append($('#left>select>option:selected'));
});
$('#toLeft').click(function (){
    $('#left>select').append($('#right>select>option:selected'));
});
$('#toAllRight').click(function (){
    $('#right>select').append($('#left>select>option'));
});
$('#toAllLeft').click(function (){
    $('#left>select').append($('#right>select>option'));
});