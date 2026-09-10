const express = require('express')
const app = express()

app.use(express.json())

let items = []
let id_counter = 1

app.post('/items', (req, res) => {
    const {name, price} = req.body
    if(!name || !price){
        return res.status(400).json({
            error: "Name and price are required..."
        })
    }
    const newItem = {id: id_counter++, name, price}
    items.push(newItem)
    res.status(201).json({
        message: "Successfully added the items...",
        item: newItem
    })
})

app.get('/items', (req, res) => {
    res.json(items)
})

app.put('/items/:id', (req, res) => {
    const {id} = req.params
    const {name, price} = req.body
    const item = items.find(i => i.id == parseInt(id))
    if(!item){
        return res.status(404).json({
            error: 'Item not found...'
        })
    }
    if(!name || !price){
        return res.status(400).json({
            error: 'both name and price are required'
        })
    }
    item.name = name
    item.price = price
    res.status(200).json({
        message: "Successfully updated the item...",
        item: item
    })
})

app.delete('/items/:id', (req, res) => {
    const {id} = req.params
    const index = items.findIndex(i => i.id == parseInt(id))
    if(index === -1){
        return res.status(400).json({
            error: 'Item not found...'
        })
    }
    items.splice(index, 1)
    res.status(200).json({
        message: `item ${id} deleted successfully...`
        
    })
})
app.listen(3001, () => {
    console.log('Server running at http://127.0.0.1:3001/items')
})
