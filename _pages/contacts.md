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
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/danillo-rafael/" target="_blank" rel="noopener">linkedin.com/in/danillo-rafael</a></li>
  <li><strong>GitHub:</strong> <a href="https://github.com/Danillora" target="_blank" rel="noopener">github.com/Danillora</a></li>
</ul>

<p>
  <a id="wa-btn" class="btn btn--large" href="#" role="button"
     style="background-color:#25D366;color:#fff;border-color:#25D366;">
    <i class="fab fa-fw fa-whatsapp" aria-hidden="true"></i> Message me on WhatsApp
  </a>
</p>

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
