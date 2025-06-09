---
layout: default
title: Emotions
permalink: /emotions/
---

# Explore by Emotion

This is a space for learning how to feel more freely — especially if you weren’t taught how.  
Each emotion below links to blog posts where that feeling is explored, reflected on, or simply held with care.

Use this page to find what you need.  
Sometimes naming it is the first step.

---

<ul class="emotion-list">
  {% assign emotions = "grief,shame,fear,anger,loneliness,hope,love,joy,longing,acceptance" | split: "," %}
  {% for emotion in emotions %}
    <li>
      <h3><a href="/emotion/{{ emotion }}">{{ emotion | capitalize }}</a></h3>
      <p>
        {% case emotion %}
          {% when "grief" %} Loss and letting go
          {% when "shame" %} Feeling not good enough or fundamentally flawed
          {% when "fear" %} Anxiety, uncertainty, and overwhelm
          {% when "anger" %} Resentment, injustice, or crossed boundaries
          {% when "loneliness" %} Disconnection and isolation
          {% when "hope" %} Light, renewal, and the belief in change
          {% when "love" %} Warmth, connection, and safety
          {% when "joy" %} Peace, freedom, and celebration
          {% when "longing" %} Desire for what we’ve missed or needed
          {% when "acceptance" %} Integration, peace, and inner wholeness
        {% endcase %}
      </p>
    </li>
  {% endfor %}
</ul>
