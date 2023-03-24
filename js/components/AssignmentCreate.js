export default {
    template: `
      <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" class="p-2" type="text" placeholder="New assignment...">
        <button class="bg-white p-2 border-l" type="submit">Add</button>
      </div>
      </form>
    `,

    methods: {
        add() {
            this.$parent.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.$parent.assignments.length + 1
            })
            this.newAssignment = '';
        }
    },
    data() {
        return {
            newAssignment: ''
        }
    }
}