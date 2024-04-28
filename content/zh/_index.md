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
      title: 技能
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: admin
    design:
      columns: '1'
  - block: experience
    content:
      title: 经历
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: 2024 Apr
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: 计算机科学与技术学士
          company: 南方科技大学
          company_url: 'https://www.sustech.edu'
          company_logo: sustech
          location: 中国，深圳
          date_start: '2021-09-01'
          date_end: ''
          description: |2-
            Major in Computer Science and Technology at SUSTech, guided by 
            <a href="https://yepangliu.github.io/"><strong>Professor Yepang Liu</strong></a>.
        - title: 访问学者
          company: 滑铁卢大学
          company_url: 'https://uwaterloo.ca/'
          company_logo: uw
          location: 加拿大，滑铁卢
          date_start: '2024-03-01'
          date_end: '2024-08-31'
          description: 
            Participate in a research project on software logging at the University of Waterloo.
            The project focused on the analysis of logging data across various programming languages and applying such insights to improve software quality assurance processes.
            This research was conducted under the guidance of 
            <a href="https://ece.uwaterloo.ca/~wshang/"><strong>Professor Weiyi Shang</strong></a>.
    design:
      columns: '1'

  - block: portfolio
    id: projects
    content:
      title: 项目
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
        - name: 所有
          tag: '*'
        - name: 课程
          tag: 课程
        - name: 研究
          tag: 研究
        - name: 饭堂
          tag: 饭堂
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
      subtitle: ''
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
      subtitle: Under construction...
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
      email: 12110817@mail.sustech.edu.cn
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
