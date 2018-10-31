const countries = require('../resources/countriesV2.json');

const resolvers = {
  Query: {
    countries: () => countries
  }
};

export default resolvers;
