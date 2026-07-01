<template>
    <svg
  class="wave-bg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1422 800"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="oooscillate-grad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="hsl(206, 75%, 49%)" />
      <stop offset="100%" stop-color="hsl(331, 90%, 56%)" />
    </linearGradient>
  </defs>

  <g
    stroke="url(#oooscillate-grad)"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
  >
    <path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="0.18"/>
    <path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.80"/>
    <path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.27"/>
    <path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.92"/>
    <path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.13"/>
    <path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.89"/>
    <path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.32"/>
    <path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.16"/>
    <path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.25"/>
    <path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.72"/>
    <path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.89"/>
    <path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.14"/>
    <path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.77"/>
    <path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.84"/>
    <path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.43"/>
    <path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.61"/>
    <path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.75"/>
    <path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.81"/>
    <path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.54"/>
    <path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.37"/>
    <path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.29"/>
    <path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.42"/>
    <path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.96"/>
    <path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.21"/>
    <path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.36"/>
  </g>
</svg>
</template>
<style>
.wave-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.wave-bg g {
  animation: waveMove 12s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes waveMove {
  0% {
    transform: translateY(0) scaleX(1);
  }
  100% {
    transform: translateY(-40px) scaleX(1.05);
  }
}
</style>