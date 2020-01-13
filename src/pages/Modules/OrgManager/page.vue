<template>
    <i-row  :gutter="16">
        <i-col span="16">
            <i-row>
                <div class="title">{{time}}好，{{userInfo.realName}}</div>
                <div v-if="messageNum>0">您有{{messageNum}}条消息</div>
                <div v-else class="tip">待办已经全部完成</div>
            </i-row>
            <i-row v-if="messageNum>0">
                <i-row v-for="(item,index) in message" @click="dealWorkflow(item.instanceId,item.stepId)" :key="index">
                    <div>{{item.Owner}}的{{item.workflowName}}流程已经到了您的步骤:{{item.StepName}}</div>
                </i-row>
            </i-row>
            <i-row v-else>
                图片
            </i-row>
            <Divider />
            <i-row>
                <div class="title">常用入口</div>
                <div v-if="data.DepartType==1">
                    <i-col span="7"  v-for="(item,index) in entrForStudent" :key="index" @click="navTo(item.url)">
                        <card class="margin layout-con">
                            <Avatar class="margin" :icon="item.icon" />{{item.title}}
                        </card>
                    </i-col>
                </div>
                <i-row v-else-if="data.DepartType==0">
                    <i-col span="7"  v-for="(item,index) in entrForStudent" :key="index" @click="navTo(item.url)">
                        <card class="margin layout-con">
                            <Avatar class="margin" :icon="item.icon" />{{item.title}}
                        </card>
                    </i-col>
                </i-row>
            </i-row>
        </i-col>
        <i-col span="8" class="">
            <i-row class="title">社团名称</i-row>
            <i-row>成员:人</i-row>
            <i-row v-if="data.DepartType==1">
                指导老师:{{data.teachers.length()}}
                <i-row v-for="(item,index) in data.teachers" :key="index">
                    {{item}}
                </i-row>
            </i-row>
            <i-row v-else-if="data.DepartType==0&&data.children>0">
                子部门:{{data.children}}
            </i-row>
        </i-col>
    </i-row>
    <i-card>
        <!--
            这个组件很得重要，他就是iView里的select控件，只不过多一个选项。选项内容进入后台“系统配置”->“数据字典配置”，里面的“字典归属”。
            比如在下面的示例中，dic为“政治面貌”那么就相当于在后台那里，“字典归属”为“政治面貌”的值的集合。
            之后，由其是在“修改社团信息”页面中，所有相关的选项都应当使用这个东西。比如“政治面貌”，“社团类型”，“指导老师类型”或者“社交媒体”等。
            具体使用哪一个，我会有下发的需求卡中有说明。
        -->
        <dic-select dic="政治面貌" v-model="face"/>
    </i-card>
</template>

<script>
import Axios from 'axios';
var app = require("@/config");
export default {
    data () {
        return {
            messageNum: 0,
            message: [],
            time: "早上",
            data: {
                users: 0,
                teachers: [],
                children: [],
                StrType: 0,
                DepartType: 0,
                BirthTime: ""
            },
            userInfo: app.userInfo,
            entrForStudent: [
                {
                    title: "添加成员",
                    url: "",
                    icon: "md-person-add"
                },
                {
                    title: "申请活动",
                    url: "",
                    icon: "logo-buffer"
                },
                {
                    title: "基本信息",
                    url: "",
                    icon: "md-information"
                }
            ],
            entrForTeacher: [
                {
                    title: "添加成员",
                    url: "",
                    icon: "md-person-add"
                },
                {
                    title: "添加社团",
                    url: "",
                    icon: "md-add"
                },
                {
                    title: "申请活动",
                    url: "",
                    icon: "logo-buffer"
                },
                {
                    title: "基本信息",
                    url: "",
                    icon: "md-information"
                }
            ]
            face: "群众"
        };
    },
    mounted () {
        app.title = "社团管理";
        this.getDashBoard();
        this.judgeTime();
        this.getPending();
    },
    methods: {
        getDashBoard () {
            Axios.post("/api/org/GetDashboard", {}, msg => {
                this.data = msg.data;
            });
        },
        judgeTime () {
            var day2 = new Date();
            day2.setTime(day2.getTime());
            var s2 = day2.getHours();
            if (s2 < 6) this.time = "午夜";
            else if (s2 < 12) this.time = "上午";
            else if (s2 < 14) this.time = "中午";
            else if (s2 < 18) this.time = "下午";
            else if (s2 < 24) this.time = "晚上";
        },
        getPending () {
            Axios.post("/api/workflow/pending", {}, msg => {
                this.messageNum = msg.totalRow;
                this.message = msg.data;
            })
        },
        dealWorkflow (instanceId, stepId) {

        },
        navTo (url) {

        }
        // this.$router.push({name: 'OrgDetail'});
    }
}
</script>

<style lang="less">
    .title {
        font-size: 20px;
        color: #464c5b;
        padding: 5px 0;
    }
    .tip {
        font-size: 14px;
        color: #9ea7b4;
        padding: 5px 0;
    }
    .padding {
        padding: 10px;
    }
    .margin {
        margin: 10px;
    }
    .layout-con {
        position: relative;
        overflow: hidden;
        text-align: center;
    }
</style>
