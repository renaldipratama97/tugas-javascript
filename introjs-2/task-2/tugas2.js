function print(data){
    console.log(data)
}

const name = ['abigail', 'alexandra', 'alison', 'amanda', 'angela', 'bella', 'carol', 'caroline', 'carolyn', 'deirdre', 'diana', 'elizabeth', 'ella', 'faith', 'olivia', 'penelope']


const searchName = (inisial, batas, callback) => {
    const filterName = name.filter (item => {
        return item.indexOf(inisial) > -1;
    })
    console.log(filterName)
    const newArray = filterName.slice(0, batas)
    callback(newArray)
}
searchName("an", 3, print)