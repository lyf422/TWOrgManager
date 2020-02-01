<template>
    <i-card>
        <i-row type="flex">
            <i-col span="3">
                <i-button size="large" type="primary" @click="showModal(-1)">新建工作流</i-button>
            </i-col>
            <i-col span="6">
                <i-input prefix="ios-search" size="large" placeholder="查询工作流" />
            </i-col>
        </i-row>
        <i-divider />
        <i-table stripe :columns="columns" :data="data" row-key="ID">
            <template slot="action" slot-scope="{index, row}">
                <i-button @click="reloadWorkFlow(index, row)">刷新</i-button>
                <i-button @click="modifyWorkFlow(index,row)">修改</i-button>
            </template>
        </i-table>
        <i-modal title="新建/管理工作流" v-model="visible">
            <i-form>
                <i-form-item label="工作流内容">
                    <i-input type="textarea" :rows="8" v-model="json"/>
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
                    title: "激活版本",
                    key: "ActivationVersion"
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
            data: []
            }
    },
    methods: {
        showModal (index, row) {
            this.visible = true;
            if (index === -1) {
                this.json = "";
            } else {
                let temp = {};
                row.Histories.map(e => {
                    if (e.Version === row.ActivationVersion) {
                        temp = e;
                    }
                })
                axios.post("/api/workflow/GetWorkflowJson", {id: temp.ID}, msg => {
                    if (msg.success) {
                        this.json = msg.json;
                    } else {
                        this.$Message.warning(msg.msg);
                    }
                })
            }
        },
        createWorkFlow () {
            var json = window.btoa(encodeURIComponent(this.json));
            axios.postStream("/api/workflow/SubmitWorkflow", {json: json}, msg => {
                if (msg.success) {
                    if (msg.Errors.length > 0) {
                        this.$Message.warning(msg.Errors[0]);
                    } else {
                        this.$Message.success("工作流创建成功");
                    }
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
            this.visible = false;
            this.getWorkFlows();
        },
        modifyWorkFlow (index, row) {
            this.showModal(index, row);
        },
        getWorkFlows () {
            axios.post("/api/workflow/GetWorkflows", {}, msg => {
                if (msg.success) {
                    this.data = msg.data;
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
        },
        reloadWorkFlow (index, row) {
            axios.post("/api/workflow/ReloadWorkflow", {workflow: row.Name, version: row.Version}, msg => {
                if (msg.success) {
                    this.$Message.success("刷新成功");
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
