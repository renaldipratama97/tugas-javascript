// No 1
const cekKelas = (kelas) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            const dataKelas = ['Algoritma Pemrograman', 'Artificial Intelligence', 'OOP']
            let cek = dataKelas.find((item) => {
                return item === kelas
            })
            if (cek) {
                resolve(cek)
            }else{
                reject(new Error('Tidak ada kelas'))
            }
        }, 3000)
    })
}

cekKelas('OOP')
.then((cek)=>{
    console.log(cek)
})
.catch((err)=>{
    console.log(err.message)
})


// No 2
const cekNilai = (nilai) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            const dataNilai = ['90', '70', '75', '60', '80', '70', '85']
            let cek = dataNilai.filter((item) => {
                return item >= nilai
            })
            if (cek) {
                resolve(cek)
            }else{
                reject(new Error('Nilai Tidak Ada'))
            }
        }, 3000)
    })
}

cekNilai(75)
.then((cek)=>{
    console.log(cek)
})
.catch((err)=>{
    console.log(err.message)
})