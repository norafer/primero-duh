let a = [2,5,9,9]
let b = [3,4,2,1]
let c = []
let d=0

for (s=0;s<4;s++){
    c[s]= a[s]+b[s];
    d = d + c[s];
}
console.log(c);
console.log(d);
