const {Comment} = require('./model');

const createComment = async ({body}, res, next) => {
    try {
        const comment = await Comment.create(body);
        return res.status(201).json(comment);
    } catch (e) {
        return next(e);
    }
};

const getComments = async ({query}, res, next) => {

    try {
        const comments = await Comment.find();
        if (!comments) return res.status(404).json({error:"not found"}).end;

        return res.status(200).json(comments);
    } catch (e) {
        next(e);
    }
};

const destroyComment = async ({params}, res, next) => {
    const idCommentPar = params.idComment;

    try {
        const comment = await Comment.findById(idCommentPar);
        await Comment.findByIdAndDelete(comment.id);

        return res.status(200).json(comment);
    } catch (e) {
        next(e);
    }

    return res.status(404);
};


module.exports = {
    createComment, getComments, destroyComment
};
