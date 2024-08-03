<script setup>


    const icons = [

        {
            name: "Deep acupuntura",
        path: "https://deepacupuntura.com",
        description: "Clínica de Terapias Chinesa",
        icon: "streamline:yin-yang-symbol-solid",
    },
        ]

</script>
<template>

    <div id="space">
        <div class="projects" v-for="itens in icons">
            <div class="linear">
                <NuxtLink :to="itens.path">
                    <div>
                        <p class="name">{{ itens.name }}</p>
                        <p class="description">{{ itens.description }}</p>
                    </div>
                    <h5 class="underline"></h5>
                    <Icon :name="itens.icon" />
                </NuxtLink>
            </div>
        </div>

    </div>

</template>

<style scoped>
#space {
    margin: 3.5rem 0;
}

.projects {
    margin: 1rem 1.5rem;
}

.icon {
    zoom: 2.8;
    transition: all .4s linear;
}

.linear a {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}

.linear:hover a .name {
    color: #34d399;
}

.linear:hover a .icon {
    color: #34d399;
}

.linear:hover a .underline {
    border-bottom: dashed 1px #718096;
}

.name {
    margin: 0;
    transition: all .4s linear;
}

.description {
    margin: 0;
    color: var(--color-subtext);
    font-size: .8rem;
    transition: all .4s linear;
    width: 150px;
}

.underline {
    transition: all .4s linear;
    border-bottom: dashed 1px #ccc;
    width: 100%;
}
</style>