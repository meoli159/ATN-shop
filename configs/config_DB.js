var DBconfigs = {
    localdb: {
        urldb : 'mongodb://localhost:27017/ATNshop',
        dbname : "ATNshop",
        dbusername : "",
        dbpassword : "",
    },

    clouddb: {
        urldb : "mongodb+srv://ATNshop:9855157a@cluster0.22ak3.mongodb.net/ATNshop",
        dbname : "ATNshop",
        dbusername : "",
        dbpassword : "",
    }

};

module.exports = DBconfigs.localdb;
module.exports = DBconfigs.clouddb;