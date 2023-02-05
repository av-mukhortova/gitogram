<template>
  <div class="auth">
    <div class="auth__logo">
      <logo />
    </div>
    <div class="auth__content">
      More than just one repository.<br />This is our digital world.
    </div>

    <div class="auth__btn">
      <x-button size="m" @click="getCode">
        <div class="auth__btn-content">
          <span>Authorize with github</span>
          <icon name="git" />
        </div>
      </x-button>
    </div>

    <div class="auth__img">
      <img src="../../assets/comp.png" />
    </div>

    <div class="auth__link">
      <span>© Gitogram from Loftschool</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { logo } from '../../components/logo';
import { button as xButton } from '../../components/button';
import { icon } from '../../icons';
import env from '../../../env';

export default {
  components: { logo, xButton, icon },
  methods: {
    ...mapActions({
      getToken: 'auth/getToken',
    }),
    getCode() {
      const gethubAuthApi = 'https://github.com/login/oauth/authorize';
      const params = new URLSearchParams();
      params.append('client_id', env.clientId);
      params.append('scope', 'repo:status public_repo read:user');
      window.location.href = `${gethubAuthApi}?${params}`;
    },
  },
  async mounted() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      const token = await this.getToken(code);
      localStorage.setItem('token', token);
      this.$router.replace({ name: 'home' });
    }
  },
};
</script>

<style lang="scss" src="./auth.scss" scoped></style>
