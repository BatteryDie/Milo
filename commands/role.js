const { SlashCommandBuilder, memberNicknameMention } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Select a role')
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('Select a role')
                .setRequired(true)),
        async execute(interaction) {
            const role = interaction.options.getRole('role');
            const member = interaction.member();
            //member.roles.add(role);
            await interaction.reply(member+' got '+role);
        },
    };