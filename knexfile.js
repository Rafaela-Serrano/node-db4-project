const sharedConfig = {
    client:'sqlite3',
    useNullAsDefault: true,
    migrations: { directory:'./data/migrations'},
    pool: { 
        afterCreate:(conn, done) => conn.run('PRAGMA foreign_keys = ON', done)
    },
    seed:{ 
        directory:'./data/seeds'
    },
}

module.exports = {
    development:{
        ...sharedConfig,
        connection:{
            filename:'./data/cook_book.db3',
        }
    },
    testing:{
        ...sharedConfig,
        connection:{
            directory:'./data/cook_book.test.db3'
        }

    },
    
}