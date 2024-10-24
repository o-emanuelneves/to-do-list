var todos = [
];

var alert = false;

const todosApp = {
    data() {
        return {
            todos: window.todos,
            text: '',
            alert: window.alert
        }
    },
    methods: {
        add: function () {
            if(!this.text.length){
                this.alert = true;
                console.log('deveria mostrar a msg');
                return;
                
            }

            this.todos.push({
                text: this.text,
                done: false
            });
            this.text = "";
            this.alert = false;
        }
    },
};
Vue.createApp(todosApp).mount('#app');