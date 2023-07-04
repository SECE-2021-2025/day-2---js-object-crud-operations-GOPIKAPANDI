// promise
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const condition = true;
        if(condition){
            resolve("Success!");
        }
        else{
            reject("Error: Something went wrong!");
        }
    },2000);  
});
console.log("start");
myPromise.then((result)=>{
    console.log(result);//success
}).catch((error)=>{
    console.log(error);//Error: Something went wrong!
});
console.log('End');

// start
// End
// Success! --->after 2 sec


// here myPromise1 is a variable
const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const condition = true;
        // const condition=Math.random()
        // Math.random
        if(condition){
            resolve("Success!");
        }
        else{
            reject("Error: Something went wrong!");
        }
    },2000);  
}); 
console.log("start");
myPromise1.then((result)=>{
    console.log(result);//success
}).catch((error)=>{
    console.log(error);//Error: Something went wrong!
}).finally(()=>{
console.log('End')
});

// here myPromise2 is a function 
// start
// Success!
// End

const myPromise2 =()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const condition = true;
        // const condition=Math.random 
        if(condition){
            resolve("Success!");
        }
        else{
            reject("Error: Something went wrong!");
        }
    },2000);  
}); 
console.log("start");
myPromise2().then((result)=>{
    console.log(result);//success
}).catch((error)=>{
    console.log(error);//Error: Something went wrong!
}).finally(()=>{
console.log('End')
});

// 'https://jsonplaceholder.typicode.com/todos/1'
// inside this API Ca
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1') //returns a promise (.then in 87th line accesses that promise)
        // .then((response)=>{
            // console.log(response)  
            //we get some response message but we'll not get actual json so convert it to json
            // resolve(response.json())
            // response.json() returns a promise ===> 
        // })
        .then((response)=>response.json())
        .then(json=>resolve(json))
        .catch(error=>reject(error))
    });
}

fetchData()
.then(data=>console.log(data))
.catch(error=>console.log(error))
 
// async and await
// await makes the execution to wait until the Promise is fulfilled
// after it is fulfilled (resolved) it assigns to the variable  
// else if the promise throws reject it is catched by using catch block
async function fetchData(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/todos/1') 
        const json = await response.json()
        return json 
    }catch(err){
        console.log(err)
    }
}
fetchData().then(res=>console.log(res));

// button click

// var but= document.getElementById("new");
// function myfunc(){
// window.open('https://jsonplaceholder.typicode.com/todos/1');  
// const url=fetch('https://jsonplaceholder.typicode.com/todos/1');
// document.getElementById("new").innerHTML= JSON.stringify(url.json());
// }

function fetchDataEvent(){ 
    const answer =document.getElementById('new');
    fetchData().then(data =>{
        var table=`<table border=1>`;
        var col='';
        for(var key in data){
            col+=`<td>${data[key]}</td>`
        }
        table+= `<tr>${col}</tr>`;
        table+= `</table>`;
        answer.innerHTML=table;
    });
}