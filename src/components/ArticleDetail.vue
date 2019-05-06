<template lang="html">
  <div v-if="article">
    <h2>{{article.webTitle}}</h2>
     <p>URL: {{article.webUrl}}</p>
     <p>Category: {{article.sectionName}}</p>
  </div>
</template>

<script>
export default {
    name: 'article-detail',
    props: ['article'],
    }
</script>

<style lang="css" scoped>
</style>
