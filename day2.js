// day 2


// memory is assigned

const a=10;
const b=a;
console.log("a==b "+(a==b));
console.log("a===b "+(a===b));
const arra1=[1,2,3,4,5];
const arra2=ar1;
console.log("arra1==arra2 "+(arra1==arra2));
console.log("arra1===arra2 "+(arra1===arra2));
const objec1 ={
    name:'Gopika',
    age:19
}
const objec2=objec1;
console.log("objec1==objec2 "+ (objec1==objec2));
console.log("objec1===objec2 "+(objec1===objec2));


// for each loop

let arr=[1,2,3];
arr.forEach((element)=>console.log(2*element));
console.log("original array :"+arr);

// Below example ======> Error

// arr=arr.forEach((element)=>2*element);
// console.log(arr);

// we do not have any return value
// we cannot assign it to anything

arr.forEach((element)=>2*element);
console.log(arr);
// it iterates but doesn't store it anywhere
// it prints the unchanged original arr

var foreacharr=[];
foreacharr=arr.forEach((element)=>{
    return element*2
});

console.log("After for each loop "+foreacharr);
// OUTPUT --- forEach ----undefined
// forEach loop does not return anything

// we cannot assign it to something(some new array or original array)
// we can just traverse

arr=arr.forEach((element)=>{
    return element*2
});
console.log(`assigning to orginal arr with forEach loop using return statement ${arr}`);

// we cannot use return statement in forEach loop
// we cannot assign it to anything
// for both newarr (or) arr 
// output --------> undefined

// it cannot return to both
    //   new array
    //   original array 

// ============= MAP ==============
// to find odd or even
const oddeven=(arr)=>{
 arr=arr.map((element)=>{
     if(element%2==0){
         return "even";
     }
     else{
         return "odd";
     }
 })
 return arr;
}
console.log("odd even array using map "+oddeven([1,2,3,4,5,6,7,8,9,10]));
// const findoddeven=(arr)=>{
// newoearr=[];
// newoearr=arr.map((ele)=>(ele%2==0)?"even":"odd");
// return newoearr;
// }
// console.log(findoddeven(arr)); 



// array filter
console.log("ARRAY FILTER");
const filtereven=(arr) =>{
    const newarr=arr.filter((element)=>(element%2==0));
    return newarr;
}
const res1=filtereven([1,2,3,4,5,6,7]);
console.log(res1);

//as like map filter also returns new array but it can be
        // Either same size as the original array
        // Or diff size to the original array

// spread operator
// equals and double equals
console.log();
console.log("equals and double equals difference:");
const array1=[1,2,3,4,5];
console.log("original array:")
console.log(array1);
const array2=array1;
console.log("arr1===arr2 "+(array1===array2));
array2[1]=10;
console.log("arr2[1] after changed "+array2[1]);
console.log("arr1[1] after changing arr2 "+array1[1]);
const array3=[...array1];
console.log("arr1===arr3 "+(array1===array3));
array3[1]=10;
console.log("arr3[1] after changed "+array3[1]);
console.log("arr1[1] after changing arr3 "+array1[1]);


// Destructuring
console.log("Destructuring");
const arr1=[1,2,3,4,5];
console.log("printing all the array elements using destructuring");
const [aa,ab,ac,ad,ae]=arr1;
console.log(aa,ab,ac,ad,ae);
const [_,a3,b3]=arr1;
console.log("array elements by leaving first element");
console.log(a3);
console.log(b3)
// console.log(c3)
console.log("first two elements of array using destructuring");
const [a1,b1]=arr1;
console.log(a1);
console.log(b1);
console.log("first two elements and list of the rest using destructuring");
const [a2,b2,...rest]=arr1;
console.log(a2);
console.log(b2);
console.log(rest);
// In destructuring always the spread operator should be at the last
console.log();
console.log("SPREAD OPERATOR :")
var ar1=[1,2,3,4,5];
console.log("array 1 "+ar1);
// destructuring using spread operator
const [one,two,...restele]=ar1;
console.log(`one = ${one} , two = ${two} , restele = ${restele}`);
// const [...restelements,three]=ar1;   -----------> error                 
// A rest element must be last in a destructuring pattern.
console.log();

// object (same as dictionary in python)
var person={
    firstname:"tony",
    lastname:"stark"
}
person.age=23;
person["salary"]=50000;
console.log(person)

// objects
console.log("Objects :");
const student ={
    name:"ram",
    cls: "x",
    marks: {
        eng:90,
        maths:95,
        sci:75,
        subject:100
    }
}
const sub="maths"

console.log("student.marks.sub");
console.log(student.marks.sub);
console.log("student.marks[sub]");
console.log(student.marks[sub]);

// objects
const printmarks =(obj,sub)=>{
    return `${student.name}'s ${sub} mark is ${student.marks[sub]}`;
}

