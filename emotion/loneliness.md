---
layout: default
title: Loneliness
permalink: /emotion/loneliness/
description: "Explore blog posts about loneliness — the ache of disconnection, isolation, and longing to be seen."
---

# Loneliness

> “The eternal quest of the human being is to shatter his loneliness.”  
> — Norman Cousins

[🎧 Listen to a playlist for loneliness](https://music.youtube.com/playlist?list=PLyM8K9BoUoR0PKZaGuEoV5IytYh5s3tWs)

---

{% for post in site.posts %}
  {% if post.emotions contains "loneliness" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
