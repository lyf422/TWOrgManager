<template>
    <i-row>
        <i-card :padding="100">
            <i-row type="flex" style="margin: -50px 0px 40px 0px" align="middle">
                <i-col span="3">
                    <i-avatar :src="app.webInfo.avatar" size="120"/>
                </i-col>
                <i-col span="21">
                    <i-row style="font-size:30px; margin-bottom:10px">{{orgInfo.Name ? orgInfo.Name : "正在加载中"}}</i-row>
                    <i-row>
                        <i-col span="3">成员人数：{{users}}</i-col>
                        <i-col span="3">指导老师：{{teachers.length}}</i-col>
                    </i-row>
                </i-col>
            </i-row>
            <i-tabs v-model="tabSelect">
                <i-tab-pane label="基本信息" name="basicInfo">
                    <i-row>
                        <i-spin fix size="large" v-show="tableLoading"></i-spin>
                        <i-col span="16">
                            <i-form :model="orgInfo">
                                <i-row type="flex" justify="space-between">
                                    <i-col span="24">
                                        <i-form-item label="社团名称" span="8">
                                            <i-input v-model="orgInfo.Name"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="11">
                                        <i-form-item label="社团类型">
                                            <dic-select dic="社团类型" v-model="orgInfo.DepartType" />
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="成立时间">
                                            <i-date-picker type="date" v-model="orgInfo.BirthTime" format="yyyy年MM月dd日" />
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="11">
                                        <i-form-item label="部门电话">
                                            <i-input v-model="orgInfo.Phone"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="挂靠单位">
                                            <org-selector v-model="orgInfo.ParentId"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between" v-if="level === 3">
                                    <i-col span="11">
                                        <i-form-item label="排序号">
                                            <i-input v-model="orgInfo.Sort"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="部门类型">
                                            <i-select v-model="orgInfo.Type">
                                                <i-option :value="0" key="挂靠单位">挂靠单位</i-option>
                                                <i-option :value="1" key="社团">社团</i-option>
                                            </i-select>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-form-item label="部门描述">
                                    <i-input type="textarea" v-model="orgInfo.Description"/>
                                </i-form-item>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="11">
                                        <i-form-item label="是否有社团章程">
                                            <i-checkbox v-model="orgInfo.HaveDepartRule"></i-checkbox>
                                            <i-date-picker :disabled="!orgInfo.HaveDepartRule" v-model="orgInfo.RuleCreatedOn"></i-date-picker>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="是否成立团支部">
                                            <i-checkbox v-model="orgInfo.HaveLeagueBranch"></i-checkbox>
                                            <i-date-picker :disabled="!orgInfo.HaveLeagueBranch" v-model="orgInfo.LeagueBrachCreatedOn"></i-date-picker>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="11">
                                        <i-form-item label="是否有党支部">
                                            <i-checkbox v-model="orgInfo.HaveCPCBranch"></i-checkbox>
                                            <i-date-picker :disabled="!orgInfo.HaveCPCBranch" v-model="orgInfo.CPCBranchCreatedOn"></i-date-picker>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="党支部类型">
                                            <dic-select dic="党支部类型" :disabled="!orgInfo.HaveCPCBranch" v-model="orgInfo.CPCBranchType"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="11">
                                        <i-form-item label="社交媒体">
                                            <i-input v-model="orgInfo.SocialMedia"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="社交媒体粉丝数">
                                            <i-input v-model="orgInfo.SocialMediaFans"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="11">
                                        <i-form-item label="经费类型">
                                            <i-input v-model="orgInfo.FundsCategory"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="11">
                                        <i-form-item label="经费来源">
                                            <i-input v-model="orgInfo.ChannelForFunds"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-form-item label="备注1">
                                    <i-input type="textarea" v-model="orgInfo.Memo"/>
                                </i-form-item>
                                <i-form-item label="备注2">
                                    <i-input type="textarea" v-model="orgInfo.Remark"/>
                                </i-form-item>
                            </i-form>
                            <i-button type="primary" @click="saveOrgDetail()" :loading="isSaving">保存</i-button>
                        </i-col>
                        <i-col span="7" offset="1">
                            <i-timeline style="overflow-y:scroll; height:900px; padding-top: 10px;">
                                <TimelineItem v-for="(item,index) in logs" :key="index">
                                    <i-row>
                                        <p class="time">{{item.OperateOn}} {{item.Operator}}</p>
                                        <p class="content">
                                            <i-row v-for="(d,index) in item.Details" :key="index">
                                                {{d}}
                                            </i-row>
                                        </p>
                                    </i-row>
                                </TimelineItem>
                            </i-timeline>
                        </i-col>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="成员管理" name="member">
                    <i-card dis-hover>
                        <i-row type="flex" justify="space-between" align="middle" slot="title">
                            <i-col>
                                <i-row type="flex" align="middle" :gutter="16">
                                    <i-col>社团成员</i-col>
                                    <i-col><i-badge :count="tableData.length"></i-badge></i-col>
                                </i-row>
                            </i-col>
                            <i-col>
                                <i-row type="flex" :gutter="16">
                                    <i-col>
                                        <i-input prefix="ios-search" placeholder="搜索成员" v-model="keyword" @keyup.enter.native="getMemberTable()"/>
                                    </i-col>
                                    <i-col>
                                        <i-button type="primary" @click="addMember()">添加成员</i-button>
                                    </i-col>
                                </i-row>
                            </i-col>
                        </i-row>
                        <i-table stripe :columns="tableCol.member" :data="tableData.member" :loading="tableLoading">
                            <template slot="Action" slot-scope="{row}">
                                <i-button @click="modifyMember(row)" v-if="(level+orgInfo.Type>1)">修改</i-button>
                                <i-tooltip :disabled="!row.isAdmin" content="不能删除管理员" placement="top">
                                    <i-button :disabled="row.isAdmin" @click="delMember(row)" v-if="(2*orgInfo.Type+level>=3)">删除</i-button>
                                </i-tooltip>
                                <i-button v-if="(level === 3)&&(!row.isAdmin)" @click="setPositon(row.ID,'管理员')">设置管理员</i-button>
                                <i-poptip transfer v-model="visible" v-if="row.isAdmin">
                                    <i-button v-if="(level === 3)&&row.isAdmin">设置密码</i-button>
                                    <i-row slot="title">您正在更改社团管理员密码</i-row>
                                    <i-form  :model="password" slot="content" label-position="top" :rules="pwdRule">
                                        <i-form-item label="新密码" prop="password">
                                            <i-input v-model="password.password" size="small" type="password"/>
                                        </i-form-item>
                                        <i-form-item label="确认密码" prop="confirmPassword">
                                            <i-input v-model="password.confirmPassword" size="small" type="password"/>
                                        </i-form-item>
                                        <i-button type="primary" size="small" @click="setPassword(row)">确认</i-button>
                                        <i-button size="small" @click="cancelSet()">取消</i-button>
                                    </i-form>
                                </i-poptip>
                            </template>
                        </i-table>
                    </i-card>
                </i-tab-pane>
                <i-tab-pane :disabled="orgInfo.Type===1" label="子部门" name="subDept">
                    <i-card dis-hover>
                        <i-row type="flex" justify="space-between" align="middle" slot="title">
                            <i-col>
                                <i-row type="flex" align="middle" :gutter="16">
                                    <i-col>子部门</i-col>
                                    <i-col><i-badge :count="tableData.length"></i-badge></i-col>
                                </i-row>
                            </i-col>
                            <i-col>
                                <i-row type="flex" :gutter="16">
                                    <i-col>
                                        <i-input prefix="ios-search" placeholder="搜索部门"/>
                                    </i-col>
                                    <i-col>
                                        <i-button type="primary" @click="addSubDepart">
                                            新建部门
                                        </i-button>
                                    </i-col>
                                </i-row>
                            </i-col>
                        </i-row>
                        <i-row>
                            <i-table row-key="id" stripe :columns="tableCol.subDept" :data="tableData.subDept" :loading="tableLoading">
                                <template slot="Action" slot-scope="{row}">
                                    <i-button @click="modifySubDepart(row)">管理</i-button>
                                    <i-button @click="delSubDepart(row)">删除</i-button>
                                </template>
                            </i-table>
                        </i-row>
                    </i-card>
                </i-tab-pane>
                <i-tab-pane :disabled="orgInfo.Type===0" label="指导老师" name="tutor">
                    <i-card dis-hover>
                        <i-row type="flex" justify="space-between" align="middle" slot="title">
                            <i-col>
                                <i-row type="flex" align="middle" :gutter="16">
                                    <i-col>指导老师</i-col>
                                    <i-col><i-badge :count="tableData.length"></i-badge></i-col>
                                </i-row>
                            </i-col>
                            <i-col>
                                <i-row type="flex" :gutter="16">
                                    <i-col>
                                        <i-input prefix="ios-search" placeholder="搜索老师" v-model="keyword" @keyup.enter.native="getTutorTable()"/>
                                    </i-col>
                                    <i-col>
                                        <i-button type="primary" @click="addTutor()">添加老师</i-button>
                                    </i-col>
                                </i-row>
                            </i-col>
                        </i-row>
                        <i-row>
                        <i-table stripe :columns="tableCol.tutor" :data="tableData.tutor" :loading="tableLoading">
                            <template slot="Action" slot-scope="{row}">
                                <i-button @click="modifyTutor(row)">修改</i-button>
                                <i-button @click="delTutor(row)">删除</i-button>
                            </template>
                        </i-table>
                        </i-row>
                    </i-card>
                </i-tab-pane>
                <i-tab-pane label="社团活动" name="activity">
                    <i-card dis-hover>
                        <i-row type="flex" justify="space-between" align="middle" slot="title">
                            <i-col>
                                <i-row type="flex" align="middle" :gutter="16">
                                    <i-col>社团活动</i-col>
                                    <i-col><i-badge :count="tableData.length"></i-badge></i-col>
                                </i-row>
                            </i-col>
                            <i-col>
                                <i-row type="flex" :gutter="16">
                                    <i-col>
                                        <i-input prefix="ios-search" placeholder="搜索活动"/>
                                    </i-col>
                                    <i-col>
                                        <i-button type="primary">添加活动</i-button>
                                    </i-col>
                                </i-row>
                            </i-col>
                        </i-row>
                        <i-row>
                        <i-table stripe :columns="tableCol.activity" :data="tableData.activity" :loading="tableLoading">
                            <template slot="Action" slot-scope="{index, row}">
                                <i-button @click="modifyTableItem(index, row)">修改</i-button>
                                <i-button @click="delTableItem(index)">删除</i-button>
                            </template>
                        </i-table>
                        </i-row>
                    </i-card>
                </i-tab-pane>
                <i-tab-pane label="操作日志" name="operation">
                    <i-table stripe :columns="tableCol.operation" :data="tableData.operation" :loading="tableLoading">
                    </i-table>
                </i-tab-pane>
            </i-tabs>
        </i-card>
        <i-modal v-model="modalShow" title="添加/修改成员" width="768" @on-ok="submit()" @on-cancel="cancel()">
            <component :is="componentDic[tabSelect]" ref="Form" :modalData="recordData"></component>
        </i-modal>
    </i-row>
