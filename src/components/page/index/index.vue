<template>
  <div>
    <div class="header">
      <div class="title">
        <van-icon name="gem" style="vertical-align: -5px" />
        <span>网易云音乐</span>
      </div>
      <div class="download">
        <span>下载APP</span>
      </div>
    </div>
    <div class="tab">
      <van-tabs v-model="active" title-active-color="#d43c33" line-width>
        <van-tab
          v-for="item in tabs"
          :key="item.key"
          :title="item.title"
          class="content"
        >
          <div v-if="active == 0">
            <recom-song></recom-song>
          </div>
          <div v-if="active == 1">
            <hot-song></hot-song>
          </div>
          <div v-if="active == 2">
            <search-song></search-song>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
// 推荐歌单
import recomSong from "./recomSong";
// 热歌单
import hotSong from "./hotSong";
// 查找歌单页面
import searchSong from "./searchSong.vue";
export default {
  data() {
    return {
      // tab 切换标签
      tabs: [
        { key: 0, title: "推荐音乐" },
        { key: 1, title: "热歌榜" },
        { key: 2, title: "搜索" },
      ],
      active: 0,
    };
  },
  methods: {},
  components: {
    recomSong,
    hotSong,
    searchSong,
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 85px;
  background-color: #d43c33;
  .title {
    color: #fff;
    font-size: 23px;
    letter-spacing: 1px;
    span {
      margin-left: 5px;
    }
  }
  .download {
    width: 100px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: #d43c33;
    background-color: #fff;
    border-radius: 20px;
  }
}
.tab {
  & /deep/ .van-tab {
    font-size: 16px;
  }
}
</style>