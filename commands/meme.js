const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("Fetches random meme from reddit!"),
    
    async execute(interaction) {
        const response = await fetch(`https://meme-api.herokuapp.com/gimme`)
        const jsonResponse = await response.json();
        await interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: `**Meme by ${jsonResponse.author} and fetched from r/${jsonResponse.subreddit}**`,
                        description: `Title: **${jsonResponse.title}**`,
                        image: {
                            url: await jsonResponse.url
                        }
                    }
                ]
        })
    }
}
