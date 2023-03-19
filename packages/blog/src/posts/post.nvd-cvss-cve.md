---
title: CVSS, CVE, CWE, SCAP, NVD
description:
date: 2023-05-19
tags:
  - cve
  - cwe
  - nvd
  - scap
  - cvss
  - security
  - fundamentals
---

## <u>Takeaway:</u>
You use **CVSS** to determine urgency and priority of response to **CVEs** and to produce modified scores based on factors that are specific to your system. **CVE** identifiers and severity scores assigned by the **CVSS** are used to categorize and track vulnerabilities in the **NVD**, which can be consumed by security tools that support the **SCAP** standard. **CVEs** may be classified by **CWE** categories to provide more details about the nature of the vulnerability.

### <u>Do you need to know how CVSS produces a score?</u>
Yes, since you have to produce modified CVSS scores to match the context of your system. You also will want to update these scores as you make changes to your system.

### <u>How does the CVSS calculate a score?</u>
The CVSS determines a score based on various factors (base metrics, temporal metrics, and environmental metrics).
For more information, an interactive calculator and a self-paced course on CVSS see: https://www.first.org/cvss/.

### <u>Does CVSS determine risk or severity?</u>
CVSS determines severity, not risk. You specify some risk factors as part of the input. The output is a qualitative measure of severity which helps you determine the urgency and priority of response. In other words, you must determine some components of risk in order to calculate a severity score.

### <u>What does the process of patching a CVE look like?</u>

  1. > Choose a CVE that may be impacting your system.

  2. > Visit the NVD website and enter the CVE identifier in the search box.

  3. > Look for the CVE entry, which includes a detailed description of the vulnerability, severity rating, and a list of affected products and versions.

  4. > Scroll down to the "References" section of the CVE entry and look for links to vendor advisories or patches related to the vulnerability.

  5. > Click the links provided in the "References" section to review the vendor advisories or patches and follow the instructions provided to patch the vulnerability.

  6. > Incorporate factors specific to your system and recompute the CVS score to determine new urgency and priority. Find a self-paced course on how to calculate CVSS scores here: <a target="_blank" rel="noopener noreferrer" href="https://www.first.org/cvss">https://www.first.org/cvss</a>

## <u>Definitions</u>

### SCAP
Security Content Automation Protocol (SCAP) is a standard for expressing security-related information.

### NVD
National Vulnerability Database (NVD) is a database of known vulnerabilities.

### CVE
Common Vulnerabilities and Exposures (CVE) is a standardized naming scheme for publicly known vulnerabilities.

### CVSS
Common Vulnerability Scoring System (CVSS) is a framework for assessing the severity of vulnerabilities. 

### CWE
Common Weakness Enumeration (CWE) is a community-developed list of common software security weaknesses that provides a standard language for describing software security weaknesses in a consistent and comprehensive manner.

## <u>Resources</u>
- <a target="_blank" ref="noopener noreferrer" href="https://csrc.nist.gov/projects/security-content-automation-protocol">https://csrc.nist.gov/projects/security-content-automation-protocol</a>
- <a target="_blank" rel="noopener noreferrer" href="https://nvd.nist.gov/">https://nvd.nist.gov/</a>
- <a target="_blank" rel="noopener noreferrer" href="https://www.first.org/cvss">https://www.first.org/cvss</a>
- <a target="_blank" ref="noopener noreferrer" href="https://csrc.nist.gov/glossary/term/common_vulnerabilities_and_exposures">https://csrc.nist.gov/glossary/term/common_vulnerabilities_and_exposures</a>
- <a target="_blank" ref="noopener noreferrer" href="https://samate.nist.gov/BF/Enlightenment/CWE.html">https://samate.nist.gov/BF/Enlightenment/CWE.html</a>