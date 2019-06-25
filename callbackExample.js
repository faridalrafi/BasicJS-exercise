
const UserProfile = function(id, callback) { // callback atau cb
  if (!id){
    return callback(new Error('Invalid userId')) // syntax to create error
  }
  let response = {
    success: true,
    id: id,
    message: 'User Found'
  }
  return callback(null, response)
}

UserProfile(null,function(err,result){
  if (!err){
    console.log(result)
  }
  else{
    console.log(err.message)
  }
})