function produceDrivingRange(num){
  console.log(num)
  return function (trip, num){
    let n = parseInt(num)
    let t = parseInt(trip)
    console.log(n)
    console.log(t)
    if(n > t ){
      return `within range by ${n-t} .`
    } else {
      return `${t-n} blocks out of range.`
    }
  }
}