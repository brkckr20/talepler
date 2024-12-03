<script setup>
    import { ref } from 'vue';
    const opened = ref('genel');
    const openTab = (value) => {
        opened.value = value;
    }
</script>
<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a :class="['nav-link', { 'active': opened === 'genel' }]"  @click="openTab('genel')">Genel</a>
            </li>
            <li class="nav-item">
                <a :class="['nav-link', { 'active': opened === 'gorusmenotlari' }]" @click="openTab('gorusmenotlari')">Görüşme Notları</a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    a{border-radius: 0 !important;cursor: pointer;}
</style>