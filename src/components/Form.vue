<template>
  <div>
  <b-form inline class="form">
    <div class="VoieB" style="margin-top: -760px; margin-left: 130px">
      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules </label> <br><br><br>
    
      <b-form-input
      id="number1"
      class="mb-2 mr-sm-2 mb-sm-0 cars1"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -100px"
      v-model="carsB"
      min="0"
      ></b-form-input>

      <img v-if="!greenB" class="light" src="@/assets/feu_rouge.png" style="margin-top: 217px; margin-left: -151px"/>
      <img v-else class="light" src="@/assets/feu_vert.png" style="margin-top: 163px; margin-left: -151px"/>

    </div>

    <div class="VoieC" style="margin-top: -90px; margin-left: 250px">
      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules</label> <br><br><br>
    
      <b-form-input
      id="number2"
      class="mb-2 mr-sm-2 mb-sm-0 cars2"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -80px"
      v-model="carsC"
      min="0"
      ></b-form-input>

      <img v-if="!greenC" class="light" src="@/assets/feu_rouge.png" style="margin-top: -114px; margin-left: -380px"/>
      <img v-else class="light" src="@/assets/feu_vert.png" style="margin-top: -114px; margin-left: -326px"/>
    </div>

    <div class="VoieD" style="margin-top: 720px; margin-left: -555px">
      <b-form-input
      id="number2"
      class="mb-2 mr-sm-2 mb-sm-0 cars2"
      type="number"
      style="width: 100px; margin-left: -5px; margin-top: -40px"
      v-model="carsD"
      min="0"
      ></b-form-input>

      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules </label> <br><br><br>

      <img v-if="!greenD" class="light" src="@/assets/feu_rouge.png" style="margin-top: -374px; margin-left: 67.5px"/>
      <img v-else class="light" src="@/assets/feu_vert.png" style="margin-top: -320px; margin-left: 67.5px"/>
    </div>
    
    <div class="VoieA" style="margin-top: -85px; margin-left: -550px">
      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules </label> <br><br><br>
    
      <b-form-input
      id="number2"
      class="mb-2 mr-sm-2 mb-sm-0 cars2"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -90px"
      v-model="carsA"
      min="0"
      ></b-form-input>

      <img v-if="!greenA" class="light" src="@/assets/feu_rouge.png" style="margin-top: 47.5px; margin-left: 260px"/>
      <img v-else class="light" src="@/assets/feu_vert.png" style="margin-top: 47.5px; margin-left: 207px"/>
    </div>

  </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voieA: null,
      voieB: null,
      voieC: null,
      voieD: null,

      greenA: true,
      greenB: false,
      greenC: true,
      greenD: false
    }
  }

}
</script>

<style>
#app {
  background: url('~@/assets/carrefour.png') no-repeat 640px 210px;
}
.form {
  margin-left: 765px;
  height: 940px;
}

.text {
    margin-left: -5px;
}

.light {
  width: 22px;
  position: absolute;
}

</style>