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
                        <i-col span="3">成员人数</i-col>
                        <i-col span="3">指导老师</i-col>
                    </i-row>
                </i-col>
            </i-row>
            <i-tabs :value="tabSelect">
                <i-tab-pane label="基本信息" name="name1">
                    <i-row>
                        <i-spin fix size="large" v-show="spinShow"></i-spin>
                        <i-col span="16" >
                            <i-form>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="10">
                                        <i-form-item label="社团名称" span="8">
                                            <i-input v-model="orgInfo.Name"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="6">
                                        <i-form-item label="社团类型" style="width: 210px">
                                            <dic-select dic="社团类型" v-model="orgInfo.DepartType" />
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="6">
                                        <i-form-item label="成立时间">
                                            <i-date-picker type="date" v-model="orgInfo.BirthTime" format="yyyy年MM月dd日" />
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="6">
                                        <i-form-item label="排序号(升序)">
                                            <i-input v-model="orgInfo.Sort" :disabled="(level < 3-orgInfo.Type)"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="10">
                                        <i-form-item label="部门电话">
                                            <i-input v-model="orgInfo.Phone"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="10">
                                        <i-form-item label="挂靠单位">
                                            <org-selector v-model="orgInfo.ParentId"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-form-item label="部门描述">
                                    <i-input type="textarea" v-model="orgInfo.Description"/>
                                </i-form-item>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="10">
                                        <i-form-item label="是否有社团章程">
                                            <i-checkbox v-model="orgInfo.HaveDepartRule"></i-checkbox>
                                            <i-date-picker :disabled="!orgInfo.HaveDepartRule" v-model="orgInfo.RuleCreatedOn"></i-date-picker>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="10">
                                        <i-form-item label="是否成立团支部">
                                            <i-checkbox v-model="orgInfo.HaveLeagueBranch"></i-checkbox>
                                            <i-date-picker :disabled="!orgInfo.HaveLeagueBranch" v-model="orgInfo.LeagueBrachCreatedOn"></i-date-picker>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="10">
                                        <i-form-item label="是否有党支部">
                                            <i-checkbox v-model="orgInfo.HaveCPCBranch"></i-checkbox>
                                            <i-date-picker :disabled="!orgInfo.HaveCPCBranch" v-model="orgInfo.CPCBranchCreatedOn"></i-date-picker>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="10">
                                        <i-form-item label="党支部类型" >
                                            <dic-select dic="党支部类型" :disabled="!orgInfo.HaveCPCBranch" v-model="orgInfo.CPCBranchType"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="10">
                                        <i-form-item label="社交媒体">
                                            <dic-select dic="社交媒体" v-model="orgInfo.SocialMedia"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="10">
                                        <i-form-item label="社交媒体粉丝数">
                                            <i-input v-model="orgInfo.SocialMediaFans"/>
                                        </i-form-item>
                                    </i-col>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-col span="10">
                                        <i-form-item label="经费类型">
                                            <i-input v-model="orgInfo.FundsCategory"/>
                                        </i-form-item>
                                    </i-col>
                                    <i-col span="10">
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
                            <i-button type="primary" @click="saveOrgDetail()">保存</i-button>
                        </i-col>
                        <i-col span="5" offset="3">
                            <i-timeline>
                                <!--TimelineItem v-for="(item,index) in changeLogs.data" :key="index">{{item.Abstract}}</TimelineItem-->
                                <TimelineItem>
                                    <p class="time">1976年</p>
                                    <p class="content">Apple I 问世</p>
                                </TimelineItem>
                                <TimelineItem>
                                    <p class="time">1976年</p>
                                    <p class="content">Apple I 问世</p>
                                </TimelineItem>
                            </i-timeline>
                        </i-col>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="成员管理" name="name2">
                    <i-card dis-hover>
                        <i-row type="flex" align="middle" :gutter="16" slot="title">
                            <i-col>
                                社团成员
                            </i-col>
                            <i-col>
                                <i-badge :count="10"></i-badge>
                            </i-col>
                            <i-col span="4" push="16">
                                <i-input prefix="ios-search" placeholder="搜索成员"  />
                            </i-col>
                            <i-col span="2" push="16">
                                <i-button type="primary" @click="modifyMember()">添加成员</i-button>
                            </i-col>
                        </i-row>
                        <i-table :columns="tableCol.member" :data="tableData">
                            <template slot="Action" slot-scope="{index}">
                                <i-button @click="delTableItem(index)">删除</i-button>
                            </template>
                        </i-table>
                    </i-card>
                </i-tab-pane>
                <i-tab-pane v-if="orgInfo.DepartType===0" label="子部门" name="name3">
                    <i-row style="margin-top:20px;">
                        <i-col span="3">
                           子部门   <i-badge :count="9"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input search enter-button placeholder="搜索部门"  />
                        </i-col>
                        <i-col span="2" push="15" style="margin-left:10px;">
                            <i-button type="primary">添加部门</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table stripe></i-table>
                    </i-row></i-tab-pane>
                <i-tab-pane v-else-if="orgInfo.DepartType===1" label="指导老师" name="name3">
                    <i-row style="margin-top:20px;">
                        <i-col span="3">
                            指导老师    <i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input search enter-button placeholder="搜索指导老师"  />
                        </i-col>
                        <i-col span="2" push="15" style="margin-left:10px;">
                            <i-button type="primary">添加老师</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table stripe></i-table>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="管理员" name="name4">
                    <i-row class="rowStyle">
                        <i-col span="3">
                            管理员    <i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input search enter-button placeholder="搜索管理员"  />
                        </i-col>
                        <i-col span="2" push="15" style="margin-left:8px;">
                            <i-button type="primary">添加管理员</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table stripe></i-table>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="社团活动" name="name5">
                    <i-row class="rowStyle">
                        <i-col span="3">
                            社团活动    <i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input search enter-button placeholder="搜索社团活动"  />
                        </i-col>
                        <i-col span="2" push="15" style="margin-left:10px;">
                            <i-button type="primary">添加活动</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table stripe></i-table>
                    </i-row>
                </i-tab-pane>
            </i-tabs>
        </i-card>
        <i-modal v-model="modalShow" title="添加/修改成员" @on-ok="submit()" @on-cancel="cancel()">
            <i-form ref="Form" :model="modal" :rules="rules">
                <i-form-item label="姓名" prop="Name">
                    <i-input v-model="modal.Name"/>
                </i-form-item>
                <i-form-item label="学号" prop="Number">
                    <i-input v-model="modal.Number"/>
                </i-form-item>
                <i-form-item label="电话" prop="Telephone">
                    <i-input v-model="modal.Telephone"/>
                </i-form-item>
                <i-form-item label="邮箱" prop="Email">
                    <i-input v-model="modal.Email"/>
                </i-form-item>
                <i-form-item label="生源地" prop="Location">
                    <i-input v-model="modal.Location"/>
                </i-form-item>
            </i-form>
        </i-modal>
    </i-row>
