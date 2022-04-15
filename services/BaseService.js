/* Define the base service with common service methods */
class BaseService {
  constructor(model) {
    this.model = model;
  }

  async get() {
    return await this.model.findAll();
  }

  async create(entity) {
    return await this.model.create(entity);
  }
}

module.exports = BaseService