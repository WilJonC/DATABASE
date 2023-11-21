const {Router} = require('express');
const {listUsers, listUserByID, addUser, updateUser,updateUser1, deleteUser, singInUser} = require('../controllers/users');


const router = Router();

//http://localhost:3000/api/v1/users/
router.get('/', listUsers);
router.get('/:id', listUserByID);
router.post('/', singInUser);
router.put('/', addUser);
router.patch('/', updateUser);
router.patch('/', updateUser1);
router.delete('/', deleteUser);

module.exports = router;