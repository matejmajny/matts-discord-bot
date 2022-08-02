const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Tells you how use the bot."),

    async execute(interaction) {
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**How use the bot?**",
                    description: `Write "/" to the chat, click on the bot on left side and see the commands.`,
                },
            ]
        })
    },
}
