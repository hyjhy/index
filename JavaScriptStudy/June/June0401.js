var a = 1;

function print(){
    console.log(a);
}
print();

function print1(){
    var a = 111;
    console.log('지역스코프'+a);
}
print1();


console.log(a);