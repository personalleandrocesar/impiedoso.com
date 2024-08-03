<script setup>

const icons = [
    {
        title: "Relógia Amazfit GTR",
        description: "Relogio para ver batimentos cardíacos, repleto de funcionalidade, barato e bem resistente.",
        path: "https://www.amazon.com.br/Amazfit-A2174-Blue-Smartwatches-GTR/dp/B0BWF535Y9/ref=pd_lpo_sccl_1/138-7608946-9258115?pd_rd_w=daP9T&content-id=amzn1.sym.dc8924a5-c486-49cf-abcc-8606cff695b5&pf_rd_p=dc8924a5-c486-49cf-abcc-8606cff695b5&pf_rd_r=TG2G8GRA0NE40355R8DN&pd_rd_wg=vQWrs&pd_rd_r=56409032-151f-4621-a087-faf24fde7ede&pd_rd_i=B0BWF535Y9&psc=1",
    },
]

</script>
<template>
    <div id="space">
        <div class="articles" v-for="itens in icons">
            <div class="linear">
                <NuxtLink :to="itens.path">
                    <p class="title">{{ itens.title }}</p>
                    <p class="description">{{ itens.description }}</p>
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<style scoped>
#space {
    margin: 3.5rem 0;
}
.articles {
    margin: 1rem 1.5rem ;
}
.icon {
    zoom: 2.8;
    transition: all .4s linear;
}
.linear {
    margin-bottom: 3rem;
}

.linear a{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
}
.linear:hover a .name{
    color: #34d399;
}
.linear:hover a .icon{
    color: #34d399;
}
.linear:hover a .underline{
    border-bottom: dashed 1px #718096;
}
.title {
    margin:0 0;
    transition: all .4s linear;
}
.description {
    margin: 0  ;
    color: var(--color-subtext);
    font-size: .8rem;
    transition: all .4s linear;
}
.underline{
    transition: all .4s linear;
    border-bottom: dashed 1px #ccc ;
    width: 100% ;
}

</style>