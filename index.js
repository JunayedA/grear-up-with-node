const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res,)=>{
    res.send('WOW, i am exited to learn hfsfsdfsdfello i am learning node')
});

const users= [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
]

app.get('/users',(req, res) =>{
    const search = req.query.search;
    if(search){
        const searchresult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchresult)
    }
    else{
        res.send(users)
    }
    res.send(users)
});

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
    console.log(req.params.id)
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('yammy yammy mangggo')
})

app.listen(port, () =>{
    console.log('listening port', port)
})