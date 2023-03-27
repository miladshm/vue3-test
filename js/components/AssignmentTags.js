export default {
    template: `
      <div class="flex gap-2">
      <button type="button"
              :class="{
              'border rounded py-1 px-px text-xs' : true ,
              'text-blue-500 border-blue-500': currentTag === tag
        }"
              @click="$emit('update:currentTag',tag)"
              v-for="tag in allTags">
        {{ tag }}
      </button>
      </div>
    `,
    data() {
    },
    props: {
        tags: Array,
        currentTag: {
            type: String,
            default: 'all'
        },
    },
    computed: {
        allTags() {
            return ['all', ...new Set(this.tags)]
        }
    }
}