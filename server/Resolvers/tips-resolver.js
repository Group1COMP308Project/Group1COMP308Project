const { Tip } = require('../Models/nurse-models-server');

const resolvers = {
  Query: {
    getDailyTips: async () => await Tip.find(),
  },
  Mutation: {
    createTip: async (_, { tips }) => {
      const tips = new Tip({
        tips,
        created: new Date().toTimeString()
      });
      await tips.save();
      return tips;
    },
  },
};

module.exports = resolvers;
