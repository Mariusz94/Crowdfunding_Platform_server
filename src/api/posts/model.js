const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    whoPosts: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
    transform: (obj, ret) => {
        delete ret['__v']
    }
}
});


module.exports = {
    PostSchema,
    Post: Mongoose.model('Post', PostSchema)
};
