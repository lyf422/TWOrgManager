module.exports = {
    OrgManage: {
        path: "/manage/dashboard",
        layout: "admin",
        component: () => import(/* webpackChunkName: "OrgManager" */"@p/Modules/OrgManager")
    },
    OrgDetail: {
        path: "/manage/org/detail",
        layout: "admin",
        showAs: "OrgManage",
        component: () => import(/* webpackChunkName: "OrgManager" */"@p/Modules/OrgDetail")
    }
};
