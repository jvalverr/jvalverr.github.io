---
layout: page
title: Projects
permalink: /projects/
description: >-
  Applied AI case studies in Large Language Models, healthcare, education,
  enterprise systems and government, connecting rigorous research with
  real-world implementation in Latin America.
nav: true
nav_order: 3
horizontal: false
# Every project's `category` must be one of these slugs, or it will not be listed on this page.
display_categories:
  - ai-for-cybersecurity
  - ai-for-government-and-society
  - ai-for-education-and-cyberlearning
  - ai-for-software-engineering
  - ai-for-healthcare
  - urban-and-enterprise-analytics
  - social-network-analysis
# Readable section titles for the category slugs above (slugs stay as anchors and in each project's `category`)
category_titles:
  ai-for-cybersecurity: AI for Cybersecurity & Critical Systems
  ai-for-government-and-society: AI for Government & Society
  ai-for-education-and-cyberlearning: AI for Education & Cyberlearning
  ai-for-software-engineering: AI for Software Engineering
  ai-for-healthcare: AI for Healthcare
  urban-and-enterprise-analytics: Urban & Enterprise Analytics
  social-network-analysis: Social Network Analysis
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ page.category_titles[category] | default: category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
