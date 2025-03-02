const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY  // Make sure to set this in Vercel environment variables
});
const openai = new OpenAIApi(configuration);

app.post("/api/getMatchScore", async (req, res) => {
    try {
        const { jobDescription, resume } = req.body;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Compare the following job description and resume. Assign a match percentage from 0 to 100.

            Job Description: ${jobDescription}
            Resume: ${resume}

            Return a number only.`,
            max_tokens: 10
        });

        res.json({ matchScore: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
