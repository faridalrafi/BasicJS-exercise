// Promise
const UserProfile =  function(id){ // parameter di fungsi ini

  // statement
  return(new Promise(function(resolve, reject){
    if(!id){
      reject(new Error('Invalid userId'))
    }
    let response = {
      success: true,
      id: id,
      message: 'User Found'
    }
    resolve(response)
  }))
}

UserProfile(1).then((result) => { // then saat sukses (resolve)
  console.log(result)
}).catch((err) => { // catch saat gagal (reject)
  console.log(err.message)
});