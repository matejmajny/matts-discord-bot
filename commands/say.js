const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Repeats what you tell to bot (useless)")
        .addStringOption((option) => 
        option.setName("text").setDescription("Message to bot to say.").setRequired(true)
        ),
    
    async execute(interaction) {
        interaction.reply({ content: interaction.options.getString("text") })
    },
};