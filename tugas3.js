const printSegitiga = 5
if (typeof printSegitiga === 'number'){
  for(let i = printSegitiga ; i >= 1; i--){
    let print = ''
    for (let j = 1; j <= i; j++){
      print += j
    }
    console.log(print)
  }
}else{
  console.log("Harus Number")
}