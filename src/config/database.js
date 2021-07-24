module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'sistema',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}
/*
module.exports = {
  dialect: 'postgres',
  host: 'kashin.db.elephantsql.com',
  username: 'evrfobhv',
  password: 'aJm2uyog_rnCUzn8H1rPytsGUW4VbJ-_',
  database: 'evrfobhv',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}*/