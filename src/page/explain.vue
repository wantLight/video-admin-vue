<template>
  <div class="fillcontain">
    <head-top></head-top>

    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <p  class="myheaderwechat">微信小程序 Wechat Applet</p>
          &nbsp;
          <i class="header-icon el-icon-info"></i>
        </template>
        <div>基于微信小程序,更便于用户使用，加速流量产生。</div>

        <div>
            体验版小程序二维码如下：(只有授权人员才可使用)
            <br/>
          <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
        </div>

      </el-collapse-item>

      <el-collapse-item class="myheader" title="小程序后端接口文档 Swagger-ui" name="2">
        <div>动态生成Api接口文档，降低前后端对接成本，促进项目高效开发。</div> 
        <div>地址链接：<el-link href="http://120.79.143.66:8080/video/swagger-ui.html" type="primary">请点击</el-link></div>
        
      </el-collapse-item>
      <el-collapse-item class="myheader" title="核心技术选型 Technology Selection" name="3">
        <div>小程序前端：微信小程序+iView Weapp;</div>
        <div>小程序后端：SpringBoot+MyBatis+Swagger2+FFmpeg+Elasticsearch;</div>
        <div>管理平台前端：Vue+ElementUI+Echarts;</div>
        <div>管理平台后端：SpringBoot+MyBatisPlus.</div>
      </el-collapse-item>
      <el-collapse-item class="myheader" title="联系方式 Contact information" name="4">
        <div>开发者：李鑫</div>
        <div>联系邮箱：1710026942@qq.com</div>
        <div>版权所有：东北电力大学计算机学院</div>
        <div>本项目仅用于毕设《基于SpringBoot与微信小程序的校园短视频分享平台》学习展示使用</div>
      </el-collapse-item>
    </el-collapse>


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
    };
  },
  components: {
    headTop
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  mounted() {

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
.myheader .el-collapse-item__header{
  font-size: 18px;
  color: #1da7f7e1;
}
.myheaderwechat {
  font-size: 18px ;
  color: #1da7f7e1;
}
</style>
