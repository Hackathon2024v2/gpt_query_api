import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const activityPromt = async (animal: string, activity: string) => {
    try {
        const promt = await openai.chat.completions.create({
            model: "gpt-4o-mini",  // Ensure you're using a valid model name
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Hi chat! i want you to play with me a role play game, you are my coach and im an animal. I can be these specific animals:   'bear', 'monkey','lion','wolf','whale','cat'. You can have 3 moods neutral, happy, and angry. Happy when i do my training and angry when i dont. Neutral its like get started and i dont provide you nothing. cuistomise it to sound like the animal that i chose and make a short response: maximum 1 phrase with 2-3 emojis and without the title just your response.",
                },
                {
                    role: "user",
                    content: `I'm ${animal} and i did ${activity}`,
                },
            ],
        });

        // Extracting the generated text from the response
        const response = promt.choices[0].message.content;  // Access the generated message

        return response;  // Return the generated haiku text
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Sorry, something went wrong.";
    }
};

const foodPromt = async (animal: string, height: string, proteins: string, lipids: string, carbs: string) => {
    try {
        const promt = await openai.chat.completions.create({
            model: "gpt-4o-mini",  // Ensure you're using a valid model name
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: `Daly a adult human needs this nutrients:
Proteins: 10–35% of total calories from protein. 50–175 g per day, depending on needs like activity level or muscle maintenance. 1 gram of protein provides 4 calories.
Lipids (Fats): 20–35% of total calories, with saturated fats <10% and trans-fats <1% (preferably 0%). 44–78 g per day, prioritizing unsaturated fats. 1 gram of fat provides 9 calories.
Carbohydrates: 45–65% of total calories from carbs. 225–325 g per day, emphasizing complex carbs like whole grains, legumes, fruits, and vegetables. Free sugars should contribute <10% (ideally <5%), equating to ≤50 g/day. 1 gram of carbohydrate provides 4 calories.
if i provide nothing: you says i’m hungry like a ${animal}
if it’s not enough tell me “i need …” the thing im missing like a ${animal}
if it’s not enough tell me that youre full like a  ${animal} and dont tell me the number, do some ${animal} noises
i’m ${height}, i ate ${proteins} of proteins, ${lipids}of lipids and around ${carbs}of carbs and max
make in 1 phrase but add the numbers. Tell me what i ate only when i'm missing
`,
                },

            ],
        });

        // Extracting the generated text from the response
        const response = promt.choices[0].message.content;  // Access the generated message

        return response;  // Return the generated haiku text
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Sorry, something went wrong.";
    }
};

const advisePromt = async (subject: string, question : string) => {
     try {
        const promt = await openai.chat.completions.create({
            model: "gpt-4o-mini",  // Ensure you're using a valid model name
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: `I have a question about ${subject}. ${question}. Make it short and precise( like 4-5 phrases)`,
                },

            ],
        });

        // Extracting the generated text from the response
        const response = promt.choices[0].message.content;  // Access the generated message

        return response;  // Return the generated haiku text
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Sorry, something went wrong.";
    }
}
export { activityPromt, foodPromt, advisePromt }
