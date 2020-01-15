<template>
    <div class="page_bottom">
		<p class="detail">地址: 吉林市船营区长春路169号   
			版权所有©2020&nbsp;<el-link href="http://ie.neepu.edu.cn/index.htm" type="primary">{{msg}}</el-link>  
			&nbsp;联系方式: 1710026942@qq.com</p>
    </div>
</template>

<script>


    export default {
    	data(){
    		return {
    			msg : "东北电力大学计算机学院"
    		}
    	},
    	created(){
    		
    	},
    	computed: {
    		
    	},
		methods: {
			
		}
    }
</script>

<style lang="less">
.page_bottom{
	background-color: #EFF2F7;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0px;
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	.detail {
		padding-left: 20px;
		//margin: 0 auto;
		font-size: 14px;
		display: flex;
	}
}
</style>
