declare global {
  namespace NodeJS {
    interface ProcessEnv {
      botToken: string;
      developerId: string;
      guildsIds: string;
    }
  }
}

export {};
