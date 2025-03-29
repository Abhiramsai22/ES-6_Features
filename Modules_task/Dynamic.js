async function loadmodule() {
    try{
        const module = await import("./greetings.js");
        module.sayhello();
    }catch(err){
        console.error("error found out");
    }
    
}
loadmodule();