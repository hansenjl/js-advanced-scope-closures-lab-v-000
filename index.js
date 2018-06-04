function produceDrivingRange(num){
  return function (trip){
    if(num < trip ){
      return true
    } else {
      return false 
    }
  }
}