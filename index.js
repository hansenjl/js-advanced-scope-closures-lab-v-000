function produceDrivingRange(num){
  return function (trip, num){
    if(num > trip ){
      return `blocks within range by ${num-trip} .`
    } else {
      return `${trip-num} blocks out of range.`
    }
  }
}