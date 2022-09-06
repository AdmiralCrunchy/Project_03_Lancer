

const permCheck = () => {
  if (typeof window !== 'undefined') {
    if(localStorage.getItem("type" === "developer")){
    fetch("http://lancerbackend.herokuapp.com/developers/verify", {
      method: 'GET', 
      mode: 'cors',
      contentType: 'application/json',
      headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Access-Control-Allow-Origin": "*"
    }
    })
     .then(res => res.json())
     .then((data) =>{
      console.log(data)
      console.log(data.dev)
  
      })}

    if(localStorage.getItem("type" === "client")){
    fetch("http://lancerbackend.herokuapp.com/clients/verify", {
      method: 'GET',
      mode: 'cors',
      contentType: 'application/json',
      headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Access-Control-Allow-Origin": "*"
    }
    })
     .then(res => res.json())
     .then((data) =>{
      console.log(data)
      console.log(data.dev)
      if(!data.dev){
        if (typeof window !== 'undefined') {
          localStorage.clear();
          window.location.href= "/"
        }
      }
  
      })}
  
     }
    }

     export { permCheck }