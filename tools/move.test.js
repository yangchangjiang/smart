// https://www.miaov.com/
$(function() {
    function e(e) {
        if (v = e.offsetLeft > o.offsetLeft ? 1 : e.offsetLeft < o.offsetLeft ? 2 : 0) {
            var n = .8 * Math.abs(e.offsetLeft - o.offsetLeft);
            e.index != y && (o.style.filter = "blur(2px)",
            o.style.WebkitFilter = "blur(2px)"),
            move(o, {
                left: e.offsetLeft,
                width: e.offsetWidth
            }, n, "easeOut", function() {
                switch (v) {
                case 1:
                    t();
                    break;
                case 2:
                    i();
                    break;
                default:
                    move(l, {
                        width: 0,
                        right: 0
                    }, 30),
                    move(f, {
                        width: 0,
                        left: 0
                    }, 30)
                }
                o.style.filter = "blur(0)",
                o.style.WebkitFilter = "blur(0)"
            }),
            e.offsetLeft > o.offsetLeft ? (l.style.background = "#e15671",
            f.style.background = "url(/static/normal/images/nav_bg.gif) repeat-x",
            move(l, {
                width: 40,
                right: -20
            }, 150),
            move(f, {
                width: 40,
                left: -20
            }, 150)) : e.offsetLeft < o.offsetLeft && (l.style.background = "url(/static/normal/images/nav_bg.gif) repeat-x",
            f.style.background = "#e15671",
            move(l, {
                width: 40,
                right: -20
            }, 150),
            move(f, {
                width: 40,
                left: -20
            }, 150)),
            y = e.index
        }
    }
    function t() {
        move(l, {
            width: 0,
            right: 0
        }, 80, "linear", function() {
            l.style.background = "url(/static/normal/images/nav_bg.gif) repeat-x",
            move(l, {
                width: 20,
                right: -10
            }, 80, "linear", function() {
                move(l, {
                    width: 0,
                    right: 0
                }, 50, "linear")
            })
        }),
        move(f, {
            width: 0,
            left: 0
        }, 80, "linear", function() {
            f.style.background = "#e15671",
            move(f, {
                width: 20,
                left: -10
            }, 80, "linear", function() {
                move(f, {
                    width: 0,
                    left: 0
                }, 50, "linear")
            })
        })
    }
    function i() {
        move(l, {
            width: 0,
            right: 0
        }, 80, "linear", function() {
            l.style.background = "url(/static/normal/images/nav_bg.gif) repeat-x",
            move(l, {
                width: 20,
                right: -10
            }, 80, "linear", function() {
                move(l, {
                    width: 0,
                    right: 0
                }, 50, "linear")
            })
        }),
        move(f, {
            width: 0,
            left: 0
        }, 80, "linear", function() {
            f.style.background = "#e15671",
            move(f, {
                width: 20,
                left: -10
            }, 80, "linear", function() {
                move(f, {
                    width: 0,
                    left: 0
                }, 50, "linear")
            })
        })
    }
    var n = document.getElementsByTagName("nav")[0]
      , o = n.getElementsByClassName("box")[0]
      , l = n.getElementsByClassName("right")[0]
      , f = n.getElementsByClassName("left")[0]
      , a = n.getElementsByTagName("ul")[0]
      , s = a.getElementsByTagName("li")
      , m = n.getElementsByClassName("logo")[0]
      , r = (m.getElementsByClassName("text"),
    m.getElementsByTagName("img"))
      , g = m.getElementsByTagName("span")[0]
      , u = m.getElementsByClassName("logoAll")[0]
      , c = s[initNum].offsetLeft
      , h = s[0].offsetTop
      , d = initNum
      , y = 0
      , v = 0
      , b = !0
      , p = 0;
    o.style.left = c + "px",
    o.style.top = h + "px",
    o.style.width = s[initNum].offsetWidth + "px";
    for (var w = 0; w < s.length; w++)
        s[w].index = w,
        s[w].onmouseenter = function() {
            clearTimeout(p),
            e(this)
        }
        ;
    a.onmouseleave = function() {
        p = setTimeout(function() {
            e(s[d])
        }, 100)
    }
    ,
    m.onmouseenter = function() {
        b && (b = !1,
        r[0].style.transform = "scale(1.05)",
        r[1].style.top = "47px",
        r[2].style.top = "-25px",
        u.style.opacity = 0,
        g.style.left = "-100px",
        move(g, {
            left: 270
        }, 300, "linear", function() {
            move(r[1], {
                top: 0
            }, 300),
            move(r[2], {
                top: 0
            }, 300, "linear", function() {
                move(u, {
                    opacity: 1
                }, 300, "linear", function() {
                    b = !0
                })
            })
        }))
    }
    ,
    m.onmouseleave = function() {
        r[0].style.transform = "scale(1)"
    }
});
