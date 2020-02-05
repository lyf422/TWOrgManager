<template>
    <i-table :columns="columns" :data="tableData">
        <template slot="Action" slot-scope="{row}">
            <i-button @click="checkWorkflow(row.InstanceId, row.StepId)">执行</i-button>
        </template>
    </i-table>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            tableData: [],
            columns: [
                {
                    title: "流程类别",
                    key: "WorkflowName"
                },
                {
                    title: "创建者",
                    key: "Owner"
                },
                {
                    title: "创建时间",
                    key: "ArriveOn"
                },
                {
                    title: "当前状态",
                    key: "State"
                },
                {
                    title: "操作",
                    slot: "Action"
                }
            ]
        }
    },
    mounted () {
        this.getFlows();
    },
    methods: {
        getFlows () {
            axios.post("/api/workflow/MyFlow", {}, msg => {
                this.tableData = msg.data;
            });
        },
        checkWorkflow (instanceId, stepId) {
            window.open(`/manage/org/activityform?instanceId=${instanceId}&stepId=${stepId}&detail=true`);
        }
    }
}
</script>
