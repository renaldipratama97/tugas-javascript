const getMonth = (callback) => {
    setTimeout (() => {
        let error = false
        let month = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']
            if (!error){
                callback(null, month)
            }else{
                callback(new Error('Sorry, Data Not Found !!!'), [])
            }
    }, 4000)
}
const callback = (error, month) => {
    if (!error){
        month.map((item) => {
            console.log(item)
        })
    }else{
        console.log(error.message)
    }
}
getMonth(callback)