<template>
	<div class="login-content">
		<div class="content-main">
			
			<div class="input">
				<el-form label-width="50px">
					<div class="text">
						<p>登录页面</p>
					</div>
					<el-form-item label="账户">
						<el-input ></el-input>
					</el-form-item>
					
					<el-form-item label="密码">
						<el-input ></el-input>
					</el-form-item>
					
					<el-form-item>
						<el-button type="primary">登录</el-button>
						<el-button type="primary">取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
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
		border: 1px solid aquamarine;
		padding: 5px;
		.input{
			width: 100%;
			
			
		}
		
	}
}
::v-deep(.el-form-item__label){
	justify-content: center;
}

.text{
	
}
</style>