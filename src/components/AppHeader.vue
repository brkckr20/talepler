<script setup>
    import { reactive } from 'vue';
    const data = reactive({
        tarih : new Date(),
        departman : 'ana departman',
        baslik : 'burasi baslik alanidir',
        aciklama:'aciklama alanindaki veri',
        ek : 'yok bi ek',
        durum : 'tamamlanabilir belki de',
        gorusme_id : 2,
        kullanici : 'buracakir',
        tamamlanma_tarihi : new Date(),
    })
    const url = 'http://localhost:3001/talep';
    const addOrUpdate = async () => {
       try {
            const response = await fetch(url,{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data),
            })
            
            if(response.ok){
                alert("Kayit islemi basarili");                
            }
       } catch (error) {
        
       }
    }
</script>
<template>
    <div class="bg-dark">
        <button type="button" class="btn btn-info">Yeni</button>
        <button type="button" @click="addOrUpdate" class="btn btn-success">Kaydet</button>
        <button type="button" class="btn btn-primary">Liste</button>
        <button type="button" class="btn btn-warning">Geri</button>
        <button type="button" class="btn btn-warning">İleri</button>
        <button type="button" class="btn btn-danger">Sil</button>
    </div>
</template>

<style scoped>
    button{
        border-radius: 0 !important;
    }
</style>