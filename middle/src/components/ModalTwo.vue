<template>
    <div @click.self="hideSkill" class="backdrop">
        <div class="modal">
            <h1>this is modal two</h1>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        hideSkill(){
            this.$emit('hide')
        }
    }
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.modal h1{
    border: none;
    padding: 0;
    color: #03cfb4;
}
.modal.sale{
    background: crimson;
}
.modal.sale h1{
    color: white;
}
</style>