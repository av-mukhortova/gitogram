<template>
  <div>
    <button @click="getCode">Enter</button>
  </div>
</template>

<script>
import env from '../../../env';

export default {
  methods: {
    getCode() {
      const gethubAuthApi = 'https://github.com/login/oauth/authorize';
      const params = new URLSearchParams();
      params.append('client_id', env.clientId);
      params.append('scope', 'repo:status read:user');
      window.location.href = `${gethubAuthApi}?${params}`;
    },
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      const response = await fetch('https://webdev-api.loftschool.com/github', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: env.clientId,
          code,
          clientSecret: env.clientSecret,
        }),
      });
      const { token } = await response.json();
      localStorage.setItem('token', token);
      this.$router.replace({ name: 'home' });
    }
  },
};
</script>

<style lang="scss" scoped></style>
