const Content = require("../models/contentModel");
const genAi = require("@google/generative-ai");

const contentController = {
  generateContent: async (req, res) => {
    try {
      const { prompt, type } = req.body;
      const model = genAi.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedText = response.text();

      const content = await Content.create({
        userId: req.user._id,
        title: prompt.substring(0, 100),
        content: generatedText,
        prompt,
        type,
      });
      res.json({ success: true, content });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  getUserContent: async (req, res) => {
    try {
      const contents = await Content.find({ userId: req.user._id }).sort({
        createdAt: -1,
      });
      res.json({ success: true, contents });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = contentController;
