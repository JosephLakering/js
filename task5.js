var obl = {
    first: ["kolya", "vasya", 'petya'],
    second: "dasha",
    three: {
        first: "Maxim",
        second: "Timur"
    }
};

function biglettr(str) {
    str = str.toUpperCase();
    return str;
}

function bigletterFunction(obj) {
    for (let el in obj) {


        if (typeof obj[el] === "string") {

            var newel = biglettr(obj[el]);
            obj[el] = newel;
        } else if (typeof obj[el] === "object") {
            for (let key in obj[el]) {
                if (typeof (obj[el][key]) === "string") {
                    var ee = biglettr(obj[el][key]);
                    obj[el][key] = ee;
                }
            }
        }
    }
}
bigletterFunction(obl)
console.log(obl);