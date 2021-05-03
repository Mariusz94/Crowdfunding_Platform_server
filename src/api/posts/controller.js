const {Post} = require('./model');

const saltRounds = 10;

const createPost = async ({body}, res, next) => {
    try {
        const post = await Post.create(body);
        return res.status(201).json(post);
    } catch (e) {
        return next(e);
    }
};

const getPosts = async ({query}, res, next) => {
    try {
        const posts = await Post.find();
        if (!posts) return res.status(404).json({error:"not found"}).end;

        return res.status(200).json(posts);
    } catch (e) {
        next(e);
    }
};

const getPost = async ({params}, res, next) => {
    const idPar = params.postId;
    try {
        const posts = await Post.findById(idPar);
        if (!posts) return res.status(404).json({error:"not found"}).end;

        return res.status(200).json(posts);
    } catch (e) {
        next(e);
    }
};


const destroyPost = async ({ params }, res, next) => {
    const idPar = params.postId;
    console.log(idPar)

    try {
        const post = await Post.findById(idPar);
            await Post.findByIdAndDelete(post.id);

            return res.status(200).json(post);
    } catch (e) {
        next(e);
    }
    return res.status(404);
};



module.exports = {
    createPost, getPosts, getPost, destroyPost
};
