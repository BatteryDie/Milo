const { SlashCommandBuilder, memberNicknameMention } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Select a role')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('Select a member')
                .setRequired(true))
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('Select a role')
                .setRequired(true)),
        async execute(interaction) {
            // sr = select role
            // sm = select member
            const sr = interaction.options.getRole('role');
            const sm = interaction.options.getMember('target');
            // Milo will remove the role if member already have the role
            // Otherwise, Milo will add the role
            if (sm.roles.cache.find(role => role.name === sr.name)) {
                sm.roles.remove(sr);
                await interaction.reply('I removed '+sr.name+' from `'+sm+'`');
            }
            else {            
                sm.roles.add(sr);
            await interaction.reply('I added '+sr.name+' to `'+sm+'`');
        }
        },
    };