<template>
  <div class="header-container">
    <div class="container">
      <header class="header">
        <h1 class="header-title">Новый гороскоп на 2021 год!</h1>
        <span class="header-txt">Узнайте, что Вас ждёт.</span>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-container {
  background: #315dfa;
}

.header {
  color: #afdce5;
  padding: 12px 0;
  font-weight: 700;
}

.header-title {
  font-size: 1.0625em; /* 17px */
}

.header-txt {
  font-size: 0.625em; /* 10px */
}

@media screen and (min-width: 1024px) {
  .header-title {
    font-size: 1em; /* 16px */
  }

  .header-txt {
    font-size: 1.25em; /* 20px */
  }
}
</style>
