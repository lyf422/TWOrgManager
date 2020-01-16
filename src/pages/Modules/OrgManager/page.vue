<template>
    <i-card :padding="50">
        <i-row type="flex" justify="center">
            <i-col span="13">
                <i-row>
                    <div class="welcome">{{time}}好，{{userInfo.realName}}</div>
                </i-row>
                <i-row>
                    <div v-if="messageNum>0">您有{{messageNum}}条消息</div>
                    <div v-else class="tip">您目前没有待办事项</div>
                </i-row>
                <i-row v-if="messageNum>0">
                    <i-row v-for="(item,index) in message" @click="dealWorkflow(item.instanceId,item.stepId)" :key="index">
                        <div>{{item.Owner}}的{{item.workflowName}}流程已经到了您的步骤:{{item.StepName}}</div>
                    </i-row>
                </i-row>
                <i-divider />
                <i-row class="title">常用入口</i-row>
                <i-row type="flex" justify="space-between">
                    <template v-if="dashBoard.DepartType===1">
                        <i-col span="7"  v-for="(item,index) in entrForStudent" :key="index">
                            <i-card class="layout-con" :to="item.routerTo">
                                <i-avatar class="margin" :icon="item.icon" />{{item.title}}
                            </i-card>
                        </i-col>
                    </template>
                    <template v-else-if="dashBoard.DepartType===0">
                        <i-col span="7"  v-for="(item,index) in entrForStudent" :key="index">
                            <i-card class="layout-con" :to="item.routerTo">
                                <i-avatar class="margin" :icon="item.icon" />{{item.title}}
                            </i-card>
                        </i-col>
                    </template>
                </i-row>
            </i-col>
            <i-col span="5" offset="2">
                <i-card :title="dashBoard.Name||'请设置社团名称'" :padding="0">
                    <i-cell-group style="padding: 10px 0px">
                        <i-cell :title="`现有成员:${dashBoard.users}人`" :to="entrForStudent[0].routerTo"></i-cell>
                        <i-cell :title="`指导老师:${dashBoard.teachers.length?dashBoard.teachers.length:'无'}`" v-if="dashBoard.DepartType===1">
                            <i-row v-for="(item,index) in dashBoard.teachers" :key="index">
                                {{item}}
                            </i-row>
                        </i-cell>
                        <i-cell :title="`子部门:${dashBoard.children?dashBoard.children:'无'}`" v-else-if="dashBoard.DepartType===0">
                        </i-cell>
                    </i-cell-group>
                </i-card>
            </i-col>
        </i-row>
    </i-card>
</template>

<script>
import axios from 'axios';
let app = require("@/config");
export default {
    data () {
        return {
            messageNum: 0,
            message: [],
            time: "早上",
            dashBoard: {
                users: 0,
                teachers: [],
                children: 0,
                StrType: 0,
                DepartType: 0,
                BirthTime: "",
                Name: ""
            },
            userInfo: app.userInfo,
            entrForStudent: [
                {
                    title: "添加成员",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name2"
                        }
                    },
                    icon: "md-person-add"
                },
                {
                    title: "申请活动",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name5"
                        }
                    },
                    icon: "logo-buffer"
                },
                {
                    title: "基本信息",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name1"
                        }
                    },
                    icon: "md-information"
                }
            ],
            entrForTeacher: [
                {
                    title: "添加成员",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name2"
                        }
                    },
                    icon: "md-person-add"
                },
                {
                    title: "添加社团",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name3"
                        }
                    },
                    icon: "md-add"
                },
                {
                    title: "申请活动",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name5"
                        }
                    },
                    icon: "logo-buffer"
                },
                {
                    title: "基本信息",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "name1"
                        }
                    },
                    icon: "md-information"
                }
            ]
        };
    },
    mounted () {
        app.title = "社团管理";
        this.getDashBoard();
        this.judgeTime();
        this.getPending();
        // this.$router.push({name: 'OrgDetail'});
    },
    methods: {
        getDashBoard () {
            axios.post("/api/org/GetDashboard", {}, msg => {
                this.dashBoard = msg;
                app.departType = msg.DepartType;
            });
        },
        judgeTime () {
            let day2 = new Date();
            day2.setTime(day2.getTime());
            let s2 = day2.getHours();
            if (s2 < 6) this.time = "午夜";
            else if (s2 < 12) this.time = "上午";
            else if (s2 < 14) this.time = "中午";
            else if (s2 < 18) this.time = "下午";
            else if (s2 < 24) this.time = "晚上";
        },
        getPending () {
            axios.post("/api/workflow/pending", {}, msg => {
                this.messageNum = msg.totalRow;
                this.message = msg.data;
            })
        },
        dealWorkflow (instanceId, stepId) {

        },
        navTo (url) {
            this.$router.push({name: 'OrgDetail'});
        }
    }
}
</script>

<style lang="less">
    .welcome {
        font-size: 32px;
        color: #17233d;
        padding: 5px 0;
        font-weight: bold;
    }
    .tip {
        font-size: 18px;
        color: #808695;
        padding: 5px 0;
    }
    .title {
        font-size: 28px;
        color: #17233d;
        padding: 10px 0px;
    }
    .padding {
        padding: 10px;
    }
    .margin {
        margin: 10px;
    }
    .layout-con {
        text-align: center;
        color: #515a6e;
    }
</style>
