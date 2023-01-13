const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ytthumb")
        .setDescription("Pulls thumbnail from YouTube video.")
        .addStringOption((option) => option.setName("link").setDescription("Link for YouTube video").setRequired(true)),

    async execute(interaction) {
        msg = interaction.options.getString("link")
        link = msg.split("v=")[1]
        imageHQ = "https://img.youtube.com/vi/" + link + "/mqdefault.jpg"
        imageOG = "https://img.youtube.com/vi/" + link + "/default.jpg"

        await interaction.reply({
            embeds: [
                {
                    color: 0xff4816,
                    title: "YT Thumbnail fetch",
                    description: `Results for: ${msg}`,
                    fields: [
                        {
                            name: "HQ image link:",
                            value: imageHQ
                        },
                        {
                            name: "Normal quality link:",
                            value: imageOG,
                        }
                    ],
                    image: { url:imageHQ }
                },
            ]
        })
    },
}