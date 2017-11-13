var mongoose = require('mongoose');
const bcrypt  = require('bcrypt-nodejs');
mongoose.Promise = global.Promise;


//Schema
const Schema   = mongoose.Schema;


const userSchema = new Schema({
    username: { type: String , required: true , lowercase: true} ,
    email: { type: String , required: true , lowercase: true , unique: true } ,
    password: { type: String , required: true  },
});

//Schema middleware to encrypt password
    userSchema.pre('save',  function (next) {
        if (!this.isModified('password'))
            return next();

            //apply encryption
            bcrypt.hash(this.password, null ,null , (err, hash) => {
                 if(err) return next(err);

                // Store hash in your password DB.
                this.password = hash;
                next(); //Exit middleware
            });
    });


    // Compare password Method and return true or false
    userSchema.methods.comparePassword = function(password){
        return bcrypt.compareSync(password , this.password);
    }

module.exports = mongoose.model('User' , userSchema);