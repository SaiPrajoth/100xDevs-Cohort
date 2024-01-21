const {mongoose,Schema} = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            unique:true,
        },
        password:{
            type:String,
            unique:true
        }
    }
)

const UserModel = new mongoose.model('User',userSchema);

module.exports = UserModel;