<template>
  <div>
    <b-button variant="info" class="simulate" @click="getTiming"
      >Simuler</b-button
    >

    <b-form inline class="form">
      <!--/////////////////////////////////////////// AC PART /////////////////////////////////////////// -->
      <div class="base-timerAC">
        <svg
          class="base-timer _svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="base-timer _circle">
            <circle class="base-timer _path-elapsed" cx="50" cy="50" r="46.5" />
            <path
              class="base-timer _path-remaining"
              :style="AC_color"
              d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
            ></path>
          </g>
        </svg>
        <span class="base-timer _labelAC">
          {{ formattedTimeAC }}
        </span>
      </div>
      <span class="timerTextAC"> Feu Voie A-C</span>

      <!--/////////////////////////////////////////// BD PART /////////////////////////////////////////// -->

      <div class="base-timerBD">
        <svg
          class="base-timer _svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="base-timer _circle">
            <circle class="base-timer _path-elapsed" cx="50" cy="50" r="46.5" />
            <path
              class="base-timer _path-remaining"
              :style="BD_color"
              d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
            ></path>
          </g>
        </svg>
        <span class="base-timer _labelBD">
          {{ formattedTimeBD }}
        </span>
      </div>
      <span class="timerTextBD"> Feu Voie B-D</span>

      <div class="VoieB" style="margin-top: -760px; margin-left: 130px">
        <label class="text" for="inline-form-input-number1"
          >Nombre de Véhicules
        </label>
        <br /><br /><br />

        <b-form-input
          id="number1"
          class="mb-2 mr-sm-2 mb-sm-0 cars1"
          type="number"
          style="width: 100px; margin-left: -20px; margin-top: -100px"
          v-model="carsB"
          min="0"
        ></b-form-input>

        <img
          v-if="!greenB"
          class="light"
          src="@/assets/feu_rouge.png"
          style="margin-top: 217px; margin-left: -151px"
        />
        <img
          v-else
          class="light"
          src="@/assets/feu_vert.png"
          style="margin-top: 163px; margin-left: -151px"
        />
      </div>

      <div class="VoieC" style="margin-top: -90px; margin-left: 250px">
        <label class="text" for="inline-form-input-number1"
          >Nombre de Véhicules</label
        >
        <br /><br /><br />

        <b-form-input
          id="number2"
          class="mb-2 mr-sm-2 mb-sm-0 cars2"
          type="number"
          style="width: 100px; margin-left: -20px; margin-top: -80px"
          v-model="carsC"
          min="0"
        ></b-form-input>

        <img
          v-if="!greenC"
          class="light"
          src="@/assets/feu_rouge.png"
          style="margin-top: -114px; margin-left: -380px"
        />
        <img
          v-else
          class="light"
          src="@/assets/feu_vert.png"
          style="margin-top: -114px; margin-left: -326px"
        />
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

        <label class="text" for="inline-form-input-number1"
          >Nombre de Véhicules
        </label>
        <br /><br /><br />

        <img
          v-if="!greenD"
          class="light"
          src="@/assets/feu_rouge.png"
          style="margin-top: -374px; margin-left: 67.5px"
        />
        <img
          v-else
          class="light"
          src="@/assets/feu_vert.png"
          style="margin-top: -320px; margin-left: 67.5px"
        />
      </div>

      <div class="VoieA" style="margin-top: -85px; margin-left: -550px">
        <label class="text" for="inline-form-input-number1"
          >Nombre de Véhicules
        </label>
        <br /><br /><br />

        <b-form-input
          id="number2"
          class="mb-2 mr-sm-2 mb-sm-0 cars2"
          type="number"
          style="width: 100px; margin-left: -20px; margin-top: -90px"
          v-model="carsA"
          min="0"
        ></b-form-input>

        <img
          v-if="!greenA"
          class="light"
          src="@/assets/feu_rouge.png"
          style="margin-top: 47.5px; margin-left: 260px"
        />
        <img
          v-else
          class="light"
          src="@/assets/feu_vert.png"
          style="margin-top: 47.5px; margin-left: 207px"
        />
      </div>
    </b-form>
  </div>
</template>

