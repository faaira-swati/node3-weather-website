console.log('Client side javascript')

// fetch('http://puzzle.mead.io/puzzle',{    
//     method: 'GET',      
//     mode: 'no-cors',       
//   })
//   .then(res => res.json())
//   .then(json => {
//     console.log(json[0]);
// })
// fetch('http://puzzle.mead.io/puzzle',{    
//       method: 'GET',      
//       mode: 'no-cors',
//       'content-type': 'application/json'    
//     })
//     .then(res => res.json())
//     .then(text => console.log(text));

const func = async() =>{
  var requestOptions = {
    method: 'GET',
     mode: 'no-cors',
   };
   await fetch('http://puzzle.mead.io/puzzle', requestOptions)
 .then(data => console.log(data));
}
func()