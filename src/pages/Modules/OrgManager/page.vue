<template>
    <i-card :padding="50">
        <i-row type="flex" justify="center">
            <i-col span="13">
                <i-row>
                    <div class="welcome">{{time}}好，{{userInfo.realName}}</div>
                </i-row>
                <!--List v-if="messageNum<=0" :header="`您有${messageNum}条待办事项`" >
                    <ListItem>XXX的XX流程已到达您的步骤
                        <div slot="action">123</div>
                    </ListItem>
                    <ListItem>XXX的XX流程已到达您的步骤</ListItem>
                    <ListItem>XXX的XX流程已到达您的步骤</ListItem>
                </List-->
                <List v-if="messageNum>0" :header="`您有${messageNum}条待办事项`">
                    <template v-for="(item,index) in message" >
                        <ListItem :key="index">
                            <ListItemMeta :title="`${item.Owner}提交的${item.workflowName}流程已到达您的步骤`" :description="`到达时间:${item.ArriveOn}`"></ListItemMeta>
                            <template slot="action">
                                <li @click="dealWorkflow(item.instanceId,item.stepId)"><a>{{item.StepName}}</a></li>
                            </template>
                        </ListItem>
                    </template>
                </List>
                <template v-else>
                    <i-row class="tip">您目前没有待办事项</i-row>
                    <i-row class="layout-con"><img :src="pic" /></i-row>
                </template>
                <!--i-row v-if="messageNum>0">
                    <i-row v-for="(item,index) in message" @click="dealWorkflow(item.instanceId,item.stepId)" :key="index">
                        <div>{{item.Owner}}的{{item.workflowName}}流程已经到了您的步骤:{{item.StepName}}</div>
                    </i-row>
                </i-row-->
                <!--i-divider /-->
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
            <Divider type="vertical" />
            <i-col span="5" offset="2">
                <i-card :padding="0"  :to="routers[0]">
                    <template slot="title">
                        {{dashBoard.Name||'请设置社团名称'}}
                    </template>
                    <i-cell-group style="padding: 10px 0px">
                        <i-cell :title="`现有成员:${dashBoard.users}人`" :to="entrForStudent[0].routerTo"></i-cell>
                        <template v-if="dashBoard.DepartType===1">
                            <template v-if="dashBoard.teachers.length===0">
                                <i-cell title="指导老师:无" :to="routers[3]" />
                            </template>
                            <template v-else>
                                <i-cell :title="`指导老师:${dashBoard.teachers.length}`">
                                    <List>
                                        <ListItem v-for="(item,index) in dashBoard.teachers" :key="index" :to="routers[3]">
                                            {{item}}
                                        </ListItem>
                                    </List>
                                </i-cell>
                            </template>
                        </template>
                        <i-cell :title="`子部门:${dashBoard.children?dashBoard.children:'无'}`" v-else-if="dashBoard.DepartType===0" :to="routers[2]">
                        </i-cell>
                        <i-cell :title="`社团类型:${dashBoard.StrType}`">
                        </i-cell>
                        <i-cell :title="`成立时间:${dashBoard.BirthTime}`">
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
let pic = require("@/assets/icon.png");
export default {
    data () {
        return {
            pic: pic,
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
            routers: [
                {
                    name: "OrgDetail",
                    params: {
                        tabSelect: "basicInfo"
                    }
                }, {
                    name: "OrgDetail",
                    params: {
                        tabSelect: "member"
                    }
                }, {
                    name: "OrgDetail",
                    params: {
                        tabSelect: "subDept"
                    }
                }, {
                    name: "OrgDetail",
                    params: {
                        tabSelect: "tutor"
                    }
                }, {
                    name: "OrgDetail",
                    params: {
                        tabSelect: "manager"
                    }
                }, {
                    name: "OrgDetail",
                    params: {
                        tabSelect: "activity"
                    }
                }
            ],
            entrForStudent: [
                {
                    title: "添加成员",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "member"
                        }
                    },
                    icon: "md-person-add"
                },
                {
                    title: "申请活动",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "activity"
                        }
                    },
                    icon: "logo-buffer"
                },
                {
                    title: "基本信息",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "basicInfo"
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
                            tabSelect: "member"
                        }
                    },
                    icon: "md-person-add"
                },
                {
                    title: "添加社团",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "subDept"
                        }
                    },
                    icon: "md-add"
                },
                {
                    title: "申请活动",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "activity"
                        }
                    },
                    icon: "logo-buffer"
                },
                {
                    title: "基本信息",
                    routerTo: {
                        name: "OrgDetail",
                        params: {
                            tabSelect: "basicInfo"
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
            /* axios.post("/api/org/GetDashboard", {}, msg => {
                this.dashBoard = msg;
                console.log(this.dashBoard["teachers"]);
                app.departType = msg.DepartType;
            }); */
            this.dashBoard = {
                users: 0,
                teachers: ["赵江声", "黄玺"],
                Name: "轻乳酪蛋糕制作方法研究社团",
                children: 0,
                StrType: "社会实践类",
                DepartType: 1,
                BirthTime: "2020年1月17日"
            };
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
            this.message = [
                {
                    instanceId: 123456789123456789123456789,
                    stepId: 321654987987321654987987321654987987,
                    workflowName: "活动申请",
                    Version: "1.0",
                    Owner: "宋润涵",
                    StepName: "新建活动",
                    State: 0,
                    ExecStatus: 0,
                    ArriveOn: "2020/1/18"
                },
                {
                    instanceId: 123456789123456789123456789456,
                    stepId: 321654987987321654987987321654987945687,
                    workflowName: "活动申请",
                    Version: "1.0",
                    Owner: "宋润涵",
                    StepName: "审批活动",
                    State: 0,
                    ExecStatus: 0,
                    ArriveOn: "2020/1/18"
                },
                {
                    instanceId: 123456781239123456789123456789456,
                    stepId: 321654564987987321654987987321654987945687,
                    workflowName: "活动申请",
                    Version: "1.0",
                    Owner: "宋润涵",
                    StepName: "活动终审",
                    State: 0,
                    ExecStatus: 0,
                    ArriveOn: "2020/1/18"
                }
            ];
            this.messageNum = 3;
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
        padding: 10px 0;
        font-weight: bold;
    }
    .tip {
        font-size: 18px;
        color: #808695;
    }
    .title {
        font-size: 28px;
        color: #17233d;
        padding: 10px 0px;
        margin-top: 10px;
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
