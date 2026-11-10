---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
redirect_from:
  - /resume
---

<h2>Contact Me</h2>
<p>Feel free to reach out through the information below:</p>

<ul>
  <li><strong>Email:</strong> danillora.batista@gmail.com or danillo.rafael@ufpe.br</li>
</ul>

<style>
  .wa-link {
    display: inline-block;
    padding: 0.3em 0.8em;
    font-size: 0.85em;
    color: #128C7E !important;
    border: 1px solid #128C7E;
    border-radius: 4px;
    text-decoration: none !important;
  }
  .wa-link:hover { background-color: #128C7E; color: #fff !important; }
</style>

<p><a id="wa-btn" class="wa-link" href="#" role="button"><i class="fab fa-fw fa-whatsapp" aria-hidden="true"></i> WhatsApp</a></p>

<script>
  // The number is assembled only on click so it never appears in the page
  // source as plain text or as a wa.me link that scrapers can harvest.
  (function () {
    var btn = document.getElementById('wa-btn');
    if (!btn) return;
    var parts = ['7365', '0958', '9185', '5']; // reversed chunks
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var n = parts.join('').split('').reverse().join('');
      window.open('https://wa.me/' + n, '_blank', 'noopener');
    });
  })();
</script>
