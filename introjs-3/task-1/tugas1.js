const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


// // Menggunakan then catch
// cekHariKerja('minggu')
// .then((cek)=>{
//     console.log(cek)
// })
// .catch((err)=>{
//     console.log(err.message)
// })

//Menggunakan try catch
const resultData = async() =>{
    try {
        const result = await cekHariKerja('senin')
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
resultData()