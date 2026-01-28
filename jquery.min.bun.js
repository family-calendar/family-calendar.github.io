((e, t, a, n, r, i, o) => {
    let [l, d, s, c, p, h, m, g, y, b, x, f, u, w, v, k, $] = "familyxgetAttributexhasAttributexgetFullYearxshadowRootxnamexmonthxeventxcalendarxbackgroundxhighlightxbranchxcolorxxpersonxpartnersxdeath"[r]("x"), [, M, z] = e.currentScript.src[r]("/").reverse(), L = new URL(e.currentScript.src), A = (e, t = e) => L.searchParams.get(e) || t, D = e => n(e.children), T = (e, t) => e + "-" + t, H = "ex", S = "current" + m, C = (e, t) => `\n\n${e}\n  {${t}}`, I = (e, a = J[e]) => `\n  var(--${e},${t.getItem(e) || a})`, N = e => `[${e}]`, j = e => `:not(${e})`, E = e => `:host(${e}) `, F = e => `[part~="${e}"]`, P = (e, t) => e ? t : "not" + t, R = (e, t) => b + ":" + I(e) + (t ? `;${u}:${I(t)}` : w), O = T(y, b), U = T(y, u), Y = T(m, b), q = T(x, b), B = T(x + l, b), G = T(x + "hover", b), J = {
        [O]: "#bbbb66",
        [U]: "#000077",
        [Y]: "#eeeeaa",
        [q]: "#99aaee",
        [B]: "#90dddd",
        [G]: "#ffaa00"
    };
    i[z][M](A(T(l, y)), class extends HTMLElement {
        [o](a) {
            let i = this, o = (t, a = {}, n = [], r = {}) => {
                let i = e.createElement(t);
                return Object.entries(r).map((([e, t]) => i.setAttribute(e, t))), i = Object.assign(i, a), 
                i.append(...n.flat(9)), i;
            }, b = (e = w, t = w) => i[e] = o("style", {
                id: e,
                innerHTML: t
            }), x = (e, t = w) => o("slot", {
                [h]: e,
                innerHTML: t
            }), u = (e, t) => e.querySelectorAll(t), M = (e, t = w) => i[s](e) ? i[d](e) : t, [z, L, J, K, Q, V, W, X, Z, _, ee, te, ae, ne, re, ie, oe, le, de, se, ce, pe, he, me, ge] = [ [ y, "body" ], [ y, "header" ], [ l, f ], [ y, "grid" ], [ y, m ], [ g, v ], [ g, k ], [ g, $ ], [ "day", g ], [ m, h ], [ m, "events" ], [ g, "day" ], [ g, "year" ], [ g, "label" ], [ g + "label", h ], [ g, "age" ], [ $, "year" ], [ g, "icon" ], [ "emoji", "icon" ], [ "relation", "label" ], [ "icon", "bar" ], [ "iconbar", "icon" ], [ g, "column" ], [ f, h ] ].map((([e, t]) => A("prefix", M("prefix")) + A(T(e, t), T(e, t)))), ye = new Date(M("today", ((e, t = e) => new URLSearchParams(location.search).get(e) || t)(T(y, "today"), new Date))), be = M("emoji", "🧁,👦🏻,💘,❤️,🪦,♰,💔,🎂,👨‍👩‍👧,⏯️")[r](","), xe = 1;
            i.person = (e, t = e.split("-")[0]) => u(i.grid, V + N(`id^="${t}"`))[0], i.grid = i.grid || 0, 
            i.show = e => {
                if ("string" == typeof e && (e = i.person(e)), !e) return;
                e.data.branch && (e = e.data.branch), t.setItem(f, i[ge].innerHTML = e[0]);
                let [a, n] = e, r = e => F(e);
                e.length < 4 && (n = a), i[Ae].innerHTML = C(E(N("show" + f)) + F(g) + j(r(n)), "display:none") + C(r(n), "display:block;opacity:1;" + R(B)) + C(r(a), "display:inline-block;" + R(q)) + C(F(H) + F(H) + j(r(n)), "display:none") + C(F(H) + " " + de, "filter:grayscale(100%)");
            };
            let fe, ue = (e, t) => t[c]() - e[c]() - (t.getMonth() < e.getMonth() || t.getMonth() === e.getMonth() && t.getDate() < e.getDate()), we = e => {
                if (e) {
                    let [t, a, n] = String(e)[r]("-").map((e => +e));
                    0 != a && 0 != n || (a = 1, n = 1);
                    let i = new Date(t, a - 1, n), o = ye || new Date, l = new Date(o[c](), a - 1, n), d = Math.ceil((l - o) / 864e5);
                    return d < 0 && (d = Math.ceil((l.setFullYear(l[c]() + 1) - o) / 864e5)), {
                        date: i,
                        days: d,
                        age: ue(i, o),
                        year: t,
                        month: a,
                        day: n
                    };
                }
            }, ve = b(), ke = b(), $e = 0, Me = e => e.textContent.trim(), ze = (e, t) => n(e.attributes).map((e => t.setAttribute(e.name, e.value))), Le = "" + y, Ae = "" + f, De = "user", Te = async (e, t) => {
                if (e = e?.trim()) {
                    $e++;
                    for (let a of e[r](",")) {
                        let e = a[r]("/"), n = e.pop(), i = fe || (fe = e.length ? e.join("/") + "/" : w), o = await fetch(i + n);
                        o.ok && He(await o.text(), t);
                    }
                    --$e || Se();
                }
            }, He = (e = w, t = ve, a = o(f, {
                innerHTML: e
            })) => {
                for (let e of u(a, f + ":empty")) Te(e[d]("file"), e);
                t.append(a);
            }, Se = (e = e => e[d]($)) => {
                ke.append(...D(ve).map((function t(a, n = a[d](h) || Me(a) || h, r, i, l = a.localName, [c = a, p = c] = D(a), m) {
                    if (l == k ? (i = o(W, {}, [], e(c) || e(p) ? {
                        [$]: e(c) || e(p)
                    } : {}), a[s]("end") ? p.setAttribute(H, Me(c)) : (c.partner = p, p.partner = c)) : l == v || "child" == l ? i = o(V, {}, [ e(a) ? o(X, {
                        src: i,
                        data: {
                            src: a,
                            name: n,
                            born: we(a[d]("date"))
                        }
                    }, [], {
                        date: e(a)
                    }) : w ]) : l == f ? i = o(J, {}, [], {
                        [h]: n = a[d](h) || Me(u(a, v)[0])
                    }) : l == g && (i = o(Z)), i) {
                        i.data = {
                            name: n,
                            src: a
                        }, ze(a, i);
                        for (let e of D(a)) (m = t(e)) && i.append(m);
                    }
                    return i;
                })));
                let t = (a, r = [], {localName: l, data: c} = a, p = (a[d](h) || w).replace(/[^a-z]/gi, w), m = (l == J ? [ ...r, p ] : r), y, b) => {
                    if (c.branch = n(new Set(m)).reverse(), l != J && (c.event = we(a[d]("date")), c.death = we(e(c.src)), 
                    y = c.event)) {
                        let e, {name: t, born: n, branch: r, death: d, src: p, event: {days: h, age: m}} = c, f = t.normalize("NFD").replace(/[^a-z]/gi, w) + "-" + (n || y).year + "-" + (n || y).month + "-" + (n || y).day, u = r[t == r[0] ? 1 : 0], v = e => o(de, {}, [ be[e] ]), k = !d && h < M("days", 28), z = P(0 == h, "today"), L = [ g, l ], A = e => L.push(e);
                        l == X ? A($) : l == V ? (a[s](H) && A(H), d ? A($) : (A(P(k, "upcoming")), k && A(z))) : l == Z ? u = w : l == W && (e = 2, 
                        A(z), p[s]("end") && (e = 6, A(H)), a[s]($) && (A($), k = w)), l != W && (p[s](H) ? (e = 6, 
                        u = t == Me(p.parentNode?.children[0]) ? r.at(1) : u) : p.partner ? (e = 3, u = Me(p.partner)) : e = 1), 
                        (b = o(l, {
                            host: i,
                            id: f,
                            data: {
                                ...a.data
                            },
                            onclick: () => i.show(b)
                        }, [ o(te, {}, [ y.day ]), o(ae, {}, [ "'" + y.year % 100 ]), o(ne, {}, [ l == X ? v(5) : k ? [ v(0), o(ie + "today", {
                            part: z
                        }, [ m + 1 ]) ] : w, o(re, {}, [ " ", l == W ? [ Me(p.children[0]), " ", v(e), " ", Me(p.children[1]) ] : t ]), d && l != X ? [ o(oe, {}, [ " ", v(5), " '", d.year % 100 ]) ] : w ]), o(he, {}, l == W ? [] : [ o(le, {}, [ v(e) ]), o(se, {}, [ u ]) ]), o(ie, {
                            part: he + " " + z
                        }, [ k ? m : l == X ? ue(n.date, d.date) : d ? ue(y.date, d.date) : m ]), o(me, {}, [ x(f) ]) ])).part.add(...L, ...r), 
                        ze(a, b), (b = i.createElement(b)) && i.events[y.month - 1].push(b);
                    }
                    D(a).map((e => t(e, m)));
                };
                D(ke).map((e => t(e))), Ce();
            }, Ce = () => {
                i.months.map(((e, t) => {
                    e.replaceChildren(...i.events[t].sort(((e, t) => e.data.event.day - t.data.event.day)));
                })), i.show(M(f, t.getItem(f)));
            };
            i.grid || (i[p].innerHTML = w, i[p].append(b(Le, C(":host", `display:inline-block;width:100%;height:100%;box-sizing:border-box;position:relative;user-select:none;font:${I(T(y, "fontsize"), "clamp(11px,1.05vw,13px)")}arial;border:3px solid ${I(O)};` + R(O, U) + ";animation:f 1s") + C("@keyframes f", "from{opacity:0}to{opacity:1}") + C(":host([hidden]),[hidden]", "display:none!important") + C(z, "display:flex;flex-direction:column") + C(K, "gap:3px;display:grid;grid-template-columns:repeat(var(--c,4),1fr)") + C("@media(max-width:900px)", C(K, "--c:3;font-size:110%")) + C("@media(max-width:800px)", C(K, "--c:2;font-size:130%")) + C("@media(max-width:600px)", C(K, "--c:1;font-size:130%")) + C(Q, R(Y)) + C(_, "display:inline-block;width:100%;text-align:center;text-transform:uppercase;" + R(O)) + C(_ + F(S), "font-weight:bold")), b("iconbar", C(L + ">*", "display:inline-block;font-size:2.8em") + C(pe, "filter:grayscale(100%);cursor:pointer") + C(L, `text-align:center;position:sticky;top:0;;width:100%;z-index:1;background:${I(O)}`)), b("event", C(F(g), `border-bottom:1px dashed ${I(O)};display:inline-block;width:100%;padding:1px;box-sizing:border-box;\n&:hover{cursor:pointer;${R(G)}}`) + C(F(g) + F("today"), R(O)) + C(F(g) + F("today") + " " + ie, "display:none") + C(te + "," + ae + "," + ie + "," + le, "display:inline-block;width:1.7em;text-align:right") + C(ie + "," + he, "float:right") + C(W + " " + ie + "," + E(j(N("showrelation"))) + ie, "padding-right:7em") + C(ne, "padding-left:1em;font-weight:bold") + C(re, "text-transform:capitalize") + C(ae + "," + de, "zoom:.9") + C(se, "display:inline-block;width:6em;zoom:.9") + C(F($), "opacity:.7;&:hover{opacity:1}") + C(W + F($) + " " + ie, "display:none")), b("attr", M("css")), b(De), b(Ae), o(z, {}, [ o(L, {}, [ x("header", `<header-title>${i.title}</header-title>`), i[ce] = o(ce, {}, [ [ 1, 2, k, W ], [ 0, 4, $, X ], [ 1, 7, "age", ie ], [ 1, 1, "relation", he ], [ 0, 8, f, g ], [ 1, 9, "c" ] ].map((([e, a, n, r, l = "show" + n, d = i.toggleAttribute(l, t.getItem(l) ? "true" == t.getItem(l) : i[s](l) || e)]) => [ b(l, C(E(N(l)) + F(l), "filter:none") + C(E(j(N(l))) + r, "display:none")), o(pe, {
                part: pe + " " + l,
                onclick: () => {
                    r ? t.setItem(l, i.toggleAttribute(l)) : i.grid.style.setProperty("--c", ++xe > 4 ? xe = 1 : xe);
                }
            }, [ be[a], 8 == a ? i[ge] = o(ge) : w ]) ]))) ]), i.grid = o(K, {
                part: K
            }, [ i.events.map(((e, t, a, n = t == ye.getMonth(), r = P(n, S)) => o(Q, {
                part: r + " " + Q
            }, [ x(m + (t + 1)), o(_, {
                part: r + " " + _
            }, [ n ? ye.getDate() : w, " ", new Date(1, t, 1).toLocaleString(M(m, navigator.language), {
                [m]: "long"
            }), " ", n ? ye[c]() : w ]), x(ee + (t + 1)), i.months[t] = o(ee, {
                part: r + " " + ee
            }) ]))) ]), x("footer") ])), u(e, "#" + i.localName)?.[0] && (i[De].innerHTML = u(u(e, "#" + i.localName)?.[0].content, "style")[0].innerHTML), 
            i[p].append(...u(i, "style")));
            let Ie = M(l);
            a ? (He(a), Se()) : Ie && Te(Ie), Ce(), setTimeout((() => {}), 100);
        }
        static observedAttributes=[ l, f ];
        constructor() {
            super().attachShadow({
                mode: "open"
            }), this.events = [ [], [], [], [], [], [], [], [], [], [], [], [] ], this.months = [];
        }
        set [l](e) {
            e.includes(f) ? this[o](e) : this.setAttribute(l, e);
        }
        attributeChangedCallback(e, t, a, n, r = this) {
            r.isConnected && (e == f ? r.show(a) : e == l && r[o](a));
        }
        createElement(e) {
            return e;
        }
    });
})(document, localStorage, 0, Array.from, "split", window, "connectedCallback");