<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="视频编号" prop="id"></el-table-column>
        <el-table-column label="视频描述" prop="videoDesc"></el-table-column>
        <el-table-column label="视频封面" prop="coverPath">
          <template slot-scope="scope">
            <el-image style="width: 100px; height: 100px" :src='baseImgPath+scope.row.coverPath' :preview-src-list="srcList"></el-image>
          </template>
        </el-table-column>
        
        <el-table-column label="观看地址" prop="videoPath">
          <template slot-scope="scope">
            <!-- <a
              type="primary"
              :href="'http://120.79.143.66:8080//'+ scope.row.videoPath"
              target="_blank"
            >点我观看</a> -->
            <el-button type="primary" icon="el-icon-video-play" @click="watchVideo(scope.row)">点我观看</el-button>
          </template>
        </el-table-column>
        <el-table-column label="视频时长" prop="videoSeconds"></el-table-column>
        <el-table-column label="获赞数" prop="likeCounts"></el-table-column>
        <el-table-column label="发布者" prop="nickname"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 0">待审核</span>
            <span v-if="scope.row.status === 1">发布中</span>
            <span v-if="scope.row.status === 2">禁播</span>
          </template>
        </el-table-column>
        <el-table-column label="发布日期" prop="createTime"></el-table-column>

        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">

            <el-button v-if="scope.row.status === 0" @click="handleVideo(scope.row,1)" type="success" size="small">
                审核通过
            </el-button>
            <el-button v-if="scope.row.status === 1 || scope.row.status === 0" @click="handleVideo(scope.row,2)" type="danger" size="small">
                禁播
            </el-button>
            <el-button v-if="scope.row.status === 2" @click="handleVideo(scope.row,1)" type="warning" size="small">
                恢复播放
            </el-button>

          </template>
        </el-table-column>

      </el-table>
      <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="limit"
          layout="total, prev, pager, next"
          :total="count"
        ></el-pagination>
      </div>
    </div>

    <!-- :before-close="handleClose" -->
    <el-dialog title="视频播放" :visible.sync="dialogVisible" width="30%" >
      <video-play :video-data="videoData"></video-play>
    </el-dialog>
    

    <bottom></bottom>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import { getVideoList, forbidVideo } from "@/api/getData";
import videoPlay from "../components/videoPlay";
import { baseImgPath } from "@/config/env";
import bottom from "../components/bottom";

export default {
  data() {
    return {
      tableData: [
       
      ],
      limit: 10,
      videoFlag : false,
      currentPage: 1,
      count: 0,
      videoData:{},
      dialogVisible:false
    };
  },
  components: {
    headTop,
    videoPlay,
    bottom
  },
  created() {
    this.getBgms();
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getBgms();
    },
    watchVideo (e) {
      console.log(e,"watchVideo!!!!!")
      this.dialogVisible = true;
      this.videoData = e;
    },
    async getBgms() {
      const bgms = await getVideoList({
        current: this.currentPage,
        size: this.limit
      });
      console.log(bgms);
      this.tableData = bgms.data.records;
      this.count = bgms.data.total;
      this.currentPage = bgms.data.current;
    },
    handlePlayClick(index, row) {
      console.log(index, row);
      const serverUrl = "http://localhost:8085/";
      window.open(serverUrl + row.path, "_blank");
    },


    async handleVideo(row,status) {
        
      let result =  await forbidVideo({ id: row.id,status: status});

      console.log(result,"!!!!!!!!!!!");

      if (result.status === 200) {
        this.tableData = [];
        this.$notify({
          title: '成功',
          message: '禁播成功',
          type: 'success'
        });
        this.getBgms();
        
      }
    }

    

  }
};
</script>

<style lang="less">
@import "../style/mixin";
.table_container {
  padding: 20px;
}
</style>
