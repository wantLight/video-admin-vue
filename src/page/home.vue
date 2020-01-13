<template>
    <div>
        <head-top></head-top>
		<section class="data_section">
			<header class="section_title">数据统计</header>
            <!-- Layout 布局 -->
			<el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
				<el-col :span="4"><div class="data_list"><span class="data_num">{{active}}</span> 活跃用户</div></el-col>
			</el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{count}}</span> 注册用户</div></el-col>
            </el-row>
		</section>

        <!-- 首页底部划分 -->
        <section class="section_echart">
            <el-row>
                <el-col :span="12">
                    <visitor-pie :pie-data="{count,active}"></visitor-pie>
                </el-col>
                <el-col :span="12">
                    <day-video-num :video-data="{month,total,success,error,wait}"> </day-video-num>
                </el-col>
            </el-row>
        </section>
        
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    import visitorPie from '../components/visitorPie'
    import dayVideoNum from '../components/dayVideoNum'
	import {getCount, getToday, getVideoNum} from '@/api/getData'
    export default {
    	data(){
    		return {
                count:0,
                active:0,
                month:[],
                total:[],
                success:[],
                wait:[],
                error:[]
    		}
    	},
    	components: {
    		headTop,
            visitorPie,
            dayVideoNum
    	},
    	mounted (){
            this.initData();
            this.getVideoNums();
    	},
        computed: {

        },
    	methods: {
    		async initData(){
    		    let count = await getCount()
                this.count = count.data
                console.log(count);
    		    let active = await getToday()
                this.active = active.data
                console.log(active);
            },
            async getVideoNums(){
                
                let datas = await getVideoNum();
                let myData = datas.data;
                this.month = myData.month;
                this.total = myData.total;
                this.success = myData.success;
                this.error = myData.error;
                this.wait = myData.wait;
                
                console.log("myData!!!!!!!",myData)
            }
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
    .wan{
        .sc(16px, #333)
    }
</style>
