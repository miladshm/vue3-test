export default {
    template: `
      <button
          :class="{
        'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
        'bg-gray-200 hover:bg-gray-400': type === 'muted',
        'bg-blue-200 hover:bg-blue-400': type === 'primary',
        'bg-purple-200 hover:bg-purple-400': type === 'secondary',
        'is-loading': processing === true
    }"
          :disabled="processing">
      <slot/>
      </button>`,
    data() {
        return {
            processing: true
        }
    },
    props: {
        type: {
            type: String,
            default: "primary"
        }
    }
}
