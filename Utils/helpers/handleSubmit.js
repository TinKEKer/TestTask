
export const handleSubmit = (data,callback,logIn)=>{
       const error = data.email==='Admin'&&(data.password==='12345'||data.password===12345)?false:true
      callback(error)
        if(!error){
            logIn()
        }

 }