<script>
import { HTTP } from "../http-constants";
export default {
  data() {
    return {

      init : true,
      twoBD : true,
      twoAC : true,
      infoFeu: null,

      carsA: null,
      carsB: null,
      carsC: null,
      carsD: null,

      greenA: true,
      greenB: false,
      greenC: true,
      greenD: false,

      AC_color: "",
      BD_color: "",
      green: "rgb(65, 184, 131)",
      red: "rgb(211, 14, 14 )",

      timeLimitAC: null,
      timePassedAC: 0,
      timerIntervalAC: null,

      timeLimitBD: null,
      timePassedBD: 0,
      timerIntervalBD: null,

      nextRedBD: null,
      nextGreenAC: null,
   
      next1 : [ 10 , 6 , 3 , 6],
      next2 : [  2 , 2 , 14 , 1],
      next3 : [ 15 , 10 , 5 , 3],
      next4 : [ 6 , 5 , 9 , 6],
    };
  },
  mounted() {},
  computed: {
    // ///////////////////////////////////////////  COUNT A -> C  /////////////////////////////////////////////////

    formattedTimeAC() {
      const timeAC = this.timeAC;

      if (timeAC == 0) {
        return "0:00";
      }

      const minutes = Math.floor(timeAC / 60);

      let seconds = timeAC % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeAC() {
      if (this.timePassedAC >= this.timeLimitAC) {
        return 0;
      }
      return this.timeLimitAC - this.timePassedAC;
    },

    // ///////////////////////////////////////////  COUNT B -> D  /////////////////////////////////////////////////

    formattedTimeBD() {
      const timeBD = this.timeBD;

      if (timeBD == 0) {
        return "0:00";
      }

      const minutes = Math.floor(timeBD / 60);

      let seconds = timeBD % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeBD() {
      if (this.timePassedBD >= this.timeLimitBD) {
        return 0;
      }
      return this.timeLimitBD - this.timePassedBD;
    },
  },

  watch: {
    timePassedAC: async function () {
      if(this.timePassedBD >= 85 ) {

        this.init = false
        await clearInterval(this.timerIntervalBD)
        await clearInterval(this.timerIntervalAC)
  
        this.timePassedAC = 0
        this.timePassedBD = 0

        this.greenB =  !this.greenB;
        this.greenD =  !this.greenD;
        this.greenA =  !this.greenA;
        this.greenC =  !this.greenC;

        console.log("green a : "  + this.greenA);
        console.log("green b : "  + this.greenB);

        //this.carsA = this.next1[0] 
        //this.carsB = this.next1[1]   
        //this.carsC = this.next1[2]   
        //this.carsD = this.next1[3]   

        this.twoBD = true
        this.twoAC = true

        console.log("time passed AC : " + this.timePassedAC)

        console.log("time passed BD : " + this.timePassedBD)

        await this.getTiming()
      }

      if((this.timePassedAC === this.timeLimitBD)  && this.twoBD) {
        
        this.twoBD = false

        this.timeLimitBD += this.nextRedBD
        await clearInterval(this.timerIntervalBD)

        this.greenB = !this.greenB;
        this.greenD = !this.greenD;

        this.startTimerBD();

      }

      if((this.timePassedAC === this.timeLimitAC)  && this.twoAC) {
        
        console.log("TIMEPASSED AC == TIMELIMIT AC retour");
        this.twoAC = false

        this.timeLimitAC += this.nextGreenAC
        await clearInterval(this.timerIntervalAC)

        this.greenA = !this.greenA;
        this.greenC = !this.greenC;

        this.startTimerAC();

      }
    },
  },

  methods: {
    makeToast(variant, append = false, title, text) {
      this.$bvToast.toast(text, {
        title: title,
        autoHideDelay: 5000,
        appendToast: append,
        variant: variant,
        solid: true,
      });
    },
    getTiming: function() {
      if (this.carsA && this.carsD && this.carsB && this.carsC) {
        HTTP.get(
          "/feu?a=" +
            this.carsA +
            "&b=" +
            this.carsB +
            "&c=" +
            this.carsC +
            "&d=" +
            this.carsD
        )
          .then((response) => {

            this.infoFeu = response.data;
            console.log(this.infoFeu);
 {
              console.log(
                this.infoFeu.timeGreenLightRoadBD,
                this.infoFeu.timeRedLightRoadAC
              );

              this.timeLimitBD = this.infoFeu.timeGreenLightRoadBD;
              this.timeLimitAC = this.infoFeu.timeRedLightRoadAC;

              this.nextRedBD = this.infoFeu.timeRedLightRoadBD - 1;
              this.nextGreenAC = this.infoFeu.timeGreenLightRoadAC;


              if (this.init) {
                this.greenB = true;
                this.greenD = true;
                this.greenA = false;
                this.greenC = false;
              }

              this.startTimerAC();
              this.startTimerBD();
          }})
          .catch((e) => {
            this.errors = e;
          });
      } else {
        this.makeToast(
          "danger",
          false,
          "Attention",
          "Tout les champs doivent être rempli"
        );
      }
    },
    startTimerAC() {
      if (this.greenA && this.greenC) {
        this.AC_color = {
          stroke: `${this.green}`,
        };
      } else {
        this.AC_color = {
          stroke: `${this.red}`,
        };
      }


      this.timerIntervalAC = setInterval(() => (this.timePassedAC += 1), 1000);
    },

    startTimerBD() {
      if (this.greenB && this.greenB) {
        this.BD_color = {
          stroke: `${this.green}`,
        };
      } else {
        this.BD_color = {
          stroke: `${this.red}`,
        };
      }
      this.timerIntervalBD = setInterval(() => (this.timePassedBD += 1), 1000);
    },
  },
};
</script>

<style>
#app {
  background: url("~@/assets/carrefour.png") no-repeat 640px 210px;
}
.form {
  margin-left: 765px;
  height: 940px;
  text-align: center;
}

.text {
  margin-left: -5px;
}

.timerTextAC {
  position: absolute;
  margin-top: 350px;
  margin-left: -110px;
}

.timerTextBD {
  position: absolute;
  margin-top: -400px;
  margin-left: -15px;
}

.light {
  width: 22px;
  position: absolute;
}

.timer1 {
  position: absolute;
  margin-top: -500px;
}

/* Sets the containers height and width */
.base-timerAC {
  position: absolute;
  margin-top: 200px;
  margin-left: -120px;
  width: 100px;
  height: 100px;
}

.base-timerBD {
  position: absolute;
  margin-top: -550px;
  margin-left: 0px;
  width: 100px;
  height: 100px;
}

._circle {
  fill: none;
  stroke: none;
}
._path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

._labelAC {
  position: absolute;

  width: 100px;
  height: 100px;
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
}

._labelBD {
  position: absolute;

  width: 100px;
  height: 100px;
  margin-left: -5px;
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
}

._path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
}

._svg {
  transform: scaleX(-1);
}

.simulate {
  float: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-top: 10px;
}
</style>
