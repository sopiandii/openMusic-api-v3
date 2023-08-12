exports.up = (pgm) => {
  pgm.createTable('activity_logs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    activity: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    time: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('activity_logs', 'fk_activity_logs.playlist_id_playlists_id', 'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.alterTable('activity_logs');
};
