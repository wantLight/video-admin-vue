<template>
  <div class="fillcontain">
    <head-top></head-top>

    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          微信小程序 Wechat Applet
          <i class="header-icon el-icon-info"></i>
        </template>
        <div>基于微信小程序,更便于用户使用，加速流量产生。</div>

        <div>
            体验版小程序二维码：
          <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
        </div>

      </el-collapse-item>

      <el-collapse-item title="小程序后端接口文档 Swagger-ui" name="2">
        <div>动态生成Api接口文档，降低前后端对接成本，促进项目高效开发。</div> 
        <div>地址链接：<el-link href="http://120.79.143.66:8080/video/swagger-ui.html" type="primary">请点击</el-link></div>
        
      </el-collapse-item>
      <el-collapse-item title="核心技术选型 Technology Selection" name="3">
        <div>小程序前端：微信小程序+iView Weapp;</div>
        <div>小程序后端：SpringBoot+MyBatis+Swagger2+FFmpeg;</div>
        <div>管理平台前端：Vue+ElementUI+Echarts;</div>
        <div>管理平台后端：SpringBoot+MyBatisPlus.</div>
      </el-collapse-item>
      <el-collapse-item title="联系方式 Contact information" name="4">
        <div>开发者：李鑫</div>
        <div>联系邮箱：1710026942@qq.com</div>
        <div>本项目仅用于毕设《基于SpringBoot与微信小程序的校园短视频分享平台》学习展示使用</div>
        <div>版权所有：东北电力大学计算机学院</div>
      </el-collapse-item>
    </el-collapse>

    <p class="explain_text">{{msg}}</p>
  </div>
</template>

<script>
import headTop from "../components/headTop";
export default {
  data() {
    return {
      activeNames: ["1"],
      url: './static/img/basicprofile.jpg',
        srcList: [
          './static/img/basicprofile.jpg'
        ],
      msg: "啊，好像没什么好说明的耶~"
    };
  },
  components: {
    headTop
  },
  methods: {
    async getData() {
      let data = await getMsg();
      console.log(data);
      this.msg = data.msg;
    },
    handleChange(val) {
      console.log(val);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less">
@import "../style/mixin";
.explain_text {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: #333;
}
</style>
