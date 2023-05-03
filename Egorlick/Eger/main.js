const app = Vue.createApp({
    data() {
        return {
            authorized: false,
            contentBlock: {},
            taskBlock: {},
        }
    },    
    methods: {
        auth() {
            this.authorized = true;
        },
        getNewContent(url) {
            axios.get(url).then(res => {
                this.contentBlock.content = res.data.content;
                this.contentBlock.title = res.data.title;
                this.taskBlock.description = res.data.description;
                this.taskBlock.task = res.data.task;
                this.taskBlock.answers = res.data.answers;
            });
        }
    },
    mounted() {       
        axios.get('http://localhost:5000/').then(res => {
            this.contentBlock.content = res.data.content;
            this.contentBlock.title = res.data.title;
            this.taskBlock.description = res.data.description;
            this.taskBlock.task = res.data.task;
            this.taskBlock.answers = res.data.answers;
        });
    },
})
