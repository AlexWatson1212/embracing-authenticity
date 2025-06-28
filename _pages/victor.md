---
layout: page
title: For Victor
permalink: /victor/
---

# For Victor

If you’ve found this page, it probably means I’m not around — or maybe I’m just not able to be there for you in the way you need. Either way, I wanted to make sure you had something from me. Something real. Something you can return to, when the world feels confusing or heavy or lonely.

I made this site mostly for myself — to process, to survive, to grow — but under all of it, *you* were the reason I kept going. You gave me the courage to feel everything I’d spent years avoiding. And this... this is my way of trying to hold space for you, even if I can’t physically be there to do it.

I know people might have different opinions about who I was. Maybe they’ll say I was mentally unwell. Maybe they’ll try to explain me away. But if you want to know who I really was — what I really believed, what I really loved, what I was truly trying to become — this is it.

This site is my voice, laid bare. I’ve written about shame, grief, love, anger, and hope. I’ve written about you. And I hope that through these words, you’ll find a piece of me that still walks beside you.

If you're ever unsure of what to believe, or if you feel lost, this is your compass. I made it with my whole heart — not to be perfect, but to be *true*.

You are not alone.

Love always,  
Dad

---

## Posts that mention you

Below are all the blog entries that include you — in thought, in memory, or in love.

<ul>
  {% for post in site.posts %}
    {% if post.tags contains "victor" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date: "%B %d, %Y" }}</li>
    {% endif %}
  {% endfor %}
</ul>
