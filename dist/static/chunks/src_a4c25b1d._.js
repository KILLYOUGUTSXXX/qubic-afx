(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_a4c25b1d._.js", {

"[project]/src/components/Lists/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>SimpleListView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
;
;
;
function SimpleListView(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
        vertical: true,
        gap: 3,
        children: props.dataSources.map((a, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: (v)=>{
                            props.onClickItem?.(a, idx);
                            return v.stopPropagation();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                            justify: "space-between",
                            align: "flex-start",
                            gap: 2,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                    vertical: true,
                                    gap: 2,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-stone-700 dark:text-light-color font-semibold text-[1em] truncate w-[67.5vw]",
                                            children: props.renderItem.title(a, idx)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Lists/main.layout.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-stone-700 dark:text-light-color text-[.85em] truncate w-[67.5vw]",
                                            children: props.renderItem.description(a, idx)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Lists/main.layout.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Lists/main.layout.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                                    className: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: props.renderItem.extra(a, idx)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Lists/main.layout.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Lists/main.layout.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Lists/main.layout.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, a.id, false, {
                        fileName: "[project]/src/components/Lists/main.layout.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        className: "!my-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Lists/main.layout.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true))
    }, void 0, false, {
        fileName: "[project]/src/components/Lists/main.layout.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = SimpleListView;
var _c;
__turbopack_context__.k.register(_c, "SimpleListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Others/spinner/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Spinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
function Spinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "spinner"
    }, void 0, false, {
        fileName: "[project]/src/components/Others/spinner/main.layout.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Spinner;
var _c;
__turbopack_context__.k.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Table/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>SimpleTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/text.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/icon.layout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SimpleTable(props) {
    _s();
    const [_dataSources, setDataSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [indexSort, setIndexSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const onClickSort = (key, dataIndex)=>{
        const curr = indexSort[key];
        let currMode = curr?.mode || 0;
        if (currMode < 2) currMode += 1;
        else currMode = 0;
        const newData = {
            ...indexSort,
            [key]: {
                key: dataIndex,
                mode: currMode
            }
        };
        props.onChangeSortData?.(newData);
        return setIndexSort(newData);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimpleTable.useEffect": ()=>{
            const sortKey = Object.keys(indexSort);
            setDataSources(props.dataSources.sort({
                "SimpleTable.useEffect": (a, b)=>{
                    for (const key of sortKey){
                        const sortConfig = indexSort[key];
                        if (!sortConfig) continue;
                        const valueA = (a || {})[sortConfig?.key];
                        const valueB = (b || {})[sortConfig?.key];
                        if (valueA === undefined || valueB === undefined) {
                            if (valueA === undefined && valueB === undefined) continue;
                            return valueA === undefined ? 1 : -1;
                        }
                        if (sortConfig.mode === 1) {
                            // Descending
                            if (valueA < valueB) return 1;
                            if (valueA > valueB) return -1;
                        } else if (sortConfig.mode === 2) {
                            // Ascending
                            if (valueA < valueB) return -1;
                            if (valueA > valueB) return 1;
                        }
                    }
                    return 0;
                }
            }["SimpleTable.useEffect"]));
        }
    }["SimpleTable.useEffect"], [
        props.dataSources,
        indexSort
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-x-auto rounded-md overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: props.columns.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                scope: "col",
                                className: "px-6 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: a.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Table/main.layout.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this),
                                        a.showSort && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "hover:cursor-pointer",
                                            onClick: (v)=>{
                                                onClickSort(a.key, a.dataIndex);
                                                v.stopPropagation();
                                            },
                                            children: [
                                                !indexSort[a.key]?.mode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "SwapOutlined",
                                                    size: 14,
                                                    className: "rotate-90"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Table/main.layout.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 25
                                                }, this),
                                                indexSort[a.key]?.mode === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "SortAscendingOutlined",
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Table/main.layout.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 25
                                                }, this),
                                                indexSort[a.key]?.mode === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "SortDescendingOutlined",
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Table/main.layout.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Table/main.layout.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Table/main.layout.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            }, a.key, false, {
                                fileName: "[project]/src/components/Table/main.layout.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Table/main.layout.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Table/main.layout.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: _dataSources.map((record, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            onClick: ()=>props.onRowClick?.(record, index),
                            className: "row-tables bg-white border-b dark:bg-gray-800 dark:border-gray-500 border-gray-200 dark:text-gray-200",
                            children: props.columns.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-6 py-4",
                                    children: [
                                        typeof a.render !== 'function' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: record?.[a.dataIndex]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Table/main.layout.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, this),
                                        typeof a.render === 'function' && a.render(record, index)
                                    ]
                                }, `row-${props.name}-${index}-${a.key}`, true, {
                                    fileName: "[project]/src/components/Table/main.layout.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this))
                        }, `row-${props.name}-${index}`, false, {
                            fileName: "[project]/src/components/Table/main.layout.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Table/main.layout.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Table/main.layout.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Table/main.layout.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(SimpleTable, "mNhevUSMthW4DfJPWvlT585PIcI=");
_c = SimpleTable;
var _c;
__turbopack_context__.k.register(_c, "SimpleTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/users/browse.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BrowseUserLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Lists$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Lists/main.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$spinner$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/spinner/main.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Table$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Table/main.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/grid/index.js [app-client] (ecmascript) <locals> <export default as Grid>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function BrowseUserLayout(props) {
    _s();
    const breakpoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            props.LOADINGS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-end px-3 w-full gap-x-2 text-stone-700 font-semibold italic",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base-color dark:text-light-color",
                        children: `Collect data's`
                    }, void 0, false, {
                        fileName: "[project]/src/views/users/browse.layout.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$spinner$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/views/users/browse.layout.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/users/browse.layout.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            !breakpoint.sm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Lists$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClickItem: props.onSeekDetail,
                dataSources: props.dataSources,
                renderItem: {
                    title: (record)=>record.name,
                    description: (record)=>record.email,
                    extra: (record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            size: "small",
                            onClick: (v)=>{
                                props.onShowPost(record.id, record);
                                return v.stopPropagation();
                            },
                            children: "List Post's"
                        }, void 0, false, {
                            fileName: "[project]/src/views/users/browse.layout.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, void 0)
                }
            }, void 0, false, {
                fileName: "[project]/src/views/users/browse.layout.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            breakpoint.sm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Table$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "user-table",
                onRowClick: props.onSeekDetail,
                dataSources: props.dataSources,
                columns: [
                    {
                        key: 'sequence',
                        render (_, index) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: index + 1
                            }, void 0, false, {
                                fileName: "[project]/src/views/users/browse.layout.tsx",
                                lineNumber: 58,
                                columnNumber: 24
                            }, void 0);
                        },
                        title: 'No'
                    },
                    {
                        key: 'name',
                        showSort: true,
                        dataIndex: 'name',
                        title: 'Name'
                    },
                    {
                        key: 'username',
                        showSort: true,
                        dataIndex: 'username',
                        title: 'User Name'
                    },
                    {
                        key: 'email',
                        showSort: true,
                        dataIndex: 'email',
                        title: 'Email'
                    },
                    {
                        key: 'phone',
                        showSort: true,
                        dataIndex: 'phone',
                        title: 'Phone Number'
                    },
                    {
                        key: 'website',
                        showSort: true,
                        dataIndex: 'website',
                        title: 'Website'
                    },
                    {
                        key: 'company',
                        title: 'Company',
                        render (record) {
                            return record.company.name;
                        }
                    },
                    {
                        key: 'seek_post',
                        title: 'Seek Post',
                        render (record) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                size: "small",
                                onClick: (v)=>{
                                    props.onShowPost(record.id, record);
                                    return v.stopPropagation();
                                },
                                children: "List Post's"
                            }, void 0, false, {
                                fileName: "[project]/src/views/users/browse.layout.tsx",
                                lineNumber: 104,
                                columnNumber: 19
                            }, void 0);
                        }
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/views/users/browse.layout.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/users/browse.layout.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(BrowseUserLayout, "vDry4zHS/I48mvcyOApBMXDDBRo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$grid$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Grid$3e$__["Grid"].useBreakpoint
    ];
});
_c = BrowseUserLayout;
var _c;
__turbopack_context__.k.register(_c, "BrowseUserLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Modals/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>ModalView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/icon.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/modal/index.js [app-client] (ecmascript) <export default as Modal>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function ModalView(props) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalView.useEffect": ()=>{
            setOpen(props.open);
        }
    }["ModalView.useEffect"], [
        props.open
    ]);
    const onCloseModal = ()=>{
        return props.onClose?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        style: {
            top: 30
        },
        footer: [],
        open: open,
        onClose: onCloseModal,
        closable: false,
        width: props.width,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-container bg-white dark:bg-slate-600 py-2 px-4",
            children: [
                !props.hideCloseIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "modal-closeable !bg-white dark:!bg-slate-600",
                    onClick: onCloseModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$icon$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "CloseOutlined",
                        size: 16,
                        noDefaultColor: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Modals/main.layout.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Modals/main.layout.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header text-dark-color dark:text-light-color",
                    children: props.title
                }, void 0, false, {
                    fileName: "[project]/src/components/Modals/main.layout.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content text-dark-color dark:text-light-color",
                    children: props.children
                }, void 0, false, {
                    fileName: "[project]/src/components/Modals/main.layout.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modals/main.layout.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Modals/main.layout.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ModalView, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = ModalView;
var _c;
__turbopack_context__.k.register(_c, "ModalView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Forms/form-item.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomFormItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/text.layout.tsx [app-client] (ecmascript)");
;
;
;
function CustomFormItem(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: props.label
        }, void 0, false, {
            fileName: "[project]/src/components/Forms/form-item.layout.tsx",
            lineNumber: 7,
            columnNumber: 33
        }, void 0),
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/components/Forms/form-item.layout.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CustomFormItem;
var _c;
__turbopack_context__.k.register(_c, "CustomFormItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Forms/form.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "CustomForm": (()=>CustomForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CustomForm(props) {
    _s();
    const { initialValues, ...others } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomForm.useEffect": ()=>{
            props.form?.setFieldsValue(initialValues);
        }
    }["CustomForm.useEffect"], Array.isArray(props.dependencies) ? props.dependencies : [
        initialValues
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
        ...others,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/components/Forms/form.layout.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_s(CustomForm, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CustomForm;
var _c;
__turbopack_context__.k.register(_c, "CustomForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Inputs/input/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InputText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
;
;
const defaultClasses = 'bg-white shadow appearance-none border rounded w-full py-2 px-3 text-dark-color leading-tight focus:outline-none focus:shadow-outline border-base-color';
function InputText(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
        className: `${defaultClasses} ${props.className}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/Inputs/input/main.layout.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = InputText;
var _c;
__turbopack_context__.k.register(_c, "InputText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/users/layouts/user-detail.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserDetailLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Forms/form-item.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Forms/form.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Inputs/input/main.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Others/text.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/col/index.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/notification/index.js [app-client] (ecmascript) <export default as notification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/row/index.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/TextArea.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function UserDetailLayout(props) {
    _s();
    const [formProps] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm();
    const submitData = ()=>{
        return formProps.validateFields().then((value)=>{
            return props.onSubmitData(value, formProps.resetFields);
        }).catch(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$notification$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__notification$3e$__["notification"].warning({
                message: 'Validation Failed',
                description: 'Make sure your input fields.'
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
        gap: 8,
        vertical: true,
        children: [
            props.LOADINGS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                active: true
            }, void 0, false, {
                fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                lineNumber: 43,
                columnNumber: 26
            }, this),
            !props.LOADINGS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomForm"], {
                        form: formProps,
                        initialValues: props.data || {},
                        dependencies: [
                            props.data?.id
                        ],
                        wrapperCol: {
                            span: 24
                        },
                        labelCol: {
                            span: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                            gutter: 12,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Name",
                                        name: "name",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Username",
                                        name: "username",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Email",
                                        name: "email",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Phone",
                                        name: "phone",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 24,
                                    sm: 24,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Website",
                                        name: "website",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                    orientation: "left",
                                    orientationMargin: 0,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: "Company Information :"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 12,
                                    xl: 12,
                                    lg: 12,
                                    md: 12,
                                    xs: 24,
                                    sm: 24,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'company',
                                            'name'
                                        ],
                                        label: "Name",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 12,
                                    xl: 12,
                                    lg: 12,
                                    md: 12,
                                    xs: 24,
                                    sm: 24,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'company',
                                            'catchPhrase'
                                        ],
                                        label: "Catch Phrase",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 16,
                                    xl: 16,
                                    lg: 20,
                                    md: 24,
                                    xs: 24,
                                    sm: 24,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'company',
                                            'bs'
                                        ],
                                        label: "Business Segment",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$TextArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                    orientation: "left",
                                    orientationMargin: 0,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Others$2f$text$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: "Address Information :"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'address',
                                            'street'
                                        ],
                                        label: "Street",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 12,
                                    md: 12,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'address',
                                            'suite'
                                        ],
                                        label: "Suite",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 16,
                                    md: 16,
                                    xs: 16,
                                    sm: 16,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'address',
                                            'city'
                                        ],
                                        label: "City",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    span: 8,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'address',
                                            'zipcode'
                                        ],
                                        label: "Zip Code",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 8,
                                    md: 8,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'address',
                                            'lat'
                                        ],
                                        label: "Latitude",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                    xxl: 8,
                                    xl: 8,
                                    lg: 8,
                                    md: 8,
                                    xs: 12,
                                    sm: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Forms$2f$form$2d$item$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: [
                                            'address',
                                            'lng'
                                        ],
                                        label: "Longitude",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inputs$2f$input$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "large"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                        className: "w-full",
                        justify: "end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            onClick: submitData,
                            type: "primary",
                            size: "large",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/users/layouts/user-detail.layout.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(UserDetailLayout, "DddhvfNdrXbNG+yRRKQRxHeGNG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].useForm
    ];
});
_c = UserDetailLayout;
var _c;
__turbopack_context__.k.register(_c, "UserDetailLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/users/layouts/post-detail.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostDetailLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/divider/index.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/skeleton/index.js [app-client] (ecmascript) <export default as Skeleton>");
;
;
function PostDetailLayout(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
        gap: 24,
        vertical: true,
        children: [
            !props.LOADINGS && props.data.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    className: "p-2",
                    vertical: true,
                    gap: 2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold",
                            children: a.title
                        }, void 0, false, {
                            fileName: "[project]/src/views/users/layouts/post-detail.layout.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$divider$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                            className: "!my-0"
                        }, void 0, false, {
                            fileName: "[project]/src/views/users/layouts/post-detail.layout.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: a.body
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/views/users/layouts/post-detail.layout.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    ]
                }, a.id, true, {
                    fileName: "[project]/src/views/users/layouts/post-detail.layout.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this)),
            props.LOADINGS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$skeleton$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                active: true
            }, void 0, false, {
                fileName: "[project]/src/views/users/layouts/post-detail.layout.tsx",
                lineNumber: 20,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/users/layouts/post-detail.layout.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = PostDetailLayout;
var _c;
__turbopack_context__.k.register(_c, "PostDetailLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/users/main.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/_engine/main.provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$browse$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/users/browse.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modals$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modals/main.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$layouts$2f$user$2d$detail$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/users/layouts/user-detail.layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$layouts$2f$post$2d$detail$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/users/layouts/post-detail.layout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function UserLayout() {
    _s();
    const { state, isLoading, useActions: UseActions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxStore"])('user');
    const { state: statePost, isLoading: loadingPost, useActions: ActionPost } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxStore"])('post');
    const LOADING_POSTS = loadingPost('onGetListPosts') || false;
    const LOADINGS = isLoading('onGetListUsers') || false;
    const LOADING_DETAIL = isLoading('onGetCurrentUser') || false;
    const onSeekDetail = (record)=>{
        UseActions('updateState', [
            {
                showDetail: true
            }
        ]);
        UseActions('onGetCurrentUser', [
            record.id
        ], true);
    };
    const onCloseDetail = ()=>{
        UseActions('updateState', [
            {
                currentUser: undefined,
                showDetail: false
            }
        ]);
    };
    const onShowPost = (userId)=>{
        ActionPost('updateState', [
            {
                showPost: true
            }
        ]);
        ActionPost('onGetListPosts', [
            userId
        ], true);
    };
    const onClosePost = ()=>{
        ActionPost('updateState', [
            {
                listPost: [],
                showPost: false
            }
        ]);
    };
    const onSubmitData = (data, resetFields)=>{
        resetFields();
        onCloseDetail();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modals$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "User Detail",
                open: state.showDetail,
                width: 750,
                onClose: onCloseDetail,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$layouts$2f$user$2d$detail$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSubmitData: onSubmitData,
                    LOADINGS: LOADING_DETAIL,
                    data: state.currentUser
                }, void 0, false, {
                    fileName: "[project]/src/views/users/main.layout.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/users/main.layout.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modals$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "List Post's",
                open: statePost.showPost,
                width: 500,
                onClose: onClosePost,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$layouts$2f$post$2d$detail$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    LOADINGS: LOADING_POSTS,
                    data: statePost.listPost
                }, void 0, false, {
                    fileName: "[project]/src/views/users/main.layout.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/users/main.layout.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$browse$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onShowPost: onShowPost,
                onSeekDetail: onSeekDetail,
                LOADINGS: LOADINGS,
                dataSources: state.listUser
            }, void 0, false, {
                fileName: "[project]/src/views/users/main.layout.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/users/main.layout.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(UserLayout, "KarbzBi0v726bSRmjyj9ZsM8qUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$main$2e$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxStore"]
    ];
});
_c = UserLayout;
var _c;
__turbopack_context__.k.register(_c, "UserLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utilities/request.util.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "default": (()=>request)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const getQueryByName = (name, url)=>{
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};
async function request({ url, method = 'GET', headers = {}, responseType = 'json', data }) {
    const [token] = 'TEST0123' // LynxStorages.getItem('RIXMRI@UTOKEN').data
    ;
    const baseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BASEURL;
    let extendedItems = {};
    if (method === 'GET') {
        url += getQueryByName('mode', url) ? '&' : '?';
        for(const i in data){
            if (Array.isArray(data[i]) && (data[i] || []).length > 0) {
                for(const x in data[i]){
                    const itemsArr = data[i][x];
                    url += `${i}[]=${itemsArr}&`;
                }
            } else {
                url += `${i}=${data[i]}&`;
            }
        }
        if (url[url.length - 1] === '&') {
            url = url.substring(0, url.length - 1);
        }
    } else {
        extendedItems = {
            data: JSON.stringify({
                ...data
            })
        };
    }
    return new Promise((resolve, reject)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].request({
            url,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${token}`
            },
            method,
            responseType
        }).then((response)=>resolve(response.data)).catch((error)=>{
            const msg = error?.response?.data?.meta;
            const newMsg = [];
            if (msg?.message && typeof msg?.message === 'object' && !Array.isArray(msg?.message)) {
                for(const a in msg?.message){
                    newMsg.push(msg?.message?.[a]);
                }
                newMsg.flat();
            } else if (typeof msg?.message === 'string') {
                newMsg.push(msg?.message);
            }
            return reject(error?.response?.data);
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utilities/rest.util.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RestConfig": (()=>RestConfig)
});
const JPH = 'https://jsonplaceholder.typicode.com';
const MAIN = '/api/v1';
const RestConfig = {
    users: {
        main: `${JPH}/users`
    },
    posts: {
        main: `${JPH}/posts`
    },
    auth: {
        login: `${MAIN}/login`
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/users.service.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getListUsers": (()=>getListUsers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$request$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/request.util.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$rest$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/rest.util.tsx [app-client] (ecmascript)");
;
;
function getListUsers(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$request$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$rest$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestConfig"].users.main,
        method: 'GET',
        data: typeof userId === 'number' ? {
            id: userId
        } : {}
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/models/main/user.model.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$users$2e$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/users.service.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const UserModel = {
    name: 'user',
    subscriptions: (_, useActions)=>_s(({ pathname })=>{
            _s();
            if (pathname === '/portal/users') useActions('user')('onGetListUsers', [], true);
            if (pathname.match(/^\/portal\/users\/[0-9]+$/g)) {
                useActions('user')('onGetListUsers', [], true);
                const userId = parseInt(pathname.replace(/^\/portal\/users\/+/g, ''));
                useActions('user')('onGetCurrentUser', [
                    userId
                ]);
                useActions('user')('updateState', [
                    {
                        showDetail: true
                    }
                ]);
            }
        }, "TyJrNkKQR1F3PR4Kg3gbuJvI0V8=", true),
    model: (put)=>({
            state: {
                showDetail: false,
                listUser: [],
                currentUser: undefined
            },
            actions: {
                async onGetListUsers () {
                    try {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$users$2e$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListUsers"])();
                        return put({
                            listUser: result
                        });
                    } catch (er) {
                        return er;
                    }
                },
                async onGetCurrentUser (userId) {
                    try {
                        const [result] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$users$2e$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListUsers"])(userId);
                        return put({
                            currentUser: result
                        });
                    } catch (er) {
                        return er;
                    }
                },
                updateState (payload) {
                    put(payload);
                }
            }
        })
};
const __TURBOPACK__default__export__ = UserModel;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/posts.service.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getListPosts": (()=>getListPosts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$request$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/request.util.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$rest$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utilities/rest.util.tsx [app-client] (ecmascript)");
;
;
function getListPosts(userId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$request$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$rest$2e$util$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RestConfig"].posts.main,
        method: 'GET',
        data: {
            userId
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/models/main/post.model.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$posts$2e$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/posts.service.tsx [app-client] (ecmascript)");
;
const PostModel = {
    name: 'post',
    model: (put)=>({
            state: {
                showPost: false,
                listPost: []
            },
            actions: {
                async onGetListPosts (userId) {
                    try {
                        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$posts$2e$service$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListPosts"])(userId);
                        return put({
                            listPost: result
                        });
                    } catch (er) {
                        return er;
                    }
                },
                updateState (payload) {
                    put(payload);
                }
            }
        })
};
const __TURBOPACK__default__export__ = PostModel;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/views/users/index.layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-require-imports */ __turbopack_context__.s({
    "default": (()=>IndexUserLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$registry$2e$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/_engine/registry.model.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/users/main.layout.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function IndexUserLayout() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$registry$2e$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxModel"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$users$2f$main$2e$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "IndexUserLayout.useLynxModel": ()=>[
                __turbopack_context__.r("[project]/src/models/main/user.model.tsx [app-client] (ecmascript)").default,
                __turbopack_context__.r("[project]/src/models/main/post.model.tsx [app-client] (ecmascript)").default
            ]
    }["IndexUserLayout.useLynxModel"]);
}
_s(IndexUserLayout, "rNeGC+XszNLOLhumY1sc5ltjbyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$_engine$2f$registry$2e$model$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLynxModel"]
    ];
});
_c = IndexUserLayout;
var _c;
__turbopack_context__.k.register(_c, "IndexUserLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a4c25b1d._.js.map