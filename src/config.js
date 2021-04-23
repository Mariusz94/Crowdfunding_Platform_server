const config = {
    env: process.env.NODE_ENV || 'development',
    port: 9000,
    ip: '127.0.0.1',
    apiRoot: '/api',
    mongo: {
        host: 'mongodb+srv://mariusz:temppassword@userscluster.j5p9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        ,                     // mongodb://{login}:{haslo}@{host}/{nazwa-bazy}
        //atlasian mongodb+srv://mariusz:temppassword@userscluster.j5p9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        options: {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            debug: true
        }
    }
};

module.exports = config;