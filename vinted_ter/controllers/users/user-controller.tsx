import express from "express";
var router = express.Router();
import searchUsers from "../../services/users/user-service";

router.get('/', async function (req, res, next) {
    console.log('controller users');
    // res.send('controller users')
    // next();

    const users = await searchUsers();
    // console.log('oui oui', users)
    res.send(users);
});

export default router;
