//Define a function with param has some default value and display the output in both by passing param and without passing param 

function demo2 (name = "guest"){
        console.log(`hello ${name} welcome to js question 15`);
        
} 

demo2("siddhesh");

const juc = (name = 'guest') => (console.log(`hello ${name}`)
)

juc("siddhesh")