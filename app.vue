<template>
  <div>
    <pre>{{ JSON.stringify(useRuntimeConfig(),null,2) }}</pre>
  </div>
  <div>
    <pre>{{ JSON.stringify(rtc,null,2) }}</pre>
  </div>
</template>

<script lang="ts" setup>
  const rtc = ref()

  const loadData = async () => {
    const { data, error } = await useFetch('/api/rtc')

    if (error.value) {
      alert(error.value.message)
    }

    rtc.value = data.value
  }
  loadData()
</script>
