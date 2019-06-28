module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: '<Add your database username>',
  password: '<Add your database password>',
  database: '<Add your database name>',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
