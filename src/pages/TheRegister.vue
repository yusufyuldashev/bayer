<template>
  <div>
    <base-dialog :show="!!error" title="An error ocured!!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoadin" title="Authendicating..." fixed>
      <p>Authendicating ...</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <form class="w-25 mx-auto" @submit.prevent="submitForm">
      <h3 class="text-center">Sign Up</h3>

      <div class="form-group pb-2">
        <label class="font-weight-bold">
          First Name
        </label>
        <input
          type="text"
          class="form-control register__input"
          placeholder="First Name"
          v-model.trim="first_Name"
        />
      </div>

      <div class="form-group pb-2">
        <label class="font-weight-bold">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          v-model.trim="last_Name"
          placeholder="Last Name"
        />
      </div>

      <div class="form-group pb-2">
        <label class="font-weight-bold">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          v-model.trim="email"
          placeholder="Email"
        />
        <!-- <p v-if="emails">Please enter a valid email !</p> -->
      </div>
      <div class="form-group pb-2">
        <label class="font-weight-bold">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model.trim="password"
        />
      </div>
      <div class="form-group pb-2">
        <label class="font-weight-bold">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          v-model.trim="password_confirm"
        />
      </div>
      <p class="text-danger" v-if="!formIsValid">
        Please fill all empty places correctly with valid data!
      </p>
      <div class="wrapper">
        <button class="btn btn-primary btn-clock mt-2">
          Sign Up
        </button>
        <div class="routers">
          <router-link to="login">Sign in</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Register',
  data() {
    return {
      first_Name: '',
      last_Name: '',
      email: '',
      password: '',
      mode: 'login',
      password_confirm: '',
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
      if (
        this.first_Name === '' ||
        this.last_Name === '' ||
        !this.email.includes('@') ||
        this.password.length < 4 ||
        this.password_confirm.length < 4
      ) {
        this.formIsValid = false
        return
      }
      this.isLoadin = true

      try {
        await this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })

        this.$router.replace('/bayer')
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
form {
  margin-top: 50px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 768px) {
  form {
    width: 90% !important;
    input {
      width: 100%;
    }
  }
}
</style>
