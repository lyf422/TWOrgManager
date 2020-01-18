let tableCol = {
    member: [
        {
            title: '姓名',
            key: 'RealName'
        },
        {
            title: '学号',
            key: 'Code'
        },
        {
            title: '手机',
            key: 'Mobile'
        },
        {
            title: '邮箱',
            key: 'Email'
        },
        {
            title: '生源地',
            key: 'Source'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    subDept: [
        {
            title: '部门名称',
            key: 'Name'
        },
        {
            title: '类型',
            key: 'DepartType'
        },
        {
            title: '挂靠单位',
            key: 'ParentId'
        },
        {
            title: '成立时间',
            key: 'BirthTime'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    tutor: [
        {
            title: '姓名',
            key: 'Name'
        },
        {
            title: '工号',
            key: 'Code'
        },
        {
            title: '类别',
            key: 'Category'
        },
        {
            title: '政治面貌',
            key: 'Status'
        },
        {
            title: '单位',
            key: 'Company'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    manager: [
        {
            title: '姓名',
            key: 'Name'
        },
        {
            title: '手机',
            key: 'Mobile'
        },
        {
            title: '邮箱',
            key: 'Email'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    activity: [
        {
            title: '活动名称',
            key: 'Name'
        },
        {
            title: '活动类型',
            key: 'Category'
        },
        {
            title: '活动时间',
            key: 'Time'
        },
        {
            title: '活动地点',
            key: 'Location'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ]
};
module.exports = tableCol;
