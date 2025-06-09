---
layout: default
title: Joy
permalink: /emotion/joy/
description: "Explore blog posts about joy — the feeling of freedom, aliveness, peace, and presence in the moment."
---

# Joy

> “Joy is not in things; it is in us.”  
> — Richard Wagner

[🎧 Listen to a playlist for joy](https://music.youtube.com/playlist?list=PLyM8K9BoUoR3F9Hy6Iek8VcL79VCtHVYB)

---

{% for post in site.posts %}
  {% if post.emotions contains "joy" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
