import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class File extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `http://localhost:3333/files/${this.path}`
        }
      }
    }, {
      sequelize,
      tableName: 'files',
    });
    return this;
  }
}

export default File;