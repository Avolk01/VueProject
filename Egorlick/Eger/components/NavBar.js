app.component('nav-bar', {
    template:
    /* HTML */
    `
    <div class="nav-bar">
        <button v-if="this.authorized" class="nav-button" > Личный кабинет </button>
        <button v-else class="nav-button" @click="this.registration()"> Войти </button>
    </div>
    `,
    data() {
        return {
            authorized: false,
        }
    },
    methods: {
        registration() {
            this.authorized = true;
            this.$emit('authorization');           
        },
    }
})