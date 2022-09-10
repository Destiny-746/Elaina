import { constants } from "./index";
import { ElainaClient } from "./structures/ElainaClient";

import { 
  Message,
  CommandInteraction,
  GuildMember,
  ApplicationCommandDataResolvable,
  ClientEvents,
  WebhookClientDataURL,
  WebhookClientDataIdWithToken,
  WebhookMessageOptions,
  Snowflake
} from "discord.js";

interface Init<Key extends keyof ClientEvents> {
  event: Key;
  run: (...args: ClientEvents[Key]) => any;
}

type Commons = {
  category: string;
  init?: Init<keyof ClientEvents>;
}

export type ElainaPrefixCommand = {
  name: string;
  aliases: string[];
  description: string;
  run: (
    client: ElainaClient,
    message: Message,
    args: string[]
  ) => any;
} & Commons;

export interface ExtendedCommandInteraction extends CommandInteraction {
  member: GuildMember;
}

export type ElainaSlashCommand = {
  run: (
    client: ElainaClient,
    interaction: ExtendedCommandInteraction
  ) => any;
} & Commons & ApplicationCommandDataResolvable;

export type BotPrefix = typeof constants.Prefixes[number];

export interface IElainaErrorMessageOptions {
  ephemeral?: boolean;
  mention?: boolean;
}

export type ElainaWebhookData = {
  url?: string;
  token?: string;
  id?: Snowflake;
  channelId?: Snowflake;
}

export interface IRedditPostData {
  title: string;
  post_url: string;
}

export interface ISubredditData {
  name: string;
  icon_url: string;
}

interface IThread {
  kind: "t3";
  data: {
    title: string;
    over_18: boolean;
    url: string;
    post_hint: string;
    is_video: boolean;
    is_gallery: boolean;
  }
}

export interface IRedditListing {
  kind: "Listing";
  data: {
    children: IThread[]
  }
}

export interface ISubredditAbout {
  kind: "t5",
  data: {
    display_name_prefixed: string;
    community_icon: string;
  }
}
