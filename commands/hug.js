const { SlashCommandBuilder, memberNicknameMention } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const slapList = require('./hug.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug a member!')
        .addUserOption(option =>
            option.setName('member')
                .setDescription('Target a member')
                .setRequired(true)),
        async execute(interaction) {
            const user = interaction.options.getUser('member');
            const values = Object.values(slapList)
            const pickslap = values[parseInt(Math.random() * values.length)]
            const embed = new MessageEmbed()
            .setTitle(interaction.user.username+' hugged '+user.username)
            .setImage(pickslap)
            await interaction.reply({ embeds: [embed] });
        },
    };