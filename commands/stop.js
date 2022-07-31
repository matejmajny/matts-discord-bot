const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Stops the bot"),
    
    async execute(interaction) {
        if (interaction.user.id !== "712032740043784334")
            return interaction.reply({
                embeds: [
                    {
                        color: 0xff0000,
                        title: "Failed!",
                        description: "You are not the bot owner",
                    },
                ],
            });

        await interaction.reply({
            embeds: [
                {
                    color: 0x66ff00,
                    title: "Succesful!",
                    description: "Bot is now stopping",
                },
            ],             
        });
        console.log("Bot has been stopped from app");
        await interaction.client.destroy();
        return process.exit(0);
    },
};