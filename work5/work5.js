//9*9的空表，请自行编写这段代码
str = "<table border='1'>";
for (let a=1;a<10;++a) {
    str += "<tr>";
    for (let b=1;b<10;++b) {
        str += "<td>&nbsp;</td>";
    }
    str += "</tr>";
}
str += "</table>";
document.getElementById("table1").innerHTML = str;

//倒九九乘法空表
str = "<table border='1'>";
for (let i=9;i>0;--i) {
    str += "<tr>";
    for (var j=i;j>0;--j) {
        str += "<td>&nbsp;</td>";
    }
    str += "</tr>";
}
str += "</table>";
document.getElementById("table2").innerHTML = str;


//倒九九乘法表，请自行编写这段代码

str = "<table border='1'>";
for (let c=9;c>=1;--c){
    str += "<tr>"
    for (var d=c;d>=1;--d){
        //拼接单元格
        str += "<td>" + d + "*" + c + "=" + (d * c) + "</td>";
    }
    str += "</tr>";
}
str += "</table>";
//设置div的html文档内容
document.getElementById("table3").innerHTML = str;

