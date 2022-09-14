
const names = require('./db.json')
let globalId = 11

module.exports = {
    getnames: (req, res) => res.status(200).send(names),
    deletename: (req, res) => {
        let index = names.findIndex(elem => elem.id === +req.params.id)
        names.splice(index, 1)
        res.status(200).send(names)
    },
    createname: (req, res) => {
        let { title, rating,} = req.body
        let newname = {
            id: globalId,
            title, 
            rating
        }
        names.push(newname)
        res.status(200).send(names)
        globalId++
    },
    updatename: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = names.findIndex(elem => +elem.id === +id)

        if (names[index].rating === 10 && type === 'plus') {
            res.status(400).send('cannot go above 10')
        } else if (names[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            names[index].rating++
            res.status(200).send(names)
        } else if (type === 'minus') {
            names[index].rating--
            res.status(200).send(names)
        } else {
            res.sendStatus(400)
        }
    }
}