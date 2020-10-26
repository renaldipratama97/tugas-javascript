let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
  console.log(data)
  console.log()
  console.log()
  
  
  // *** Spread Operator ***
  let newData = {
    ...data, name: "Renaldi Pratama Tumanggor", 
    email: "renaldipratama51@gmail.com", 
    hobby = ["Belajar", "Ngoding", "Sepakbola", "Futsal"]
  }
  console.log(data)
  console.log()
  console.log()
  
  
  // *** Destructuring ***
  const {street, city} = data.address
  console.log(street)
  console.log(city)
  console.log()