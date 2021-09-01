const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roletest')
		.setDescription('test the role buttons!'),
	async execute(interaction) {
        if (!interaction.isCommand()) return;

        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('Techie')
					.setLabel('Techie')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('Builder')
					.setLabel('Builder')
					.setStyle('PRIMARY'),
			);
            const row2 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('Minecrafter')
					.setLabel('Minecrafter')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('Eco')
					.setLabel('Eco')
					.setStyle('PRIMARY'),
			);
            const row3 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('Intel')
					.setLabel('Intel')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('AMD')
					.setLabel('AMD')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('Nvidia')
					.setLabel('Nvidia')
					.setStyle('PRIMARY'),
                new MessageButton()
					.setCustomId('ARM')
					.setLabel('ARM')
					.setStyle('PRIMARY'),
			);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

		await interaction.reply({ content: interaction.user.username+', Please select any role(s)!', ephemeral: true, embeds: [embed], components: [row, row2, row3] });
	},
};