declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string
    NEXTAUTH_URL: string
    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string
  }
}