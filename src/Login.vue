<template>
	<div class="login-content">
		<div class="content-main">
			<div class="input">
				<el-form label-width="50px" style="text-align: -webkit-center;">
					<div class="text">
						<el-avatar :src="bjb"/>
						<p>登录页面</p>
					</div>
					<el-form-item label="账户">
						<el-input ></el-input>
					</el-form-item>
					
					<el-form-item label="密码">
						<el-input ></el-input>
					</el-form-item>
					
					<el-form-item >
						<el-button type="primary" @click="loginBtn">登录</el-button>
						<el-button type="primary">取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import bjb from '@/assets/img/爆金币.jpg'
const loginBtn = () =>{
	ElMessage.success('登录成功了,牢大.')
}

</script>

<style lang="scss" scoped>
.login-content{
	width: 100%;
	height: 100vh;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	
	.content-main{
		width: 350px;
		height: auto;
		border: 2px solid black;
		padding: 5px;
		box-shadow: 5px 0 5px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.input{
			width: 90%;
		}
		
	}
}
::v-deep(.el-form-item__label){
	justify-content: center;
}
::v-deep(.el-form-item__content){
	display: flex;
	justify-content: center;
	align-items: center;
}
.text{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	
	p{
		margin-left: 5px;
		font-size: 18px;
		font-family: Arial, Helvetica, sans-serif;
	}
	el-avatar{
		margin-right: 5px;
	}
}
</style>