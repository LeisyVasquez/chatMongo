const {Router} = require('express');
const router = Router();
const user = require('../models/Users');

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    let result;
    user.findOne({username: username, password: password}, (err, resultado) => {
        if(err){
            console.log('¡Apareció un error!');
            console.log(err.message)
        }else{
            result = resultado;

            console.log(result);
        }
    });

    if(result === null){
        const newUser = new user({username, password});

        newUser.save()
        res.json({'message':'Usuario nuevo guardado!'})
    }else{
        res.json({'message':'Usuario validado!'})
    }

    
});


module.exports = router;