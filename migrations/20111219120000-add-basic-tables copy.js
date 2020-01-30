exports.up = function (db, callback) {
    db.createTable('events', {
      id: { type: 'serial', primaryKey: true },
      name: 'string',
      category: 'string',
      place: 'string',
      address: 'string',
      starts_at: 'date',
      ends_at: 'date',
      type: 'string',
      user_id: 'int'
    }, callback);
  };
  
  exports.down = function (db, callback) {
    db.dropTable('events', callback);
  };