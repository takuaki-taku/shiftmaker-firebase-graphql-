var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => Root,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react14 = require("@remix-run/react");

// app/styles/generated.css
var generated_default = "/build/_assets/generated-AORNG6D7.css";

// app/root.tsx
var import_recoil3 = require("recoil"), import_react_hot_toast2 = require("react-hot-toast");

// app/hooks/useRecoil.ts
var import_recoil = require("recoil"), import_recoil2 = require("recoil"), import_recoil_persist = require("recoil-persist"), { persistAtom } = (0, import_recoil_persist.recoilPersist)(), useShiftCreateRecoil = () => {
  let [recoilStep1Shifts, setRecoilStep1Shifts] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useStep1ShiftRecoil",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  ), [recoilStep2Shifts, setRecoilStep2Shifts] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useStep2ShiftRecoil",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  ), [recoilCreateShiftId, setRecoilCreateUpdateId] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "updateCreateShiftRecoil",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  ), [recoilNotCompleted, setRecoilNotCompleted] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useCompletedRecoil",
      default: !1,
      effects_UNSTABLE: [persistAtom]
    })
  ), [recoilCreateState, setRecoilCreateState] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useCreateStateRecoil",
      default: !1,
      effects_UNSTABLE: [persistAtom]
    })
  ), [recoilEmployeeWorkingTime, setRecoilEmployeeWorkingTime] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "data",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  ), [recoilShiftDate, setRecoilShiftDate] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "date",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  );
  return {
    recoilStep1Shifts,
    setRecoilStep1Shifts,
    recoilStep2Shifts,
    setRecoilStep2Shifts,
    recoilCreateShiftId,
    setRecoilCreateUpdateId,
    recoilNotCompleted,
    setRecoilNotCompleted,
    recoilCreateState,
    setRecoilCreateState,
    recoilEmployeeWorkingTime,
    setRecoilEmployeeWorkingTime,
    recoilShiftDate,
    setRecoilShiftDate,
    resetShifts: () => {
      setRecoilStep1Shifts(void 0), setRecoilStep2Shifts(void 0);
    },
    resetCreate: () => {
      setRecoilStep1Shifts(void 0), setRecoilStep2Shifts(void 0), setRecoilCreateUpdateId(void 0), setRecoilNotCompleted(!1), setRecoilEmployeeWorkingTime(void 0), setRecoilCreateState(void 0), setRecoilShiftDate(void 0);
    }
  };
}, useShiftEditRecoil = () => {
  let [recoilEditShiftId, setRecoilEditUpdateId] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "updateEditShiftRecoil",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  );
  return { recoilEditShiftId, setRecoilEditUpdateId };
}, useLoadRecoil = () => {
  let [recoilIsLoad, setRecoilLoad] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useLoadRecoil",
      default: !1
    })
  );
  return { recoilIsLoad, setRecoilLoad };
}, useUserRecoil = () => {
  let [recoilUser, setRecoilUser] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useUserRecoil",
      default: void 0,
      effects_UNSTABLE: [persistAtom]
    })
  );
  return { recoilUser, setRecoilUser };
}, useGQLErrorRecoil = () => {
  let [recoilGQLerror, setRecoilGQLError] = (0, import_recoil.useRecoilState)(
    (0, import_recoil2.atom)({
      key: "useGQLErrorRecoil",
      default: void 0
    })
  );
  return { recoilGQLerror, setRecoilGQLError };
};

// app/components/Spinner.tsx
var import_react_loader_spinner = require("react-loader-spinner"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), RootSpinner = () => {
  let { recoilIsLoad } = useLoadRecoil();
  return recoilIsLoad ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen h-screen fixed bg-white opacity-70 z-50" }, void 0, !1, {
      fileName: "app/components/Spinner.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen h-screen flex fixed items-center justify-center z-50 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_loader_spinner.BallTriangle, { height: "80", width: "80", color: "#385F5F", ariaLabel: "three-dots-loading" }, void 0, !1, {
        fileName: "app/components/Spinner.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary-text mt-4 pl-2", children: "\u30C7\u30FC\u30BF\u9001\u4FE1\u4E2D..." }, void 0, !1, {
        fileName: "app/components/Spinner.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Spinner.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, !1, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}, Spinner = ({ isLoad }) => isLoad ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen h-screen fixed bg-white opacity-70 z-50 top-0 left-0" }, void 0, !1, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen h-screen flex fixed items-center justify-center z-50 flex-col  top-0 left-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_loader_spinner.BallTriangle, { height: "80", width: "80", color: "#385F5F", ariaLabel: "three-dots-loading" }, void 0, !1, {
      fileName: "app/components/Spinner.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary-text mt-4 pl-2", children: "\u30C7\u30FC\u30BF\u53D6\u5F97\u4E2D..." }, void 0, !1, {
      fileName: "app/components/Spinner.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Spinner.tsx",
  lineNumber: 29,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, !1, {
  fileName: "app/components/Spinner.tsx",
  lineNumber: 39,
  columnNumber: 10
}, this), PartSpinner = ({ isLoad, isError, children }) => isLoad ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex  items-center justify-center flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_loader_spinner.BallTriangle, { height: "80", width: "80", color: "#385F5F", ariaLabel: "three-dots-loading" }, void 0, !1, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary-text mt-4 pl-2", children: "\u30C7\u30FC\u30BF\u53D6\u5F97\u4E2D..." }, void 0, !1, {
    fileName: "app/components/Spinner.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Spinner.tsx",
  lineNumber: 45,
  columnNumber: 7
}, this) : isError ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex  items-center justify-center flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-primary-text mt-4 pl-2", children: "\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002" }, void 0, !1, {
  fileName: "app/components/Spinner.tsx",
  lineNumber: 55,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Spinner.tsx",
  lineNumber: 54,
  columnNumber: 7
}, this) : children;

// app/components/CustomProvider.tsx
var import_react11 = require("@remix-run/react"), import_react12 = require("react");
var import_client = require("@apollo/client"), import_client2 = require("@apollo/client"), import_context = require("@apollo/client/link/context");

