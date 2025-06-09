---
layout: default
title: Longing
permalink: /emotion/longing/
description: "Explore blog posts about longing — the ache for what could have been, what was lost, or what’s still deeply needed."
---

# Longing

> “Longing is the agony of the nearness of the distant.”  
> — Martin Heidegger

[🎧 Listen to a playlist for longing](https://music.youtube.com/playlist?list=PLyM8K9BoUoR1WxKj-LZMlG4CSmf5AxuPa)

---

{% for post in site.posts %}
  {% if post.emotions contains "longing" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
