<template>
  <div ref="instagramEmbed">
    <blockquote
      class="instagram-media"
      :data-instgrm-permalink="permalink"
      data-instgrm-captioned
      data-instgrm-version="14"
    >
      </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    permalink: {
      type: String,
      required: true,
    },
  },
  mounted() {
    if (typeof window.instgrm !== 'undefined') {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.instgrm.Embeds.process();
      };
    }
  },
};
</script>