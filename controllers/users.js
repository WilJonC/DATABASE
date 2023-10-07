const {request, response} = require('express');

const listUsers = (req = request, res = response) => {
    res.json({msg:"HOLA A TODOS, SOY WILLIAM ... W"})
}

module.exports = {listUsers};