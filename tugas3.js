const printSegitiga = 5
if (typeof printSegitiga === 'number'){
  for(let i = 1 ; i <= printSegitiga ; i++){
    for (let j = i; j <= printSegitiga; j++){
      console.log(j)
    }
    console.log("")
  }
}else{
  console.log("Harus Number")
}