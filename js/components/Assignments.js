import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    template: `
      <section class="space-y-6">
      <assignment-list title="In progress" :assignments="inProgress"></assignment-list>
      <assignment-list title="Completed" :assignments="completed"></assignment-list>

      <assignment-create></assignment-create>
      </section>`,
    data() {
        return {
            assignments: [
                {name: "Finish project", complete: false, id: 1},
                {name: "Read chapter 4", complete: false, id: 2},
                {name: "Turn in homework", complete: false, id: 3},
            ],
        }
    },
    components: {
        "assignment-list": AssignmentList,
        "assignment-create": AssignmentCreate
    },
    computed: {
        completed() {
            return this.assignments.filter(a => a.complete)
        },
        inProgress() {
            return this.assignments.filter(a => !a.complete)
        },
    }
}