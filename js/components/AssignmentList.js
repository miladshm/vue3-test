import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    template: `
      <section v-show="assignments.length">
      <h2 class="font-bold mb-2 p-1">{{ title }} ({{ assignments.length }})</h2>

      <assignment-tags
          :tags="this.assignments.map(a => a.tag)"
          v-model:currentTag="currentTag"
      />
      <ul class="divide-y divide-gray-600 border border-gray-600 mt-5">
        <assignment v-for="assignment in filtered" :key="assignment.id" :assignment="assignment"></assignment>
      </ul>
      </section>
    `,

    props: {
        assignments: Array, title: String
    }, components: {
        'assignment': Assignment,
        AssignmentTags
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filtered() {
            return this.currentTag !== 'all' ? this.assignments.filter(a => a.tag === this.currentTag) : this.assignments;
        }
    },
}