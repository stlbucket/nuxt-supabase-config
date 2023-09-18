// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ['@nuxtjs/supabase'],    // UNCOMMENT THIS LINE TO SEE IT ALL BOMB
  devtools: { enabled: true },
  runtimeConfig: {
    // this one is for postgraphile
    SUPABASE_URI: 'postgresql://postgres:postgres@localhost:54322/postgres',

    SUPABASE_SERVICE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU',
    SUPABASE_JWT_SECRET: 'super-secret-jwt-token-with-at-least-32-characters-long',    
    public: {      
      SUPABASE_URL: 'http://localhost:54321',
      SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',

      'graphql-client': {
        codegen: false
      },
      GQL_HOST: 'http://localhost:3025/api/graphql',
    }  
  }
})
