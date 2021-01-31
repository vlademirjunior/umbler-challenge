<template>
  <div id="app">
    <b-container class="p-0" fluid>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand to="/">Umbler Challenge</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <router-view />
  </div>
</template>