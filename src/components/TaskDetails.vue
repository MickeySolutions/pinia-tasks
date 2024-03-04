<template>
    <div class="task">
        <p>{{task.title}}</p>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script>
export default {
    props:['task'],
    setup () {


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>