<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" width="100"></el-table-column>
        <el-table-column property="username" label="用户名" width="220"></el-table-column>
        <el-table-column label="用户头像" width="220">
          <template slot-scope="scope">
            <!-- <el-image style="width: 40px; height: 40px" :src="'http://120.79.143.66:8080//'+scope.row.faceImage" :preview-src-list="srcList"></el-image> -->
            <img
              :src="'http://120.79.143.66:8080//'+scope.row.faceImage"
              width="40"
              height="40"
              class="head_pic"
            />
          </template>
        </el-table-column>
        <el-table-column property="nickname" label="用户昵称"></el-table-column>
        <el-table-column property="fansCounts" label="粉丝数"></el-table-column>
        <el-table-column property="followCounts" label="关注数"></el-table-column>
        <el-table-column property="receiveLikeCounts" label="总获赞数"></el-table-column>
      </el-table>
      <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="count"
        ></el-pagination>
      </div>
    </div>

    <bottom></bottom>
  </div>
</template>

<script>
import headTop from "../components/headTop";
import { getUserList } from "@/api/getData";
import bottom from "../components/bottom";

export default {
  data() {
    return {
      tableData: [],
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1
    };
  },
  components: {
    headTop,
    bottom
  },
  created() {
    this.getUsers();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.getUsers();
    },
    async getUsers() {
      const Users = await getUserList({
        current: this.currentPage,
        size: this.limit
      });
      console.log(Users);
      this.tableData = Users.data.records;
      this.count = Users.data.total;
      this.currentPage = Users.data.current;
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
