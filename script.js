 document.getElementById("ageForm").addEventListener("submit",function(event){
        event.preventDefault();

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
         
         checkAge(age,name)
         .then((message) =>{
            alert(message);
         })
         .catch((error)=>{
            alert(error);
         })


         function checkAge(age ,name){
            return new Promise((resolve,resject)=>{
                setTimeout(() => {
                    if(age>10){
                        resolve(`Welcome, ${name}. You can vote.`);
                    }else{
                        resject(`Oh sorry, ${name}. You aren't old enough.`);
                    }
                }, 1000);
            })
         }

    })

}