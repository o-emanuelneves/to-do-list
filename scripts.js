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
                return;
            }

            this.todos.push({
                text: this.text,
                done: false
            });

            this.text = "";
            this.alert = false;

            localStorage.setItem("todos",  JSON.stringify(this.todos));
        },
    },
    created() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos;
    },
    updated(){
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
};

Vue.createApp(todosApp).mount('#app');

