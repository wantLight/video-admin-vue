<template>
  <div class="dayVideoNum">
    <div id="dayVideoNum" class style="width: 90%;height:450px;"></div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";

export default {
  mounted() {
    this.myChart = echarts.init(document.getElementById("dayVideoNum"));
    this.initData();
  },
  props: ["videoData"],
  methods: {
    initData() {
      console.log(this.videoData, "initData...", this.videoData.month);
      // this.videoData.month = myData.month;
      // this.total = myData.total;
      // this.success = myData.success;
      // this.error = myData.error;
      // this.wait = myData.wait;

      var colors = ["#5793f3", "#d14a61", "#675bba"];
      const option = {
        color: colors,
        title: {
          text: "视频量统计",
          subtext: "",
          x: "left"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          right: "20%"
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["视频可播放", "视频被封禁", "视频总数"]
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            data: this.videoData.month
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "视频可播放",
            min: 0,
            max: 20,
            position: "right",
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value} 条"
            }
          },
          {
            type: "value",
            name: "视频被封禁",
            min: 0,
            max: 20,
            position: "right",
            offset: 80,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: "{value} 条"
            }
          },
          {
            type: "value",
            name: "视频总数",
            min: 0,
            max: 20,
            position: "left",
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: "{value} 条"
            }
          }
        ],
        series: [
          {
            name: "视频可播放",
            type: "bar",
            data: this.videoData.success
          },
          {
            name: "视频被封禁",
            type: "bar",
            yAxisIndex: 1,
            data: this.videoData.error
          },
          {
            name: "视频总数",
            type: "line",
            yAxisIndex: 2,
            data: this.videoData.month
          }
        ]
      };

      this.myChart.setOption(option);
    }
  },
  watch: {
    videoData: function() {
      console.log("watch videoData");
      this.initData();
    }
  }
};
</script>

<style lang="less">
@import "../style/mixin";
.dayVideoNum {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
