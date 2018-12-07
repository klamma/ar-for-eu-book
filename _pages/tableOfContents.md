---
layout: page
title: Table of Contents
permalink: /toc/
---

<div class="trigger">
<ul class="post-list">
  {% for my_page in site.pages %}
    {% if my_page.title %}
      {% if my_page.categories == 'chapter' %}
      <li>
      <a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
      </li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>
</div>