// app/components/layouts/TabNav.tsx
var import_fa = require("react-icons/fa"), import_im = require("react-icons/im"), import_react2 = require("@remix-run/react"), import_react3 = require("react");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), TabNav = () => {
  let { pathname, state } = (0, import_react2.useLocation)(), { setRecoilNotCompleted } = useShiftCreateRecoil(), navigate = (0, import_react2.useNavigate)(), [selectedTab, setSelectedTab] = (0, import_react3.useState)("create"), [createPath, setCreatePath] = (0, import_react3.useState)("/create/date"), [shiftPath, setShiftsPath] = (0, import_react3.useState)("/shift"), [shiftState, setShiftsState] = (0, import_react3.useState)(void 0), [createState, setCreateState] = (0, import_react3.useState)(void 0);
  (0, import_react3.useEffect)(() => {
    pathname.startsWith("/create") ? setSelectedTab("create") : setSelectedTab(pathname === "/mypage" ? "mypage" : "shifts");
  }, [pathname]);
  let handleSelectTab = ({ selectTab }) => {
    selectTab !== selectedTab && (selectedTab === "create" ? (setCreateState(state), setCreatePath(pathname), pathname === "/create/automation" && setRecoilNotCompleted(!0)) : selectedTab === "shifts" && (setShiftsState(state), setShiftsPath(pathname)), selectTab === "create" ? navigate(createPath, { state: { notOpenModal: !0, ...createState } }) : selectTab === "shifts" ? navigate(shiftPath, { state: { ...shiftState } }) : selectTab === "mypage" && navigate("/mypage"));
  }, baseClassName = "px-4 py-2 rounded-md w-[150px] flex justify-center mr-5 items-center", selectedClassName = "bg-white cursor-not-allowed", unSelectedClassName = "bg-[#fbfbfb] border-2 border-[#73A6AF] text-[#888] shadow-inner hover:bg-[#f8f8f8] hover:text-[#aaa] cursor-pointer";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex pl-5 mb-[-5px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: `${baseClassName} ${selectedTab === "shifts" ? selectedClassName : unSelectedClassName}`,
        onClick: () => handleSelectTab({ selectTab: "shifts" }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_im.ImProfile, { className: "mr-2", size: 20 }, void 0, !1, {
            fileName: "app/components/layouts/TabNav.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "\u30B7\u30D5\u30C8\u4E00\u89A7" }, void 0, !1, {
            fileName: "app/components/layouts/TabNav.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/layouts/TabNav.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: `${baseClassName} ${selectedTab === "create" ? selectedClassName : unSelectedClassName}`,
        onClick: () => handleSelectTab({ selectTab: "create" }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_im.ImCalendar, { className: "mr-2", size: 20 }, void 0, !1, {
            fileName: "app/components/layouts/TabNav.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "\u30B7\u30D5\u30C8\u4F5C\u6210" }, void 0, !1, {
            fileName: "app/components/layouts/TabNav.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/layouts/TabNav.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "div",
      {
        className: `${baseClassName} ${selectedTab === "mypage" ? selectedClassName : unSelectedClassName}`,
        onClick: () => handleSelectTab({ selectTab: "mypage" }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_fa.FaUsers, { className: "mr-2", size: 20 }, void 0, !1, {
            fileName: "app/components/layouts/TabNav.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "\u30DE\u30A4\u30DA\u30FC\u30B8" }, void 0, !1, {
            fileName: "app/components/layouts/TabNav.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/layouts/TabNav.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/layouts/TabNav.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
};

// app/components/layouts/Header.tsx
var import_react7 = require("react"), import_react8 = require("@remix-run/react");
var import_react_burger_menu = require("react-burger-menu"), import_hamburger_react = require("hamburger-react"), import_bs = require("react-icons/bs"), import_md = require("react-icons/md"), import_gr = require("react-icons/gr"), import_ri = require("react-icons/ri"), import_im2 = require("react-icons/im");

// app/components/common/Button.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Button = ({
  text,
  onClick,
  color = "primary",
  textColor = "text-white",
  width = "md",
  textSize = "text-sm",
  type = "button",
  variant = "contained",
  customWidth,
  customHeight,
  disabled = !1
}) => {
  let bgColorClass = "", outlineBorderClass = "", outlinedText = "";
  disabled ? (bgColorClass = "bg-gray-300", outlineBorderClass = "border-gray-300", outlinedText = "text-gray-300") : color === "primary" ? (bgColorClass = "bg-primary", outlineBorderClass = "border-primary", outlinedText = "text-primary") : color === "primary-light" ? (bgColorClass = "bg-primary-light", outlineBorderClass = "border-primary-light", outlinedText = "text-primary-light") : color === "secondary" ? (bgColorClass = "bg-secondary", outlineBorderClass = "border-secondary", outlinedText = "text-secondary") : color === "secondary-light" ? (bgColorClass = "bg-secondary-light", outlineBorderClass = "border-secondary-light", outlinedText = "text-secondary-light") : color === "white" && (bgColorClass = "bg-white", outlineBorderClass = "border-white", outlinedText = "text-white");
  let widthClass = width === "sm" ? "w-24 h-8 sm:w-16 sm:h-6" : width === "md" ? "w-32 h-8 sm:w-24 sm:h-6" : width === "lg" && "w-44 h-9 sm:w-32 sm:h-6", containedClass = `${!disabled && "hover:opacity-80 active:translate-y-[1px]"} ${bgColorClass} relative overflow-hidden rounded-lg shadow-md sm:rounded-[5px] ${widthClass}`, outlinedClass = `${!disabled && "hover:opacity-80 active:translate-y-[1px]"} ${outlineBorderClass} border-4 sm:border-2 relative overflow-hidden rounded-lg shadow-md sm:rounded-[5px] ${widthClass}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      className: variant === "contained" ? containedClass : variant === "outlined" ? outlinedClass : `${!disabled && "hover:opacity-80 active:translate-y-[1px]"} relative overflow-hidden`,
      onClick,
      type,
      style: { width: customWidth, height: customHeight },
      disabled,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: `${textSize} ${variant === "contained" ? textColor : outlinedText} ${variant === "text" && "underline"} flex items-center justify-center`, children: text }, void 0, !1, {
        fileName: "app/components/common/Button.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/common/Button.tsx",
      lineNumber: 74,
      columnNumber: 5
    },
    this
  );
};

// app/components/common/CheckBox.tsx
var import_bi = require("react-icons/bi"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), CheckBox = ({ label, checked = !1, onChange, value, disabled = !1, className }) => {
  let inputValue = value || label;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "label",
    {
      htmlFor: inputValue,
      className: `flex items-center text-[#385F5F] font-semibold ${!disabled && "hover:opacity-70 cursor-pointer"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            className: `w-5 h-5 relative rounded-sm border-2 border-primary-dark ${label && "mr-2"}`,
            style: checked ? { borderColor: "#689CA6" } : { borderColor: "#72B4C0" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "p",
              {
                className: "absolute text-secondary top-[-12px] text-4xl skew-x-[-15deg] font-black trans30",
                style: checked ? { right: "-12px" } : { right: "-5px", opacity: 0 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_bi.BiCheck, {}, void 0, !1, {
                  fileName: "app/components/common/CheckBox.tsx",
                  lineNumber: 34,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/common/CheckBox.tsx",
                lineNumber: 30,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/common/CheckBox.tsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/common/CheckBox.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            id: inputValue,
            type: "checkbox",
            name: "inputNames",
            checked,
            onChange,
            value: inputValue,
            className: "hidden",
            disabled
          },
          void 0,
          !1,
          {
            fileName: "app/components/common/CheckBox.tsx",
            lineNumber: 38,
            columnNumber: 9
          },
          this
        ),
        label
      ]
    },
    inputValue,
    !0,
    {
      fileName: "app/components/common/CheckBox.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/common/CheckBox.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/components/common/Input.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Input = ({
  onChange,
  register,
  schema,
  required,
  maxLength,
  regex,
  regMessage,
  label,
  value,
  isPassword,
  validate
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full rounded-sm h-full border border-[#eee] bg-[#fefefe] text-[#444] focus-within:border-primary focus-within:bg-[#fcfcfc] text-center focus-within:border-2 flex justify-center items-center", children: register ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "input",
  {
    type: isPassword ? "password" : "text",
    ...register(schema, {
      required: required ? `${label}\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059` : !1,
      maxLength: { value: maxLength, message: `${maxLength}\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044` },
      pattern: {
        value: regex,
        message: regMessage
      },
      validate
    }),
    className: "w-full h-8 text-[#444] outline-none",
    placeholder: `${label}\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`
  },
  void 0,
  !1,
  {
    fileName: "app/components/common/Input.tsx",
    lineNumber: 37,
    columnNumber: 9
  },
  this
) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "input",
  {
    type: "text",
    value,
    onChange,
    className: "w-full h-8 text-[#444] text-center outline-none",
    placeholder: `${label}\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`
  },
  void 0,
  !1,
  {
    fileName: "app/components/common/Input.tsx",
    lineNumber: 52,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/common/Input.tsx",
  lineNumber: 35,
  columnNumber: 5
}, this);

// app/components/common/Select.tsx
var import_react_select = __toESM(require("react-select")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Select = ({ value, onChange, options }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  import_react_select.default,
  {
    instanceId: "select",
    value,
    onChange,
    options,
    styles: {
      container: (base) => ({ ...base, padding: 0, width: "100%" }),
      control: (base) => ({ ...base, padding: 0 }),
      valueContainer: (base) => ({ ...base, border: 0, padding: 0, width: "5em" }),
      dropdownIndicator: () => ({ display: "none" }),
      indicatorSeparator: () => ({ display: "none" }),
      menuPortal: (base) => ({ ...base, width: "50px", margin: 0, zIndex: 9999 }),
      menu: (base) => ({ ...base, zIndex: 9999, fontSize: "12px" })
    },
    isSearchable: !1,
    menuShouldBlockScroll: !0,
    menuPortalTarget: document.body
  },
  void 0,
  !1,
  {
    fileName: "app/components/common/Select.tsx",
    lineNumber: 15,
    columnNumber: 3
  },
  this
);

// app/components/common/Modal.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Modal = ({ isOpen, setOpen, children, onCloseFunc }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "div",
  {
    className: "flex justify-center overflow-auto fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] modal items-center z-[9999]",
    onClick: (e) => {
      e.target === e.currentTarget && (onCloseFunc && onCloseFunc(), setOpen(!1));
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-white modal_contents rounded-md relative p-10 min-w-[400px] flex justify-center items-center", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "div",
        {
          className: "absolute top-3 right-5 text-xl p-1 cursor-pointer hover:opacity-50",
          onClick: () => {
            onCloseFunc && onCloseFunc(), setOpen(!1);
          },
          children: "\xD7"
        },
        void 0,
        !1,
        {
          fileName: "app/components/common/Modal.tsx",
          lineNumber: 27,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/common/Modal.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/common/Modal.tsx",
    lineNumber: 16,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/common/Modal.tsx",
  lineNumber: 14,
  columnNumber: 5
}, this);

// app/components/common/Accordion.tsx
var import_react4 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Accordion = ({ label, children, onAccordionClose = !1, isFront = !1 }) => {
  let [setActive, setActiveState] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    onAccordionClose && setActiveState(!1);
  }, [onAccordionClose]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col border rounded-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: "cursor-pointer h-10 outline-none flex items-center justify-start sm:h-6 pl-2 bg-primary-pale",
        onClick: () => {
          setActiveState(!setActive);
        },
        children: [
          label,
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { style: setActive ? { transform: "rotate(180deg)" } : {}, className: "trans30 ml-2", children: "\u25B2" }, void 0, !1, {
            fileName: "app/components/common/Accordion.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/common/Accordion.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: "trans30 overflow-auto px-2",
        style: setActive ? { maxHeight: "800px", borderTopWidth: 1, paddingTop: "8px" } : { maxHeight: "0px" },
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/common/Accordion.tsx",
        lineNumber: 36,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/common/Accordion.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/hooks/useLogout.tsx
var import_react_hot_toast = __toESM(require("react-hot-toast"));
var import_react5 = require("@remix-run/react");
var import_react6 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), useLogout = () => {
  let { setRecoilEditUpdateId } = useShiftEditRecoil(), { resetCreate } = useShiftCreateRecoil(), { setRecoilUser } = useUserRecoil(), auth = null, navigate = (0, import_react5.useNavigate)(), logout = async () => {
    if (typeof window < "u" && !auth) {
      let { getAuth, signOut } = await import("firebase/auth");
      auth = getAuth(), signOut(auth);
    }
    setRecoilEditUpdateId(void 0), setRecoilUser(void 0), resetCreate(), import_react_hot_toast.default.success("\u30ED\u30B0\u30A2\u30A6\u30C8\u3057\u307E\u3057\u305F\u3002"), navigate("/login");
  }, openLogoutModal = () => setOpen(!0), [isOpen, setOpen] = (0, import_react6.useState)(!1);
  return { ConfirmModal: () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Modal, { isOpen, setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full justify-center flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "font-bold text-lg mb-2", children: "\u30ED\u30B0\u30A2\u30A6\u30C8\u3057\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F" }, void 0, !1, {
      fileName: "app/hooks/useLogout.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full flex justify-around mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { text: "\u30AD\u30E3\u30F3\u30BB\u30EB", variant: "outlined", onClick: () => setOpen(!1) }, void 0, !1, {
        fileName: "app/hooks/useLogout.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { text: "\u30ED\u30B0\u30A2\u30A6\u30C8", onClick: logout }, void 0, !1, {
        fileName: "app/hooks/useLogout.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/hooks/useLogout.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/hooks/useLogout.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/hooks/useLogout.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this), openLogoutModal };
};

// app/components/layouts/Header.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Header = () => {
  let navigate = (0, import_react8.useNavigate)(), { recoilUser } = useUserRecoil(), [isOpen, setOpen] = (0, import_react7.useState)(!1), [isModalOpen, setModalOpen] = (0, import_react7.useState)(!1), [navigatePath, setNavigatePath] = (0, import_react7.useState)(""), { pathname } = (0, import_react8.useLocation)(), { resetCreate } = useShiftCreateRecoil(), { ConfirmModal, openLogoutModal } = useLogout(), exitCreate = () => {
    navigate(navigatePath), setModalOpen(!1), resetCreate();
  }, handleNavigate = (page) => {
    let path = page === "/create" ? "/create/date" : page;
    setOpen(!1), pathname === "/create/automation" ? (setModalOpen(!0), setNavigatePath(path)) : navigate(path);
  }, MenuList = ({ path, Icon, text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "div",
    {
      className: `flex justify-between border-t p-3 items-center border-gray-200 ${pathname.indexOf(path) > -1 && "bg-[#eee]"}`,
      onClick: () => pathname.indexOf(path) > -1 ? setOpen(!1) : handleNavigate(path),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, {}, void 0, !1, {
            fileName: "app/components/layouts/Header.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "ml-2", children: text }, void 0, !1, {
            fileName: "app/components/layouts/Header.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layouts/Header.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bs.BsChevronRight, {}, void 0, !1, {
          fileName: "app/components/layouts/Header.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/layouts/Header.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h-12 w-full shadow-md bg-white sm:fixed z-[9999]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "img",
      {
        src: "https://ks-icons.s3.ap-northeast-1.amazonaws.com/Logo.png",
        alt: "Shift maker",
        className: "h-12 cursor-pointer",
        onClick: () => handleNavigate(recoilUser ? "/shift" : "/login")
      },
      void 0,
      !1,
      {
        fileName: "app/components/layouts/Header.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "hidden sm:block m-0 p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_react_burger_menu.slide,
      {
        width: "300px",
        right: !0,
        styles: hamburgerStyles,
        customBurgerIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_hamburger_react.Sling, { toggled: isOpen, size: 25 }, void 0, !1, {
          fileName: "app/components/layouts/Header.tsx",
          lineNumber: 73,
          columnNumber: 29
        }, this),
        isOpen,
        onStateChange: (state) => setOpen(state.isOpen),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "p-3 font-semibold text-primary-text text-base w-[300px] truncate", children: [
            "\u30E6\u30FC\u30B6\u30FC\uFF1A",
            (recoilUser == null ? void 0 : recoilUser.name) ?? "\u30B2\u30B9\u30C8\u30E6\u30FC\u30B6\u30FC"
          ] }, void 0, !0, {
            fileName: "app/components/layouts/Header.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center text-gray-600  justify-center w-full sm:flex-col text-sm", children: [
            recoilUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/shift", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_im2.ImProfile, {}, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 83,
                columnNumber: 53
              }, this), text: "\u30B7\u30D5\u30C8\u4E00\u89A7" }, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 83,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/create", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_im2.ImCalendar, {}, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 84,
                columnNumber: 54
              }, this), text: "\u30B7\u30D5\u30C8\u4F5C\u6210" }, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/mypage", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_gr.GrDocumentUser, {}, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 85,
                columnNumber: 54
              }, this), text: "\u30DE\u30A4\u30DA\u30FC\u30B8" }, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/login", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_gr.GrDocumentUser, {}, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 89,
                columnNumber: 53
              }, this), text: "\u30ED\u30B0\u30A4\u30F3" }, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 89,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/register", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_im2.ImProfile, {}, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 90,
                columnNumber: 56
              }, this), text: "\u65B0\u898F\u767B\u9332" }, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 90,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/terms", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_md.MdOutlineSpeakerNotes, {}, void 0, !1, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 93,
              columnNumber: 49
            }, this), text: "\u5229\u7528\u898F\u7D04" }, void 0, !1, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/policy", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_md.MdOutlinePolicy, {}, void 0, !1, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 94,
              columnNumber: 50
            }, this), text: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC" }, void 0, !1, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MenuList, { path: "/manual", Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_gr.GrNotes, {}, void 0, !1, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 95,
              columnNumber: 50
            }, this), text: "\u64CD\u4F5C\u8AAC\u660E" }, void 0, !1, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            recoilUser && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-between border-t border-b p-3 items-center border-gray-200", onClick: openLogoutModal, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ri.RiLogoutBoxRLine, {}, void 0, !1, {
                  fileName: "app/components/layouts/Header.tsx",
                  lineNumber: 99,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "ml-2", children: "\u30ED\u30B0\u30A2\u30A6\u30C8" }, void 0, !1, {
                  fileName: "app/components/layouts/Header.tsx",
                  lineNumber: 100,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 98,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bs.BsChevronRight, {}, void 0, !1, {
                fileName: "app/components/layouts/Header.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/layouts/Header.tsx",
              lineNumber: 97,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/layouts/Header.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/layouts/Header.tsx",
        lineNumber: 69,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/layouts/Header.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Modal, { isOpen: isModalOpen, setOpen: setModalOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-base font-semibold", children: "\u753B\u9762\u9077\u79FB\u3059\u308B\u3068\u73FE\u5728\u4F5C\u6210\u4E2D\u306E\u30B7\u30D5\u30C8\u304C\u7834\u68C4\u3055\u308C\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/components/layouts/Header.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "\u4E00\u6642\u4FDD\u5B58\u3059\u308B\u5834\u5408\u306F\u30B7\u30D5\u30C8\u4F5C\u6210\u753B\u9762\u5185\u306E\u300C\u4E2D\u65AD/\u4E00\u6642\u4FDD\u5B58\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/components/layouts/Header.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full justify-around flex mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { text: "\u30AD\u30E3\u30F3\u30BB\u30EB", variant: "outlined", color: "secondary", onClick: () => setModalOpen(!1) }, void 0, !1, {
          fileName: "app/components/layouts/Header.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button, { text: "\u7834\u68C4", color: "secondary", onClick: () => exitCreate() }, void 0, !1, {
          fileName: "app/components/layouts/Header.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layouts/Header.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/Header.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/layouts/Header.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ConfirmModal, {}, void 0, !1, {
      fileName: "app/components/layouts/Header.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/Header.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}, hamburgerStyles = {
  bmBurgerButton: {
    position: "absolute",
    width: "48px",
    height: "48px",
    top: "0",
    right: "0"
  },
  bmMenu: {
    background: "white",
    fontSize: "12px"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.6)"
  }
};

// app/components/layouts/Footer.tsx
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), Footer = () => {
  let navigate = (0, import_react9.useNavigate)(), { recoilUser } = useUserRecoil();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full bg-white  flex justify-center ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full max-w-[1000px] flex justify-center flex-col items-center pt-2 sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex w-full max-w-[1000px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "img",
          {
            src: "https://ks-icons.s3.ap-northeast-1.amazonaws.com/FooterLogo.png",
            alt: "Shift maker",
            className: "w-1/4 max-w-[250px] object-contain",
            onClick: () => navigate("/shift")
          },
          void 0,
          !1,
          {
            fileName: "app/components/layouts/Footer.tsx",
            lineNumber: 15,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center text-gray-600  underline justify-center w-full", children: [
          !recoilUser && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "hover:text-gray-400 cursor-pointer mr-[10%] sm:mb-2", onClick: () => navigate("/login"), children: "\u30ED\u30B0\u30A4\u30F3" }, void 0, !1, {
            fileName: "app/components/layouts/Footer.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "hover:text-gray-400 cursor-pointer mr-[10%] sm:mb-2", onClick: () => navigate("/terms"), children: "\u5229\u7528\u898F\u7D04" }, void 0, !1, {
            fileName: "app/components/layouts/Footer.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "hover:text-gray-400 cursor-pointer mr-[10%] sm:mb-2", onClick: () => navigate("/policy"), children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC" }, void 0, !1, {
            fileName: "app/components/layouts/Footer.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "hover:text-gray-400 cursor-pointer mr-[10%] sm:mb-2", onClick: () => navigate("/manual"), children: "\u64CD\u4F5C\u8AAC\u660E" }, void 0, !1, {
            fileName: "app/components/layouts/Footer.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layouts/Footer.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layouts/Footer.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-gray-400 mb-3", children: "\xA9\uFE0F shift maker . All Rights Reserved." }, void 0, !1, {
        fileName: "app/components/layouts/Footer.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/Footer.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hidden sm:flex justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "img",
        {
          src: "https://ks-icons.s3.ap-northeast-1.amazonaws.com/FooterLogo.png",
          alt: "Shift maker",
          className: "w-1/4 object-contain",
          onClick: () => navigate("/shift")
        },
        void 0,
        !1,
        {
          fileName: "app/components/layouts/Footer.tsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-gray-400", children: "\xA9\uFE0F shift maker . All Rights Reserved." }, void 0, !1, {
        fileName: "app/components/layouts/Footer.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/Footer.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/Footer.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/components/layouts/DefaultLayout.tsx
var import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), DefaultLayout = ({ children }) => {
  let { pathname } = (0, import_react10.useLocation)(), { recoilUser } = useUserRecoil();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: recoilUser ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-[#f0f7f6] text-sm min-h-[100vh] flex flex-col justify-between sm:text-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/components/layouts/DefaultLayout.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col p-5 sm:p-2 sm:mt-12 sm:overflow-x-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TabNav, {}, void 0, !1, {
          fileName: "app/components/layouts/DefaultLayout.tsx",
          lineNumber: 23,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/layouts/DefaultLayout.tsx",
          lineNumber: 22,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: `${pathname !== "/mypage" && "bg-white rounded-md p-5 sm:px-2 sm:py-4"}`, children }, void 0, !1, {
          fileName: "app/components/layouts/DefaultLayout.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layouts/DefaultLayout.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/DefaultLayout.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/components/layouts/DefaultLayout.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/DefaultLayout.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-[#f0f7f6] text-sm min-h-[100vh] sm:min-h-[80vh] flex flex-col justify-between sm:text-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Header, {}, void 0, !1, {
        fileName: "app/components/layouts/DefaultLayout.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col p-5 sm:p-2 sm:mt-12 sm:overflow-x-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "div",
        {
          className: `${!["/login", "/register"].includes(pathname) && "bg-white rounded-md p-5 sm:px-2 sm:py-4"} flex justify-center rounded-md p-5 sm:px-2 sm:py-4`,
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/layouts/DefaultLayout.tsx",
          lineNumber: 35,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/layouts/DefaultLayout.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/DefaultLayout.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/components/layouts/DefaultLayout.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/DefaultLayout.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/DefaultLayout.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/utils/route.ts
var inUserRoute = (pathname) => ["/create/date", "/create/confirm", "/create/automation", "/workingTime", "/mypage"].includes(pathname) || pathname.startsWith("/shift") || pathname.endsWith("/show") || pathname.endsWith("/edit"), inGuestRoute = (pathname) => ["/", "/login", "/register"].includes(pathname), generalRoute = [
  "/shift",
  "/shift/$date",
  "/create/date",
  "/create/confirm",
  "/create/automation",
  "/workingTime",
  "/mypage",
  "/$date/$shiftId/show",
  "/$date/$shiftId/edit",
  "/manual",
  "/policy",
  "/terms"
];

// app/components/CustomProvider.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), CustomProvider = ({ children }) => {
  let navigate = (0, import_react11.useNavigate)(), { pathname } = (0, import_react11.useLocation)(), { recoilUser, setRecoilUser } = useUserRecoil(), [auth, setAuth] = (0, import_react12.useState)(null), [idToken, setIdToken] = (0, import_react12.useState)(""), { recoilGQLerror, setRecoilGQLError } = useGQLErrorRecoil(), { env } = (0, import_react11.useLoaderData)(), authLink = (0, import_context.setContext)((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${idToken}`,
      "x-hasura-admin-secret": env.HASURA_KEY
    }
  })), httpLink = (0, import_client2.createHttpLink)({
    uri: env.HASURA_URL
  }), client = new import_client2.ApolloClient({
    link: authLink.concat(httpLink),
    cache: new import_client2.InMemoryCache()
  });
  return (0, import_react12.useEffect)(() => {
    typeof window > "u" || (async () => {
      let { getAuth, onAuthStateChanged } = await import("firebase/auth"), initializedAuth = getAuth();
      setAuth(initializedAuth), onAuthStateChanged(initializedAuth, async (userInfo) => {
        userInfo ? (!idToken && setIdToken(await userInfo.getIdToken()), !recoilUser && setRecoilUser({ uid: userInfo.uid, name: userInfo.displayName, email: userInfo.email, createdAt: userInfo.metadata.creationTime }), inGuestRoute(pathname) && navigate("/shift")) : (setRecoilUser(void 0), inUserRoute(pathname) && navigate("/login", { state: { isRedirect: !0 } }));
      });
    })();
  }, [pathname]), (0, import_react12.useEffect)(() => {
    var _a;
    recoilGQLerror === "claims key: 'https://hasura.io/jwt/claims' not found" && auth && ((_a = auth.currentUser) == null || _a.getIdToken(!0).then((token) => {
      setIdToken(token), setRecoilGQLError(void 0);
    }));
  }, [recoilGQLerror, auth]), recoilUser && inUserRoute(pathname) || !recoilUser && inGuestRoute(pathname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(DefaultLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_client.ApolloProvider, { client, children }, void 0, !1, {
      fileName: "app/components/CustomProvider.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this),
    generalRoute.map((path) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react11.Link, { to: path, prefetch: "render", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hidden" }, void 0, !1, {
      fileName: "app/components/CustomProvider.tsx",
      lineNumber: 84,
      columnNumber: 15
    }, this) }, path, !1, {
      fileName: "app/components/CustomProvider.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/CustomProvider.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/CustomProvider.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Spinner, { isLoad: !0 }, void 0, !1, {
    fileName: "app/components/CustomProvider.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
};

// app/root.tsx
var import_app = require("firebase/app");

// app/components/NotFound.tsx
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), NotFound = () => {
  let navigate = (0, import_react13.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "bg-[#f0f7f6] text-sm flex flex-col sm:text-xs min-h-screen justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "h-12 w-full shadow-md bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "img",
        {
          src: "https://ks-icons.s3.ap-northeast-1.amazonaws.com/Logo.png",
          alt: "Shift maker",
          className: "h-12 cursor-pointer",
          onClick: () => navigate("/shift")
        },
        void 0,
        !1,
        {
          fileName: "app/components/NotFound.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NotFound.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex justify-center flex-col rounded-md p-5 bg-white items-center m-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "font-bold text-lg mb-4", children: "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
          fileName: "app/components/NotFound.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "mb-4", children: "\u304A\u63A2\u3057\u306E\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u4E0B\u306E\u30DC\u30BF\u30F3\u3088\u308A\u304A\u9032\u307F\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
          fileName: "app/components/NotFound.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { text: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078", onClick: () => navigate("/shift"), customWidth: "300px" }, void 0, !1, {
          fileName: "app/components/NotFound.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NotFound.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NotFound.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/components/NotFound.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NotFound.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/root.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Shift maker",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: generated_default },
  {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  },
  {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }
];
async function loader() {
  return process.env ? {
    env: {
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      HASURA_URL: process.env.HASURA_URL,
      HASURA_KEY: process.env.HASURA_KEY,
      ENVIRONMENT: process.env.ENVIRONMENT
    }
  } : null;
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("title", { children: "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(NotFound, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
var initializeFirebase = (config) => {
  let app;
  try {
    app = (0, import_app.getApp)();
  } catch {
    app = (0, import_app.initializeApp)(config);
  }
  return app;
};
function Root() {
  let { env } = (0, import_react14.useLoaderData)();
  return typeof window < "u" && initializeFirebase({
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.APP_ID
  }), (env.ENVIRONMENT === "PRODUCT" ? ["warn", "error", "log", "debug"] : ["debug", "warn", "error"]).forEach((key) => {
    console[key] = () => {
    };
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_recoil3.RecoilRoot, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RootSpinner, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(CustomProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react14.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_hot_toast2.Toaster, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

// app/routes/$date.$shiftId/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  default: () => Index
});
var import_react23 = require("@remix-run/react"), import_react24 = require("react");

// app/components/table/ShiftsTable.tsx
var import_react_select2 = __toESM(require("react-select")), import_react16 = require("react");

// app/hooks/useGetElementProperty.ts
var import_react15 = require("react"), useGetElementProperty = (elementRef) => {
  let getElementProperty = (0, import_react15.useCallback)(
    (targetProperty) => {
      var _a;
      let clientRect = (_a = elementRef == null ? void 0 : elementRef.current) == null ? void 0 : _a.getBoundingClientRect();
      return clientRect ? clientRect[targetProperty] : 0;
    },
    [elementRef]
  ), getWindowDimensions = () => {
    if (typeof window < "u") {
      let { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    } else
      return {
        width: 0,
        height: 0
      };
  }, [windowDimensions, setWindowDimensions] = (0, import_react15.useState)(getWindowDimensions());
  return (0, import_react15.useEffect)(() => {
    let onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    return window == null || window.addEventListener("resize", onResize), () => window == null ? void 0 : window.removeEventListener("resize", onResize);
  }, []), {
    getElementProperty,
    windowDimensions
  };
};

// app/components/table/ShiftsTable.tsx
var import_bs2 = require("react-icons/bs");
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), ShiftsTable = ({ tableSize = 15, shifts, setShifts, employees, workingTimes, disabled, setUpdateFlag, isEdit }) => {
  let { recoilShiftDate } = useShiftCreateRecoil(), { date: editShiftDate } = (0, import_react17.useParams)(), targetRef = (0, import_react16.useRef)(null), { getElementProperty, windowDimensions } = useGetElementProperty(targetRef), [tdWidth, setWidth] = (0, import_react16.useState)(), [isOpenTotalWorkArea, setOpenTotalWorkArea] = (0, import_react16.useState)(!1), [isDelayOpen, setDelayOpen] = (0, import_react16.useState)(!1);
  (0, import_react16.useEffect)(() => {
    setTimeout(() => {
      setOpenTotalWorkArea(isDelayOpen);
    }, 300);
  }, [isDelayOpen]), (0, import_react16.useEffect)(() => {
    (windowDimensions == null ? void 0 : windowDimensions.width) >= 640 ? setWidth(getElementProperty("width") / tableSize) : employees && workingTimes && setWidth((getElementProperty("width") - 50) / (employees.length + workingTimes.length));
  }, [getElementProperty, tableSize, isOpenTotalWorkArea, windowDimensions]);
  let WeekDay = ({ day }) => {
    let currentDay = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"][new Date(
      isEdit ? Number(editShiftDate == null ? void 0 : editShiftDate.split(".")[0]) : (recoilShiftDate == null ? void 0 : recoilShiftDate.year) ?? 2e3,
      isEdit ? Number(editShiftDate == null ? void 0 : editShiftDate.split(".")[1]) - 1 : Number(recoilShiftDate == null ? void 0 : recoilShiftDate.month) - 1,
      day
    ).getDay()];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: `${currentDay === "\u571F" ? "text-[#3190FF]" : currentDay === "\u65E5" && "text-[#FF7070]"}`, children: currentDay }, void 0, !1, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 59,
      columnNumber: 12
    }, this);
  }, options = workingTimes ? [
    { value: void 0, label: "\u672A\u9078\u629E" },
    ...workingTimes.map((v) => ({ value: v.id, label: v.timeName })),
    { value: 91, label: "\u660E\u4F11" },
    { value: 92, label: "\u4F11" },
    { value: 93, label: "\u5E0C\u671B\u4F11" },
    { value: 94, label: "\u6709\u7D66" }
  ] : [], DayCountEmployee = ({ workingTime, day }) => {
    let employeeNum = 0;
    shifts == null || shifts.forEach((employee) => employee.workIds.forEach((v, i) => i === day && v === workingTime.id && employeeNum++));
    let textColor = employeeNum < workingTime.minEmployee ? "text-[#FF7070]" : employeeNum > workingTime.maxEmployee ? "text-[#3190FF]" : "";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: textColor, children: employeeNum }, void 0, !1, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }, TotalCountWork = ({ workingTimeId, employee }) => {
    let workNum = 0, employeeShift = shifts == null ? void 0 : shifts.find((shiftEmployee) => shiftEmployee.employee === employee.id);
    return employeeShift == null || employeeShift.workIds.forEach((v) => v === workingTimeId && workNum++), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: workNum }, void 0, !1, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 89,
      columnNumber: 12
    }, this);
  }, WorkingTimeSelect = ({
    day,
    index,
    workingTimeOptions
  }) => {
    var _a, _b, _c;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      import_react_select2.default,
      {
        instanceId: "select",
        value: {
          value: (_a = shifts[index]) == null ? void 0 : _a.workIds[day],
          label: ((_b = shifts[index]) == null ? void 0 : _b.workIds[day]) && ((_c = options.find((v) => {
            var _a2;
            return v.value === ((_a2 = shifts[index]) == null ? void 0 : _a2.workIds[day]);
          })) == null ? void 0 : _c.label)
        },
        options: workingTimeOptions,
        onChange: (e) => {
          setUpdateFlag && setUpdateFlag(!0);
          let currentShifts = [...shifts];
          currentShifts[index].workIds[day] = e.value, setShifts([...currentShifts]);
        },
        menuPlacement: "top",
        menuPosition: "fixed",
        styles: {
          control: (base) => ({ ...base, backgroundColor: "transparent", border: 0, padding: 0, zIndex: 9999 }),
          singleValue: (base) => ({ ...base, whiteSpace: (windowDimensions == null ? void 0 : windowDimensions.width) >= 640 ? "nowrap" : "normal" }),
          valueContainer: (base) => ({ ...base, padding: "0px", width: `${tdWidth}px` }),
          menu: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 60, fontSize: "12px" }),
          menuPortal: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999 }),
          indicatorsContainer: () => ({ display: "none" }),
          indicatorSeparator: () => ({ display: "none" }),
          placeholder: () => ({ display: "none" }),
          container: (base) => ({ ...base, zIndex: 20 })
        },
        isDisabled: disabled,
        isSearchable: !1,
        menuShouldBlockScroll: !0,
        menuPortalTarget: document.body
      },
      void 0,
      !1,
      {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 101,
        columnNumber: 5
      },
      this
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center w-full flex-col rounded-md", children: (windowDimensions == null ? void 0 : windowDimensions.width) >= 640 ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex w-full  text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "border items-center flex w-[150px] justify-center h-[60px] bg-primary border-r-[#999]", children: [
        isEdit ? editShiftDate == null ? void 0 : editShiftDate.split(".")[0] : recoilShiftDate == null ? void 0 : recoilShiftDate.year,
        " \u5E74",
        " ",
        isEdit ? editShiftDate == null ? void 0 : editShiftDate.split(".")[1] : recoilShiftDate == null ? void 0 : recoilShiftDate.month,
        " \u6708"
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      employees == null ? void 0 : employees.map((employee, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "div",
        {
          className: `text-black flex items-center justify-center h-10 border border-r-[#999] ${i % 2 && "bg-primary-pale"} ${employees.length - 1 === i && "border-b-[#999]"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: employee.name }, void 0, !1, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 150,
            columnNumber: 17
          }, this)
        },
        i,
        !1,
        {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 144,
          columnNumber: 15
        },
        this
      )),
      workingTimes == null ? void 0 : workingTimes.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "div",
        {
          className: `text-black flex items-center justify-center h-10 border border-r-[#999] ${i % 2 && "bg-secondary-pale"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: workingTime.timeName }, void 0, !1, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 158,
            columnNumber: 17
          }, this)
        },
        i,
        !1,
        {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 154,
          columnNumber: 15
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex overflow-x-scroll w-full", ref: targetRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex", children: shifts[0].workIds.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col text-center trans30", style: { width: `${tdWidth}px` }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative h-[60px] hover:opacity-70", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react_select2.default,
          {
            instanceId: "select",
            options,
            onChange: (e) => {
              setUpdateFlag && setUpdateFlag(!0);
              let currentShifts = [...shifts];
              currentShifts.forEach((employee) => {
                employee.workIds[i] = e.value;
              }), setShifts([...currentShifts]);
            },
            menuPlacement: "top",
            menuPosition: "fixed",
            styles: {
              control: (base) => ({
                ...base,
                backgroundColor: "transparent",
                border: 0,
                position: "absolute",
                zIndex: 20,
                width: tdWidth,
                height: `${employees.length * 40 + 60}px`
              }),
              valueContainer: (base) => ({ ...base, padding: 0, width: "50px", color: "transparent" }),
              menu: (base) => ({ ...base, width: "100px", margin: 0, color: "#000", fontSize: "12px" }),
              menuPortal: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999 }),
              indicatorsContainer: () => ({ display: "none" }),
              indicatorSeparator: () => ({ display: "none" }),
              placeholder: () => ({ display: "none" }),
              singleValue: () => ({ display: "none" })
            },
            isDisabled: disabled,
            isSearchable: !1,
            menuShouldBlockScroll: !0,
            menuPortalTarget: document.body
          },
          void 0,
          !1,
          {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 167,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "border bg-primary absolute flex justify-center items-center h-[30px] w-full", children: i + 1 }, i, !1, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 203,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "bg-[#b4d2cb] border absolute flex justify-center items-center h-[30px] top-[30px] w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WeekDay, { day: i + 1 }, void 0, !1, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 207,
          columnNumber: 23
        }, this) }, i, !1, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 206,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 166,
        columnNumber: 19
      }, this),
      employees == null ? void 0 : employees.map((employee, ii) => {
        var _a;
        let workingTimeOptions = [
          ...options.filter((option) => option.value > 90 || employee.canWorkingIds.includes(option.value) || !option.value)
        ];
        return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "div",
          {
            className: `text-black flex items-center justify-center h-10 border ${ii % 2 && "bg-primary-pale"} ${employees.length - 1 === ii && "border-b-[#999]"}`,
            style: {
              backgroundColor: (_a = workingTimes == null ? void 0 : workingTimes.find((workingTime) => workingTime.id === shifts[ii].workIds[i])) == null ? void 0 : _a.color
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WorkingTimeSelect, { day: i, index: ii, workingTimeOptions }, void 0, !1, {
              fileName: "app/components/table/ShiftsTable.tsx",
              lineNumber: 226,
              columnNumber: 25
            }, this)
          },
          i,
          !1,
          {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 217,
            columnNumber: 23
          },
          this
        );
      }),
      workingTimes == null ? void 0 : workingTimes.map((workingTime, ii) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: `text-black flex items-center justify-center h-10 border ${ii % 2 && "bg-secondary-pale"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DayCountEmployee, { workingTime, day: i }, void 0, !1, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 232,
        columnNumber: 23
      }, this) }, ii, !1, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 231,
        columnNumber: 21
      }, this))
    ] }, i, !0, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 165,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 163,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex", children: [
        options.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "div",
          {
            className: `${i === 0 && "border-l-[#999] "} justify-center border items-center flex h-[60px] bg-primary text-vertical trans30 px-1 leading-3	`,
            style: isDelayOpen ? { width: "35px" } : { width: "0px", border: 0, padding: 0 },
            children: isDelayOpen && workingTime.label
          },
          i,
          !1,
          {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 243,
            columnNumber: 17
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "justify-center border items-center flex  w-[35px] h-[60px] bg-primary text-vertical", children: "\u5408\u8A08" }, void 0, !1, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 241,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex", children: [
        options.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: employees == null ? void 0 : employees.map((employee, ii) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "div",
          {
            className: `text-black flex flex-col items-center justify-center h-10 border trans30 ${i % 2 && "bg-primary-pale"} ${i === 0 && "border-l-[#999]"}`,
            style: isDelayOpen ? { width: "35px" } : { width: "0px", border: 0 },
            children: isDelayOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TotalCountWork, { workingTimeId: workingTime.value, employee }, void 0, !1, {
              fileName: "app/components/table/ShiftsTable.tsx",
              lineNumber: 266,
              columnNumber: 39
            }, this)
          },
          ii,
          !1,
          {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 259,
            columnNumber: 21
          },
          this
        )) }, i, !1, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 257,
          columnNumber: 17
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "div",
          {
            className: "border text-black flex justify-center items-center flex-col border-b-[#999] w-[35px] hover:bg-[rgba(250,250,250)] cursor-pointer",
            style: employees ? { height: `${employees.length * 40}px` } : {},
            onClick: () => setDelayOpen(!isDelayOpen),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-vertical", style: (employees == null ? void 0 : employees.length) === 1 ? { display: "none" } : {}, children: isDelayOpen ? "\u9589\u3058\u308B" : "\u958B\u304F" }, void 0, !1, {
                fileName: "app/components/table/ShiftsTable.tsx",
                lineNumber: 276,
                columnNumber: 17
              }, this),
              isDelayOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_bs2.BsChevronRight, { size: (employees == null ? void 0 : employees.length) === 1 ? 20 : 25, className: "mt-1" }, void 0, !1, {
                fileName: "app/components/table/ShiftsTable.tsx",
                lineNumber: 280,
                columnNumber: 19
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_bs2.BsChevronLeft, { size: (employees == null ? void 0 : employees.length) === 1 ? 20 : 25, className: "mt-1" }, void 0, !1, {
                fileName: "app/components/table/ShiftsTable.tsx",
                lineNumber: 282,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 271,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 240,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/table/ShiftsTable.tsx",
    lineNumber: 137,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-xs text-[#888]", children: "\u753B\u9762\u5168\u4F53\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B\u5834\u5408\u306F\u53F3\u306E\u9752\u3044\u30D0\u30FC\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 290,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex smartTable", ref: targetRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "max-h-[84vh] overflow-auto hidden-scrollbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("table", { className: "text-white max-w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("th", { style: { maxWidth: tdWidth, minWidth: "50px" }, className: "z-[49] text-black h-10 w-[50px] bg-primary p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "border h-full w-full border-[#999] flex justify-center items-center text-white", children: [
            isEdit ? editShiftDate == null ? void 0 : editShiftDate.split(".")[1] : recoilShiftDate == null ? void 0 : recoilShiftDate.month,
            " \u6708"
          ] }, void 0, !0, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 296,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, this),
          employees == null ? void 0 : employees.map((employee, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "th",
            {
              style: { width: tdWidth, minWidth: "70px" },
              className: `z-40 text-black h-10 p-0 ${i % 2 ? "bg-primary-pale" : "bg-white"}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: `border h-full w-full border-b-[#999] border-t-[#999] flex justify-center items-center ${employees.length - 1 === i && "border-r-[#999]"}`,
                  children: employee.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 306,
                  columnNumber: 23
                },
                this
              )
            },
            i,
            !1,
            {
              fileName: "app/components/table/ShiftsTable.tsx",
              lineNumber: 301,
              columnNumber: 21
            },
            this
          )),
          workingTimes == null ? void 0 : workingTimes.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
            "th",
            {
              style: { width: tdWidth, minWidth: "50px" },
              className: `z-40 text-black h-10 p-0 ${i % 2 ? "bg-secondary-pale" : "bg-white"}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "div",
                {
                  className: `border h-full w-full border-b-[#999] border-t-[#999] flex justify-center items-center ${workingTimes.length - 1 === i && "border-r-[#999]"}`,
                  children: workingTime.timeName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 321,
                  columnNumber: 23
                },
                this
              )
            },
            i,
            !1,
            {
              fileName: "app/components/table/ShiftsTable.tsx",
              lineNumber: 316,
              columnNumber: 21
            },
            this
          ))
        ] }, void 0, !0, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 294,
          columnNumber: 17
        }, this),
        shifts[0].workIds.map((_, i) => {
          var _a, _b;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("th", { className: "h-[40px] p-0 z-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex h-[40px] relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                import_react_select2.default,
                {
                  instanceId: "select",
                  options,
                  onChange: (e) => {
                    setUpdateFlag && setUpdateFlag(!0);
                    let currentShifts = [...shifts];
                    currentShifts.forEach((employee) => {
                      employee.workIds[i] = e.value;
                    }), setShifts([...currentShifts]);
                  },
                  menuPlacement: "top",
                  menuPosition: "fixed",
                  styles: {
                    control: (base) => ({
                      ...base,
                      backgroundColor: "transparent",
                      border: 0,
                      position: "absolute",
                      zIndex: 9998,
                      ":hover": {
                        width: `${tdWidth && tdWidth > 70 ? tdWidth * employees.length + 50 : 70 * employees.length + 50}px`
                      }
                    }),
                    valueContainer: (base) => ({ ...base, padding: 0, width: "70px", color: "transparent" }),
                    menu: (base) => ({ ...base, width: "100px", margin: 0, color: "#000", fontSize: "12px" }),
                    menuPortal: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999 }),
                    indicatorsContainer: () => ({ display: "none" }),
                    indicatorSeparator: () => ({ display: "none" }),
                    placeholder: () => ({ display: "none" }),
                    singleValue: () => ({ display: "none" })
                  },
                  isDisabled: disabled,
                  isSearchable: !1,
                  menuShouldBlockScroll: !0,
                  menuPortalTarget: document.body
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 335,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "p",
                {
                  className: `flex justify-center items-center border bg-primary min-w-[25px] w-[25px] h-full border-l-[#999] absolute ${((_a = shifts[0].workIds) == null ? void 0 : _a.length) - 1 === i && "border-b-[#999]"}`,
                  children: i + 1
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 372,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "p",
                {
                  className: `flex justify-center items-center bg-[#b4d2cb] border min-w-[25px] border-r-[#999] absolute w-[25px] left-[25px] h-full ${((_b = shifts[0].workIds) == null ? void 0 : _b.length) - 1 === i && "border-b-[#999]"}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WeekDay, { day: i + 1 }, void 0, !1, {
                    fileName: "app/components/table/ShiftsTable.tsx",
                    lineNumber: 384,
                    columnNumber: 27
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 379,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/table/ShiftsTable.tsx",
              lineNumber: 334,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/components/table/ShiftsTable.tsx",
              lineNumber: 333,
              columnNumber: 21
            }, this),
            employees == null ? void 0 : employees.map((employee, ii) => {
              var _a2, _b2;
              let workingTimeOptions = [
                ...options.filter((option) => option.value > 90 || employee.canWorkingIds.includes(option.value) || !option.value)
              ];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "td",
                {
                  className: `z-[9999] text-black border h-10 p-0 text-center ${ii % 2 ? "bg-primary-pale" : "bg-white"}  ${employees.length - 1 === ii && "border-r-[#999]"} ${((_a2 = shifts[0].workIds) == null ? void 0 : _a2.length) - 1 === i && "border-b-[#999]"}`,
                  style: {
                    backgroundColor: (_b2 = workingTimes == null ? void 0 : workingTimes.find((workingTime) => workingTime.id === shifts[ii].workIds[i])) == null ? void 0 : _b2.color
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(WorkingTimeSelect, { day: i, index: ii, workingTimeOptions }, void 0, !1, {
                    fileName: "app/components/table/ShiftsTable.tsx",
                    lineNumber: 402,
                    columnNumber: 27
                  }, this)
                },
                ii,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 393,
                  columnNumber: 25
                },
                this
              );
            }),
            workingTimes == null ? void 0 : workingTimes.map((workingTime, ii) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "td",
                {
                  className: `text-black h-10 border text-center ${workingTimes.length - 1 === ii && "border-r-[#999]"} ${ii % 2 && "bg-secondary-pale"} ${((_a2 = shifts[0].workIds) == null ? void 0 : _a2.length) - 1 === i && "border-b-[#999]"}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DayCountEmployee, { workingTime, day: i }, void 0, !1, {
                    fileName: "app/components/table/ShiftsTable.tsx",
                    lineNumber: 413,
                    columnNumber: 25
                  }, this)
                },
                i,
                !1,
                {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 407,
                  columnNumber: 23
                },
                this
              );
            })
          ] }, i, !0, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 332,
            columnNumber: 19
          }, this);
        }),
        options.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("th", { className: "h-[40px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "justify-center border items-center flex w-full bg-primary border-r-[#999] h-[40px]", children: workingTime.label }, void 0, !1, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 421,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/table/ShiftsTable.tsx",
            lineNumber: 420,
            columnNumber: 21
          }, this),
          employees == null ? void 0 : employees.map((employee, ii) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
              "td",
              {
                className: `text-black border h-10 p-0 text-center ${ii % 2 ? "bg-primary-pale" : "bg-white"}  ${employees.length - 1 === ii && "border-r-[#999]"} ${((_a = shifts[0].workIds) == null ? void 0 : _a.length) - 1 === i && "border-b-[#999]"}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(TotalCountWork, { workingTimeId: workingTime.value, employee }, void 0, !1, {
                  fileName: "app/components/table/ShiftsTable.tsx",
                  lineNumber: 432,
                  columnNumber: 26
                }, this)
              },
              ii,
              !1,
              {
                fileName: "app/components/table/ShiftsTable.tsx",
                lineNumber: 426,
                columnNumber: 23
              },
              this
            );
          })
        ] }, i, !0, {
          fileName: "app/components/table/ShiftsTable.tsx",
          lineNumber: 419,
          columnNumber: 19
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 293,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 292,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "ml-1 w-6 max-h-[84vh] bg-blue-400 rounded-md" }, void 0, !1, {
        fileName: "app/components/table/ShiftsTable.tsx",
        lineNumber: 439,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table/ShiftsTable.tsx",
      lineNumber: 291,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/table/ShiftsTable.tsx",
    lineNumber: 289,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/table/ShiftsTable.tsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
};

// app/components/Title.tsx
var import_bi2 = require("react-icons/bi"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Title = ({ currentText, previous }) => {
  let navigate = (0, import_react18.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col items-start", children: [
    previous && (previous == null ? void 0 : previous.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      Button,
      {
        text: "< \u623B\u308B",
        variant: "text",
        onClick: () => {
          var _a, _b;
          return navigate((_a = previous[previous.length - 1]) == null ? void 0 : _a.rootPath, { state: (_b = previous[previous.length - 1]) == null ? void 0 : _b.state });
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/Title.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-baseline overflow-auto w-full hidden-scrollbar", children: [
      previous == null ? void 0 : previous.map(({ text, rootPath, state, isHidden }, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: `flex ${isHidden && "hidden"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "text-[#666] hover:text-[#aaa] cursor-pointer truncate", onClick: () => navigate(rootPath, { state }), children: text }, void 0, !1, {
          fileName: "app/components/Title.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_bi2.BiChevronRight, { size: 20, color: "#666" }, void 0, !1, {
          fileName: "app/components/Title.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, i, !0, {
        fileName: "app/components/Title.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "text-lg font-bold text-primary-text whitespace-nowrap", children: currentText }, void 0, !1, {
        fileName: "app/components/Title.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Title.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Title.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/routes/$date.$shiftId/edit.tsx
var import_react_hook_form = require("react-hook-form");

// app/graphql/mutation.ts
var import_client3 = require("@apollo/client"), deleteUser = import_client3.gql`
  mutation deleteUser($uuid: String!) {
    delete_user(where: { uuid: { _eq: $uuid } }) {
      affected_rows
    }
  }
`, mutationShiftDate = import_client3.gql`
  mutation insertShiftDate($shiftDate: [shiftDate_insert_input!]!) {
    insert_shiftDate(objects: $shiftDate) {
      returning {
        id
      }
    }
  }
`, mutationShift = import_client3.gql`
  mutation insertShift($shift: [shift_insert_input!]!) {
    insert_shift(objects: $shift) {
      returning {
        id
      }
    }
  }
`, updateShift = import_client3.gql`
  mutation updateShift($shift: [shift_insert_input!]!, $shiftId: Int!) {
    delete_shift(where: { id: { _eq: $shiftId } }) {
      affected_rows
    }
    insert_shift(objects: $shift) {
      returning {
        id
      }
    }
  }
`, deleteShift = import_client3.gql`
  mutation deleteShift($shiftId: Int!) {
    delete_shift(where: { id: { _eq: $shiftId } }) {
      affected_rows
    }
  }
`, deleteShiftDate = import_client3.gql`
  mutation deleteShiftDate($shiftDateId: Int!) {
    delete_shiftDate(where: { id: { _eq: $shiftDateId } }) {
      affected_rows
    }
  }
`, mutationWorkingTimesAndEmployees = import_client3.gql`
  mutation upsertWorkingTimes(
    $workingTimes: [workingTime_insert_input!]!
    $employees: [employee_insert_input!]!
    $deleteEmployeeIds: [Int]!
    $deleteWorkingTimeIds: [Int]!
  ) {
    insert_workingTime(
      objects: $workingTimes
      on_conflict: {
        constraint: workingTime_pkey
        update_columns: [timeName, color, startHour, startMinute, endHour, endMinute, isNextDayoff, maxEmployee, minEmployee]
      }
    ) {
      returning {
        color
        isNextDayoff
        maxEmployee
        minEmployee
        timeName
      }
    }
    insert_employee(objects: $employees, on_conflict: { constraint: employee_pkey, update_columns: [userId, name, canWorkingIds] }) {
      returning {
        name
        canWorkingIds
      }
    }
    delete_workingTime(where: { id: { _in: $deleteWorkingTimeIds } }) {
      affected_rows
    }
    delete_employee(where: { id: { _in: $deleteEmployeeIds } }) {
      affected_rows
    }
  }
`;

// app/hooks/useApollo.ts
var import_react19 = require("react"), import_react_hot_toast3 = __toESM(require("react-hot-toast"));
var import_client4 = require("@apollo/client"), import_react20 = require("@remix-run/react");
var useMutation = ({ mutation, successMessage, callback, isBackNav = !1 }) => {
  let { setRecoilLoad } = useLoadRecoil(), navigate = (0, import_react20.useNavigate)(), [mutationFunc, { data, loading, error }] = (0, import_client4.useMutation)(mutation);
  return (0, import_react19.useEffect)(() => {
    console.log("!!>>>MUTATION_ERROR>>>!!", error), error && import_react_hot_toast3.default.error("\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F");
  }, [error]), (0, import_react19.useEffect)(() => {
    console.log("||>>>MUTATION_DATA >>>||", data), data && (import_react_hot_toast3.default.success(successMessage ?? "\u30C7\u30FC\u30BF\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F"), isBackNav ? navigate(-1) : callback());
  }, [data]), (0, import_react19.useEffect)(() => {
    setRecoilLoad(!!loading);
  }, [loading]), mutationFunc;
}, useQuery = (query) => {
  let { data, loading, error: queryError } = (0, import_client4.useQuery)(query), { recoilGQLerror, setRecoilGQLError } = useGQLErrorRecoil();
  return (0, import_react19.useEffect)(() => {
    console.log("!!>>>QUERY_ERROR>>>!!", queryError), queryError && !["Could not verify JWT: JWTExpired", "claims key: 'https://hasura.io/jwt/claims' not found"].includes(queryError.message) && import_react_hot_toast3.default.error("\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002"), !recoilGQLerror && setRecoilGQLError(queryError == null ? void 0 : queryError.message);
  }, [queryError]), (0, import_react19.useEffect)(() => {
    console.log("||>>>QUERY_DATA >>>||", data);
  }, [data]), { data, loading, queryError };
};

// app/hooks/useMutationShift.ts
var import_react21 = require("@remix-run/react"), useMutationShift = ({ shifts, shiftInfo, employees, workingTimes }) => {
  let navigate = (0, import_react21.useNavigate)(), { date: shiftDate } = (0, import_react21.useParams)(), { recoilEmployeeWorkingTime, recoilShiftDate, recoilCreateShiftId, resetCreate } = useShiftCreateRecoil(), { recoilEditShiftId, setRecoilEditUpdateId } = useShiftEditRecoil(), { recoilUser } = useUserRecoil(), shiftEmployees = employees ?? (recoilEmployeeWorkingTime && [...recoilEmployeeWorkingTime.employees]), shiftWorkingTimes = workingTimes ?? (recoilEmployeeWorkingTime && [...recoilEmployeeWorkingTime.workingTimes]), shiftVariable = {
    shiftName: shiftInfo.shiftName,
    isCompleted: shiftInfo.isCompleted,
    createdAt: shiftInfo.createdAt ?? /* @__PURE__ */ new Date(),
    updatedAt: shiftInfo.updatedAt ?? null,
    shiftWorkingTimes: {
      data: shiftWorkingTimes && [
        ...shiftWorkingTimes.map((v) => {
          let obj = { ...v };
          return delete obj.__typename, delete obj.userId, {
            ...obj
          };
        })
      ]
    },
    shiftEmployees: {
      data: shiftEmployees && [
        ...shiftEmployees.map((v) => {
          var _a, _b;
          console.log("v:");
          let obj = { ...v };
          delete obj.id, delete obj.userId;
          let filteredWorkIds = (((_b = (_a = shifts.find((shift) => shift.employee === v.id)) == null ? void 0 : _a.workIds) == null ? void 0 : _b.map((id, i) => id ?? null)) ?? []).filter((id) => id !== null);
          return {
            name: v.name,
            canWorkingIds: v.canWorkingIds,
            workIds: filteredWorkIds
          };
        })
      ]
    }
  }, shiftDateVariable = {
    shiftDate: {
      userId: recoilUser == null ? void 0 : recoilUser.uid,
      year: recoilShiftDate == null ? void 0 : recoilShiftDate.year,
      month: recoilShiftDate == null ? void 0 : recoilShiftDate.month,
      shifts: { data: [shiftVariable] }
    }
  }, mutationDocumentNode, variables;
  shiftInfo != null && shiftInfo.isEdit ? (mutationDocumentNode = updateShift, variables = {
    shift: { ...shiftVariable, shiftDateId: recoilEditShiftId == null ? void 0 : recoilEditShiftId.shiftDateId },
    shiftId: recoilEditShiftId == null ? void 0 : recoilEditShiftId.shiftId
  }) : shiftInfo != null && shiftInfo.isFirstDateShift ? (mutationDocumentNode = mutationShiftDate, variables = shiftDateVariable) : (mutationDocumentNode = mutationShift, variables = { shift: { ...shiftVariable, shiftDateId: recoilCreateShiftId == null ? void 0 : recoilCreateShiftId.shiftDateId } });
  let mutation = useMutation({
    mutation: mutationDocumentNode,
    successMessage: "\u5165\u529B\u60C5\u5831\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F",
    callback: () => {
      shiftInfo.isTemporarily ? (navigate(`/shift/${recoilShiftDate == null ? void 0 : recoilShiftDate.year}.${recoilShiftDate == null ? void 0 : recoilShiftDate.month}`), setRecoilEditUpdateId(void 0), resetCreate()) : shiftInfo != null && shiftInfo.isEdit ? (setRecoilEditUpdateId(void 0), navigate(`/shift/${shiftDate}`)) : (navigate(`/shift/${recoilShiftDate == null ? void 0 : recoilShiftDate.year}.${recoilShiftDate == null ? void 0 : recoilShiftDate.month}`), resetCreate());
    }
  });
  return () => {
    console.log("variables:", JSON.stringify(variables, null, 2)), mutation({
      variables
    });
  };
};

// app/hooks/useCreateShifts.ts
var import_react22 = require("react");
var useCreateShifts = ({ employees, setShifts, shifts, workingTimes, setStep, setFilledShifts, isEdit, date }) => {
  let { recoilShiftDate, setRecoilStep1Shifts, recoilStep1Shifts, setRecoilStep2Shifts, recoilStep2Shifts } = useShiftCreateRecoil(), [autoShiftFlag, setAutoShiftFlag] = (0, import_react22.useState)(!1), createAutoShift = () => setAutoShiftFlag(!0), initializeShift = () => {
    let currentShifts = [];
    employees == null || employees.forEach((employee) => {
      let employeeShifts = [];
      [...Array(new Date(date ? date.year : recoilShiftDate.year, date ? date.month : recoilShiftDate.month, 0).getDate())].forEach(
        (_, day) => {
          employeeShifts[day] = void 0;
        }
      ), currentShifts.push({ employee: employee.id, workIds: [...employeeShifts] });
    }), setShifts([...currentShifts]), setRecoilStep1Shifts(void 0), setRecoilStep2Shifts(void 0);
  }, resetStep2Shift = () => {
    let newArray = [];
    recoilStep1Shifts == null || recoilStep1Shifts.map((employeeShift) => {
      let mutableWorkIds = [];
      employeeShift.workIds.forEach((workId) => {
        mutableWorkIds.push(workId);
      }), newArray.push({ employee: employeeShift.employee, workIds: mutableWorkIds });
    }), setShifts([...newArray]), setRecoilStep2Shifts(void 0);
  }, resetStep3Shift = () => {
    let newArray = [];
    recoilStep2Shifts == null || recoilStep2Shifts.forEach((employeeShift) => {
      var _a;
      let mutableWorkIds = [];
      (_a = employeeShift.workIds) == null || _a.forEach((workId) => {
        mutableWorkIds.push(workId);
      }), newArray.push({ employee: employeeShift.employee, workIds: mutableWorkIds });
    }), setShifts([...newArray]);
  }, autoShift = () => {
    let shuffle = (arrays) => {
      let array = arrays.slice();
      for (let i = array.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      }
      return array;
    }, currentShifts = [...shifts], currentEmployee = [
      ...employees.map((employee, i) => ({ employee, workNum: 0, employeeIndex: i }))
    ], currentWorkingTimes = [
      ...workingTimes.map((workingTime) => ({ workingTime, employeeNum: 0 }))
    ];
    employees.forEach((employee) => {
      employee.canWorkingIds.forEach((workingTimeId) => {
        currentWorkingTimes.forEach((workingTime) => workingTime.workingTime.id === workingTimeId && workingTime.employeeNum++);
      });
    });
    let mustDayEmployee = 0;
    workingTimes.forEach((workingTime) => mustDayEmployee += workingTime.minEmployee), currentShifts.forEach((employee, i) => {
      [...Array(4)].forEach((_, week) => {
        let isDayoff = 0;
        for (let ii = week * 7; ii < week * 7 + 7; ii++)
          (employee.workIds[ii] === 92 || employee.workIds[ii] === 93) && isDayoff++;
        if (isDayoff > 1)
          return;
        let firstDayoff = Math.floor(Math.random() * 3 + week * 7), firstDayoffEmployee = 0;
        if (currentShifts.forEach((currentShiftsEmployee) => currentShiftsEmployee.workIds[firstDayoff] && firstDayoffEmployee++), (employees.length - firstDayoffEmployee > mustDayEmployee || mustDayEmployee >= employees.length) && !currentShifts[i].workIds[firstDayoff])
          currentShifts[i].workIds[firstDayoff] = 92;
        else {
          let nextFirstDayoff = firstDayoff % 7 < 2 ? firstDayoff + 1 : firstDayoff - 1;
          firstDayoffEmployee = 0, currentShifts.forEach((currentShiftsEmployee) => currentShiftsEmployee.workIds[nextFirstDayoff] && firstDayoffEmployee++), (employees.length - firstDayoffEmployee > mustDayEmployee || mustDayEmployee >= employees.length) && !currentShifts[i].workIds[nextFirstDayoff] ? currentShifts[i].workIds[nextFirstDayoff] = 92 : (nextFirstDayoff = firstDayoff % 7 === 0 ? 1 : 0, firstDayoffEmployee = 0, currentShifts.forEach((currentShiftsEmployee) => currentShiftsEmployee.workIds[nextFirstDayoff] && firstDayoffEmployee++), (employees.length - firstDayoffEmployee > mustDayEmployee || mustDayEmployee >= employees.length) && !currentShifts[i].workIds[firstDayoff] && (currentShifts[i].workIds[nextFirstDayoff] = 92));
        }
        if (isDayoff > 0)
          return;
        let secondDayoff = Math.floor(Math.random() * 4 + 3 + week * 7), secondDayoffEmployee = 0;
        if (currentShifts.forEach((currentShiftsEmployee) => currentShiftsEmployee.workIds[secondDayoff] && secondDayoffEmployee++), (employees.length - secondDayoffEmployee > mustDayEmployee || mustDayEmployee >= employees.length) && !currentShifts[i].workIds[secondDayoff])
          currentShifts[i].workIds[secondDayoff] = 92;
        else {
          let nextSecondDayoff = secondDayoff % 7 < 5 ? secondDayoff + 1 : secondDayoff - 1;
          secondDayoffEmployee = 0, currentShifts.forEach((currentShiftsEmployee) => currentShiftsEmployee.workIds[nextSecondDayoff] && secondDayoffEmployee++), (employees.length - secondDayoffEmployee > mustDayEmployee || mustDayEmployee >= employees.length) && !currentShifts[i].workIds[nextSecondDayoff] ? currentShifts[i].workIds[nextSecondDayoff] = 92 : (nextSecondDayoff--, secondDayoffEmployee = 0, currentShifts.forEach((currentShiftsEmployee) => currentShiftsEmployee.workIds[nextSecondDayoff] && secondDayoffEmployee++), (employees.length - secondDayoffEmployee > mustDayEmployee || mustDayEmployee >= employees.length) && !currentShifts[i].workIds[nextSecondDayoff] && (currentShifts[i].workIds[nextSecondDayoff] = 92));
        }
      });
    }), [...Array(new Date(date ? date.year : recoilShiftDate.year, date ? date.month : recoilShiftDate.month, 0).getDate())].forEach(
      (_, day) => {
        currentEmployee.sort((a, b) => a.workNum - b.workNum), currentWorkingTimes = shuffle(currentWorkingTimes), currentWorkingTimes.forEach(({ workingTime }) => {
          let employeeNum = 0;
          currentShifts == null || currentShifts.forEach((employee) => employee.workIds.forEach((v, ii) => ii === day && v === workingTime.id && employeeNum++)), currentEmployee.forEach((employee) => {
            let setShift = () => {
              currentShifts[employee.employeeIndex].workIds[day] = workingTime.id, employee.workNum++, employeeNum++;
            };
            if (
              // 該当勤務時間の最低人数を下回っているか
              workingTime.minEmployee > employeeNum && // 該当の従業員が該当の時間帯で勤務可能か
              employee.employee.canWorkingIds.includes(workingTime.id) && // 該当の従業員がまだシフトを割り当てられていないか
              !currentShifts[employee.employeeIndex].workIds[day]
            ) {
              let lastDay = day + 1 >= new Date(date ? date.year : recoilShiftDate.year, date ? date.month : recoilShiftDate.month, 0).getDate();
              if (workingTime.isNextDayoff) {
                if (!lastDay && !currentShifts[employee.employeeIndex].workIds[day + 1])
                  currentShifts[employee.employeeIndex].workIds[day + 1] = 91, employee.workNum++;
                else if (!lastDay)
                  return;
              }
              setShift();
            }
          });
        });
      }
    ), setShifts([...currentShifts]);
  }, fillBlankShift = () => {
    let currentShifts = [...shifts];
    currentShifts.forEach((employee) => {
      employee.workIds.forEach((workId, i) => {
        workId || (employee.workIds[i] = 92);
      });
    }), setShifts([...currentShifts]);
  };
  return (0, import_react22.useEffect)(() => {
    isEdit || (recoilStep2Shifts ? (setStep && setStep(3), resetStep3Shift()) : recoilStep1Shifts ? (setStep && setStep(2), resetStep2Shift()) : initializeShift());
  }, [recoilStep1Shifts, recoilStep2Shifts]), (0, import_react22.useEffect)(() => {
    autoShiftFlag && (autoShift(), setAutoShiftFlag(!1));
  }, [autoShiftFlag]), (0, import_react22.useEffect)(() => {
    if (!shifts)
      return;
    let isBlank = !1;
    shifts.forEach((employee) => {
      employee.workIds.forEach((workId) => {
        workId || (setFilledShifts(!1), isBlank = !0);
      });
    }), !isBlank && setFilledShifts(!0);
  }, [shifts]), { resetStep2Shift, resetStep3Shift, initializeShift, createAutoShift, fillBlankShift };
};

// app/components/TableSizeButtons.tsx
var import_im3 = require("react-icons/im"), import_hi = require("react-icons/hi");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), TableSizeButtons = ({ tableSize, setTableSize, date }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center my-1", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    Button,
    {
      text: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_im3.ImShrink, { size: 20, className: "mr-1" }, void 0, !1, {
          fileName: "app/components/TableSizeButtons.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        "\u7E2E\u5C0F"
      ] }, void 0, !0, {
        fileName: "app/components/TableSizeButtons.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      customWidth: "70px",
      width: "sm",
      color: "secondary-light",
      disabled: tableSize === new Date(date.year, date.month, 0).getDate(),
      onClick: () => {
        tableSize + 5 > new Date(date.year, date.month, 0).getDate() ? setTableSize(new Date(date.year, date.month, 0).getDate()) : setTableSize(tableSize + 5);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/TableSizeButtons.tsx",
      lineNumber: 21,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mr-1" }, void 0, !1, {
    fileName: "app/components/TableSizeButtons.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    Button,
    {
      text: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_hi.HiArrowsExpand, { size: 28, className: "mr-1" }, void 0, !1, {
          fileName: "app/components/TableSizeButtons.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        "\u62E1\u5927"
      ] }, void 0, !0, {
        fileName: "app/components/TableSizeButtons.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      color: "secondary-light",
      width: "sm",
      customWidth: "70px",
      disabled: tableSize === 7,
      onClick: () => {
        tableSize - 5 > 7 ? setTableSize(tableSize - 5) : setTableSize(7);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/TableSizeButtons.tsx",
      lineNumber: 39,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/TableSizeButtons.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this);

// app/routes/$date.$shiftId/edit.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Index() {
  var _a;
  let navState = (0, import_react23.useLocation)().state, { date, shiftId } = (0, import_react23.useParams)(), [tableSize, setTableSize] = (0, import_react24.useState)(new Date(Number(date == null ? void 0 : date.split(".")[0]), Number(date == null ? void 0 : date.split(".")[1]), 0).getDate()), [isResetModalOpen, setResetModalOpen] = (0, import_react24.useState)(!1), [isAutoModalOpen, setAutoModalOpen] = (0, import_react24.useState)(!1), [isFilledShifts, setFilledShifts] = (0, import_react24.useState)(!1), { setRecoilEditUpdateId } = useShiftEditRecoil(), year = Number(date == null ? void 0 : date.split(".")[0]), month = Number(date == null ? void 0 : date.split(".")[1]), [shifts, setShifts] = (0, import_react24.useState)([]);
  (0, import_react24.useEffect)(() => {
    setRecoilEditUpdateId({ shiftDateId: navState == null ? void 0 : navState.shift.shiftDateId, shiftId: navState == null ? void 0 : navState.shift.id }), shifts.length === 0 && setShifts(
      navState == null ? void 0 : navState.shift.shiftEmployees.map((employee) => ({ employee: employee.id, workIds: [...employee.workIds.map((v) => Number(v))] }))
    );
  }, [navState]);
  let { initializeShift, createAutoShift, fillBlankShift } = useCreateShifts({
    employees: navState == null ? void 0 : navState.shift.shiftEmployees,
    setShifts,
    shifts,
    workingTimes: navState == null ? void 0 : navState.shift.shiftWorkingTimes,
    setFilledShifts,
    isEdit: !0,
    date: { year, month }
  }), {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = (0, import_react_hook_form.useForm)({
    defaultValues: { shiftName: navState == null ? void 0 : navState.shift.shiftName }
  }), mutationShift2 = useMutationShift({
    shifts,
    employees: navState == null ? void 0 : navState.shift.shiftEmployees,
    workingTimes: navState == null ? void 0 : navState.shift.shiftWorkingTimes,
    shiftInfo: {
      isCompleted: !0,
      isEdit: !(navState != null && navState.isCopy),
      shiftName: watch("shiftName"),
      createdAt: navState != null && navState.isCopy ? /* @__PURE__ */ new Date() : navState == null ? void 0 : navState.shift.createdAt,
      updatedAt: /* @__PURE__ */ new Date()
    }
  }), onAutoShift = async () => {
    await initializeShift(), createAutoShift(), setAutoModalOpen(!1);
  }, resetShift = () => {
    initializeShift(), setResetModalOpen(!1);
  }, olProps = { width: "sm", variant: "outlined", textSize: "text-xs", text: "<\u3000\u623B\u308B", color: "secondary-light" }, ctProps = { width: "sm", textSize: "text-xs", text: "\u6B21\u3078\u3000>", color: "secondary-light" };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Title,
      {
        currentText: navState != null && navState.isCopy ? "\u8907\u88FD\u7DE8\u96C6" : "\u7DE8\u96C6",
        previous: [
          { text: "\u4F5C\u6210\u30B7\u30D5\u30C8\u4E00\u89A7", rootPath: "/shift" },
          { text: `${year}\u5E74${month}\u6708`, rootPath: `/shift/${date}` },
          { text: navState == null ? void 0 : navState.shift.shiftName, rootPath: `/${date}/${shiftId}/show`, state: { shift: navState == null ? void 0 : navState.shift } }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 92,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center border border-gray-300 rounded-sm max-w-[800px] mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-1/3 bg-primary-pale h-8 flex items-center justify-center", children: "\u30B7\u30D5\u30C8\u540D" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-2/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Input, { label: "\u30B7\u30D5\u30C8\u540D", register, schema: "shiftName", required: !0 }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-xs text-[#ff3535]", children: (_a = errors == null ? void 0 : errors.shiftName) == null ? void 0 : _a.message }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(PartSpinner, { isLoad: (shifts == null ? void 0 : shifts.length) === 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-2 rounded-md shadow-md border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center w-full justify-between mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TableSizeButtons, { tableSize, setTableSize, date: { year, month } }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/edit.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/edit.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { ...olProps, onClick: () => setResetModalOpen(!0), text: "\u30EA\u30BB\u30C3\u30C8", color: "primary" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mr-4 sm:mr-2" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 116,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { ...ctProps, onClick: () => setAutoModalOpen(!0), text: "\u81EA\u52D5\u751F\u6210", color: "primary" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mr-4 sm:mr-2" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { ...ctProps, onClick: fillBlankShift, text: "\u7A7A\u6B04\u4F11\u6687\u57CB\u3081", color: "primary", disabled: isFilledShifts, width: "md" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mr-4 sm:mr-2" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { ...ctProps, onClick: handleSubmit(mutationShift2), text: "\u7DE8\u96C6\u78BA\u5B9A", disabled: !isFilledShifts }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/edit.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/$date.$shiftId/edit.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/edit.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        ShiftsTable,
        {
          tableSize,
          shifts,
          setShifts,
          employees: navState == null ? void 0 : navState.shift.shiftEmployees,
          workingTimes: navState == null ? void 0 : navState.shift.shiftWorkingTimes,
          isEdit: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$date.$shiftId/edit.tsx",
          lineNumber: 125,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Modal, { isOpen: isResetModalOpen, setOpen: setResetModalOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "text-base font-bold", children: "\u5165\u529B\u3055\u308C\u3066\u3044\u308B\u30B7\u30D5\u30C8\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3059\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-full flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { text: "OK", onClick: resetShift, variant: "outlined" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Modal, { isOpen: isAutoModalOpen, setOpen: setAutoModalOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "text-base font-bold", children: "\u81EA\u52D5\u751F\u6210\u3059\u308B\u3068\u30B7\u30D5\u30C8\u304C\u5168\u3066\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "text-sm ml-1", children: "\u203B\u300C\u7DE8\u96C6\u78BA\u5B9A\u300D\u3092\u62BC\u3055\u306A\u3044\u9650\u308A\u65E2\u5B58\u306E\u30B7\u30D5\u30C8\u304C\u66F4\u65B0\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 146,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-full flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { text: "OK", onClick: onAutoShift, variant: "outlined" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 148,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/edit.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 144,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/edit.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$date.$shiftId/edit.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

// app/routes/$date.$shiftId/show.tsx
var show_exports = {};
__export(show_exports, {
  default: () => Index2
});
var import_react26 = require("@remix-run/react"), import_react27 = require("react");

// app/components/table/ShiftsConfirmTable.tsx
var import_react25 = require("react");
var import_bs3 = require("react-icons/bs"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), ShiftsConfirmTable = ({ year = 2022, month = 1, tableSize = 15, shifts, employees, workingTimes }) => {
  let targetRef = (0, import_react25.useRef)(null), { getElementProperty, windowDimensions } = useGetElementProperty(targetRef), [tdWidth, setWidth] = (0, import_react25.useState)(), [isOpenTotalWorkArea, setOpenTotalWorkArea] = (0, import_react25.useState)(!1), [isDelayOpen, setDelayOpen] = (0, import_react25.useState)(!1);
  (0, import_react25.useEffect)(() => {
    setTimeout(() => {
      setOpenTotalWorkArea(isDelayOpen);
    }, 300);
  }, [isDelayOpen]), (0, import_react25.useEffect)(() => {
    (windowDimensions == null ? void 0 : windowDimensions.width) >= 640 ? setWidth(getElementProperty("width") / tableSize) : employees && workingTimes && setWidth((getElementProperty("width") - 50) / (employees.length + workingTimes.length));
  }, [getElementProperty, tableSize, isOpenTotalWorkArea, windowDimensions]);
  let WeekDay = ({ day }) => {
    let currentDay = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"][new Date(year, month - 1, day).getDay()];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: `${currentDay === "\u571F" ? "text-[#3190FF]" : currentDay === "\u65E5" && "text-[#FF7070]"}`, children: currentDay }, void 0, !1, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 46,
      columnNumber: 12
    }, this);
  }, options = workingTimes ? [
    ...workingTimes.map((v) => ({ value: v.id, label: v.timeName })),
    { value: 91, label: "\u660E\u4F11" },
    { value: 92, label: "\u4F11" },
    { value: 93, label: "\u5E0C\u671B\u4F11" },
    { value: 94, label: "\u6709\u7D66" }
  ] : [], DayCountEmployee = ({ workingTime, day }) => {
    let employeeNum = 0;
    shifts == null || shifts.forEach((employee) => employee.workIds.forEach((v, i) => i === day && v === workingTime.id && employeeNum++));
    let textColor = employeeNum < workingTime.minEmployee ? "text-[#FF7070]" : employeeNum > workingTime.maxEmployee ? "text-[#3190FF]" : "";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: textColor, children: employeeNum }, void 0, !1, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 67,
      columnNumber: 12
    }, this);
  }, TotalCountWork = ({ workingTimeId, employee }) => {
    let workNum = 0, employeeShift = shifts == null ? void 0 : shifts.find((shiftEmployee) => shiftEmployee.employee === employee.id);
    return employeeShift == null || employeeShift.workIds.forEach((v) => v === workingTimeId && workNum++), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: workNum }, void 0, !1, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 75,
      columnNumber: 12
    }, this);
  }, addDayoffWorkingTimes = workingTimes && [
    ...workingTimes,
    { id: 91, timeName: "\u660E\u4F11" },
    { id: 92, timeName: "\u4F11" },
    { id: 93, timeName: "\u5E0C\u671B\u4F11" },
    { id: 94, timeName: "\u6709\u7D66" }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-start w-full flex-col rounded-md", children: (windowDimensions == null ? void 0 : windowDimensions.width) >= 640 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex w-full  text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "border items-center flex w-[150px] justify-center h-[60px] bg-primary border-r-[#999]", children: [
        year,
        " \u5E74 ",
        month,
        " \u6708"
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      employees == null ? void 0 : employees.map((employee, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "div",
        {
          className: `text-black flex items-center justify-center h-10 border border-r-[#999] ${i % 2 && "bg-primary-pale"} ${employees.length - 1 === i && "border-b-[#999]"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: employee.name }, void 0, !1, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this)
        },
        i,
        !1,
        {
          fileName: "app/components/table/ShiftsConfirmTable.tsx",
          lineNumber: 96,
          columnNumber: 15
        },
        this
      )),
      workingTimes == null ? void 0 : workingTimes.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "div",
        {
          className: `text-black flex items-center justify-center h-10 border border-r-[#999] ${i % 2 && "bg-secondary-pale"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: workingTime.timeName }, void 0, !1, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        },
        i,
        !1,
        {
          fileName: "app/components/table/ShiftsConfirmTable.tsx",
          lineNumber: 106,
          columnNumber: 15
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex overflow-x-scroll w-full", ref: targetRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex", children: shifts && [...Array(new Date(year, month, 0).getDate())].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col text-center trans30", style: { width: `${tdWidth}px` }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "p-1 border bg-primary", children: i + 1 }, i, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 119,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "bg-[#b4d2cb] p-1 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(WeekDay, { day: i + 1 }, void 0, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 123,
        columnNumber: 23
      }, this) }, i, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 122,
        columnNumber: 21
      }, this),
      employees == null ? void 0 : employees.map((_2, ii) => {
        var _a, _b;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "p",
          {
            className: `text-black flex items-center justify-center h-10 border ${ii % 2 && "bg-primary-pale"} ${employees.length - 1 === ii && "border-b-[#999]"}`,
            style: {
              backgroundColor: (_a = workingTimes == null ? void 0 : workingTimes.find((workingTime) => workingTime.id === shifts[ii].workIds[i])) == null ? void 0 : _a.color,
              width: tdWidth
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "truncate", children: (_b = addDayoffWorkingTimes == null ? void 0 : addDayoffWorkingTimes.find((workingTime) => workingTime.id === shifts[ii].workIds[i])) == null ? void 0 : _b.timeName }, void 0, !1, {
              fileName: "app/components/table/ShiftsConfirmTable.tsx",
              lineNumber: 136,
              columnNumber: 25
            }, this)
          },
          i,
          !1,
          {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 126,
            columnNumber: 23
          },
          this
        );
      }),
      workingTimes == null ? void 0 : workingTimes.map((workingTime, ii) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: `text-black flex items-center justify-center h-10 border ${ii % 2 && "bg-secondary-pale"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DayCountEmployee, { workingTime, day: i }, void 0, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 143,
        columnNumber: 25
      }, this) }, i, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 142,
        columnNumber: 23
      }, this))
    ] }, i, !0, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 118,
      columnNumber: 19
    }, this)) }, void 0, !1, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex", children: [
        options.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "div",
          {
            className: `${i === 0 && "border-l-[#999] "} justify-center border items-center flex h-[60px] bg-primary text-vertical trans30 px-1 leading-3	`,
            style: isDelayOpen ? { width: "35px" } : { width: "0px", border: 0, padding: 0 },
            children: isDelayOpen && workingTime.label
          },
          i,
          !1,
          {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 154,
            columnNumber: 17
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "justify-center border items-center flex  w-[35px] h-[60px] bg-primary text-vertical", children: "\u5408\u8A08" }, void 0, !1, {
          fileName: "app/components/table/ShiftsConfirmTable.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex", children: [
        options.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: employees == null ? void 0 : employees.map((employee, ii) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "div",
          {
            className: `text-black flex flex-col items-center justify-center h-10 border trans30 ${i % 2 && "bg-primary-pale"} ${i === 0 && "border-l-[#999]"}`,
            style: isDelayOpen ? { width: "35px" } : { width: "0px", border: 0 },
            children: isDelayOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(TotalCountWork, { workingTimeId: workingTime.value, employee }, void 0, !1, {
              fileName: "app/components/table/ShiftsConfirmTable.tsx",
              lineNumber: 177,
              columnNumber: 39
            }, this)
          },
          ii,
          !1,
          {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 170,
            columnNumber: 21
          },
          this
        )) }, i, !1, {
          fileName: "app/components/table/ShiftsConfirmTable.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "div",
          {
            className: "border text-black flex justify-center items-center flex-col border-b-[#999] w-[35px] hover:bg-[rgba(250,250,250)] cursor-pointer",
            style: employees ? { height: `${employees.length * 40}px` } : {},
            onClick: () => setDelayOpen(!isDelayOpen),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-vertical", style: (employees == null ? void 0 : employees.length) === 1 ? { display: "none" } : {}, children: isDelayOpen ? "\u9589\u3058\u308B" : "\u958B\u304F" }, void 0, !1, {
                fileName: "app/components/table/ShiftsConfirmTable.tsx",
                lineNumber: 187,
                columnNumber: 17
              }, this),
              " ",
              isDelayOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_bs3.BsChevronRight, { size: (employees == null ? void 0 : employees.length) === 1 ? 20 : 25, className: "mt-1" }, void 0, !1, {
                fileName: "app/components/table/ShiftsConfirmTable.tsx",
                lineNumber: 191,
                columnNumber: 19
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_bs3.BsChevronLeft, { size: (employees == null ? void 0 : employees.length) === 1 ? 20 : 25, className: "mt-1" }, void 0, !1, {
                fileName: "app/components/table/ShiftsConfirmTable.tsx",
                lineNumber: 193,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 182,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/table/ShiftsConfirmTable.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-xs text-[#888]", children: "\u753B\u9762\u5168\u4F53\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B\u5834\u5408\u306F\u53F3\u306E\u9752\u3044\u30D0\u30FC\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 201,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex smartTable", ref: targetRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "max-h-[84vh] overflow-auto hidden-scrollbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("table", { className: "text-white max-w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("th", { style: { maxWidth: tdWidth, minWidth: "50px" }, className: "z-50 text-black h-10 w-[50px] bg-primary p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "border h-full w-full border-[#999] flex justify-center items-center text-white", children: [
            month,
            " \u6708"
          ] }, void 0, !0, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 207,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 206,
            columnNumber: 19
          }, this),
          employees == null ? void 0 : employees.map((employee, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "th",
            {
              style: { width: tdWidth, minWidth: "70px" },
              className: `text-black h-10 p-0 ${i % 2 ? "bg-primary-pale" : "bg-white"}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "div",
                {
                  className: `border h-full w-full border-b-[#999] border-t-[#999] flex justify-center items-center ${employees.length - 1 === i && "border-r-[#999]"}`,
                  children: employee.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 215,
                  columnNumber: 23
                },
                this
              )
            },
            i,
            !1,
            {
              fileName: "app/components/table/ShiftsConfirmTable.tsx",
              lineNumber: 210,
              columnNumber: 21
            },
            this
          )),
          workingTimes == null ? void 0 : workingTimes.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
            "th",
            {
              style: { width: tdWidth, minWidth: "50px" },
              className: `text-black h-10 p-0 z-40 ${i % 2 ? "bg-secondary-pale" : "bg-white"}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "div",
                {
                  className: `border h-full w-full border-b-[#999] border-t-[#999] flex justify-center items-center ${workingTimes.length - 1 === i && "border-r-[#999]"}`,
                  children: workingTime.timeName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 230,
                  columnNumber: 23
                },
                this
              )
            },
            i,
            !1,
            {
              fileName: "app/components/table/ShiftsConfirmTable.tsx",
              lineNumber: 225,
              columnNumber: 21
            },
            this
          ))
        ] }, void 0, !0, {
          fileName: "app/components/table/ShiftsConfirmTable.tsx",
          lineNumber: 205,
          columnNumber: 17
        }, this),
        shifts && [...Array(new Date(year, month, 0).getDate())].map((_, i) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("th", { className: "h-[40px] p-0 z-40 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex h-[40px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "p",
                {
                  className: `flex justify-center items-center border bg-primary min-w-[25px] border-l-[#999] ${((_a = shifts[0].workIds) == null ? void 0 : _a.length) - 1 === i && "border-b-[#999]"}`,
                  children: i + 1
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 245,
                  columnNumber: 27
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "p",
                {
                  className: `flex justify-center items-center bg-[#b4d2cb] border min-w-[25px] border-r-[#999] ${[...Array(new Date(year, month, 0).getDate())].length - 1 === i && "border-b-[#999]"}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(WeekDay, { day: i + 1 }, void 0, !1, {
                    fileName: "app/components/table/ShiftsConfirmTable.tsx",
                    lineNumber: 257,
                    columnNumber: 29
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 252,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/table/ShiftsConfirmTable.tsx",
              lineNumber: 244,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/table/ShiftsConfirmTable.tsx",
              lineNumber: 243,
              columnNumber: 23
            }, this),
            employees == null ? void 0 : employees.map((_2, ii) => {
              var _a2, _b, _c;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "td",
                {
                  className: `text-black border h-10 p-0 text-center z-30 ${ii % 2 ? "bg-primary-pale" : "bg-white"}  ${employees.length - 1 === ii && "border-r-[#999]"} ${((_a2 = shifts[0].workIds) == null ? void 0 : _a2.length) - 1 === i && "border-b-[#999]"}`,
                  style: {
                    backgroundColor: (_b = workingTimes == null ? void 0 : workingTimes.find((workingTime) => workingTime.id === shifts[ii].workIds[i])) == null ? void 0 : _b.color
                  },
                  children: (_c = addDayoffWorkingTimes == null ? void 0 : addDayoffWorkingTimes.find((workingTime) => workingTime.id === shifts[ii].workIds[i])) == null ? void 0 : _c.timeName
                },
                ii,
                !1,
                {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 262,
                  columnNumber: 25
                },
                this
              );
            }),
            workingTimes == null ? void 0 : workingTimes.map((workingTime, ii) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
                "td",
                {
                  className: `text-black h-10 border text-center z-30 ${workingTimes.length - 1 === ii && "border-r-[#999]"} ${ii % 2 && "bg-secondary-pale"} ${((_a2 = shifts[0].workIds) == null ? void 0 : _a2.length) - 1 === i && "border-b-[#999]"}`,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(DayCountEmployee, { workingTime, day: i }, void 0, !1, {
                    fileName: "app/components/table/ShiftsConfirmTable.tsx",
                    lineNumber: 281,
                    columnNumber: 27
                  }, this)
                },
                i,
                !1,
                {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 275,
                  columnNumber: 25
                },
                this
              );
            })
          ] }, i, !0, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 242,
            columnNumber: 21
          }, this);
        }),
        options.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("th", { className: "h-[40px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "justify-center border items-center flex w-full bg-primary border-r-[#999] h-[40px]", children: workingTime.label }, void 0, !1, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 289,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/table/ShiftsConfirmTable.tsx",
            lineNumber: 288,
            columnNumber: 21
          }, this),
          employees == null ? void 0 : employees.map((employee, ii) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
              "td",
              {
                className: `text-black border h-10 p-0 text-center ${ii % 2 ? "bg-primary-pale" : "bg-white"}  ${employees.length - 1 === ii && "border-r-[#999]"} ${shifts && ((_a = shifts[0].workIds) == null ? void 0 : _a.length) - 1 === i && "border-b-[#999]"}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(TotalCountWork, { workingTimeId: workingTime.value, employee }, void 0, !1, {
                  fileName: "app/components/table/ShiftsConfirmTable.tsx",
                  lineNumber: 300,
                  columnNumber: 26
                }, this)
              },
              ii,
              !1,
              {
                fileName: "app/components/table/ShiftsConfirmTable.tsx",
                lineNumber: 294,
                columnNumber: 23
              },
              this
            );
          })
        ] }, i, !0, {
          fileName: "app/components/table/ShiftsConfirmTable.tsx",
          lineNumber: 287,
          columnNumber: 19
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 204,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 203,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "ml-1 w-6 max-h-[84vh] bg-blue-400 rounded-md" }, void 0, !1, {
        fileName: "app/components/table/ShiftsConfirmTable.tsx",
        lineNumber: 307,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table/ShiftsConfirmTable.tsx",
      lineNumber: 202,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/table/ShiftsConfirmTable.tsx",
    lineNumber: 200,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/table/ShiftsConfirmTable.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
};

