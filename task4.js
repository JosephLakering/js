var arr = ['petya', 'vasya', 'kolya', ['oleg', 'dasha', 'ksusha'], {
    first: "jenya",
    second: "vladimir",
    third: "rich"
}]

function ucFirst(str){
    var p = str.lenght
    str = str[0].toUpperCase() + str.slice(1,p)
    return str
}

function changeFunction(arr) {
    arr.forEach(function (el, i, arr) {
                if (typeof (el) === "string") {
                    el = ucFirst(el) ;
                    arr[i] = el;
                    
                } else if (typeof(el) === "object"){
                 for( let key in el ){
                var ee = ucFirst(el[key]) ;
                 arr[i][key] = ee; 
                 

                 }


                }})
                 }
changeFunction(arr)

console.log(arr)