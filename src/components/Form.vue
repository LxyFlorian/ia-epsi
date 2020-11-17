<template>
  <div>
  <b-form inline class="form">
    <div class="Top" style="margin-top: -750px; margin-left: 130px">
      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules </label> <br><br><br>
    
      <b-form-input
      id="number1"
      class="mb-2 mr-sm-2 mb-sm-0 cars1"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -100px"
      ></b-form-input>
    </div>

    <div class="Right" style="margin-top:  -90px; margin-left: 250px">
      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules</label> <br><br><br>
    
      <b-form-input
      id="number2"
      class="mb-2 mr-sm-2 mb-sm-0 cars2"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -80px"
      ></b-form-input>
    </div>

    <div class="Bot" style="margin-top: 720px; margin-left: -555px">
      <b-form-input
      id="number2"
      class="mb-2 mr-sm-2 mb-sm-0 cars2"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -40px"
      ></b-form-input>

      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules </label> <br><br><br>
    </div>
    
    <div class="Left" style="margin-top: -85px; margin-left: -550px">
      <label class= "text" for="inline-form-input-number1">Nombre de Véhicules </label> <br><br><br>
    
      <b-form-input
      id="number2"
      class="mb-2 mr-sm-2 mb-sm-0 cars2"
      type="number"
      style="width: 100px; margin-left: -20px; margin-top: -90px"
      ></b-form-input>
    </div>

  </b-form>
  </div>
</template>

<script>
export default {

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

</style>