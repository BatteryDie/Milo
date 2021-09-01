const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login(token);
client.once('ready', () => {
	console.log('Ready!');
});


// Loading all command from commands folder
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
	console.log('Loading command: '+command.data.name);
}

// Listening and executing command from user
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Oh no! There was an error while executing this command!', ephemeral: true });
	}
});