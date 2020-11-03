const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if ((typeof nilaiAwal === 'number') && (typeof nilaiAkhir === 'number')){
        if (nilaiAwal > nilaiAkhir){
            console.log("Nilai awal harus lebih kecil dari nilai akhir")
        }else{
            if (dataArray.length >= 5){
                const filteredArray = dataArray.filter(item => item >= nilaiAwal && item <= nilaiAkhir)
                console.log(filteredArray)
            } else {
                console.log("Data array harus diatas 5")
            }
        }
    } else {
        console.log("Tipe Data Harus Number")
    }
}

seleksiNilai(9, 20, [3,4,9,15,20,22,25])