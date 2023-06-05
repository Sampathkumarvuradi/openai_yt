const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: ProcessingInstruction.env.OpenAIApi,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;
