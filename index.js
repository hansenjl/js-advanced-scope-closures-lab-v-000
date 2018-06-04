function produceDrivingRange(num){
  return function (trip){
    if(num > trip ){
      return `${num-trip} blocks within range.`
    } else {
      return `${trip-num} blocks outside of range.`
    }
  }
}