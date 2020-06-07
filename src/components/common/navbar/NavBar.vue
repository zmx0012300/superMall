<template>
    <div class="navbar">
        <div class="left">
            <slot name="nav-left"></slot>
        </div>
        <div class="center">
            <slot name="nav-center"></slot>
        </div >
        <div class="right">
            <slot name="nav-right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navbar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
    }
    .left, .right {
        width: 60px;
        /* background-color: blue; */
    }
    .center {
        flex: 1;
        /* background-color: red; */
    }
</style>