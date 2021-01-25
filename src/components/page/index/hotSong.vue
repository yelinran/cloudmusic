<template>
  <div>
    <div class="header">
      <div class="img"></div>
      <p>更新日期: {{ date }}</p>
      <van-cell-group style="margin-top: 30px">
        <van-cell
          v-for="(item, index) in newSongs"
          :key="index"
          :title="item.title"
          :label="item.label"
          :title-style="{
            'font-size': '15px',
            position: 'relative',
            paddingLeft: '15px',
          }"
        >
          <template #title>
            <span
              style="
                position: absolute;
                top: 10px;
                left: -10px;
                font-size: 18px;
                z-index: 999;
              "
              >0{{ index }}</span
            >
            <span class="custom-title">单元格</span>
          </template>
          <template #right-icon>
            <van-icon name="play-circle-o" class="search-icon" />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "01月21号",
      // 最新音乐
      newSongs: [
        {
          title: "随风飘摇",
          label: "韩旭 - 随风飘摇",
        },
        {
          title: "归处",
          label: "韩旭(电影《侍神令》主题曲)",
        },
        {
          title: "No Rest",
          label: "Vicetone - No Rest",
        },
        {
          title: "Lo Vas A Olvidar",
          label: "Billie Eilish / ROSALÍA",
        },
        {
          title: "The Business, Pt. II",
          label: "Tiësto / Ty Dolla $ign",
        },
        {
          title: "随风飘摇",
          label: "韩旭 - 随风飘摇",
        },
        {
          title: "归处",
          label: "韩旭(电影《侍神令》主题曲)",
        },
        {
          title: "No Rest",
          label: "Vicetone - No Rest",
        },
        {
          title: "Lo Vas A Olvidar",
          label: "Billie Eilish / ROSALÍA",
        },
        {
          title: "The Business, Pt. II",
          label: "Tiësto / Ty Dolla $ign",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  padding-top: 40px;
  height: 105px;
  background: url(../../../images/hot_music_bg_2x.jpg) no-repeat 100% / 100%;
  .img {
    margin-left: 20px;
    width: 142px;
    height: 67px;
    background-image: url(../../../images/index_icon_2x.png);
    background-position: -20px -20px;
    background-size: 160px 80px;
    background-repeat: no-repeat;
  }
  p {
    margin: 0;
    margin-left: 20px;
    padding: 0;
    font-size: 12px;
    color: #fff;
  }
  .search-icon {
    font-size: 25px;
    line-height: 46px;
  }
}
</style>