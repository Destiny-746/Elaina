import "dotenv/config";
import { ElainaClient } from "./structures/ElainaClient";
import { Intents } from "discord.js";

const client = new ElainaClient({
  allowedMentions: {
    parse: ["users", "roles"]
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES
  ]
});

export default client;
export * as constants from "./constants";
export * as typings from "./typings";
export { Event } from "./structures/Event";
export { PrefixCommand, SlashCommand } from "./structures/Commands";

client.start();