<template>

  <h1>{{name}}</h1>
  <button type="submit" @click="activeClicks">change name</button>
  <br>
  <input type="text" ref="name">
  <button type="submit" @click="handleMe">click</button>
  <br>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="salen" @close="toggleModal" />
  </div>
  <br>

  <div v-if="showTwo">
    <modalTwo @hide="toggleSkill">
      <h1>Skill assesment</h1>
      <p>like to tell us about your skills</p>
    </modalTwo>
  </div>

  <br>
  <button @click="toggleSkill">show skill</button>
  <button @click="toggleModal">see modal</button>


  <div>
    <ul>
      <li v-for="book in books" @click="bookFav(book)">
        {{book.name}} by {{book.title}}
        <span v-if="book.isFav">favorite</span>
        </li>
    </ul>
  </div>
</template>

<script>
import Modal from './components/Modal'
import modalTwo from './components/ModalTwo.vue'

export default {
  name: 'App',
  components: {Modal,modalTwo},
  data() {
    return {
      name : 'Patafff',
      header: "Sign Up for the Giveaway",
      text: "grab your fideht jacket out there",
      showModal: false,
      showTwo: false,
      books: [
                {title: 'the boy', author: 'myself 1',isFav: true},
                {title: 'the lady',author: 'my friend', isFav: false},
                {title: 'the man', author: 'my lady', isFav: true},
            ],
    }
  },
  methods: {
    activeClicks(){
      this.name = 'active clicks'
      console.log(this.name)
    },
    handleMe(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleSkill(){
      this.showTwo = !this.showTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
