<template>
  <div>
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="搜索歌曲、歌手、专辑"
    />
    <van-divider />
    <span style="font-size: 12px; margin-left: 15px">热门搜索</span>
    <ul class="hot-song">
      <li v-for="(item, index) in hotSongs" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: null,
      hotSongs: [
        "星辰大海",
        "错位时空",
        "是你想成为的大人吗",
        "张碧晨",
        "华晨宇",
        "四季予你",
        "你的轮廓",
        "童话镇",
        "睡在风里",
        "曾经我也想过一了百了",
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.hot-song {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 0 10px;
    margin: 0 8px 8px 0;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e6e7ea;
    border-radius: 20px;
  }
}
</style>