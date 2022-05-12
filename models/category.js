const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
    },
    {
      underscored: false,
      timestamps: false,
    },
  );

  return Category;
};

module.exports = CategoryModel;
