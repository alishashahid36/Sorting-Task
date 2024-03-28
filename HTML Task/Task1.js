let unsorted_list = [];

document.getElementById("generatebtn").addEventListener('click',function()
{
var number=generaterandomNumbers();
document.getElementById("unsorted").innerHTML=number.join(",");
})

document.getElementById("Mergebtn").addEventListener('click',function()
{
    // var number=generaterandomNumbers();
    var sortednumber=mergeSort(unsorted_list.slice());
    document.getElementById("Sorted Array").innerHTML="After Merge sort";
    document.getElementById("sorted").innerHTML=sortednumber.join(",");
})
document.getElementById("Quickbtn").addEventListener('click',function()
{
    // var number=generaterandomNumbers();
    var sortednumber=quickSort(unsorted_list.slice());
    document.getElementById("Sorted Array").innerHTML="After Quick sort";
    document.getElementById("sorted").innerHTML=sortednumber.join(",");
})
document.getElementById("bubblebtn").addEventListener('click',function()
{
    // var number=generaterandomNumbers();
    var sortednumber=bubbleSort(unsorted_list.slice());
    document.getElementById("Sorted Array").innerHTML="After Bubble sort";
    document.getElementById("sorted").innerHTML=sortednumber.join(",");
})
//Generating random Numbers
function generaterandomNumbers()
{
let number=[];
for(i=0;i<100;i++)
{
    number.push(Math.ceil(Math.random()*100));
   
}
unsorted_list = number;
return number;
}
//Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1)
     return arr;
    var mid = Math.ceil(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    var result = [];
    var l = 0;
    var r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    return result.concat(left.slice(l), right.slice(r));
}
//Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var pivot = arr[Math.floor(arr.length / 2)];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
//Bubble Sort
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}