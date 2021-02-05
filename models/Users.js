const {Schema,model} = require('mongoose');

const UsersSchema = new Schema({
    username:{
        type: String, required:true,
    },
    password:{type: Number, required:true,}
});

module.exports = model('Users',UsersSchema);