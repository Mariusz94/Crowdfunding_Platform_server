const {User} = require('./model');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const create = async ({body}, res, next) => {
    console.log(body);
    try {
        bcrypt.hash(body.password, saltRounds, (err, hash) => {
            body.password = hash;
            console.log(body.password)
        });

        const user = await User.create(body);
        return res.status(201).json(user);
    } catch (e) {
        return next(e);
    }
};

const getUser = async ({params}, res, next) => {

    const emailPar = params.email;
    const passwordPar = params.password;

    try {
        const user = await User.findOne({email: emailPar});
        if (!user || user.password !== passwordPar) return res.status(404).json({error:"not found"}).end
        if (user.password===passwordPar ){
            console.log("password are equals");
        }else{
            console.log("password not equals")

        }
        let userToSend = {
            _id: user['_id'],

            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
        return res.status(200).json(userToSend);
    } catch (e) {
        next(e);
    }                           // Zwrocone wyniki (uwzgledniajac limit)
};
/*
const show = ({ params }, res, next) => {
    const id = parseInt(params.id);

};


const update = ({ body , params }, res, next) => {
    const id = parseInt(params.id);
    const {title, author} = body

};
*/

const destroy = async ({ params }, res, next) => {
    const emailPar = params.email;
    const passwordPar = params.password;

    try {
        const user = await User.findOne({email: emailPar});

        if (user.password===passwordPar ){
            await User.findByIdAndDelete(user.id);
            console.log("password are equals");
            return res.status(200).json(user);
        }else{
            console.log("password not equals")
            return res.status(404);
        }
    } catch (e) {
        next(e);
    }

};



module.exports = {
    create, getUser, destroy//, show, update, destroy
};