console.log(printmarks(student,"sci"));


const obj ={ 
    name:'nandha',
    age:22,
    height:5 
}
var{ name, age}=obj  
console.log(age) 
// passing default values
var{age,name:m,height=5.9}=obj  //m--->alias name for "name"
const n=name; 
console.log(n);
console.log(m);
console.log(height);


const obj12 ={
        name:'nandha',
        age:22,
        height:5
    }
    for(var key in obj12){ 
        console.log(key+":"+obj[key]);
    }
    console.log(obj12.address);
    const address1 = obj.address || {};
    console.log(address1.state);
    const address2 = obj.address || {};
    
    // to reduce all these efforts from line 36 we have "?."
    console.log(obj?.address?.state);
    console.log(obj?.address?.state || 'TN');
    // if left side value is undefined then it takes right side value
    const obj123=[{
        name:'nandha',
        age:22,
        height:5
    },
    {
        name:'ram',
        age:25,
        height:6.1
    }
    ]
    obj123[0].age=(obj123[0].age)+2;
    obj123[1].age=(obj123[1].age)+2;
    console.log("age ")
    for (var x in obj123) {
      obj123[x].age=obj123[x].age+2;
    }
    console.log(obj123);
    // age+2 using map
    const newobj=obj123.map((ele)=>{
    //  return {
    //      ...ele,age:ele.age+2
    //  }   
    return ele.age=(ele.age)+2
    })
    console.log("newobj using map ");
    console.log(obj123);
const newobject =obj123.map((ele)=>{
    const{name,age,height}=ele;
    return {
        name:name,
        age:age+2,
        height:height
    }
})
    
    // no duplicate keys 
    // each duplicate value will be updated to its older one
    const obj1={
        a:1,
        b:2,
        c:3,
        d:4,
        a:5
    }
    console.log(obj1);

// for in loop

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (let x in cars) {
  console.log(`${x}th element in cars list is ${cars[x]}`);
}

// all call back func gets 3 return values===> element,index,array

// add user,del user,get user,edit user
// edit user ==>(id,key,val)==>edit
// add another obj in user param=>(id,obj)----->c
// del user==>param(id)==>it should del
// get user==>param(id)==>should get the obj
const user1 =[{
id:1,
name:'ram',
age:27
},
{
id:2,
name:'nandha',
age:56
}
]

console.log();
console.log("original user obj");
console.log(user1);

const adduser=(adduserobj)=>{
user1.push(adduserobj); 
}
const adduserobj1={
    id:3,
    name:'guru',
    age:31 
}
const adduserobj2={
id:4,
name:'kishore',
age:21
}
adduser(adduserobj1);
adduser(adduserobj2)
console.log()
console.log("user obj after adding two new users ----> using adduser function");
console.log(user1); 
const getuser=(id)=>{
    for(var i in user1){
        if(user1[i].id==id){
            return user1[i];
        }
    }
}
const getuserobj=getuser(3);
console.log("user obj by using given id [3] ----> using getuser function");
console.log(getuserobj);
console.log(); 
const edituser =(id,name,age)=>{
    var ind=user1.findIndex((ele)=>ele.id==id);
    user1[ind].name=name;
    user1[ind].age=age;
// for(var j in user1){
//     if(user1[j].id==id){ 
//         user1[j].name=name; 
//         user1[j].age=age;
//     }
// }
return user1;
}
console.log("user obj after editing the user of given id [4] ----> using edituser function");
const edituserobj=edituser(4,'sam',23);
console.log(edituserobj);
console.log();

const deleteuser =(id)=>{
for(var a in user1){
    if(user1[a].id==id){
        user1.splice(a,1);
    }
}
return user1;
}
console.log("deleting an obj using deleteuser function");
deleteuser(4);
console.log(user1);

// input arr sortobj ---> sort it and return 
const sortobj =[ 
{sname: 'Ram',sage:54},
{sname:'barani',sage:10},
{sname:'kishore',sage:32},
{sname:'yadesh',sage:1}
]
const len =sortobj.length;
var iter1=0,iter2=0;
while(iter1<=len-1){
    iter2=iter1+1;
    while(iter2<=len-1){
        if(sortobj[iter1].sage>sortobj[iter2].sage){ 
        const t=sortobj[iter1];
        sortobj[iter1]=sortobj[iter2];
        sortobj[iter2]=t;   
        }       
    iter2+=1;
   }
iter1+=1;
}
console.log(sortobj);

// sorting
let arrobj = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

arrobj.sort((a, b) => {
    return a.age - b.age;
});

arrobj.forEach((e) => { 
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});    


// let {a='one',b=20}={a:'two',b:25}
// console.log(a)



// Doubts:

// const newar=[1,2,3,4,5];
// newar[0]=10;
// console.log(newar);

// function scope - local scope


