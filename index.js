function produceDrivingRange(num){
  console.log(num)
  return function (trip, num){
    console.log(num - th)
    console.log(trip)
    if(num > trip ){
      return `within range by ${num-trip} .`
    } else {
      return `${trip-num} blocks out of range.`
    }
  }
}