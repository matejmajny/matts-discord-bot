// code copied from puppy command and just edited a bit
const { SlashCommandBuilder } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("random")
        .setDescription("Replies with random post from r/shitposting!"),
    
    async execute(interaction) {
        post = await randomPuppy("shitposting")
        
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**r/shitposting post**",
                    description: "Discord embed have problem loading .mp4, if media isnt opening just open in browser (post can sometimes repeat)",
                    image: {
                        url: post,
                    },
                },
            ],
        });
    },
};