---
layout: default
title: Shame
permalink: /emotion/shame/
description: "Explore blog posts about shame — the painful belief that we are not good enough or fundamentally flawed."
---

# Shame

> “Shame corrodes the very part of us that believes we are capable of change.”  
> — Brené Brown

[🎧 Listen to a playlist for shame](https://music.youtube.com/playlist?list=PLyM8K9BoUoR2Njg3KfGzD89bB7dTIzRPW)

---

{% for post in site.posts %}
  {% if post.emotions contains "shame" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
