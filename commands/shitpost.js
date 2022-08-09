// code copied from puppy command and just edited a bit
const { SlashCommandBuilder } = require("discord.js");
const { getImage } = require('random-reddit');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("random")
        .setDescription("Replies with random post from r/shitposting!"),
    
    async execute(interaction) {
        image = await getImage('shitposting')
        
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**r/shitposting post**",
                    description: "Powered by random-reddit",
                    image: {
                        url: image,
                    },
                },
            ],
        });
    },
};