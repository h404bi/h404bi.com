<template>
  <div class="tach-root">
    <Header />
    <main :class="[page.pageCoverMode ? `tach-main page-cover-mode-${page.pageCoverMode}` : 'tach-main']">
      <!-- pageCoverMode fullhd -->
      <section
        v-if="page.assets.cover && page.pageCoverMode === 'fullhd'"
        class="page-cover-fullhd">
        <saber-image class="image" :src="page.assets.cover" />
        <span class="overlay"></span>
      </section>
      <!-- page content -->
      <article class="page-content" role="main" itemscope itemtype="https://schema.org/Article">
        <div class="page-inner-wrapper tach-page-wrapper">
          <header :class="[page.assets.cover && page.pageCoverMode !== false ? `page-header page-has-cover` : 'page-header']">
            <section class="page-head-content">
              <h1 class="page-title">{{ page.title }}</h1>
              <div class="page-meta" v-if="!page.nometa">
                <section class="page-author" v-if="page.author || $siteConfig.author">
                  <span>{{ page.author || $siteConfig.author }}</span>
                </section>
                <section class="page-datetime">
                  <time
                    v-if="page.updatedAt > page.createdAt"
                    class="updated"
                    :datetime="new Date(page.updatedAt).toISOString()">
                    {{ date(page.updatedAt, '{YYYY}-{Mo}-{DD}') }}
                  </time>
                  <time
                    v-else
                    class="published"
                    :datetime="new Date(page.createdAt).toISOString()">
                    {{ date(page.createdAt, '{YYYY}-{Mo}-{DD}') }}
                  </time>
                </section>
                <section class="page-categories" v-if="page.categoriesInfo">
                  <span v-for="(item, index) in page.categoriesInfo" :key="index">
                    <span v-if="index > 0">, </span>
                    <saber-link
                      class="category"
                      :to="item.permalink">
                      {{ item.name }}
                    </saber-link>
                  </span>
                </section>
                <section class="page-multilang" v-if="page.multilang">
                  <saber-link v-if="page.multilang.en" class="multilang-en" :to="`${page.permalink}/en`">English</saber-link>
                </section>
              </div>
            </section>
            <!-- pageCoverMode mixed -->
            <section
              v-if="page.assets.cover && page.pageCoverMode !== false && page.pageCoverMode !== 'fullhd'"
              class="page-cover">
              <saber-image class="image" :src="page.assets.cover" />
              <span class="overlay"></span>
            </section>
          </header>
          <section class="page-body">
            <slot name="default" />
          </section>
          <section class="page-block-action" v-if="$themeConfig.share || page.tagsInfo">
            <div class="page-share"></div>
            <div class="page-tags" v-if="page.tagsInfo">
              <span v-for="(item, index) in page.tagsInfo" :key="index">
                  <span v-if="index > 0">, </span>
                  <saber-link
                    class="tag"
                    :to="item.permalink"
                    v-text="item.name">
                  </saber-link>
                </span>
            </div>
          </section>
          <Disqus
            v-if="page.comments !== false && $siteConfig.disqusjs"
            :page="page" />
          <!-- <footer class="page-footer"></footer> -->
        </div>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Disqus from '../components/Disqus.vue'
import { date, head } from '../utils'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    Disqus
  },
  methods: {
    date
  },
  head () {
    return head(this)
  }
}
</script>

<style lang="scss" scoped>
.page-cover {
  position: relative;
  margin-top: var(--gap-l);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

// pageCoverMode fullhd
.page-cover-mode-fullhd {
  .page-cover-fullhd {
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 60vw;
      max-height: 80vh;
      object-fit: cover;
    }
  }

  .page-head-content {
    margin: 0;
  }
}

// pageCoverMode mixed
.page-cover-mode-mixed {
  .page-cover {
    margin-top: 0;
    transition: all 0.3s ease-in-out;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  .page-head-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    margin: 0;
    z-index: 2;

    .page-title, .page-meta {
      color: #efefef;
    }
  }
}
</style>
