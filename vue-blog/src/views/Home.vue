<template>
  <div>home</div>
  <h3>Refs</h3>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="posts.length">
  <PostList :posts="posts" />
  </div>
  <div v-else>
    Loading posts ......
  </div>
  <!-- <p>{{name}} </p>
  <input type="text" v-model="search"> -->
  <!-- <p> {{ninjaOne.name}} - {{ninjaOne.age}} </p>
  <button @click="updateNinjaOne">Update age</button> -->

  <!-- <h3>reative</h3>
   <p> {{ninjaTwo.name}} - {{ninjaTwo.age}} </p>
   <button @click="updateNinjaTwo">Update age</button> -->


  <!-- <p ref="p">name is {{name}} and age is {{age}} and agee {{agee}}</p>
  <button @click="handleClick">click</button>
  <button @click="agee++">+</button>
  <input type="text" v-model="name"> -->

</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composible/getpost'


export default {
  name: 'Home',
  components:{PostList},
  setup(){
    const {posts, error, load } = getPosts()
    
    load()
    return {posts, error}
    // const search = ref('')
    // const name = computed(() => {
    //   return 'Home'
    // })
    // watch(search, () => {
    //   console.log('watch fired');
    // })
    // watchEffect(() => {
    //   console.log('watch effect ran',search.value)
    // }) 
    // return {name, search}
    // const ninjaOne = ref({name: 'magni', age: 20 })
    // const ninjaTwo = reactive({name: 'luigi', age: 30 })

    // const updateNinjaOne= () => {
    //   ninjaOne.value.age = 40
    // }
    // const updateNinjaTwo= () => {
    //   ninjaTwo.age = 45
    }
    // const name = ref("Mario")
    // const agee = ref(30)
    // let age = 20
    // const p = ref(null)
    // const handleClick = () =>{
    //   name.value = "luigi"
      // console.log(p, p.value)
      // p.value.classList.add('test')
    // }

  //   return {ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo}
  // }
}
</script>
