<template>
  <h1>Job Details Page</h1>
  
    <div v-if="job">
        <h2>{{job.title}}</h2>
        <p>Title: {{job.title}} Identity: {{job.details}}</p>
    </div>
    <div v-else>
        <h2>Loading Job detail ...</h2>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            // id: this.$route.params.id
            job: null
        }

    },
        mounted(){
        fetch('http://localhost:3000/jobs/'+this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>