import discord
import json

# Loading config.json for token and other settings #
with open('config.json', 'r') as botSetting:
    data=botSetting.read()
    data = botSetting.read()
obj = json.loads(data)
admin_role = str(obj['admin_role'])
mod_role = str(obj['mod_role'])

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return

        if message.content == 'ping':
            await message.channel.send('pong')

intents = discord.Intents.default()
intents.message_content = True
client = MyClient(intents=intents)
client.run(str(obj['token']))