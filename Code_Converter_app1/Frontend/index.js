const convertButton=document.getElementById("convert");
const debugButton=document.getElementById("debug");
const qualityButton=document.getElementById("quality");
const selectButton=document.getElementById("language")

//.......... input and output box................

const inputBox=document.getElementById("input-box");
const outputBox=document.getElementById("output-box");

//...................................................


//........ convert feature...........................

convertButton.addEventListener("click",async()=>{
    try {
        const obj={
            code:inputBox.value,
            service:"convert",
            language:selectButton.value
        }
    
        const response=await fetch(`https://code-converter-with-chartgpt.onrender.com/api/process`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        });
    
        const res= await response.json();
        
        outputBox.innerHTML="";
        outputBox.innerHTML=res.result.content;

        console.log(res)
    } catch (error) {
        console.log(error.message)
    }

  

})
//..........................................


//...............debug feature................
debugButton.addEventListener("click",async()=>{
    try {
        const obj={
            code:inputBox.value,
            service:"debug"
        }
    
        const response=await fetch(`https://code-converter-with-chartgpt.onrender.com/api/process`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        });
    
        const res= await response.json();
        
        outputBox.innerHTML="";
        outputBox.innerHTML=res.result.content;

        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
})

//.............................................

//................... quality check............
qualityButton.addEventListener("click",async()=>{
    try {
        const obj={
            code:inputBox.value,
            service:"quality"
        }
    
        const response=await fetch(`https://code-converter-with-chartgpt.onrender.com/api/process`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        });
    
        const res= await response.json();
        
        outputBox.innerHTML="";
        outputBox.innerHTML=res.result.content;

        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
})
//.............................................
