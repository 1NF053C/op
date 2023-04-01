---
title: (Explanation) How Go Checks Dependency Hashes
description: Explanation of these terms 
date: 2023-03-31
tags:
  - explanation
  - security
  - go
  - dependencies
  - authentication
---

# <u>Context</u>
Consider an "albums" webservice in go using the gin web framework such that, when you visit {% highlight "sh" %}http://localhost:8080/albums{% endhighlight %} it returns the following json:

{% highlight "json" %}
[
    {
        "id": "1",
        "title": "Blue Train",
        "artist": "John Coltrane",
        "price": 56.99
    },
    {
        "id": "2",
        "title": "Jeru",
        "artist": "Gerry Mulligan",
        "price": 17.99
    },
    {
        "id": "3",
        "title": "Sarah Vaughan and Clifford Brown",
        "artist": "Sarah Vaughan",
        "price": 39.99
    }
]
{% endhighlight %}

# <u>Downloading and authenticating modules</u>

Such a webservice will have an import statement like:

{% highlight "go" %}
import (
    "net/http"

    "github.com/gin-gonic/gin"
)
{% endhighlight %}

and running:

{% highlight "sh" %}
go mod tidy
# go: downloading github.com/stretchr/testify v1.8.1
# go: downloading github.com/go-playground/assert/v2 v2.2.0
# ... omitted
{% endhighlight %}

will add external modules as a requirement in "go.mod" and create a "go.sum" for use in authenticating modules.

{% highlight "sh" %}
# directory tree
album-service/
    |
    |--- go.mod
    |--- go.sum # created
    |--- main.go

{% endhighlight %}

Go downloads a file (go.mod or zip) and computes a cryptographic hash and compares it with with the corresponding line in the main module’s go.sum file to verify the file hasn't changed since it was first downloaded.

- If a go.mod file was downloaded, the hash is computed based off of its file content.
- If a zip file was downloaded, the hash is computed deterministically. The zipped content's file order, compression, alignment, and other metadata do not impact the hash.

{% highlight "sh" %}
# file: go.sum
github.com/davecgh/go-spew v1.1.1 h1:vj9j/u1bqnvCEfJOwUhtlOARqs3+rkHYY13jYWTU97c=
github.com/davecgh/go-spew v1.1.1/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=
github.com/gin-contrib/sse v0.1.0 h1:Y/yl/+YNO8GZSjAhjMsSuLt29uWRFHdHYUb5lYOV9qE=
github.com/gin-contrib/sse v0.1.0/go.mod h1:RHrZQHXnP2xjPF+u1gW/2HnVO7nvIa9PG3Gm+fLHvGI=
github.com/gin-gonic/gin v1.9.0 h1:OjyFBKICoexlu99ctXNR2gg+c5pKrKMuyjgARg9qeY8=
# ... omitted
{% endhighlight %}

# <u>Resources</u>
- <a target="_blank" ref="noopener noreferrer" href="https://go.dev/ref/mod#authenticating">https://go.dev/ref/mod#authenticating</a>
- <a target="_blank" ref="noopener noreferrer" href="https://go.dev/ref/mod#go-sum-files">https://go.dev/ref/mod#go-sum-files</a>
- <a target="_blank" ref="noopener noreferrer" href="https://pkg.go.dev/golang.org/x/mod/sumdb/dirhash">https://pkg.go.dev/golang.org/x/mod/sumdb/dirhash</a>
- <a target="_blank" ref="noopener noreferrer" href="https://go.dev/doc/modules/gomod-ref">https://go.dev/doc/modules/gomod-ref</a>
- <a target="_blank" ref="noopener noreferrer" href="https://golangbyexample.com/go-mod-sum-module/">https://golangbyexample.com/go-mod-sum-module</a>
