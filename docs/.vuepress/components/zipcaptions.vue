<template>
  <div class="zip-captions-page">
    <h1>Zip Captions - Live Captioning for the Future</h1>
    <p>Zip Captions is a free, easy-to-use live captioning tool that works directly in your web browser. It provides real-time text transcription of audio content, making it accessible to people who are deaf or hard of hearing.</p>
    <a href="https://zipcaptions.app" class="button">Check out Zip Captions today</a>

    <section class="core-functions">
      <h2>What are the core functions of Zip Captions?</h2>
      <div class="content-row">
        <img src="/images/zippreview.png" alt="Zip Captions" title="Zip Captions" class="preview-image" />
        <div class="text-content">
          <ul>
            <li>Free to use: No subscription or payment required.</li>
            <li>Easy to use: No complicated setup or software installation needed.</li>
            <li>Accurate: Provides accurate and timely captions.</li>
            <li>Customizable: Allows you to adjust font size, color, and other settings.</li>
            <li>Shareable: You can share your captions with others.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="broadcast-captions">
      <h2>Broadcast your captions</h2>
      <div class="content-row">
        <p class="text-content">Broadcasting your captions allows you to get them to wherever the end viewer is located. Whether this is in the same room, or on the other side of the world, your viewers can follow along with your captions in realtime on their own device. This not only frees up real estate on your main screen, but allows your viewers to customise their own captioning view. With static share codes, the possibilities are endless.</p>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OXpaiEtECmI?si=f2T4ORGnv7TEPyf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="transcribe-say">
      <h2>Transcribe what you say</h2>
      <div class="content-row reverse">
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sF7n1X1oIFY?si=v1gFJ-SZGtZjVd9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="text-content">Easily transcribe everything that you say so that you can use it again later. Whether this be the minutes for a meeting, notes for a lecture or class, or just a record of what was said, the possibilities are endless. Your transcripts are stored securely in your browser and not on our servers, meaning that the only person who has access to what you said is you! Plus, once your're finished you can download them as an SRT, VTT or TXT file! Perfect for captioning that next video.</p>
      </div>
    </section>

    <section class="live-stream-obs">
      <h2>Live stream with OBS</h2>
      <div class="content-row">
        <p class="text-content">With built in support for OBS, Zip Captions is a vital part of your live streaming toolkit. Simply set up websockets with OBS and Zip Captions and your captions will appear on your live streaming platform in realtime as you stream. This not only makes your stream more accessible, but it also opens up your stream to a wider audience.</p>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QYz4Brh66YA?si=SuBN-KoPIw7t6YdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="even-more">
      <h2>Zip Captions does even more</h2>
      <ul>
        <li>Choose a dialect to get more accurate captioning</li>
        <li>Choose from our AI powered captioning engine to get even better results</li>
        <li>Change the layout to make it suit your needs</li>
        <li>Caption in many languages</li>
      </ul>
      <a href="https://zipcaptions.app" class="button">Check out Zip Captions today</a>
    </section>

    <div class="links">
      <a href="https://help.zipcaptions.app">See what's new and get help with Zip Captions</a>
      <br>
      <a href="./pricing.html">Check out our Pricing for our AI based captions</a>
    </div>
  </div>
</template>

<style scoped>
.zip-captions-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.content-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;
}

.content-row.reverse {
  flex-direction: row-reverse;
}

.preview-image {
  max-width: 100%;
  height: auto;
  margin-right: 20px;
}

.text-content {
  flex: 1;
  padding: 10px;
}

.video-container {
  flex: 1;
  padding: 10px;
}

.video-container iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

.links {
  margin-top: 40px;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-row {
    flex-direction: column;
  }

  .preview-image,
  .text-content,
  .video-container {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .content-row.reverse {
    flex-direction: column;
  }
}
</style>