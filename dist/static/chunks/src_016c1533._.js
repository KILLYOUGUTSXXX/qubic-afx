(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_016c1533._.js", {

"[project]/src/models/_engine/main.provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable react-hooks/rules-of-hooks */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "registerModels": (()=>registerModels),
    "useLynxStore": (()=>useLynxStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const boundStore = {};
const getStates = (modelName, callbackState)=>{
    const currentState = typeof boundStore[modelName] === 'function' ? boundStore[modelName].getState()?.state : {};
    return callbackState(currentState);
};
function useActions(modelName) {
    const { actions } = typeof boundStore[modelName] === 'function' ? boundStore[modelName].getState() : {};
    return async (action, execute = [], useLoading = false)=>{
        const loadingKey = `${modelName}/${action}`;
        // Loading before action execution
        if (useLoading) {
            const loadings = boundStore[modelName].getState()?.loadings || [];
            await boundStore[modelName].setState({
                loadings: [
                    ...loadings,
                    loadingKey
                ]
            });
        }
        // Execute action
        await actions[action](...execute);
        // Loading after action execution
        if (useLoading) {
            const loadings = boundStore[modelName].getState()?.loadings;
            const index = loadings?.indexOf?.(loadingKey);
            if (typeof index === 'number' && index !== -1) {
                loadings?.splice?.(index, 1);
                await boundStore[modelName].setState({
                    loadings
                });
            }
        }
    };
}
function registerModels(models, listener) {
    const modelDefinitions = models();
    for (const modelDefinition of modelDefinitions){
        const { name, model, subscriptions } = modelDefinition;
        if (!boundStore[name]) {
            boundStore[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>model((partial)=>set((currentState)=>({
                            state: {
                                ...currentState.state,
                                ...partial
                            }
                        })), getStates, useActions));
        }
        if (typeof subscriptions === 'function') {
            listener(name, subscriptions(getStates, useActions));
        }
    }
}
function useLynxStore(model) {
    try {
        let store = boundStore[model];
        store = store((state)=>state);
        // if (!store) throw new Error()
        return {
            state: store.state,
            isLoading (act) {
                const { loadings } = store;
                return (loadings || []).indexOf(`${model}/${act}`) !== -1;
            },
            async useActions (act, executes, useLoading = false) {
                useActions(model)(act, executes, useLoading);
            }
        };
    } catch (er) {
        return {
            state: {},
            actions: {}
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/models/_engine/registry.model.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "useLynxModel": (()=>useLynxModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/_engine/main.provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
let globalPath = null;
let indexModelSubscriptions = [];
function useLynxModel(Components, models, ...props) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLynxModel.useMemo": ()=>{
            if (globalPath !== pathname) {
                globalPath = pathname;
                indexModelSubscriptions = [];
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModels"])(models, {
                "useLynxModel.useMemo": (model, subscriptions)=>{
                    if (typeof subscriptions === 'function' && indexModelSubscriptions.indexOf(model) === -1) {
                        indexModelSubscriptions.push(model);
                        return subscriptions({
                            pathname
                        });
                    }
                }
            }["useLynxModel.useMemo"]);
        }
    }["useLynxModel.useMemo"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Components, {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/models/_engine/registry.model.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
_s(useLynxModel, "z9jBofbLG6+BAIU21OwpDRBA9oc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/mock-datas/menus.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"M01\",\"name\":\"Users\",\"icon\":\"UserOutlined\",\"path\":\"/portal/users\"}]"));}}),
"[project]/src/components/Others/icon.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>Icons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$QuestionOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QuestionOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/QuestionOutlined.js [app-client] (ecmascript) <export default as QuestionOutlined>");
;
;
function Icons(props) {
    const Icon = __turbopack_context__.r("[project]/node_modules/@ant-design/icons/es/icons/index.js [app-client] (ecmascript)")[props.type];
    let className = props.className;
    if (!props.noDefaultColor) className = `!text-dark-color dark:!text-light-color ${props.className || ''}`;
    if (!Icon) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$QuestionOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__QuestionOutlined$3e$__["QuestionOutlined"], {
        ...props,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/Others/icon.layout.tsx",
        lineNumber: 21,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        onClick: typeof props.onClick === 'function' ? props.onClick : null,
        style: {
            fontSize: props.size,
            ...props.style
        },
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/Others/icon.layout.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Icons;
var _c;
__turbopack_context__.k.register(_c, "Icons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Others/text.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Text)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Text(props) {
    const className = `!text-dark-color dark:!text-light-color ${props.className || ''} `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ...props,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/Others/text.layout.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Text;
var _c;
__turbopack_context__.k.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Layouts/sidebar.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2d$datas$2f$menus$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/mock-datas/menus.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/icon.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/text.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function Sidebar(props) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '';
    const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${!breakpoint.sm ? 'mv' : ''} sidebar h-full flex-col flex ${props.collapsed ? 'collapsed' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex flex-row items-center px-2 py-4 gap-x-2 header bg-base-color dark:bg-dark-color ${props.collapsed ? 'collapsed' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "AppstoreOutlined",
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    !props.collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "text-[20px] font-semibold",
                        children: "Qubic"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: ()=>props.setCollapsed(!props.collapsed),
                        className: `navigation-toogle bg-white dark:bg-slate-800 !border-base-color dark:!border-light-color ${props.collapsed ? 'collapsed' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "CaretRightOutlined",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col h-full pt-10 pb-4 content bg-white dark:bg-slate-800 ${props.collapsed ? 'collapsed' : ''}`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2d$datas$2f$menus$2e$json__$28$json$29$__["default"].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: a.path,
                        className: `flex flex-row gap-2 align-middle items text-dark-color dark:text-light-color ${pathname.match(new RegExp(`^${a.path}\/?([0-9]+)?$`, 'g')) ? 'active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: a.icon,
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            !props.collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px]",
                                children: a.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                                lineNumber: 50,
                                columnNumber: 34
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col items-center px-2 py-6 gap-y-4 footer bg-base-color dark:bg-dark-color ${props.collapsed ? 'collapsed' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    onClick: props.onLogout,
                    className: "cursor-pointer relative flex flex-row justify-between max-w-fit min-w-[55px] h-[40px] py-2 px-3 bg-red-400 rounded-4xl text-light-color",
                    children: [
                        !props.collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "w-[90px] font-semibold text-[14px]",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "LogoutOutlined",
                            size: 18,
                            className: "!text-red-500 dark:!text-red-500 bg-light-color w-[30px] h-[30px] border flex flex-row justify-center rounded-full right-1 top-1 absolute"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layouts/sidebar.layout.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "to5ye/j8Amtf9jWw2avBfoULtM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Inputs/switch/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Switch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function Switch(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "switch",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                onChange: (v)=>props.onChange?.(v.target.checked),
                checked: props.checked,
                defaultChecked: props.defaultChecked
            }, void 0, false, {
                fileName: "[project]/src/components/Inputs/switch/main.layout.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "slider"
            }, void 0, false, {
                fileName: "[project]/src/components/Inputs/switch/main.layout.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Inputs/switch/main.layout.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Switch;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Layouts/header.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$switch$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Inputs/switch/main.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/icon.layout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Header(props) {
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint();
    const toogleViewMode = (isDark)=>{
        setDarkMode(isDark);
        localStorage.setItem('dark-mode', isDark ? '1' : '0');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        }
    }["Header.useEffect"], [
        darkMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const saveDarkMode = localStorage.getItem('dark-mode');
            setDarkMode(!!(saveDarkMode === '1'));
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "header-db flex flex-row justify-between bg-base-color dark:bg-dark-color",
        children: [
            !breakpoint.sm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                shape: "round",
                onClick: ()=>props.setCollapsed(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "MenuOutlined",
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/Layouts/header.layout.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Layouts/header.layout.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/src/components/Layouts/header.layout.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$switch$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                checked: darkMode,
                onChange: toogleViewMode
            }, void 0, false, {
                fileName: "[project]/src/components/Layouts/header.layout.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layouts/header.layout.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Header, "JLfeDnFiweYnMV0iJ+4MXY7mN4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/base/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BaseLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layouts$2f$sidebar$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layouts/sidebar.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layouts$2f$header$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layouts/header.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function BaseLayout(props) {
    _s();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaseLayout.useEffect": ()=>{
            setCollapsed(!breakpoint.sm);
        }
    }["BaseLayout.useEffect"], [
        breakpoint.sm
    ]);
    const onLogout = ()=>{
        localStorage.removeItem('utoken');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
    // return route.replace('/login')
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row h-[100dvh] w-[100dvw] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layouts$2f$sidebar$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onLogout: onLogout,
                collapsed: collapsed,
                setCollapsed: setCollapsed
            }, void 0, false, {
                fileName: "[project]/src/views/base/main.layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layouts$2f$header$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setCollapsed: ()=>setCollapsed(!collapsed)
                    }, void 0, false, {
                        fileName: "[project]/src/views/base/main.layout.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content-db dark:!bg-zinc-600 h-full",
                        children: props.children
                    }, void 0, false, {
                        fileName: "[project]/src/views/base/main.layout.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/base/main.layout.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/base/main.layout.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(BaseLayout, "wHbzYTXHkd1aXwpECPCilErxSeY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint
    ];
});
_c = BaseLayout;
var _c;
__turbopack_context__.k.register(_c, "BaseLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/base/index.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>IndexBaseLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$registry$2e$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/_engine/registry.model.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$base$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/base/main.layout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function IndexBaseLayout(props) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$registry$2e$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxModel"])({
        "IndexBaseLayout.useLynxModel": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$base$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/src/views/base/index.layout.tsx",
                lineNumber: 7,
                columnNumber: 29
            }, this)
    }["IndexBaseLayout.useLynxModel"], {
        "IndexBaseLayout.useLynxModel": ()=>[]
    }["IndexBaseLayout.useLynxModel"]);
}
_s(IndexBaseLayout, "rNeGC+XszNLOLhumY1sc5ltjbyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$registry$2e$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxModel"]
    ];
});
_c = IndexBaseLayout;
var _c;
__turbopack_context__.k.register(_c, "IndexBaseLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_016c1533._.js.map