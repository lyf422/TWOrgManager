<template>
    <i-card>
        <i-row type="flex">
            <i-col span="3">
                <i-button size="large" type="primary" @click="showModal()">新建工作流</i-button>
            </i-col>
            <i-col span="6">
                <i-input prefix="ios-search" size="large" placeholder="查询工作流" />
            </i-col>
        </i-row>
        <i-divider />
        <i-table stripe :columns="columns" :data="data" row-key="ID">
            <template slot="action" slot-scope="{index, row}">
                <i-button @click="reloadWorkFlow(index, row)">刷新</i-button>
            </template>
        </i-table>
        <i-modal title="新建/管理工作流" v-model="visible">
            <i-form>
                <i-form-item label="工作流内容">
                    <i-input type="textarea" v-model="json"/>
                </i-form-item>
            </i-form>
            <div slot="footer">
                <Button type="primary" @click="createWorkFlow">确认</Button>
            </div>
        </i-modal>
    </i-card>
</template>

<script>
const axios = require("axios");
export default {
    data () {
        return {
            json: "",
            columns: [
                {
                    title: "名称",
                    key: "Name",
                    tree: true
                },
                {
                    title: "版本",
                    key: "Version"
                },
                {
                    title: "创建时间",
                    key: "CreatedOn"
                },
                {
                    title: "操作",
                    slot: "action"
                }
            ],
            visible: false,
            data: [
                    {
                        ID: "100",
                        Name: "成员申请流程",
                        Version: "1.0",
                        CreatedOn: "2019年10月15日"
                    },
                    {
                        ID: "102",
                        Name: "活动申请流程",
                        Version: "3.0",
                        CreatedOn: "2019年12月15日",
                        children: [
                            {
                                ID: "10201",
                                Name: "活动申请流程",
                                Version: "2.0",
                                CreatedOn: "2019年12月14日"
                            },
                            {
                                ID: "10202",
                                Name: "活动申请流程",
                                Version: "1.0",
                                CreatedOn: "2019年12月10日"
                            }
                        ]
                    },
                    {
                        ID: "103",
                        Name: "指导老师申请流程",
                        Version: "1.0",
                        CreatedOn: "2020年1月15日"
                    },
                    {
                        ID: "104",
                        Name: "子部门申请流程",
                        Version: "2.0",
                        CreatedOn: "2019年12月20日",
                        children: [
                            {
                                ID: "10401",
                                Name: "子部门申请流程",
                                Version: "1.15",
                                CreatedOn: "2019年12月14日"
                            },
                            {
                                ID: "10402",
                                Name: "子部门申请流程",
                                Version: "1.0",
                                CreatedOn: "2019年12月1日"
                            }
                        ]
                    }
                ]
            }
    },
    methods: {
        showModal () {
            this.visible = true;
            this.json = "";
        },
        createWorkFlow () {
            var json = window.btoa(encodeURIComponent(this.json));
            axios.postStream("/api/workflow/SubmitWorkflow", {json: json}, msg => {
                if (msg.success) {
                    if (msg.Errors !== []) {
                        this.$Message.warning(msg.Errors[0]);
                        return;
                    }
                    this.$Message.success("工作流创建成功");
                    console.log(msg);
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
            this.visible = false;
        },
        getWorkFlows () {
            axios.post("/api/workflow/GetWorkflows", {}, msg => {
                if (msg.success) {
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
        },
        reloadWorkFlow (index, row) {
            axios.post("/api/workflow/ReloadWorkflow", {workflow: row.Name, version: row.Version}, msg => {
                if (msg.success) {
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
        }
    },
    mounted () {
        this.getWorkFlows();
    }
}
</script>
