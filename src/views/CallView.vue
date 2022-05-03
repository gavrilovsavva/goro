<template>
  <section class="call">
    <div class="call-txt-container">
      <span class="call-title">Спасибо за Ваши ответы!</span>
      <span class="call-txt txt-blue"
        >Поздравляем! Прослушать свой персональный гороскоп возможно уже
        сейчас!</span
      >
      <span class="call-txt-title">2021 год Вас ошарашит!</span>
      <span class="call-txt"
        >Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите
        совсем скоро, возможно это 17-18 ноября!
      </span>
      <span class="call-txt"
        >Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и
        позвонить со своего мобильного телефона. Позвоните и Прослушайте очень
        серьезную информацию!</span
      >
    </div>
    <button class="call-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="26"
        viewBox="0 0 28 26"
        fill="none"
        class="call-btn-img"
      >
        <path
          d="M26.785 19.3459L22.0058 16.805C20.4127 15.9491 20.3587 16.5108 18.6846 18.276C18.2796 18.704 17.5236 19.8273 16.6325 19.6133C14.7694 19.1586 11.2863 16.4573 10.1522 15.2269C9.61217 14.6385 7.29005 11.8302 7.26305 10.9208C7.20905 9.52997 10.2872 8.83456 9.28815 6.18667L7.15504 1.45257C5.15694 -3.09431 -0.432344 4.1807 0.0266796 7.57748C1.21474 15.9491 16.0385 29.4827 24.3009 25.0161C26.137 23.9997 28.6211 20.4425 26.785 19.3459Z"
          fill="white"
        />
      </svg>
      ЗВОНИТЬ И СЛУШАТЬ
    </button>
  </section>
</template>

<script>
export default {};
</script>

<style>
.call {
  padding: 30px 0;
}

.call-txt-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.call-txt {
  font-size: var(--h2);
  line-height: 20px;
}

.call-title {
  font-weight: 500;
}

.txt-blue {
  color: #315dfa;
  font-weight: 500;
}

.call-txt-title {
  font-size: 18px;
  font-weight: 500;
}

.call-btn {
  font-size: var(--h2);
  background: #315dfa;
  border: 0;
  padding: 15px 0;
  color: #fff;
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}
.call-btn-img {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.call-btn:active {
  background: #355adf;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.35);
}
</style>
