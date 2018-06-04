function produceDrivingRange(num){
  console.log(num)
  return function (start, end){
    let s = parseInt(start)
    let e = parseInt(end)
    let distance = s - e

    if(num > distance ){
      return `within range by ${num-distance} .`
    } else {
      return `${distance-num} blocks out of range.`
    }
  }
}