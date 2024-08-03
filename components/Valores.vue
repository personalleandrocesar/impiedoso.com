<script setup>
const route = useRoute()
const data = await useFetch(`/api/valores/${route.params.id}`)

const Data = data.data.value
useHead({
    titleTemplate: `${Data.nomeCompleto} | Personal Leandro Cesar`,
})

const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
}

const tag = useCookie('tag')
tag.value = tag.value

const buttonPlusOne = ref(Data.serviceOne)
const buttonPlusTwo = ref(Data.serviceTwo)
const buttonPlusTree = ref(false)
const plusOneYes = ref(Data.serviceOne)
const plusTwoYes = ref(Data.serviceTwo)
const plusTreeYes = ref(false)

const linkOne = ref(true)
const linkTwo = ref(Data.serviceOneItens)
const linkTree = ref(false)
const clickProp = ref(true)
const clickPropOneOne = ref(false)
const clickPropOneTwo = ref(Data.serviceOneItens)
const clickPropTwoOne = ref(false)

function plusButtonOne () {
    linkOne.value = true,
    linkTwo.value = false,
    linkTree.value = false,
    buttonPlusOne.value = true,
    plusOneYes.value = true,
    buttonPlusTwo.value = false,
    plusTwoYes.value = false,
    buttonPlusTree.value = false,
    plusTreeYes.value = false
}
function plusButtonTwo () {
    linkOne.value = false,
    linkTwo.value = true,
    linkTree.value = false,
    buttonPlusOne.value = false,
    plusOneYes.value = false,
    buttonPlusTwo.value = true,
    plusTwoYes.value = true,
    buttonPlusTree.value = false,
    plusTreeYes.value = false
}
function plusButtonTree () {
    linkOne.value = false,
    linkTwo.value = false,
    linkTree.value = true,
    buttonPlusOne.value = false,
    plusOneYes.value = false,
    buttonPlusTwo.value = false,
    plusTwoYes.value = false,
    buttonPlusTree.value = true,
    plusTreeYes.value = true
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function openPropOne() {
    scrollToTop()
    clickProp.value = !clickProp.value
    clickPropOneOne.value = true
    clickPropOneTwo.value = false
    clickPropTwoOne.value = false
}
function openPropTwo() {
    scrollToTop()
    linkOne.value = false
    linkTwo.value = true
    linkTree.value = false
    clickProp.value = !clickProp.value
    clickPropOneOne.value = false
    clickPropOneTwo.value = true
    clickPropTwoOne.value = false
}
function openPropTree() {
    scrollToTop()
    linkOne.value = false
    linkTwo.value = false
    linkTree.value = true
    clickProp.value = !clickProp.value
    clickPropOneOne.value = false
    clickPropOneTwo.value = false
    clickPropTwoOne.value = true
}



</script>
<template>
    <div v-if="clickProp">

        <header>
            <div class="head-logo" id="sobre">
                <div class='logo' >
                    <img @click="openPhoto()" src="~/assets/logo.png" alt="Foto de perfil do Personal Leandro Cesar.">
            </div>
        </div>
        <div v-if="photoOpen" class="nav-bar">
            <div class='logo-nav-bar'>
                <img @click="openPhoto" src="~/assets/logo.png" alt="Foto de perfil do Personal Leandro Cesar.">
            </div>
        </div>
        <div class="head-name">
            <div class="name">
                Olá, <br> {{ Data.nomeCompleto }}
            </div>
            <a class="whats" :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, tenho dúvidas com relação à proposta de Serviços que você enviou...`">
                <Icon name="ic:outline-whatsapp"/>
            </a>
        </div>
        <div class="head-name-two">
            <div>
                Proposta de serviços
            </div>

        </div>
        
    </header>
    <main>
        <div class="link">
            <div v-if="Data.serviceOne"  >
                <NuxtLink v-if="buttonPlusOne"  @click="plusButtonOne()" :class="{ aActiveOne: linkOne }"  > {{ Data.serviceOne }}</NuxtLink>
                <NuxtLink v-else @click="plusButtonOne()"  :class="{ aActiveOne: linkOne }"  > {{ Data.serviceOne }} </NuxtLink>
            </div>
            <div v-if="Data.serviceTwo">
                <NuxtLink v-if="buttonPlusTwo" @click="plusButtonTwo()" :class="{ aActiveTwo: linkTwo }" > {{ Data.serviceTwo }} </NuxtLink>
                    <NuxtLink v-else @click="plusButtonTwo()" :class="{ aActiveTwo: linkTwo }"> {{ Data.serviceTwo }}  </NuxtLink>
                </div>
                <div v-if="Data.serviceTree">
                    <NuxtLink v-if="buttonPlusTree" @click="plusButtonTree()" :class="{ aActiveTree: linkTree }"> {{ Data.serviceTree }} </NuxtLink>
                    <NuxtLink v-else @click="plusButtonTree()" :class="{ aActiveTree: linkTree }"> {{ Data.serviceTree }}  </NuxtLink>
                </div>
            </div>
            <div>
            </div>
            <!-- Consultoria com Avaliação -->
            <div v-if="plusOneYes"  id="servicos">
                <div class="servicos-header">
                    <h1 v-if="Data.serviceOneItens < 2">
                        <Icon name="iconamoon:ticket-fill"/> {{ Data.serviceOneItens }} Proposta:            
                    </h1>
                    <h1 v-else>
                        <Icon name="iconamoon:ticket-fill"/> {{ Data.serviceOneItens }} Propostas:            
                    </h1>
                    </div>
                    <NuxtLink @click="openPropOne()" v-if="Data.serviceOneOnePrice" class="services">
                        <h1> {{ Data.serviceOneOne}} </h1>
                        <h2> {{ Data.serviceOneOneSub}} </h2>
                        <br>
                        <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceOneOnePack }}</h3>
                        <br> 
                        <h3>R$ {{ Data.serviceOneOnePrice }} à vista <br>(pix | débito | dinheiro)</h3>
                        <br>
                        <br>
                        <h4 v-for="(item, index) in Data.serviceOneOneItens">
                            <Icon name="material-symbols-light:arrow-right"/> 
                            {{ item }}
                        </h4>
                        <br>
                        <br>
                        <div class="services-button">
                            Detalhes
                        </div>
                    </NuxtLink>
                    <!-- Cnsultoria sem Avaliação -->
                    <NuxtLink @click="openPropTwo()" v-if="Data.serviceOneTwoPrice" class="services">
                        <h1>{{ Data.serviceOneTwo }}</h1>
                        <h2>{{ Data.serviceOneTwoSub }}</h2>
                        <br>
                        <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceOneOnePack }}</h3>
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice }} à vista <br>(pix | débito | dinheiro)</h3>
                        <br>
                        <br>
                        <h4 v-for="(item, index) in Data.serviceOneTwoItens">
                            <Icon name="material-symbols-light:arrow-right"/> 
                            {{ item }}
                        </h4>
                        <br>
                        <br>
                        <div class="services-button">
                    Detalhes
                </div>
            </NuxtLink>
        </div>
        <!-- Personal Trainer - dias/mês e valores -->
        <div v-else-if="plusTwoYes" id="servicos">
            <div class="servicos-header">
                    <h1 v-if="Data.serviceTwoItens < 2">
                        <Icon name="iconamoon:ticket-fill"/> {{ Data.serviceTwoItens }} Proposta:            
                    </h1>
                    <h1 v-else>
                        <Icon name="iconamoon:ticket-fill"/> {{ Data.serviceTwoItens }} Propostas:            
                    </h1>
                    </div>
                    <NuxtLink @click="openPropTree()" v-if="Data.serviceTwoOnePrice" class="services">
                        <h1> {{ Data.serviceTwoOne }} </h1>
                    <h2> {{ Data.serviceTwoOneSub }} </h2>
                    <br>
                    <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceTwoOnePack }}</h3>
                    <br> 
                    <h3>R$ {{ Data.serviceTwoOnePrice }} (base)</h3> 
                    <br>
                    <h3 v-for="(item, index) in Data.serviceTwoOneItensCarac">
                            <Icon name="material-symbols-light:arrow-right"/> 
                            {{ item }}
                        </h3>
                    <br>
                    <br>
                    <h3>
                        <Icon name="solar:tag-price-bold"/> 
                        Descontos:
                    </h3>
                    <h3 v-for="(item, index) in Data.serviceTwoOneItens">
                        <Icon name="material-symbols-light:arrow-right"/> 
                        {{ item }}
                    </h3>
                    <br>
                    <br>
                    <div class="services-button">
                        Detalhes
                    </div>
                </NuxtLink>
                <NuxtLink  v-if="Data.serviceTwoTwoPrice" class="services">
                    <h1>{{ Data.serviceTwoTwo }}</h1>
                    <h2>{{ Data.serviceTwoTwoSub }}</h2>
                    <br>
                    <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceTwoOnePack }}</h3>
                    <br> 
                    <h3>R$ {{ Data.serviceTwoTwoPrice }} à vista <br>(pix | débito | dinheiro)</h3>
                    <br>
                    <br>
                    <h3 v-for="(item, index) in Data.serviceTwoTwoItens">
                        <Icon name="material-symbols-light:arrow-right"/> 
                        {{ item }}
                    </h3>
                    <br>
                    <br>
                    <div class="services-button">
                        Detalhes
                    </div>
                </NuxtLink>
            </div>
        <div v-else id="servicos">
            <div class="servicos-header">
                <h1>
                    <Icon name="iconamoon:ticket-fill"/> Serviços
                </h1>
                <!-- <NuxtLink class="button-servicos">
                    Ver todos
                </NuxtLink> -->
            </div>
            <NuxtLink class="services">
                <h1>Personal Trainer</h1>
                <br>
                <h3>R$ 50,00 hora/aula </h3>
                <br>
                <br>
                <h4>1h - Academia SMFitness</h4>
                <br>
                <br>
                <div class="services-button">
                    Detalhes
                </div>
            </NuxtLink>
        </div>


    </main>
</div>
    <div v-else-if="clickPropOneOne">
        <div>
            <div class='nav'>
                <div>
                    <a @click="openPropOne()">
                        <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
                    </a>
                </div>
            </div>
            <div id="servicos-two">
                <div class="servicos-header">
                    <h1>
                        <Icon name="iconamoon:ticket-fill"/>  
                        Proposta Selecionada:
                    </h1>
                    </div>
                    <span v-if="Data.serviceOneOnePrice" class="services">
                        <h1> {{ Data.serviceOneOne }} </h1>
                        <h2> {{ Data.serviceOneOneSub }} </h2>
                        <br>
                        <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceOneOnePack }}</h3>
                        <br> 
                        <h4 v-for="(item, index) in Data.serviceOneOneItens">
                            <Icon name="material-symbols-light:arrow-right"/> 
                            {{ item }}
                        </h4>                            
                    </span>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceOneOne} (${Data.serviceOneOneSub}), pagando à vista, o valor de R$ ${Data.serviceOneOnePrice}!!`" 
                    v-if="Data.serviceOneOnePrice" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneOnePrice }} à vista (pix | débito | dinheiro)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                    ${Data.serviceOneOne} (${Data.serviceOneOneSub}), pagando no crédito à vista, o valor de R$ ${Data.serviceOneOnePriceCredito}!!`"
                                    v-if="Data.serviceOneOnePriceCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneOnePriceCredito }} (1x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                                    ${Data.serviceOneOne} (${Data.serviceOneOneSub}), pagando em 2x no crédito, o valor de R$ ${Data.serviceOneOnePrice2xCredito}!!`"
                                                    v-if="Data.serviceOneOnePrice2xCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneOnePrice2xCredito }} (2x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                                                        ${Data.serviceOneOne} (${Data.serviceOneOneSub}), pagando em 3x no crédito, o valor de R$ ${Data.serviceOneOnePrice3xCredito}!!`"
                                                                        v-if="Data.serviceOneOnePrice3xCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneOnePrice3xCredito }} (3x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
            </div>
        </div>
    </div>
    <div v-else-if="clickPropOneTwo">
        <div>
            <div class='nav'>
                <div>
                    <a @click="openPropOne()">
                        <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
                    </a>
                </div>
            </div>
            <div id="servicos-two">
                <div class="servicos-header">
                    <h1>
                        <Icon name="iconamoon:ticket-fill"/>  
                        Propostas Selecionada:
                    </h1>
                    </div>
                    <span v-if="Data.serviceOneOnePrice" class="services">
                        <h1> {{ Data.serviceOneOne }} </h1>
                        <h2> {{ Data.serviceOneTwoSub }} </h2>
                        <br>
                        <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceOneOnePack }}</h3>
                        <br> 
                        <h4 v-for="(item, index) in Data.serviceOneTwoItens">
                            <Icon name="material-symbols-light:arrow-right"/> 
                            {{ item }}
                        </h4>                            
                    </span>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando à vista, o valor de R$ ${Data.serviceOneTwoPrice}!!`" 
                    v-if="Data.serviceOneTwoPrice" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice }} à vista (pix | débito | dinheiro)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                    ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando no crédito à vista, o valor de R$ ${Data.serviceOneTwoPriceCredito}!!`"
                                    v-if="Data.serviceOneTwoPriceCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPriceCredito }} (1x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                                    ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando em 2x no crédito, o valor de R$ ${Data.serviceOneTwoPrice2xCredito}!!`"
                                                    v-if="Data.serviceOneTwoPrice2xCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice2xCredito }} (2x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                                                        ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando em 3x no crédito, o valor de R$ ${Data.serviceOneTwoPrice3xCredito}!!`"
                                                                        v-if="Data.serviceOneTwoPrice3xCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice3xCredito }} (3x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
            </div>
        </div>
    </div>
    <div v-else-if="clickPropTwoOne">
        <div>
            <div class='nav'>
                <div>
                    <a @click="openPropOne()">
                        <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
                    </a>
                </div>
            </div>
            <div id="servicos-two">
                <div class="servicos-header">
                    <h1>
                        <Icon name="iconamoon:ticket-fill"/>  
                        Propostas Selecionada:
                    </h1>
                    </div>
                    <span v-if="Data.serviceTwoOnePrice" class="services">
                        <h1> {{ Data.serviceTwoOne }} </h1>
                        <h2> {{ Data.serviceTwoOneSub }} </h2>
                        <br>
                        <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceTwoOnePack }}</h3>
                                               
                    </span>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceTwoOne} (${Data.serviceTwoOneSub}), ${Data.serviceTwoOneItens[1]}!!`" 
                    v-if="Data.serviceOneTwoPrice" class="services">
                        <br> 
                        <h3>{{ Data.serviceTwoOneItens[1] }}</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceTwoOne} (${Data.serviceTwoOneSub}), ${Data.serviceTwoOneItens[2]}!!`" 
                                    v-if="Data.serviceOneTwoPriceCredito" class="services">
                        <br> 
                        <h3>{{ Data.serviceTwoOneItens[2] }}</h3>      
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceTwoOne} (${Data.serviceTwoOneSub}), ${Data.serviceTwoOneItens[3]}!!`" 
                                    v-if="Data.serviceOneTwoPriceCredito" class="services">
                        <br> 
                        <h3>{{ Data.serviceTwoOneItens[3] }}</h3>      
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceTwoOne} (${Data.serviceTwoOneSub}), ${Data.serviceTwoOneItens[4]}!!`" 
                                    v-if="Data.serviceOneTwoPriceCredito" class="services">
                        <br> 
                        <h3>{{ Data.serviceTwoOneItens[4] }}</h3>      
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceTwoOne} (${Data.serviceTwoOneSub}), ${Data.serviceTwoOneItens[5]}!!`" 
                                    v-if="Data.serviceOneTwoPriceCredito" class="services">
                        <br> 
                        <h3>{{ Data.serviceTwoOneItens[5] }}</h3>      
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
            </div>
        </div>
    </div>
    <div v-else>
        <div>
            <div class='nav'>
                <div>
                    <a @click="openPropOne()">
                        <Icon name="ic:baseline-keyboard-arrow-left" /> Voltar
                    </a>
                </div>
            </div>
            <div id="servicos-two">
                <div class="servicos-header">
                    <h1>
                        <Icon name="iconamoon:ticket-fill"/>  
                        Propostas Selecionada:
                    </h1>
                    </div>
                    <span v-if="Data.serviceOneOnePrice" class="services">
                        <h1> {{ Data.serviceOneOne }} </h1>
                        <h2> {{ Data.serviceOneTwoSub }} </h2>
                        <br>
                        <h3><Icon name="material-symbols-light:package-2-sharp"/> {{ Data.serviceOneOnePack }}</h3>
                        <br> 
                        <h4 v-for="(item, index) in Data.serviceOneTwoItens">
                            <Icon name="material-symbols-light:arrow-right"/> 
                            {{ item }}
                        </h4>                            
                    </span>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                    ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando à vista, o valor de R$ ${Data.serviceOneTwoPrice}!!`" 
                    v-if="Data.serviceOneTwoPrice" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice }} à vista (pix | débito | dinheiro)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                    ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando no crédito à vista, o valor de R$ ${Data.serviceOneTwoPriceCredito}!!`"
                                    v-if="Data.serviceOneTwoPriceCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPriceCredito }} (1x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                                    ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando em 2x no crédito, o valor de R$ ${Data.serviceOneTwoPrice2xCredito}!!`"
                                                    v-if="Data.serviceOneTwoPrice2xCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice2xCredito }} (2x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
                    <NuxtLink :href="`https://api.whatsapp.com/send?phone=5521936184024%20&text=Olá Leandro... Sou ${Data.Pronome} ${Data.nomeCompleto}, quero a proposta de Serviço:
                                                                        ${Data.serviceOneOne} (${Data.serviceOneTwoSub}), pagando em 3x no crédito, o valor de R$ ${Data.serviceOneTwoPrice3xCredito}!!`"
                                                                        v-if="Data.serviceOneTwoPrice3xCredito" class="services">
                        <br> 
                        <h3>R$ {{ Data.serviceOneTwoPrice3xCredito }} (3x no crédito)</h3>
                        <br>
                        <div class="services-button">
                            Enviar
                        </div>
                    </NuxtLink>
            </div>
        </div>
    </div>
    
    
</template>
<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}

</script>

<style scoped>

.link {
   display: flex;
   justify-content: space-evenly;
   margin-top: 1.5rem;
   font-size: 1.2rem;
   font-weight: bolder;
   position: sticky;
   top:0px;
   backdrop-filter: blur(5px);
   background-color: #ffffff80;
}

.link a {
    border-bottom: solid 2px #71809690;
    letter-spacing: 2px;
    width: 40%;
    color: #71809690;
    text-align: center;
}

.link a:hover {
    border-bottom: solid 2px #095D62;
    color: #095D62;
    cursor: pointer;
}
.link a.router-link-exact-active {
    border-bottom: solid 2px #095D62;
    color: #095D62;
}

.link .aActiveOne {
    border-bottom: solid 2px #095D62;
    color: #095D62;
    
}
.link .aActiveTwo {
    border-bottom: solid 2px #095D62;
    color: #095D62;
    
}
.link .aActiveTree {
    border-bottom: solid 2px #095D62;
    color: #095D62;
    
}
.head-logo {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: flex-start;
    z-index: 1;
    flex-wrap: wrap;
}
.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    height: 100px;
    width: 100px;
    color: #718096;
    box-shadow: 1px 7px 20px #095D62;
    margin: 1.5rem;
    border-radius: 7px;
    z-index: 10;
}

.logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #095D62 2px solid;
    z-index: 100;
    opacity: 1;
    
}

.nav-bar {
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.logo-nav-bar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: #ffffff50;
    
}
.logo-nav-bar img {
  box-shadow: 1px 7px 20px #095D62;
    height: 300px;
    width: 300px;
    border-radius: 7px;
    border: #095D62 2px solid;
    z-index: 100;
    opacity: 1;
    
}

.button-client {
    margin: 2rem 1.5rem;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    border-radius: 8px;
    cursor: pointer;
    width: 160px;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
}
.button-client:hover {
    background-color: #095D6210;
    color: #095D6280;
}
.button-client .icon{
    margin-top: -5px;
    margin-right: 5px;
    color: var(--color-text);
    transition: all 0.2s ease-in-out 0s;
}
.button-client:hover .icon{
    color: #095D6280;
}
.head-name {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
}
.name {
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: .2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #095D62;
}
.head-name-two {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: 2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #095D62;
}

.whats {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    height: 40px;
    width: 40px;
    color: #718096;
    box-shadow: 1px 1px 15px #095D6250;
    transition: all 0.2s ease-in-out 0s;
    margin: 0rem 1.5rem;
    border-radius: 50%;
    cursor: pointer;
}

.whats:hover {
    background-color: #095D6210;
    color: #095D6280;
    box-shadow: 1px 1px 15px #095D6280;
}


.social {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    color: var(--color-text);
}
.social .icon {
    zoom: .9;
    margin: 2px 0;
    transition: all 0.2s ease-in-out 0s;
}

.social a:hover:nth-child(1) .icon {
    color: #C13584;
}
.social a:hover:nth-child(2) .icon {
    color: black
}
.social a:hover:nth-child(3) .icon {
    color: orange;
}
.social a:hover:nth-child(4) .icon {
    color: red;
}

.social a {
  height: 40px;
  width: 40px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size:.5em;
  transition: all 0.2s ease-in-out 0s;
  margin: 2rem .5rem .5rem .5rem;
  border-radius: 50%;
}
.social a:hover {
    background-color: #095D6210;
    color: var(--color-text);
}


.tags {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: -.7rem;
    /* position: sticky;
    top: 0px;
    backdrop-filter: blur(5px);
    background-color: #ffffff50;
    z-index: 1000; */
}

.tags div {
    margin: .7rem .5rem;

}


.tags a {
    font-weight: 700;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    color: var(--color-text);
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: auto;
    font-size: 14px;
    padding-inline: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
}
.tags a:hover {
    color: #095D62;
}

.aActive{
    color: #095D62;
    
}

.sobre-itens {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 0 15px 0;
    color: var(--color-text);
}

.sobre-itens div {
    margin: 0 0 0 15px;
}

.sobre-itens a:nth-child(1) .icon {
    padding-right: 2px;
    text-decoration: underline;
}

.sobre-itens a:nth-child(2) .icon {
    padding-right: 0px;
    margin: 0 0 0 -1px;
}

.sobre-itens a:nth-child(3) .icon {
    padding-right: 2px;
    margin: 0 0 0 0px;
}

.sobre-itens a {
    margin: 0 0 0 1.5rem;
    color: var(--color-text);
}

.deep{
    margin-left: -23px;
}

.plus {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
}

.plus a {
    margin-left: .6rem;
}

.sobre-itens u:nth-child(1) {
    margin-left: -23px;
}
.category-plus {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
}
.category {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
}
.category span{
    border: #095D6250 .5px solid;
    border-radius: 8px;
    padding: 0 8px;
    background-color: #edf2f7;
    font-weight: 700;
}


.category-plus div {
    margin-top: 1.5rem;
}
.button-plus a {
    margin: 1.5rem;
    cursor: pointer;
     transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    width: 300px;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding: 8px 20px;
    text-align: center;
}

.button-plus a .icon {
    margin: 0 -8px 0 -5px;
}
.button-plus a:hover {
    margin: 0rem 1.5rem;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #edf2f7;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: #095D6280;
    line-height: 18px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    padding-top: 8px;
    padding-bottom: 8px;
}


#avaliacoes, #conteudos {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    
}
#servicos {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: #edf2f7;
    padding: .2rem 0;
    margin-top: 2rem;
    padding-bottom: 2rem;
    
}
.button-servicos {
    margin: 0rem 1.5rem;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.button-servicos:hover {
    background-color: #095D6210;
    color: #095D6280;
}


.services {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    width: 85%;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 18px;
    margin-bottom: 2rem;
}
.services h1 {
    margin-top: 1rem;
    margin-left: 1.5rem;
    color: #095D62;
    text-align: left;
    font-size: 1.4rem;
}
.services h2 {
    margin-top: .3rem;
    margin-left: 1.5rem;
    text-align: left;
    font-size: 1.1rem;
}
.services h3 {
    margin-left: 1.5rem;
    text-align: left;
    color: #002aff;
}
.services h4 {
    margin-left: 1.5rem;
    text-align: left;
}
.services .icon{
    margin: 0px -.2rem;
    text-align: left;
}

.services-button {
    margin: 0rem auto;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #002aff;
    cursor: pointer;
    width: 85%;
    text-align: center;
    color: #fff;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
}
.services .services-button {
    transform:scale(1) ;
    transition: all .3s linear;
}
.services:hover .services-button {
    transform:scale(1.06) ;
}


h1{
    font-size: 1.2rem;
    margin-left: 1.5rem;
}
.servicos-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    background-color: #edf2f7;
    padding: 2rem 0;
    align-items: flex-start;

}
.servicos-header h1 .icon {
    margin-top: -3px;
   zoom: 1.2;

}
#conteudos {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    padding: 1.5em 0;
    
}

.conteudos-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    padding: 1rem 0;
    align-items: flex-start;
}
.conteudos {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 1.5rem auto 0 auto;
    color: #095D62;
    overflow-x: auto;
    width: 85%;
}

.conteudos i {
    font-size: 1.2em;
    color: var(--color-text);
}

.conteudos h5 {
    margin-left: 10px;
}

.conteudos h5 {
    margin: 10px;
}

.article-date {
    text-align: left;
    color: var(--color-text);
}

.conteudos-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    
}

.conteudos-card a {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    transition: all .4s linear;   
    border: solid 1px #095D6240;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 2rem;
    margin-bottom: 2rem;
}

.conteudos-card a:hover img {
    opacity: 1;

}

.conteudos-card img {
    border-radius: 8px;
    margin-top: -10px;
    margin-bottom: 10px;
    height: 100px;
    opacity: .8;
    width: 100%;
    transition: all .4s linear;
}

.conteudos-card h3 {
    margin: 0px 7px 20px 7px;
    line-height: 1.2;
    color: #095D62;
}


.conteudos-card p {
    margin: 0 0 10px 10px;
    font-size: .9em;
}
#avaliacoes {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #edf2f7;
    padding: 2rem 0;
    align-items: flex-start;

}

footer {
    margin-bottom: 2.5rem;
}

.up-window {
    position: fixed;
    bottom: 6.5rem;
    right: -.5rem;    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    backdrop-filter: blur(15px);
    height: 40px;
    width: 40px;
    color: #718096;
    box-shadow: 1px 1px 15px #095D6250;
    transition: all 0.2s ease-in-out 0s;
    margin: 0rem 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10000;
}

.up-window:hover {
    background-color: #095D6210;
    color: #095D6280;
    box-shadow: 1px 1px 15px #095D6280;
}
#servicos-two {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-color: #edf2f7;
    
}


.services-two {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    width: 90%;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 18px;
    margin-bottom: 2rem;
}
.services-two h1 {
    margin-top: 1rem;
    margin-left: 1.5rem;
    color: #095D62;
    text-align: left;
    font-size: 1.4rem;
}
.services-two h2 {
    margin-top: .3rem;
    margin-left: 1.5rem;
    text-align: left;
    font-size: 1.1rem;
}
.services-two h3 {
    margin-left: 1.5rem;
    text-align: left;
    color: #002aff;
}
.services-two h4 {
    margin-left: 1.5rem;
    text-align: left;
}
.services-two .icon{
    margin: 0px -.2rem;
    text-align: left;
}

.services-two-button {
    margin: 0rem auto;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #002aff;
    cursor: pointer;
    width: 85%;
    text-align: center;
    color: #fff;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
}
.services-two .services-two-button {
    transform:scale(1) ;
    transition: all .3s linear;
}
.services-two:hover .services-button {
    transform:scale(1.06) ;
}
.nav {
    margin: 1rem 1rem;

    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
}

.nav a {
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: var(--color-text);
    line-height: 4px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 16px;
    padding-inline: 8px;
    padding-top: 7px;
    padding-bottom: 8px;
    backdrop-filter: blur(15px);
    background-color: #ffffff90;
}

.nav a .icon {
    margin-top: -1px;
    margin-left: -4px;
    margin-right: -2px;
}

.nav a:hover {
    background-color: #095D6210;
}

.nav:hover a {
    color: #095D6280;
}

.nav div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}


@media only screen and (max-width: 370px) {
    .head-logo {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap;
}
.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #095D62 2px solid;
    
}

.button-client {
    margin: 2rem 1.5rem 1rem 1.5rem;
}
.head-name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}


.name {
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: .2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
text-align: center;
}

.whats {
    margin: 1rem 1.5rem;
}
.category {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.category-plus  {
   display: flex;
    flex-direction: column-reverse;
}
.button-plus a {
    margin: 1.5rem auto;
    cursor: pointer;
     transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding: 8px 20px;
    text-align: center;
}

.button-plus a .icon {
    margin: 0 -8px 0 -5px;
}
.button-plus a:hover {
    margin: 0rem auto;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #edf2f7;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: #095D6280;
    line-height: 18px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    padding-top: 8px;
    padding-bottom: 8px;
}


  
}


</style>
