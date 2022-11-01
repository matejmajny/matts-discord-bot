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
                    description: "Current version: **v1.2\n **",
                    thumbnail: {
                        url: client.user.displayAvatarURL,
                      },
                      fields: [
                        {
                            name: "Basic info",
                            value: "Version: v1.1\nDate of release: 1/11/2022\nState: in development",
                        },
                        {
                            name: "What is new?",
                            value: "-added some new info to about page\n-added: meme\n-fixed some things in punish command",
                        },
                        {
                            name: "What got removed?",
                            value: "-dates command (useless)",
                        }
                      ]
                },
            ]
        })
    },
}
