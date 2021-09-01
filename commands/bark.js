const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const barkList = require('./bark.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bark')
		.setDescription('Tell Milo to bark!'),
        async execute(interaction) {
            const values = Object.values(barkList)
            const pickBark = values[parseInt(Math.random() * values.length)]
            const embed = new MessageEmbed()
            .setTitle('Woof!')
            .setImage(pickBark)
            await interaction.reply({ embeds: [embed] });
        },
    };