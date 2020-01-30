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
    },
    ActivityForm: {
        path: "/manage/org/activityform",
        layout: "admin",
        showAs: "OrgManage",
        component: () => import(/* webpackChunkName: "OrgManager" */"@p/Modules/ActivityForm")
    },
    WorkflowConfig: {
        path: "/manage/wwf/config",
        layout: "admin",
        component: () => import(/* webpackChunkName: "OrgManager" */"@p/Modules/WorkflowConfig")
    }
};
