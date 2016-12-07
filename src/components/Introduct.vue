<template>
	<div class="intro">
		<div class="intro-body">
			<section><span></span></section>
			<section><span></span></section>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'intro'
  }
</script>

<style scoped>
	section {
		padding-top: 30px
	}
	
	section span {
	  position: absolute;
		top: 0;
		left: 50%;
		width: 25px;
		height: 25px;
		margin: auto;
		border-left: 2px solid #fff;
		border-bottom: 2px solid #fff;
		-webkit-animation: bounce 1.5s infinite;
		-moz-animation: bounce 1.5s infinite;
		animation: bounce 1.5s infinite;
		-webkit-transform: rotate(135deg);
		-moz-transform: rotate(135deg);
		transform: rotate(135deg);
		box-sizing: border-box;
	}
	
	@-webkit-keyframes bounce {
		0% {
			-webkit-transform: rotate(135deg) translate(0, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-webkit-transform: rotate(135deg) translate(-10px, 10px);
			opacity: 0;
		}
	}

	@-moz-keyframes bounce {
		0% {
			-moz-transform: rotate(135deg) translate(0, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-moz-transform: rotate(135deg) translate(-10px, 10px);
			opacity: 0;
		}
	}
	
	@keyframes bounce {
		0% {
			transform: rotate(135deg) translate(0, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: rotate(135deg) translate(-10px, 10px);
			opacity: 0;
		}
	}
	
	.intro {
		height: 100%;
		padding: 0;
		display: table;
		width: 100%;
		text-align: center;
		background: url(../assets/background_v.jpg) no-repeat center center;
		background-color: #fff;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		background-size: cover;
		-o-background-size: cover;
	}
	
	.intro .intro-body {
		display: table-cell;
		vertical-align: middle;
		color: #555;
		position: absolute;
		bottom: 10px;
		width: 100%;
		text-align: center;
	}
	
	@media(min-width:768px) {
		.intro {
			height: 100%;
			padding: 0;
			display: table;
			width: 100%;
			text-align: center;
			background: url(../assets/background_h.jpg) no-repeat center center;
			background-color: #fff;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			background-size: cover;
			-o-background-size: cover;
		}
		.intro .intro-body {
			position: absolute;
			bottom: 20px;
			width: 100%;
			text-align: center
		}
	}
</style>