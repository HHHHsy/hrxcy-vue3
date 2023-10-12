<template>
	<div class="hrxcy-home">
		<div class="hrxcy-top">
			<div class="hrxcy-rate-text">
				<p>为了纪念我们心中的那个他，请充满感情与口水的为他献上你的评分，为它进行公平公正公开的评判！！</p>
			</div>
		</div>

		<div class="hrxcy-zj">
			<div class="imgPf">
				<img src="http://www.hrxcy.xyz:8080/img/kobi.jpg" alt="kobi">
				<div class="kobi">
					<p>评分:</p>
					<el-rate size="small" v-model="value" :texts="['no', 'noo', 'no', 'good', 'laoda!!']" @change="changeT1" show-text />
				</div>
			</div>
			<div class="imgPf">
				<img src="http://www.hrxcy.xyz:8080/img/kobi.jpg" alt="kobi">
				<div class="kobi">
					<p>评分:</p>
					<el-rate size="small" v-model="value1" :texts="['no', 'noo', 'no', 'good', 'laoda!!']" show-text @change="changeT1" />
				</div>
			</div>
			<div class="imgPf">
				<img src="http://www.hrxcy.xyz:8080/img/kobi.jpg" alt="kobi">
				<div class="kobi">
					<p>评分:</p>
					<el-rate size="small" v-model="value2" :texts="['no', 'noo', 'no', 'good', 'laoda!!']" show-text @change="changeT1"/>
				</div>
			</div>
		</div>

		<div class="hrxcy-bottom-cp">
			<div class="hmb" :style="ldColor">
				<span>黑曼巴严选评分 ：</span><p> {{ laoda }}</p>
			</div>
		</div>

		<div class="hrxcy-bottom">

		</div>
	</div>
</template>

<script lang="ts" setup>
	const ldColor = ref('black')
	const value = ref(0)
	const value1 = ref(0)
	const value2 = ref(0)
	const laoda = ref()
	let sum:number
	const changeT1 = ((v: number)=>{
		sum = value.value + value1.value + value2.value
		if(sum == 15){
			laoda.value = '而你!就是黑曼巴精神！！龟龟，牛大了。'
			ldColor.value = 'red'
		}
		if( sum > 10 && sum < 15){
			laoda.value = '你!就是下一个牢大。'
		}
		if(sum < 10){
			laoda.value = '中嘞，老乡'
		}
		ElMessage.success(`公平公正评分成功！达到惊人的${v}分！！！`)
	})
	
</script>

<style lang="scss" scoped>
	.hrxcy-home {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;

	}

	.hrxcy-top {
		width: 100%;
		height: 1.875rem;
		background-color: darkgrey;
		display: flex;
		justify-content: center;
		align-items: center;

		.hrxcy-rate-text p {
			color: aliceblue;
		}
	}

	.hrxcy-zj {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;

		img {
			width: 10.75rem;
			height: 10.75rem;
		}

		.kobi {
			width: 10.75rem;
		}
	}

	.hrxcy-bottom {
		width: 100%;
		height: 1.875rem;
		background-color: darkcyan;
	}

	.hrxcy-bottom-cp {
		width: 80%;
		height: 20.875rem;
		border: 2px solid whitesmoke;
		box-shadow: 5px 2px 10px 0;
		padding: 20px;
		
		
		p{
			font-size: 20px;
			font-weight: 800;
			 color: v-bind(ldColor);
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		}
		.hmb{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>