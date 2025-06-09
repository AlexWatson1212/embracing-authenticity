---
layout: default
title: Anger
permalink: /emotion/anger/
description: "Explore blog posts about anger — the response to boundaries being crossed, injustice, or unmet needs."
---

# Anger

> “Anger is what pain looks like when it shows itself in public.”  
> — Krista Tippett

[🎧 Listen to a playlist for anger](https://music.youtube.com/playlist?list=PLyM8K9BoUoR1Vs91sE0ZfhKReaN0hqOIv)

---

{% for post in site.posts %}
  {% if post.emotions contains "anger" %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="excerpt">{{ post.description | default: post.excerpt | strip_html | truncatewords: 24 }}</p>
  </article>
  {% endif %}
{% endfor %}
