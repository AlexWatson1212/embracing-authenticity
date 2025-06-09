---
layout: default
title: Love
permalink: /emotion/love/
description: "Explore blog posts about love — the warmth of connection, presence, and being held without condition."
---

# Love

> “Love is the only sane and satisfactory answer to the problem of human existence.”  
> — Erich Fromm

[🎧 Listen to a playlist for love](https://music.youtube.com/playlist?list=PLyM8K9BoUoR20q1qfMBhRboS_HHMIk91k)

---

{% for post in site.posts %}
  {% if post.emotions contains "love" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
