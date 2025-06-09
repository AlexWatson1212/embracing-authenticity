---
layout: default
title: Fear
permalink: /emotion/fear/
description: "Explore blog posts about fear — the experience of anxiety, uncertainty, and overwhelm."
---

# Fear

> “Fear doesn’t stop death. It stops life.”  
> — Unknown

[🎧 Listen to a playlist for fear](https://music.youtube.com/playlist?list=PLyM8K9BoUoR2My7_7QKrb4zwWzFaN0Wkh)

---

{% for post in site.posts %}
  {% if post.emotions contains "fear" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
