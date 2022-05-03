<template>
  <div class="footer-container">
    <div class="container">
      <footer class="footer">
        <span>2020 © horoscop personal</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-container {
  margin-top: auto;
}
.footer {
  padding: 10px 0;
  font-size: 0.625em; /* 10px */
  color: #d6d6d6;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .footer {
    padding: 20px 0;
    font-size: 0.75em; /* 12px */
  }
}
</style>
