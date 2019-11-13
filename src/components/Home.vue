<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { GetOneData, GetTwoDataV } from "../api/index";
export default {
  name: "Home",
  data() {
    return {
      eg: "HomePage"
    };
  },
  //页面初始化
  mounted() {
    this.GetJsonA();
  },
  //方法
  methods: {
   async GetJsonA() {
     // const result = await GetOneData();
      console.log("HomePage");
    }
  },

  props: {
    msg: String
  }
};
</script>

<style >
</style>
