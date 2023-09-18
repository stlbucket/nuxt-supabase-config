export default defineEventHandler((event) => {
  const rtc = useRuntimeConfig()
  console.log(rtc)
  const {
    supabase: { url, key, cookieName },
  } = useRuntimeConfig().public
  console.log(url)
  return {
    ...rtc,
    supabase: {
      url: url,
      key: key,
      cookieName: cookieName
    }
  }
})
