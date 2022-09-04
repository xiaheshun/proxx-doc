<template>
  <div class="big-box" @mouseenter="clearAuto" @mouseleave="startAuto">
    <div class="img-box">
      <div
        class="show-box"
        :style="{
          transform: 'translateX(' + translate + 'px)',
          transition: tsion ? 'all 0.5s' : 'none',
        }"
      >
        <img src="../public/host/1.png" alt="" />
        <img v-for="item in src" :key="item" :src="item.img" alt="" />
        <img src="../public/host/1.png" alt="" />
      </div>
    </div>
    <div class="arrowhead-box" ref="swiper">
      <div class="arrow-box">
        <span class="arrow arrow-left" @click="last"></span>
      </div>
      <div class="arrow-box">
        <span class="arrow arrow-right" @click="next"></span>
      </div>
    </div>
    <div class="swiper-boxs" ref="swiper">
      <span
        @click="swiper(index)"
        v-for="(item, index) in src"
        :key="item"
      ></span>
    </div>
  </div>
</template>

<script>
import a from "../public/host/1.png";
import b from "../public/host/2.jpg";
export default {
  name: "Banner",
  data() {
    return {
      src: [{ img: a }, { img: b }],
      translateX: 0,
      tsion: true,
      flag: 0,
    };
  },
  methods: {
    last() {
      this.translateX--;
      this.tsion = true;
      if (this.translateX < 0) {
        setTimeout(() => {
          this.tsion = false;
          this.translateX = this.src.length - 1;
        }, 500);
      }
    },
    next() {
      this.translateX++;
      this.tsion = true;
      if (this.translateX > this.src.length - 1) {
        setTimeout(() => {
          this.tsion = false;
          this.translateX = 0;
        }, 500);
      }
    },
    swiper(i) {
      this.translateX = i;
    },
    clearAuto() {
      console.log(this.flag);
      clearInterval(this.flag);
    },
    startAuto() {
      console.log(333);
      this.flag = setInterval(() => {
        this.next();
      }, 3000);
    },
  },
  mounted() {
    this.flag = setInterval(() => {
      this.next();
    }, 3000);
  },
  computed: {
    translate() {
      return -(this.translateX + 1) * 1050;
    },
  },
  watch: {
    translateX: {
      handler(val) {
        let a = this.$refs.swiper.querySelectorAll("span");
        a.forEach((element) => {
          element.style.width = "12px";
        });
        if (this.translateX < 0) {
          val = this.src.length - 1;
        }
        if (this.translateX > this.src.length - 1) {
          val = 0;
        }
        a[val].style.width = "100px";
      },
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
}
span {
  margin: 0;
  padding: 0;
}
.big-box {
  width: 100%;
  height: 400px;
  background-color: #999;
  position: relative;
  box-shadow: 0 0 3pc rgb(0, 0, 0, 0.4);
}
.img-box {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.show-box {
  display: flex;
  height: 100%;
  width: 100%;
  transition: all 0.5s;
}
.show-box img {
  float: left;
  min-width: 1050px;
  min-height: 400px;
}
.arrowhead-box {
  position: absolute;
  top: 40%;
  float: left;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.arrowhead-box span {
  /* float: left;
  display: block;
  height: 60px;
  border-radius: 50px; */
  /* background: url("../assets/img/banner2.jpg") no-repeat; */
  /* background-color: rgb(0, 0, 0, 0.4); */
  /* background-position: 6px 14px;
  cursor: pointer;
  opacity: 0.5; */
}
/* .arrowhead-box span:nth-child(2) {
  float: right;
  transform: rotate(180deg);
} */
.arrowhead-box span:hover {
  opacity: 1;
}
.swiper-boxs {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-boxs span {
  float: left;
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.5s;
}
.swiper-boxs span:nth-child(1) {
  width: 100px;
}
.arrow-box {
  width: 36px;
  height: 36px;
  background: #1c1d1e96;
  display: inherit;
  align-items: center;
  justify-content: center;
}
.arrow {
  display: block;
  cursor: pointer;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  width: 12px;
  height: 12px;
}
.arrow-left {
  transform: rotate(45deg);
}
.arrow-right {
  transform: rotate(225deg);
}
</style>
