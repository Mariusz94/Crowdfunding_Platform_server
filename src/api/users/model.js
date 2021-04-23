const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },/*,
    author: {
        type: [Schema.ObjectId],            // jedna ksiazka moze miec wielu autorow
        ref: 'Author',
        required: true
    },
    */
}, {
    timestamps: true,
    toJSON: {
    transform: (obj, ret) => {
        delete ret['__v']           // Przy konwersji do JSONa nie chcemy numeru wersji dokumentu (to sprawa wewnetrzna)
    }
}
});


module.exports = {
    UserSchema,
    User: Mongoose.model('User', UserSchema)
};
