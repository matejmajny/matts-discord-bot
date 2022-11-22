const { SlashCommandBuilder } = require("discord.js");
const cooldown = new Set();
const cooldownTime = 600000; 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("consolelog")
        .setDescription("Just a test command.")
        .addStringOption((option) => option.setName("text").setRequired(true).setDescription("Logs something to console.")),

    async execute(interaction) {
        var message = interaction.options.getString("text")
        if (cooldown.has(interaction.user.id)) {
            interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: "**Wait! 🛑**",
                        description: `Wait 10 minutes so you can again spam my console`,
                        ephermal: true,
                    },
                ]
            })      
        } 
        else {
            interaction.reply({
                embeds: [
                    {
                        color: 0xff4816,
                        title: "**Logged! 🟢**",
                        description: `Your message is in my logs now.`,
                    },
                ]
            })
            var loguser = `[${interaction.user.tag}](Log Command:) `
            console.log(loguser + message) 
        }
        
            //now, set cooldown
           cooldown.add(interaction.user.id);
                setTimeout(() => {
                  cooldown.delete(interaction.user.id);
                }, cooldownTime);
        }
}