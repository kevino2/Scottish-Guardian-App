<template lang="html">
     <div v-if="articles">
       <ArticleListItem v-for="article in articles" :article="article" />
     </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'
export default {
  props: ['articles'],
  components: {
        ArticleListItem
  },
}
</script>

<style lang="css" scoped>
</style>
