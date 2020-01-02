<template>
<view class="content">
  <image class="logo" :src="'../../static/logo.png'"></image>
  <view>
    <view v-for="(title, key) in titles" :key="key" class="title">{{title}}</view>
  </view>
</view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Counter from "@/modules/Counter";

/*
class Counter extends Module {
  @state count = 0;

  @action
  increase(state) {
    console.log("increase=====");
    state.count += 1;
  }

  @action
  decrease(state) {
    state.count -= 1;
  }
}
*/

const counter = Counter.create();

@Component
export default class Home extends Vue {	
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
  titles: string[] = ['title1', 'title2'];
  onLoad() {
	  counter.increase();
  }
}
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}
.logo{
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
}
.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>