exports.up = function (db, callback) {
    db.createTable('users', {
      id: { type: 'serial', primaryKey: true },
      username: 'string',
      password: 'string'
    }, callback);
  };
  
  exports.down = function (db, callback) {
    db.dropTable('users', callback);
  };