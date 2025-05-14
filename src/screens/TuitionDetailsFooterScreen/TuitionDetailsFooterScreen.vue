<script setup lang="ts">



</script>

<template>
    <div class="tuition-details-footer_container">
        <div class="tuition-details-footer_container__content">
            <p>Nếu có thắc mắc vui lòng liên hệ qua : <em>0666666666</em> - <em>uit@gmail.com</em>.</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.tuition-details-footer_container {
    flex: 1;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        background-color: #ffffff;
        width: 90%;
        border-radius: 0.5rem;
        // border: 1px solid rgb(167, 199, 255);
        color: rgb(88, 139, 227);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 5rem;
        text-align: center;


        & em {
            font-weight: 450;
        }


    }


}
</style>
