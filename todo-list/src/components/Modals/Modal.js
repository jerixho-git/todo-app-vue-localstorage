export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
        isEditMode: {
            type: Boolean,
            default: false,
        },
        initialValue: {
            type: String,
            default: '',
        },
        descriptionValue: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            taskTitle: this.initialValue,
            taskDescription: this.descriptionValue,
        };
    },
    methods: {
        handleConfirm() {
            this.$emit('confirm', {
                title: this.taskTitle,
                description: this.taskDescription,
            });
        },
    },
    watch: {
        initialValue(newVal) {
            this.taskTitle = newVal;
        },
        descriptionValue(newVal) {
            this.taskDescription = newVal;
        },
    },
};