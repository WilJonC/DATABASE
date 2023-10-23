const {Router} = require('express');
const {listUsers, listUserByID, addUser, updateUser, deleteUser} = require('../controllers/users');

const router = Router();

//http://localhost:3000/api/v1/users/
router.get('/', listUsers);
router.get('/:id', listUserByID);
//router.post('/', listUsers);
router.put('/', addUser);
router.patch('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;