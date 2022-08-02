const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Just a test command."),

    async execute(interaction) {
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Bot is succesfully running! 🟢**",
                    description: `Test succesfull! For ping check /ping`,
                },
            ]
        })
    },
}