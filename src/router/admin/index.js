module.exports = {
    OrgManage: {
        path: "/manage/dashboard",
        layout: "admin",
        component: () => import(/* webpackChunkName: "OrgManager" */"@p/Modules/OrgManager")
    }
};
