<template>
  <div class="w-25 mx-auto signin wrapper">
    <base-dialog :show="!!error" title="An error ocured!!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoadin" title="Authendicating..." fixed>
      <p>Authendicating ...</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <h3 class="text-center">Sign In</h3>
    <form class="px-4 py-3 formI" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="exampleDropdownFormEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleDropdownFormEmail1"
          placeholder="email@example.com"
          v-model.trim="email"
        />
      </div>
      <div class="form-group">
        <label for="exampleDropdownFormPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleDropdownFormPassword1"
          placeholder="Password"
          v-model.trim="password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">
      New around here?
      <router-link to="/register">Sign up</router-link>
    </a>
    <!-- <a class="dropdown-item" href="#">Forgot password?</a> -->
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      error: null,
      isLoadin: false,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthendicated
    },
  },
  methods: {
    handleError() {
      this.error = null
    },
    async submitForm() {
      this.formIsValid = true

      if (this.email === '' || this.password.length < 4) {
        this.formIsValid = false
        return
      }
      this.isLoadin = true
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        if (this.isLoggedIn === true) {
          this.$router.replace('/bayer')
        }
      } catch (err) {
        this.error =
          err.message ||
          'failed to authendicate , try  later check  your login data'
      }
      this.isLoadin = false
    },
  },
}
</script>

<style scoped lang="scss">
// @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js');
.signin {
  margin-top: 100px;
}

@media only screen and (max-width: 768px) {
  .w-25 {
    width: 100% !important;
  }
}
</style>
