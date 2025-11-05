async function getUserdata(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        //checking if the response is oksy or not 

        if (!response.ok){
            throw new Error("response is not okay");
        }

        const data = await response.json();
        console.log("usesr data is received" , data);
        
    } catch (error) {
        console.error("error fetching data " , error.message);
        
    }finally{
        console.log("API call finished (success or fil)");
        
    }
    
}

getUserdata();