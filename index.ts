require('dotenv').config(); // Make sure dotenv is installed and loaded

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error('Error: Bot token is missing.');
    process.exit(1); // Exit if no token is found
}

client.login(token)
    .then(() => console.log('Bot is online!'))
    .catch((error) => {
        console.error('Invalid Bot Token:', error.message);
        process.exit(1); // Exit if login fails
    });
