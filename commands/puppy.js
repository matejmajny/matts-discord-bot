const { SlashCommandBuilder } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("puppy")
        .setDescription("Replies with random image of puppy!"),
    
    async execute(interaction) {
        puppyImg = await randomPuppy()
        
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Puppy/Dog image**",
                    description: "Generated using random-puppy",
                    image: {
                        url: puppyImg,
                    },
                },
            ],
        });
    },
};