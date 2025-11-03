---
layout: default
title: The Neurodivergent Lens
permalink: /neurodivergent-lens
description: Gentle, practical guidance for autistic & ADHD adults—unmasking, regulating, and living at your own pace.
---

<section class="container nd-landing" aria-labelledby="ndl-title">
  <header class="ndl-hero">
    <h1 id="ndl-title">The Neurodivergent Lens</h1>
    <p class="lead">Gentle guidance for autistic & ADHD adults—less performance, more presence.</p>

    <!-- Optional: add audio later -->
    <!-- <audio controls src="/assets/audio/ndl-intro.mp3" class="ndl-audio"></audio> -->

    <div class="ndl-tools" role="group" aria-label="Quick tools">
      <button class="ndl-toggle" data-target="#ndl-tldr" aria-expanded="false" aria-controls="ndl-tldr">TL;DR</button>
      <button class="ndl-toggle" data-target="#ndl-sos" aria-expanded="false" aria-controls="ndl-sos">SOS Box</button>
    </div>
  </header>

  <!-- Quick nav -->
  <nav class="ndl-toc" aria-label="On this page">
    <strong>Jump to:</strong>
    <a href="#why">Why this lens</a>
    <a href="#common">Common struggles</a>
    <a href="#principles">Guiding principles</a>
    <a href="#practices">Everyday practices</a>
    <a href="#overwhelm">When you feel overwhelmed</a>
    <a href="#library">Start-here library</a>
  </nav>

  <!-- TL;DR collapsible -->
  <aside id="ndl-tldr" class="ndl-collapse" hidden>
    <h2>TL;DR</h2>
    <ul>
      <li>Your nervous system leads. Pace is a skill, not a flaw.</li>
      <li>Unmasking is gradual: choose safe places & safe people.</li>
      <li>Regulation first → insight later.</li>
      <li>Small, repeatable rituals beat big promises.</li>
    </ul>
  </aside>

  <section id="why">
    <h2>Why this lens</h2>
    <p>Many of us spent years masking—performing “okay.” Healing began when we stopped forcing normal and started listening to our bodies. This page gathers the most useful, gentle practices I’ve learned for living at your own pace.</p>
  </section>

  <section id="common">
    <h2>Common struggles</h2>
    <ul>
      <li><strong>Sensory overload</strong> & the recovery time nobody sees.</li>
      <li><strong>Communication fatigue</strong> and delayed processing.</li>
      <li><strong>Hyperfocus ⇄ burnout</strong> cycles and shame after crashes.</li>
      <li><strong>Rejection sensitivity</strong>, people-pleasing, and masking.</li>
    </ul>
  </section>

  <section id="principles">
    <h2>Guiding principles</h2>
    <ol>
      <li><strong>Safety first.</strong> Regulation > productivity. Your body is the compass.</li>
      <li><strong>Authenticity over performance.</strong> Choose congruence, not polish.</li>
      <li><strong>Permission to go slowly.</strong> Nothing is late if it’s honest.</li>
      <li><strong>Body before brain.</strong> Co-regulate with breath, movement, warmth.</li>
    </ol>
  </section>

  <section id="practices">
    <h2>Everyday practices</h2>
    <ul class="checklist">
      <li><label><input type="checkbox" aria-label="Morning nervous-system check"> 2-minute morning check: body temp, breath, jaw, shoulders.</label></li>
      <li><label><input type="checkbox" aria-label="Sensory plan"> Sensory plan: headphones, sunglasses, safe snack & water.</label></li>
      <li><label><input type="checkbox" aria-label="Recovery block"> Recovery block after social/errand time (15–30 min quiet).</label></li>
      <li><label><input type="checkbox" aria-label="Gentle movement"> Gentle movement: walk, stretch, light shake.</label></li>
      <li><label><input type="checkbox" aria-label="Evening closure"> Evening closure: one line of gratitude or “what worked.”</label></li>
    </ul>
  </section>

  <!-- SOS collapsible -->
  <aside id="ndl-sos" class="ndl-collapse" hidden>
    <h2>When you feel overwhelmed</h2>
    <ol>
      <li>Put phone down; one hand on chest, one on belly. Take 4 slow breaths.</li>
      <li>Name 3 things you can see, 2 you can touch, 1 you can hear.</li>
      <li>Reduce input (lights down, headphones on, step outside/inside).</li>
      <li>Drink water. Eat something simple if hungry.</li>
      <li>Choose one tiny next step—or rest. Both are progress.</li>
    </ol>
  </aside>

  <section id="overwhelm">
    <h2>Read this when you’re overwhelmed</h2>
    <p>It’s okay to step away. Your worth isn’t measured by pace or output. You are allowed to go slowly.</p>
  </section>

  <section id="library">
    <h2>Start-here library</h2>
    <ul class="ndl-links">
      <li><a href="/self-discovery">Self-Discovery: from survival roles to real connection</a></li>
      <li><a href="/blog">Recent writings (gentle reflections you can read in small bites)</a></li>
      <li><a href="/music-therapy">Music Therapy (listen + reflect when reading feels hard)</a></li>
      <li><a href="/tags/overwhelm">Posts tagged “overwhelm”</a></li>
      <li><a href="/tags/regulation">Posts tagged “regulation”</a></li>
    </ul>
    <p class="muted small-note">Tip: Bookmark this page and use the TL;DR / SOS boxes whenever you land here.</p>
  </section>

  <footer class="ndl-footer">
    <a class="inline-link" href="/">← Back to Home</a>
  </footer>
</section>
<script>
  // Toggle TL;DR and SOS boxes
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.ndl-toggle');
    if (!btn) return;
    const targetSel = btn.getAttribute('data-target');
    const panel = document.querySelector(targetSel);
    if (!panel) return;

    const isHidden = panel.hasAttribute('hidden');
    panel.toggleAttribute('hidden', !isHidden);
    btn.setAttribute('aria-expanded', String(isHidden));
  });
</script>
