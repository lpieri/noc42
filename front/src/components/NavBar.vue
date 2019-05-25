<template>
	<nav id="NavBar" class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">

			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="NavBarContent" class="navbar-menu">
			<a class="navbar-item">
				Home
			</a>

			<a class="navbar-item">
				Documentation
			</a>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>

<style>
#NavBarContent {
	justify-content: center;
}
</style>