const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const jsonQuery = require('json-query')
const jsonfile = require('jsonfile')

const fs = require('fs');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/cus_food_rec/:date', function (req, res, err) {

    let rawdata = fs.readFileSync('cus_food_rec.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

app.get('/food_items', function (req, res) {
    let rawdata = fs.readFileSync('food_item.json');
    // let rawdata = fs.readFileSync('food_item_empty.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

app.get('/food_items/:search', function (req, res) {
    let rawdata = fs.readFileSync('food_item_empty.json');
    let json = JSON.parse(rawdata);

    var query = req.params.search
    console.log("query " + query);
    return res.json(json)
})


app.get('/food_history/:id', function (req, res) {
    let rawdata = fs.readFileSync('food_history.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

app.get('/food_history/:id/:search', function (req, res) {
    let rawdata = fs.readFileSync('food_history.json');
    let json = JSON.parse(rawdata);

    var query = req.params.search
    console.log("query " + query);
    return res.json(json)
})

app.get('/food_favorite/:id', function (req, res) {
    let rawdata = fs.readFileSync('food_item.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

app.get('/food_favorite/:id/:search', function (req, res) {
    let rawdata = fs.readFileSync('food_item_empty.json');
    let json = JSON.parse(rawdata);

    var query = req.params.search
    console.log("query " + query);
    return res.json(json)
})

app.get('/food_favorite/:id/:search', function (req, res) {
    let rawdata = fs.readFileSync('food_item_empty.json');
    let json = JSON.parse(rawdata);

    var query = req.params.search
    console.log("query " + query);
    return res.json(json)
})


var postCount = 0
app.post('/save_food/:id', function (req, res) {
    // let rawdata
    // if (postCount == 0) {
    let rawdata = fs.readFileSync('food_item_empty.json');
    // }else{
    let historyData = fs.readFileSync('food_history.json');
    // }
    var jsonHistory = JSON.parse(historyData)
    var json = JSON.parse(rawdata)
    // // arrayOfObjects.users.push({
    // //     name: "Mikhail",
    // //     age: 24
    // // })

    // console.log(arrayOfObjects)

    var obj = jsonHistory['content'].push(json)

    // animals.puush('chickens');

    // console.log("query " + obj);
    // jsonfile.writeFile('food_item_empty.json', obj, function (err) {
    //     console.error(err)
    // })
    return res.json(json)
})

app.get('/check_food_favorite/:id/:itemId', function (req, res) {
    console.log("itemId " + req.params.itemId);
    return res.send(false)
})

app.post('/add_food_favorite/:id', function (req, res) {
    return res.send(true)
})


app.delete('/delete_food_favorite/:id/:itemId', function (req, res) {
    console.log("itemId " + req.params.itemId);
    return res.send(false)
})

app.get('/eat_food_tody/:id/:meal', function (req, res) {

    console.log("query " + req.params.meal);
    
        let rawdata = fs.readFileSync('food_item.json');
        let json = JSON.parse(rawdata);

        return res.json(json)
})

app.post('/food_request/:userId', function (req, res) {

    console.log("query " + req.params.meal);
    if (req.params.meal == 1) {
        let rawdata = fs.readFileSync('food_item_empty.json');
        let json = JSON.parse(rawdata);

        return res.json(json)
    } else {
        let rawdata = fs.readFileSync('food_item.json');
        let json = JSON.parse(rawdata);

        return res.json(json)
    }
})

app.get('/eat_walk/:id', function (req, res) {
    let rawdata = fs.readFileSync('eat_walk.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

// ************* listener ****************//
app.listen(112, function (err) {
    if (err) {

    } else {
        console.log("server stared");
    }
})