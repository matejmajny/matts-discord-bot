// functions i guess?

const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// Slash commans setup

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

// (definetly not copied from https://github.com/discordjs/guide/blob/main/code-samples/creating-your-bot/command-handling/index.js)

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			embeds: [
                {
                    color: 0xff0000,
                    title: "**Error occured!**",
                    description: "There was an error while executing command",
                    ephermal: true,
                },
            ],
		});
	}
});


// Events

client.on("ready", () => {
    console.log("Bot has succesfully booted!\n")
});

client.on("ready", () => {
    client.user.setPresence({ activities: [{ name: 'with errors and JS' }], status: 'online' });
	console.log("Bot RPC was set succesfully.")
})

client.on("interactionCreate", interaction => {
	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
})

client.login(token)
