function starting() {
    setTimeout(()=> {
        console.log("hello siddhesh"); 
    } ,Math.floor(Math.random()*10)*1000);

}
starting(12);


//callback hell

// function a (username , cb) {
//     setTimeout(()=>{
//         console.log(`profile fetched of ${username}`);
//         cb({_id:5637,username , age:24 , email : "siddhesh.amb@gmail.com"});
//     },2000);
// }

// function everyposts (id , cb){
//     setTimeout(()=>{
//         cb({_id : id , posts : ["hey" , "hello" , "yes"]})
//     },3000)
// }

// function savedPosts(id , cb) {
//     console.log("fetching saved post.....");
//     setTimeout(() =>{
//         cb({_id: id , saved:[1, 57.75,765,765,432,4325,432]})
//     })
// }

// a("siddhesh" , function(profileData){
//     console.log(profileData);
    
//     everyposts(profileData.id , function(posts){
//         console.log(posts);
//     savedPosts(profileData._id , function(saved){
//             console.log(saved);
            
//         } )
//     });

// })

//never build like this

let pr = new Promise(function (res,rej) {
    setTimeout(()=> {
        let rn = Math.floor(Math.random()* 10);
        if(rn > 5 ) 
            res("resolved with " + rn);
        else rej("rejected with " + rn);
    },1000)  
})

// pr.then(function(val){
//     console.log(val);
// })
// .catch(function (val) {
//     console.log(val); 
// })



//async 

async function asFun() {
    try {
        let val =  await pr;
        console.log(val);
        
    } catch (error) {
        console.log(error);
        
    }
   
}


asFun();