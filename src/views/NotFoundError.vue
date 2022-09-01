<template>
  <div class="not-found-error">
    <vs-row>
      <vs-col class="not-found-error__text" vs-w="12">
        <vs-icon icon="dangerous" size="150px" color="#d62828" />
      </vs-col>

      <vs-col class="not-found-error__text">
        <h2 class="not-found-error__text--large-header">Not Found!</h2>
        <h3 class="not-found-error__text--small-header"
          >The page you're are looking for doesn't exist</h3
        >
      </vs-col>

      <vs-col class="not-found-error__button" vs-w="12">
        <vs-button type="filled" icon="home" to="/"> Go Back Home </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'NotFoundError',
};
</script>

<style lang="scss" scoped>
.not-found-error {
  &__text {
    margin-bottom: 4rem;
    text-align: center;

    &--large-header {
      color: #03045e;
    }

    &--small-header {
      color: #023e8a;
    }
  }

  &__button {
    margin: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
