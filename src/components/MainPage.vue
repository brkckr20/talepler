<script setup>
    
</script>
<template>
   <div class="container">

<!-- Outer Row -->
<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Sisteme Giriş Yap</h1>
                            </div>
                            <form class="user"><!-- 
                                <div class="form-group">
                                    <input value="01 Burak Çakır"type="email" class="form-control form-control-user"
                                        placeholder="Kullanici Adinizi Giriniz!">
                                </div> -->
                                <div class="form-group">
                                    <select name="vals" class="form-control form-control-user">
                                        <option value="01" selected>01 Burak Çakır</option>
                                        <option value="02">02 Ahmet Öz</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user"
                                        placeholder="Parolanizi Giriniz!">
                                </div>
                                <button href="#" class="btn btn-facebook btn-user btn-block">
                                    Giriş Yap
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
</template>
<style scoped>
    a{border-radius: 0 !important;cursor: pointer;}
</style>