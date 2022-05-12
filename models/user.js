const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { underscored: true, timestamps: false },
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'BlogPosts',
      foreignKey: 'userId',
    });
  };

  return User;
};

module.exports = UserModel;
