import express from 'express';

import {
    dirname
} from 'path';
import {
    fileURLToPath
} from 'url';
const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', {array});
})

app.get('/goals', (req, res) => {
    res.render('goals.ejs');
})

const array = [];
app.post('/Today', (req, res) => {
    // var checkState = stateCheck(req.body.checkState);
    var todo = req.body.todo;

// function stateCheck(item){
//     if(item == 'on'){
//         return true
//     } else {
//         return false
//     }
// }

    // array.push([checkState, todo])
    array.unshift([todo]);
    console.log(array);
    // console.log(typeof array);
    res.render('index.ejs', {array})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});