import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DWeF_nyb.mjs';
import { manifest } from './manifest_Bd1kPkR2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/submit.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/features/agentic-crm.astro.mjs');
const _page6 = () => import('./pages/features/ai-visibility-tracker.astro.mjs');
const _page7 = () => import('./pages/features/budget-optimization.astro.mjs');
const _page8 = () => import('./pages/features/community-manager.astro.mjs');
const _page9 = () => import('./pages/features/content-creative-production.astro.mjs');
const _page10 = () => import('./pages/features/content-performance-prediction.astro.mjs');
const _page11 = () => import('./pages/features/hyper-personalized-engines.astro.mjs');
const _page12 = () => import('./pages/features/industry-metrics.astro.mjs');
const _page13 = () => import('./pages/features/influencer-vetting.astro.mjs');
const _page14 = () => import('./pages/features/trend-prediction.astro.mjs');
const _page15 = () => import('./pages/features.astro.mjs');
const _page16 = () => import('./pages/learn/_hub_/_cluster_/_article_.astro.mjs');
const _page17 = () => import('./pages/learn/_hub_/_cluster_.astro.mjs');
const _page18 = () => import('./pages/learn/_hub_.astro.mjs');
const _page19 = () => import('./pages/learn.astro.mjs');
const _page20 = () => import('./pages/pricing.astro.mjs');
const _page21 = () => import('./pages/privacy.astro.mjs');
const _page22 = () => import('./pages/robots.txt.astro.mjs');
const _page23 = () => import('./pages/signup.astro.mjs');
const _page24 = () => import('./pages/terms.astro.mjs');
const _page25 = () => import('./pages/use-cases/_industry_/_slug_.astro.mjs');
const _page26 = () => import('./pages/use-cases.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/submit.ts", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/features/agentic-crm.astro", _page5],
    ["src/pages/features/ai-visibility-tracker.astro", _page6],
    ["src/pages/features/budget-optimization.astro", _page7],
    ["src/pages/features/community-manager.astro", _page8],
    ["src/pages/features/content-creative-production.astro", _page9],
    ["src/pages/features/content-performance-prediction.astro", _page10],
    ["src/pages/features/hyper-personalized-engines.astro", _page11],
    ["src/pages/features/industry-metrics.astro", _page12],
    ["src/pages/features/influencer-vetting.astro", _page13],
    ["src/pages/features/trend-prediction.astro", _page14],
    ["src/pages/features/index.astro", _page15],
    ["src/pages/learn/[hub]/[cluster]/[article].astro", _page16],
    ["src/pages/learn/[hub]/[cluster]/index.astro", _page17],
    ["src/pages/learn/[hub]/index.astro", _page18],
    ["src/pages/learn/index.astro", _page19],
    ["src/pages/pricing.astro", _page20],
    ["src/pages/privacy.astro", _page21],
    ["src/pages/robots.txt.ts", _page22],
    ["src/pages/signup.astro", _page23],
    ["src/pages/terms.astro", _page24],
    ["src/pages/use-cases/[industry]/[slug].astro", _page25],
    ["src/pages/use-cases/index.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9feee617-bb5d-4e43-87b2-902ae9c7ed73",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
