const mtk = 90
const bahasaIndonesia = 100
const bahasaInggris = 50
const ipa = 20
let grade = ""

let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
console.log(rataRata)
if (rataRata >= 90) grade = "A"
else if (rataRata >= 80 ) grade = "B"
else if (rataRata >= 70 ) grade = "C"
else if (rataRata >= 60 ) grade = "D"
else if (rataRata >= 0) grade = "E"
console.log(grade)