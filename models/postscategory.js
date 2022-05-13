module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('postsCategories', {}, { timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      onDelete: 'CASCADE',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      onDelete: 'CASCADE',
    });
  };
  return PostCategory;
};
