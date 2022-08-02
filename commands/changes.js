const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("changes")
        .setDescription("Shows the information about latest bot update!"),
    async execute(interaction) {
        const { client } = interaction;
        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "**Changes**",
                    description: "Current version: **v1.1\n **",
                    thumbnail: {
                        url: client.user.displayAvatarURL,
                      },
                      fields: [
                        {
                            name: "Basic info",
                            value: "Version: v1.1\nDate of release: 02/8/2022\nState: in development",
                        },
                        {
                            name: "What is new?",
                            value: "-reworked deploying script\n-added: help, yoda, dates and test",
                        },
                        {
                            name: "What got removed?",
                            value: "-nothing",
                        },
                        {
                            name: "**Disclaimer!**",
                            value: "Bot still in very early development stages"
                        }
                      ]
                },
            ]
        })
    },
}