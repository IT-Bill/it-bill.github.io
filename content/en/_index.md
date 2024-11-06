---
# Leave the homepage title empty to use the site title
title: ''
date: 2024-04-26
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: skills
    content:
      title: Skills
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Apr 2024
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: B.Eng. in Computer Science and Engineering
          company: SUSTech
          company_url: 'https://www.sustech.edu'
          company_logo: sustech
          location: Shenzhen, China
          date_start: '2021-09-01'
          date_end: ''
          description: |2-
            Major in Computer Science and Engineering at SUSTech, guided by 
            <a href="https://yepangliu.github.io/" target="_blank"><strong>Professor Yepang Liu</strong></a>.
        - title: Visiting Researcher
          company: Wuhan University
          company_url: 'https://www.whu.edu.cn/'
          company_logo: whu
          location: Wuhan, China
          date_start: '2024-05-01'
          date_end: '2024-08-31'
          description: 
            Participate in a research project on software logging.
            This research was conducted under the guidance of 
            <a href="https://ece.uwaterloo.ca/~wshang/" target="_blank"><strong>Professor Weiyi Shang</strong></a> and
            <a href="https://jinfuchen.github.io/jinfu/" target="_blank"><strong>Professor Jinfu Chen</strong></a>.
        - title: Large Language Model Intern
          company: Lingxun
          company_url: 'https://www.lingxun.com/'
          company_logo: lingxun
          location: Shenzhen, China
          date_start: '2024-09-10'
          date_end: ''
          description: 
            Enhance Large Language Models using Retrieval Augmented Generation (RAG).
    design:
      columns: '1'

  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Course
          tag: Course
        - name: Research
          tag: Research
        - name: Canteen
          tag: Canteen
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false

  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: 'Under construction...'
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '1'
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
  - block: collection
    id: featured
    content:
      title: Publications
      subtitle: 
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '1'
      view: card
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # Contact (add or remove contact options as necessary)
      email: zhangzw@mail.sustech.edu.cn
      address:
        street: No. 1088 Xueyuan Avenue
        region: Shenzhen
        postcode: '518055'
        country: P.R. China
        country_code: CN
      # Choose a map provider in `params.yaml` to show a map from these coordinates
      coordinates:
        latitude: '22.6005'
        longitude: '113.9947'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '2'
---
