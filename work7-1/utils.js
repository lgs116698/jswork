//冒泡排序
function bubbleSort(str) {
    //把字符串切分成数组
    let arr = str.split(',')
    //声明排序步骤记录数组sortLog数组的数据用于动画演示
    let sortLog = []
    //比较轮数，数组有多少个数字，就比较数组长度—1轮
    for (let i = 0;i < arr.length -1; i++) {
        //从第一个开始比较相邻的俩个数值，
        for (let j = 0;j < arr.length - i - 1; j++) {
            //把比较前的数组状态和定位指针保存到sortLog中，为保持演示效果，加多俩行。
            sortLog.push([arr.concat(),[j,j + 1]])
            sortLog.push([arr.concat(),[j,j + 1]])
            sortLog.push([arr.concat(),[j,j + 1]])
            //比较相邻的俩个元素，如果左面的大，那么就把大的交换倒右边
            if(arr[j] > arr[j + 1]) {
                //使用解构赋值的方法，把俩个元素交换位置
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
                //把比较之后的数组状态和定位指针保存到sortLog中
                sortLog.push([arr.concat(),[j,j + 1]])
            }
        }
    }
//把排序最终状态的数组和取消定位指针保存到sortLog中，因为动画的最后状态是不显示比较数据的。
sortLog.push([arr.concat(),[-1,-1]])
//调试时请认真分析sortLog的数据解构
//console.log(sortLog)
return sortLog
}
//显示排序的每一个步骤
function showLog(logValues,showElement){
    let str = ''
    //解构赋值的方式，从排序日志遍历器去取出一条结果，赋值给row和pos变量
    let{
        done,
        value:[row,pos]
    } = logValues.next()
    //比对一下row和pos的值是否一致
    //console.log(row)
    //console.log(pos)
    //遍历row数组，构建显示当前排序状态的html代码
    for (const key in row) {
        //根据定位指针数据把进行比较的数字编程红色
        let color = pos.index0f(Number(key)) > -1 ?'color:red;':''
        //设置字体的大小等html代码
        str += '<span style="font-size:' + row[key] * 20 + 'px;' +
        color + '">' + row[key] + '</span>'
    }
    //把html代码设置到显示的div中
    showElement.innerHTML = str
    //
    //
    if(pos[0] !=-1)
        setTimeout("showLog(logValues,showDiv)",500)
}

//插入排序
function insertSort(str) {let arr = str.split(',')
let wdLog= []
for (let i = 1;i < arr.length; i++){
    for (let j = i;j > 0; j--){
        wdLog.push([arr.concat(), [j,j - 1]])
        wdLog.push([arr.concat(), [j,j - 1]])
        wdLog.push([arr.concat(), [j,j - 1]])
        if (arr[j - 1] > arr[j]) {
            [arr[j - 1],arr[j]] = [arr[j], arr[j - 1]]
         wdLog.push([arr.concat(), [j,j - 1 ]])
        }
    }
}
wdLog.push([arr.concat(), [-1,-1]])

return wdLog
}
function showLog(logValues, showElement) {
let str = ''
let {
    done,
    value: [row, pos]
} = logValues.next()
for (const key in row) {
let color = pos.indexOf(Number(key)) > -1 ? 'color:red;' : ''
str += '<span style="font-size:' + row[key] * 20 + 'px;' + color + '">' + row[key] + '</span>'

}
showElement.innerHTML = str
if (pos[0] != -1)
setTimeout("showLog(logValues,showDiv)",500)

}