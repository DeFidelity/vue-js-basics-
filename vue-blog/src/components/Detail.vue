<template>
  <h1>Details</h1>
    <div v-if="error"> 
        <h3>{{error}}</h3>
    </div>

  <div class="poss" v-if="post">
      <h3>{{post.title}} </h3>
      <p class="pre">{{post.body}} </p>
      <span class="tags" v-for="tag in post.tags" :key="tag">
         <p>#{{tag}}</p> 
      </span>
  </div>
  <div v-else> 
      <h4>Loading post.....</h4>
  </div>
</template>

<script>
import getPost from '../composible/getNewPost'
export default {
    props: ['id'],
    setup(props){
        const {post, error, load} = getPost(props.id)
        
        load()

        return {post, error}
    }
}
</script>

<style>
.post{
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre{
    white-space: pre-wrap;
}
.tags{
    background: #ff00dd;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    
    
}
.tags p{
    
}
</style>