// app/graphql/query.ts
var import_client5 = require("@apollo/client"), shiftsQuery = import_client5.gql`
  query shifts {
    shiftDate(order_by: { year: desc, month: desc }) {
      id
      month
      year
      shifts(order_by: { createdAt: asc }) {
        id
        shiftDateId
        shiftName
        isCompleted
        createdAt
        updatedAt
        shiftEmployees {
          id
          name
          canWorkingIds
          workIds
        }
        shiftWorkingTimes {
          id
          timeName
          color
          startHour
          startMinute
          endHour
          endMinute
          isNextDayoff
          maxEmployee
          minEmployee
        }
      }
    }
  }
`;
var shiftDateQuery = (year, month, userId) => import_client5.gql`
  query shifts {
    shiftDate(where: { userId: { _eq: ${userId} },year: { _eq: ${year} } ,month: { _eq: ${month} }  }) {
      id
    }
  }
`, shiftDetailQuery = (shiftId) => import_client5.gql`
    query shiftDetail {
      shift(where: {id: {_eq: ${shiftId}}}){
        id
        shiftDateId
        shiftName
        isCompleted
        createdAt
        updatedAt
        shiftEmployees {
          id
          name
          canWorkingIds
          workIds
        }
        shiftWorkingTimes {
          id
          timeName
          color
          startHour
          startMinute
          endHour
          endMinute
          isNextDayoff
          maxEmployee
          minEmployee
        }
      }      
    }
  `, employeesAndWorkingTimesQuery = import_client5.gql`
  query employeesAndWorkingTimes {
    employee {
      id
      userId
      name
      canWorkingIds
    }
    workingTime {
      color
      isNextDayoff
      id
      maxEmployee
      minEmployee
      startHour
      startMinute
      endHour
      endMinute
      timeName
    }
  }
`;

