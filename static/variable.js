var Gn = Object.defineProperty;
var Hn = (l, e, n) =>
	e in l ? Gn(l, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (l[e] = n);
var al = (l, e, n) => Hn(l, typeof e != 'symbol' ? e + '' : e, n);
(function () {
	const e = document.createElement('link').relList;
	if (e && e.supports && e.supports('modulepreload')) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i);
	new MutationObserver((i) => {
		for (const a of i)
			if (a.type === 'childList')
				for (const r of a.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && t(r);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const a = {};
		return (
			i.integrity && (a.integrity = i.integrity),
			i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (a.credentials = 'include')
				: i.crossOrigin === 'anonymous'
					? (a.credentials = 'omit')
					: (a.credentials = 'same-origin'),
			a
		);
	}
	function t(i) {
		if (i.ep) return;
		i.ep = !0;
		const a = n(i);
		fetch(i.href, a);
	}
})();
window.config = { server: { baseUrl: 'https://test-server.brapi.org', brapiVersion: 'v2.1' } };
function ce() {}
function Mn(l) {
	return l();
}
function bl() {
	return Object.create(null);
}
function Kt(l) {
	l.forEach(Mn);
}
function Bn(l) {
	return typeof l == 'function';
}
function qe(l, e) {
	return l != l ? e == e : l !== e || (l && typeof l == 'object') || typeof l == 'function';
}
function Kn(l) {
	return Object.keys(l).length === 0;
}
function Qn(l, ...e) {
	if (l == null) {
		for (const t of e) t(void 0);
		return ce;
	}
	const n = l.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function kt(l, e, n) {
	l.$$.on_destroy.push(Qn(e, n));
}
function Xe(l, e, n) {
	return l.set(n), e;
}
function s(l, e) {
	l.appendChild(e);
}
function wt(l, e, n) {
	const t = Wn(l);
	if (!t.getElementById(e)) {
		const i = c('style');
		(i.id = e), (i.textContent = n), Xn(t, i);
	}
}
function Wn(l) {
	if (!l) return document;
	const e = l.getRootNode ? l.getRootNode() : l.ownerDocument;
	return e && e.host ? e : l.ownerDocument;
}
function Xn(l, e) {
	return s(l.head || l, e), e.sheet;
}
function I(l, e, n) {
	l.insertBefore(e, n || null);
}
function j(l) {
	l.parentNode && l.parentNode.removeChild(l);
}
function qt(l, e) {
	for (let n = 0; n < l.length; n += 1) l[n] && l[n].d(e);
}
function c(l) {
	return document.createElement(l);
}
function el(l) {
	return document.createElementNS('http://www.w3.org/2000/svg', l);
}
function q(l) {
	return document.createTextNode(l);
}
function d() {
	return q(' ');
}
function Tt(l, e, n, t) {
	return l.addEventListener(e, n, t), () => l.removeEventListener(e, n, t);
}
function u(l, e, n) {
	n == null ? l.removeAttribute(e) : l.getAttribute(e) !== n && l.setAttribute(e, n);
}
function Yn(l) {
	return Array.from(l.childNodes);
}
function y(l, e) {
	(e = '' + e), l.data !== e && (l.data = e);
}
function Ct(l, e, n, t) {
	n == null ? l.style.removeProperty(e) : l.style.setProperty(e, n, '');
}
let Xt;
function Wt(l) {
	Xt = l;
}
function Zn() {
	if (!Xt) throw new Error('Function called outside component initialization');
	return Xt;
}
function tl(l) {
	Zn().$$.on_mount.push(l);
}
const Gt = [],
	et = [];
let Ht = [];
const ol = [],
	ei = Promise.resolve();
let cl = !1;
function ti() {
	cl || ((cl = !0), ei.then(Fn));
}
function ul(l) {
	Ht.push(l);
}
function pt(l) {
	ol.push(l);
}
const fl = new Set();
let Ft = 0;
function Fn() {
	if (Ft !== 0) return;
	const l = Xt;
	do {
		try {
			for (; Ft < Gt.length; ) {
				const e = Gt[Ft];
				Ft++, Wt(e), li(e.$$);
			}
		} catch (e) {
			throw ((Gt.length = 0), (Ft = 0), e);
		}
		for (Wt(null), Gt.length = 0, Ft = 0; et.length; ) et.pop()();
		for (let e = 0; e < Ht.length; e += 1) {
			const n = Ht[e];
			fl.has(n) || (fl.add(n), n());
		}
		Ht.length = 0;
	} while (Gt.length);
	for (; ol.length; ) ol.pop()();
	(cl = !1), fl.clear(), Wt(l);
}
function li(l) {
	if (l.fragment !== null) {
		l.update(), Kt(l.before_update);
		const e = l.dirty;
		(l.dirty = [-1]), l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(ul);
	}
}
function ni(l) {
	const e = [],
		n = [];
	Ht.forEach((t) => (l.indexOf(t) === -1 ? e.push(t) : n.push(t))), n.forEach((t) => t()), (Ht = e);
}
const Zt = new Set();
let zt;
function fe() {
	zt = { r: 0, c: [], p: zt };
}
function oe() {
	zt.r || Kt(zt.c), (zt = zt.p);
}
function g(l, e) {
	l && l.i && (Zt.delete(l), l.i(e));
}
function h(l, e, n, t) {
	if (l && l.o) {
		if (Zt.has(l)) return;
		Zt.add(l),
			zt.c.push(() => {
				Zt.delete(l), t && (n && l.d(1), t());
			}),
			l.o(e);
	} else t && t();
}
function Ce(l) {
	return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l);
}
function vt(l, e, n) {
	const t = l.$$.props[e];
	t !== void 0 && ((l.$$.bound[t] = n), n(l.$$.ctx[t]));
}
function W(l) {
	l && l.c();
}
function K(l, e, n) {
	const { fragment: t, after_update: i } = l.$$;
	t && t.m(e, n),
		ul(() => {
			const a = l.$$.on_mount.map(Mn).filter(Bn);
			l.$$.on_destroy ? l.$$.on_destroy.push(...a) : Kt(a), (l.$$.on_mount = []);
		}),
		i.forEach(ul);
}
function Q(l, e) {
	const n = l.$$;
	n.fragment !== null &&
		(ni(n.after_update),
		Kt(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function ii(l, e) {
	l.$$.dirty[0] === -1 && (Gt.push(l), ti(), l.$$.dirty.fill(0)),
		(l.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Pe(l, e, n, t, i, a, r = null, f = [-1]) {
	const o = Xt;
	Wt(l);
	const m = (l.$$ = {
		fragment: null,
		ctx: [],
		props: a,
		update: ce,
		not_equal: i,
		bound: bl(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (o ? o.$$.context : [])),
		callbacks: bl(),
		dirty: f,
		skip_bound: !1,
		root: e.target || o.$$.root
	});
	r && r(m.root);
	let _ = !1;
	if (
		((m.ctx = n
			? n(l, e.props || {}, (R, p, ...v) => {
					const A = v.length ? v[0] : p;
					return (
						m.ctx &&
							i(m.ctx[R], (m.ctx[R] = A)) &&
							(!m.skip_bound && m.bound[R] && m.bound[R](A), _ && ii(l, R)),
						p
					);
				})
			: []),
		m.update(),
		(_ = !0),
		Kt(m.before_update),
		(m.fragment = t ? t(m.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			const R = Yn(e.target);
			m.fragment && m.fragment.l(R), R.forEach(j);
		} else m.fragment && m.fragment.c();
		e.intro && g(l.$$.fragment), K(l, e.target, e.anchor), Fn();
	}
	Wt(o);
}
class Ve {
	constructor() {
		al(this, '$$');
		al(this, '$$set');
	}
	$destroy() {
		Q(this, 1), (this.$destroy = ce);
	}
	$on(e, n) {
		if (!Bn(n)) return ce;
		const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			t.push(n),
			() => {
				const i = t.indexOf(n);
				i !== -1 && t.splice(i, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !Kn(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
const ri = '4';
typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ri);
let Jn = {},
	si = (l) => {
		Jn = l;
	};
async function ai(l) {
	let e = new Headers();
	l.authorization && e.append('Authorization', l.authorization.toString());
	let n = fi(l.brapiVersion);
	const t = await fetch(l.baseUrl + n + '/variables', { headers: e })
		.then(async (i) => await i.json())
		.then((i) => i.result.data);
	return (
		t.forEach((i) => {
			i.trait.traitClass || (i.trait.traitClass = 'Unknown'),
				i.method || (i.method = { methodDbId: '', methodName: 'Unknown' });
		}),
		t
	);
}
function fi(l) {
	return l.includes('v2') ? '/brapi/v2' : '/brapi/v1';
}
const Jt = [];
function ml(l, e = ce) {
	let n;
	const t = new Set();
	function i(f) {
		if (qe(l, f) && ((l = f), n)) {
			const o = !Jt.length;
			for (const m of t) m[1](), Jt.push(m, l);
			if (o) {
				for (let m = 0; m < Jt.length; m += 2) Jt[m][0](Jt[m + 1]);
				Jt.length = 0;
			}
		}
	}
	function a(f) {
		i(f(l));
	}
	function r(f, o = ce) {
		const m = [f, o];
		return (
			t.add(m),
			t.size === 1 && (n = e(i, a) || ce),
			f(l),
			() => {
				t.delete(m), t.size === 0 && n && (n(), (n = null));
			}
		);
	}
	return { set: i, update: a, subscribe: r };
}
const Rt = ml([]),
	dl = ml([]);
function oi(l) {
	Rt.set(
		l.sort((n, t) => {
			if (n.observationVariableName && t.observationVariableName)
				n.observationVariableName.localeCompare(t.observationVariableName);
			else return 0;
		})
	);
	let e = new Set();
	l.forEach((n) => {
		e.add(n.trait.traitClass);
	}),
		dl.set(Array.from(e));
}
const te = ml({ selection: {}, selectionType: '', selectedVariables: [] });
function ci(l) {
	wt(
		l,
		'svelte-ku8rdm',
		'div.svelte-ku8rdm{padding-bottom:0.25rem;color:black}span.badge.svelte-ku8rdm{background-color:#9acd32;color:black;padding:0.125rem 0.25rem;border-radius:0.25rem;font-size:smaller}'
	);
}
function ui(l) {
	let e,
		n = (l[1].scaleName ? l[1].scaleName : l[0]) + '',
		t,
		i,
		a,
		r,
		f;
	return {
		c() {
			(e = c('div')),
				(t = q(n)),
				(i = d()),
				(a = c('span')),
				(a.textContent = 'Scale'),
				u(a, 'class', 'badge svelte-ku8rdm'),
				u(e, 'class', 'svelte-ku8rdm');
		},
		m(o, m) {
			I(o, e, m), s(e, t), s(e, i), s(e, a), r || ((f = Tt(e, 'click', l[2])), (r = !0));
		},
		p(o, [m]) {
			m & 3 && n !== (n = (o[1].scaleName ? o[1].scaleName : o[0]) + '') && y(t, n);
		},
		i: ce,
		o: ce,
		d(o) {
			o && j(e), (r = !1), f();
		}
	};
}
function di(l, e, n) {
	let t, i;
	kt(l, Rt, (_) => n(5, (t = _))), kt(l, te, (_) => n(6, (i = _)));
	let { scaleDbId: a = '' } = e,
		{ methodDbId: r = '' } = e,
		{ traitDbId: f = '' } = e,
		o = {};
	tl(() => {
		n(
			1,
			(o = t.find(
				(_) => _.scale.scaleDbId === a && _.method.methodDbId === r && _.trait.traitDbId === f
			).scale)
		);
	});
	function m() {
		Xe(te, (i.selection = o), i),
			Xe(te, (i.selectionType = 'scale'), i),
			Xe(
				te,
				(i.selectedVariables = t.filter(
					(_) => _.scale.scaleDbId === a && _.method.methodDbId === r && _.trait.traitDbId === f
				)),
				i
			);
	}
	return (
		(l.$$set = (_) => {
			'scaleDbId' in _ && n(0, (a = _.scaleDbId)),
				'methodDbId' in _ && n(3, (r = _.methodDbId)),
				'traitDbId' in _ && n(4, (f = _.traitDbId));
		}),
		[a, o, m, r, f]
	);
}
class mi extends Ve {
	constructor(e) {
		super(), Pe(this, e, di, ui, qe, { scaleDbId: 0, methodDbId: 3, traitDbId: 4 }, ci);
	}
}
function _i(l) {
	let e, n;
	return {
		c() {
			(e = el('svg')),
				(n = el('path')),
				u(n, 'transform', 'matrix(1,0,0,-1,584.67797,1262.6441)'),
				u(
					n,
					'd',
					'm 576,640 q 0,-26 -19,-45 L 109,147 Q 90,128 64,128 38,128 19,147 0,166 0,192 v 896 q 0,26 19,45 19,19 45,19 26,0 45,-19 L 557,685 q 19,-19 19,-45 z'
				),
				u(e, 'viewBox', '0 -256 1792 1792'),
				Ct(e, 'height', '20px'),
				Ct(e, 'width', '20px');
		},
		m(t, i) {
			I(t, e, i), s(e, n);
		},
		d(t) {
			t && j(e);
		}
	};
}
function gi(l) {
	let e, n;
	return {
		c() {
			(e = el('svg')),
				(n = el('path')),
				u(n, 'transform', 'matrix(1,0,0,-1,402.44068,1239.8644)'),
				u(
					n,
					'd',
					'm 1024,832 q 0,-26 -19,-45 L 557,339 q -19,-19 -45,-19 -26,0 -45,19 L 19,787 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 896 q 26,0 45,-19 19,-19 19,-45 z'
				),
				u(e, 'viewBox', '0 -256 1792 1792'),
				Ct(e, 'height', '20px'),
				Ct(e, 'width', '20px');
		},
		m(t, i) {
			I(t, e, i), s(e, n);
		},
		d(t) {
			t && j(e);
		}
	};
}
function hi(l) {
	let e, n, t;
	function i(f, o) {
		return f[0] ? gi : _i;
	}
	let a = i(l),
		r = a(l);
	return {
		c() {
			(e = c('div')), r.c();
		},
		m(f, o) {
			I(f, e, o), r.m(e, null), n || ((t = Tt(e, 'click', l[1])), (n = !0));
		},
		p(f, [o]) {
			a !== (a = i(f)) && (r.d(1), (r = a(f)), r && (r.c(), r.m(e, null)));
		},
		i: ce,
		o: ce,
		d(f) {
			f && j(e), r.d(), (n = !1), t();
		}
	};
}
function bi(l, e, n) {
	let { open: t = !1 } = e;
	const i = () => n(0, (t = !t));
	return (
		(l.$$set = (a) => {
			'open' in a && n(0, (t = a.open));
		}),
		[t, i]
	);
}
class _l extends Ve {
	constructor(e) {
		super(), Pe(this, e, bi, hi, qe, { open: 0 });
	}
}
function pi(l) {
	wt(
		l,
		'svelte-xtsa0a',
		'.nav-item.svelte-xtsa0a{display:flex;flex-direction:row;color:black}.container.svelte-xtsa0a{padding:0 1.5em}span.badge.svelte-xtsa0a{background-color:#228b22;color:white;padding:0.125rem 0.25rem;border-radius:0.25rem;font-size:smaller}'
	);
}
function pl(l, e, n) {
	const t = l.slice();
	return (t[12] = e[n]), (t[13] = e), (t[14] = n), t;
}
function vl(l) {
	let e,
		n,
		t = Ce(l[4].filter(l[7])),
		i = [];
	for (let r = 0; r < t.length; r += 1) i[r] = $l(pl(l, t, r));
	const a = (r) =>
		h(i[r], 1, 1, () => {
			i[r] = null;
		});
	return {
		c() {
			e = c('div');
			for (let r = 0; r < i.length; r += 1) i[r].c();
			u(e, 'class', 'container svelte-xtsa0a');
		},
		m(r, f) {
			I(r, e, f);
			for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
			n = !0;
		},
		p(r, f) {
			if (f & 19) {
				t = Ce(r[4].filter(r[7]));
				let o;
				for (o = 0; o < t.length; o += 1) {
					const m = pl(r, t, o);
					i[o]
						? (i[o].p(m, f), g(i[o], 1))
						: ((i[o] = $l(m)), i[o].c(), g(i[o], 1), i[o].m(e, null));
				}
				for (fe(), o = t.length; o < i.length; o += 1) a(o);
				oe();
			}
		},
		i(r) {
			if (!n) {
				for (let f = 0; f < t.length; f += 1) g(i[f]);
				n = !0;
			}
		},
		o(r) {
			i = i.filter(Boolean);
			for (let f = 0; f < i.length; f += 1) h(i[f]);
			n = !1;
		},
		d(r) {
			r && j(e), qt(i, r);
		}
	};
}
function $l(l) {
	let e, n, t, i, a;
	function r(_) {
		l[8](_, l[12]);
	}
	function f(_) {
		l[9](_);
	}
	function o(_) {
		l[10](_);
	}
	let m = {};
	return (
		l[12].scale.scaleDbId !== void 0 && (m.scaleDbId = l[12].scale.scaleDbId),
		l[0] !== void 0 && (m.methodDbId = l[0]),
		l[1] !== void 0 && (m.traitDbId = l[1]),
		(e = new mi({ props: m })),
		et.push(() => vt(e, 'scaleDbId', r)),
		et.push(() => vt(e, 'methodDbId', f)),
		et.push(() => vt(e, 'traitDbId', o)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(_, R) {
				K(e, _, R), (a = !0);
			},
			p(_, R) {
				l = _;
				const p = {};
				!n && R & 19 && ((n = !0), (p.scaleDbId = l[12].scale.scaleDbId), pt(() => (n = !1))),
					!t && R & 1 && ((t = !0), (p.methodDbId = l[0]), pt(() => (t = !1))),
					!i && R & 2 && ((i = !0), (p.traitDbId = l[1]), pt(() => (i = !1))),
					e.$set(p);
			},
			i(_) {
				a || (g(e.$$.fragment, _), (a = !0));
			},
			o(_) {
				h(e.$$.fragment, _), (a = !1);
			},
			d(_) {
				Q(e, _);
			}
		}
	);
}
function vi(l) {
	let e,
		n,
		t,
		i,
		a,
		r,
		f = (l[3].methodName ? l[3].methodName : l[0]) + '',
		o,
		m,
		_,
		R,
		p,
		v,
		A;
	function $(N) {
		l[6](N);
	}
	let G = {};
	l[2] !== void 0 && (G.open = l[2]), (t = new _l({ props: G })), et.push(() => vt(t, 'open', $));
	let k = l[2] && vl(l);
	return {
		c() {
			(e = c('section')),
				(n = c('div')),
				W(t.$$.fragment),
				(a = d()),
				(r = c('div')),
				(o = q(f)),
				(m = d()),
				(_ = c('span')),
				(_.textContent = 'Method'),
				(R = d()),
				k && k.c(),
				u(_, 'class', 'badge svelte-xtsa0a'),
				u(n, 'class', 'nav-item svelte-xtsa0a');
		},
		m(N, z) {
			I(N, e, z),
				s(e, n),
				K(t, n, null),
				s(n, a),
				s(n, r),
				s(r, o),
				s(r, m),
				s(r, _),
				s(e, R),
				k && k.m(e, null),
				(p = !0),
				v || ((A = Tt(r, 'click', l[5])), (v = !0));
		},
		p(N, [z]) {
			const P = {};
			!i && z & 4 && ((i = !0), (P.open = N[2]), pt(() => (i = !1))),
				t.$set(P),
				(!p || z & 9) && f !== (f = (N[3].methodName ? N[3].methodName : N[0]) + '') && y(o, f),
				N[2]
					? k
						? (k.p(N, z), z & 4 && g(k, 1))
						: ((k = vl(N)), k.c(), g(k, 1), k.m(e, null))
					: k &&
						(fe(),
						h(k, 1, 1, () => {
							k = null;
						}),
						oe());
		},
		i(N) {
			p || (g(t.$$.fragment, N), g(k), (p = !0));
		},
		o(N) {
			h(t.$$.fragment, N), h(k), (p = !1);
		},
		d(N) {
			N && j(e), Q(t), k && k.d(), (v = !1), A();
		}
	};
}
function $i(l, e, n) {
	let t, i;
	kt(l, Rt, ($) => n(4, (t = $))), kt(l, te, ($) => n(11, (i = $)));
	let { methodDbId: a = '' } = e,
		{ traitDbId: r = '' } = e,
		f = !1,
		o = {};
	tl(() => {
		n(3, (o = t.find(($) => $.method.methodDbId === a && $.trait.traitDbId === r).method));
	});
	function m() {
		Xe(te, (i.selection = o), i),
			Xe(te, (i.selectionType = 'method'), i),
			Xe(
				te,
				(i.selectedVariables = t.filter(
					($) => $.method.methodDbId === a && $.trait.traitDbId === r
				)),
				i
			);
	}
	function _($) {
		(f = $), n(2, f);
	}
	const R = ($) => $.method.methodDbId === a && $.trait.traitDbId === r;
	function p($, G) {
		l.$$.not_equal(G.scale.scaleDbId, $) && ((G.scale.scaleDbId = $), Rt.set(t));
	}
	function v($) {
		(a = $), n(0, a);
	}
	function A($) {
		(r = $), n(1, r);
	}
	return (
		(l.$$set = ($) => {
			'methodDbId' in $ && n(0, (a = $.methodDbId)), 'traitDbId' in $ && n(1, (r = $.traitDbId));
		}),
		[a, r, f, o, t, m, _, R, p, v, A]
	);
}
class ki extends Ve {
	constructor(e) {
		super(), Pe(this, e, $i, vi, qe, { methodDbId: 0, traitDbId: 1 }, pi);
	}
}
function ji(l) {
	wt(
		l,
		'svelte-1wq4xut',
		'.nav-item.svelte-1wq4xut{display:flex;color:black;flex-direction:row}span.badge.svelte-1wq4xut{background-color:#32cd32;color:black;padding:0.125rem 0.25rem;border-radius:0.25rem;font-size:smaller}.container.svelte-1wq4xut{padding:0 1.5em}'
	);
}
function kl(l, e, n) {
	const t = l.slice();
	return (t[10] = e[n]), (t[11] = e), (t[12] = n), t;
}
function jl(l) {
	let e,
		n,
		t = Ce(l[3].filter(l[6])),
		i = [];
	for (let r = 0; r < t.length; r += 1) i[r] = Il(kl(l, t, r));
	const a = (r) =>
		h(i[r], 1, 1, () => {
			i[r] = null;
		});
	return {
		c() {
			e = c('div');
			for (let r = 0; r < i.length; r += 1) i[r].c();
			u(e, 'class', 'container svelte-1wq4xut');
		},
		m(r, f) {
			I(r, e, f);
			for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
			n = !0;
		},
		p(r, f) {
			if (f & 9) {
				t = Ce(r[3].filter(r[6]));
				let o;
				for (o = 0; o < t.length; o += 1) {
					const m = kl(r, t, o);
					i[o]
						? (i[o].p(m, f), g(i[o], 1))
						: ((i[o] = Il(m)), i[o].c(), g(i[o], 1), i[o].m(e, null));
				}
				for (fe(), o = t.length; o < i.length; o += 1) a(o);
				oe();
			}
		},
		i(r) {
			if (!n) {
				for (let f = 0; f < t.length; f += 1) g(i[f]);
				n = !0;
			}
		},
		o(r) {
			i = i.filter(Boolean);
			for (let f = 0; f < i.length; f += 1) h(i[f]);
			n = !1;
		},
		d(r) {
			r && j(e), qt(i, r);
		}
	};
}
function Il(l) {
	let e, n, t, i;
	function a(o) {
		l[7](o, l[10]);
	}
	function r(o) {
		l[8](o);
	}
	let f = {};
	return (
		l[10].method.methodDbId !== void 0 && (f.methodDbId = l[10].method.methodDbId),
		l[0] !== void 0 && (f.traitDbId = l[0]),
		(e = new ki({ props: f })),
		et.push(() => vt(e, 'methodDbId', a)),
		et.push(() => vt(e, 'traitDbId', r)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(o, m) {
				K(e, o, m), (i = !0);
			},
			p(o, m) {
				l = o;
				const _ = {};
				!n && m & 9 && ((n = !0), (_.methodDbId = l[10].method.methodDbId), pt(() => (n = !1))),
					!t && m & 1 && ((t = !0), (_.traitDbId = l[0]), pt(() => (t = !1))),
					e.$set(_);
			},
			i(o) {
				i || (g(e.$$.fragment, o), (i = !0));
			},
			o(o) {
				h(e.$$.fragment, o), (i = !1);
			},
			d(o) {
				Q(e, o);
			}
		}
	);
}
function Ii(l) {
	let e,
		n,
		t,
		i,
		a,
		r,
		f = (l[2].traitName ? l[2].traitName : l[0]) + '',
		o,
		m,
		_,
		R,
		p,
		v,
		A;
	function $(N) {
		l[5](N);
	}
	let G = {};
	l[1] !== void 0 && (G.open = l[1]), (t = new _l({ props: G })), et.push(() => vt(t, 'open', $));
	let k = l[1] && jl(l);
	return {
		c() {
			(e = c('section')),
				(n = c('div')),
				W(t.$$.fragment),
				(a = d()),
				(r = c('div')),
				(o = q(f)),
				(m = d()),
				(_ = c('span')),
				(_.textContent = 'Trait'),
				(R = d()),
				k && k.c(),
				u(_, 'class', 'badge svelte-1wq4xut'),
				u(n, 'class', 'nav-item svelte-1wq4xut');
		},
		m(N, z) {
			I(N, e, z),
				s(e, n),
				K(t, n, null),
				s(n, a),
				s(n, r),
				s(r, o),
				s(r, m),
				s(r, _),
				s(e, R),
				k && k.m(e, null),
				(p = !0),
				v || ((A = Tt(r, 'click', l[4])), (v = !0));
		},
		p(N, [z]) {
			const P = {};
			!i && z & 2 && ((i = !0), (P.open = N[1]), pt(() => (i = !1))),
				t.$set(P),
				(!p || z & 5) && f !== (f = (N[2].traitName ? N[2].traitName : N[0]) + '') && y(o, f),
				N[1]
					? k
						? (k.p(N, z), z & 2 && g(k, 1))
						: ((k = jl(N)), k.c(), g(k, 1), k.m(e, null))
					: k &&
						(fe(),
						h(k, 1, 1, () => {
							k = null;
						}),
						oe());
		},
		i(N) {
			p || (g(t.$$.fragment, N), g(k), (p = !0));
		},
		o(N) {
			h(t.$$.fragment, N), h(k), (p = !1);
		},
		d(N) {
			N && j(e), Q(t), k && k.d(), (v = !1), A();
		}
	};
}
function wi(l, e, n) {
	let t, i;
	kt(l, Rt, (v) => n(3, (t = v))), kt(l, te, (v) => n(9, (i = v)));
	let { traitDbId: a = '' } = e,
		r = !1,
		f = {};
	tl(() => {
		n(2, (f = t.find((v) => v.trait.traitDbId === a).trait));
	});
	function o() {
		Xe(te, (i.selection = f), i),
			Xe(te, (i.selectionType = 'trait'), i),
			Xe(te, (i.selectedVariables = t.filter((v) => v.trait.traitDbId === a)), i);
	}
	function m(v) {
		(r = v), n(1, r);
	}
	const _ = (v) => v.trait.traitDbId === a;
	function R(v, A) {
		l.$$.not_equal(A.method.methodDbId, v) && ((A.method.methodDbId = v), Rt.set(t));
	}
	function p(v) {
		(a = v), n(0, a);
	}
	return (
		(l.$$set = (v) => {
			'traitDbId' in v && n(0, (a = v.traitDbId));
		}),
		[a, r, f, t, o, m, _, R, p]
	);
}
class Di extends Ve {
	constructor(e) {
		super(), Pe(this, e, wi, Ii, qe, { traitDbId: 0 }, ji);
	}
}
function Ci(l) {
	wt(
		l,
		'svelte-dqkbh4',
		'.container.svelte-dqkbh4{padding:0 1.5em}.nav-item.svelte-dqkbh4{display:flex;color:black;flex-direction:row}'
	);
}
function wl(l, e, n) {
	const t = l.slice();
	return (t[6] = e[n]), (t[7] = e), (t[8] = n), t;
}
function Dl(l) {
	let e,
		n,
		t = Ce(l[2].filter(l[4])),
		i = [];
	for (let r = 0; r < t.length; r += 1) i[r] = Cl(wl(l, t, r));
	const a = (r) =>
		h(i[r], 1, 1, () => {
			i[r] = null;
		});
	return {
		c() {
			e = c('div');
			for (let r = 0; r < i.length; r += 1) i[r].c();
			u(e, 'class', 'container svelte-dqkbh4');
		},
		m(r, f) {
			I(r, e, f);
			for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
			n = !0;
		},
		p(r, f) {
			if (f & 5) {
				t = Ce(r[2].filter(r[4]));
				let o;
				for (o = 0; o < t.length; o += 1) {
					const m = wl(r, t, o);
					i[o]
						? (i[o].p(m, f), g(i[o], 1))
						: ((i[o] = Cl(m)), i[o].c(), g(i[o], 1), i[o].m(e, null));
				}
				for (fe(), o = t.length; o < i.length; o += 1) a(o);
				oe();
			}
		},
		i(r) {
			if (!n) {
				for (let f = 0; f < t.length; f += 1) g(i[f]);
				n = !0;
			}
		},
		o(r) {
			i = i.filter(Boolean);
			for (let f = 0; f < i.length; f += 1) h(i[f]);
			n = !1;
		},
		d(r) {
			r && j(e), qt(i, r);
		}
	};
}
function Cl(l) {
	let e, n, t;
	function i(r) {
		l[5](r, l[6]);
	}
	let a = {};
	return (
		l[6].trait.traitDbId !== void 0 && (a.traitDbId = l[6].trait.traitDbId),
		(e = new Di({ props: a })),
		et.push(() => vt(e, 'traitDbId', i)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(r, f) {
				K(e, r, f), (t = !0);
			},
			p(r, f) {
				l = r;
				const o = {};
				!n && f & 5 && ((n = !0), (o.traitDbId = l[6].trait.traitDbId), pt(() => (n = !1))),
					e.$set(o);
			},
			i(r) {
				t || (g(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				h(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				Q(e, r);
			}
		}
	);
}
function qi(l) {
	let e, n, t, i, a, r, f, o, m;
	function _(v) {
		l[3](v);
	}
	let R = {};
	l[1] !== void 0 && (R.open = l[1]), (t = new _l({ props: R })), et.push(() => vt(t, 'open', _));
	let p = l[1] && Dl(l);
	return {
		c() {
			(e = c('section')),
				(n = c('div')),
				W(t.$$.fragment),
				(a = d()),
				(r = c('strong')),
				(f = q(l[0])),
				(o = d()),
				p && p.c(),
				u(n, 'class', 'nav-item svelte-dqkbh4');
		},
		m(v, A) {
			I(v, e, A),
				s(e, n),
				K(t, n, null),
				s(n, a),
				s(n, r),
				s(r, f),
				s(e, o),
				p && p.m(e, null),
				(m = !0);
		},
		p(v, [A]) {
			const $ = {};
			!i && A & 2 && ((i = !0), ($.open = v[1]), pt(() => (i = !1))),
				t.$set($),
				(!m || A & 1) && y(f, v[0]),
				v[1]
					? p
						? (p.p(v, A), A & 2 && g(p, 1))
						: ((p = Dl(v)), p.c(), g(p, 1), p.m(e, null))
					: p &&
						(fe(),
						h(p, 1, 1, () => {
							p = null;
						}),
						oe());
		},
		i(v) {
			m || (g(t.$$.fragment, v), g(p), (m = !0));
		},
		o(v) {
			h(t.$$.fragment, v), h(p), (m = !1);
		},
		d(v) {
			v && j(e), Q(t), p && p.d();
		}
	};
}
function Ni(l, e, n) {
	let t;
	kt(l, Rt, (m) => n(2, (t = m)));
	let { traitClass: i = 'undefined' } = e,
		a = !1;
	function r(m) {
		(a = m), n(1, a);
	}
	const f = (m) => (m.trait.traitClass ? m.trait.traitClass === i : !0);
	function o(m, _) {
		l.$$.not_equal(_.trait.traitDbId, m) && ((_.trait.traitDbId = m), Rt.set(t));
	}
	return (
		(l.$$set = (m) => {
			'traitClass' in m && n(0, (i = m.traitClass));
		}),
		[i, a, t, r, f, o]
	);
}
class yi extends Ve {
	constructor(e) {
		super(), Pe(this, e, Ni, qi, qe, { traitClass: 0 }, Ci);
	}
}
function ql(l, e, n) {
	const t = l.slice();
	return (t[2] = e[n]), (t[3] = e), (t[4] = n), t;
}
function Nl(l) {
	let e, n, t;
	function i(r) {
		l[1](r, l[2], l[3], l[4]);
	}
	let a = {};
	return (
		l[2] !== void 0 && (a.traitClass = l[2]),
		(e = new yi({ props: a })),
		et.push(() => vt(e, 'traitClass', i)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(r, f) {
				K(e, r, f), (t = !0);
			},
			p(r, f) {
				l = r;
				const o = {};
				!n && f & 1 && ((n = !0), (o.traitClass = l[2]), pt(() => (n = !1))), e.$set(o);
			},
			i(r) {
				t || (g(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				h(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				Q(e, r);
			}
		}
	);
}
function Ri(l) {
	let e,
		n,
		t = Ce(l[0]),
		i = [];
	for (let r = 0; r < t.length; r += 1) i[r] = Nl(ql(l, t, r));
	const a = (r) =>
		h(i[r], 1, 1, () => {
			i[r] = null;
		});
	return {
		c() {
			e = c('div');
			for (let r = 0; r < i.length; r += 1) i[r].c();
		},
		m(r, f) {
			I(r, e, f);
			for (let o = 0; o < i.length; o += 1) i[o] && i[o].m(e, null);
			n = !0;
		},
		p(r, [f]) {
			if (f & 1) {
				t = Ce(r[0]);
				let o;
				for (o = 0; o < t.length; o += 1) {
					const m = ql(r, t, o);
					i[o]
						? (i[o].p(m, f), g(i[o], 1))
						: ((i[o] = Nl(m)), i[o].c(), g(i[o], 1), i[o].m(e, null));
				}
				for (fe(), o = t.length; o < i.length; o += 1) a(o);
				oe();
			}
		},
		i(r) {
			if (!n) {
				for (let f = 0; f < t.length; f += 1) g(i[f]);
				n = !0;
			}
		},
		o(r) {
			i = i.filter(Boolean);
			for (let f = 0; f < i.length; f += 1) h(i[f]);
			n = !1;
		},
		d(r) {
			r && j(e), qt(i, r);
		}
	};
}
function Ui(l, e, n) {
	let t;
	kt(l, dl, (a) => n(0, (t = a)));
	function i(a, r, f, o) {
		(f[o] = a), dl.set(t);
	}
	return [t, i];
}
class Pi extends Ve {
	constructor(e) {
		super(), Pe(this, e, Ui, Ri, qe, {});
	}
}
function Vi(l) {
	wt(
		l,
		'svelte-1a4j1x4',
		'span.badge.svelte-1a4j1x4{background-color:lightgrey;color:black;padding:0.125rem 0.25rem;border-radius:0.25rem;font-size:smaller}.container.svelte-1a4j1x4{flex-wrap:wrap;overflow-x:auto;display:flex;gap:0.125rem;padding:0.25rem}'
	);
}
function yl(l, e, n) {
	const t = l.slice();
	return (t[3] = e[n]), t;
}
function Rl(l) {
	let e,
		n = l[3].observationVariableDbId + '',
		t,
		i,
		a;
	function r() {
		return l[2](l[3]);
	}
	return {
		c() {
			(e = c('span')), (t = q(n)), u(e, 'class', 'badge svelte-1a4j1x4');
		},
		m(f, o) {
			I(f, e, o), s(e, t), i || ((a = Tt(e, 'click', r)), (i = !0));
		},
		p(f, o) {
			(l = f), o & 3 && n !== (n = l[3].observationVariableDbId + '') && y(t, n);
		},
		d(f) {
			f && j(e), (i = !1), a();
		}
	};
}
function xi(l) {
	let e,
		n = Ce(Ul(l[0].selectedVariables, l[1])),
		t = [];
	for (let i = 0; i < n.length; i += 1) t[i] = Rl(yl(l, n, i));
	return {
		c() {
			e = c('section');
			for (let i = 0; i < t.length; i += 1) t[i].c();
			u(e, 'class', 'container svelte-1a4j1x4');
		},
		m(i, a) {
			I(i, e, a);
			for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null);
		},
		p(i, [a]) {
			if (a & 3) {
				n = Ce(Ul(i[0].selectedVariables, i[1]));
				let r;
				for (r = 0; r < n.length; r += 1) {
					const f = yl(i, n, r);
					t[r] ? t[r].p(f, a) : ((t[r] = Rl(f)), t[r].c(), t[r].m(e, null));
				}
				for (; r < t.length; r += 1) t[r].d(1);
				t.length = n.length;
			}
		},
		i: ce,
		o: ce,
		d(i) {
			i && j(e), qt(t, i);
		}
	};
}
function Ul(l, e) {
	return l.length === 0 ? e : l;
}
function Si(l, e, n) {
	let t, i;
	return (
		kt(l, te, (r) => n(0, (t = r))),
		kt(l, Rt, (r) => n(1, (i = r))),
		[
			t,
			i,
			(r) => {
				Xe(te, (t.selection = r), t), Xe(te, (t.selectionType = 'variable'), t);
			}
		]
	);
}
class Ti extends Ve {
	constructor(e) {
		super(), Pe(this, e, Si, xi, qe, {}, Vi);
	}
}
function Pl(l, e, n) {
	const t = l.slice();
	return (t[1] = e[n]), t;
}
function Vl(l) {
	let e,
		n,
		t = l[1] + '',
		i,
		a,
		r,
		f = JSON.stringify(l[0][l[1]]) + '',
		o,
		m;
	return {
		c() {
			(e = c('tr')), (n = c('td')), (i = q(t)), (a = d()), (r = c('td')), (o = q(f)), (m = d());
		},
		m(_, R) {
			I(_, e, R), s(e, n), s(n, i), s(e, a), s(e, r), s(r, o), s(e, m);
		},
		p(_, R) {
			R & 1 && t !== (t = _[1] + '') && y(i, t),
				R & 1 && f !== (f = JSON.stringify(_[0][_[1]]) + '') && y(o, f);
		},
		d(_) {
			_ && j(e);
		}
	};
}
function Ai(l) {
	let e,
		n,
		t = Ce(Object.keys(l[0])),
		i = [];
	for (let a = 0; a < t.length; a += 1) i[a] = Vl(Pl(l, t, a));
	return {
		c() {
			(e = c('table')), (n = c('tbody'));
			for (let a = 0; a < i.length; a += 1) i[a].c();
		},
		m(a, r) {
			I(a, e, r), s(e, n);
			for (let f = 0; f < i.length; f += 1) i[f] && i[f].m(n, null);
		},
		p(a, [r]) {
			if (r & 1) {
				t = Ce(Object.keys(a[0]));
				let f;
				for (f = 0; f < t.length; f += 1) {
					const o = Pl(a, t, f);
					i[f] ? i[f].p(o, r) : ((i[f] = Vl(o)), i[f].c(), i[f].m(n, null));
				}
				for (; f < i.length; f += 1) i[f].d(1);
				i.length = t.length;
			}
		},
		i: ce,
		o: ce,
		d(a) {
			a && j(e), qt(i, a);
		}
	};
}
function Li(l, e, n) {
	let { dict: t = {} } = e;
	return (
		(l.$$set = (i) => {
			'dict' in i && n(0, (t = i.dict));
		}),
		[t]
	);
}
class ll extends Ve {
	constructor(e) {
		super(), Pe(this, e, Li, Ai, qe, { dict: 0 });
	}
}
function xl(l, e, n) {
	const t = l.slice();
	return (t[1] = e[n]), t;
}
function Sl(l) {
	let e,
		n,
		t,
		i = l[1].referenceSource + '',
		a,
		r,
		f;
	return {
		c() {
			(e = c('tr')),
				(n = c('td')),
				(t = c('a')),
				(a = q(i)),
				(f = d()),
				u(t, 'target', '_blank'),
				u(t, 'href', (r = l[1].referenceId));
		},
		m(o, m) {
			I(o, e, m), s(e, n), s(n, t), s(t, a), s(e, f);
		},
		p(o, m) {
			m & 1 && i !== (i = o[1].referenceSource + '') && y(a, i),
				m & 1 && r !== (r = o[1].referenceId) && u(t, 'href', r);
		},
		d(o) {
			o && j(e);
		}
	};
}
function Oi(l) {
	let e,
		n,
		t = Ce(l[0]),
		i = [];
	for (let a = 0; a < t.length; a += 1) i[a] = Sl(xl(l, t, a));
	return {
		c() {
			(e = c('table')), (n = c('tbody'));
			for (let a = 0; a < i.length; a += 1) i[a].c();
		},
		m(a, r) {
			I(a, e, r), s(e, n);
			for (let f = 0; f < i.length; f += 1) i[f] && i[f].m(n, null);
		},
		p(a, [r]) {
			if (r & 1) {
				t = Ce(a[0]);
				let f;
				for (f = 0; f < t.length; f += 1) {
					const o = xl(a, t, f);
					i[f] ? i[f].p(o, r) : ((i[f] = Sl(o)), i[f].c(), i[f].m(n, null));
				}
				for (; f < i.length; f += 1) i[f].d(1);
				i.length = t.length;
			}
		},
		i: ce,
		o: ce,
		d(a) {
			a && j(e), qt(i, a);
		}
	};
}
function Ei(l, e, n) {
	let { refs: t = [] } = e;
	return (
		(l.$$set = (i) => {
			'refs' in i && n(0, (t = i.refs));
		}),
		[t]
	);
}
class nl extends Ve {
	constructor(e) {
		super(), Pe(this, e, Ei, Oi, qe, { refs: 0 });
	}
}
function Tl(l, e, n) {
	const t = l.slice();
	return (t[1] = e[n]), t;
}
function Al(l) {
	let e,
		n,
		t = l[1] + '',
		i,
		a;
	return {
		c() {
			(e = c('tr')), (n = c('td')), (i = q(t)), (a = d());
		},
		m(r, f) {
			I(r, e, f), s(e, n), s(n, i), s(e, a);
		},
		p(r, f) {
			f & 1 && t !== (t = r[1] + '') && y(i, t);
		},
		d(r) {
			r && j(e);
		}
	};
}
function zi(l) {
	let e,
		n,
		t = Ce(l[0]),
		i = [];
	for (let a = 0; a < t.length; a += 1) i[a] = Al(Tl(l, t, a));
	return {
		c() {
			(e = c('table')), (n = c('tbody'));
			for (let a = 0; a < i.length; a += 1) i[a].c();
		},
		m(a, r) {
			I(a, e, r), s(e, n);
			for (let f = 0; f < i.length; f += 1) i[f] && i[f].m(n, null);
		},
		p(a, [r]) {
			if (r & 1) {
				t = Ce(a[0]);
				let f;
				for (f = 0; f < t.length; f += 1) {
					const o = Tl(a, t, f);
					i[f] ? i[f].p(o, r) : ((i[f] = Al(o)), i[f].c(), i[f].m(n, null));
				}
				for (; f < i.length; f += 1) i[f].d(1);
				i.length = t.length;
			}
		},
		i: ce,
		o: ce,
		d(a) {
			a && j(e), qt(i, a);
		}
	};
}
function Mi(l, e, n) {
	let { table: t = [] } = e;
	return (
		(l.$$set = (i) => {
			'table' in i && n(0, (t = i.table));
		}),
		[t]
	);
}
class il extends Ve {
	constructor(e) {
		super(), Pe(this, e, Mi, zi, qe, { table: 0 });
	}
}
function Ll(l, e, n) {
	const t = l.slice();
	return (t[1] = e[n]), t;
}
function Ol(l) {
	let e,
		n = l[1] + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[1]));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[1] + '') && y(t, n), r & 1 && i !== (i = a[1]) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function Bi(l) {
	let e,
		n,
		t,
		i,
		a,
		r,
		f = l[0].ontologyDbId + '',
		o,
		m,
		_,
		R,
		p,
		v,
		A = l[0].ontologyName + '',
		$,
		G,
		k,
		N,
		z,
		P,
		Y = l[0].version + '',
		X,
		D,
		ge,
		ue,
		tt,
		ee,
		le = Ce(l[0].documentationLinks),
		H = [];
	for (let O = 0; O < le.length; O += 1) H[O] = Ol(Ll(l, le, O));
	return {
		c() {
			(e = c('table')),
				(n = c('tbody')),
				(t = c('tr')),
				(i = c('td')),
				(i.textContent = 'Identifier'),
				(a = d()),
				(r = c('td')),
				(o = q(f)),
				(m = d()),
				(_ = c('tr')),
				(R = c('td')),
				(R.textContent = 'Name'),
				(p = d()),
				(v = c('td')),
				($ = q(A)),
				(G = d()),
				(k = c('tr')),
				(N = c('td')),
				(N.textContent = 'Version'),
				(z = d()),
				(P = c('td')),
				(X = q(Y)),
				(D = d()),
				(ge = c('tr')),
				(ue = c('td')),
				(ue.textContent = 'Documentation Links'),
				(tt = d()),
				(ee = c('td'));
			for (let O = 0; O < H.length; O += 1) H[O].c();
		},
		m(O, he) {
			I(O, e, he),
				s(e, n),
				s(n, t),
				s(t, i),
				s(t, a),
				s(t, r),
				s(r, o),
				s(n, m),
				s(n, _),
				s(_, R),
				s(_, p),
				s(_, v),
				s(v, $),
				s(n, G),
				s(n, k),
				s(k, N),
				s(k, z),
				s(k, P),
				s(P, X),
				s(n, D),
				s(n, ge),
				s(ge, ue),
				s(ge, tt),
				s(ge, ee);
			for (let L = 0; L < H.length; L += 1) H[L] && H[L].m(ee, null);
		},
		p(O, [he]) {
			if (
				(he & 1 && f !== (f = O[0].ontologyDbId + '') && y(o, f),
				he & 1 && A !== (A = O[0].ontologyName + '') && y($, A),
				he & 1 && Y !== (Y = O[0].version + '') && y(X, Y),
				he & 1)
			) {
				le = Ce(O[0].documentationLinks);
				let L;
				for (L = 0; L < le.length; L += 1) {
					const be = Ll(O, le, L);
					H[L] ? H[L].p(be, he) : ((H[L] = Ol(be)), H[L].c(), H[L].m(ee, null));
				}
				for (; L < H.length; L += 1) H[L].d(1);
				H.length = le.length;
			}
		},
		i: ce,
		o: ce,
		d(O) {
			O && j(e), qt(H, O);
		}
	};
}
function Fi(l, e, n) {
	let { ontoRef: t = {} } = e;
	return (
		(l.$$set = (i) => {
			'ontoRef' in i && n(0, (t = i.ontoRef));
		}),
		[t]
	);
}
class rl extends Ve {
	constructor(e) {
		super(), Pe(this, e, Fi, Bi, qe, { ontoRef: 0 });
	}
}
function Ji(l) {
	wt(
		l,
		'svelte-97qw0j',
		'table.svelte-97qw0j{width:100%}th.svelte-97qw0j{text-align:left;padding:0.25rem}td.svelte-97qw0j{text-align:left;padding:0.25rem}tr.svelte-97qw0j{background-color:white;color:black}.col.svelte-97qw0j{display:flex;flex-direction:column;background:white;color:black;padding:0.5rem;border:1px solid #ccc;margin-bottom:1em}.grid.svelte-97qw0j{display:grid;grid-template-columns:1fr 1fr}.link.svelte-97qw0j{color:blue;cursor:pointer}'
	);
}
function El(l) {
	let e, n;
	return (
		(e = new ll({ props: { dict: l[0].additionalInfo } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.dict = t[0].additionalInfo), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function zl(l) {
	let e = l[0].commonCropName + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].commonCropName + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Ml(l) {
	let e, n;
	return (
		(e = new il({ props: { table: l[0].contextOfUse } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.table = t[0].contextOfUse), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function Bl(l) {
	let e = l[0].defaultValue + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].defaultValue + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Fl(l) {
	let e,
		n = l[0].documentationURL + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[0].documentationURL));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].documentationURL + '') && y(t, n),
				r & 1 && i !== (i = a[0].documentationURL) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function Jl(l) {
	let e, n;
	return (
		(e = new nl({ props: { refs: l[0].externalReferences } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.refs = t[0].externalReferences), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function Gl(l) {
	let e = l[0].growthStage + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].growthStage + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Hl(l) {
	let e = l[0].institution + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].institution + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Kl(l) {
	let e = l[0].language + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].language + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Ql(l) {
	let e, n;
	return (
		(e = new rl({ props: { ontoRef: l[0].ontologyReference } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.ontoRef = t[0].ontologyReference), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function Wl(l) {
	let e = l[0].scientist + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].scientist + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Xl(l) {
	let e = l[0].status + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].status + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Yl(l) {
	let e = new Date(l[0].submissionTimestamp).toLocaleString() + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = new Date(t[0].submissionTimestamp).toLocaleString() + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Zl(l) {
	let e, n;
	return (
		(e = new il({ props: { table: l[0].synonyms } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.table = t[0].synonyms), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function en(l) {
	let e = l[0].observationVariableName + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].observationVariableName + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Gi(l) {
	let e,
		n,
		t,
		i,
		a,
		r = (l[0].trait.traitName ? l[0].trait.traitName : l[0].trait.traitDbId) + '',
		f,
		o,
		m,
		_,
		R,
		p,
		v = (l[0].method.methodName ? l[0].method.methodName : l[0].method.methodDbId) + '',
		A,
		$,
		G,
		k,
		N,
		z,
		P = (l[0].scale.scaleName ? l[0].scale.scaleName : l[0].scale.scaleDbId) + '',
		Y,
		X,
		D,
		ge,
		ue,
		tt,
		ee,
		le,
		H,
		O,
		he,
		L,
		be,
		ze,
		Me,
		xe,
		Ye,
		lt,
		ie,
		Be,
		rt,
		ke,
		nt,
		re,
		Fe,
		st,
		je,
		it,
		se,
		Je,
		at,
		Ie,
		pe,
		U,
		x,
		M,
		B,
		E,
		S,
		J,
		F,
		V,
		b,
		T,
		At,
		Lt,
		Dt,
		Mt,
		Nt,
		jt,
		Ot,
		Ut,
		Pt,
		yt,
		It,
		Et,
		Vt,
		xt,
		$t,
		me,
		ve,
		we,
		Ze,
		$e,
		Se,
		Ge,
		Ne,
		He,
		De,
		_e,
		Ke,
		de,
		Qe,
		ae,
		ye,
		We,
		Re,
		Ue = l[0].observationVariableDbId + '',
		w,
		ne,
		Bt,
		Yt,
		gl,
		Qt,
		St,
		sl,
		hl,
		Te = l[0].additionalInfo && El(l),
		ft = l[0].commonCropName && zl(l),
		Ae = l[0].contextOfUse && Ml(l),
		ot = l[0].defaultValue && Bl(l),
		ct = l[0].documentationURL && Fl(l),
		Le = l[0].externalReferences && Jl(l),
		ut = l[0].growthStage && Gl(l),
		dt = l[0].institution && Hl(l),
		mt = l[0].language && Kl(l),
		Oe = l[0].ontologyReference && Ql(l),
		_t = l[0].scientist && Wl(l),
		gt = l[0].status && Xl(l),
		ht = l[0].submissionTimestamp && Yl(l),
		Ee = l[0].synonyms && Zl(l),
		bt = l[0].observationVariableName && en(l);
	return {
		c() {
			(e = c('section')),
				(n = c('div')),
				(t = c('span')),
				(t.textContent = 'Trait:'),
				(i = d()),
				(a = c('u')),
				(f = q(r)),
				(o = d()),
				(m = c('div')),
				(_ = c('span')),
				(_.textContent = 'Method:'),
				(R = d()),
				(p = c('u')),
				(A = q(v)),
				($ = d()),
				(G = c('div')),
				(k = c('span')),
				(k.textContent = 'Scale:'),
				(N = d()),
				(z = c('u')),
				(Y = q(P)),
				(X = d()),
				(D = c('table')),
				(ge = c('tr')),
				(ue = c('th')),
				(ue.textContent = 'Additional Info'),
				(tt = d()),
				(ee = c('td')),
				Te && Te.c(),
				(le = d()),
				(H = c('tr')),
				(O = c('th')),
				(O.textContent = 'Common Crop Name'),
				(he = d()),
				(L = c('td')),
				ft && ft.c(),
				(be = d()),
				(ze = c('tr')),
				(Me = c('th')),
				(Me.textContent = 'Context of Use'),
				(xe = d()),
				(Ye = c('td')),
				Ae && Ae.c(),
				(lt = d()),
				(ie = c('tr')),
				(Be = c('th')),
				(Be.textContent = 'Default Value'),
				(rt = d()),
				(ke = c('td')),
				ot && ot.c(),
				(nt = d()),
				(re = c('tr')),
				(Fe = c('th')),
				(Fe.textContent = 'Documentation'),
				(st = d()),
				(je = c('td')),
				ct && ct.c(),
				(it = d()),
				(se = c('tr')),
				(Je = c('th')),
				(Je.textContent = 'External References'),
				(at = d()),
				(Ie = c('td')),
				Le && Le.c(),
				(pe = d()),
				(U = c('tr')),
				(x = c('th')),
				(x.textContent = 'Growth Stage'),
				(M = d()),
				(B = c('td')),
				ut && ut.c(),
				(E = d()),
				(S = c('tr')),
				(J = c('th')),
				(J.textContent = 'Institution'),
				(F = d()),
				(V = c('td')),
				dt && dt.c(),
				(b = d()),
				(T = c('tr')),
				(At = c('th')),
				(At.textContent = 'Language'),
				(Lt = d()),
				(Dt = c('td')),
				mt && mt.c(),
				(Mt = d()),
				(Nt = c('tr')),
				(jt = c('th')),
				(jt.textContent = 'Ontology Reference'),
				(Ot = d()),
				(Ut = c('td')),
				Oe && Oe.c(),
				(Pt = d()),
				(yt = c('tr')),
				(It = c('th')),
				(It.textContent = 'Scientist'),
				(Et = d()),
				(Vt = c('td')),
				_t && _t.c(),
				(xt = d()),
				($t = c('tr')),
				(me = c('th')),
				(me.textContent = 'Status'),
				(ve = d()),
				(we = c('td')),
				gt && gt.c(),
				(Ze = d()),
				($e = c('tr')),
				(Se = c('th')),
				(Se.textContent = 'Submission Timestamp'),
				(Ge = d()),
				(Ne = c('td')),
				ht && ht.c(),
				(He = d()),
				(De = c('tr')),
				(_e = c('th')),
				(_e.textContent = 'Synonyms'),
				(Ke = d()),
				(de = c('td')),
				Ee && Ee.c(),
				(Qe = d()),
				(ae = c('tr')),
				(ye = c('th')),
				(ye.textContent = 'Variable Identifier'),
				(We = d()),
				(Re = c('td')),
				(w = q(Ue)),
				(ne = d()),
				(Bt = c('tr')),
				(Yt = c('th')),
				(Yt.textContent = 'Variable Name'),
				(gl = d()),
				(Qt = c('td')),
				bt && bt.c(),
				Ct(a, 'grid-column', '2'),
				Ct(a, 'text-align', 'left'),
				u(a, 'class', 'link svelte-97qw0j'),
				u(n, 'class', 'grid svelte-97qw0j'),
				Ct(p, 'grid-column', '2'),
				Ct(p, 'text-align', 'left'),
				u(p, 'class', 'link svelte-97qw0j'),
				u(m, 'class', 'grid svelte-97qw0j'),
				Ct(z, 'grid-column', '2'),
				Ct(z, 'text-align', 'left'),
				u(z, 'class', 'link svelte-97qw0j'),
				u(G, 'class', 'grid svelte-97qw0j'),
				u(e, 'class', 'col svelte-97qw0j'),
				u(ue, 'class', 'svelte-97qw0j'),
				u(ee, 'class', 'svelte-97qw0j'),
				u(ge, 'class', 'svelte-97qw0j'),
				u(O, 'class', 'svelte-97qw0j'),
				u(L, 'class', 'svelte-97qw0j'),
				u(H, 'class', 'svelte-97qw0j'),
				u(Me, 'class', 'svelte-97qw0j'),
				u(Ye, 'class', 'svelte-97qw0j'),
				u(ze, 'class', 'svelte-97qw0j'),
				u(Be, 'class', 'svelte-97qw0j'),
				u(ke, 'class', 'svelte-97qw0j'),
				u(ie, 'class', 'svelte-97qw0j'),
				u(Fe, 'class', 'svelte-97qw0j'),
				u(je, 'class', 'svelte-97qw0j'),
				u(re, 'class', 'svelte-97qw0j'),
				u(Je, 'class', 'svelte-97qw0j'),
				u(Ie, 'class', 'svelte-97qw0j'),
				u(se, 'class', 'svelte-97qw0j'),
				u(x, 'class', 'svelte-97qw0j'),
				u(B, 'class', 'svelte-97qw0j'),
				u(U, 'class', 'svelte-97qw0j'),
				u(J, 'class', 'svelte-97qw0j'),
				u(V, 'class', 'svelte-97qw0j'),
				u(S, 'class', 'svelte-97qw0j'),
				u(At, 'class', 'svelte-97qw0j'),
				u(Dt, 'class', 'svelte-97qw0j'),
				u(T, 'class', 'svelte-97qw0j'),
				u(jt, 'class', 'svelte-97qw0j'),
				u(Ut, 'class', 'svelte-97qw0j'),
				u(Nt, 'class', 'svelte-97qw0j'),
				u(It, 'class', 'svelte-97qw0j'),
				u(Vt, 'class', 'svelte-97qw0j'),
				u(yt, 'class', 'svelte-97qw0j'),
				u(me, 'class', 'svelte-97qw0j'),
				u(we, 'class', 'svelte-97qw0j'),
				u($t, 'class', 'svelte-97qw0j'),
				u(Se, 'class', 'svelte-97qw0j'),
				u(Ne, 'class', 'svelte-97qw0j'),
				u($e, 'class', 'svelte-97qw0j'),
				u(_e, 'class', 'svelte-97qw0j'),
				u(de, 'class', 'svelte-97qw0j'),
				u(De, 'class', 'svelte-97qw0j'),
				u(ye, 'class', 'svelte-97qw0j'),
				u(Re, 'class', 'svelte-97qw0j'),
				u(ae, 'class', 'svelte-97qw0j'),
				u(Yt, 'class', 'svelte-97qw0j'),
				u(Qt, 'class', 'svelte-97qw0j'),
				u(Bt, 'class', 'svelte-97qw0j'),
				u(D, 'class', 'svelte-97qw0j');
		},
		m(C, Z) {
			I(C, e, Z),
				s(e, n),
				s(n, t),
				s(n, i),
				s(n, a),
				s(a, f),
				s(e, o),
				s(e, m),
				s(m, _),
				s(m, R),
				s(m, p),
				s(p, A),
				s(e, $),
				s(e, G),
				s(G, k),
				s(G, N),
				s(G, z),
				s(z, Y),
				I(C, X, Z),
				I(C, D, Z),
				s(D, ge),
				s(ge, ue),
				s(ge, tt),
				s(ge, ee),
				Te && Te.m(ee, null),
				s(D, le),
				s(D, H),
				s(H, O),
				s(H, he),
				s(H, L),
				ft && ft.m(L, null),
				s(D, be),
				s(D, ze),
				s(ze, Me),
				s(ze, xe),
				s(ze, Ye),
				Ae && Ae.m(Ye, null),
				s(D, lt),
				s(D, ie),
				s(ie, Be),
				s(ie, rt),
				s(ie, ke),
				ot && ot.m(ke, null),
				s(D, nt),
				s(D, re),
				s(re, Fe),
				s(re, st),
				s(re, je),
				ct && ct.m(je, null),
				s(D, it),
				s(D, se),
				s(se, Je),
				s(se, at),
				s(se, Ie),
				Le && Le.m(Ie, null),
				s(D, pe),
				s(D, U),
				s(U, x),
				s(U, M),
				s(U, B),
				ut && ut.m(B, null),
				s(D, E),
				s(D, S),
				s(S, J),
				s(S, F),
				s(S, V),
				dt && dt.m(V, null),
				s(D, b),
				s(D, T),
				s(T, At),
				s(T, Lt),
				s(T, Dt),
				mt && mt.m(Dt, null),
				s(D, Mt),
				s(D, Nt),
				s(Nt, jt),
				s(Nt, Ot),
				s(Nt, Ut),
				Oe && Oe.m(Ut, null),
				s(D, Pt),
				s(D, yt),
				s(yt, It),
				s(yt, Et),
				s(yt, Vt),
				_t && _t.m(Vt, null),
				s(D, xt),
				s(D, $t),
				s($t, me),
				s($t, ve),
				s($t, we),
				gt && gt.m(we, null),
				s(D, Ze),
				s(D, $e),
				s($e, Se),
				s($e, Ge),
				s($e, Ne),
				ht && ht.m(Ne, null),
				s(D, He),
				s(D, De),
				s(De, _e),
				s(De, Ke),
				s(De, de),
				Ee && Ee.m(de, null),
				s(D, Qe),
				s(D, ae),
				s(ae, ye),
				s(ae, We),
				s(ae, Re),
				s(Re, w),
				s(D, ne),
				s(D, Bt),
				s(Bt, Yt),
				s(Bt, gl),
				s(Bt, Qt),
				bt && bt.m(Qt, null),
				(St = !0),
				sl ||
					((hl = [Tt(a, 'click', l[2]), Tt(p, 'click', l[3]), Tt(z, 'click', l[4])]), (sl = !0));
		},
		p(C, [Z]) {
			(!St || Z & 1) &&
				r !== (r = (C[0].trait.traitName ? C[0].trait.traitName : C[0].trait.traitDbId) + '') &&
				y(f, r),
				(!St || Z & 1) &&
					v !==
						(v = (C[0].method.methodName ? C[0].method.methodName : C[0].method.methodDbId) + '') &&
					y(A, v),
				(!St || Z & 1) &&
					P !== (P = (C[0].scale.scaleName ? C[0].scale.scaleName : C[0].scale.scaleDbId) + '') &&
					y(Y, P),
				C[0].additionalInfo
					? Te
						? (Te.p(C, Z), Z & 1 && g(Te, 1))
						: ((Te = El(C)), Te.c(), g(Te, 1), Te.m(ee, null))
					: Te &&
						(fe(),
						h(Te, 1, 1, () => {
							Te = null;
						}),
						oe()),
				C[0].commonCropName
					? ft
						? ft.p(C, Z)
						: ((ft = zl(C)), ft.c(), ft.m(L, null))
					: ft && (ft.d(1), (ft = null)),
				C[0].contextOfUse
					? Ae
						? (Ae.p(C, Z), Z & 1 && g(Ae, 1))
						: ((Ae = Ml(C)), Ae.c(), g(Ae, 1), Ae.m(Ye, null))
					: Ae &&
						(fe(),
						h(Ae, 1, 1, () => {
							Ae = null;
						}),
						oe()),
				C[0].defaultValue
					? ot
						? ot.p(C, Z)
						: ((ot = Bl(C)), ot.c(), ot.m(ke, null))
					: ot && (ot.d(1), (ot = null)),
				C[0].documentationURL
					? ct
						? ct.p(C, Z)
						: ((ct = Fl(C)), ct.c(), ct.m(je, null))
					: ct && (ct.d(1), (ct = null)),
				C[0].externalReferences
					? Le
						? (Le.p(C, Z), Z & 1 && g(Le, 1))
						: ((Le = Jl(C)), Le.c(), g(Le, 1), Le.m(Ie, null))
					: Le &&
						(fe(),
						h(Le, 1, 1, () => {
							Le = null;
						}),
						oe()),
				C[0].growthStage
					? ut
						? ut.p(C, Z)
						: ((ut = Gl(C)), ut.c(), ut.m(B, null))
					: ut && (ut.d(1), (ut = null)),
				C[0].institution
					? dt
						? dt.p(C, Z)
						: ((dt = Hl(C)), dt.c(), dt.m(V, null))
					: dt && (dt.d(1), (dt = null)),
				C[0].language
					? mt
						? mt.p(C, Z)
						: ((mt = Kl(C)), mt.c(), mt.m(Dt, null))
					: mt && (mt.d(1), (mt = null)),
				C[0].ontologyReference
					? Oe
						? (Oe.p(C, Z), Z & 1 && g(Oe, 1))
						: ((Oe = Ql(C)), Oe.c(), g(Oe, 1), Oe.m(Ut, null))
					: Oe &&
						(fe(),
						h(Oe, 1, 1, () => {
							Oe = null;
						}),
						oe()),
				C[0].scientist
					? _t
						? _t.p(C, Z)
						: ((_t = Wl(C)), _t.c(), _t.m(Vt, null))
					: _t && (_t.d(1), (_t = null)),
				C[0].status
					? gt
						? gt.p(C, Z)
						: ((gt = Xl(C)), gt.c(), gt.m(we, null))
					: gt && (gt.d(1), (gt = null)),
				C[0].submissionTimestamp
					? ht
						? ht.p(C, Z)
						: ((ht = Yl(C)), ht.c(), ht.m(Ne, null))
					: ht && (ht.d(1), (ht = null)),
				C[0].synonyms
					? Ee
						? (Ee.p(C, Z), Z & 1 && g(Ee, 1))
						: ((Ee = Zl(C)), Ee.c(), g(Ee, 1), Ee.m(de, null))
					: Ee &&
						(fe(),
						h(Ee, 1, 1, () => {
							Ee = null;
						}),
						oe()),
				(!St || Z & 1) && Ue !== (Ue = C[0].observationVariableDbId + '') && y(w, Ue),
				C[0].observationVariableName
					? bt
						? bt.p(C, Z)
						: ((bt = en(C)), bt.c(), bt.m(Qt, null))
					: bt && (bt.d(1), (bt = null));
		},
		i(C) {
			St || (g(Te), g(Ae), g(Le), g(Oe), g(Ee), (St = !0));
		},
		o(C) {
			h(Te), h(Ae), h(Le), h(Oe), h(Ee), (St = !1);
		},
		d(C) {
			C && (j(e), j(X), j(D)),
				Te && Te.d(),
				ft && ft.d(),
				Ae && Ae.d(),
				ot && ot.d(),
				ct && ct.d(),
				Le && Le.d(),
				ut && ut.d(),
				dt && dt.d(),
				mt && mt.d(),
				Oe && Oe.d(),
				_t && _t.d(),
				gt && gt.d(),
				ht && ht.d(),
				Ee && Ee.d(),
				bt && bt.d(),
				(sl = !1),
				Kt(hl);
		}
	};
}
function Hi(l, e, n) {
	let t;
	kt(l, te, (o) => n(1, (t = o)));
	let { variable: i = {} } = e;
	const a = () => {
			Xe(te, (t.selection = i.trait), t), Xe(te, (t.selectionType = 'trait'), t);
		},
		r = () => {
			Xe(te, (t.selection = i.method), t), Xe(te, (t.selectionType = 'method'), t);
		},
		f = () => {
			Xe(te, (t.selection = i.scale), t), Xe(te, (t.selectionType = 'scale'), t);
		};
	return (
		(l.$$set = (o) => {
			'variable' in o && n(0, (i = o.variable));
		}),
		[i, t, a, r, f]
	);
}
class Ki extends Ve {
	constructor(e) {
		super(), Pe(this, e, Hi, Gi, qe, { variable: 0 }, Ji);
	}
}
function Qi(l) {
	wt(
		l,
		'svelte-g1x0jx',
		'table.svelte-g1x0jx{width:100%}th.svelte-g1x0jx{text-align:left;padding:0.25rem}td.svelte-g1x0jx{text-align:left;padding:0.25rem}tr.svelte-g1x0jx{background-color:white;color:black}'
	);
}
function tn(l) {
	let e, n;
	return (
		(e = new ll({ props: { dict: l[0].additionalInfo } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.dict = t[0].additionalInfo), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function ln(l) {
	let e, n;
	return (
		(e = new nl({ props: { refs: l[0].externalReferences } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.refs = t[0].externalReferences), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function nn(l) {
	let e,
		n = l[0].bibliographicalReference + '',
		t,
		i;
	return {
		c() {
			(e = c('a')),
				(t = q(n)),
				u(e, 'target', '_blank'),
				u(e, 'href', (i = l[0].bibliographicalReference));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].bibliographicalReference + '') && y(t, n),
				r & 1 && i !== (i = a[0].bibliographicalReference) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function rn(l) {
	let e = l[0].description + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].description + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function sn(l) {
	let e = l[0].formula + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].formula + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function an(l) {
	let e = l[0].methodClass + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].methodClass + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function fn(l) {
	let e = l[0].methodName + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].methodName + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function on(l) {
	let e,
		n = l[0].methodPUI + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[0].methodPUI));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].methodPUI + '') && y(t, n),
				r & 1 && i !== (i = a[0].methodPUI) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function cn(l) {
	let e, n;
	return (
		(e = new rl({ props: { ontoRef: l[0].ontologyReference } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.ontoRef = t[0].ontologyReference), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function Wi(l) {
	let e,
		n,
		t,
		i,
		a,
		r,
		f,
		o,
		m,
		_,
		R,
		p,
		v,
		A,
		$,
		G,
		k,
		N,
		z,
		P,
		Y,
		X,
		D,
		ge,
		ue,
		tt,
		ee,
		le,
		H,
		O,
		he,
		L,
		be,
		ze,
		Me,
		xe = l[0].methodDbId + '',
		Ye,
		lt,
		ie,
		Be,
		rt,
		ke,
		nt,
		re,
		Fe,
		st,
		je,
		it,
		se,
		Je,
		at,
		Ie,
		pe,
		U = l[0].additionalInfo && tn(l),
		x = l[0].externalReferences && ln(l),
		M = l[0].bibliographicalReference && nn(l),
		B = l[0].description && rn(l),
		E = l[0].formula && sn(l),
		S = l[0].methodClass && an(l),
		J = l[0].methodName && fn(l),
		F = l[0].methodPUI && on(l),
		V = l[0].ontologyReference && cn(l);
	return {
		c() {
			(e = c('table')),
				(n = c('tr')),
				(t = c('th')),
				(t.textContent = 'Additional Info'),
				(i = d()),
				(a = c('td')),
				U && U.c(),
				(r = d()),
				(f = c('tr')),
				(o = c('th')),
				(o.textContent = 'External References'),
				(m = d()),
				(_ = c('td')),
				x && x.c(),
				(R = d()),
				(p = c('tr')),
				(v = c('th')),
				(v.textContent = 'Bibliographical Reference'),
				(A = d()),
				($ = c('td')),
				M && M.c(),
				(G = d()),
				(k = c('tr')),
				(N = c('th')),
				(N.textContent = 'Description'),
				(z = d()),
				(P = c('td')),
				B && B.c(),
				(Y = d()),
				(X = c('tr')),
				(D = c('th')),
				(D.textContent = 'Formula'),
				(ge = d()),
				(ue = c('td')),
				E && E.c(),
				(tt = d()),
				(ee = c('tr')),
				(le = c('th')),
				(le.textContent = 'Method Class'),
				(H = d()),
				(O = c('td')),
				S && S.c(),
				(he = d()),
				(L = c('tr')),
				(be = c('th')),
				(be.textContent = 'Method Identifier'),
				(ze = d()),
				(Me = c('td')),
				(Ye = q(xe)),
				(lt = d()),
				(ie = c('tr')),
				(Be = c('th')),
				(Be.textContent = 'Method Name'),
				(rt = d()),
				(ke = c('td')),
				J && J.c(),
				(nt = d()),
				(re = c('tr')),
				(Fe = c('th')),
				(Fe.textContent = 'Method PUI'),
				(st = d()),
				(je = c('td')),
				F && F.c(),
				(it = d()),
				(se = c('tr')),
				(Je = c('th')),
				(Je.textContent = 'Ontology Reference'),
				(at = d()),
				(Ie = c('td')),
				V && V.c(),
				u(t, 'class', 'svelte-g1x0jx'),
				u(a, 'class', 'svelte-g1x0jx'),
				u(n, 'class', 'svelte-g1x0jx'),
				u(o, 'class', 'svelte-g1x0jx'),
				u(_, 'class', 'svelte-g1x0jx'),
				u(f, 'class', 'svelte-g1x0jx'),
				u(v, 'class', 'svelte-g1x0jx'),
				u($, 'class', 'svelte-g1x0jx'),
				u(p, 'class', 'svelte-g1x0jx'),
				u(N, 'class', 'svelte-g1x0jx'),
				u(P, 'class', 'svelte-g1x0jx'),
				u(k, 'class', 'svelte-g1x0jx'),
				u(D, 'class', 'svelte-g1x0jx'),
				u(ue, 'class', 'svelte-g1x0jx'),
				u(X, 'class', 'svelte-g1x0jx'),
				u(le, 'class', 'svelte-g1x0jx'),
				u(O, 'class', 'svelte-g1x0jx'),
				u(ee, 'class', 'svelte-g1x0jx'),
				u(be, 'class', 'svelte-g1x0jx'),
				u(Me, 'class', 'svelte-g1x0jx'),
				u(L, 'class', 'svelte-g1x0jx'),
				u(Be, 'class', 'svelte-g1x0jx'),
				u(ke, 'class', 'svelte-g1x0jx'),
				u(ie, 'class', 'svelte-g1x0jx'),
				u(Fe, 'class', 'svelte-g1x0jx'),
				u(je, 'class', 'svelte-g1x0jx'),
				u(re, 'class', 'svelte-g1x0jx'),
				u(Je, 'class', 'svelte-g1x0jx'),
				u(Ie, 'class', 'svelte-g1x0jx'),
				u(se, 'class', 'svelte-g1x0jx'),
				u(e, 'class', 'svelte-g1x0jx');
		},
		m(b, T) {
			I(b, e, T),
				s(e, n),
				s(n, t),
				s(n, i),
				s(n, a),
				U && U.m(a, null),
				s(e, r),
				s(e, f),
				s(f, o),
				s(f, m),
				s(f, _),
				x && x.m(_, null),
				s(e, R),
				s(e, p),
				s(p, v),
				s(p, A),
				s(p, $),
				M && M.m($, null),
				s(e, G),
				s(e, k),
				s(k, N),
				s(k, z),
				s(k, P),
				B && B.m(P, null),
				s(e, Y),
				s(e, X),
				s(X, D),
				s(X, ge),
				s(X, ue),
				E && E.m(ue, null),
				s(e, tt),
				s(e, ee),
				s(ee, le),
				s(ee, H),
				s(ee, O),
				S && S.m(O, null),
				s(e, he),
				s(e, L),
				s(L, be),
				s(L, ze),
				s(L, Me),
				s(Me, Ye),
				s(e, lt),
				s(e, ie),
				s(ie, Be),
				s(ie, rt),
				s(ie, ke),
				J && J.m(ke, null),
				s(e, nt),
				s(e, re),
				s(re, Fe),
				s(re, st),
				s(re, je),
				F && F.m(je, null),
				s(e, it),
				s(e, se),
				s(se, Je),
				s(se, at),
				s(se, Ie),
				V && V.m(Ie, null),
				(pe = !0);
		},
		p(b, [T]) {
			b[0].additionalInfo
				? U
					? (U.p(b, T), T & 1 && g(U, 1))
					: ((U = tn(b)), U.c(), g(U, 1), U.m(a, null))
				: U &&
					(fe(),
					h(U, 1, 1, () => {
						U = null;
					}),
					oe()),
				b[0].externalReferences
					? x
						? (x.p(b, T), T & 1 && g(x, 1))
						: ((x = ln(b)), x.c(), g(x, 1), x.m(_, null))
					: x &&
						(fe(),
						h(x, 1, 1, () => {
							x = null;
						}),
						oe()),
				b[0].bibliographicalReference
					? M
						? M.p(b, T)
						: ((M = nn(b)), M.c(), M.m($, null))
					: M && (M.d(1), (M = null)),
				b[0].description
					? B
						? B.p(b, T)
						: ((B = rn(b)), B.c(), B.m(P, null))
					: B && (B.d(1), (B = null)),
				b[0].formula
					? E
						? E.p(b, T)
						: ((E = sn(b)), E.c(), E.m(ue, null))
					: E && (E.d(1), (E = null)),
				b[0].methodClass
					? S
						? S.p(b, T)
						: ((S = an(b)), S.c(), S.m(O, null))
					: S && (S.d(1), (S = null)),
				(!pe || T & 1) && xe !== (xe = b[0].methodDbId + '') && y(Ye, xe),
				b[0].methodName
					? J
						? J.p(b, T)
						: ((J = fn(b)), J.c(), J.m(ke, null))
					: J && (J.d(1), (J = null)),
				b[0].methodPUI
					? F
						? F.p(b, T)
						: ((F = on(b)), F.c(), F.m(je, null))
					: F && (F.d(1), (F = null)),
				b[0].ontologyReference
					? V
						? (V.p(b, T), T & 1 && g(V, 1))
						: ((V = cn(b)), V.c(), g(V, 1), V.m(Ie, null))
					: V &&
						(fe(),
						h(V, 1, 1, () => {
							V = null;
						}),
						oe());
		},
		i(b) {
			pe || (g(U), g(x), g(V), (pe = !0));
		},
		o(b) {
			h(U), h(x), h(V), (pe = !1);
		},
		d(b) {
			b && j(e),
				U && U.d(),
				x && x.d(),
				M && M.d(),
				B && B.d(),
				E && E.d(),
				S && S.d(),
				J && J.d(),
				F && F.d(),
				V && V.d();
		}
	};
}
function Xi(l, e, n) {
	let { method: t = {} } = e;
	return (
		(l.$$set = (i) => {
			'method' in i && n(0, (t = i.method));
		}),
		[t]
	);
}
class Yi extends Ve {
	constructor(e) {
		super(), Pe(this, e, Xi, Wi, qe, { method: 0 }, Qi);
	}
}
function Zi(l) {
	wt(
		l,
		'svelte-g1x0jx',
		'table.svelte-g1x0jx{width:100%}th.svelte-g1x0jx{text-align:left;padding:0.25rem}td.svelte-g1x0jx{text-align:left;padding:0.25rem}tr.svelte-g1x0jx{background-color:white;color:black}'
	);
}
function un(l) {
	let e, n;
	return (
		(e = new ll({ props: { dict: l[0].additionalInfo } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.dict = t[0].additionalInfo), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function dn(l) {
	let e, n;
	return (
		(e = new il({ props: { table: l[0].alternativeAbbreviations } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.table = t[0].alternativeAbbreviations), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function mn(l) {
	let e = l[0].attribute + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].attribute + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function _n(l) {
	let e;
	return {
		c() {
			e = q('(');
		},
		m(n, t) {
			I(n, e, t);
		},
		d(n) {
			n && j(e);
		}
	};
}
function gn(l) {
	let e,
		n = l[0].attributePUI + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[0].attributePUI));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].attributePUI + '') && y(t, n),
				r & 1 && i !== (i = a[0].attributePUI) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function hn(l) {
	let e;
	return {
		c() {
			e = q(')');
		},
		m(n, t) {
			I(n, e, t);
		},
		d(n) {
			n && j(e);
		}
	};
}
function bn(l) {
	let e = l[0].entity + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].entity + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function pn(l) {
	let e;
	return {
		c() {
			e = q('(');
		},
		m(n, t) {
			I(n, e, t);
		},
		d(n) {
			n && j(e);
		}
	};
}
function vn(l) {
	let e,
		n = l[0].entityPUI + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[0].entityPUI));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].entityPUI + '') && y(t, n),
				r & 1 && i !== (i = a[0].entityPUI) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function $n(l) {
	let e;
	return {
		c() {
			e = q(')');
		},
		m(n, t) {
			I(n, e, t);
		},
		d(n) {
			n && j(e);
		}
	};
}
function kn(l) {
	let e, n;
	return (
		(e = new nl({ props: { refs: l[0].externalReferences } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.refs = t[0].externalReferences), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function jn(l) {
	let e = l[0].mainAbbreviation + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].mainAbbreviation + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function In(l) {
	let e, n;
	return (
		(e = new rl({ props: { ontoRef: l[0].ontologyReference } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.ontoRef = t[0].ontologyReference), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function wn(l) {
	let e = l[0].status + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].status + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Dn(l) {
	let e, n;
	return (
		(e = new il({ props: { table: l[0].synonyms } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.table = t[0].synonyms), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function Cn(l) {
	let e = l[0].traitClass + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].traitClass + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function qn(l) {
	let e = l[0].traitDescription + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].traitDescription + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Nn(l) {
	let e = l[0].traitName + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].traitName + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function yn(l) {
	let e,
		n = l[0].traitPUI + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[0].traitPUI));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].traitPUI + '') && y(t, n),
				r & 1 && i !== (i = a[0].traitPUI) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function er(l) {
	let e,
		n,
		t,
		i,
		a,
		r,
		f,
		o,
		m,
		_,
		R,
		p,
		v,
		A,
		$,
		G,
		k,
		N,
		z,
		P,
		Y,
		X,
		D,
		ge,
		ue,
		tt,
		ee,
		le,
		H,
		O,
		he,
		L,
		be,
		ze,
		Me,
		xe,
		Ye,
		lt,
		ie,
		Be,
		rt,
		ke,
		nt,
		re,
		Fe,
		st,
		je,
		it,
		se,
		Je,
		at,
		Ie,
		pe,
		U,
		x,
		M,
		B,
		E,
		S,
		J,
		F,
		V,
		b,
		T,
		At,
		Lt,
		Dt = l[0].traitDbId + '',
		Mt,
		Nt,
		jt,
		Ot,
		Ut,
		Pt,
		yt,
		It,
		Et,
		Vt,
		xt,
		$t,
		me = l[0].additionalInfo && un(l),
		ve = l[0].alternativeAbbreviations && dn(l),
		we = l[0].attribute && mn(l),
		Ze = l[0].attribute && l[0].attributePUI && _n(),
		$e = l[0].attributePUI && gn(l),
		Se = l[0].attribute && l[0].attributePUI && hn(),
		Ge = l[0].entity && bn(l),
		Ne = l[0].entity && l[0].entityPUI && pn(),
		He = l[0].entityPUI && vn(l),
		De = l[0].entity && l[0].entityPUI && $n(),
		_e = l[0].externalReferences && kn(l),
		Ke = l[0].mainAbbreviation && jn(l),
		de = l[0].ontologyReference && In(l),
		Qe = l[0].status && wn(l),
		ae = l[0].synonyms && Dn(l),
		ye = l[0].traitClass && Cn(l),
		We = l[0].traitDescription && qn(l),
		Re = l[0].traitName && Nn(l),
		Ue = l[0].traitPUI && yn(l);
	return {
		c() {
			(e = c('table')),
				(n = c('tr')),
				(t = c('th')),
				(t.textContent = 'Additional Info'),
				(i = d()),
				(a = c('td')),
				me && me.c(),
				(r = d()),
				(f = c('tr')),
				(o = c('th')),
				(o.textContent = 'Alternative Abbreviations'),
				(m = d()),
				(_ = c('td')),
				ve && ve.c(),
				(R = d()),
				(p = c('tr')),
				(v = c('th')),
				(v.textContent = 'Attribute'),
				(A = d()),
				($ = c('td')),
				we && we.c(),
				(G = d()),
				Ze && Ze.c(),
				(k = d()),
				$e && $e.c(),
				(N = d()),
				Se && Se.c(),
				(z = d()),
				(P = c('tr')),
				(Y = c('th')),
				(Y.textContent = 'Entity'),
				(X = d()),
				(D = c('td')),
				Ge && Ge.c(),
				(ge = d()),
				Ne && Ne.c(),
				(ue = d()),
				He && He.c(),
				(tt = d()),
				De && De.c(),
				(ee = d()),
				(le = c('tr')),
				(H = c('th')),
				(H.textContent = 'External References'),
				(O = d()),
				(he = c('td')),
				_e && _e.c(),
				(L = d()),
				(be = c('tr')),
				(ze = c('th')),
				(ze.textContent = 'Main Abbreviation'),
				(Me = d()),
				(xe = c('td')),
				Ke && Ke.c(),
				(Ye = d()),
				(lt = c('tr')),
				(ie = c('th')),
				(ie.textContent = 'Ontology Reference'),
				(Be = d()),
				(rt = c('td')),
				de && de.c(),
				(ke = d()),
				(nt = c('tr')),
				(re = c('th')),
				(re.textContent = 'Status'),
				(Fe = d()),
				(st = c('td')),
				Qe && Qe.c(),
				(je = d()),
				(it = c('tr')),
				(se = c('th')),
				(se.textContent = 'Synonyms'),
				(Je = d()),
				(at = c('td')),
				ae && ae.c(),
				(Ie = d()),
				(pe = c('tr')),
				(U = c('th')),
				(U.textContent = 'Trait Class'),
				(x = d()),
				(M = c('td')),
				ye && ye.c(),
				(B = d()),
				(E = c('tr')),
				(S = c('th')),
				(S.textContent = 'Trait Description'),
				(J = d()),
				(F = c('td')),
				We && We.c(),
				(V = d()),
				(b = c('tr')),
				(T = c('th')),
				(T.textContent = 'Trait Identifier'),
				(At = d()),
				(Lt = c('td')),
				(Mt = q(Dt)),
				(Nt = d()),
				(jt = c('tr')),
				(Ot = c('th')),
				(Ot.textContent = 'Trait Name'),
				(Ut = d()),
				(Pt = c('td')),
				Re && Re.c(),
				(yt = d()),
				(It = c('tr')),
				(Et = c('th')),
				(Et.textContent = 'Trait PUI'),
				(Vt = d()),
				(xt = c('td')),
				Ue && Ue.c(),
				u(t, 'class', 'svelte-g1x0jx'),
				u(a, 'class', 'svelte-g1x0jx'),
				u(n, 'class', 'svelte-g1x0jx'),
				u(o, 'class', 'svelte-g1x0jx'),
				u(_, 'class', 'svelte-g1x0jx'),
				u(f, 'class', 'svelte-g1x0jx'),
				u(v, 'class', 'svelte-g1x0jx'),
				u($, 'class', 'svelte-g1x0jx'),
				u(p, 'class', 'svelte-g1x0jx'),
				u(Y, 'class', 'svelte-g1x0jx'),
				u(D, 'class', 'svelte-g1x0jx'),
				u(P, 'class', 'svelte-g1x0jx'),
				u(H, 'class', 'svelte-g1x0jx'),
				u(he, 'class', 'svelte-g1x0jx'),
				u(le, 'class', 'svelte-g1x0jx'),
				u(ze, 'class', 'svelte-g1x0jx'),
				u(xe, 'class', 'svelte-g1x0jx'),
				u(be, 'class', 'svelte-g1x0jx'),
				u(ie, 'class', 'svelte-g1x0jx'),
				u(rt, 'class', 'svelte-g1x0jx'),
				u(lt, 'class', 'svelte-g1x0jx'),
				u(re, 'class', 'svelte-g1x0jx'),
				u(st, 'class', 'svelte-g1x0jx'),
				u(nt, 'class', 'svelte-g1x0jx'),
				u(se, 'class', 'svelte-g1x0jx'),
				u(at, 'class', 'svelte-g1x0jx'),
				u(it, 'class', 'svelte-g1x0jx'),
				u(U, 'class', 'svelte-g1x0jx'),
				u(M, 'class', 'svelte-g1x0jx'),
				u(pe, 'class', 'svelte-g1x0jx'),
				u(S, 'class', 'svelte-g1x0jx'),
				u(F, 'class', 'svelte-g1x0jx'),
				u(E, 'class', 'svelte-g1x0jx'),
				u(T, 'class', 'svelte-g1x0jx'),
				u(Lt, 'class', 'svelte-g1x0jx'),
				u(b, 'class', 'svelte-g1x0jx'),
				u(Ot, 'class', 'svelte-g1x0jx'),
				u(Pt, 'class', 'svelte-g1x0jx'),
				u(jt, 'class', 'svelte-g1x0jx'),
				u(Et, 'class', 'svelte-g1x0jx'),
				u(xt, 'class', 'svelte-g1x0jx'),
				u(It, 'class', 'svelte-g1x0jx'),
				u(e, 'class', 'svelte-g1x0jx');
		},
		m(w, ne) {
			I(w, e, ne),
				s(e, n),
				s(n, t),
				s(n, i),
				s(n, a),
				me && me.m(a, null),
				s(e, r),
				s(e, f),
				s(f, o),
				s(f, m),
				s(f, _),
				ve && ve.m(_, null),
				s(e, R),
				s(e, p),
				s(p, v),
				s(p, A),
				s(p, $),
				we && we.m($, null),
				s($, G),
				Ze && Ze.m($, null),
				s($, k),
				$e && $e.m($, null),
				s($, N),
				Se && Se.m($, null),
				s(e, z),
				s(e, P),
				s(P, Y),
				s(P, X),
				s(P, D),
				Ge && Ge.m(D, null),
				s(D, ge),
				Ne && Ne.m(D, null),
				s(D, ue),
				He && He.m(D, null),
				s(D, tt),
				De && De.m(D, null),
				s(e, ee),
				s(e, le),
				s(le, H),
				s(le, O),
				s(le, he),
				_e && _e.m(he, null),
				s(e, L),
				s(e, be),
				s(be, ze),
				s(be, Me),
				s(be, xe),
				Ke && Ke.m(xe, null),
				s(e, Ye),
				s(e, lt),
				s(lt, ie),
				s(lt, Be),
				s(lt, rt),
				de && de.m(rt, null),
				s(e, ke),
				s(e, nt),
				s(nt, re),
				s(nt, Fe),
				s(nt, st),
				Qe && Qe.m(st, null),
				s(e, je),
				s(e, it),
				s(it, se),
				s(it, Je),
				s(it, at),
				ae && ae.m(at, null),
				s(e, Ie),
				s(e, pe),
				s(pe, U),
				s(pe, x),
				s(pe, M),
				ye && ye.m(M, null),
				s(e, B),
				s(e, E),
				s(E, S),
				s(E, J),
				s(E, F),
				We && We.m(F, null),
				s(e, V),
				s(e, b),
				s(b, T),
				s(b, At),
				s(b, Lt),
				s(Lt, Mt),
				s(e, Nt),
				s(e, jt),
				s(jt, Ot),
				s(jt, Ut),
				s(jt, Pt),
				Re && Re.m(Pt, null),
				s(e, yt),
				s(e, It),
				s(It, Et),
				s(It, Vt),
				s(It, xt),
				Ue && Ue.m(xt, null),
				($t = !0);
		},
		p(w, [ne]) {
			w[0].additionalInfo
				? me
					? (me.p(w, ne), ne & 1 && g(me, 1))
					: ((me = un(w)), me.c(), g(me, 1), me.m(a, null))
				: me &&
					(fe(),
					h(me, 1, 1, () => {
						me = null;
					}),
					oe()),
				w[0].alternativeAbbreviations
					? ve
						? (ve.p(w, ne), ne & 1 && g(ve, 1))
						: ((ve = dn(w)), ve.c(), g(ve, 1), ve.m(_, null))
					: ve &&
						(fe(),
						h(ve, 1, 1, () => {
							ve = null;
						}),
						oe()),
				w[0].attribute
					? we
						? we.p(w, ne)
						: ((we = mn(w)), we.c(), we.m($, G))
					: we && (we.d(1), (we = null)),
				w[0].attribute && w[0].attributePUI
					? Ze || ((Ze = _n()), Ze.c(), Ze.m($, k))
					: Ze && (Ze.d(1), (Ze = null)),
				w[0].attributePUI
					? $e
						? $e.p(w, ne)
						: (($e = gn(w)), $e.c(), $e.m($, N))
					: $e && ($e.d(1), ($e = null)),
				w[0].attribute && w[0].attributePUI
					? Se || ((Se = hn()), Se.c(), Se.m($, null))
					: Se && (Se.d(1), (Se = null)),
				w[0].entity
					? Ge
						? Ge.p(w, ne)
						: ((Ge = bn(w)), Ge.c(), Ge.m(D, ge))
					: Ge && (Ge.d(1), (Ge = null)),
				w[0].entity && w[0].entityPUI
					? Ne || ((Ne = pn()), Ne.c(), Ne.m(D, ue))
					: Ne && (Ne.d(1), (Ne = null)),
				w[0].entityPUI
					? He
						? He.p(w, ne)
						: ((He = vn(w)), He.c(), He.m(D, tt))
					: He && (He.d(1), (He = null)),
				w[0].entity && w[0].entityPUI
					? De || ((De = $n()), De.c(), De.m(D, null))
					: De && (De.d(1), (De = null)),
				w[0].externalReferences
					? _e
						? (_e.p(w, ne), ne & 1 && g(_e, 1))
						: ((_e = kn(w)), _e.c(), g(_e, 1), _e.m(he, null))
					: _e &&
						(fe(),
						h(_e, 1, 1, () => {
							_e = null;
						}),
						oe()),
				w[0].mainAbbreviation
					? Ke
						? Ke.p(w, ne)
						: ((Ke = jn(w)), Ke.c(), Ke.m(xe, null))
					: Ke && (Ke.d(1), (Ke = null)),
				w[0].ontologyReference
					? de
						? (de.p(w, ne), ne & 1 && g(de, 1))
						: ((de = In(w)), de.c(), g(de, 1), de.m(rt, null))
					: de &&
						(fe(),
						h(de, 1, 1, () => {
							de = null;
						}),
						oe()),
				w[0].status
					? Qe
						? Qe.p(w, ne)
						: ((Qe = wn(w)), Qe.c(), Qe.m(st, null))
					: Qe && (Qe.d(1), (Qe = null)),
				w[0].synonyms
					? ae
						? (ae.p(w, ne), ne & 1 && g(ae, 1))
						: ((ae = Dn(w)), ae.c(), g(ae, 1), ae.m(at, null))
					: ae &&
						(fe(),
						h(ae, 1, 1, () => {
							ae = null;
						}),
						oe()),
				w[0].traitClass
					? ye
						? ye.p(w, ne)
						: ((ye = Cn(w)), ye.c(), ye.m(M, null))
					: ye && (ye.d(1), (ye = null)),
				w[0].traitDescription
					? We
						? We.p(w, ne)
						: ((We = qn(w)), We.c(), We.m(F, null))
					: We && (We.d(1), (We = null)),
				(!$t || ne & 1) && Dt !== (Dt = w[0].traitDbId + '') && y(Mt, Dt),
				w[0].traitName
					? Re
						? Re.p(w, ne)
						: ((Re = Nn(w)), Re.c(), Re.m(Pt, null))
					: Re && (Re.d(1), (Re = null)),
				w[0].traitPUI
					? Ue
						? Ue.p(w, ne)
						: ((Ue = yn(w)), Ue.c(), Ue.m(xt, null))
					: Ue && (Ue.d(1), (Ue = null));
		},
		i(w) {
			$t || (g(me), g(ve), g(_e), g(de), g(ae), ($t = !0));
		},
		o(w) {
			h(me), h(ve), h(_e), h(de), h(ae), ($t = !1);
		},
		d(w) {
			w && j(e),
				me && me.d(),
				ve && ve.d(),
				we && we.d(),
				Ze && Ze.d(),
				$e && $e.d(),
				Se && Se.d(),
				Ge && Ge.d(),
				Ne && Ne.d(),
				He && He.d(),
				De && De.d(),
				_e && _e.d(),
				Ke && Ke.d(),
				de && de.d(),
				Qe && Qe.d(),
				ae && ae.d(),
				ye && ye.d(),
				We && We.d(),
				Re && Re.d(),
				Ue && Ue.d();
		}
	};
}
function tr(l, e, n) {
	let { trait: t = {} } = e;
	return (
		(l.$$set = (i) => {
			'trait' in i && n(0, (t = i.trait));
		}),
		[t]
	);
}
class lr extends Ve {
	constructor(e) {
		super(), Pe(this, e, tr, er, qe, { trait: 0 }, Zi);
	}
}
function Rn(l, e, n) {
	const t = l.slice();
	return (t[1] = e[n]), t;
}
function Un(l) {
	let e,
		n = Ce(l[0].categories),
		t = [];
	for (let i = 0; i < n.length; i += 1) t[i] = Pn(Rn(l, n, i));
	return {
		c() {
			e = c('ul');
			for (let i = 0; i < t.length; i += 1) t[i].c();
		},
		m(i, a) {
			I(i, e, a);
			for (let r = 0; r < t.length; r += 1) t[r] && t[r].m(e, null);
		},
		p(i, a) {
			if (a & 1) {
				n = Ce(i[0].categories);
				let r;
				for (r = 0; r < n.length; r += 1) {
					const f = Rn(i, n, r);
					t[r] ? t[r].p(f, a) : ((t[r] = Pn(f)), t[r].c(), t[r].m(e, null));
				}
				for (; r < t.length; r += 1) t[r].d(1);
				t.length = n.length;
			}
		},
		d(i) {
			i && j(e), qt(t, i);
		}
	};
}
function Pn(l) {
	let e,
		n = l[1].value + '',
		t,
		i,
		a = l[1].label + '',
		r;
	return {
		c() {
			(e = c('li')), (t = q(n)), (i = q(': ')), (r = q(a));
		},
		m(f, o) {
			I(f, e, o), s(e, t), s(e, i), s(e, r);
		},
		p(f, o) {
			o & 1 && n !== (n = f[1].value + '') && y(t, n),
				o & 1 && a !== (a = f[1].label + '') && y(r, a);
		},
		d(f) {
			f && j(e);
		}
	};
}
function nr(l) {
	let e,
		n,
		t,
		i,
		a,
		r = l[0].min + '',
		f,
		o,
		m,
		_,
		R,
		p,
		v = l[0].max + '',
		A,
		$,
		G,
		k,
		N,
		z,
		P = l[0].categories && Un(l);
	return {
		c() {
			(e = c('table')),
				(n = c('tr')),
				(t = c('td')),
				(t.textContent = 'Minimum Value'),
				(i = d()),
				(a = c('td')),
				(f = q(r)),
				(o = d()),
				(m = c('tr')),
				(_ = c('td')),
				(_.textContent = 'Maximum Value'),
				(R = d()),
				(p = c('td')),
				(A = q(v)),
				($ = d()),
				(G = c('tr')),
				(k = c('td')),
				(k.textContent = 'Categories'),
				(N = d()),
				(z = c('td')),
				P && P.c();
		},
		m(Y, X) {
			I(Y, e, X),
				s(e, n),
				s(n, t),
				s(n, i),
				s(n, a),
				s(a, f),
				s(e, o),
				s(e, m),
				s(m, _),
				s(m, R),
				s(m, p),
				s(p, A),
				s(e, $),
				s(e, G),
				s(G, k),
				s(G, N),
				s(G, z),
				P && P.m(z, null);
		},
		p(Y, [X]) {
			X & 1 && r !== (r = Y[0].min + '') && y(f, r),
				X & 1 && v !== (v = Y[0].max + '') && y(A, v),
				Y[0].categories
					? P
						? P.p(Y, X)
						: ((P = Un(Y)), P.c(), P.m(z, null))
					: P && (P.d(1), (P = null));
		},
		i: ce,
		o: ce,
		d(Y) {
			Y && j(e), P && P.d();
		}
	};
}
function ir(l, e, n) {
	let { validValues: t = {} } = e;
	return (
		(l.$$set = (i) => {
			'validValues' in i && n(0, (t = i.validValues));
		}),
		[t]
	);
}
class rr extends Ve {
	constructor(e) {
		super(), Pe(this, e, ir, nr, qe, { validValues: 0 });
	}
}
function sr(l) {
	wt(
		l,
		'svelte-g1x0jx',
		'table.svelte-g1x0jx{width:100%}th.svelte-g1x0jx{text-align:left;padding:0.25rem}td.svelte-g1x0jx{text-align:left;padding:0.25rem}tr.svelte-g1x0jx{background-color:white;color:black}'
	);
}
function Vn(l) {
	let e, n;
	return (
		(e = new ll({ props: { dict: l[0].additionalInfo } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.dict = t[0].additionalInfo), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function xn(l) {
	let e, n;
	return (
		(e = new nl({ props: { refs: l[0].externalReferences } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.refs = t[0].externalReferences), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function Sn(l) {
	let e = l[0].dataType + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].dataType + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Tn(l) {
	let e = l[0].decimalPlaces + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].decimalPlaces + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function An(l) {
	let e = l[0].units + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].units + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function Ln(l) {
	let e, n;
	return (
		(e = new rl({ props: { ontoRef: l[0].ontologyReference } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.ontoRef = t[0].ontologyReference), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function On(l) {
	let e = l[0].scaleName + '',
		n;
	return {
		c() {
			n = q(e);
		},
		m(t, i) {
			I(t, n, i);
		},
		p(t, i) {
			i & 1 && e !== (e = t[0].scaleName + '') && y(n, e);
		},
		d(t) {
			t && j(n);
		}
	};
}
function En(l) {
	let e,
		n = l[0].scalePUI + '',
		t,
		i;
	return {
		c() {
			(e = c('a')), (t = q(n)), u(e, 'target', '_blank'), u(e, 'href', (i = l[0].scalePUI));
		},
		m(a, r) {
			I(a, e, r), s(e, t);
		},
		p(a, r) {
			r & 1 && n !== (n = a[0].scalePUI + '') && y(t, n),
				r & 1 && i !== (i = a[0].scalePUI) && u(e, 'href', i);
		},
		d(a) {
			a && j(e);
		}
	};
}
function zn(l) {
	let e, n;
	return (
		(e = new rr({ props: { validValues: l[0].validValues } })),
		{
			c() {
				W(e.$$.fragment);
			},
			m(t, i) {
				K(e, t, i), (n = !0);
			},
			p(t, i) {
				const a = {};
				i & 1 && (a.validValues = t[0].validValues), e.$set(a);
			},
			i(t) {
				n || (g(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				h(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				Q(e, t);
			}
		}
	);
}
function ar(l) {
	let e,
		n,
		t,
		i,
		a,
		r,
		f,
		o,
		m,
		_,
		R,
		p,
		v,
		A,
		$,
		G,
		k,
		N,
		z,
		P,
		Y,
		X,
		D,
		ge,
		ue,
		tt,
		ee,
		le,
		H,
		O,
		he,
		L,
		be,
		ze,
		Me,
		xe = l[0].scaleDbId + '',
		Ye,
		lt,
		ie,
		Be,
		rt,
		ke,
		nt,
		re,
		Fe,
		st,
		je,
		it,
		se,
		Je,
		at,
		Ie,
		pe,
		U = l[0].additionalInfo && Vn(l),
		x = l[0].externalReferences && xn(l),
		M = l[0].dataType && Sn(l),
		B = l[0].decimalPlaces && Tn(l),
		E = l[0].units && An(l),
		S = l[0].ontologyReference && Ln(l),
		J = l[0].scaleName && On(l),
		F = l[0].scalePUI && En(l),
		V = l[0].validValues && zn(l);
	return {
		c() {
			(e = c('table')),
				(n = c('tr')),
				(t = c('th')),
				(t.textContent = 'Additional Info'),
				(i = d()),
				(a = c('td')),
				U && U.c(),
				(r = d()),
				(f = c('tr')),
				(o = c('th')),
				(o.textContent = 'External References'),
				(m = d()),
				(_ = c('td')),
				x && x.c(),
				(R = d()),
				(p = c('tr')),
				(v = c('th')),
				(v.textContent = 'Data Type'),
				(A = d()),
				($ = c('td')),
				M && M.c(),
				(G = d()),
				(k = c('tr')),
				(N = c('th')),
				(N.textContent = 'Decimal Places'),
				(z = d()),
				(P = c('td')),
				B && B.c(),
				(Y = d()),
				(X = c('tr')),
				(D = c('th')),
				(D.textContent = 'Units'),
				(ge = d()),
				(ue = c('td')),
				E && E.c(),
				(tt = d()),
				(ee = c('tr')),
				(le = c('th')),
				(le.textContent = 'Ontology Reference'),
				(H = d()),
				(O = c('td')),
				S && S.c(),
				(he = d()),
				(L = c('tr')),
				(be = c('th')),
				(be.textContent = 'Scale Identifier'),
				(ze = d()),
				(Me = c('td')),
				(Ye = q(xe)),
				(lt = d()),
				(ie = c('tr')),
				(Be = c('th')),
				(Be.textContent = 'Scale Name'),
				(rt = d()),
				(ke = c('td')),
				J && J.c(),
				(nt = d()),
				(re = c('tr')),
				(Fe = c('th')),
				(Fe.textContent = 'Scale PUI'),
				(st = d()),
				(je = c('td')),
				F && F.c(),
				(it = d()),
				(se = c('tr')),
				(Je = c('th')),
				(Je.textContent = 'Valid Values'),
				(at = d()),
				(Ie = c('td')),
				V && V.c(),
				u(t, 'class', 'svelte-g1x0jx'),
				u(a, 'class', 'svelte-g1x0jx'),
				u(n, 'class', 'svelte-g1x0jx'),
				u(o, 'class', 'svelte-g1x0jx'),
				u(_, 'class', 'svelte-g1x0jx'),
				u(f, 'class', 'svelte-g1x0jx'),
				u(v, 'class', 'svelte-g1x0jx'),
				u($, 'class', 'svelte-g1x0jx'),
				u(p, 'class', 'svelte-g1x0jx'),
				u(N, 'class', 'svelte-g1x0jx'),
				u(P, 'class', 'svelte-g1x0jx'),
				u(k, 'class', 'svelte-g1x0jx'),
				u(D, 'class', 'svelte-g1x0jx'),
				u(ue, 'class', 'svelte-g1x0jx'),
				u(X, 'class', 'svelte-g1x0jx'),
				u(le, 'class', 'svelte-g1x0jx'),
				u(O, 'class', 'svelte-g1x0jx'),
				u(ee, 'class', 'svelte-g1x0jx'),
				u(be, 'class', 'svelte-g1x0jx'),
				u(Me, 'class', 'svelte-g1x0jx'),
				u(L, 'class', 'svelte-g1x0jx'),
				u(Be, 'class', 'svelte-g1x0jx'),
				u(ke, 'class', 'svelte-g1x0jx'),
				u(ie, 'class', 'svelte-g1x0jx'),
				u(Fe, 'class', 'svelte-g1x0jx'),
				u(je, 'class', 'svelte-g1x0jx'),
				u(re, 'class', 'svelte-g1x0jx'),
				u(Je, 'class', 'svelte-g1x0jx'),
				u(Ie, 'class', 'svelte-g1x0jx'),
				u(se, 'class', 'svelte-g1x0jx'),
				u(e, 'class', 'svelte-g1x0jx');
		},
		m(b, T) {
			I(b, e, T),
				s(e, n),
				s(n, t),
				s(n, i),
				s(n, a),
				U && U.m(a, null),
				s(e, r),
				s(e, f),
				s(f, o),
				s(f, m),
				s(f, _),
				x && x.m(_, null),
				s(e, R),
				s(e, p),
				s(p, v),
				s(p, A),
				s(p, $),
				M && M.m($, null),
				s(e, G),
				s(e, k),
				s(k, N),
				s(k, z),
				s(k, P),
				B && B.m(P, null),
				s(e, Y),
				s(e, X),
				s(X, D),
				s(X, ge),
				s(X, ue),
				E && E.m(ue, null),
				s(e, tt),
				s(e, ee),
				s(ee, le),
				s(ee, H),
				s(ee, O),
				S && S.m(O, null),
				s(e, he),
				s(e, L),
				s(L, be),
				s(L, ze),
				s(L, Me),
				s(Me, Ye),
				s(e, lt),
				s(e, ie),
				s(ie, Be),
				s(ie, rt),
				s(ie, ke),
				J && J.m(ke, null),
				s(e, nt),
				s(e, re),
				s(re, Fe),
				s(re, st),
				s(re, je),
				F && F.m(je, null),
				s(e, it),
				s(e, se),
				s(se, Je),
				s(se, at),
				s(se, Ie),
				V && V.m(Ie, null),
				(pe = !0);
		},
		p(b, [T]) {
			b[0].additionalInfo
				? U
					? (U.p(b, T), T & 1 && g(U, 1))
					: ((U = Vn(b)), U.c(), g(U, 1), U.m(a, null))
				: U &&
					(fe(),
					h(U, 1, 1, () => {
						U = null;
					}),
					oe()),
				b[0].externalReferences
					? x
						? (x.p(b, T), T & 1 && g(x, 1))
						: ((x = xn(b)), x.c(), g(x, 1), x.m(_, null))
					: x &&
						(fe(),
						h(x, 1, 1, () => {
							x = null;
						}),
						oe()),
				b[0].dataType
					? M
						? M.p(b, T)
						: ((M = Sn(b)), M.c(), M.m($, null))
					: M && (M.d(1), (M = null)),
				b[0].decimalPlaces
					? B
						? B.p(b, T)
						: ((B = Tn(b)), B.c(), B.m(P, null))
					: B && (B.d(1), (B = null)),
				b[0].units
					? E
						? E.p(b, T)
						: ((E = An(b)), E.c(), E.m(ue, null))
					: E && (E.d(1), (E = null)),
				b[0].ontologyReference
					? S
						? (S.p(b, T), T & 1 && g(S, 1))
						: ((S = Ln(b)), S.c(), g(S, 1), S.m(O, null))
					: S &&
						(fe(),
						h(S, 1, 1, () => {
							S = null;
						}),
						oe()),
				(!pe || T & 1) && xe !== (xe = b[0].scaleDbId + '') && y(Ye, xe),
				b[0].scaleName
					? J
						? J.p(b, T)
						: ((J = On(b)), J.c(), J.m(ke, null))
					: J && (J.d(1), (J = null)),
				b[0].scalePUI
					? F
						? F.p(b, T)
						: ((F = En(b)), F.c(), F.m(je, null))
					: F && (F.d(1), (F = null)),
				b[0].validValues
					? V
						? (V.p(b, T), T & 1 && g(V, 1))
						: ((V = zn(b)), V.c(), g(V, 1), V.m(Ie, null))
					: V &&
						(fe(),
						h(V, 1, 1, () => {
							V = null;
						}),
						oe());
		},
		i(b) {
			pe || (g(U), g(x), g(S), g(V), (pe = !0));
		},
		o(b) {
			h(U), h(x), h(S), h(V), (pe = !1);
		},
		d(b) {
			b && j(e),
				U && U.d(),
				x && x.d(),
				M && M.d(),
				B && B.d(),
				E && E.d(),
				S && S.d(),
				J && J.d(),
				F && F.d(),
				V && V.d();
		}
	};
}
function fr(l, e, n) {
	let { scale: t = {} } = e;
	return (
		(l.$$set = (i) => {
			'scale' in i && n(0, (t = i.scale));
		}),
		[t]
	);
}
class or extends Ve {
	constructor(e) {
		super(), Pe(this, e, fr, ar, qe, { scale: 0 }, sr);
	}
}
function cr(l) {
	let e, n, t;
	function i(r) {
		l[4](r);
	}
	let a = {};
	return (
		l[0].selection !== void 0 && (a.scale = l[0].selection),
		(e = new or({ props: a })),
		et.push(() => vt(e, 'scale', i)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(r, f) {
				K(e, r, f), (t = !0);
			},
			p(r, f) {
				const o = {};
				!n && f & 1 && ((n = !0), (o.scale = r[0].selection), pt(() => (n = !1))), e.$set(o);
			},
			i(r) {
				t || (g(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				h(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				Q(e, r);
			}
		}
	);
}
function ur(l) {
	let e, n, t;
	function i(r) {
		l[3](r);
	}
	let a = {};
	return (
		l[0].selection !== void 0 && (a.method = l[0].selection),
		(e = new Yi({ props: a })),
		et.push(() => vt(e, 'method', i)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(r, f) {
				K(e, r, f), (t = !0);
			},
			p(r, f) {
				const o = {};
				!n && f & 1 && ((n = !0), (o.method = r[0].selection), pt(() => (n = !1))), e.$set(o);
			},
			i(r) {
				t || (g(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				h(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				Q(e, r);
			}
		}
	);
}
function dr(l) {
	let e, n, t;
	function i(r) {
		l[2](r);
	}
	let a = {};
	return (
		l[0].selection !== void 0 && (a.trait = l[0].selection),
		(e = new lr({ props: a })),
		et.push(() => vt(e, 'trait', i)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(r, f) {
				K(e, r, f), (t = !0);
			},
			p(r, f) {
				const o = {};
				!n && f & 1 && ((n = !0), (o.trait = r[0].selection), pt(() => (n = !1))), e.$set(o);
			},
			i(r) {
				t || (g(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				h(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				Q(e, r);
			}
		}
	);
}
function mr(l) {
	let e, n, t;
	function i(r) {
		l[1](r);
	}
	let a = {};
	return (
		l[0].selection !== void 0 && (a.variable = l[0].selection),
		(e = new Ki({ props: a })),
		et.push(() => vt(e, 'variable', i)),
		{
			c() {
				W(e.$$.fragment);
			},
			m(r, f) {
				K(e, r, f), (t = !0);
			},
			p(r, f) {
				const o = {};
				!n && f & 1 && ((n = !0), (o.variable = r[0].selection), pt(() => (n = !1))), e.$set(o);
			},
			i(r) {
				t || (g(e.$$.fragment, r), (t = !0));
			},
			o(r) {
				h(e.$$.fragment, r), (t = !1);
			},
			d(r) {
				Q(e, r);
			}
		}
	);
}
function _r(l) {
	let e, n, t, i;
	const a = [mr, dr, ur, cr],
		r = [];
	function f(o, m) {
		return o[0].selectionType === 'variable'
			? 0
			: o[0].selectionType === 'trait'
				? 1
				: o[0].selectionType === 'method'
					? 2
					: o[0].selectionType === 'scale'
						? 3
						: -1;
	}
	return (
		~(n = f(l)) && (t = r[n] = a[n](l)),
		{
			c() {
				(e = c('section')), t && t.c();
			},
			m(o, m) {
				I(o, e, m), ~n && r[n].m(e, null), (i = !0);
			},
			p(o, [m]) {
				let _ = n;
				(n = f(o)),
					n === _
						? ~n && r[n].p(o, m)
						: (t &&
								(fe(),
								h(r[_], 1, 1, () => {
									r[_] = null;
								}),
								oe()),
							~n
								? ((t = r[n]), t ? t.p(o, m) : ((t = r[n] = a[n](o)), t.c()), g(t, 1), t.m(e, null))
								: (t = null));
			},
			i(o) {
				i || (g(t), (i = !0));
			},
			o(o) {
				h(t), (i = !1);
			},
			d(o) {
				o && j(e), ~n && r[n].d();
			}
		}
	);
}
function gr(l, e, n) {
	let t;
	kt(l, te, (o) => n(0, (t = o)));
	function i(o) {
		l.$$.not_equal(t.selection, o) && ((t.selection = o), te.set(t));
	}
	function a(o) {
		l.$$.not_equal(t.selection, o) && ((t.selection = o), te.set(t));
	}
	function r(o) {
		l.$$.not_equal(t.selection, o) && ((t.selection = o), te.set(t));
	}
	function f(o) {
		l.$$.not_equal(t.selection, o) && ((t.selection = o), te.set(t));
	}
	return [t, i, a, r, f];
}
class hr extends Ve {
	constructor(e) {
		super(), Pe(this, e, gr, _r, qe, {});
	}
}
function br(l) {
	wt(
		l,
		'svelte-10xtz3r',
		'section.svelte-10xtz3r{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-gap:10px}div.leftcol.svelte-10xtz3r{display:flex;justify-content:space-between;padding:0.5em;background-color:#f0f0f0;border:1px solid #ccc;border-radius:0.5rem;height:fit-content;min-height:100px;flex-direction:column}div.rightcol.svelte-10xtz3r{grid-column:span 2;padding:0.5em;background-color:#f0f0f0;border:1px solid #ccc;border-radius:0.5rem;height:fit-content;min-height:200px}'
	);
}
function pr(l) {
	let e, n, t, i, a, r, f, o, m;
	return (
		(t = new Pi({})),
		(a = new Ti({})),
		(o = new hr({})),
		{
			c() {
				(e = c('section')),
					(n = c('div')),
					W(t.$$.fragment),
					(i = d()),
					W(a.$$.fragment),
					(r = d()),
					(f = c('div')),
					W(o.$$.fragment),
					u(n, 'class', 'leftcol svelte-10xtz3r'),
					u(f, 'class', 'rightcol svelte-10xtz3r'),
					u(e, 'class', ' svelte-10xtz3r');
			},
			m(_, R) {
				I(_, e, R),
					s(e, n),
					K(t, n, null),
					s(n, i),
					K(a, n, null),
					s(e, r),
					s(e, f),
					K(o, f, null),
					(m = !0);
			},
			p: ce,
			i(_) {
				m || (g(t.$$.fragment, _), g(a.$$.fragment, _), g(o.$$.fragment, _), (m = !0));
			},
			o(_) {
				h(t.$$.fragment, _), h(a.$$.fragment, _), h(o.$$.fragment, _), (m = !1);
			},
			d(_) {
				_ && j(e), Q(t), Q(a), Q(o);
			}
		}
	);
}
function vr(l) {
	return (
		tl(async () => {
			oi(await ai(Jn.server));
		}),
		[]
	);
}
class $r extends Ve {
	constructor(e) {
		super(), Pe(this, e, vr, pr, qe, {}, br);
	}
}
function kr(l) {
	wt(l, 'svelte-1qqdhgn', '.debug-border{border:1px solid red}');
}
function jr(l) {
	let e, n, t;
	return (
		(n = new $r({})),
		{
			c() {
				(e = c('main')), W(n.$$.fragment);
			},
			m(i, a) {
				I(i, e, a), K(n, e, null), (t = !0);
			},
			p: ce,
			i(i) {
				t || (g(n.$$.fragment, i), (t = !0));
			},
			o(i) {
				h(n.$$.fragment, i), (t = !1);
			},
			d(i) {
				i && j(e), Q(n);
			}
		}
	);
}
function Ir(l, e, n) {
	let { config: t } = e;
	return (
		si(t),
		(l.$$set = (i) => {
			'config' in i && n(0, (t = i.config));
		}),
		[t]
	);
}
class wr extends Ve {
	constructor(e) {
		super(), Pe(this, e, Ir, jr, qe, { config: 0 }, kr);
	}
}
function Dr(l, e) {
	var f;
	const n = '#' + l,
		t = document.querySelector(n);
	let i;
	i = t.attachShadow({ mode: 'open' });
	const a = { server: (f = e.config) == null ? void 0 : f.server };
	return new wr({ target: i, props: { config: a } });
}
window.variableDisplay = { startApp: Dr };
