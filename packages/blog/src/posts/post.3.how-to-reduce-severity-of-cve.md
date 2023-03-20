---
title: (Guide) How to reduce severity of a CVE
description:
date: 2023-03-19
tags:
  - cve
  - how
  - security
  - fundamentals
---

  1. > Choose a CVE that may be impacting your system.

  2. > Look up the CVE using something like <a target="_blank" rel="noopener noreferrer" href="https://nvd.nist.gov/vuln/search/">https://nvd.nist.gov/vuln/search/</a> or <a target="_blank" rel="noopener noreferrer" href="https://cve.mitre.org/cve/search_cve_list.html">https://cve.mitre.org/cve/search_cve_list.html</a>

  3. > Open the CVE entry, and review revelant information such as description of the vulnerability, severity rating, and a list of affected products and versions.

  4. > Review information linked in "References" section of the CVE entry such as vendor advisories or patches related to the vulnerability.

  5. > Review information linked in any associated CWEs.

  6. > Incorporate factors specific to your system and recompute the CVSS score to determine new urgency and priority. Find a self-paced course on how to calculate CVSS scores here: <a target="_blank" rel="noopener noreferrer" href="https://www.first.org/cvss">https://www.first.org/cvss</a>
   
  7. > Follow instructions provided to patch the vulnerability or determine path forward that incorporates characteristics that are specific to your system and recompute the CVSS.

  8. > Repeat steps 3 to 7 until CVSS score is below your target severity threshold.