// app/routes/$date.$shiftId/show.tsx
var import_exceljs = __toESM(require("exceljs")), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Index2() {
  var _a, _b, _c;
  let navigate = (0, import_react26.useNavigate)(), { date, shiftId } = (0, import_react26.useParams)(), navState = (0, import_react26.useLocation)().state, [tableSize, setTableSize] = (0, import_react27.useState)(new Date(Number(date == null ? void 0 : date.split(".")[0]), Number(date == null ? void 0 : date.split(".")[1]), 0).getDate()), [isOpen, setOpen] = (0, import_react27.useState)(!1), { data } = useQuery(shiftDetailQuery(Number(shiftId))), { setRecoilShiftDate, setRecoilEmployeeWorkingTime } = useShiftCreateRecoil(), { setRecoilEditUpdateId } = useShiftEditRecoil(), year = Number(date == null ? void 0 : date.split(".")[0]), month = Number(date == null ? void 0 : date.split(".")[1]), shifts = (data == null ? void 0 : data.shift) && ((_a = data.shift[0].shiftEmployees) == null ? void 0 : _a.map((employee) => ({ employee: employee.id, workIds: [...employee.workIds.map((v) => Number(v))] }))), mutation = useMutation({
    mutation: ((_c = (_b = navState == null ? void 0 : navState.shifts) == null ? void 0 : _b.shifts) == null ? void 0 : _c.length) > 1 ? deleteShift : deleteShiftDate,
    successMessage: "\u30B7\u30D5\u30C8\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002",
    callback: () => navigate("/shift")
  }), onDeleteShift = () => {
    var _a2, _b2, _c2;
    setOpen(!1), mutation({ variables: ((_b2 = (_a2 = navState == null ? void 0 : navState.shifts) == null ? void 0 : _a2.shifts) == null ? void 0 : _b2.length) > 1 ? { shiftId } : { shiftDateId: (_c2 = navState == null ? void 0 : navState.shifts) == null ? void 0 : _c2.id } });
  }, exportExcel = async () => {
    let workbook = new import_exceljs.default.Workbook();
    workbook.addWorksheet("\u30B7\u30D5\u30C8\u8868");
    let sheet = workbook.getWorksheet("\u30B7\u30D5\u30C8\u8868");
    sheet.properties.defaultRowHeight = 18;
    let workingTimes = data == null ? void 0 : data.shift[0].shiftWorkingTimes, employees = data == null ? void 0 : data.shift[0].shiftEmployees, options = workingTimes ? [
      ...workingTimes.map((v) => ({ value: v.id, label: v.timeName })),
      { value: 91, label: "\u660E\u4F11" },
      { value: 92, label: "\u4F11" },
      { value: 93, label: "\u5E0C\u671B\u4F11" },
      { value: 94, label: "\u6709\u7D66" }
    ] : [], WeekDay = ({ day }) => ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"][new Date(year, month - 1, day).getDay()];
    sheet.columns = [
      { header: `${year}\u5E74${month}\u6708`, key: "\u5F93\u696D\u54E1\u540D", width: 16 },
      ...[...Array(new Date(year, month, 0).getDate())].map((_, i) => ({ header: `${i + 1}\u65E5(${WeekDay({ day: i + 1 })})`, key: `${i + 1}\u65E5(${WeekDay({ day: i + 1 })})`, width: 8 })),
      ...options.map((workingTime) => ({ header: workingTime.label, key: workingTime.label, width: 8 }))
    ], sheet.addRows([
      ...shifts.map((shift) => {
        var _a2;
        return {
          \u5F93\u696D\u54E1\u540D: (_a2 = employees == null ? void 0 : employees.find((employee) => shift.employee === employee.id)) == null ? void 0 : _a2.name,
          ...Object.assign(
            {},
            ...[...Array(new Date(year, month, 0).getDate())].map((_, i) => {
              var _a3;
              return {
                [`${i + 1}\u65E5(${WeekDay({ day: i + 1 })})`]: (_a3 = options.find((shiftWorkingTime) => shiftWorkingTime.value === shift.workIds[i])) == null ? void 0 : _a3.label
              };
            })
          ),
          ...Object.assign(
            {},
            ...options.map((workingTime) => ({
              [workingTime.label]: shift.workIds.filter((workId) => workingTime.value === workId).length
            }))
          )
        };
      }),
      ...workingTimes.map((workingTime) => ({
        \u5F93\u696D\u54E1\u540D: workingTime.timeName,
        ...Object.assign(
          {},
          ...[...Array(new Date(year, month, 0).getDate())].map((_, i) => {
            let workNum = 0;
            return shifts == null || shifts.forEach((shift) => shift.workIds.forEach((workId, ii) => i === ii && workId === workingTime.id && workNum++)), {
              [`${i + 1}\u65E5(${WeekDay({ day: i + 1 })})`]: workNum
            };
          })
        )
      }))
    ]);
    let borders = {
      base: { top: { style: "thin" }, left: { style: "thin" }, bottom: { style: "thin" }, right: { style: "thin" } },
      top: { top: { style: "thick" }, left: { style: "thin" }, bottom: { style: "thin" }, right: { style: "thin" } },
      bottom: { top: { style: "thin" }, left: { style: "thin" }, bottom: { style: "thick" }, right: { style: "thin" } },
      leftRight: { top: { style: "thin" }, left: { style: "thick" }, bottom: { style: "thin" }, right: { style: "thick" } },
      bottomLeftRight: { top: { style: "thin" }, left: { style: "thick" }, bottom: { style: "thick" }, right: { style: "thick" } },
      topLeftRight: { top: { style: "thick" }, left: { style: "thick" }, bottom: { style: "thin" }, right: { style: "thick" } }
    }, employeeFillStyle = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "fff0f9f8" }
    }, workingTimeFillStyle = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "fffff8f9" }
    };
    sheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        rowNumber === 1 || rowNumber === 2 ? cell.border = colNumber === 1 ? borders.topLeftRight : borders.top : rowNumber - 1 === (employees == null ? void 0 : employees.length) ? cell.border = colNumber === 1 ? borders.bottomLeftRight : borders.bottom : cell.border = colNumber === 1 ? borders.leftRight : borders.base, cell.font = colNumber === 1 || rowNumber === 1 ? { bold: !0 } : {}, rowNumber % 2 === 0 && (colNumber > new Date(year, month, 0).getDate() + 1 || rowNumber > employees.length + 1) ? cell.fill = workingTimeFillStyle : rowNumber % 2 === 0 && (cell.fill = employeeFillStyle), cell.alignment = { vertical: "middle", horizontal: "center" };
      }), row.commit();
    });
    let uint8Array = await workbook.xlsx.writeBuffer(), blob = new Blob([uint8Array], { type: "application/octet-binary" }), url = window.URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url, a.download = `${year}${month}_${data == null ? void 0 : data.shift[0].shiftName}.xlsx`, a.click(), a.remove();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      Title,
      {
        currentText: navState == null ? void 0 : navState.shift.shiftName,
        previous: [
          { text: "\u4F5C\u6210\u30B7\u30D5\u30C8\u4E00\u89A7", rootPath: "/shift" },
          { text: `${year}\u5E74${month}\u6708`, rootPath: `/shift/${date}` }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$date.$shiftId/show.tsx",
        lineNumber: 167,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(PartSpinner, { isLoad: !(data != null && data.shift), children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: shifts ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "p-2 rounded-md shadow-md border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center w-full justify-between mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TableSizeButtons, { tableSize, setTableSize, date: { year, month } }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/show.tsx",
          lineNumber: 180,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/show.tsx",
          lineNumber: 179,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center", children: [
          navState != null && navState.shift.isCompleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              Button,
              {
                text: "\u7DE8\u96C6",
                onClick: () => navigate(`/${date}/${shiftId}/edit`, { state: { shift: data == null ? void 0 : data.shift[0] } }),
                width: "sm"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/$date.$shiftId/show.tsx",
                lineNumber: 185,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mr-2" }, void 0, !1, {
              fileName: "app/routes/$date.$shiftId/show.tsx",
              lineNumber: 190,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              Button,
              {
                width: "md",
                text: "\u8907\u88FD\u7DE8\u96C6",
                onClick: () => navigate(`/${date}/${shiftId}/edit`, { state: { shift: data == null ? void 0 : data.shift[0], isCopy: !0 } })
              },
              void 0,
              !1,
              {
                fileName: "app/routes/$date.$shiftId/show.tsx",
                lineNumber: 191,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mr-2" }, void 0, !1, {
              fileName: "app/routes/$date.$shiftId/show.tsx",
              lineNumber: 196,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { width: "md", text: "\u30A8\u30AF\u30BB\u30EB\u51FA\u529B", onClick: exportExcel }, void 0, !1, {
              fileName: "app/routes/$date.$shiftId/show.tsx",
              lineNumber: 197,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/$date.$shiftId/show.tsx",
            lineNumber: 184,
            columnNumber: 21
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            Button,
            {
              width: "sm",
              text: "\u4F5C\u6210\u518D\u958B",
              onClick: () => {
                setRecoilEmployeeWorkingTime({
                  employees: data == null ? void 0 : data.shift[0].shiftEmployees,
                  workingTimes: data == null ? void 0 : data.shift[0].shiftWorkingTimes
                }), setRecoilShiftDate({ year, month }), setRecoilEditUpdateId({ shiftId: data == null ? void 0 : data.shift[0].id, shiftDateId: data == null ? void 0 : data.shift[0].shiftDateId }), navigate("/create/automation", { state: { shifts, isTemporarily: !0 } });
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/$date.$shiftId/show.tsx",
              lineNumber: 200,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mr-2" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/show.tsx",
            lineNumber: 214,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { width: "sm", text: "\u524A\u9664", onClick: () => setOpen(!0), color: "secondary" }, void 0, !1, {
            fileName: "app/routes/$date.$shiftId/show.tsx",
            lineNumber: 215,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/$date.$shiftId/show.tsx",
          lineNumber: 182,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$date.$shiftId/show.tsx",
        lineNumber: 178,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        ShiftsConfirmTable,
        {
          tableSize,
          shifts,
          year,
          month,
          employees: data == null ? void 0 : data.shift[0].shiftEmployees,
          workingTimes: data == null ? void 0 : data.shift[0].shiftWorkingTimes
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$date.$shiftId/show.tsx",
          lineNumber: 218,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/$date.$shiftId/show.tsx",
      lineNumber: 177,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: "\u8868\u793A\u3067\u304D\u308B\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/show.tsx",
      lineNumber: 228,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/show.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/show.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Modal, { isOpen, setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-lg font-bold mb-4", children: "\u30B7\u30D5\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/routes/$date.$shiftId/show.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex justify-around w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { text: "\u30AD\u30E3\u30F3\u30BB\u30EB", color: "secondary", onClick: () => setOpen(!1), variant: "outlined" }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/show.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Button, { text: "\u524A\u9664", color: "secondary", onClick: onDeleteShift }, void 0, !1, {
          fileName: "app/routes/$date.$shiftId/show.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$date.$shiftId/show.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$date.$shiftId/show.tsx",
      lineNumber: 233,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$date.$shiftId/show.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$date.$shiftId/show.tsx",
    lineNumber: 166,
    columnNumber: 5
  }, this);
}

// app/routes/workingTime.tsx
var workingTime_exports = {};
__export(workingTime_exports, {
  default: () => Index3
});
var import_react_hot_toast4 = __toESM(require("react-hot-toast")), import_react28 = require("@remix-run/react"), import_react29 = require("react"), import_react_hook_form4 = require("react-hook-form");

// app/utils/colors.ts
var colors = [
  ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373"],
  ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292"],
  ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8"],
  ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD"],
  ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB"],
  ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6"],
  ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7"],
  ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1"],
  ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC"],
  ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784"],
  ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581"],
  ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775"],
  ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176"],
  ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F"],
  ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D"],
  ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F"]
], smartphoneColors = [
  [
    ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373"],
    ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292"],
    ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8"],
    ["#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD"],
    ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB"],
    ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6"],
    ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7"],
    ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1"]
  ],
  [
    ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC"],
    ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784"],
    ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581"],
    ["#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775"],
    ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176"],
    ["#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F"],
    ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D"],
    ["#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F"]
  ]
];

// app/components/table/employeeTable.tsx
var import_react_hook_form2 = require("react-hook-form"), import_fa2 = require("react-icons/fa");

// app/utils/labels.ts
var labels = {
  workTime: [
    { label: "No", w: "w-[3%] min-w-[30px]" },
    { label: "\u52E4\u52D9\u6642\u9593\u5E2F\u540D", w: "w-[15%] min-w-[100px]" },
    { label: "\u52E4\u52D9\u6642\u9593", w: "w-[33%] min-w-[180px]" },
    { label: "1\u65E5\u306E\u5FC5\u8981\u52E4\u52D9\u4EBA\u6570", w: "w-[29%] min-w-[180px]" },
    { label: "\u7FCC\u65E5\u4F11\u6687", w: "w-[8%] min-w-[66px]" },
    { label: "\u8272", w: "w-[7%] min-w-[60px]" },
    { label: "\u524A\u9664", w: "w-[5%] min-w-[40px]" }
  ],
  employee: [
    { label: "No", w: "w-[3%] min-w-[30px]" },
    { label: "\u5F93\u696D\u54E1\u6C0F\u540D", w: "w-[21%] min-w-[140px]" },
    { label: "\u52E4\u52D9\u53EF\u80FD\u6642\u9593\u5E2F", w: "w-[71%]" },
    { label: "\u524A\u9664", w: "w-[5%] min-w-[40px]" }
  ],
  workingTimeConfirm: [
    { label: "\u52E4\u52D9\u6642\u9593\u5E2F\u540D", w: "w-[15%] min-w-[120px]" },
    { label: "\u52E4\u52D9\u6642\u9593", w: "w-[38%] min-w-[180px]" },
    { label: "1\u65E5\u306E\u5FC5\u8981\u52E4\u52D9\u4EBA\u6570", w: "w-[32%] min-w-[180px]" },
    { label: "\u7FCC\u65E5\u4F11\u6687", w: "w-[8%] min-w-[66px]" },
    { label: "\u8272", w: "w-[7%] min-w-[60px]" }
  ],
  employeeConfirm: [
    { label: "\u5F93\u696D\u54E1\u6C0F\u540D", w: "w-[30%] min-w-[130px]" },
    { label: "\u52E4\u52D9\u53EF\u80FD\u6642\u9593\u5E2F", w: "w-[70%]" }
  ]
};

// app/components/table/employeeTable.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), EmployeeTable = ({
  setSelectedIndex,
  setOpenDeleteEmployeeModal,
  employees,
  register,
  errors,
  workingTimes,
  control,
  setDeleteCategory
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("table", { className: "flex items-center flex-col rounded-md shadow-md overflow-scroll hidden-scrollbar evenColor", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("thead", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tr", { className: "w-full flex", children: labels.employee.map((label, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "p",
    {
      className: `bg-primary p-1 text-white text-center border ${label.w}`,
      style: label.label === "\u52E4\u52D9\u53EF\u80FD\u6642\u9593\u5E2F" ? { minWidth: `${(workingTimes == null ? void 0 : workingTimes.length) * 100}px` } : {},
      children: label.label
    },
    i,
    !1,
    {
      fileName: "app/components/table/employeeTable.tsx",
      lineNumber: 44,
      columnNumber: 13
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/table/employeeTable.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/table/employeeTable.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tbody", { className: "w-full", children: employees == null ? void 0 : employees.map((employee, i) => {
    var _a, _b;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("tr", { className: "flex text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { className: "w-[3%] border p-1 min-w-[30px] flex items-center justify-center", children: i + 1 }, void 0, !1, {
        fileName: "app/components/table/employeeTable.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { className: "w-[21%] border p-1 min-w-[140px] flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Input, { register, schema: `employees[${i}].name`, required: !0, label: "\u5F93\u696D\u54E1\u540D", maxLength: 10 }, i, !1, {
          fileName: "app/components/table/employeeTable.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (errors == null ? void 0 : errors.employees) && ((_b = (_a = errors == null ? void 0 : errors.employees[i]) == null ? void 0 : _a.name) == null ? void 0 : _b.message) }, void 0, !1, {
          fileName: "app/components/table/employeeTable.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table/employeeTable.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "td",
        {
          className: "w-[71%] border p-1 flex items-center justify-around",
          style: { minWidth: `${workingTimes && workingTimes.length * 100}px` },
          children: workingTimes == null ? void 0 : workingTimes.map((workingTime) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            import_react_hook_form2.Controller,
            {
              control,
              name: `employees.${i}.canWorkingIds`,
              render: ({ field: { onChange, value } }) => {
                let checked = value.includes(workingTime.id);
                return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                    CheckBox,
                    {
                      value: `${employee.id}${workingTime.id}`,
                      onChange: () => onChange(checked ? [...value.filter((v) => v !== workingTime.id)] : [...value, workingTime.id]),
                      checked,
                      label: workingTime.timeName
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/table/employeeTable.tsx",
                      lineNumber: 76,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { style: workingTimes.length - 1 !== i ? { marginLeft: "5px" } : {} }, void 0, !1, {
                    fileName: "app/components/table/employeeTable.tsx",
                    lineNumber: 84,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/table/employeeTable.tsx",
                  lineNumber: 75,
                  columnNumber: 23
                }, this);
              }
            },
            `${employee.id}${workingTime.id}`,
            !1,
            {
              fileName: "app/components/table/employeeTable.tsx",
              lineNumber: 68,
              columnNumber: 17
            },
            this
          ))
        },
        i,
        !1,
        {
          fileName: "app/components/table/employeeTable.tsx",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("td", { className: "w-[5%] border p-1 flex items-center justify-around min-w-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_fa2.FaTrashAlt,
        {
          size: 20,
          className: "text-[#666] hover:text-[#aaa] cursor-pointer",
          onClick: () => {
            setSelectedIndex(i), setOpenDeleteEmployeeModal(!0), setDeleteCategory("employee");
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/table/employeeTable.tsx",
          lineNumber: 92,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/table/employeeTable.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, i, !0, {
      fileName: "app/components/table/employeeTable.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/components/table/employeeTable.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/table/employeeTable.tsx",
  lineNumber: 40,
  columnNumber: 5
}, this);

// app/components/table/workingTimeTable.tsx
var import_react_hook_form3 = require("react-hook-form"), import_fa3 = require("react-icons/fa"), import_io = require("react-icons/io");

// app/utils/Options.ts
var set3YearOptions = () => [...Array(3)].map((_, i) => ({
  value: (/* @__PURE__ */ new Date()).getFullYear() + 1 - i,
  label: `${(/* @__PURE__ */ new Date()).getFullYear() + 1 - i}\u5E74`
})), setMonthOptions = () => [...Array(12)].map((_, i) => ({
  value: i + 1,
  label: `${i + 1}\u6708`
})), setStartHoursOptions = () => [...Array(24)].map((_, i) => ({
  value: i,
  label: i
})), setFinishHoursOptions = () => [...Array(41)].map((_, i) => ({
  value: i,
  label: i
})), setMinutesOptions = () => [...Array(60)].map((_, i) => ({
  value: i,
  label: i < 10 ? `0${i}` : i
}));

// app/components/table/workingTimeTable.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), WorkingTimeTable = ({
  setOpenDeleteEmployeeModal,
  setOpen,
  setSelectedIndex,
  getValues,
  register,
  errors,
  workingTimes,
  control,
  setValue,
  setDeleteCategory,
  setError,
  clearErrors
}) => {
  let NumButton = ({ type, onClick, disabled }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "div",
    {
      className: `flex items-center justify-center bg-primary w-6 h-6 rounded-sm text-lg ${type === "minus" ? "ml-[-10px]" : "mr-[-10px]"} ${disabled ? "bg-[#aaa]" : "cursor-pointer hover:opacity-80"}`,
      onClick,
      children: type === "minus" ? "-" : "+"
    },
    void 0,
    !1,
    {
      fileName: "app/components/table/workingTimeTable.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("table", { className: "flex items-center w-full flex-col rounded-md shadow-md overflow-x-scroll hidden-scrollbar evenColor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("thead", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tr", { className: "w-full flex", children: labels.workTime.map((label, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: `bg-primary p-1 text-white text-center border ${label.w}`, children: label.label }, i, !1, {
      fileName: "app/components/table/workingTimeTable.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/table/workingTimeTable.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/table/workingTimeTable.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tbody", { className: "w-full", children: workingTimes == null ? void 0 : workingTimes.map((workingTime, i) => {
      var _a, _b, _c, _d;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("tr", { className: "w-full flex text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[3%] border p-1 min-w-[30px] flex items-center justify-center", children: i + 1 }, void 0, !1, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[15%] border p-1 flex flex-col items-center justify-center min-w-[100px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Input, { register, schema: `workingTimes.${i}.timeName`, required: !0, label: "\u52E4\u52D9\u6642\u9593\u5E2F\u540D", maxLength: 8 }, i, !1, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (errors == null ? void 0 : errors.workingTimes) && ((_b = (_a = errors.workingTimes[i]) == null ? void 0 : _a.timeName) == null ? void 0 : _b.message) }, void 0, !1, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[33%] border p-1 flex items-center justify-around min-w-[180px] flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-full flex items-center justify-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex w-[45%] items-center justify-around", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-[48%] max-w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                import_react_hook_form3.Controller,
                {
                  control,
                  name: `workingTimes.${i}.startHour`,
                  render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                    Select,
                    {
                      value: value.hasOwnProperty("value") ? value : { value, label: value },
                      onChange: (e) => {
                        e.value > getValues(`workingTimes.${i}.endHour`) || e.value === getValues(`workingTimes.${i}.endHour`) && getValues(`workingTimes.${i}.startMinute`) >= getValues(`workingTimes.${i}.endMinute`) ? setError(`workingTimes.${i}.startHour`, { message: "\u958B\u59CB\u6642\u9593 < \u7D42\u4E86\u6642\u9593 \u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044" }) : clearErrors(`workingTimes.${i}.startHour`), onChange(e.value);
                      },
                      options: setStartHoursOptions()
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/table/workingTimeTable.tsx",
                      lineNumber: 100,
                      columnNumber: 25
                    },
                    this
                  )
                },
                `workingTime${workingTime.id}StartHour`,
                !1,
                {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 95,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this),
              ":",
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-[48%] max-w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                import_react_hook_form3.Controller,
                {
                  control,
                  name: `workingTimes.${i}.startMinute`,
                  render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                    Select,
                    {
                      value: value.hasOwnProperty("value") ? value : { value, label: value < 10 ? `0${value}` : value },
                      onChange: (e) => {
                        getValues(`workingTimes.${i}.startHour`) > getValues(`workingTimes.${i}.endHour`) || getValues(`workingTimes.${i}.startHour`) === getValues(`workingTimes.${i}.endHour`) && e.value >= getValues(`workingTimes.${i}.endMinute`) ? setError(`workingTimes.${i}.startHour`, { message: "\u958B\u59CB\u6642\u9593 < \u7D42\u4E86\u6642\u9593 \u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044" }) : clearErrors(`workingTimes.${i}.startHour`), onChange(e.value);
                      },
                      options: setMinutesOptions()
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/table/workingTimeTable.tsx",
                      lineNumber: 126,
                      columnNumber: 25
                    },
                    this
                  )
                },
                `workingTime${workingTime.id}StartMinute`,
                !1,
                {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 121,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 120,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/table/workingTimeTable.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            "\u301C",
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex w-[45%] items-center justify-around", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-[48%] max-w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                import_react_hook_form3.Controller,
                {
                  control,
                  name: `workingTimes.${i}.endHour`,
                  render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                    Select,
                    {
                      value: value.hasOwnProperty("value") ? value : { value, label: value },
                      onChange: (e) => {
                        getValues(`workingTimes.${i}.startHour`) > e.value || getValues(`workingTimes.${i}.startHour`) === e.value && getValues(`workingTimes.${i}.startMinute`) >= getValues(`workingTimes.${i}.endMinute`) ? setError(`workingTimes.${i}.startHour`, { message: "\u958B\u59CB\u6642\u9593 < \u7D42\u4E86\u6642\u9593 \u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044" }) : clearErrors(`workingTimes.${i}.startHour`), onChange(e.value);
                      },
                      options: setFinishHoursOptions()
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/table/workingTimeTable.tsx",
                      lineNumber: 154,
                      columnNumber: 25
                    },
                    this
                  )
                },
                `workingTime${workingTime.id}FinishHour`,
                !1,
                {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 149,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 148,
                columnNumber: 19
              }, this),
              ":",
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-[48%] max-w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                import_react_hook_form3.Controller,
                {
                  control,
                  name: `workingTimes.${i}.endMinute`,
                  render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                    Select,
                    {
                      value: value.hasOwnProperty("value") ? value : { value, label: value < 10 ? `0${value}` : value },
                      onChange: (e) => {
                        getValues(`workingTimes.${i}.startHour`) > getValues(`workingTimes.${i}.endHour`) || getValues(`workingTimes.${i}.startHour`) === getValues(`workingTimes.${i}.endHour`) && getValues(`workingTimes.${i}.startMinute`) >= e.value ? setError(`workingTimes.${i}.startHour`, { message: "\u958B\u59CB\u6642\u9593 < \u7D42\u4E86\u6642\u9593 \u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044" }) : clearErrors(`workingTimes.${i}.startHour`), onChange(e.value);
                      },
                      options: setMinutesOptions()
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/table/workingTimeTable.tsx",
                      lineNumber: 180,
                      columnNumber: 25
                    },
                    this
                  )
                },
                `workingTime${workingTime.id}FinishMinute`,
                !1,
                {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 175,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 174,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/table/workingTimeTable.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (errors == null ? void 0 : errors.workingTimes) && ((_d = (_c = errors.workingTimes[i]) == null ? void 0 : _c.startHour) == null ? void 0 : _d.message) }, void 0, !1, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[29%] border p-1 flex items-center justify-around text-white min-w-[180px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center justify-between bg-gray-200 rounded-md w-[30%] h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_react_hook_form3.Controller,
            {
              control,
              name: `workingTimes.${i}.minEmployee`,
              render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(NumButton, { type: "minus", onClick: () => value > 0 && onChange(value - 1), disabled: value === 0 }, void 0, !1, {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 213,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-black", children: value }, void 0, !1, {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 214,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  NumButton,
                  {
                    type: "plus",
                    onClick: () => {
                      getValues(`workingTimes.${i}.maxEmployee`) === value && setValue(`workingTimes.${i}.maxEmployee`, value + 1), onChange(value + 1);
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/table/workingTimeTable.tsx",
                    lineNumber: 215,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this)
            },
            `workingTime${workingTime.id}MinEmployee`,
            !1,
            {
              fileName: "app/components/table/workingTimeTable.tsx",
              lineNumber: 207,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-black", children: "\u301C" }, void 0, !1, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex items-center justify-between bg-gray-200 rounded-md w-[30%] h-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_react_hook_form3.Controller,
            {
              control,
              name: `workingTimes.${i}.maxEmployee`,
              render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                  NumButton,
                  {
                    type: "minus",
                    disabled: value <= 1,
                    onClick: () => {
                      value <= 1 || (getValues(`workingTimes.${i}.minEmployee`) === value && setValue(`workingTimes.${i}.minEmployee`, value - 1), onChange(value - 1));
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/table/workingTimeTable.tsx",
                    lineNumber: 236,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-black", children: value }, void 0, !1, {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 247,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(NumButton, { type: "plus", onClick: () => onChange(value + 1) }, void 0, !1, {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 248,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 235,
                columnNumber: 21
              }, this)
            },
            `workingTime${workingTime.id}MaxEmployee`,
            !1,
            {
              fileName: "app/components/table/workingTimeTable.tsx",
              lineNumber: 230,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[8%] border p-1 flex items-center justify-around min-w-[66px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          import_react_hook_form3.Controller,
          {
            control,
            name: `workingTimes.${i}.isNextDayoff`,
            render: ({ field: { onChange, value, name } }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CheckBox, { value: name, onChange, checked: value }, void 0, !1, {
              fileName: "app/components/table/workingTimeTable.tsx",
              lineNumber: 261,
              columnNumber: 67
            }, this)
          },
          `workingTime${workingTime.id}Next`,
          !1,
          {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 257,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[7%] border p-1 flex items-center justify-around min-w-[60px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "div",
          {
            className: "flex items-center justify-around p-1 hover:text-[#888] cursor-pointer",
            onClick: () => {
              setSelectedIndex(i), setOpen(!0);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                "div",
                {
                  className: "w-6 h-6 border-gray-200 rounded-sm border-2 mr-2",
                  style: { backgroundColor: getValues(`workingTimes.${i}.color`) }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table/workingTimeTable.tsx",
                  lineNumber: 274,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_io.IoIosArrowDown, { className: "", size: 20 }, void 0, !1, {
                fileName: "app/components/table/workingTimeTable.tsx",
                lineNumber: 278,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 267,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("td", { className: "w-[5%] border p-1 flex items-center justify-around min-w-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          import_fa3.FaTrashAlt,
          {
            size: 20,
            className: "text-[#666] hover:text-[#aaa] cursor-pointer",
            onClick: () => {
              setSelectedIndex(i), setOpenDeleteEmployeeModal(!0), setDeleteCategory("workingTime");
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/table/workingTimeTable.tsx",
            lineNumber: 284,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/table/workingTimeTable.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this)
      ] }, i, !0, {
        fileName: "app/components/table/workingTimeTable.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/table/workingTimeTable.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/table/workingTimeTable.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
};

// app/routes/workingTime.tsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Index3() {
  let navigate = (0, import_react28.useNavigate)(), navState = (0, import_react28.useLocation)().state, { recoilUser } = useUserRecoil(), [isOpen, setOpen] = (0, import_react29.useState)(!1), [isOpenDeleteEmployeeModal, setOpenDeleteEmployeeModal] = (0, import_react29.useState)(!1), [isOpenMutationConfirmModal, setOpenMutationConfirmModal] = (0, import_react29.useState)(!1), [deleteCategory, setDeleteCategory] = (0, import_react29.useState)("employee"), [selectedIndex, setSelectedIndex] = (0, import_react29.useState)(0), { windowDimensions } = useGetElementProperty(), { data: queryData } = useQuery(employeesAndWorkingTimesQuery), { recoilEmployeeWorkingTime, setRecoilEmployeeWorkingTime } = useShiftCreateRecoil(), formatQueryData = { workingTimes: queryData == null ? void 0 : queryData.workingTime, employees: queryData == null ? void 0 : queryData.employee }, data = navState != null && navState.inCreate ? recoilEmployeeWorkingTime ?? formatQueryData : formatQueryData, workingTimesData = data == null ? void 0 : data.workingTimes, employeesData = data == null ? void 0 : data.employees, mutation = useMutation({ mutation: mutationWorkingTimesAndEmployees, successMessage: "\u5165\u529B\u60C5\u5831\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F", isBackNav: !0 }), {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    watch,
    setError,
    clearErrors
  } = (0, import_react_hook_form4.useForm)({
    defaultValues: { workingTimes: workingTimesData, employees: employeesData }
  }), workingTimes = watch("workingTimes"), employees = watch("employees");
  (0, import_react29.useEffect)(() => {
    !workingTimes && setValue("workingTimes", workingTimesData), !employees && setValue("employees", employeesData);
  }, [queryData]);
  let setRecoil = () => {
    let deleteWorkingTimeIds = [...workingTimesData.filter((v) => !workingTimes.map((v2) => v2.id).includes(v.id)).map((v) => v.id)], deleteEmployeeIds = [...employeesData.filter((v) => !employees.map((v2) => v2.id).includes(v.id)).map((v) => v.id)];
    setRecoilEmployeeWorkingTime({
      workingTimes: [
        ...workingTimes.map((v) => (delete v.__typename, {
          ...v,
          userId: recoilUser == null ? void 0 : recoilUser.uid
        }))
      ],
      employees: [
        ...employees.map((v) => (delete v.__typename, {
          ...v,
          userId: recoilUser == null ? void 0 : recoilUser.uid
        }))
      ],
      deleteWorkingTimeIds: recoilEmployeeWorkingTime != null && recoilEmployeeWorkingTime.deleteWorkingTimeIds ? deleteWorkingTimeIds.concat(recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.deleteWorkingTimeIds) : deleteWorkingTimeIds,
      deleteEmployeeIds: recoilEmployeeWorkingTime != null && recoilEmployeeWorkingTime.deleteEmployeeIds ? deleteEmployeeIds.concat(recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.deleteEmployeeIds) : deleteEmployeeIds
    });
  }, submitWorkingTimes = () => {
    setOpenMutationConfirmModal(!1);
    let deleteWorkingTimeIds = [...workingTimesData.filter((v) => !workingTimes.map((v2) => v2.id).includes(v.id)).map((v) => v.id)], deleteEmployeeIds = [...employeesData.filter((v) => !employees.map((v2) => v2.id).includes(v.id)).map((v) => v.id)];
    navState != null && navState.inCreate && setRecoil(), mutation({
      variables: {
        workingTimes: [
          ...workingTimes.map((v) => (delete v.__typename, {
            ...v,
            userId: recoilUser == null ? void 0 : recoilUser.uid
          }))
        ],
        employees: [
          ...employees.map((employee) => ({
            userId: recoilUser == null ? void 0 : recoilUser.uid,
            id: employee.id,
            name: employee.name,
            canWorkingIds: ((array) => `{${array.join(",")}}`)(employee.canWorkingIds)
          }))
        ],
        deleteWorkingTimeIds: recoilEmployeeWorkingTime != null && recoilEmployeeWorkingTime.deleteWorkingTimeIds ? deleteEmployeeIds.concat(recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.deleteWorkingTimeIds) : deleteWorkingTimeIds,
        deleteEmployeeIds: recoilEmployeeWorkingTime != null && recoilEmployeeWorkingTime.deleteEmployeeIds ? deleteEmployeeIds.concat(recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.deleteEmployeeIds) : deleteEmployeeIds
      }
    });
  }, addWorkingTime = () => {
    var _a, _b;
    setValue("workingTimes", [
      ...getValues("workingTimes"),
      {
        id: workingTimes.length > 0 ? Number((_a = workingTimes[workingTimes.length - 1]) == null ? void 0 : _a.id) + 1 : 1,
        timeName: `\u52E4\u52D9\u6642\u9593${workingTimes.length > 0 ? Number((_b = workingTimes[workingTimes.length - 1]) == null ? void 0 : _b.id) + 1 : 1}`,
        color: "",
        startHour: 9,
        startMinute: 0,
        endHour: 18,
        endMinute: 0,
        isNextDayoff: !1,
        maxEmployee: 1,
        minEmployee: 1
      }
    ]);
  }, deleteWorkingTime = () => {
    setValue("employees", [
      ...employees.map((employee) => ({
        ...employee,
        canWorkingIds: [...employee.canWorkingIds.filter((workId) => workId !== workingTimes[selectedIndex].id)]
      }))
    ]), setValue("workingTimes", [...workingTimes.filter((_, i) => selectedIndex !== i)]), setOpenDeleteEmployeeModal(!1);
  }, addEmployee = () => {
    var _a;
    setValue("employees", [
      ...getValues("employees"),
      {
        id: employees.length > 0 ? Number((_a = employees[employees.length - 1]) == null ? void 0 : _a.id) + 1 : 1,
        name: "",
        canWorkingIds: [],
        isNewEmployee: !0
      }
    ]);
  }, deleteEmployee = () => {
    setValue("employees", [...employees.filter((_, i) => selectedIndex !== i)]), setOpenDeleteEmployeeModal(!1);
  };
  return (0, import_react29.useEffect)(() => {
    (employees == null ? void 0 : employees.length) === 0 && addEmployee(), (workingTimes == null ? void 0 : workingTimes.length) === 0 && addWorkingTime();
  }, [employees, workingTimes]), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Spinner, { isLoad: !queryData }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "mb-1 font-semibold text-lg", children: "\u52E4\u52D9\u6642\u9593\u5E2F" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "my-2", children: "\u4E0B\u8A18\u306E\u8868\u306B\u5FC5\u8981\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      WorkingTimeTable,
      {
        setOpenDeleteEmployeeModal,
        setSelectedIndex,
        setOpen,
        employees,
        register,
        errors,
        workingTimes,
        control,
        setValue,
        getValues,
        setDeleteCategory,
        setError,
        clearErrors
      },
      void 0,
      !1,
      {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 218,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-2" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      Button,
      {
        text: "+ \u8FFD\u52A0",
        onClick: addWorkingTime,
        color: "secondary-light",
        disabled: workingTimes && (workingTimes == null ? void 0 : workingTimes.length) > 50,
        width: "sm"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 234,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "mb-1 font-semibold text-lg mt-10", children: "\u5F93\u696D\u54E1" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 241,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "my-2", children: "\u4E0B\u8A18\u306E\u8868\u306B\u5FC5\u8981\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 242,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      EmployeeTable,
      {
        setOpenDeleteEmployeeModal,
        setSelectedIndex,
        employees,
        register,
        errors,
        workingTimes,
        control,
        setDeleteCategory
      },
      void 0,
      !1,
      {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 243,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-2" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Button, { text: "+ \u8FFD\u52A0", onClick: addEmployee, color: "secondary-light", disabled: (employees == null ? void 0 : employees.length) > 50, width: "sm" }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 254,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "w-full flex justify-between mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Button, { text: "\u623B\u308B", variant: "outlined", onClick: () => navigate(-1) }, void 0, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 256,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Button,
        {
          text: "\u5B8C\u4E86",
          onClick: handleSubmit(navState != null && navState.inCreate ? () => setOpenMutationConfirmModal(!0) : submitWorkingTimes),
          disabled: Object.keys(errors).length > 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 257,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 255,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Modal, { isOpen, setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "text-black flex items-baseline mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-lg font-bold mr-1", children: getValues(`workingTimes.${selectedIndex}.timeName`) ?? "\u9078\u629E\u3057\u305F\u52E4\u52D9\u6642\u9593" }, void 0, !1, {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        "\u306E\u8272\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      ] }, void 0, !0, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        CheckBox,
        {
          onChange: () => {
            setValue(`workingTimes.${selectedIndex}.color`, ""), setOpen(!1);
          },
          checked: watch(`workingTimes.${selectedIndex}.color`) === "",
          label: "\u80CC\u666F\u8272\u306A\u3057",
          className: "mb-2"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 269,
          columnNumber: 11
        },
        this
      ),
      (windowDimensions == null ? void 0 : windowDimensions.width) >= 640 ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex", children: colors.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: v.map((vv) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          className: "w-10 h-10 border-[#444]",
          style: { backgroundColor: vv, borderWidth: getValues(`workingTimes.${selectedIndex}.color`) === vv ? "2px" : 0 },
          onClick: () => {
            setValue(`workingTimes.${selectedIndex}.color`, vv), setOpen(!1);
          }
        },
        vv,
        !1,
        {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 283,
          columnNumber: 21
        },
        this
      )) }, i, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 281,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 279,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "", children: smartphoneColors.map((colors2, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex", children: colors2.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: v.map((vv) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          className: "w-10 h-10 border-[#444]",
          style: { backgroundColor: vv, borderWidth: getValues(`workingTimes.${selectedIndex}.color`) === vv ? "2px" : 0 },
          onClick: () => {
            setValue(`workingTimes.${selectedIndex}.color`, vv), setOpen(!1);
          }
        },
        vv,
        !1,
        {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 303,
          columnNumber: 25
        },
        this
      )) }, i, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 301,
        columnNumber: 21
      }, this)) }, key, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 299,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 297,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "my-2", children: "\u8272\u3092\u8A2D\u5B9A\u3059\u308B\u3068\u30B7\u30D5\u30C8\u4F5C\u6210\u3067\u8A72\u5F53\u306E\u52E4\u52D9\u6642\u9593\u3092\u9078\u629E\u3057\u305F\u969B\u306B\u80CC\u666F\u8272\u3068\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002" }, void 0, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 319,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 264,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Modal, { isOpen: isOpenDeleteEmployeeModal, setOpen: setOpenDeleteEmployeeModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "text-black flex items-baseline mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "text-lg font-bold mr-1", children: deleteCategory === "employee" ? getValues(`employees.${selectedIndex}.name`) === "" ? "\u9078\u629E\u3057\u305F\u5F93\u696D\u54E1" : getValues(`employees.${selectedIndex}.name`) : deleteCategory === "workingTime" && (getValues(`workingTimes.${selectedIndex}.timeName`) === "" ? "\u9078\u629E\u3057\u305F\u52E4\u52D9\u6642\u9593" : getValues(`workingTimes.${selectedIndex}.timeName`)) }, void 0, !1, {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 325,
          columnNumber: 13
        }, this),
        "\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"
      ] }, void 0, !0, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Button, { text: "\u524A\u9664", color: "secondary", onClick: deleteCategory === "employee" ? deleteEmployee : deleteWorkingTime }, void 0, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 337,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 323,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Modal, { isOpen: isOpenMutationConfirmModal, setOpen: setOpenMutationConfirmModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "text-lg font-bold mb-4", children: "\u4ECA\u56DE\u5165\u529B\u3057\u305F\u5185\u5BB9\u3092\u6B21\u56DE\u4EE5\u964D\u4F5C\u6210\u30B7\u30D5\u30C8\u3067\u3082\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 342,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex w-full justify-around", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          Button,
          {
            text: "\u4ECA\u56DE\u3060\u3051\u4F7F\u7528",
            color: "secondary",
            onClick: () => {
              import_react_hot_toast4.default.success("\u5165\u529B\u3092\u53CD\u6620\u3057\u307E\u3057\u305F\u3002"), navigate(-1), setRecoil();
            },
            variant: "outlined",
            customWidth: "140px"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/workingTime.tsx",
            lineNumber: 344,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Button, { text: "\u6B21\u56DE\u4EE5\u964D\u3067\u3082\u4F7F\u7528", color: "secondary", onClick: submitWorkingTimes, customWidth: "140px" }, void 0, !1, {
          fileName: "app/routes/workingTime.tsx",
          lineNumber: 355,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/workingTime.tsx",
        lineNumber: 343,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 341,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/workingTime.tsx",
      lineNumber: 340,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/workingTime.tsx",
    lineNumber: 214,
    columnNumber: 5
  }, this);
}

// app/routes/__account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => Index4
});
var import_react30 = require("@remix-run/react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Index4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "bg-white w-[800px] self-center flex flex-col p-4 rounded-md items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mb-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("img", { src: "https://ks-icons.s3.ap-northeast-1.amazonaws.com/Logo.png", alt: "Shift maker", className: "w-[50%] mr-[8%]" }, void 0, !1, {
      fileName: "app/routes/__account.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__account.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react30.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__account.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__account.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/__account/register.tsx
var register_exports = {};
__export(register_exports, {
  default: () => Index5
});
var import_react_hot_toast5 = __toESM(require("react-hot-toast")), import_react31 = require("@remix-run/react");
var import_react_hook_form5 = require("react-hook-form"), import_react32 = require("react"), import_bs4 = require("react-icons/bs");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Index5() {
  var _a, _b, _c, _d;
  let [auth, setAuth] = (0, import_react32.useState)(null);
  (0, import_react32.useEffect)(() => {
    typeof window > "u" || (async () => {
      let { getAuth } = await import("firebase/auth");
      setAuth(getAuth());
    })();
  }, []);
  let navigate = (0, import_react31.useNavigate)(), [isHiddenPassword, setHiddenPassword] = (0, import_react32.useState)(!0), [isHiddenConfirm, setHiddenConfirm] = (0, import_react32.useState)(!0), [errorMessage, setErrorMessage] = (0, import_react32.useState)(""), [loading, setLoading] = (0, import_react32.useState)(!1), {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = (0, import_react_hook_form5.useForm)(), submitRegister = async ({ email, password, name }) => {
    setLoading(!0);
    let { createUserWithEmailAndPassword, updateProfile } = await import("firebase/auth");
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateProfile(res.user, { displayName: name }), import_react_hot_toast5.default.success("\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u767B\u9332\u3057\u307E\u3057\u305F\u3002"), navigate("/shift");
    }).catch((error) => {
      setErrorMessage(
        error.code === "auth/email-already-in-use" ? "\u5165\u529B\u3057\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306F\u65E2\u306B\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u3059\u3002" : "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002"
      ), setLoading(!1);
    });
  };
  return auth ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex flex-col items-start w-full max-w-[600px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Title, { currentText: "\u65B0\u898F\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#ef5a5a] text-sm mb-2", children: errorMessage }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 62,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#555] mb-2 sm:hidden", children: "\u767B\u9332\u3059\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30E6\u30FC\u30B6\u30FC\u540D\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#555] hidden sm:block", children: "\u767B\u9332\u3059\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30E6\u30FC\u30B6\u30FC\u540D\u3001" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#555] hidden sm:block sm:mb-2", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex rounded-sm border h-[40px] border-[#999] max-w-[600px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[30%] justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999] min-w-[100px]", children: "\u30E6\u30FC\u30B6\u30FC\u540D" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[70%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Input, { register, schema: "name", required: !0, label: "\u30E6\u30FC\u30B6\u30FC\u540D", maxLength: 20 }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (_a = errors == null ? void 0 : errors.name) == null ? void 0 : _a.message }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex rounded-sm border h-[40px] border-[#999] max-w-[600px] w-full mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[30%] justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999] min-w-[100px]", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[70%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
        Input,
        {
          register,
          schema: "email",
          required: !0,
          label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
          regex: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
          regMessage: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 82,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (_b = errors == null ? void 0 : errors.email) == null ? void 0 : _b.message }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex rounded-sm border  h-[40px] border-[#999] max-w-[600px] w-full mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[30%] justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999] min-w-[100px]", children: "\u30D1\u30B9\u30EF\u30FC\u30C9" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[70%] flex relative items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          Input,
          {
            register,
            schema: "password",
            required: !0,
            label: "\u30D1\u30B9\u30EF\u30FC\u30C9",
            isPassword: isHiddenPassword,
            regex: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9.@?/+*¥^!-_]{8,24}$/,
            regMessage: "\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u3068\u6570\u5B57\u3092\u542B\u3081\u305F8-24\u6587\u5B57\u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__account/register.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "absolute right-3 cursor-pointer", onClick: () => setHiddenPassword(!isHiddenPassword), children: isHiddenPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_bs4.BsEyeSlashFill, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 108,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_bs4.BsEyeFill, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 108,
          columnNumber: 64
        }, this) }, void 0, !1, {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (_c = errors == null ? void 0 : errors.password) == null ? void 0 : _c.message }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex rounded-sm border  h-[40px] border-[#999] max-w-[600px] w-full mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[30%] justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999] min-w-[100px]", children: "\u30D1\u30B9\u30EF\u30FC\u30C9(\u78BA\u8A8D)" }, void 0, !1, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-[70%] flex relative items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          Input,
          {
            register,
            schema: "confirm",
            required: !0,
            label: "\u30D1\u30B9\u30EF\u30FC\u30C9(\u78BA\u8A8D)",
            isPassword: isHiddenConfirm,
            regex: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9.@?/+*¥^!-_]{8,24}$/,
            regMessage: "\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u3068\u6570\u5B57\u3092\u542B\u3081\u305F8-24\u6587\u5B57\u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044",
            validate: (value) => value === watch("password") || "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u3066\u3044\u307E\u305B\u3093"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__account/register.tsx",
            lineNumber: 118,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "absolute right-3 cursor-pointer", onClick: () => setHiddenConfirm(!isHiddenConfirm), children: isHiddenConfirm ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_bs4.BsEyeSlashFill, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 129,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_bs4.BsEyeFill, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 129,
          columnNumber: 63
        }, this) }, void 0, !1, {
          fileName: "app/routes/__account/register.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__account/register.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (_d = errors == null ? void 0 : errors.confirm) == null ? void 0 : _d.message }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Button, { text: "\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332", onClick: handleSubmit(submitRegister), customWidth: "100%", customHeight: "32px", disabled: loading }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-4 flex flex-col items-start w-full max-w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Button, { text: "< \u30ED\u30B0\u30A4\u30F3\u753B\u9762\u3078\u623B\u308B", onClick: () => navigate("/login"), variant: "text" }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__account/register.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__account/register.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, {}, void 0, !1, {
    fileName: "app/routes/__account/register.tsx",
    lineNumber: 55,
    columnNumber: 12
  }, this);
}

// app/routes/__account/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Index6
});
var import_react33 = require("react"), import_react34 = require("@remix-run/react");
var import_react_hook_form6 = require("react-hook-form"), import_bs5 = require("react-icons/bs"), import_fc = require("react-icons/fc"), import_react_hot_toast6 = __toESM(require("react-hot-toast"));
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Index6() {
  var _a, _b;
  let navigate = (0, import_react34.useNavigate)(), [isHiddenPassword, setHiddenPassword] = (0, import_react33.useState)(!0), [errorMessage, setErrorMessage] = (0, import_react33.useState)(""), [loading, setLoading] = (0, import_react33.useState)(!1), { setRecoilUser } = useUserRecoil(), [auth, setAuth] = (0, import_react33.useState)(null);
  (0, import_react33.useEffect)(() => {
    typeof window > "u" || (async () => {
      let { getAuth } = await import("firebase/auth");
      setAuth(getAuth());
    })();
  }, []);
  let {
    register,
    handleSubmit,
    formState: { errors }
  } = (0, import_react_hook_form6.useForm)(), submitLogin = async ({ email, password }) => {
    setLoading(!0);
    let { signInWithEmailAndPassword } = await import("firebase/auth");
    signInWithEmailAndPassword(auth, email, password).then(async (res) => {
      setRecoilUser({ uid: res.user.uid, name: res.user.displayName, email: res.user.email, createdAt: res.user.metadata.creationTime }), import_react_hot_toast6.default.success("\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3057\u305F\u3002"), navigate("/shift");
    }).catch((error) => {
      setErrorMessage(
        error.code === "auth/wrong-password" || error.code === "auth/user-not-found" ? "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3082\u3057\u304F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002" : error.code === "auth/too-many-requests" ? "\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u6642\u9593\u3092\u958B\u3051\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002" : "\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002"
      ), console.log(error.code), setLoading(!1);
    });
  }, connectGoogleAuth = async () => {
    let { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth"), provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      import_react_hot_toast6.default.success("Google\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3057\u305F\u3002"), navigate("/shift");
    });
  };
  return auth ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col items-start w-full max-w-[600px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Title, { currentText: "\u30ED\u30B0\u30A4\u30F3" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#ef5a5a] text-sm mb-2", children: errorMessage }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 80,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#555] mb-2 sm:hidden", children: "\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#555] hidden sm:block", children: "\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u306E" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#555] hidden sm:block sm:mb-2", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex rounded-sm border  h-[40px] border-[#999] max-w-[600px] w-full ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-[30%] justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999] min-w-[100px]", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-[70%] flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        Input,
        {
          register,
          schema: "email",
          required: !0,
          label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
          regex: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
          regMessage: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/__account/login.tsx",
          lineNumber: 90,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (_a = errors == null ? void 0 : errors.email) == null ? void 0 : _a.message }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex rounded-sm border  h-[40px] border-[#999] max-w-[600px] w-full mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-[30%] justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999] min-w-[100px]", children: "\u30D1\u30B9\u30EF\u30FC\u30C9" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w-[70%] flex relative items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Input, { register, schema: "password", required: !0, label: "\u30D1\u30B9\u30EF\u30FC\u30C9", isPassword: isHiddenPassword }, void 0, !1, {
          fileName: "app/routes/__account/login.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "absolute right-3 cursor-pointer", onClick: () => setHiddenPassword(!isHiddenPassword), children: isHiddenPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_bs5.BsEyeSlashFill, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__account/login.tsx",
          lineNumber: 108,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_bs5.BsEyeFill, { size: 20 }, void 0, !1, {
          fileName: "app/routes/__account/login.tsx",
          lineNumber: 108,
          columnNumber: 64
        }, this) }, void 0, !1, {
          fileName: "app/routes/__account/login.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#ef5a5a] text-xs", children: (_b = errors == null ? void 0 : errors.password) == null ? void 0 : _b.message }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-4 w-full max-w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Button, { text: "\u30ED\u30B0\u30A4\u30F3", onClick: handleSubmit(submitLogin), customWidth: "100%", customHeight: "32px", disabled: loading }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-2 flex flex-col items-start w-full max-w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Button, { text: "\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210\u306F\u3053\u3061\u3089 >", onClick: () => navigate("/register"), variant: "text" }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-col items-start w-full max-w-[600px] mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#555] mb-2 sm:hidden", children: "\u4F1A\u54E1\u767B\u9332\u305B\u305A\u306BGoogle\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u5834\u5408\u306F\u3053\u3061\u3089\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#555] hidden sm:block", children: "\u4F1A\u54E1\u767B\u9332\u305B\u305A\u306BGoogle\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30ED\u30B0\u30A4\u30F3\u3059\u308B\u5834\u5408\u306F" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-[#555] hidden sm:block", children: "\u3053\u3061\u3089\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-2 w-full max-w-[600px] mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      Button,
      {
        text: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_fc.FcGoogle, { size: 25 }, void 0, !1, {
            fileName: "app/routes/__account/login.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "ml-2", children: "Google\u30ED\u30B0\u30A4\u30F3" }, void 0, !1, {
            fileName: "app/routes/__account/login.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__account/login.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        onClick: connectGoogleAuth,
        customWidth: "100%",
        customHeight: "32px",
        disabled: loading
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__account/login.tsx",
        lineNumber: 128,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/__account/login.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__account/login.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, {}, void 0, !1, {
    fileName: "app/routes/__account/login.tsx",
    lineNumber: 73,
    columnNumber: 12
  }, this);
}

// app/routes/create.tsx
var create_exports = {};
__export(create_exports, {
  default: () => Index7
});
var import_react37 = require("@remix-run/react");

// app/components/ProgressNav.tsx
var import_bi3 = require("react-icons/bi"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), ProgressNav = ({ currentPath }) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-baseline", children: [
  { label: "\u5E74\u6708\u9078\u629E", rootPath: "/create/date" },
  { label: "\u5404\u9805\u76EE\u78BA\u8A8D", rootPath: "/create/confirm" },
  { label: "\u81EA\u52D5\u751F\u6210", rootPath: "/create/automation" },
  { label: "\u30B7\u30D5\u30C8\u4F5C\u6210\u5B8C\u4E86", rootPath: "" }
].map(({ label, rootPath }, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center", children: [
  rootPath === currentPath ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { className: "font-semibold text-primary-text", children: label }, void 0, !1, {
    fileName: "app/components/ProgressNav.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "text-xs text-[#666]", children: label }, void 0, !1, {
    fileName: "app/components/ProgressNav.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this),
  i !== 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_bi3.BiChevronRight, { size: 18, color: "#666" }, void 0, !1, {
    fileName: "app/components/ProgressNav.tsx",
    lineNumber: 28,
    columnNumber: 23
  }, this)
] }, i, !0, {
  fileName: "app/components/ProgressNav.tsx",
  lineNumber: 22,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/components/ProgressNav.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this);

// app/hooks/useExitCreateShift.tsx
var import_react35 = require("react"), import_react36 = require("@remix-run/react");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), ModalContent = ({ mutation, setOpen }) => {
  let [checkedExit, setCheck] = (0, import_react35.useState)(!1), navigate = (0, import_react36.useNavigate)(), { resetCreate } = useShiftCreateRecoil(), { pathname } = (0, import_react36.useLocation)(), handleExit = () => {
    resetCreate(), setOpen && setOpen(!1), navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex w-full flex-col items-center text-[#555]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { className: "text-lg font-bold text-black", children: "\u4F5C\u6210\u4E2D\u306E\u30B7\u30D5\u30C8\u3092\u4E2D\u65AD\u3057\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F" }, void 0, !1, {
      fileName: "app/hooks/useExitCreateShift.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    pathname === "/create/automation" ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "my-6 flex items-center justify-between w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "flex-col flex mt-3", children: [
          "\u7834\u68C4\u3059\u308B\u5834\u5408\u306F\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u306B\u30C1\u30A7\u30C3\u30AF\u306E\u4E0A\u3001",
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/hooks/useExitCreateShift.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          "\u7834\u68C4\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044"
        ] }, void 0, !0, {
          fileName: "app/hooks/useExitCreateShift.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col items-center ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            CheckBox,
            {
              checked: checkedExit,
              onChange: (e) => e.target.id === "\u30B7\u30D5\u30C8\u7834\u68C4" && e.target.checked ? setCheck(!0) : setCheck(!1),
              label: "\u30B7\u30D5\u30C8\u7834\u68C4",
              className: "mb-2"
            },
            void 0,
            !1,
            {
              fileName: "app/hooks/useExitCreateShift.tsx",
              lineNumber: 42,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Button, { text: "\u7834\u68C4", onClick: handleExit, color: "secondary", disabled: !checkedExit }, void 0, !1, {
            fileName: "app/hooks/useExitCreateShift.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/hooks/useExitCreateShift.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/hooks/useExitCreateShift.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex justify-between w-full items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mr-4", children: "\u4E00\u6642\u4FDD\u5B58\u3059\u308B\u3068\u73FE\u5728\u306E\u5185\u5BB9\u306E\u307E\u307E\u4F5C\u696D\u3092\u518D\u958B\u3067\u304D\u307E\u3059\u3002" }, void 0, !1, {
          fileName: "app/hooks/useExitCreateShift.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          Button,
          {
            text: "\u4E00\u6642\u4FDD\u5B58",
            onClick: () => {
              setOpen && setOpen(!1);
              try {
                mutation();
              } catch (error) {
                console.error("mutation error:", error);
              }
            },
            color: "primary",
            width: "md"
          },
          void 0,
          !1,
          {
            fileName: "app/hooks/useExitCreateShift.tsx",
            lineNumber: 54,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/hooks/useExitCreateShift.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/hooks/useExitCreateShift.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/hooks/useExitCreateShift.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Button, { text: "OK", onClick: handleExit, color: "secondary" }, void 0, !1, {
      fileName: "app/hooks/useExitCreateShift.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/hooks/useExitCreateShift.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/hooks/useExitCreateShift.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, useExitCreateShift = ({ shifts, mutation }) => {
  let [isOpen, setOpen] = (0, import_react35.useState)(!1);
  return { ConfirmModal: () => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Modal, { isOpen, setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ModalContent, { shifts, mutation, setOpen }, void 0, !1, {
    fileName: "app/hooks/useExitCreateShift.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/hooks/useExitCreateShift.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this), setOpen };
};

// app/routes/create.tsx
var import_react38 = require("react");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function Index7() {
  let { pathname } = (0, import_react37.useLocation)(), navigate = (0, import_react37.useNavigate)(), [shifts, setShifts] = (0, import_react38.useState)([]), { recoilShiftDate, recoilEmployeeWorkingTime, recoilCreateShiftId } = useShiftCreateRecoil(), { recoilEditShiftId } = useShiftEditRecoil(), mutationShift2 = useMutationShift({
    shifts,
    shiftInfo: {
      shiftName: "\u4E00\u6642\u4FDD\u5B58\u30B7\u30D5\u30C8",
      isCompleted: !1,
      isFirstDateShift: !(recoilCreateShiftId != null && recoilCreateShiftId.shiftDateId),
      isEdit: !!(recoilEditShiftId != null && recoilEditShiftId.shiftId),
      isTemporarily: !0
    }
  }), { ConfirmModal, setOpen } = useExitCreateShift({ shifts, mutation: mutationShift2 });
  (0, import_react38.useEffect)(() => {
    recoilShiftDate ? recoilEmployeeWorkingTime || navigate("/create/confirm") : navigate("/create/date");
  }, [pathname]);
  let basePrevious = { text: "\u4F5C\u6210\u30B7\u30D5\u30C8\u4E00\u89A7", rootPath: "/shift" }, datePrevious = { text: "", rootPath: "/create/date", isHidden: !0 };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex justify-between relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Title, { currentText: "\u30B7\u30D5\u30C8\u4F5C\u6210", previous: pathname === "/create/automation" ? [basePrevious, datePrevious, { text: "", rootPath: "/create/confirm", isHidden: !0 }] : pathname === "/create/confirm" ? [basePrevious, datePrevious] : [basePrevious] }, void 0, !1, {
          fileName: "app/routes/create.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "m-2 sm:m-1" }, void 0, !1, {
          fileName: "app/routes/create.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ProgressNav, { currentPath: pathname }, void 0, !1, {
          fileName: "app/routes/create.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "absolute right-0 top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Button, { text: pathname === "/create/automation" ? "\u4E2D\u65AD / \u4E00\u6642\u4FDD\u5B58" : "\u4E2D\u65AD", onClick: setOpen, color: "secondary", width: "md" }, void 0, !1, {
        fileName: "app/routes/create.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/create.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "m-3 sm:m-1" }, void 0, !1, {
      fileName: "app/routes/create.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react37.Outlet, { context: { shifts, setShifts } }, void 0, !1, {
      fileName: "app/routes/create.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ConfirmModal, {}, void 0, !1, {
      fileName: "app/routes/create.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/create/automation.tsx
var automation_exports = {};
__export(automation_exports, {
  default: () => Index8
});
var import_react40 = require("@remix-run/react"), import_react41 = require("react");
var import_react_hook_form7 = require("react-hook-form");

// app/hooks/useConfirm.ts
var import_react39 = require("react"), useConfirm = () => {
  let handleBeforeUnloadEvent = (event) => {
    event.returnValue = "";
  };
  (0, import_react39.useEffect)(() => (window.addEventListener("beforeunload", handleBeforeUnloadEvent), () => {
    window.removeEventListener("beforeunload", handleBeforeUnloadEvent);
  }), []);
};

// app/routes/create/automation.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Index8() {
  var _a;
  let { recoilEmployeeWorkingTime, recoilShiftDate, setRecoilStep1Shifts, setRecoilStep2Shifts, recoilCreateShiftId } = useShiftCreateRecoil(), navState = (0, import_react40.useLocation)().state, { shifts, setShifts } = (0, import_react40.useOutletContext)(), [tableSize, setTableSize] = (0, import_react41.useState)(new Date((recoilShiftDate == null ? void 0 : recoilShiftDate.year) ?? 2e3, (recoilShiftDate == null ? void 0 : recoilShiftDate.month) ?? 1, 0).getDate()), [step, setStep] = (0, import_react41.useState)(1), [isOpen, setOpen] = (0, import_react41.useState)(!1), [isFilledShifts, setFilledShifts] = (0, import_react41.useState)(!1), [updateFlag, setUpdateFlag] = (0, import_react41.useState)(!1), [resetFlag, setResetFlag] = (0, import_react41.useState)(!1), { resetStep2Shift, resetStep3Shift, initializeShift, createAutoShift, fillBlankShift } = useCreateShifts({
    employees: recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.employees,
    workingTimes: recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.workingTimes,
    shifts,
    setShifts,
    setStep,
    setFilledShifts
  }), {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = (0, import_react_hook_form7.useForm)();
  useConfirm(), (0, import_react41.useEffect)(() => {
    if (navState != null && navState.shifts) {
      let currentShift = [];
      navState.shifts.forEach((shift) => {
        var _a2;
        currentShift.push({
          employee: shift == null ? void 0 : shift.employee,
          workIds: [...(_a2 = shift == null ? void 0 : shift.workIds) == null ? void 0 : _a2.map((id) => id === 0 ? void 0 : id)]
        });
      }), setShifts([...currentShift]);
    }
  }, [navState]);
  let mutationShift2 = useMutationShift({
    shifts,
    shiftInfo: {
      isCompleted: !0,
      shiftName: watch("shiftName"),
      isFirstDateShift: !(recoilCreateShiftId != null && recoilCreateShiftId.shiftDateId),
      isEdit: !!(navState != null && navState.shifts),
      isTemporarily: navState == null ? void 0 : navState.isTemporarily,
      updatedAt: null
    }
  }), ExplanationTexts = () => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-col ml-4 mb-3 sm:ml-0", children: [
    `STEP1: 
\u300C\u6709\u7D66\u30FB\u5E0C\u671B\u4F11\u300D\u3084\u78BA\u5B9A\u3057\u3066\u3044\u308B\u30B7\u30D5\u30C8\u3092\u624B\u52D5\u5165\u529B\u3057\u3001\u300C\u6B21\u3078\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002
 \u300C\u4E00\u62EC\u30EA\u30BB\u30C3\u30C8\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068STEP1\u3067\u5165\u529B\u3057\u305F\u30B7\u30D5\u30C8\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002`,
    `STEP2: 
 \u81EA\u52D5\u751F\u6210\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u81EA\u52D5\u751F\u6210\u306F\u30E9\u30F3\u30C0\u30E0\u306A\u305F\u3081\u30EA\u30BB\u30C3\u30C8\u21C4\u81EA\u52D5\u751F\u6210\u3067\u5225\u30D1\u30BF\u30FC\u30F3\u306E\u30B7\u30D5\u30C8\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 
 \u81EA\u52D5\u751F\u6210\u3057\u305F\u30B7\u30D5\u30C8\u3092\u78BA\u8A8D\u3057\u554F\u984C\u306A\u3051\u308C\u3070\u300C\u6B21\u3078\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,
    `STEP3: 
 \u30B7\u30D5\u30C8\u3092\u624B\u52D5\u3067\u8ABF\u6574\u3057\u3001\u5B8C\u4E86\u3057\u305F\u3089\u300C\u4F5C\u6210\u5B8C\u4E86\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002
 \u300C\u7A7A\u6B04\u4F11\u6687\u57CB\u3081\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u672A\u5165\u529B\u306E\u6B04\u306B\u300C\u4F11\u300D\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002
 \u300C\u30EA\u30BB\u30C3\u30C8\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068STEP3\u3067\u5165\u529B\u3057\u305F\u30B7\u30D5\u30C8\u306E\u307F\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002`
  ].map((text, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: `my-2 ${i + 1 === step ? "text-primary-text font-bold" : "text-[#888]"}`, children: text.split(`
`).map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: l }, l, !1, {
    fileName: "app/routes/create/automation.tsx",
    lineNumber: 96,
    columnNumber: 15
  }, this)) }, i, !1, {
    fileName: "app/routes/create/automation.tsx",
    lineNumber: 94,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/routes/create/automation.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this), backSTEP1 = () => {
    resetStep2Shift(), setStep(1), setOpen(!1);
    let empty = !0;
    shifts.forEach((employee) => employee.workIds.forEach((v) => v && (empty = !1))), !empty && setUpdateFlag(!0);
  }, backSTEP2 = () => {
    resetStep3Shift(), setStep(2), setOpen(!1);
    let empty = !0;
    shifts.forEach((employee) => employee.workIds.forEach((v) => v && (empty = !1))), !empty && setUpdateFlag(!0);
  }, goSTEP2 = () => {
    setRecoilStep1Shifts([...shifts]), setStep(2), setUpdateFlag(!1);
  }, goSTEP3 = () => {
    setRecoilStep2Shifts([...shifts]), setStep(3), setUpdateFlag(!1);
  }, onAutoShift = async () => {
    await resetStep2Shift(), createAutoShift(), setUpdateFlag(!0);
  }, resetStep3 = () => {
    resetStep3Shift(), setOpen(!1), setResetFlag(!1), setUpdateFlag(!1);
  }, openResetStep3Modal = () => {
    setResetFlag(!0), setOpen(!0);
  }, StepModal = () => {
    let handleOK = () => {
      step === 1 ? (initializeShift(), setOpen(!1)) : step === 2 ? backSTEP1() : step === 3 && (resetFlag ? resetStep3() : backSTEP2());
    };
    return !updateFlag && isOpen && handleOK(), /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Modal, { isOpen, setOpen, children: [
      step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h1", { className: "text-base font-bold", children: "\u624B\u52D5\u5165\u529B\u3057\u305F\u30B7\u30D5\u30C8\u304C\u5168\u3066\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F" }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w-full flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { text: "OK", onClick: handleOK, variant: "outlined" }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this),
      step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h1", { className: "text-base font-bold", children: "STEP1\u3078\u623B\u308B\u3068\u81EA\u52D5\u751F\u6210\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F" }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w-full flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { text: "OK", onClick: handleOK, variant: "outlined" }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this),
      step === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h1", { className: "text-base font-bold", children: [
          !resetFlag && "STEP2\u3078\u623B\u308B\u3068",
          "STEP3\u3067\u624B\u52D5\u5165\u529B\u3057\u305F\u30B7\u30D5\u30C8\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F"
        ] }, void 0, !0, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w-full flex justify-center mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { text: "OK", onClick: handleOK, variant: "outlined" }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this);
  }, StepButtons = () => {
    let olProps = { width: "sm", variant: "outlined", textSize: "text-xs", text: "<\u3000\u623B\u308B", color: "secondary-light" }, ctProps = { width: "sm", textSize: "text-xs", text: "\u6B21\u3078\u3000>", color: "secondary-light" };
    return step === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...olProps, onClick: () => setOpen(!0), text: "\u4E00\u62EC\u30EA\u30BB\u30C3\u30C8", color: "primary", width: "md" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...olProps, disabled: !0 }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...ctProps, onClick: goSTEP2 }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) : step === 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...ctProps, onClick: onAutoShift, text: "\u81EA\u52D5\u751F\u6210", color: "primary" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 211,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...olProps, onClick: () => setOpen(!0) }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...ctProps, onClick: goSTEP3 }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) : step === 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...ctProps, onClick: fillBlankShift, text: "\u7A7A\u6B04\u4F11\u6687\u57CB\u3081", color: "primary", disabled: isFilledShifts, width: "md" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...olProps, onClick: openResetStep3Modal, color: "primary", text: "\u30EA\u30BB\u30C3\u30C8" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...olProps, onClick: () => setOpen(!0), color: "secondary-light" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mr-4" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { ...ctProps, onClick: handleSubmit(mutationShift2), text: "\u4F5C\u6210\u5B8C\u4E86", disabled: !isFilledShifts }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 221,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, {}, void 0, !1, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 232,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Accordion, { label: "\u64CD\u4F5C\u624B\u9806", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ExplanationTexts, {}, void 0, !1, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 238,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center border border-gray-300 rounded-sm max-w-[800px] mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w-1/3 bg-primary-pale h-8 flex items-center justify-center", children: "\u30B7\u30D5\u30C8\u540D" }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w-2/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Input, { label: "\u30B7\u30D5\u30C8\u540D", register, schema: "shiftName", required: !0 }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 241,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-xs text-[#ff3535]", children: (_a = errors == null ? void 0 : errors.shiftName) == null ? void 0 : _a.message }, void 0, !1, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb-2" }, void 0, !1, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    shifts.length > 0 && recoilEmployeeWorkingTime && recoilShiftDate && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "p-2 rounded-md shadow-md border sm:max-h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center w-full justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(TableSizeButtons, { tableSize, setTableSize, date: recoilShiftDate }, void 0, !1, {
            fileName: "app/routes/create/automation.tsx",
            lineNumber: 254,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/create/automation.tsx",
            lineNumber: 253,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StepButtons, {}, void 0, !1, {
            fileName: "app/routes/create/automation.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/create/automation.tsx",
          lineNumber: 252,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          ShiftsTable,
          {
            tableSize,
            shifts,
            setShifts,
            employees: recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.employees,
            workingTimes: recoilEmployeeWorkingTime == null ? void 0 : recoilEmployeeWorkingTime.workingTimes,
            disabled: step === 2,
            setUpdateFlag
          },
          void 0,
          !1,
          {
            fileName: "app/routes/create/automation.tsx",
            lineNumber: 258,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StepModal, {}, void 0, !1, {
        fileName: "app/routes/create/automation.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/automation.tsx",
      lineNumber: 250,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create/automation.tsx",
    lineNumber: 236,
    columnNumber: 5
  }, this);
}

// app/routes/create/confirm.tsx
var confirm_exports = {};
__export(confirm_exports, {
  default: () => Index9
});
var import_react42 = require("@remix-run/react");

// app/components/table/WorkingTimesConfirmTable.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), WorkingTimesConfirmTable = ({ workingTimes }) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("table", { className: "flex items-center w-full flex-col rounded-md shadow-md overflow-x-auto evenColor hidden-scrollbar", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("thead", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { className: "w-full flex", children: labels.workingTimeConfirm.map((label, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: `bg-primary p-1 text-white text-center border ${label.w}`, children: label.label }, i, !1, {
    fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tbody", { className: "w-full ", children: workingTimes == null ? void 0 : workingTimes.map((workingTime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("tr", { className: "w-full flex text-center h-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "w-[15%] min-w-[120px] border h-full flex justify-center items-center", children: workingTime.timeName }, void 0, !1, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "w-[38%] min-w-[180px] border h-full flex justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-6", children: workingTime.startHour }, void 0, !1, {
          fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
          lineNumber: 28,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-3", children: ":" }, void 0, !1, {
          fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
          lineNumber: 29,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-6", children: workingTime.startMinute < 10 ? `0${workingTime.startMinute}` : workingTime.startMinute }, void 0, !1, {
          fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
          lineNumber: 30,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-10", children: "~" }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-6", children: workingTime.endHour }, void 0, !1, {
          fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
          lineNumber: 36,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-3", children: ":" }, void 0, !1, {
          fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
          lineNumber: 37,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-6", children: workingTime.endMinute < 10 ? `0${workingTime.endMinute}` : workingTime.endMinute }, void 0, !1, {
          fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
          lineNumber: 38,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 34,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "w-[32%] min-w-[180px] border h-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "flex items-baseline", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-10", children: workingTime.minEmployee }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-3", children: "~" }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-10", children: workingTime.maxEmployee }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { className: "w-3 text-xs", children: "\u4EBA" }, void 0, !1, {
        fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "w-[8%] min-w-[66px] border h-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(CheckBox, { checked: workingTime.isNextDayoff, disabled: !0 }, void 0, !1, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 51,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("td", { className: "w-[7%] min-w-[60px] border h-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w-6 h-6 border-gray-200 rounded-sm border-2", style: { backgroundColor: workingTime.color } }, void 0, !1, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 54,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, i, !0, {
    fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
    lineNumber: 23,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/table/WorkingTimesConfirmTable.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this);

// app/components/table/EmployeesConfirmTable.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), EmployeesConfirmTable = ({ employees, workingTimes }) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("table", { className: "flex items-center w-full flex-col rounded-md shadow-md overflow-x-auto evenColor hidden-scrollbar", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("thead", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("tr", { className: "w-full flex", children: labels.employeeConfirm.map((label, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "p",
    {
      className: `bg-primary p-1 text-white text-center border ${label.w}`,
      style: { minWidth: i == 1 ? `${workingTimes && workingTimes.length * 100}px` : "" },
      children: label.label
    },
    i,
    !1,
    {
      fileName: "app/components/table/EmployeesConfirmTable.tsx",
      lineNumber: 15,
      columnNumber: 13
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/table/EmployeesConfirmTable.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/table/EmployeesConfirmTable.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("tbody", { className: "w-full", children: employees == null ? void 0 : employees.map((employee, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("tr", { className: "w-full flex text-center h-10 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("td", { className: "w-[30%] border min-w-[130px] h-full flex items-center justify-center", children: employee.name }, void 0, !1, {
      fileName: "app/components/table/EmployeesConfirmTable.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
      "td",
      {
        className: "w-[70%] border p-1 flex items-center justify-around h-full",
        style: { minWidth: `${workingTimes && workingTimes.length * 100}px` },
        children: workingTimes == null ? void 0 : workingTimes.map((workingTime, i2) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(CheckBox, { checked: employee.canWorkingIds.includes(workingTime.id), disabled: !0, label: workingTime.timeName }, i2, !1, {
            fileName: "app/components/table/EmployeesConfirmTable.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { style: workingTimes.length - 1 !== i2 ? { marginLeft: "5px" } : {} }, void 0, !1, {
            fileName: "app/components/table/EmployeesConfirmTable.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/table/EmployeesConfirmTable.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/table/EmployeesConfirmTable.tsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    )
  ] }, i, !0, {
    fileName: "app/components/table/EmployeesConfirmTable.tsx",
    lineNumber: 27,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/table/EmployeesConfirmTable.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/table/EmployeesConfirmTable.tsx",
  lineNumber: 11,
  columnNumber: 5
}, this);

// app/routes/create/confirm.tsx
var import_react43 = require("react"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function Index9() {
  var _a, _b, _c, _d;
  let navigate = (0, import_react42.useNavigate)(), { data: queryData } = useQuery(employeesAndWorkingTimesQuery), { resetShifts, recoilEmployeeWorkingTime, setRecoilEmployeeWorkingTime } = useShiftCreateRecoil(), [data, setDataState] = (0, import_react43.useState)();
  (0, import_react43.useEffect)(() => {
    recoilEmployeeWorkingTime ? setDataState(recoilEmployeeWorkingTime) : queryData && (setDataState({ workingTimes: queryData.workingTime, employees: queryData.employee }), setRecoilEmployeeWorkingTime({ workingTimes: queryData.workingTime, employees: queryData.employee }));
  }, [queryData]);
  let navigateAutomation = () => {
    resetShifts(), navigate("/create/automation");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Spinner, { isLoad: !data }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text[#555] mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Accordion, { label: "\u64CD\u4F5C\u624B\u9806", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "\u4E0B\u8A18\u306E\u52E4\u52D9\u6642\u9593\u5E2F\u30FB\u5F93\u696D\u54E1\u60C5\u5831\u3067\u30B7\u30D5\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "\u3088\u308D\u3057\u3051\u308C\u3070\u300C\u81EA\u52D5\u751F\u6210\u3078\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "\u52E4\u52D9\u6642\u9593\u5E2F\u3001\u5F93\u696D\u54E1\u3092\u7DE8\u96C6\u3059\u308B\u5834\u5408\u306F\u300C\u5404\u7A2E\u7DE8\u96C6\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h1", { className: "text-base font-bold", children: "\u52E4\u52D9\u6642\u9593\u5E2F" }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    data && ((_a = data.workingTimes) == null ? void 0 : _a.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(WorkingTimesConfirmTable, { workingTimes: data == null ? void 0 : data.workingTimes }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "\u8868\u793A\u3067\u304D\u308B\u52E4\u52D9\u6642\u9593\u5E2F\u60C5\u5831\u304C\u3042\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "[\u5404\u7A2E\u7DE8\u96C6]\u30DC\u30BF\u30F3\u3088\u308A\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h1", { className: "text-base font-bold", children: "\u5F93\u696D\u54E1" }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    data && ((_b = data.employees) == null ? void 0 : _b.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(EmployeesConfirmTable, { employees: data == null ? void 0 : data.employees, workingTimes: data == null ? void 0 : data.workingTimes }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "\u8868\u793A\u3067\u304D\u308B\u5F93\u696D\u54E1\u60C5\u5831\u304C\u3042\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("p", { children: "[\u5404\u7A2E\u7DE8\u96C6]\u30DC\u30BF\u30F3\u3088\u308A\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full flex my-2 justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      Button,
      {
        text: "\u5404\u7A2E\u7DE8\u96C6",
        onClick: () => {
          navigate("/workingTime", { state: { inCreate: !0 } });
        },
        color: "secondary-light",
        width: "sm"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 76,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w-full flex justify-end mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      Button,
      {
        text: "\u81EA\u52D5\u751F\u6210\u3078",
        onClick: navigateAutomation,
        disabled: data && !((_c = data.employees) != null && _c.length) || data && !((_d = data.workingTimes) != null && _d.length)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/create/confirm.tsx",
        lineNumber: 86,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/create/confirm.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create/confirm.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/create/date.tsx
var date_exports = {};
__export(date_exports, {
  default: () => Index10
});
var import_react44 = require("@remix-run/react");

// app/components/DateSelect.tsx
var import_react_select3 = __toESM(require("react-select"));
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), DateSelect = ({ selectedYear, setYear, selectedMonth, setMonth }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex items-center w-full justify-between sm:flex-col sm:items-start", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex w-[45%] sm:w-full rounded-sm border  h-[40px] border-[#999] sm:mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-[40%]  justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999]", children: "\u5E74" }, void 0, !1, {
      fileName: "app/components/DateSelect.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-[60%] flex justify-center pl-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      import_react_select3.default,
      {
        instanceId: "select",
        value: { value: selectedYear, label: `${selectedYear}\u5E74` },
        onChange: (e) => setYear && setYear(e.value),
        options: set3YearOptions(),
        styles: {
          container: (base) => ({ ...base, border: 0, padding: 0 }),
          control: (base) => ({ ...base, border: 0, padding: 0, boxShadow: "none" }),
          valueContainer: (base) => ({ ...base, border: 0, padding: 0, width: "5em" }),
          menu: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999, fontSize: "12px" }),
          menuPortal: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999 })
        },
        isSearchable: !1,
        menuPortalTarget: typeof window == "object" ? document == null ? void 0 : document.body : void 0
      },
      void 0,
      !1,
      {
        fileName: "app/components/DateSelect.tsx",
        lineNumber: 20,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/DateSelect.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DateSelect.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex w-[45%] sm:w-full rounded-sm border h-[40px] border-[#999]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-[40%]  justify-center flex bg-primary-pale h-[38px] items-center border-r border-[#999]", children: "\u6708" }, void 0, !1, {
      fileName: "app/components/DateSelect.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-[60%] flex justify-center pl-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      import_react_select3.default,
      {
        instanceId: "select",
        value: { value: selectedMonth, label: `${selectedMonth}\u6708` },
        onChange: (e) => setMonth && setMonth(e.value),
        options: setMonthOptions(),
        styles: {
          container: (base) => ({ ...base, border: 0, padding: 0 }),
          control: (base) => ({ ...base, border: 0, padding: 0, boxShadow: "none" }),
          valueContainer: (base) => ({ ...base, border: 0, padding: 0, width: "5em" }),
          menu: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999, fontSize: "12px" }),
          menuPortal: (base) => ({ ...base, width: "100px", margin: 0, zIndex: 9999 })
        },
        isSearchable: !1,
        menuPortalTarget: typeof window == "object" ? document == null ? void 0 : document.body : void 0
      },
      void 0,
      !1,
      {
        fileName: "app/components/DateSelect.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/DateSelect.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/DateSelect.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/DateSelect.tsx",
  lineNumber: 16,
  columnNumber: 3
}, this);

// app/routes/create/date.tsx
var import_react45 = require("react");
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Index10() {
  let navigate = (0, import_react44.useNavigate)(), navState = (0, import_react44.useLocation)().state, {
    recoilShiftDate,
    setRecoilShiftDate,
    resetCreate,
    setRecoilCreateUpdateId,
    recoilNotCompleted,
    setRecoilNotCompleted,
    recoilCreateState
  } = useShiftCreateRecoil(), { recoilUser } = useUserRecoil(), [isConfirmModalOpen, setConfirmModalOpen] = (0, import_react45.useState)(!1), userId = recoilUser == null ? void 0 : recoilUser.uid, [selectedYear, setYear] = (0, import_react45.useState)((recoilShiftDate == null ? void 0 : recoilShiftDate.year) ?? (/* @__PURE__ */ new Date()).getFullYear()), [selectedMonth, setMonth] = (0, import_react45.useState)((recoilShiftDate == null ? void 0 : recoilShiftDate.month) ?? (/* @__PURE__ */ new Date()).getMonth() + 1), [isOpen, setOpen] = (0, import_react45.useState)(!1), { windowDimensions } = useGetElementProperty(), { data, loading } = useQuery(
    shiftDateQuery(selectedYear, selectedMonth, userId)
  ), navigateConfirm = async ({ isUpdate }) => {
    await setRecoilShiftDate({ year: selectedYear, month: selectedMonth }), setRecoilCreateUpdateId(isUpdate ? { shiftDateId: data == null ? void 0 : data.shiftDate[0].id } : void 0), navigate("/create/confirm");
  };
  (0, import_react45.useEffect)(() => {
    recoilNotCompleted && !(navState != null && navState.notOpenModal) && setConfirmModalOpen(!0);
  }, []);
  let trashTemporarilyShift = () => {
    resetCreate(), setConfirmModalOpen(!1), setOpen(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "m-2 text-[#555]", children: "\u4F5C\u6210\u3059\u308B\u30B7\u30D5\u30C8\u306E\u5E74\u6708\u3092\u9078\u629E\u3057\u3001\u300C\u5404\u9805\u76EE\u78BA\u8A8D\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }, void 0, !1, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(DateSelect, { selectedYear, setYear, selectedMonth, setMonth }, void 0, !1, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w-full flex justify-end mt-5", children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { text: "\u30C7\u30FC\u30BF\u53D6\u5F97\u4E2D", disabled: !0 }, void 0, !1, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      Button,
      {
        text: "\u5404\u9805\u76EE\u78BA\u8A8D",
        onClick: () => data && data.shiftDate.length > 0 ? setOpen(!0) : navigateConfirm({ isUpdate: !1 })
      },
      void 0,
      !1,
      {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 63,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Modal, { isOpen, setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "font-bold text-lg mb-2", children: "\u9078\u629E\u3057\u305F\u5E74\u6708\u306E\u30B7\u30D5\u30C8\u306F\u65E2\u306B\u4F5C\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { children: "\u4F5C\u6210\u6E08\u306E\u30B7\u30D5\u30C8\u3092\u7DE8\u96C6\u30FB\u8907\u88FD\u3057\u3066\u7DE8\u96C6\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059" }, void 0, !1, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mt-6 mb-2 flex justify-around", children: (windowDimensions == null ? void 0 : windowDimensions.width) < 640 ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { text: "\u4F5C\u6210\u6E08\u30B7\u30D5\u30C8\u78BA\u8A8D", onClick: () => navigate(`/shift/${selectedYear}.${selectedMonth}`), customWidth: "120px" }, void 0, !1, {
          fileName: "app/routes/create/date.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { text: "\u30B7\u30D5\u30C8\u65B0\u898F\u4F5C\u6210", onClick: () => navigateConfirm({ isUpdate: !0 }), color: "secondary", customWidth: "120px" }, void 0, !1, {
          fileName: "app/routes/create/date.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { text: "\u4F5C\u6210\u6E08\u30B7\u30D5\u30C8\u78BA\u8A8D", onClick: () => navigate(`/shift/${selectedYear}.${selectedMonth}`) }, void 0, !1, {
          fileName: "app/routes/create/date.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { text: "\u30B7\u30D5\u30C8\u65B0\u898F\u4F5C\u6210", onClick: () => navigateConfirm({ isUpdate: !0 }), color: "secondary" }, void 0, !1, {
          fileName: "app/routes/create/date.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 81,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Modal, { isOpen: isConfirmModalOpen, setOpen: setConfirmModalOpen, onCloseFunc: trashTemporarilyShift, children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w-full justify-center flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "font-bold text-lg mb-2", children: "\u4F5C\u6210\u9014\u4E2D\u306E\u30B7\u30D5\u30C8\u304C\u3042\u308A\u307E\u3059\u3002" }, void 0, !1, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { children: "\u4F5C\u6210\u4F5C\u696D\u3092\u518D\u958B\u3057\u307E\u3059\u304B\uFF1F" }, void 0, !1, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w-full flex justify-around mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Button, { text: "\u65B0\u898F\u4F5C\u6210", variant: "outlined", onClick: trashTemporarilyShift }, void 0, !1, {
          fileName: "app/routes/create/date.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          Button,
          {
            text: "\u4F5C\u6210\u518D\u958B",
            onClick: () => {
              setRecoilNotCompleted(!1), navigate("/create/automation", { state: { ...recoilCreateState } }), setOpen(!1);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/create/date.tsx",
            lineNumber: 95,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/create/date.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/create/date.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create/date.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/manual.tsx
var manual_exports = {};
__export(manual_exports, {
  default: () => Index11
});
var import_react_anchor_link_smooth_scroll = __toESM(require("react-anchor-link-smooth-scroll"));

// app/utils/manuals.ts
var tableOfContents = [
  {
    title: "\u30B7\u30D5\u30C8\u4F5C\u6210",
    contents: ["\u4F5C\u6210\u753B\u9762\u8868\u793A", "\u5E74\u6708\u9078\u629E", "\u5404\u60C5\u5831\u78BA\u8A8D", "\u30B7\u30D5\u30C8\u64CD\u4F5C\u8AAC\u660E", "\u624B\u52D5\u5165\u529B(STEP1)", "\u81EA\u52D5\u5165\u529B(STEP2)", "\u8ABF\u6574(STEP3)"]
  },
  {
    title: "\u4F5C\u6210\u6E08\u30B7\u30D5\u30C8",
    contents: ["\u30B7\u30D5\u30C8\u78BA\u8A8D", "\u30B7\u30D5\u30C8\u7DE8\u96C6", "\u30A8\u30AF\u30BB\u30EB\u51FA\u529B"]
  },
  {
    title: "\u305D\u306E\u4ED6",
    contents: ["\u5404\u7A2E\u5909\u66F4", "\u9000\u4F1A", "\u304A\u554F\u3044\u5408\u308F\u305B"]
  }
], manuals = [
  {
    title: "\u30B7\u30D5\u30C8\u4F5C\u6210",
    contents: [
      {
        title: "\u4F5C\u6210\u753B\u9762\u8868\u793A",
        text: ["\u30B7\u30D5\u30C8\u4F5C\u6210\u306F\u30B9\u30E9\u30A4\u30C0\u30FC\u306E\u300C\u30B7\u30D5\u30C8\u65B0\u898F\u4F5C\u6210\u300D\u3082\u3057\u304F\u306F\u300C\u30B7\u30D5\u30C8\u4F5C\u6210\u300D\u30DC\u30BF\u30F3\u304B\u3089\u884C\u3048\u307E\u3059\u3002"],
        src: ["https://ks-icons.s3.ap-northeast-1.amazonaws.com/p1.png", "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s1.png"]
      },
      {
        title: "\u5E74\u6708\u9078\u629E",
        text: ["\u4F5C\u6210\u3059\u308B\u30B7\u30D5\u30C8\u306E\u5E74\u6708\u3092\u9078\u629E\u3057\u3001\u300C\u5404\u7A2E\u78BA\u8A8D\u300D\u30DC\u30BF\u30F3\u3088\u308A\u6B21\u306E\u753B\u9762\u3078\u304A\u9032\u307F\u304F\u3060\u3055\u3044\u3002"],
        src: ["https://ks-icons.s3.ap-northeast-1.amazonaws.com/p2.png", "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s2.png"]
      },
      {
        title: "\u5404\u60C5\u5831\u78BA\u8A8D",
        text: [
          `
            \u8868\u793A\u3057\u3066\u3044\u308B\u5F93\u696D\u54E1\u60C5\u5831\u30FB\u52E4\u52D9\u6642\u9593\u5E2F\u306E\u60C5\u5831\u3092\u78BA\u8A8D\u3057\u3001\u554F\u984C\u306A\u3051\u308C\u3070\u300C\u81EA\u52D5\u751F\u6210\u300D\u30DC\u30BF\u30F3\u3067\u6B21\u306E\u753B\u9762\u3078\u304A\u9032\u307F\u304F\u3060\u3055\u3044\u3002
            \u5F93\u696D\u54E1\u3068\u52E4\u52D9\u6642\u9593\u5E2F\u3092\u7DE8\u96C6\u3059\u308B\u5834\u5408\u306F\u300C\u5404\u7A2E\u7DE8\u96C6\u300D\u30DC\u30BF\u30F3\u304B\u3089\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002
          `
        ],
        src: ["https://ks-icons.s3.ap-northeast-1.amazonaws.com/p3.png", "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s3.png"]
      },
      {
        title: "\u30B7\u30D5\u30C8\u64CD\u4F5C\u8AAC\u660E",
        text: [
          `
            \u30B7\u30D5\u30C8\u4F5C\u6210\u753B\u9762\u3067\u306F3\u3064\u306ESTEP\u3067\u5165\u529B\u3057\u3066\u304D\u307E\u3059\u3002
            STEP1(\u4F11\u6687\u7B49\u624B\u52D5\u5165\u529B)->STEP2(\u81EA\u52D5\u751F\u6210)->STEP3(\u624B\u52D5\u8ABF\u6574)\u3067\u30B7\u30D5\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002
            \u5F53\u6BB5\u843D\u3067\u306F\u5404\u8868\u793A\u30D1\u30FC\u30C4\u306E\u8AAC\u660E\u306B\u306A\u308A\u307E\u3059\u3002
            \u30FB\u300C\u64CD\u4F5C\u624B\u9806\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u73FE\u5728\u306E\u5165\u529B\u3059\u308B\u60C5\u5831\u3001\u624B\u9806\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002
          `,
          "\u30FB[\u5404\u5F93\u696D\u54E1 / \u65E5]\u30A8\u30EA\u30A2\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30B7\u30D5\u30C8\u3092\u5165\u529B\u3067\u304D\u307E\u3059\u3002",
          "\u30FB[\u65E5]\u30A8\u30EA\u30A2\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u5168\u5F93\u696D\u306E\u8A72\u5F53\u65E5\u306E\u30B7\u30D5\u30C8\u3092\u4E00\u62EC\u5165\u529B\u3067\u304D\u307E\u3059\u3002",
          "\u30FB\u305D\u308C\u305E\u308C\u5404\u65E5\u306E\u5408\u8A08\u52E4\u52D9\u4EBA\u6570\u3001\u5404\u5F93\u696D\u54E1\u306E\u6708\u5408\u8A08\u52E4\u52D9\u6570\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002\u5404\u5F93\u696D\u54E1\u306E\u6708\u5408\u8A08\u52E4\u52D9\u6570\u306FPC\u7248\u3067\u306F\u300C\u958B\u304F\u300D\u300C\u9589\u3058\u308B\u300D\u30DC\u30BF\u30F3\u3067\u958B\u9589\u3067\u304D\u307E\u3059\u3002",
          "\u30FB\u300C\u4E2D\u65AD / \u4E00\u6642\u4FDD\u5B58\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B7\u30D5\u30C8\u306E\u7834\u68C4\u3082\u3057\u304F\u306F\u4E00\u6642\u4FDD\u5B58\u304C\u3067\u304D\u307E\u3059\u3002"
        ],
        src: [
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p6.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s6.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p4.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s4.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p5.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s5.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p7.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s7.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p10.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s10.png"
        ]
      },
      {
        title: "\u624B\u52D5\u5165\u529B(STEP1)",
        text: [
          `
            STEP1\u3067\u306F\u4E8B\u524D\u306B\u78BA\u5B9A\u3057\u3066\u3044\u308B\u51FA\u52E4\u60C5\u5831\u3084\u4F11\u6687\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002
            \u624B\u52D5\u5165\u529B\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3089\u3001\u300C\u6B21\u3078\u300D\u30DC\u30BF\u30F3\u3067STEP2\u3078\u9032\u307F\u307E\u3059\u3002
            \u300C\u4E00\u62EC\u30EA\u30BB\u30C3\u30C8\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068STEP1\u3067\u5165\u529B\u3057\u305F\u60C5\u5831\u3092\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002
          `
        ],
        src: ["https://ks-icons.s3.ap-northeast-1.amazonaws.com/p4.png", "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s4.png"]
      },
      {
        title: "\u81EA\u52D5\u5165\u529B(STEP2)",
        text: [
          `
            STEP2\u3067\u306F\u300C\u81EA\u52D5\u751F\u6210\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u7A7A\u6B04\u306B\u306A\u3063\u3066\u3044\u308B\u7B87\u6240\u3092\u81EA\u52D5\u3067\u57CB\u3081\u3066\u3044\u304D\u307E\u3059\u3002
            \u6761\u4EF6\u306B\u5F53\u3066\u306F\u307E\u308B\u52E4\u52D9\u6642\u9593\u5E2F\u3092\u30E9\u30F3\u30C0\u30E0\u306B\u5165\u529B\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u81EA\u52D5\u751F\u6210\u5F8C\u3082\u300C\u81EA\u52D5\u751F\u6210\u300D\u30DC\u30BF\u30F3\u3092\u518D\u5EA6\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u7570\u306A\u308B\u30B7\u30D5\u30C8\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002
            \u81EA\u52D5\u751F\u6210\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3089\u300C\u6B21\u3078\u300D\u30DC\u30BF\u30F3\u3067STEP3\u3078\u9032\u307F\u307E\u3059\u3002
            \u81EA\u52D5\u751F\u6210\u3067\u306F\u4EE5\u4E0B\u306E\u6761\u4EF6\u3067\u5165\u529B\u3055\u308C\u307E\u3059\u3002
            1. \u5E0C\u671B\u4F11 + \u4F11 \u3092\u5408\u308F\u305B\u3066\u6708\u30678\u65E5\u306B\u306A\u308B\u3088\u3046\u306B\u5165\u529B\u3055\u308C\u307E\u3059\u3002
            2. \u5404\u5F93\u696D\u54E1\u304C\u52E4\u52D9\u53EF\u80FD\u306A\u52E4\u52D9\u6642\u9593\u5E2F\u306E\u4E2D\u304B\u3089\u3001\u5404\u65E5\u5FC5\u8981\u4EBA\u6570\u306B\u9054\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002
            \u203B\u6CE8\u610F\u4E8B\u9805
            \u3000\u30FB\u5F93\u696D\u54E1\u60C5\u5831\u30FB\u52E4\u52D9\u6642\u9593\u5E2F\u60C5\u5831\u306B\u3088\u3063\u3066\u306F\u5FC5\u8981\u6700\u4F4E\u4EBA\u6570\u306B\u9054\u3057\u306A\u3044\u3001\u4F11\u6687\u304C8\u65E5\u306B\u6E80\u305F\u306A\u3044\u5834\u5408\u306F\u3042\u308A\u307E\u3059\u3002
            \u3000\u30FB\u6761\u4EF6\u306B\u5F53\u3066\u306F\u307E\u3089\u306A\u3044\u7B87\u6240\u306F\u7A7A\u6B04\u306E\u307E\u307E\u306B\u306A\u308A\u307E\u3059\u3002
          `
        ],
        src: ["https://ks-icons.s3.ap-northeast-1.amazonaws.com/p8.png", "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s8.png"]
      },
      {
        title: "\u8ABF\u6574(STEP3)",
        text: [
          `
            STEP3\u3067\u306F\u7A7A\u6B04\u90E8\u5206\u3092\u624B\u52D5\u5165\u529B\u3001\u81EA\u52D5\u751F\u6210\u3055\u308C\u305F\u30B7\u30D5\u30C8\u3092\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002
            \u300C\u7A7A\u6B04\u4F11\u6687\u57CB\u3081\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u7A7A\u6B04\u90E8\u5206\u304C\u4E00\u62EC\u3067\u300C\u4F11\u300D\u306B\u306A\u308A\u307E\u3059\u3002
            \u300C\u30EA\u30BB\u30C3\u30C8\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068STEP3\u3067\u5165\u529B\u30FB\u5909\u66F4\u3057\u305F\u30B7\u30D5\u30C8\u306E\u307F\u304C\u5165\u529B\u3055\u308C\u307E\u3059\u3002
            \u300C\u30B7\u30D5\u30C8\u540D\u300D\u3092\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3078\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002
            \u5168\u3066\u5165\u529B\u3057\u7D42\u308F\u308A\u307E\u3057\u305F\u3089\u300C\u4F5C\u6210\u5B8C\u4E86\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30B7\u30D5\u30C8\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002
          `
        ],
        src: ["https://ks-icons.s3.ap-northeast-1.amazonaws.com/p9.png", "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s9.png"]
      }
    ]
  },
  {
    title: "\u4F5C\u6210\u6E08\u30B7\u30D5\u30C8",
    contents: [
      {
        title: "\u30B7\u30D5\u30C8\u78BA\u8A8D",
        text: [
          `
            \u4F5C\u6210 / \u4E00\u6642\u4FDD\u5B58\u3057\u305F\u30B7\u30D5\u30C8\u306F\u3001\u30B7\u30D5\u30C8\u4E00\u89A7\u753B\u9762\u3088\u308A\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002
            \u9078\u629E\u3059\u308B\u3068\u8A72\u5F53\u6708\u306E\u30B7\u30D5\u30C8\u4E00\u89A7\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002
            \u30B7\u30D5\u30C8\u540D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u4F5C\u6210\u3057\u305F\u30B7\u30D5\u30C8\u306E\u8A73\u7D30\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002
          `,
          "",
          "\u4F5C\u6210\u6E08\u30B7\u30D5\u30C8\u306E\u8A73\u7D30\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
          "\u4E00\u6642\u4FDD\u5B58\u30B7\u30D5\u30C8\u306E\u8A73\u7D30\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"
        ],
        src: [
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p14.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s14.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p11.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s11.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p12.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s12.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p13.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s13.png"
        ]
      },
      {
        title: "\u30B7\u30D5\u30C8\u7DE8\u96C6",
        text: [
          `
            \u4F5C\u6210\u6E08\u306E\u30B7\u30D5\u30C8\u8A73\u7D30\u304B\u3089\u3001\u300C\u7DE8\u96C6\u300D\u3082\u3057\u304F\u306F\u300C\u8907\u88FD\u7DE8\u96C6\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3067\u30B7\u30D5\u30C8\u306E\u7DE8\u96C6\u304C\u3067\u304D\u307E\u3059\u3002
            \u300C\u7DE8\u96C6\u300D\u3067\u306F\u4F5C\u6210\u6E08\u30B7\u30D5\u30C8\u306B\u4E0A\u66F8\u304D\u4FDD\u5B58\u3055\u308C\u3001\u300C\u8907\u88FD\u7DE8\u96C6\u300D\u3067\u306F\u5225\u30B7\u30D5\u30C8\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002
          `,
          `
            \u7DE8\u96C6\u753B\u9762\u3067\u306F\u300C\u30EA\u30BB\u30C3\u30C8\u300D\u300C\u81EA\u52D5\u751F\u6210\u300D\u300C\u7A7A\u6B04\u4F11\u6687\u57CB\u3081\u300D\u300C\u7DE8\u96C6\u78BA\u5B9A\u300D\u30DC\u30BF\u30F3\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002
            \u300C\u30EA\u30BB\u30C3\u30C8\u300D\u30DC\u30BF\u30F3\u306F\u30B7\u30D5\u30C8\u306E\u5185\u5BB9\u304C\u5168\u3066\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002
            \u300C\u81EA\u52D5\u751F\u6210\u300D\u30DC\u30BF\u30F3\u306F\u30B7\u30D5\u30C8\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u3066\u304B\u3089\u81EA\u52D5\u751F\u6210\u3055\u308C\u307E\u3059\u3002
            \u300C\u7A7A\u6B04\u4F11\u6687\u57CB\u3081\u300D\u30DC\u30BF\u30F3\u306F\u7A7A\u6B04\u304C\u5168\u3066\u300C\u4F11\u300D\u306B\u306A\u308A\u307E\u3059\u3002
            \u300C\u7DE8\u96C6\u78BA\u5B9A\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u5909\u66F4\u5185\u5BB9\u304C\u53CD\u6620\u3055\u308C\u307E\u3059\u3002
          `
        ],
        src: [
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p12.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s12.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p15.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s15.png"
        ]
      },
      {
        title: "\u30A8\u30AF\u30BB\u30EB\u51FA\u529B",
        text: [
          `
            \u4F5C\u6210\u6E08\u306E\u30B7\u30D5\u30C8\u8A73\u7D30\u304B\u3089\u300C\u30A8\u30AF\u30BB\u30EB\u51FA\u529B\u300D\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8868\u793A\u3057\u3066\u3044\u308B\u30B7\u30D5\u30C8\u304C\u8A18\u8F09\u3055\u308C\u305F\u30A8\u30AF\u30BB\u30EB\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059\u3002
          `,
          `
            \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305F\u30A8\u30AF\u30BB\u30EB\u30D5\u30A1\u30A4\u30EB\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002
          `
        ],
        src: [
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p16.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/s16.png",
          "https://ks-icons.s3.ap-northeast-1.amazonaws.com/p17.png"
        ]
      }
    ]
  },
  {
    title: "\u305D\u306E\u4ED6",
    contents: [
      {
        title: "\u5404\u7A2E\u5909\u66F4",
        text: [
          `
            \u5F53\u30B5\u30FC\u30D3\u30B9\u3067\u306F\u65B0\u898F\u767B\u9332\u6642\u306E\u60C5\u5831\u306F\u5909\u66F4\u3067\u304D\u306A\u304F\u306A\u3063\u3066\u3044\u307E\u3059\u3002
          `
        ],
        src: [""]
      },
      {
        title: "\u9000\u4F1A",
        text: [
          `
            \u9000\u4F1A\u306F\u30DE\u30A4\u30DA\u30FC\u30B8\u3088\u308A\u306E\u300C\u9000\u4F1A\u306F\u3053\u3061\u3089\u304B\u3089 > \u300D\u30DC\u30BF\u30F3\u3088\u308A\u884C\u3048\u307E\u3059\u3002
            \u9000\u4F1A\u3059\u308B\u3068\u5F53\u30B5\u30A4\u30C8\u306B\u304A\u3051\u308B\u5168\u3066\u306E\u30C7\u30FC\u30BF\u304C\u524A\u9664\u3055\u308C\u3001\u623B\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u306E\u3067\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002
          `
        ],
        src: [""]
      },
      {
        title: "\u304A\u554F\u3044\u5408\u308F\u305B",
        text: [
          `
            \u5F53\u30B5\u30A4\u30C8\u3067\u306F\u304A\u554F\u3044\u5408\u308F\u305B\u7A93\u53E3\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u305B\u3093\u3002
            \u5F8C\u65E5\u5BFE\u5FDC\u4E88\u5B9A\u3067\u3059\u306E\u3067\u4ECA\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002
          `
        ],
        src: [""]
      }
    ]
  }
];

// app/routes/manual.tsx
var import_react47 = require("react");

// app/components/ToTopButton.tsx
var import_react46 = require("react"), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), ToTopButton = ({ scrollToElementRef }) => {
  let scrollToBottomOfList = (0, import_react46.useCallback)(() => {
    scrollToElementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [scrollToElementRef]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
    "div",
    {
      className: "bg-[#888] rounded-full fixed right-10 bottom-10 flex justify-center items-center w-12 h-12 z-[9998] shadow-md flex-col hover:noPhone:scale-125 trans30 cursor-pointer active:sm:scale-125",
      onClick: scrollToBottomOfList,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "relative flex justify-center items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-white text-lg font-bold absolute top-[-22px]", children: "\u2191" }, void 0, !1, {
          fileName: "app/components/ToTopButton.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-white text-base font-semibold absolute bottom-[-19px]", children: "Top" }, void 0, !1, {
          fileName: "app/components/ToTopButton.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ToTopButton.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ToTopButton.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};

// app/routes/manual.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function Index11() {
  let scrollRef = (0, import_react47.useRef)(null), CardSection = ({ i, title, text, src }) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "cardSection", id: title, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "cardNumber", children: i }, void 0, !1, {
      fileName: "app/routes/manual.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "font-semibold text-primary-text mb-1", children: title }, void 0, !1, {
      fileName: "app/routes/manual.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    text.map((v, i2) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: `${i2 > 0 && "mt-4"} text-[555] mb-1 sm:text-sm`, children: v.split(`
`).map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { children: l }, l, !1, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this)) }, i2, !1, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "flex sm:hidden", children: [
        src[i2 * 2 + 1] && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: src[i2 * 2 + 1], alt: `SP\u8AAC\u660E\u753B\u50CF${i2}`, className: "sm:w-full w-[22%] object-contain rounded-md border-2" }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        src[i2 * 2] && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          "img",
          {
            src: src[i2 * 2],
            alt: `PC\u8AAC\u660E\u753B\u50CF${i2}`,
            className: `sm:w-full w-[78%] object-contain rounded-md border-2 ${!src[i2 * 2 + 1] && "w-[100%]"}`
          },
          void 0,
          !1,
          {
            fileName: "app/routes/manual.tsx",
            lineNumber: 31,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "hidden sm:block", children: [
        src[i2 * 2 + 1] && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Accordion, { label: "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: src[i2 * 2 + 1], alt: `SP\u8AAC\u660E\u753B\u50CF${i2}`, className: "sm:w-full w-[22%] object-contain rounded-md border-2" }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "m-1" }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        src[i2 * 2] && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Accordion, { label: "\u30D1\u30BD\u30B3\u30F3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: src[i2 * 2], alt: `PC\u8AAC\u660E\u753B\u50CF${i2}`, className: "sm:w-full w-[78%] object-contain rounded-md border-2" }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/manual.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this))
  ] }, void 0, !0, {
    fileName: "app/routes/manual.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-full flex flex-col items-center justify-around p-2 sm:p-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-full flex flex-col items-start text-primary-text text-base sm:text-xs", id: "top", ref: scrollRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Title, { currentText: "\u64CD\u4F5C\u8AAC\u660E" }, void 0, !1, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mt-2 p-4 border-2 rounded-md w-full flex mb-3 justify-around sm:p-1", children: tableOfContents.map((tableOfContent, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "p-4 underline sm:p-2 shadow-md w-1/3 mx-1 sm:mx-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "font-semibold text-lg sm:text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_anchor_link_smooth_scroll.default, { href: `#${tableOfContent.title}`, children: tableOfContent.title }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "w-full border-b-2 border-dashed border-primary-dark" }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "pl-2 flex flex-col text-[#888]", children: tableOfContent.contents.map((content) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mt-2 sm:mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_anchor_link_smooth_scroll.default, { href: `#${content}`, children: content }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this) }, content, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this)) }, void 0, !1, {
          fileName: "app/routes/manual.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, i, !0, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/manual.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    manuals.map((manual) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { id: manual.title, className: "cardContainer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "cardTitle", children: manual.title }, void 0, !1, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      manual.contents.map((manual2, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(CardSection, { i: i + 1, title: manual2.title, text: manual2.text, src: manual2.src }, i, !1, {
        fileName: "app/routes/manual.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this))
    ] }, manual.title, !0, {
      fileName: "app/routes/manual.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ToTopButton, { scrollToElementRef: scrollRef }, void 0, !1, {
      fileName: "app/routes/manual.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/manual.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/mypage.tsx
var mypage_exports = {};
__export(mypage_exports, {
  default: () => Index12
});
var import_react48 = require("react"), import_react49 = require("@remix-run/react"), import_react_hot_toast7 = require("react-hot-toast"), import_client6 = require("@apollo/client");
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), ModalContent2 = ({ setOpen }) => {
  let [auth, setAuth] = (0, import_react48.useState)(null);
  (0, import_react48.useEffect)(() => {
    typeof window > "u" || (async () => {
      let { getAuth } = await import("firebase/auth");
      setAuth(getAuth());
    })();
  }, []);
  let { recoilUser, setRecoilUser } = useUserRecoil(), [checkedExit, setCheck] = (0, import_react48.useState)(!1), navigate = (0, import_react49.useNavigate)(), { setRecoilLoad } = useLoadRecoil(), [deleteHasuraUser] = (0, import_client6.useMutation)(deleteUser);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex w-full flex-col items-center text-[#555]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { className: "text-lg font-bold text-black", children: "\u9000\u4F1A\u3057\u307E\u3059\u304C\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F" }, void 0, !1, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "my-6 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "flex mt-3", children: "\u9000\u4F1A\u3059\u308B\u5834\u5408\u306F\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u306B\u30C1\u30A7\u30C3\u30AF\u306E\u4E0A\u3001 \u7834\u68C4\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044" }, void 0, !1, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex flex-col items-center ml-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
          CheckBox,
          {
            checked: checkedExit,
            onChange: (e) => e.target.id === "\u9000\u4F1A\u3059\u308B" && e.target.checked ? setCheck(!0) : setCheck(!1),
            label: "\u9000\u4F1A\u3059\u308B",
            className: "mb-2"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/mypage.tsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Button, { text: "\u9000\u4F1A", onClick: async () => {
          setOpen(!1), setRecoilLoad(!0);
          let { deleteUser: deleteUser2 } = await import("firebase/auth");
          await deleteUser2(auth.currentUser).then(async () => {
            deleteHasuraUser({ variables: { uuid: recoilUser == null ? void 0 : recoilUser.uid } }), import_react_hot_toast7.toast.success("\u9000\u4F1A\u3057\u307E\u3057\u305F\u3002"), setRecoilUser(void 0), navigate("/login");
          }).catch((e) => {
            console.log(e), import_react_hot_toast7.toast.error("\u9000\u4F1A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");
          }), setRecoilLoad(!1);
        }, color: "secondary", disabled: !checkedExit }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/mypage.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
};
function Index12() {
  let { recoilUser } = useUserRecoil();
  console.log("recoilUser:", recoilUser);
  let { ConfirmModal, openLogoutModal } = useLogout(), [isOpen, setOpen] = (0, import_react48.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full flex flex-col items-center justify-around max-w-[800px] bg-white rounded-md p-5 sm:px-2 sm:py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Title, { currentText: "\u30DE\u30A4\u30DA\u30FC\u30B8" }, void 0, !1, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "border w-full flex p-2 flex-col rounded-r-md text-base mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: "text-lg text-[#555] mb-2", children: "\u57FA\u672C\u60C5\u5831" }, void 0, !1, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full flex items-baseline border-b border-dashed border-primary-dark mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "w-[40%] text-sm text-[#777]", children: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9" }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "w-[60%] text-primary-text", children: recoilUser == null ? void 0 : recoilUser.email }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full flex items-baseline border-b border-dashed border-primary-dark mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "w-[40%] text-sm text-[#777]", children: "\u30E6\u30FC\u30B6\u30FC\u540D" }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "w-[60%] text-primary-text", children: recoilUser == null ? void 0 : recoilUser.name }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "w-full flex items-baseline border-b border-dashed border-primary-dark mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "w-[40%] text-sm text-[#777]", children: "\u767B\u9332\u65E5" }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "w-[60%] text-primary-text", children: (recoilUser == null ? void 0 : recoilUser.createdAt) && new Date(recoilUser == null ? void 0 : recoilUser.createdAt).toLocaleString().split(" ")[0] }, void 0, !1, {
          fileName: "app/routes/mypage.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mt-5 flex items-end w-full flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "mr-4 text-[#888] underline hover:opacity-80 cursor-pointer mt-2", onClick: openLogoutModal, children: [
        "\u30ED\u30B0\u30A2\u30A6\u30C8 ",
        ">"
      ] }, void 0, !0, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "mr-4 text-[#888] underline hover:opacity-80 cursor-pointer mt-2 mb-2", onClick: () => setOpen(!0), children: [
        "\u9000\u4F1A\u3059\u308B\u5834\u5408\u306F\u3053\u3061\u3089\u304B\u3089 ",
        ">"
      ] }, void 0, !0, {
        fileName: "app/routes/mypage.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ConfirmModal, {}, void 0, !1, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Modal, { isOpen, setOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(ModalContent2, { setOpen }, void 0, !1, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/mypage.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/mypage.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/policy.tsx
var policy_exports = {};
__export(policy_exports, {
  default: () => Index13
});

// app/utils/policy.json
var policy_default = [
  { type: "title", text: "\u7B2C1\u6761\uFF08\u500B\u4EBA\u60C5\u5831\uFF09" },
  {
    type: "text",
    text: "\u300C\u500B\u4EBA\u60C5\u5831\u300D\u3068\u306F\uFF0C\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u306B\u3044\u3046\u300C\u500B\u4EBA\u60C5\u5831\u300D\u3092\u6307\u3059\u3082\u306E\u3068\u3057\uFF0C\u751F\u5B58\u3059\u308B\u500B\u4EBA\u306B\u95A2\u3059\u308B\u60C5\u5831\u3067\u3042\u3063\u3066\uFF0C\u5F53\u8A72\u60C5\u5831\u306B\u542B\u307E\u308C\u308B\u6C0F\u540D\uFF0C\u751F\u5E74\u6708\u65E5\uFF0C\u4F4F\u6240\uFF0C\u96FB\u8A71\u756A\u53F7\uFF0C\u9023\u7D61\u5148\u305D\u306E\u4ED6\u306E\u8A18\u8FF0\u7B49\u306B\u3088\u308A\u7279\u5B9A\u306E\u500B\u4EBA\u3092\u8B58\u5225\u3067\u304D\u308B\u60C5\u5831\u53CA\u3073\u5BB9\u8C8C\uFF0C\u6307\u7D0B\uFF0C\u58F0\u7D0B\u306B\u304B\u304B\u308B\u30C7\u30FC\u30BF\uFF0C\u53CA\u3073\u5065\u5EB7\u4FDD\u967A\u8A3C\u306E\u4FDD\u967A\u8005\u756A\u53F7\u306A\u3069\u306E\u5F53\u8A72\u60C5\u5831\u5358\u4F53\u304B\u3089\u7279\u5B9A\u306E\u500B\u4EBA\u3092\u8B58\u5225\u3067\u304D\u308B\u60C5\u5831\uFF08\u500B\u4EBA\u8B58\u5225\u60C5\u5831\uFF09\u3092\u6307\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C2\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u306E\u53CE\u96C6\u65B9\u6CD5\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u30E6\u30FC\u30B6\u30FC\u304C\u5229\u7528\u767B\u9332\u3092\u3059\u308B\u969B\u306B\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u304A\u5C0B\u306D\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C3\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u3092\u53CE\u96C6\u30FB\u5229\u7528\u3059\u308B\u76EE\u7684\uFF09" },
  { type: "text", text: "\u7BA1\u7406\u8005\u304C\u500B\u4EBA\u60C5\u5831\u3092\u53CE\u96C6\u30FB\u5229\u7528\u3059\u308B\u76EE\u7684\u306F\uFF0C\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002" },
  { type: "text", text: "\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u30FB\u904B\u55B6\u306E\u305F\u3081" },
  { type: "text", text: "\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\uFF0C\u91CD\u8981\u306A\u304A\u77E5\u3089\u305B\u306A\u3069\u5FC5\u8981\u306B\u5FDC\u3058\u305F\u3054\u9023\u7D61\u306E\u305F\u3081" },
  {
    type: "text",
    text: "\u5229\u7528\u898F\u7D04\u306B\u9055\u53CD\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u3084\uFF0C\u4E0D\u6B63\u30FB\u4E0D\u5F53\u306A\u76EE\u7684\u3067\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3057\u3088\u3046\u3068\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u7279\u5B9A\u3092\u3057\uFF0C\u3054\u5229\u7528\u3092\u304A\u65AD\u308A\u3059\u308B\u305F\u3081"
  },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u306B\u3054\u81EA\u8EAB\u306E\u767B\u9332\u60C5\u5831\u306E\u95B2\u89A7\u3084\u5909\u66F4\uFF0C\u524A\u9664\uFF0C\u3054\u5229\u7528\u72B6\u6CC1\u306E\u95B2\u89A7\u3092\u884C\u3063\u3066\u3044\u305F\u3060\u304F\u305F\u3081"
  },
  { type: "text", text: "\u4E0A\u8A18\u306E\u5229\u7528\u76EE\u7684\u306B\u4ED8\u968F\u3059\u308B\u76EE\u7684" },
  { type: "title", text: "\u7B2C4\u6761\uFF08\u5229\u7528\u76EE\u7684\u306E\u5909\u66F4\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u5229\u7528\u76EE\u7684\u304C\u5909\u66F4\u524D\u3068\u95A2\u9023\u6027\u3092\u6709\u3059\u308B\u3068\u5408\u7406\u7684\u306B\u8A8D\u3081\u3089\u308C\u308B\u5834\u5408\u306B\u9650\u308A\uFF0C\u500B\u4EBA\u60C5\u5831\u306E\u5229\u7528\u76EE\u7684\u3092\u5909\u66F4\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u5229\u7528\u76EE\u7684\u306E\u5909\u66F4\u3092\u884C\u3063\u305F\u5834\u5408\u306B\u306F\uFF0C\u5909\u66F4\u5F8C\u306E\u76EE\u7684\u306B\u3064\u3044\u3066\uFF0C\u7BA1\u7406\u8005\u6240\u5B9A\u306E\u65B9\u6CD5\u306B\u3088\u308A\uFF0C\u30E6\u30FC\u30B6\u30FC\u306B\u901A\u77E5\u3057\uFF0C\u307E\u305F\u306F\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u4E0A\u306B\u516C\u8868\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C5\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u306E\u7B2C\u4E09\u8005\u63D0\u4F9B\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u6B21\u306B\u63B2\u3052\u308B\u5834\u5408\u3092\u9664\u3044\u3066\uFF0C\u3042\u3089\u304B\u3058\u3081\u30E6\u30FC\u30B6\u30FC\u306E\u540C\u610F\u3092\u5F97\u308B\u3053\u3068\u306A\u304F\uFF0C\u7B2C\u4E09\u8005\u306B\u500B\u4EBA\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u305F\u3060\u3057\uFF0C\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u3067\u8A8D\u3081\u3089\u308C\u308B\u5834\u5408\u3092\u9664\u304D\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u4EBA\u306E\u751F\u547D\uFF0C\u8EAB\u4F53\u307E\u305F\u306F\u8CA1\u7523\u306E\u4FDD\u8B77\u306E\u305F\u3081\u306B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3067\u3042\u3063\u3066\uFF0C\u672C\u4EBA\u306E\u540C\u610F\u3092\u5F97\u308B\u3053\u3068\u304C\u56F0\u96E3\u3067\u3042\u308B\u3068\u304D"
  },
  {
    type: "text",
    text: "\u516C\u8846\u885B\u751F\u306E\u5411\u4E0A\u307E\u305F\u306F\u5150\u7AE5\u306E\u5065\u5168\u306A\u80B2\u6210\u306E\u63A8\u9032\u306E\u305F\u3081\u306B\u7279\u306B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3067\u3042\u3063\u3066\uFF0C\u672C\u4EBA\u306E\u540C\u610F\u3092\u5F97\u308B\u3053\u3068\u304C\u56F0\u96E3\u3067\u3042\u308B\u3068\u304D"
  },
  {
    type: "text",
    text: "\u56FD\u306E\u6A5F\u95A2\u3082\u3057\u304F\u306F\u5730\u65B9\u516C\u5171\u56E3\u4F53\u307E\u305F\u306F\u305D\u306E\u59D4\u8A17\u3092\u53D7\u3051\u305F\u8005\u304C\u6CD5\u4EE4\u306E\u5B9A\u3081\u308B\u4E8B\u52D9\u3092\u9042\u884C\u3059\u308B\u3053\u3068\u306B\u5BFE\u3057\u3066\u5354\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3067\u3042\u3063\u3066\uFF0C\u672C\u4EBA\u306E\u540C\u610F\u3092\u5F97\u308B\u3053\u3068\u306B\u3088\u308A\u5F53\u8A72\u4E8B\u52D9\u306E\u9042\u884C\u306B\u652F\u969C\u3092\u53CA\u307C\u3059\u304A\u305D\u308C\u304C\u3042\u308B\u3068\u304D"
  },
  {
    type: "text",
    text: "\u4E88\u3081\u6B21\u306E\u4E8B\u9805\u3092\u544A\u77E5\u3042\u308B\u3044\u306F\u516C\u8868\u3057\uFF0C\u304B\u3064\u7BA1\u7406\u8005\u304C\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u59D4\u54E1\u4F1A\u306B\u5C4A\u51FA\u3092\u3057\u305F\u3068\u304D"
  },
  { type: "text", text: "\u5229\u7528\u76EE\u7684\u306B\u7B2C\u4E09\u8005\u3078\u306E\u63D0\u4F9B\u3092\u542B\u3080\u3053\u3068" },
  { type: "text", text: "\u7B2C\u4E09\u8005\u306B\u63D0\u4F9B\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306E\u9805\u76EE" },
  { type: "text", text: "\u7B2C\u4E09\u8005\u3078\u306E\u63D0\u4F9B\u306E\u624B\u6BB5\u307E\u305F\u306F\u65B9\u6CD5" },
  { type: "text", text: "\u672C\u4EBA\u306E\u6C42\u3081\u306B\u5FDC\u3058\u3066\u500B\u4EBA\u60C5\u5831\u306E\u7B2C\u4E09\u8005\u3078\u306E\u63D0\u4F9B\u3092\u505C\u6B62\u3059\u308B\u3053\u3068" },
  { type: "text", text: "\u672C\u4EBA\u306E\u6C42\u3081\u3092\u53D7\u3051\u4ED8\u3051\u308B\u65B9\u6CD5" },
  {
    type: "text",
    text: "\u524D\u9805\u306E\u5B9A\u3081\u306B\u304B\u304B\u308F\u3089\u305A\uFF0C\u6B21\u306B\u63B2\u3052\u308B\u5834\u5408\u306B\u306F\uFF0C\u5F53\u8A72\u60C5\u5831\u306E\u63D0\u4F9B\u5148\u306F\u7B2C\u4E09\u8005\u306B\u8A72\u5F53\u3057\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u304C\u5229\u7528\u76EE\u7684\u306E\u9054\u6210\u306B\u5FC5\u8981\u306A\u7BC4\u56F2\u5185\u306B\u304A\u3044\u3066\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u6271\u3044\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u3092\u59D4\u8A17\u3059\u308B\u5834\u5408"
  },
  { type: "text", text: "\u5408\u4F75\u305D\u306E\u4ED6\u306E\u4E8B\u7531\u306B\u3088\u308B\u4E8B\u696D\u306E\u627F\u7D99\u306B\u4F34\u3063\u3066\u500B\u4EBA\u60C5\u5831\u304C\u63D0\u4F9B\u3055\u308C\u308B\u5834\u5408" },
  {
    type: "text",
    text: "\u500B\u4EBA\u60C5\u5831\u3092\u7279\u5B9A\u306E\u8005\u3068\u306E\u9593\u3067\u5171\u540C\u3057\u3066\u5229\u7528\u3059\u308B\u5834\u5408\u3067\u3042\u3063\u3066\uFF0C\u305D\u306E\u65E8\u4E26\u3073\u306B\u5171\u540C\u3057\u3066\u5229\u7528\u3055\u308C\u308B\u500B\u4EBA\u60C5\u5831\u306E\u9805\u76EE\uFF0C\u5171\u540C\u3057\u3066\u5229\u7528\u3059\u308B\u8005\u306E\u7BC4\u56F2\uFF0C\u5229\u7528\u3059\u308B\u8005\u306E\u5229\u7528\u76EE\u7684\u304A\u3088\u3073\u5F53\u8A72\u500B\u4EBA\u60C5\u5831\u306E\u7BA1\u7406\u306B\u3064\u3044\u3066\u8CAC\u4EFB\u3092\u6709\u3059\u308B\u8005\u306E\u6C0F\u540D\u307E\u305F\u306F\u540D\u79F0\u306B\u3064\u3044\u3066\uFF0C\u3042\u3089\u304B\u3058\u3081\u672C\u4EBA\u306B\u901A\u77E5\u3057\uFF0C\u307E\u305F\u306F\u672C\u4EBA\u304C\u5BB9\u6613\u306B\u77E5\u308A\u5F97\u308B\u72B6\u614B\u306B\u7F6E\u3044\u305F\u5834\u5408"
  },
  { type: "title", text: "\u7B2C6\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u4EBA\u304B\u3089\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\u3092\u6C42\u3081\u3089\u308C\u305F\u3068\u304D\u306F\uFF0C\u672C\u4EBA\u306B\u5BFE\u3057\uFF0C\u9045\u6EDE\u306A\u304F\u3053\u308C\u3092\u958B\u793A\u3057\u307E\u3059\u3002\u305F\u3060\u3057\uFF0C\u958B\u793A\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u6B21\u306E\u3044\u305A\u308C\u304B\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408\u306F\uFF0C\u305D\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u3092\u958B\u793A\u3057\u306A\u3044\u3053\u3068\u3082\u3042\u308A\uFF0C\u958B\u793A\u3057\u306A\u3044\u6C7A\u5B9A\u3092\u3057\u305F\u5834\u5408\u306B\u306F\uFF0C\u305D\u306E\u65E8\u3092\u9045\u6EDE\u306A\u304F\u901A\u77E5\u3057\u307E\u3059\u3002\u306A\u304A\uFF0C\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\u306B\u969B\u3057\u3066\u306F\uFF0C1\u4EF6\u3042\u305F\u308A1,000\u5186\u306E\u624B\u6570\u6599\u3092\u7533\u3057\u53D7\u3051\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u672C\u4EBA\u307E\u305F\u306F\u7B2C\u4E09\u8005\u306E\u751F\u547D\uFF0C\u8EAB\u4F53\uFF0C\u8CA1\u7523\u305D\u306E\u4ED6\u306E\u6A29\u5229\u5229\u76CA\u3092\u5BB3\u3059\u308B\u304A\u305D\u308C\u304C\u3042\u308B\u5834\u5408"
  },
  { type: "text", text: "\u7BA1\u7406\u8005\u306E\u696D\u52D9\u306E\u9069\u6B63\u306A\u5B9F\u65BD\u306B\u8457\u3057\u3044\u652F\u969C\u3092\u53CA\u307C\u3059\u304A\u305D\u308C\u304C\u3042\u308B\u5834\u5408" },
  { type: "text", text: "\u305D\u306E\u4ED6\u6CD5\u4EE4\u306B\u9055\u53CD\u3059\u308B\u3053\u3068\u3068\u306A\u308B\u5834\u5408" },
  {
    type: "text",
    text: "\u524D\u9805\u306E\u5B9A\u3081\u306B\u304B\u304B\u308F\u3089\u305A\uFF0C\u5C65\u6B74\u60C5\u5831\u304A\u3088\u3073\u7279\u6027\u60C5\u5831\u306A\u3069\u306E\u500B\u4EBA\u60C5\u5831\u4EE5\u5916\u306E\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\uFF0C\u539F\u5247\u3068\u3057\u3066\u958B\u793A\u3044\u305F\u3057\u307E\u305B\u3093\u3002"
  },
  { type: "title", text: "\u7B2C7\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u306E\u8A02\u6B63\u304A\u3088\u3073\u524A\u9664\uFF09" },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u306F\uFF0C\u7BA1\u7406\u8005\u306E\u4FDD\u6709\u3059\u308B\u81EA\u5DF1\u306E\u500B\u4EBA\u60C5\u5831\u304C\u8AA4\u3063\u305F\u60C5\u5831\u3067\u3042\u308B\u5834\u5408\u306B\u306F\uFF0C\u7BA1\u7406\u8005\u304C\u5B9A\u3081\u308B\u624B\u7D9A\u304D\u306B\u3088\u308A\uFF0C\u7BA1\u7406\u8005\u306B\u5BFE\u3057\u3066\u500B\u4EBA\u60C5\u5831\u306E\u8A02\u6B63\uFF0C\u8FFD\u52A0\u307E\u305F\u306F\u524A\u9664\uFF08\u4EE5\u4E0B\uFF0C\u300C\u8A02\u6B63\u7B49\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u3092\u8ACB\u6C42\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u524D\u9805\u306E\u8ACB\u6C42\u3092\u53D7\u3051\u3066\u305D\u306E\u8ACB\u6C42\u306B\u5FDC\u3058\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u5224\u65AD\u3057\u305F\u5834\u5408\u306B\u306F\uFF0C\u9045\u6EDE\u306A\u304F\uFF0C\u5F53\u8A72\u500B\u4EBA\u60C5\u5831\u306E\u8A02\u6B63\u7B49\u3092\u884C\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u524D\u9805\u306E\u898F\u5B9A\u306B\u57FA\u3065\u304D\u8A02\u6B63\u7B49\u3092\u884C\u3063\u305F\u5834\u5408\uFF0C\u307E\u305F\u306F\u8A02\u6B63\u7B49\u3092\u884C\u308F\u306A\u3044\u65E8\u306E\u6C7A\u5B9A\u3092\u3057\u305F\u3068\u304D\u306F\u9045\u6EDE\u306A\u304F\uFF0C\u3053\u308C\u3092\u30E6\u30FC\u30B6\u30FC\u306B\u901A\u77E5\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C8\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u306E\u5229\u7528\u505C\u6B62\u7B49\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u4EBA\u304B\u3089\uFF0C\u500B\u4EBA\u60C5\u5831\u304C\uFF0C\u5229\u7528\u76EE\u7684\u306E\u7BC4\u56F2\u3092\u8D85\u3048\u3066\u53D6\u308A\u6271\u308F\u308C\u3066\u3044\u308B\u3068\u3044\u3046\u7406\u7531\uFF0C\u307E\u305F\u306F\u4E0D\u6B63\u306E\u624B\u6BB5\u306B\u3088\u308A\u53D6\u5F97\u3055\u308C\u305F\u3082\u306E\u3067\u3042\u308B\u3068\u3044\u3046\u7406\u7531\u306B\u3088\u308A\uFF0C\u305D\u306E\u5229\u7528\u306E\u505C\u6B62\u307E\u305F\u306F\u6D88\u53BB\uFF08\u4EE5\u4E0B\uFF0C\u300C\u5229\u7528\u505C\u6B62\u7B49\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u3092\u6C42\u3081\u3089\u308C\u305F\u5834\u5408\u306B\u306F\uFF0C\u9045\u6EDE\u306A\u304F\u5FC5\u8981\u306A\u8ABF\u67FB\u3092\u884C\u3044\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u524D\u9805\u306E\u8ABF\u67FB\u7D50\u679C\u306B\u57FA\u3065\u304D\uFF0C\u305D\u306E\u8ACB\u6C42\u306B\u5FDC\u3058\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u5224\u65AD\u3057\u305F\u5834\u5408\u306B\u306F\uFF0C\u9045\u6EDE\u306A\u304F\uFF0C\u5F53\u8A72\u500B\u4EBA\u60C5\u5831\u306E\u5229\u7528\u505C\u6B62\u7B49\u3092\u884C\u3044\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u524D\u9805\u306E\u898F\u5B9A\u306B\u57FA\u3065\u304D\u5229\u7528\u505C\u6B62\u7B49\u3092\u884C\u3063\u305F\u5834\u5408\uFF0C\u307E\u305F\u306F\u5229\u7528\u505C\u6B62\u7B49\u3092\u884C\u308F\u306A\u3044\u65E8\u306E\u6C7A\u5B9A\u3092\u3057\u305F\u3068\u304D\u306F\uFF0C\u9045\u6EDE\u306A\u304F\uFF0C\u3053\u308C\u3092\u30E6\u30FC\u30B6\u30FC\u306B\u901A\u77E5\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u524D2\u9805\u306B\u304B\u304B\u308F\u3089\u305A\uFF0C\u5229\u7528\u505C\u6B62\u7B49\u306B\u591A\u984D\u306E\u8CBB\u7528\u3092\u6709\u3059\u308B\u5834\u5408\u305D\u306E\u4ED6\u5229\u7528\u505C\u6B62\u7B49\u3092\u884C\u3046\u3053\u3068\u304C\u56F0\u96E3\u306A\u5834\u5408\u3067\u3042\u3063\u3066\uFF0C\u30E6\u30FC\u30B6\u30FC\u306E\u6A29\u5229\u5229\u76CA\u3092\u4FDD\u8B77\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u3053\u308C\u306B\u4EE3\u308F\u308B\u3079\u304D\u63AA\u7F6E\u3092\u3068\u308C\u308B\u5834\u5408\u306F\uFF0C\u3053\u306E\u4EE3\u66FF\u7B56\u3092\u8B1B\u3058\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C9\u6761\uFF08\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u5909\u66F4\uFF09" },
  {
    type: "text",
    text: "\u672C\u30DD\u30EA\u30B7\u30FC\u306E\u5185\u5BB9\u306F\uFF0C\u6CD5\u4EE4\u305D\u306E\u4ED6\u672C\u30DD\u30EA\u30B7\u30FC\u306B\u5225\u6BB5\u306E\u5B9A\u3081\u306E\u3042\u308B\u4E8B\u9805\u3092\u9664\u3044\u3066\uFF0C\u30E6\u30FC\u30B6\u30FC\u306B\u901A\u77E5\u3059\u308B\u3053\u3068\u306A\u304F\uFF0C\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u304C\u5225\u9014\u5B9A\u3081\u308B\u5834\u5408\u3092\u9664\u3044\u3066\uFF0C\u5909\u66F4\u5F8C\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306F\uFF0C\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u63B2\u8F09\u3057\u305F\u3068\u304D\u304B\u3089\u52B9\u529B\u3092\u751F\u3058\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  }
];

// app/routes/policy.tsx
var import_react50 = require("react"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function Index13() {
  let scrollRef = (0, import_react50.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "w-full flex flex-col items-center justify-around p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h1", { className: "text-base font-bold", ref: scrollRef, children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC" }, void 0, !1, {
      fileName: "app/routes/policy.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: "shift maker\u7BA1\u7406\u8005\uFF08\u4EE5\u4E0B\uFF0C\u300C\u7BA1\u7406\u8005\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306F\uFF0C\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u4E0A\u3067\u63D0\u4F9B\u3059\u308B\u30B5\u30FC\u30D3\u30B9\uFF08\u4EE5\u4E0B,\u300C\u672C\u30B5\u30FC\u30D3\u30B9\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306B\u304A\u3051\u308B\uFF0C\u30E6\u30FC\u30B6\u30FC\u306E\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u3064\u3044\u3066\uFF0C\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\uFF08\u4EE5\u4E0B\uFF0C\u300C\u672C\u30DD\u30EA\u30B7\u30FC\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u3092\u5B9A\u3081\u307E\u3059\u3002" }, void 0, !1, {
      fileName: "app/routes/policy.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    policy_default.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col items-start justify-start w-full", children: item.type === "title" ? /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h3", { className: "mt-5 mb-2 font-semibold", children: item.text }, void 0, !1, {
      fileName: "app/routes/policy.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex mb-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mr-1", children: "\u30FB" }, void 0, !1, {
        fileName: "app/routes/policy.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { children: item.text }, void 0, !1, {
        fileName: "app/routes/policy.tsx",
        lineNumber: 28,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/policy.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, i, !1, {
      fileName: "app/routes/policy.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(ToTopButton, { scrollToElementRef: scrollRef }, void 0, !1, {
      fileName: "app/routes/policy.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/policy.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index14
});
var import_react51 = require("@remix-run/react"), import_react52 = require("react"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function Index14() {
  let navigate = (0, import_react51.useNavigate)();
  return (0, import_react52.useEffect)(() => {
    navigate("/shift");
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react51.Outlet, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/shift.tsx
var shift_exports = {};
__export(shift_exports, {
  default: () => Index15
});
var import_react55 = require("@remix-run/react");

// app/components/ShiftsSlider.tsx
var import_react53 = require("@remix-run/react"), import_react_slick = __toESM(require("react-slick")), import_react54 = require("react");
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), ShiftsSlider = ({ latestShift, currentMonthShift, temporarilyShift }) => {
  let navigate = (0, import_react53.useNavigate)(), { windowDimensions } = useGetElementProperty(), [sliderIndex, setSliderIndex] = (0, import_react54.useState)(0), [disableSlideButton, setDisableSlideButton] = (0, import_react54.useState)(!1);
  (0, import_react54.useEffect)(() => {
    disableSlideButton && setTimeout(() => {
      setDisableSlideButton(!1);
    }, 900);
  }, [disableSlideButton]);
  let array = [
    {
      label: "\u30B7\u30D5\u30C8\u65B0\u898F\u4F5C\u6210",
      onClick: () => navigate("/create/date"),
      content: `\u30B7\u30D5\u30C8\u306E\u65B0\u898F\u4F5C\u6210\u306F\u3053\u3061\u3089\u304B\u3089\u3002 
 \u4F5C\u6210\u3057\u305F\u30B7\u30D5\u30C8\u306F\u78BA\u8A8D\u30FB\u7DE8\u96C6\u3067\u304D\u3001\u4F5C\u6210\u9014\u4E2D\u306E\u30B7\u30D5\u30C8\u306F\u4E00\u6642\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002 
 `,
      buttonText: "\u4F5C\u6210",
      styles: {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)), url(https://ks-icons.s3.ap-northeast-1.amazonaws.com/create.png)",
        backgroundSize: "cover"
      }
    },
    {
      label: "\u4F5C\u6210\u9014\u4E2D",
      onClick: () => temporarilyShift.shift ? navigate(temporarilyShift.path, { state: { shifts: temporarilyShift == null ? void 0 : temporarilyShift.shifts, shift: temporarilyShift == null ? void 0 : temporarilyShift.shift } }) : navigate("/create/date"),
      content: `\u4E00\u6642\u4FDD\u5B58\u3067\u6700\u5F8C\u306B\u7DE8\u96C6\u3057\u3066\u3044\u305F\u30B7\u30D5\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\u3002 
 \u30B7\u30D5\u30C8\u306F\u4E00\u6642\u4FDD\u5B58\u6642\u70B9\u306E\u9014\u4E2D\u304B\u3089\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002`,
      buttonText: "\u78BA\u8A8D",
      styles: {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)),url(https://ks-icons.s3.ap-northeast-1.amazonaws.com/calendar3.jpg)",
        backgroundSize: "cover"
      }
    },
    {
      label: "\u6700\u65B0\u30B7\u30D5\u30C8",
      onClick: () => latestShift.shift ? navigate(latestShift.path, { state: { shifts: latestShift == null ? void 0 : latestShift.shifts, shift: latestShift == null ? void 0 : latestShift.shift } }) : navigate("/create/date"),
      content: `\u6700\u5F8C\u306B\u4F5C\u6210\u30FB\u7DE8\u96C6\u3057\u305F\u30B7\u30D5\u30C8\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 
 \u30B7\u30D5\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u4F5C\u6210\u753B\u9762\u3078\u9077\u79FB\u3057\u307E\u3059\u3002`,
      buttonText: "\u78BA\u8A8D",
      styles: {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)),url(https://ks-icons.s3.ap-northeast-1.amazonaws.com/calendar2.jpg)",
        backgroundSize: "cover"
      }
    },
    {
      label: "\u4ECA\u6708\u306E\u30B7\u30D5\u30C8",
      onClick: () => currentMonthShift.shift ? navigate(currentMonthShift.path, { state: { shifts: currentMonthShift == null ? void 0 : currentMonthShift.shifts, shift: currentMonthShift == null ? void 0 : currentMonthShift.shift } }) : navigate("/create/date"),
      content: `\u4F5C\u6210\u3057\u305F\u4ECA\u6708\u306E\u30B7\u30D5\u30C8\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 
 \u30B7\u30D5\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u30B7\u30D5\u30C8\u4F5C\u6210\u753B\u9762\u3078\u9077\u79FB\u3057\u307E\u3059\u3002`,
      buttonText: "\u78BA\u8A8D",
      styles: {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)),url(https://ks-icons.s3.ap-northeast-1.amazonaws.com/calendar1.jpg)",
        backgroundSize: "cover"
      }
    },
    {
      label: "\u5F93\u696D\u54E1\u7DE8\u96C6",
      onClick: () => navigate("/workingTime"),
      content: `\u5F93\u696D\u54E1\u3068\u52E4\u52D9\u6642\u9593\u5E2F\u3092\u3042\u3089\u304B\u3058\u3081\u4FDD\u5B58\u3057\u3066\u304A\u304F\u3053\u3068\u3067\u304D\u307E\u3059\u3002 
 \u4FDD\u5B58\u3057\u3066\u304A\u304F\u3068\u30B7\u30D5\u30C8\u4F5C\u6210\u6642\u306B\u3054\u5229\u7528\u3067\u304D\u307E\u3059\u3002 
 \u5F93\u696D\u54E1\u30FB\u52E4\u52D9\u6642\u9593\u5E2F\u306E\u7DE8\u96C6\u306F\u30B7\u30D5\u30C8\u306E\u4F5C\u6210\u9014\u4E2D\u3067\u3082\u884C\u3048\u307E\u3059\u3002`,
      buttonText: "\u7DE8\u96C6",
      styles: {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)),url(https://ks-icons.s3.ap-northeast-1.amazonaws.com/employees.jpg)",
        backgroundSize: "cover"
      }
    },
    {
      label: "\u64CD\u4F5C\u8AAC\u660E",
      onClick: () => navigate("/manual"),
      content: "\u5F53\u30B5\u30FC\u30D3\u30B9\u306E\u64CD\u4F5C\u8AAC\u660E\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002",
      buttonText: "\u78BA\u8A8D",
      styles: {
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)),url(https://ks-icons.s3.ap-northeast-1.amazonaws.com/tutorial.jpg)",
        backgroundSize: "cover"
      }
    }
  ], sliderRef = (0, import_react54.useRef)(null), slideNext = () => {
    var _a;
    (_a = sliderRef == null ? void 0 : sliderRef.current) == null || _a.slickNext(), setDisableSlideButton(!0);
  }, slidePrev = () => {
    var _a;
    (_a = sliderRef == null ? void 0 : sliderRef.current) == null || _a.slickPrev(), setDisableSlideButton(!0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "shadow-bottom h-[220px] relative bg-gradient-to-t from-[#f5f5f5] ml-[-20px] w-[calc(100%+40px)] pt-[10px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
      import_react_slick.default,
      {
        infinite: !0,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: !0,
        autoplay: !0,
        afterChange: (i) => setSliderIndex(i),
        ref: sliderRef,
        arrows: !1,
        children: array.map((v, i) => {
          let styles = {}, leftStyle = styles = { opacity: 0.4, width: "80%", marginLeft: "-20%" }, rightStyle = { opacity: 0.4, width: "80%", marginLeft: "40%" };
          return sliderIndex === i ? styles = { width: "160%", marginLeft: "-30%", zIndex: 20, height: "200px", marginRight: "-100%" } : sliderIndex === 0 ? styles = i === 4 || i === 5 ? leftStyle : rightStyle : sliderIndex === 1 ? styles = i === 5 || i === 0 ? leftStyle : rightStyle : styles = i === sliderIndex - 1 || i === sliderIndex - 2 ? leftStyle : rightStyle, sliderIndex < 3 ? sliderIndex + 3 === i && (styles = { display: "none" }) : sliderIndex - 3 === i && (styles = { display: "none" }), /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mb-10 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            "div",
            {
              className: "trans30 h-[100px] p-2 rounded-md border flex flex-col justify-between cursor-grab shadow-md",
              style: { ...styles, ...v.styles },
              onClick: () => sliderIndex === i && windowDimensions.width < 640 && v.onClick(),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-2 bg-[rgba(255,255,255,0.8)] rounded-sm", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: `text-lg ${sliderIndex !== i && "sm:text-xs"} font-bold text-primary-text`, children: v.label }, void 0, !1, {
                    fileName: "app/components/ShiftsSlider.tsx",
                    lineNumber: 157,
                    columnNumber: 19
                  }, this),
                  sliderIndex === i && /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "m-1 max-h-[100px] sm:max-h-[130px] overflow-scroll hidden-scrollbar", children: v.content.split(`
`).map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: l }, l, !1, {
                    fileName: "app/components/ShiftsSlider.tsx",
                    lineNumber: 161,
                    columnNumber: 25
                  }, this)) }, void 0, !1, {
                    fileName: "app/components/ShiftsSlider.tsx",
                    lineNumber: 159,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ShiftsSlider.tsx",
                  lineNumber: 156,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: `${sliderIndex === i ? "self-end" : "self-start"} `, children: sliderIndex === i && windowDimensions.width >= 640 && /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button, { text: v.buttonText, onClick: v.onClick, color: "secondary" }, void 0, !1, {
                  fileName: "app/components/ShiftsSlider.tsx",
                  lineNumber: 168,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/ShiftsSlider.tsx",
                  lineNumber: 166,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ShiftsSlider.tsx",
              lineNumber: 151,
              columnNumber: 15
            },
            this
          ) }, i, !1, {
            fileName: "app/components/ShiftsSlider.tsx",
            lineNumber: 150,
            columnNumber: 13
          }, this);
        })
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShiftsSlider.tsx",
        lineNumber: 119,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "absolute bottom-[10px] right-[20px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
      Button,
      {
        width: "sm",
        text: ">",
        color: "white",
        onClick: slideNext,
        disabled: disableSlideButton,
        variant: "contained",
        textColor: "text-gray-400"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShiftsSlider.tsx",
        lineNumber: 177,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ShiftsSlider.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "absolute bottom-[10px] left-[20px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
      Button,
      {
        width: "sm",
        text: "<",
        color: "white",
        onClick: slidePrev,
        disabled: disableSlideButton,
        variant: "contained",
        textColor: "text-gray-400"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ShiftsSlider.tsx",
        lineNumber: 188,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ShiftsSlider.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ShiftsSlider.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
};

// app/routes/shift.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function Index15() {
  let { pathname } = (0, import_react55.useLocation)(), { date } = (0, import_react55.useParams)(), navigate = (0, import_react55.useNavigate)(), { data } = useQuery(shiftsQuery), latestShift = data && JSON.parse(JSON.stringify(data)).shiftDate.flatMap(({ shifts }) => shifts).sort((a, b) => {
    let aTime = a.updatedAt ?? a.createdAt, bTime = b.updatedAt ?? b.createdAt;
    return aTime < bTime ? 1 : -1;
  })[0], latestShiftDate = latestShift && data.shiftDate.find((shiftDate) => shiftDate.shifts.find((shift) => shift.id === latestShift.id)), latestShiftPathname = `/${latestShiftDate == null ? void 0 : latestShiftDate.year}.${latestShiftDate == null ? void 0 : latestShiftDate.month}/${latestShift == null ? void 0 : latestShift.id}/show`, currentMonthShiftDate = data && JSON.parse(JSON.stringify(data)).shiftDate.find(
    (shiftDate) => shiftDate.year === (/* @__PURE__ */ new Date()).getFullYear() && shiftDate.month === (/* @__PURE__ */ new Date()).getMonth() + 1
  ), currentMonthShift = currentMonthShiftDate == null ? void 0 : currentMonthShiftDate.shifts.sort((a, b) => {
    let aTime = a.updatedAt ?? a.createdAt, bTime = b.updatedAt ?? b.createdAt;
    return aTime < bTime ? 1 : -1;
  })[0], currentMonthShiftPathname = `/${(/* @__PURE__ */ new Date()).getFullYear()}.${(/* @__PURE__ */ new Date()).getMonth() + 1}/${currentMonthShift == null ? void 0 : currentMonthShift.id}/show`, temporarilyShift = data && JSON.parse(JSON.stringify(data)).shiftDate.flatMap(({ shifts }) => shifts).filter((shift) => !shift.isCompleted).sort((a, b) => {
    let aTime = a.updatedAt ?? a.createdAt, bTime = b.updatedAt ?? b.createdAt;
    return aTime < bTime ? 1 : -1;
  })[0], temporarilyShiftDate = temporarilyShift && data.shiftDate.find((shiftDate) => shiftDate.shifts.find((shift) => shift.id === temporarilyShift.id)), temporarilyShiftDatePathname = `/${temporarilyShiftDate == null ? void 0 : temporarilyShiftDate.year}.${temporarilyShiftDate == null ? void 0 : temporarilyShiftDate.month}/${temporarilyShift == null ? void 0 : temporarilyShift.id}/show`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(Title, { currentText: "\u30B7\u30D5\u30C8\u4F5C\u6210 " }, void 0, !1, {
      fileName: "app/routes/shift.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      ShiftsSlider,
      {
        latestShift: { path: latestShiftPathname, shifts: latestShiftDate, shift: latestShift },
        currentMonthShift: { path: currentMonthShiftPathname, shifts: currentMonthShiftDate, shift: currentMonthShift },
        temporarilyShift: { path: temporarilyShiftDatePathname, shifts: temporarilyShiftDate, shift: temporarilyShift }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/shift.tsx",
        lineNumber: 64,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "w-full border-2 rounded-md p-4 my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          Title,
          {
            currentText: date ? `${date == null ? void 0 : date.split(".")[0]}\u5E74${date == null ? void 0 : date.split(".")[1]}\u6708` : "\u4F5C\u6210\u30B7\u30D5\u30C8\u4E00\u89A7",
            previous: pathname !== "/shift" ? [{ text: "\u4F5C\u6210\u30B7\u30D5\u30C8\u4E00\u89A7", rootPath: "/shift" }] : []
          },
          void 0,
          !1,
          {
            fileName: "app/routes/shift.tsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "flex sm:flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "sm:hidden mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(Button, { text: "\u5F93\u696D\u54E1\u7DE8\u96C6", width: "md", onClick: () => navigate("/workingTime"), color: "primary-light" }, void 0, !1, {
            fileName: "app/routes/shift.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/shift.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(Button, { text: "\u30B7\u30D5\u30C8\u4F5C\u6210", width: "md", color: "primary", onClick: () => navigate("/create/date") }, void 0, !1, {
            fileName: "app/routes/shift.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/shift.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/shift.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react55.Outlet, { context: { data } }, void 0, !1, {
        fileName: "app/routes/shift.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/shift.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/shift.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/shift/$date.tsx
var date_exports2 = {};
__export(date_exports2, {
  default: () => Index16
});
var import_react56 = require("@remix-run/react");
var import_react57 = require("react"), import_react58 = require("@remix-run/react");
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function Index16() {
  var _a, _b, _c;
  let navState = (0, import_react56.useLocation)().state, { date } = (0, import_react56.useParams)(), year = Number(date == null ? void 0 : date.split(".")[0]), month = Number(date == null ? void 0 : date.split(".")[1]), props = (0, import_react56.useOutletContext)(), shifts = (navState == null ? void 0 : navState.shift) ?? ((_b = (_a = props == null ? void 0 : props.data) == null ? void 0 : _a.shiftDate.find((shifts2) => shifts2.year === year && shifts2.month === month)) == null ? void 0 : _b.shifts), shiftDate = (navState == null ? void 0 : navState.shifts) ?? ((_c = props == null ? void 0 : props.data) == null ? void 0 : _c.shiftDate.find((shifts2) => shifts2.year === year && shifts2.month === month)), navigate = (0, import_react58.useNavigate)(), [checkedItems, setCheckedItems] = (0, import_react57.useState)({ isOrderByOld: !1, isCompleted: !1, isTemporarily: !1 }), handleChange = (e) => {
    e.target.id === "isCompleted" && e.target.checked && checkedItems.isTemporarily ? setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked,
      isTemporarily: !1
    }) : e.target.id === "isTemporarily" && e.target.checked && checkedItems.isCompleted ? setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked,
      isCompleted: !1
    }) : setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex items-center p-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(CheckBox, { value: "isCompleted", onChange: handleChange, label: "\u4F5C\u6210\u6E08\u306E\u307F\u8868\u793A", checked: checkedItems.isCompleted }, void 0, !1, {
        fileName: "app/routes/shift/$date.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "ml-10" }, void 0, !1, {
        fileName: "app/routes/shift/$date.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(CheckBox, { value: "isTemporarily", onChange: handleChange, label: "\u4E00\u6642\u4FDD\u5B58\u306E\u307F\u8868\u793A", checked: checkedItems.isTemporarily }, void 0, !1, {
        fileName: "app/routes/shift/$date.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/shift/$date.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(PartSpinner, { isLoad: !(navState != null && navState.shift) && !(props != null && props.data), isError: props == null ? void 0 : props.error, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_jsx_dev_runtime45.Fragment, { children: shifts == null ? void 0 : shifts.map((shift, i) => {
      let List = () => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        "div",
        {
          className: "flex items-baseline hover:opacity-70 cursor-pointer border-b my-3 mx-4 sm:flex-col",
          onClick: () => navigate(`/${date}/${shift.id}/show`, { state: { shift, shifts: shiftDate } }),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex w-[35%] items-baseline sm:w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "mr-5 font-semibold text-gray-700 w-[10%] sm:mr-1", children: [
                "No.",
                i + 1
              ] }, void 0, !0, {
                fileName: "app/routes/shift/$date.tsx",
                lineNumber: 62,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h1", { className: "text-[#385F5F] font-bold text-xl w-[90%] truncate", children: shift.shiftName }, void 0, !1, {
                fileName: "app/routes/shift/$date.tsx",
                lineNumber: 63,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/shift/$date.tsx",
              lineNumber: 61,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex items-baseline text-gray-500 w-[13%] sm:w-full sm:ml-2 sm:text-[0.6rem]", children: [
              "\u72B6\u614B\uFF1A ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "text-base text-primary-text sm:text-xs", children: shift.isCompleted ? "\u4F5C\u6210\u6E08" : "\u4E00\u6642\u4FDD\u5B58" }, void 0, !1, {
                fileName: "app/routes/shift/$date.tsx",
                lineNumber: 66,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/shift/$date.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex items-baseline text-gray-500 w-[26%] sm:w-full sm:ml-2 sm:text-[0.6rem]", children: [
              "\u4F5C\u6210\uFF1A ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "text-lg text-primary-text sm:text-sm", children: new Date(shift.createdAt).toLocaleString() }, void 0, !1, {
                fileName: "app/routes/shift/$date.tsx",
                lineNumber: 69,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/shift/$date.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "flex items-baseline text-gray-500 w-[26%] sm:w-full sm:ml-2 sm:text-[0.6rem]", children: [
              "\u66F4\u65B0\uFF1A",
              /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: `${shift.updatedAt ? "text-lg sm:text-sm" : "text-base sm:text-xs"} text-primary-text`, children: shift.updatedAt ? new Date(shift.updatedAt).toLocaleString() : "\u672A\u66F4\u65B0" }, void 0, !1, {
                fileName: "app/routes/shift/$date.tsx",
                lineNumber: 73,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/shift/$date.tsx",
              lineNumber: 71,
              columnNumber: 17
            }, this)
          ]
        },
        i,
        !0,
        {
          fileName: "app/routes/shift/$date.tsx",
          lineNumber: 56,
          columnNumber: 15
        },
        this
      );
      return checkedItems.isCompleted ? shift.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(List, {}, void 0, !1, {
        fileName: "app/routes/shift/$date.tsx",
        lineNumber: 81,
        columnNumber: 43
      }, this) : checkedItems.isTemporarily ? !shift.isCompleted && /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(List, {}, void 0, !1, {
        fileName: "app/routes/shift/$date.tsx",
        lineNumber: 83,
        columnNumber: 44
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(List, {}, void 0, !1, {
        fileName: "app/routes/shift/$date.tsx",
        lineNumber: 85,
        columnNumber: 22
      }, this);
    }) }, void 0, !1, {
      fileName: "app/routes/shift/$date.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/shift/$date.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/shift/$date.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/shift/index.tsx
var shift_exports2 = {};
__export(shift_exports2, {
  default: () => Index17
});
var import_react59 = require("react"), import_react60 = require("@remix-run/react");
var import_react61 = require("@remix-run/react"), import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function Index17() {
  var _a, _b;
  let navigate = (0, import_react61.useNavigate)(), [isSortByOld, setSortByOld] = (0, import_react59.useState)(!1), [animTimeout, setAnimTimeout] = (0, import_react59.useState)(!1), props = (0, import_react60.useOutletContext)(), data = ((_a = props == null ? void 0 : props.data) == null ? void 0 : _a.shiftDate) && [...(_b = props == null ? void 0 : props.data) == null ? void 0 : _b.shiftDate];
  (0, import_react59.useEffect)(() => {
    setTimeout(() => {
      setAnimTimeout(isSortByOld);
    }, 200);
  }, [isSortByOld]);
  let ShiftList = ({ workedDay, shiftsNum, year, month, shifts }) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-baseline hover:opacity-70 cursor-pointer border-b my-3 mx-4 trans5", onClick: () => {
    navigate(`/shift/${year}.${month}`, { state: { shift: shifts == null ? void 0 : shifts.shifts, shifts } });
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("h1", { className: "text-[#385F5F] font-bold text-xl w-32", children: `${year}\u5E74${month}\u6708` }, void 0, !1, {
      fileName: "app/routes/shift/index.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    workedDay && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-baseline ml-[5%] w-32", children: [
      "\u51FA\u52E4\u65E5\u6570\uFF1A ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "text-base", children: workedDay }, void 0, !1, {
        fileName: "app/routes/shift/index.tsx",
        lineNumber: 35,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/shift/index.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    shiftsNum && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-baseline ml-[5%] w-32", children: [
      "\u4FDD\u5B58\u30B7\u30D5\u30C8\u6570\uFF1A ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "text-base", children: shiftsNum }, void 0, !1, {
        fileName: "app/routes/shift/index.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/shift/index.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/shift/index.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: (data == null ? void 0 : data.length) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { children: "\u8868\u793A\u3067\u304D\u308B\u30B7\u30D5\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\u3002" }, void 0, !1, {
    fileName: "app/routes/shift/index.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(PartSpinner, { isLoad: !(props != null && props.data), isError: props == null ? void 0 : props.error, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      CheckBox,
      {
        value: "isSortByOld",
        onChange: (e) => setSortByOld(e.target.checked),
        label: "\u53E4\u3044\u9806\u306B\u8868\u793A",
        checked: isSortByOld
      },
      void 0,
      !1,
      {
        fileName: "app/routes/shift/index.tsx",
        lineNumber: 55,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/shift/index.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    animTimeout ? data == null ? void 0 : data.reverse().map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "div",
      {
        style: isSortByOld ? { opacity: 1, marginLeft: "0px" } : { opacity: 0, marginLeft: "50px" },
        className: "trans30",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ShiftList, { shiftsNum: v.shifts.length, shifts: v, year: v.year, month: v.month }, i, !1, {
          fileName: "app/routes/shift/index.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this)
      },
      i,
      !1,
      {
        fileName: "app/routes/shift/index.tsx",
        lineNumber: 64,
        columnNumber: 19
      },
      this
    )) : data == null ? void 0 : data.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
      "div",
      {
        style: isSortByOld ? { opacity: 0, marginLeft: "50px" } : { opacity: 1, marginLeft: "0px" },
        className: "trans30",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ShiftList, { shiftsNum: v.shifts.length, shifts: v, year: v.year, month: v.month }, i, !1, {
          fileName: "app/routes/shift/index.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this)
      },
      i,
      !1,
      {
        fileName: "app/routes/shift/index.tsx",
        lineNumber: 73,
        columnNumber: 19
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/routes/shift/index.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/shift/index.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/shift/index.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => Index18
});

// app/utils/terms.json
var terms_default = [
  { type: "title", text: "\u7B2C1\u6761\uFF08\u9069\u7528\uFF09" },
  {
    type: "text",
    text: "\u672C\u898F\u7D04\u306F\uFF0C\u30E6\u30FC\u30B6\u30FC\u3068\u7BA1\u7406\u8005\u3068\u306E\u9593\u306E\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u95A2\u308F\u308B\u4E00\u5207\u306E\u95A2\u4FC2\u306B\u9069\u7528\u3055\u308C\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3057\uFF0C\u672C\u898F\u7D04\u306E\u307B\u304B\uFF0C\u3054\u5229\u7528\u306B\u3042\u305F\u3063\u3066\u306E\u30EB\u30FC\u30EB\u7B49\uFF0C\u5404\u7A2E\u306E\u5B9A\u3081\uFF08\u4EE5\u4E0B\uFF0C\u300C\u500B\u5225\u898F\u5B9A\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u3092\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u3089\u500B\u5225\u898F\u5B9A\u306F\u305D\u306E\u540D\u79F0\u306E\u3044\u304B\u3093\u306B\u95A2\u308F\u3089\u305A\uFF0C\u672C\u898F\u7D04\u306E\u4E00\u90E8\u3092\u69CB\u6210\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u672C\u898F\u7D04\u306E\u898F\u5B9A\u304C\u524D\u6761\u306E\u500B\u5225\u898F\u5B9A\u306E\u898F\u5B9A\u3068\u77DB\u76FE\u3059\u308B\u5834\u5408\u306B\u306F\uFF0C\u500B\u5225\u898F\u5B9A\u306B\u304A\u3044\u3066\u7279\u6BB5\u306E\u5B9A\u3081\u306A\u304D\u9650\u308A\uFF0C\u500B\u5225\u898F\u5B9A\u306E\u898F\u5B9A\u304C\u512A\u5148\u3055\u308C\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C2\u6761\uFF08\u5229\u7528\u767B\u9332\uFF09" },
  {
    type: "text",
    text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u304A\u3044\u3066\u306F\uFF0C\u767B\u9332\u5E0C\u671B\u8005\u304C\u672C\u898F\u7D04\u306B\u540C\u610F\u306E\u4E0A\uFF0C\u7BA1\u7406\u8005\u306E\u5B9A\u3081\u308B\u65B9\u6CD5\u306B\u3088\u3063\u3066\u5229\u7528\u767B\u9332\u3092\u7533\u8ACB\u3057\uFF0C\u7BA1\u7406\u8005\u304C\u3053\u308C\u3092\u627F\u8A8D\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\uFF0C\u5229\u7528\u767B\u9332\u304C\u5B8C\u4E86\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u5229\u7528\u767B\u9332\u306E\u7533\u8ACB\u8005\u306B\u4EE5\u4E0B\u306E\u4E8B\u7531\u304C\u3042\u308B\u3068\u5224\u65AD\u3057\u305F\u5834\u5408\uFF0C\u5229\u7528\u767B\u9332\u306E\u7533\u8ACB\u3092\u627F\u8A8D\u3057\u306A\u3044\u3053\u3068\u304C\u3042\u308A\uFF0C\u305D\u306E\u7406\u7531\u306B\u3064\u3044\u3066\u306F\u4E00\u5207\u306E\u958B\u793A\u7FA9\u52D9\u3092\u8CA0\u308F\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "text", text: "\u5229\u7528\u767B\u9332\u306E\u7533\u8ACB\u306B\u969B\u3057\u3066\u865A\u507D\u306E\u4E8B\u9805\u3092\u5C4A\u3051\u51FA\u305F\u5834\u5408" },
  { type: "text", text: "\u672C\u898F\u7D04\u306B\u9055\u53CD\u3057\u305F\u3053\u3068\u304C\u3042\u308B\u8005\u304B\u3089\u306E\u7533\u8ACB\u3067\u3042\u308B\u5834\u5408" },
  { type: "text", text: "\u305D\u306E\u4ED6\uFF0C\u7BA1\u7406\u8005\u304C\u5229\u7528\u767B\u9332\u3092\u76F8\u5F53\u3067\u306A\u3044\u3068\u5224\u65AD\u3057\u305F\u5834\u5408" },
  { type: "title", text: "\u7B2C3\u6761\uFF08\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304A\u3088\u3073\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u7BA1\u7406\uFF09" },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u306F\uFF0C\u81EA\u5DF1\u306E\u8CAC\u4EFB\u306B\u304A\u3044\u3066\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304A\u3088\u3073\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u9069\u5207\u306B\u7BA1\u7406\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u306F\uFF0C\u3044\u304B\u306A\u308B\u5834\u5408\u306B\u3082\uFF0C\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u304A\u3088\u3073\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u7B2C\u4E09\u8005\u306B\u8B72\u6E21\u307E\u305F\u306F\u8CB8\u4E0E\u3057\uFF0C\u3082\u3057\u304F\u306F\u7B2C\u4E09\u8005\u3068\u5171\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u7BA1\u7406\u8005\u306F\uFF0C\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u7D44\u307F\u5408\u308F\u305B\u304C\u767B\u9332\u60C5\u5831\u3068\u4E00\u81F4\u3057\u3066\u30ED\u30B0\u30A4\u30F3\u3055\u308C\u305F\u5834\u5408\u306B\u306F\uFF0C\u305D\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u767B\u9332\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u81EA\u8EAB\u306B\u3088\u308B\u5229\u7528\u3068\u307F\u306A\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u53CA\u3073\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u7B2C\u4E09\u8005\u306B\u3088\u3063\u3066\u4F7F\u7528\u3055\u308C\u305F\u3053\u3068\u306B\u3088\u3063\u3066\u751F\u3058\u305F\u640D\u5BB3\u306F\uFF0C\u7BA1\u7406\u8005\u306B\u6545\u610F\u53C8\u306F\u91CD\u5927\u306A\u904E\u5931\u304C\u3042\u308B\u5834\u5408\u3092\u9664\u304D\uFF0C\u7BA1\u7406\u8005\u306F\u4E00\u5207\u306E\u8CAC\u4EFB\u3092\u8CA0\u308F\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C4\u6761\uFF08\u7981\u6B62\u4E8B\u9805\uFF09" },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u306F\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u3042\u305F\u308A\uFF0C\u4EE5\u4E0B\u306E\u884C\u70BA\u3092\u3057\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002"
  },
  { type: "text", text: "\u6CD5\u4EE4\u307E\u305F\u306F\u516C\u5E8F\u826F\u4FD7\u306B\u9055\u53CD\u3059\u308B\u884C\u70BA" },
  { type: "text", text: "\u72AF\u7F6A\u884C\u70BA\u306B\u95A2\u9023\u3059\u308B\u884C\u70BA" },
  {
    type: "text",
    text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5185\u5BB9\u7B49\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u542B\u307E\u308C\u308B\u8457\u4F5C\u6A29\uFF0C\u5546\u6A19\u6A29\u307B\u304B\u77E5\u7684\u8CA1\u7523\u6A29\u3092\u4FB5\u5BB3\u3059\u308B\u884C\u70BA"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\uFF0C\u307B\u304B\u306E\u30E6\u30FC\u30B6\u30FC\uFF0C\u307E\u305F\u306F\u305D\u306E\u4ED6\u7B2C\u4E09\u8005\u306E\u30B5\u30FC\u30D0\u30FC\u307E\u305F\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u6A5F\u80FD\u3092\u7834\u58CA\u3057\u305F\u308A\uFF0C\u59A8\u5BB3\u3057\u305F\u308A\u3059\u308B\u884C\u70BA"
  },
  { type: "text", text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u3088\u3063\u3066\u5F97\u3089\u308C\u305F\u60C5\u5831\u3092\u5546\u696D\u7684\u306B\u5229\u7528\u3059\u308B\u884C\u70BA" },
  { type: "text", text: "\u7BA1\u7406\u8005\u306E\u30B5\u30FC\u30D3\u30B9\u306E\u904B\u55B6\u3092\u59A8\u5BB3\u3059\u308B\u304A\u305D\u308C\u306E\u3042\u308B\u884C\u70BA" },
  { type: "text", text: "\u4E0D\u6B63\u30A2\u30AF\u30BB\u30B9\u3092\u3057\uFF0C\u307E\u305F\u306F\u3053\u308C\u3092\u8A66\u307F\u308B\u884C\u70BA" },
  { type: "text", text: "\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u95A2\u3059\u308B\u500B\u4EBA\u60C5\u5831\u7B49\u3092\u53CE\u96C6\u307E\u305F\u306F\u84C4\u7A4D\u3059\u308B\u884C\u70BA" },
  { type: "text", text: "\u4E0D\u6B63\u306A\u76EE\u7684\u3092\u6301\u3063\u3066\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3059\u308B\u884C\u70BA" },
  {
    type: "text",
    text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u7B2C\u4E09\u8005\u306B\u4E0D\u5229\u76CA\uFF0C\u640D\u5BB3\uFF0C\u4E0D\u5FEB\u611F\u3092\u4E0E\u3048\u308B\u884C\u70BA"
  },
  { type: "text", text: "\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u6210\u308A\u3059\u307E\u3059\u884C\u70BA" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u304C\u8A31\u8AFE\u3057\u306A\u3044\u672C\u30B5\u30FC\u30D3\u30B9\u4E0A\u3067\u306E\u5BA3\u4F1D\uFF0C\u5E83\u544A\uFF0C\u52E7\u8A98\uFF0C\u307E\u305F\u306F\u55B6\u696D\u884C\u70BA"
  },
  { type: "text", text: "\u9762\u8B58\u306E\u306A\u3044\u7570\u6027\u3068\u306E\u51FA\u4F1A\u3044\u3092\u76EE\u7684\u3068\u3057\u305F\u884C\u70BA" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306E\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u9023\u3057\u3066\uFF0C\u53CD\u793E\u4F1A\u7684\u52E2\u529B\u306B\u5BFE\u3057\u3066\u76F4\u63A5\u307E\u305F\u306F\u9593\u63A5\u306B\u5229\u76CA\u3092\u4F9B\u4E0E\u3059\u308B\u884C\u70BA"
  },
  { type: "text", text: "\u305D\u306E\u4ED6\uFF0C\u7BA1\u7406\u8005\u304C\u4E0D\u9069\u5207\u3068\u5224\u65AD\u3059\u308B\u884C\u70BA" },
  { type: "title", text: "\u7B2C5\u6761\uFF08\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u306E\u505C\u6B62\u7B49\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u4E8B\u7531\u304C\u3042\u308B\u3068\u5224\u65AD\u3057\u305F\u5834\u5408\uFF0C\u30E6\u30FC\u30B6\u30FC\u306B\u4E8B\u524D\u306B\u901A\u77E5\u3059\u308B\u3053\u3068\u306A\u304F\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u306E\u63D0\u4F9B\u3092\u505C\u6B62\u307E\u305F\u306F\u4E2D\u65AD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u304B\u304B\u308B\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B7\u30B9\u30C6\u30E0\u306E\u4FDD\u5B88\u70B9\u691C\u307E\u305F\u306F\u66F4\u65B0\u3092\u884C\u3046\u5834\u5408"
  },
  {
    type: "text",
    text: "\u5730\u9707\uFF0C\u843D\u96F7\uFF0C\u706B\u707D\uFF0C\u505C\u96FB\u307E\u305F\u306F\u5929\u707D\u306A\u3069\u306E\u4E0D\u53EF\u6297\u529B\u306B\u3088\u308A\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u304C\u56F0\u96E3\u3068\u306A\u3063\u305F\u5834\u5408"
  },
  { type: "text", text: "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u307E\u305F\u306F\u901A\u4FE1\u56DE\u7DDA\u7B49\u304C\u4E8B\u6545\u306B\u3088\u308A\u505C\u6B62\u3057\u305F\u5834\u5408" },
  { type: "text", text: "\u305D\u306E\u4ED6\uFF0C\u7BA1\u7406\u8005\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u304C\u56F0\u96E3\u3068\u5224\u65AD\u3057\u305F\u5834\u5408" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u306E\u505C\u6B62\u307E\u305F\u306F\u4E2D\u65AD\u306B\u3088\u308A\uFF0C\u30E6\u30FC\u30B6\u30FC\u307E\u305F\u306F\u7B2C\u4E09\u8005\u304C\u88AB\u3063\u305F\u3044\u304B\u306A\u308B\u4E0D\u5229\u76CA\u307E\u305F\u306F\u640D\u5BB3\u306B\u3064\u3044\u3066\u3082\uFF0C\u4E00\u5207\u306E\u8CAC\u4EFB\u3092\u8CA0\u308F\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C6\u6761\uFF08\u5229\u7528\u5236\u9650\u304A\u3088\u3073\u767B\u9332\u62B9\u6D88\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u30E6\u30FC\u30B6\u30FC\u304C\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408\u306B\u306F\uFF0C\u4E8B\u524D\u306E\u901A\u77E5\u306A\u304F\uFF0C\u30E6\u30FC\u30B6\u30FC\u306B\u5BFE\u3057\u3066\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5168\u90E8\u3082\u3057\u304F\u306F\u4E00\u90E8\u306E\u5229\u7528\u3092\u5236\u9650\u3057\uFF0C\u307E\u305F\u306F\u30E6\u30FC\u30B6\u30FC\u3068\u3057\u3066\u306E\u767B\u9332\u3092\u62B9\u6D88\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "text", text: "\u672C\u898F\u7D04\u306E\u3044\u305A\u308C\u304B\u306E\u6761\u9805\u306B\u9055\u53CD\u3057\u305F\u5834\u5408" },
  { type: "text", text: "\u767B\u9332\u4E8B\u9805\u306B\u865A\u507D\u306E\u4E8B\u5B9F\u304C\u3042\u308B\u3053\u3068\u304C\u5224\u660E\u3057\u305F\u5834\u5408" },
  { type: "text", text: "\u6599\u91D1\u7B49\u306E\u652F\u6255\u50B5\u52D9\u306E\u4E0D\u5C65\u884C\u304C\u3042\u3063\u305F\u5834\u5408" },
  { type: "text", text: "\u7BA1\u7406\u8005\u304B\u3089\u306E\u9023\u7D61\u306B\u5BFE\u3057\uFF0C\u4E00\u5B9A\u671F\u9593\u8FD4\u7B54\u304C\u306A\u3044\u5834\u5408" },
  {
    type: "text",
    text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u3064\u3044\u3066\uFF0C\u6700\u7D42\u306E\u5229\u7528\u304B\u3089\u4E00\u5B9A\u671F\u9593\u5229\u7528\u304C\u306A\u3044\u5834\u5408"
  },
  {
    type: "text",
    text: "\u305D\u306E\u4ED6\uFF0C\u7BA1\u7406\u8005\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u3092\u9069\u5F53\u3067\u306A\u3044\u3068\u5224\u65AD\u3057\u305F\u5834\u5408"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u6761\u306B\u57FA\u3065\u304D\u7BA1\u7406\u8005\u304C\u884C\u3063\u305F\u884C\u70BA\u306B\u3088\u308A\u30E6\u30FC\u30B6\u30FC\u306B\u751F\u3058\u305F\u640D\u5BB3\u306B\u3064\u3044\u3066\uFF0C\u4E00\u5207\u306E\u8CAC\u4EFB\u3092\u8CA0\u3044\u307E\u305B\u3093\u3002"
  },
  { type: "title", text: "\u7B2C7\u6761\uFF08\u4FDD\u8A3C\u306E\u5426\u8A8D\u304A\u3088\u3073\u514D\u8CAC\u4E8B\u9805\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u4E8B\u5B9F\u4E0A\u307E\u305F\u306F\u6CD5\u5F8B\u4E0A\u306E\u7455\u75B5\uFF08\u5B89\u5168\u6027\uFF0C\u4FE1\u983C\u6027\uFF0C\u6B63\u78BA\u6027\uFF0C\u5B8C\u5168\u6027\uFF0C\u6709\u52B9\u6027\uFF0C\u7279\u5B9A\u306E\u76EE\u7684\u3078\u306E\u9069\u5408\u6027\uFF0C\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306A\u3069\u306B\u95A2\u3059\u308B\u6B20\u9665\uFF0C\u30A8\u30E9\u30FC\u3084\u30D0\u30B0\uFF0C\u6A29\u5229\u4FB5\u5BB3\u306A\u3069\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u304C\u306A\u3044\u3053\u3068\u3092\u660E\u793A\u7684\u306B\u3082\u9ED9\u793A\u7684\u306B\u3082\u4FDD\u8A3C\u3057\u3066\u304A\u308A\u307E\u305B\u3093\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u8D77\u56E0\u3057\u3066\u30E6\u30FC\u30B6\u30FC\u306B\u751F\u3058\u305F\u3042\u3089\u3086\u308B\u640D\u5BB3\u306B\u3064\u3044\u3066\u3001\u7BA1\u7406\u8005\u306E\u6545\u610F\u53C8\u306F\u91CD\u904E\u5931\u306B\u3088\u308B\u5834\u5408\u3092\u9664\u304D\u3001\u4E00\u5207\u306E\u8CAC\u4EFB\u3092\u8CA0\u3044\u307E\u305B\u3093\u3002\u305F\u3060\u3057\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u7BA1\u7406\u8005\u3068\u30E6\u30FC\u30B6\u30FC\u3068\u306E\u9593\u306E\u5951\u7D04\uFF08\u672C\u898F\u7D04\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u304C\u6D88\u8CBB\u8005\u5951\u7D04\u6CD5\u306B\u5B9A\u3081\u308B\u6D88\u8CBB\u8005\u5951\u7D04\u3068\u306A\u308B\u5834\u5408\uFF0C\u3053\u306E\u514D\u8CAC\u898F\u5B9A\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002"
  },
  {
    type: "text",
    text: "\u524D\u9805\u305F\u3060\u3057\u66F8\u306B\u5B9A\u3081\u308B\u5834\u5408\u3067\u3042\u3063\u3066\u3082\uFF0C\u7BA1\u7406\u8005\u306F\uFF0C\u7BA1\u7406\u8005\u306E\u904E\u5931\uFF08\u91CD\u904E\u5931\u3092\u9664\u304D\u307E\u3059\u3002\uFF09\u306B\u3088\u308B\u50B5\u52D9\u4E0D\u5C65\u884C\u307E\u305F\u306F\u4E0D\u6CD5\u884C\u70BA\u306B\u3088\u308A\u30E6\u30FC\u30B6\u30FC\u306B\u751F\u3058\u305F\u640D\u5BB3\u306E\u3046\u3061\u7279\u5225\u306A\u4E8B\u60C5\u304B\u3089\u751F\u3058\u305F\u640D\u5BB3\uFF08\u7BA1\u7406\u8005\u307E\u305F\u306F\u30E6\u30FC\u30B6\u30FC\u304C\u640D\u5BB3\u767A\u751F\u306B\u3064\u304D\u4E88\u898B\u3057\uFF0C\u307E\u305F\u306F\u4E88\u898B\u3057\u5F97\u305F\u5834\u5408\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u306B\u3064\u3044\u3066\u4E00\u5207\u306E\u8CAC\u4EFB\u3092\u8CA0\u3044\u307E\u305B\u3093\u3002\u307E\u305F\uFF0C\u7BA1\u7406\u8005\u306E\u904E\u5931\uFF08\u91CD\u904E\u5931\u3092\u9664\u304D\u307E\u3059\u3002\uFF09\u306B\u3088\u308B\u50B5\u52D9\u4E0D\u5C65\u884C\u307E\u305F\u306F\u4E0D\u6CD5\u884C\u70BA\u306B\u3088\u308A\u30E6\u30FC\u30B6\u30FC\u306B\u751F\u3058\u305F\u640D\u5BB3\u306E\u8CE0\u511F\u306F\uFF0C\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u5F53\u8A72\u640D\u5BB3\u304C\u767A\u751F\u3057\u305F\u6708\u306B\u53D7\u9818\u3057\u305F\u5229\u7528\u6599\u306E\u984D\u3092\u4E0A\u9650\u3068\u3057\u307E\u3059\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3057\u3066\uFF0C\u30E6\u30FC\u30B6\u30FC\u3068\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u307E\u305F\u306F\u7B2C\u4E09\u8005\u3068\u306E\u9593\u306B\u304A\u3044\u3066\u751F\u3058\u305F\u53D6\u5F15\uFF0C\u9023\u7D61\u307E\u305F\u306F\u7D1B\u4E89\u7B49\u306B\u3064\u3044\u3066\u4E00\u5207\u8CAC\u4EFB\u3092\u8CA0\u3044\u307E\u305B\u3093\u3002"
  },
  { type: "title", text: "\u7B2C8\u6761\uFF08\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u306E\u5909\u66F4\u7B49\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u30E6\u30FC\u30B6\u30FC\u3078\u306E\u4E8B\u524D\u306E\u544A\u77E5\u3092\u3082\u3063\u3066\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5185\u5BB9\u3092\u5909\u66F4\u3001\u8FFD\u52A0\u307E\u305F\u306F\u5EC3\u6B62\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u3053\u308C\u3092\u627F\u8AFE\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C9\u6761\uFF08\u5229\u7528\u898F\u7D04\u306E\u5909\u66F4\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\u4EE5\u4E0B\u306E\u5834\u5408\u306B\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u500B\u5225\u306E\u540C\u610F\u3092\u8981\u305B\u305A\u3001\u672C\u898F\u7D04\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "text", text: "\u672C\u898F\u7D04\u306E\u5909\u66F4\u304C\u30E6\u30FC\u30B6\u30FC\u306E\u4E00\u822C\u306E\u5229\u76CA\u306B\u9069\u5408\u3059\u308B\u3068\u304D\u3002" },
  {
    type: "text",
    text: "\u672C\u898F\u7D04\u306E\u5909\u66F4\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u5951\u7D04\u306E\u76EE\u7684\u306B\u53CD\u305B\u305A\u3001\u304B\u3064\u3001\u5909\u66F4\u306E\u5FC5\u8981\u6027\u3001\u5909\u66F4\u5F8C\u306E\u5185\u5BB9\u306E\u76F8\u5F53\u6027\u305D\u306E\u4ED6\u306E\u5909\u66F4\u306B\u4FC2\u308B\u4E8B\u60C5\u306B\u7167\u3089\u3057\u3066\u5408\u7406\u7684\u306A\u3082\u306E\u3067\u3042\u308B\u3068\u304D\u3002"
  },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\u30E6\u30FC\u30B6\u30FC\u306B\u5BFE\u3057\u3001\u524D\u9805\u306B\u3088\u308B\u672C\u898F\u7D04\u306E\u5909\u66F4\u306B\u3042\u305F\u308A\u3001\u4E8B\u524D\u306B\u3001\u672C\u898F\u7D04\u3092\u5909\u66F4\u3059\u308B\u65E8\u53CA\u3073\u5909\u66F4\u5F8C\u306E\u672C\u898F\u7D04\u306E\u5185\u5BB9\u4E26\u3073\u306B\u305D\u306E\u52B9\u529B\u767A\u751F\u6642\u671F\u3092\u901A\u77E5\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C10\u6761\uFF08\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u6271\u3044\uFF09" },
  {
    type: "text",
    text: "\u7BA1\u7406\u8005\u306F\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u3088\u3063\u3066\u53D6\u5F97\u3059\u308B\u500B\u4EBA\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\uFF0C\u7BA1\u7406\u8005\u300C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u300D\u306B\u5F93\u3044\u9069\u5207\u306B\u53D6\u308A\u6271\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C11\u6761\uFF08\u901A\u77E5\u307E\u305F\u306F\u9023\u7D61\uFF09" },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u3068\u7BA1\u7406\u8005\u3068\u306E\u9593\u306E\u901A\u77E5\u307E\u305F\u306F\u9023\u7D61\u306F\uFF0C\u7BA1\u7406\u8005\u306E\u5B9A\u3081\u308B\u65B9\u6CD5\u306B\u3088\u3063\u3066\u884C\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u7BA1\u7406\u8005\u306F,\u30E6\u30FC\u30B6\u30FC\u304B\u3089,\u7BA1\u7406\u8005\u304C\u5225\u9014\u5B9A\u3081\u308B\u65B9\u5F0F\u306B\u5F93\u3063\u305F\u5909\u66F4\u5C4A\u3051\u51FA\u304C\u306A\u3044\u9650\u308A,\u73FE\u5728\u767B\u9332\u3055\u308C\u3066\u3044\u308B\u9023\u7D61\u5148\u304C\u6709\u52B9\u306A\u3082\u306E\u3068\u307F\u306A\u3057\u3066\u5F53\u8A72\u9023\u7D61\u5148\u3078\u901A\u77E5\u307E\u305F\u306F\u9023\u7D61\u3092\u884C\u3044,\u3053\u308C\u3089\u306F,\u767A\u4FE1\u6642\u306B\u30E6\u30FC\u30B6\u30FC\u3078\u5230\u9054\u3057\u305F\u3082\u306E\u3068\u307F\u306A\u3057\u307E\u3059\u3002"
  },
  { type: "title", text: "\u7B2C12\u6761\uFF08\u6A29\u5229\u7FA9\u52D9\u306E\u8B72\u6E21\u306E\u7981\u6B62\uFF09" },
  {
    type: "text",
    text: "\u30E6\u30FC\u30B6\u30FC\u306F\uFF0C\u7BA1\u7406\u8005\u306E\u66F8\u9762\u306B\u3088\u308B\u4E8B\u524D\u306E\u627F\u8AFE\u306A\u304F\uFF0C\u5229\u7528\u5951\u7D04\u4E0A\u306E\u5730\u4F4D\u307E\u305F\u306F\u672C\u898F\u7D04\u306B\u57FA\u3065\u304F\u6A29\u5229\u3082\u3057\u304F\u306F\u7FA9\u52D9\u3092\u7B2C\u4E09\u8005\u306B\u8B72\u6E21\u3057\uFF0C\u307E\u305F\u306F\u62C5\u4FDD\u306B\u4F9B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"
  },
  { type: "title", text: "\u7B2C13\u6761\uFF08\u6E96\u62E0\u6CD5\u30FB\u88C1\u5224\u7BA1\u8F44\uFF09" },
  { type: "text", text: "\u672C\u898F\u7D04\u306E\u89E3\u91C8\u306B\u3042\u305F\u3063\u3066\u306F\uFF0C\u65E5\u672C\u6CD5\u3092\u6E96\u62E0\u6CD5\u3068\u3057\u307E\u3059\u3002" },
  {
    type: "text",
    text: "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3057\u3066\u7D1B\u4E89\u304C\u751F\u3058\u305F\u5834\u5408\u306B\u306F\uFF0C\u7BA1\u7406\u8005\u306E\u672C\u5E97\u6240\u5728\u5730\u3092\u7BA1\u8F44\u3059\u308B\u88C1\u5224\u6240\u3092\u5C02\u5C5E\u7684\u5408\u610F\u7BA1\u8F44\u3068\u3057\u307E\u3059\u3002"
  }
];

// app/routes/terms.tsx
var import_react62 = require("react");
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function Index18() {
  let scrollRef = (0, import_react62.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "w-full flex flex-col items-center justify-around p-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h1", { className: "text-base font-bold", ref: scrollRef, children: "\u5229\u7528\u898F\u7D04" }, void 0, !1, {
      fileName: "app/routes/terms.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { children: "\u3053\u306E\u5229\u7528\u898F\u7D04\uFF08\u4EE5\u4E0B\uFF0C\u300C\u672C\u898F\u7D04\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306F\uFF0Cshift maker\u7BA1\u7406\u8005\uFF08\u4EE5\u4E0B\uFF0C\u300C\u7BA1\u7406\u8005\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u304C\u3053\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u4E0A\u3067\u63D0\u4F9B\u3059\u308B\u30B5\u30FC\u30D3\u30B9\uFF08\u4EE5\u4E0B\uFF0C\u300C\u672C\u30B5\u30FC\u30D3\u30B9\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306E\u5229\u7528\u6761\u4EF6\u3092\u5B9A\u3081\u308B\u3082\u306E\u3067\u3059\u3002\u767B\u9332\u30E6\u30FC\u30B6\u30FC\u306E\u7686\u3055\u307E\uFF08\u4EE5\u4E0B\uFF0C\u300C\u30E6\u30FC\u30B6\u30FC\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306B\u306F\uFF0C\u672C\u898F\u7D04\u306B\u5F93\u3063\u3066\uFF0C\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u3054\u5229\u7528\u3044\u305F\u3060\u304D\u307E\u3059\u3002" }, void 0, !1, {
      fileName: "app/routes/terms.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    terms_default.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex flex-col items-start justify-start w-full", children: item.type === "title" ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h3", { className: "mt-5 mb-2 font-semibold", children: item.text }, void 0, !1, {
      fileName: "app/routes/terms.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex mb-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "mr-1", children: "\u30FB" }, void 0, !1, {
        fileName: "app/routes/terms.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { children: item.text }, void 0, !1, {
        fileName: "app/routes/terms.tsx",
        lineNumber: 28,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terms.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, i, !1, {
      fileName: "app/routes/terms.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ToTopButton, { scrollToElementRef: scrollRef }, void 0, !1, {
      fileName: "app/routes/terms.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/terms.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-33OAMI4E.js", imports: ["/build/_shared/chunk-DHEYBO7H.js", "/build/_shared/chunk-EUV4A4Y6.js", "/build/_shared/chunk-QCOQTQ6A.js", "/build/_shared/chunk-W6P3DLNM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SMIIKT4M.js", imports: ["/build/_shared/chunk-A267VHZD.js", "/build/_shared/chunk-5B2ANMD6.js", "/build/_shared/chunk-KMOTBYPD.js", "/build/_shared/chunk-CJY67DW4.js", "/build/_shared/chunk-SGSFPSEE.js", "/build/_shared/chunk-EUOB5R3V.js", "/build/_shared/chunk-U3ZPHSZG.js", "/build/_shared/chunk-5I2MEATQ.js", "/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-L2VKQKIY.js", "/build/_shared/chunk-WSD5J736.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/$date.$shiftId/edit": { id: "routes/$date.$shiftId/edit", parentId: "root", path: ":date/:shiftId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/$date.$shiftId/edit-7OHC5N3K.js", imports: ["/build/_shared/chunk-YW3PZZ33.js", "/build/_shared/chunk-JQUGQ3LN.js", "/build/_shared/chunk-GFPEYQ5M.js", "/build/_shared/chunk-J6BGVCKW.js", "/build/_shared/chunk-Z5ZXTMPJ.js", "/build/_shared/chunk-IJVQWQV3.js", "/build/_shared/chunk-6Z5R5CIM.js", "/build/_shared/chunk-KLD3NTCL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$date.$shiftId/show": { id: "routes/$date.$shiftId/show", parentId: "root", path: ":date/:shiftId/show", index: void 0, caseSensitive: void 0, module: "/build/routes/$date.$shiftId/show-7TC3CICK.js", imports: ["/build/_shared/chunk-GFPEYQ5M.js", "/build/_shared/chunk-GAYTMOLT.js", "/build/_shared/chunk-J6BGVCKW.js", "/build/_shared/chunk-Z5ZXTMPJ.js", "/build/_shared/chunk-IJVQWQV3.js", "/build/_shared/chunk-6Z5R5CIM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__account": { id: "routes/__account", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__account-OGIH3SA6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__account/login": { id: "routes/__account/login", parentId: "routes/__account", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__account/login-C3ZAN745.js", imports: ["/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-6Z5R5CIM.js", "/build/_shared/chunk-L2VKQKIY.js", "/build/_shared/chunk-KLD3NTCL.js", "/build/_shared/chunk-WSD5J736.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__account/register": { id: "routes/__account/register", parentId: "routes/__account", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/__account/register-ZBVWNZEI.js", imports: ["/build/_shared/chunk-6Z5R5CIM.js", "/build/_shared/chunk-L2VKQKIY.js", "/build/_shared/chunk-KLD3NTCL.js", "/build/_shared/chunk-WSD5J736.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create": { id: "routes/create", parentId: "root", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/create-EPBEOQI6.js", imports: ["/build/_shared/chunk-JQUGQ3LN.js", "/build/_shared/chunk-Z5ZXTMPJ.js", "/build/_shared/chunk-IJVQWQV3.js", "/build/_shared/chunk-6Z5R5CIM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create/automation": { id: "routes/create/automation", parentId: "routes/create", path: "automation", index: void 0, caseSensitive: void 0, module: "/build/routes/create/automation-UG55ZGGS.js", imports: ["/build/_shared/chunk-YW3PZZ33.js", "/build/_shared/chunk-GFPEYQ5M.js", "/build/_shared/chunk-KMOTBYPD.js", "/build/_shared/chunk-J6BGVCKW.js", "/build/_shared/chunk-EUOB5R3V.js", "/build/_shared/chunk-U3ZPHSZG.js", "/build/_shared/chunk-5I2MEATQ.js", "/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-L2VKQKIY.js", "/build/_shared/chunk-KLD3NTCL.js", "/build/_shared/chunk-WSD5J736.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create/confirm": { id: "routes/create/confirm", parentId: "routes/create", path: "confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/create/confirm-K23UDUIF.js", imports: ["/build/_shared/chunk-Z677Y445.js", "/build/_shared/chunk-GAYTMOLT.js", "/build/_shared/chunk-SGSFPSEE.js", "/build/_shared/chunk-EUOB5R3V.js", "/build/_shared/chunk-U3ZPHSZG.js", "/build/_shared/chunk-5I2MEATQ.js", "/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-WSD5J736.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create/date": { id: "routes/create/date", parentId: "routes/create", path: "date", index: void 0, caseSensitive: void 0, module: "/build/routes/create/date-YWHF2RUK.js", imports: ["/build/_shared/chunk-BG4CHRB6.js", "/build/_shared/chunk-GAYTMOLT.js", "/build/_shared/chunk-J6BGVCKW.js", "/build/_shared/chunk-EUOB5R3V.js", "/build/_shared/chunk-U3ZPHSZG.js", "/build/_shared/chunk-5I2MEATQ.js", "/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-WSD5J736.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WS2E7CL7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/manual": { id: "routes/manual", parentId: "root", path: "manual", index: void 0, caseSensitive: void 0, module: "/build/routes/manual-H5T6YSI3.js", imports: ["/build/_shared/chunk-TMLBTWDQ.js", "/build/_shared/chunk-6Z5R5CIM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/mypage": { id: "routes/mypage", parentId: "root", path: "mypage", index: void 0, caseSensitive: void 0, module: "/build/routes/mypage-7YI6XGCI.js", imports: ["/build/_shared/chunk-IJVQWQV3.js", "/build/_shared/chunk-6Z5R5CIM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/policy": { id: "routes/policy", parentId: "root", path: "policy", index: void 0, caseSensitive: void 0, module: "/build/routes/policy-LM3M6V2V.js", imports: ["/build/_shared/chunk-TMLBTWDQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/shift": { id: "routes/shift", parentId: "root", path: "shift", index: void 0, caseSensitive: void 0, module: "/build/routes/shift-HJNQQ63O.js", imports: ["/build/_shared/chunk-GAYTMOLT.js", "/build/_shared/chunk-J6BGVCKW.js", "/build/_shared/chunk-Z5ZXTMPJ.js", "/build/_shared/chunk-6Z5R5CIM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/shift/$date": { id: "routes/shift/$date", parentId: "routes/shift", path: ":date", index: void 0, caseSensitive: void 0, module: "/build/routes/shift/$date-2MAH6LWN.js", imports: ["/build/_shared/chunk-SGSFPSEE.js", "/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/shift/index": { id: "routes/shift/index", parentId: "routes/shift", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/shift/index-3LI3UM4N.js", imports: ["/build/_shared/chunk-SGSFPSEE.js", "/build/_shared/chunk-D65XZM7E.js", "/build/_shared/chunk-SSETOCUL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms": { id: "routes/terms", parentId: "root", path: "terms", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-C45OAXGY.js", imports: ["/build/_shared/chunk-TMLBTWDQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/workingTime": { id: "routes/workingTime", parentId: "root", path: "workingTime", index: void 0, caseSensitive: void 0, module: "/build/routes/workingTime-7QC4HJZG.js", imports: ["/build/_shared/chunk-Z677Y445.js", "/build/_shared/chunk-BG4CHRB6.js", "/build/_shared/chunk-GAYTMOLT.js", "/build/_shared/chunk-J6BGVCKW.js", "/build/_shared/chunk-Z5ZXTMPJ.js", "/build/_shared/chunk-IJVQWQV3.js", "/build/_shared/chunk-KLD3NTCL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "d09dfb37", hmr: void 0, url: "/build/manifest-D09DFB37.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$date.$shiftId/edit": {
    id: "routes/$date.$shiftId/edit",
    parentId: "root",
    path: ":date/:shiftId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/$date.$shiftId/show": {
    id: "routes/$date.$shiftId/show",
    parentId: "root",
    path: ":date/:shiftId/show",
    index: void 0,
    caseSensitive: void 0,
    module: show_exports
  },
  "routes/workingTime": {
    id: "routes/workingTime",
    parentId: "root",
    path: "workingTime",
    index: void 0,
    caseSensitive: void 0,
    module: workingTime_exports
  },
  "routes/__account": {
    id: "routes/__account",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/__account/register": {
    id: "routes/__account/register",
    parentId: "routes/__account",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/__account/login": {
    id: "routes/__account/login",
    parentId: "routes/__account",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/create": {
    id: "routes/create",
    parentId: "root",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/create/automation": {
    id: "routes/create/automation",
    parentId: "routes/create",
    path: "automation",
    index: void 0,
    caseSensitive: void 0,
    module: automation_exports
  },
  "routes/create/confirm": {
    id: "routes/create/confirm",
    parentId: "routes/create",
    path: "confirm",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_exports
  },
  "routes/create/date": {
    id: "routes/create/date",
    parentId: "routes/create",
    path: "date",
    index: void 0,
    caseSensitive: void 0,
    module: date_exports
  },
  "routes/manual": {
    id: "routes/manual",
    parentId: "root",
    path: "manual",
    index: void 0,
    caseSensitive: void 0,
    module: manual_exports
  },
  "routes/mypage": {
    id: "routes/mypage",
    parentId: "root",
    path: "mypage",
    index: void 0,
    caseSensitive: void 0,
    module: mypage_exports
  },
  "routes/policy": {
    id: "routes/policy",
    parentId: "root",
    path: "policy",
    index: void 0,
    caseSensitive: void 0,
    module: policy_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/shift": {
    id: "routes/shift",
    parentId: "root",
    path: "shift",
    index: void 0,
    caseSensitive: void 0,
    module: shift_exports
  },
  "routes/shift/$date": {
    id: "routes/shift/$date",
    parentId: "routes/shift",
    path: ":date",
    index: void 0,
    caseSensitive: void 0,
    module: date_exports2
  },
  "routes/shift/index": {
    id: "routes/shift/index",
    parentId: "routes/shift",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: shift_exports2
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "root",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
