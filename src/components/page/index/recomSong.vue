<!-- 推荐歌单 -->
<template>
  <div>
    <span class="recom-title">推荐歌单</span>
    <ul class="song-list">
      <li
        v-for="(item, index) in songLists"
        :key="index"
        class="song-sim"
        @click="goDetial(item)"
      >
        <img :src="item.src" alt="" />
        <p>{{ item.des }}</p>
        <span class="song-icon"
          ><van-icon name="service" />{{ item.num }}万</span
        >
      </li>
    </ul>
    <span class="recom-title">最新音乐</span>
    <van-cell-group>
      <van-cell
        v-for="(item, index) in newSongs"
        :key="index"
        :title="item.title"
        :label="item.label"
        :title-style="{ 'font-size': '15px' }"
      >
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 推荐歌单
      songLists: [
        {
          src:
            "http://p1.music.126.net/A_DazNo88O6C0R6knvCtVA==/109951165529221838.jpg?imageView=1&type=webp&thumbnail=246x0",
          des: "独立梦室 | 火烈鸟 糖果与冬日遐想",
          num: 123,
        },
        {
          src:
            "http://p1.music.126.net/O4nfOADV2gToGwo23fBQag==/109951164488282032.jpg?imageView=1&type=webp&thumbnail=246x0",
          des: "白月光在照耀，你才想起她的好",
          num: 432,
        },
        {
          src:
            "http://p1.music.126.net/9PeBTS0QmjB7B_pJUFnz-A==/109951164614296928.jpg?imageView=1&type=webp&thumbnail=246x0",
          des: "|车载嗨曲 开车靠的是感觉，不是眼睛|",
          num: 2353,
        },
        {
          src:
            "http://p1.music.126.net/xpwmY-yXuHaP9hg82XXGsg==/109951165594900119.jpg?imageView=1&type=webp&thumbnail=246x0",
          des: "白月光在照耀，你才想起她的好",
          num: 213,
        },
        {
          src:
            "http://p1.music.126.net/2xhKL4cTNR5qJbu3gXW9Sw==/109951165636112590.jpg?imageView=1&type=webp&thumbnail=246x0",
          des: "愿漂泊的人有酒喝，孤独的人有歌听",
          num: 512,
        },
        {
          src:
            "http://p1.music.126.net/Qur9XlP3SWtjb7oON8LEqg==/109951165608128816.jpg?imageView=1&type=webp&thumbnail=246x0",
          des: "Urban｜天台沉思，都市青年庇护所",
          num: 712,
        },
      ],
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
  methods: {
    goDetial(item) {
      console.log(item);
    },
  },
};
</script>
<style lang="less" scoped>
.recom-title {
  margin-top: 10px;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 15px;
  &::before {
    content: "";
    margin-right: 10px;
    border: 1px solid #d43c33;
  }
}
.song-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  width: 100%;
  margin-bottom: 20px;
  .song-sim {
    position: relative;
    width: 33%;
    & /deep/ img {
      width: 100%;
      height: 122px;
    }
    & /deep/ p {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 36px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .song-icon {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      font-size: 13px;
      color: #fff;
    }
  }
}
.search-icon {
  font-size: 25px;
  line-height: 46px;
}
</style>