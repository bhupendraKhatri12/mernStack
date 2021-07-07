const axios = require('axios');


const  createtodo  =(todo)=>{

axios
  .post('http://localhost:4000/create')
 .then((res)=>{
   console.log(res);
   
 })
  .catch(error => {
    console.error(error)
  })
}

const gettodo= ()=>{
  axios
  .get('http://localhost:4000/')
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })


}




export default createtodo;