</template>

<script>
const regex = require("@/regex.js");
const app = require("@/config");
const tableCol = require("./tableCol");
const testData = require("./testData");
const axios = require("axios");
export default {
    methods: {
        modifyMember () {
            this.modalShow = true;
        },
        submit () {
            let formMember = this.$refs["Form"];
            formMember.validate(v => {
                if (!v) {
                    this.$Modal.error({
                        title: "表单有误",
                        content: "请正确填写表单"
                    });
                }
            });
        },
        cancel () {
        },
        saveOrgDetail () {
            this.orgInfo.Affiliated = "789";
            this.orgInfo.Code = "789";
            axios.post("/api/security/SaveDepartV2", this.orgInfo, msg => {
                if (msg.success) {
                    this.$Message.success("保存成功");
                    this.getOrgDetail();
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
        },
        getOrgDetail () {
            this.spinShow = true;
            axios.post("/api/security/GetOrgDetail", {}, msg => {
                if (msg.success) {
                    this.orgInfo = msg.data;
                    this.orgInfo.HaveLeagueBranch = Boolean(this.orgInfo.HaveLeagueBranch);
                    this.orgInfo.HaveCPCBranch = Boolean(this.orgInfo.HaveCPCBranch);
                    this.orgInfo.HaveDepartRule = Boolean(this.orgInfo.HaveDepartRule);
                    this.changeLogs = msg.changeLogs;
                    this.level = msg.level;
                }
                this.spinShow = false;
            })
        },
        getMembers () {
            this.tableData = testData.member;
        },
        delTableItem (index) {
            this.tableData.splice(index);
        }
    },
    mounted () {
        this.tabSelect = this.$route.params.tabSelect || "name1";
        this.getOrgDetail();
        this.getMembers();
    },
    data () {
        return {
            app,
            tableCol,
            tabSelect: "",
            spinShow: false,
            modal: {
                Name: "",
                Number: "",
                Telephone: "",
                Email: "",
                Location: ""
            },
            columns: [
                {
                    title: "姓名",
                    slot: "Name"
                },
                {
                    title: "学号"
                },
                {
                    title: "手机号"
                },
                {
                    title: "邮箱"

                },
                {
                    title: "生源地"

                },
                {
                    title: "操作",
                    slot: "action"
                }
            ],
            level: 0,
            orgInfo: {},
            changeLogs: {},
            tableData: [],
            modalShow: false,
            rules: {
                Name: [
                   {
                        required: true,
                        message: "必须填写姓名",
                        trigger: "blur"
                   }
                ],
                Number: [
                   {
                        required: true,
                        message: "必须填写学号",
                        trigger: "blur"
                   }
                ],
                Telephone: [
                   {
                        type: "string",
                        pattern: regex.mobile,
                        message: "电话格式不正确",
                        trigger: "blur"
                   }
                ],
                Location: [
                   {
                        required: true,
                        message: "必须填写生源地",
                        trigger: "blur"
                   }
                ]
            }
        };
    }
}
</script>

<style lang="less">
.ivu-form-item .ivu-date-picker{
    width: 100%;
}
</style>
