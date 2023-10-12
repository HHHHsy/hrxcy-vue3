<template>
	<div class="hrxcy">
		<div class="kobi">
			<img src="http://www.hrxcy.xyz:8080/img/kobi.jpg" alt="kobi">
		</div>
		<div class="login-content">
			<div class="left">
				<img src="http://www.hrxcy.xyz:8080/img/zsj.jpg" alt="">
			</div>
			
			<div class="content-main">
				<div class="input">
					
					<el-form label-width="50px" style="text-align: -webkit-center;">
						<div class="text">
							<el-avatar src="http://www.hrxcy.xyz:8080/img/bjb.jpg"/>
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
			
			<div class="right">
				<img src="http://www.hrxcy.xyz:8080/img/zsj2.gif" alt="">
			</div>
		</div>

	</div>
</template>

<script lang="ts" setup>
 //import bjb from '@/assets/img/爆金币.jpg'
import { useMain } from '@/store/index'
import router from '@/router/index'

// 获取静态资源
// const getAssetsFile = (url:string)=>{
// 	return new URL(`./assets/img/${url}`,import.meta.url).href
// }
// const cs = ref(`${getAssetsFile('爆金币.jpg')}`)

//const store = useMain()
const store = useMain()

const loginBtn = () =>{
	ElMessage.success('登录成功了,牢大.')
	store.status = false
	router.push({ path: '/' }).catch(()=>{})
}


</script>

<style lang="scss" scoped>

@media screen and (max-width: 600px) {
  .login-content{
	  width: 100%;
	  // height: 100vh;
	  text-align: center;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-direction: column;
  }
}
.hrxcy{
	width: 100%;
	height: 100vh;
}
.login-content{
	width: 100%;
	// height: 100vh;
	// background-color: aqua;
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
		animation: mains;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		.input{
			width: 350px;
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
.left{
	margin-right: 30px;
	animation: move;
	animation-duration: 4s;
	animation-iteration-count: infinite;
}
.right{
	margin-left: 30px;
	animation: move;
	animation-duration: 4s;
	animation-iteration-count: infinite;
}
.kobi{
	
	width: 100%;
	display: flex;
	justify-content: center;
	img{
		padding: 10px;
		width: 300px;
		height: 300px;
		animation: kobi;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
}
@keyframes main {
	0%{
		
	}
}
@keyframes kobi {
	0% {
	    transform: scale(1);
	}
	50% {
	    transform: scale(2);
	}
	100% {
	    transform: scale(1);
	}
}


/* move为动画名 自定义 */
@keyframes move {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(150px, 0);
    }

    50% {
        transform: translate(150px, 150px);
    }

    75% {
        transform: translate(0, 150px);
    }

    100% {
        transform: translate(0, 0);
    }
}

</style>