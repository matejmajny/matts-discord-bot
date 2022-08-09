const { SlashCommandBuilder } = require("discord.js");
const { getImage } = require('random-reddit');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("puppy")
        .setDescription("Replies with random image of puppy!"),
    
    async execute(interaction) {
        puppyImg = await getImage("PuppySmiles")
        
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Puppy image**",
                    description: "Image from r/PuppySmiles.",
                    image: {
                        url: puppyImg,
                    },
                },
            ],
        });
    },
};