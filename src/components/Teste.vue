<template>
  <header>
    <NavItem text="Home"/>
    <h1>Linguagens do {{ fullName }}</h1>
    <ul>
      <li>Home</li>
      <li>Sobre</li>
      <li>Contato</li>
    </ul>
    <div class="counter">
      <p>clicou {{ count }} vezes</p>
      <button @click="increment">Bota 1</button>
      <button @click="decrement">Tira 1</button>
      <button @click="reset">Zera</button>
    </div>
    <div class="todos" v-for="todo in doneTodos" :key="todo.text">
      {{ todo.text }}
    </div>
    <button @click="checkAllTodos">completar</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavItem from './navBar/NavItem.vue'
// import { NavIem } from @

interface Todo {
  text: string
  done: boolean
}

export default defineComponent({
    data() {
        return {
            name: "Henrique",
            lastName: "Morozini",
            count: 0,
            todos: [] as Todo[]
        };
    },
    created() {
        this.todos = [
            { text: "Estudar Typescript", done: true },
            { text: "Lavar os pratos", done: false },
            { text: "Aprender Nuxt.js", done: true }
        ];
    },
    computed: {
        fullName(): string {
            const fullName = `${this.name} ${this.lastName}`;
            return fullName;
        },
        doneTodos(): Todo[] {
            return this.todos.filter((todo) => todo.done == true);
        }
    },
    methods: {
        increment(): number {
            return this.count++;
        },
        decrement(): number {
            return this.count--;
        },
        reset(): number {
            return (this.count = 0);
        },
        checkAllTodos() {
            // this.todos = this.todos.map(({text}) => {
            //   return { text, done: true }
            // })
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log(`Valor Antigo: ${oldValue}`);
            console.log(`Valor Novo: ${newValue}`);
            if (newValue != oldValue) {
                console.log("Teve mudança");
            }
        }
    },
    components: { NavItem }
})
</script>

<style scoped></style>
