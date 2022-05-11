const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
    },
  );

  return Category;
};

module.exports = CategoryModel;
