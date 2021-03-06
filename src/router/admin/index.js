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
        component: () => import(/* webpackChunkName: "WorkflowManager" */"@p/Modules/WorkflowConfig")
    },
    AllFlow: {
        path: "/manage/wwf/allflow",
        layout: "admin",
        component: () => import(/* webpackChunkName: "WorkflowManager" */"@p/Modules/AllFlow")
    },
    MyAttend: {
        path: "/manage/wwf/myattend",
        layout: "admin",
        component: () => import(/* webpackChunkName: "WorkflowManager" */"@p/Modules/MyAttend")
    },
    MyFlow: {
        path: "/manage/wwf/myflow",
        layout: "admin",
        component: () => import(/* webpackChunkName: "WorkflowManager" */"@p/Modules/MyFlow")
    }
};
