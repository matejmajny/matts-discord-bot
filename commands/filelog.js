const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("filelog")
        .setDescription("Logs something to file.")
        .addStringOption((option) => 
        option.setName("text").setDescription("Enter message.").setRequired(true)
        ),
    
    async execute(interaction) {
        var text = await interaction.options.getString("text")
        var text = `[${interaction.user.tag}]: ${text}\n`
        fs.appendFileSync("/somewhere/botlogs.txt", text)

        interaction.reply(
            {
                embeds:[
                    {
                        color: 0xff4816,
                        title: `**Logged!**`,
                        description: `Your message has been logged.`,
                        footer: { text: "Logs are being cleared every 120 days." },
                        fields: [
                            {
                               name: "File URL:",
                               value: "https://files.matejmajny.gq/botlogs.txt"
                            },
                            {
                                name: "Message:",
                                value: text
                            }
                        ]
                    },
                ]
            }
        )
    },
};

