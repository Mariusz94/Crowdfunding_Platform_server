const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const CommentSchema = new Schema({
    whoComment: {
        type: String,
        required: true
    },
    whatPostComment: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
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
    CommentSchema,
    Comment: Mongoose.model('Comment', CommentSchema)
};
