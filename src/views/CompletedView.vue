<template>
  <section class="completed">
    <h2 class="completed-title">Обработка Ваших данных:</h2>
    <div class="completed-line-container">
      <div class="completed-line">
        <span>20%</span>
      </div>
    </div>
    <div class="completed-txt-container">
      <span class="completed-txt"
        >Анализ введенных данных . . . . . . .
        <span
          class="green"
          v-if="downloads.a == true && $store.state.complete == true"
          >Выполнено!
        </span></span
      >
      <span class="completed-txt"
        >Коррекция астрологического знака . . . . . . .
        <span class="green" v-if="downloads.b == true">Выполнено!</span></span
      >
      <span class="completed-txt"
        >Расчет вариаций ответов . . . . . . .
        <span class="green" v-if="downloads.c == true">Выполнено!</span></span
      >
      <span class="completed-txt"
        >Генерация предсказания . . . . . . .
        <span class="green" v-if="downloads.d == true">Выполнено!</span></span
      >
      <span class="completed-txt"
        >Сохранение результата . . . . . . .
        <span class="green" v-if="downloads.e == true">Выполнено!</span></span
      >
      <span class="completed-txt"
        >Поиск свободного оператора . . . . . . .
        <span class="green" v-if="downloads.f == true">Выполнено!</span></span
      >
      <span class="completed-txt"
        >Начала озвучки и записи аудио-сообщения . . . . . . .
      </span>
    </div>
    <span class="download">ИДЁТ ЗАПИСЬ!</span>
    <span class="ready" v-if="downloads.f == true">ГОТОВО!</span>
  </section>
</template>

<script>
export default {
  data() {
    return {
      downloads: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
      },
    };
  },
  methods: {
    aTrue() {
      setTimeout(() => {
        this.downloads.a = true;
        setTimeout(() => {
          this.downloads.b = true;
          setTimeout(() => {
            this.downloads.c = true;
            setTimeout(() => {
              this.downloads.d = true;
              setTimeout(() => {
                this.downloads.e = true;
                setTimeout(() => {
                  this.downloads.f = true;
                  this.$router.push("/Call");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    },
  },
  computed: {
    complete() {
      return this.$store.state.complete;
    },
  },
  watch: {
    complete() {
      if (this.$store.state.complete == true) {
        this.aTrue();
      }
    },
  },
};
</script>

<style>
.completed {
  padding: 30px 0;
}
.completed-title {
  font-size: var(--h1);
  color: #343b4d;
  margin-bottom: 20px;
}

.completed-line-container {
  height: 40px;
  position: relative;
  background: #f3f4f8;
  margin-bottom: 20px;
}

.completed-line {
  height: 100%;
  position: absolute;
  left: 0;
  width: 20%;
  background: #419330;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.completed-txt-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.completed-txt {
  font-weight: 300;
  font-size: 12px;
}

.green {
  color: #419330;
}

.download {
  color: #d0070f;
  font-weight: 700;
  display: block;
  margin-bottom: 40px;
}
.ready {
  color: #343b4d;
  font-weight: 700;
  display: block;
}
</style>