</template>

<script>
import memberForm from "./memberForm"
import tutorForm from "./tutorForm"
import subDeptForm from "./subDeptForm"
const app = require("@/config");
const tableCol = require("./tableCol");
const md5 = require("md5");
let _ = require("lodash");
const axios = require("axios");
export default {
    components: {
        "member-form": memberForm,
        "tutor-form": tutorForm,
        "subDept-form": subDeptForm
    },
    methods: {
        submit () {
            let form = this.$refs["Form"];
            form.submit(this.orgInfo.ID, this.callbackFunc);
            form.resetFields();
        },
        cancel () {
        },
        saveOrgDetail () {
            this.isSaving = true;
            axios.post("/api/security/SaveDepartV2", this.orgInfo, msg => {
                if (msg.success) {
                    this.$Message.success("部门信息保存成功");
                } else {
                    this.$Message.warning(msg.msg);
                }
                this.getOrgDetail();
                this.isSaving = false;
            });
        },
        getOrgDetail () {
            this.tableLoading = true;
            axios.post("/api/security/GetOrgDetail", {id: this.orgInfo.ID}, msg => {
                if (msg.success) {
                    this.orgInfo = msg.data;
                    this.teachers = msg.teachers;
                    this.users = msg.users;
                    // 弥补接口错误
                    this.orgInfo.HaveLeagueBranch = this.orgInfo.HaveLeagueBranch === "true";
                    this.orgInfo.HaveCPCBranch = this.orgInfo.HaveCPCBranch === "true";
                    this.orgInfo.HaveDepartRule = Boolean(this.orgInfo.HaveDepartRule);
                    // 至此结束
                    this.logs = msg.changeLogs.data.reverse();
                    this.level = msg.level;
                } else {
                    this.$Message.warning(msg.msg);
                }
                this.tableLoading = false;
            })
        },
        getMemberTable () {
            this.tableLoading = true;
            let name = this.keyword ? this.keyword : undefined;
            axios.post("/api/security/GetUsersByDepartId", {departId: this.orgInfo.ID, name}, msg => {
                this.tableData.member = msg.data;
                this.tableLoading = false;
            });
        },
        getTutorTable () {
            this.tableLoading = true;
            let name = this.keyword ? this.keyword : undefined;
            axios.post("/api/security/GetUsersByDepartId", {departId: this.orgInfo.ID, name, position: "指导老师"}, msg => {
                this.tableData.tutor = msg.data;
                this.tableLoading = false;
            });
        },
        getDeptTable () {
            this.tableLoading = true;
            axios.post("/api/security/GetDepartsByDepartId", {id: this.orgInfo.ID}, msg => {
                this.tableData.subDept = msg.data.children;
                this.tableData.subDept.forEach(e => e.Type = (e.Type === 0 ? "挂靠单位" : "社团"))
                this.tableLoading = false;
            });
        },
        getOptTable () {
            this.tableLoading = true;
            axios.post("/api/logs/GetLogsByDepartId", {departId: this.orgInfo.ID}, msg => {
                this.tableData.operation = msg.data;
                this.tableLoading = false;
            });
        },
        addSubDepart () {
            this.callbackFunc = this.modifySubDepart;
            this.modalShow = true;
        },
        addTutor () {
            this.recordData = {
                user: {},
                changeLogs: []
            };
            this.callbackFunc = this.getTutorTable;
            this.modalShow = true;
        },
        addMember () {
            this.recordData = {
                user: {},
                changeLogs: []
            };
            this.callbackFunc = this.getMemberTable;
            this.modalShow = true;
        },
        delMember (row) {
             axios.post("/api/security/RemoveUserV2", {userId: row.ID, departId: row.departId}, msg => {
                this.getMemberTable();
            })
        },
        delTutor (row) {
             axios.post("/api/security/RemoveUserV2", {userId: row.ID, departId: row.departId, position: "指导老师"}, msg => {
                this.getTutorTable();
            })
        },
        delSubDepart (row) {
            axios.post("/api/security/RemoveDepartV2", {id: row.id}, msg => {
                if (msg.success) {
                    this.getDeptTable();
                    this.$Message.success("删除成功");
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
        },
        modifyMember (row) {
            axios.post("/api/security/GetUserById", {id: row.ID, departId: this.orgInfo.ID}, msg => {
                this.recordData.user = msg.user;
                this.recordData.changeLogs = msg.changeLogs;
                this.modalShow = true;
                this.callbackFunc = this.getMemberTable;
            });
        },
        modifyTutor (row) {
            axios.post("/api/security/GetUserById", {id: row.ID, departId: this.orgInfo.ID}, msg => {
                this.recordData.user = msg.user;
                this.recordData.changeLogs = msg.changeLogs;
                this.modalShow = true;
                this.callbackFunc = this.getTutorTable;
            });
        },
        modifySubDepart (row) {
            window.open("/manage/org/detail?id=" + row.id);
        },
        modifyTableItem () {

        },
        setPositon (userId, position) {
            axios.post("/api/security/SetPositionV2", {userId, departId: this.orgInfo.ID, position}, msg => {
                this.getMemberTable();
                this.getTutorTable();
            })
        },
        setPassword (row) {
            axios.post("/api/security/SetPassword", {userId: row.ID, departId: this.orgInfo.ID, password: md5(this.password.password)}, msg => {
                this.getMemberTable();
                this.$Message.info('修改成功');
            })
            this.visible = false;
        },
        cancelSet () {
            this.visible = false;
        },
        setKeyword: _.debounce(function () {
                if (this.tabSelect === "member") {
                    this.getMemberTable();
                }
                if (this.tabSelect === "tutor") {
                    this.getTutorTable();
                }
        }, 500)
    },
    watch: {
        keyword (v) {
            this.setKeyword();
        },
        "orgInfo.Type" (value, oldValue) {
            if (value === oldValue || oldValue === undefined) return;
            this.$Modal.confirm({
                title: "确实要更改部门类型吗？",
                content: `将部门类型由<strong>${oldValue === 0 ? "挂靠单位" : "社团"}</strong>更改为
                    <strong>${value === 0 ? "挂靠单位" : "社团"}</strong>`,
                onOk: () => {
                    axios.post("/api/security/SwitchDepartType", {
                        id: this.orgInfo.ID,
                        cate: this.orgInfo.Type === 0 ? "挂靠单位" : "社团",
                        type: value
                    }, msg => {
                        this.getOrgDetail();
                    });
                },
                onCancel: () => {
                    this.orgInfo.Type = oldValue;
                }
            })
        }
    },
    mounted () {
        this.$Spin.show({
            render: (h) => {
                return h('div', [
                    h('Icon', {
                        'class': 'spin-icon-load',
                        props: {
                            type: 'ios-loading',
                            size: 18
                        }
                    }),
                    h('div', '正在获取部门详细信息，请稍候……')
                ])
            }
        });
        axios.post("/api/security/GetOrgDetail", {id: this.$route.query.id ? this.$route.query.id : null}, msg => {
            if (msg.success) {
                this.orgInfo = msg.data;
                this.teachers = msg.teachers;
                this.users = msg.users;
                this.orgInfo.HaveLeagueBranch = Boolean(this.orgInfo.HaveLeagueBranch);
                this.orgInfo.HaveCPCBranch = Boolean(this.orgInfo.HaveCPCBranch);
                this.orgInfo.HaveDepartRule = Boolean(this.orgInfo.HaveDepartRule);
                this.logs = msg.changeLogs.data.reverse();
                this.level = msg.level;
                // 获取其他Tab页信息
                this.getMemberTable();
                this.getTutorTable();
                this.getDeptTable();
                this.getOptTable();
            }
            this.$Spin.hide();
            this.tabSelect = this.$route.params.tabSelect || "basicInfo";
        });
    },
    data () {
        let THIS = this;
        return {
            app,
            tableCol,
            visible: false,
            logs: [],
            keyword: "",
            teachers: [],
            users: 0,
            tabSelect: "",
            isSaving: false,
            tableLoading: false,
            recordData: {
                user: {},
                changeLogs: []
            },
            level: 0,
            orgInfo: {},
            tableData: {
                member: [],
                subDept: [],
                tutor: [],
                operation: []
            },
            modalShow: false,
            componentDic: {
                member: "member-form",
                tutor: "tutor-form",
                subDept: "subDept-form"
            },
            password: {},
            pwdRule: {
                password: {
                    trigger: 'blur',
                    validator (rule, value, callback, source, options) {
                        (value && value.length >= 6 && value.length <= 16) ? callback() : callback(new Error('密码必须在6至16位之间'));
                    }
                },
                confirmPassword: {
                    trigger: 'blur',
                    validator (rule, value, callback, source, options) {
                        value === THIS.password.password ? callback() : callback(new Error('两次输入的密码不一致'));
                    }
                }
            },
            callbackFunc: () => {}
        };
    }
}
</script>

<style lang="less">
.ivu-form-item .ivu-date-picker{
    width: 100%;
}
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
.spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
.ivu-poptip-body-content {
    overflow: hidden;
}
</style>
