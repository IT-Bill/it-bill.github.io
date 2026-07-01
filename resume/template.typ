#let accent-blue = rgb("#0563c1")

#let cv-link(url, label) = link(url)[
  #text(fill: accent-blue)[#underline[#label]]
]

#let cv-line(body, size: auto, below: 8.6pt) = block(width: 100%, below: below)[
  #if size == auto {
    body
  } else {
    text(size: size)[#body]
  }
]

#let cv-section(title, above: 16pt) = {
  v(above)
  block(width: 100%, below: 8.6pt, sticky: true)[
    #text(size: 12pt, weight: "bold")[#underline[#title]]
  ]
}

#let cv-entry(body, title: [], date: none, title-size: 9pt, line-below: 0pt) = {
  block(width: 100%, below: 8.6pt, sticky: true)[
    #grid(columns: (1fr, auto), column-gutter: 8pt)[
      #text(size: title-size, weight: "bold")[#title]
    ][
      #align(right)[
        #if date != none {
          text(size: title-size, weight: "bold")[#date]
        }
      ]
    ]
  ]
  body
  v(line-below)
}

#let cv-skill(label, body, size: auto) = cv-line(size: size, below: 8.6pt)[
  #strong[#label:] #body
]

#let cv-resume(
  body,
  lang: "en",
  fonts: ("Times New Roman", "Songti SC"),
  body-size: 9pt,
  body-leading: 0.88em,
  line-spacing: 2.4pt,
  header-left: [],
  header-right: [],
  name: [],
  contact: [],
  address: [],
) = {
  set document(author: "Zhanwei Zhang", title: "Zhanwei Zhang CV")
  set page(
    paper: "a4",
    margin: (top: 72pt, right: 54pt, bottom: 72pt, left: 54pt),
    header-ascent: 58%,
    header: grid(columns: (1fr, 1fr))[
      #text(size: 9pt)[#header-left]
    ][
      #align(right)[#text(size: 9pt)[#header-right]]
    ],
    footer: none,
  )
  set text(font: fonts, size: body-size, lang: lang)
  set par(leading: body-leading, spacing: 0pt, justify: false)
  show link: it => it

  align(center)[
    #v(10pt)
    #block(width: 100%, below: 14pt)[#text(size: 14pt, weight: "bold")[#name]]
    #block(width: 100%, below: 7.6pt)[#text(size: 10pt)[#contact]]
    #block(width: 100%)[#text(size: 10pt)[#address]]
  ]

  v(12pt)
  body
}
