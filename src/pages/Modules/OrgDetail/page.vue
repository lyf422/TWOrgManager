<template>
    <i-row>
        <i-card>
            <i-row>
                <i-col span="4">图片</i-col>
                <i-col span="20">
                    <i-row>社团名称</i-row>
                    <i-row>成员人数/指导老师</i-row>
                </i-col>
            </i-row>
        </i-card>
        <i-divider/>
        <i-card>
            <i-tabs value="name1">
                <i-tab-pane label="基本信息" name="name1">
                    <i-row>
                        <i-col span="19">
                            <i-form>
                                <i-row>
                                    <i-form-item label="社团名称">
                                        <i-input v-model="orgInfo.Name"/>
                                    </i-form-item>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-form-item label="社团类型">
                                        <i-input v-model="orgInfo.DepartType"/>
                                    </i-form-item>
                                    <i-form-item label="成立时间">
                                        <i-input v-model="orgInfo.BirthTime"/>
                                    </i-form-item>
                                    <i-form-item label="是否有章程">
                                            <Checkbox v-model="orgInfo.HaveDepartRule"></Checkbox>
                                            <i-input :disabled="!orgInfo.HaveDepartRule" v-model="orgInfo.RuleCreatedOn"></i-input>
                                    </i-form-item>
                                    <i-form-item label="是否成立团支部">
                                            <Checkbox v-model="HaveLeagueBranch"></Checkbox>
                                            <i-input :disabled="!HaveLeagueBranch" v-model="orgInfo.LeagueBrachCreatedOn"></i-input>
                                    </i-form-item>
                                    <i-form-item label="是否有党支部">
                                        <Checkbox v-model="HaveCPCBranch"></Checkbox>
                                        <i-input :disabled="!HaveCPCBranch" v-model="orgInfo.CPCBranchCreatedOn"></i-input>
                                    </i-form-item>
                                    <i-form-item label="党支部类型">
                                        <i-input v-model="orgInfo.CPCBranchType"/>
                                    </i-form-item>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-form-item label="排序号(升序)" v-if="level>=2">
                                        <i-input v-model="orgInfo.Sort" :disabled="(level <= 3-orgInfo.Type)"/>
                                    </i-form-item>
                                    <i-form-item label="排序号(降序)" v-if="level<2">
                                        <i-input v-model="orgInfo.Sort" :disabled="(level <= 3-orgInfo.Type)"/>
                                    </i-form-item>
                                    <i-form-item label="部门电话">
                                        <i-input v-model="orgInfo.Phone"/>
                                    </i-form-item>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-form-item label="社交媒体">
                                        <i-input v-model="orgInfo.SocialMedia"/>
                                    </i-form-item>
                                    <i-form-item label="社交媒体粉丝数">
                                        <i-input v-model="orgInfo.SocialMediaFans"/>
                                    </i-form-item>
                                    <i-form-item label="经费类型">
                                        <i-input v-model="orgInfo.FundsCategory"/>
                                    </i-form-item>
                                    <i-form-item label="经费来源">
                                        <i-input v-model="orgInfo.ChannelForFunds"/>
                                    </i-form-item>
                                </i-row>
                                <i-form-item label="部门描述">
                                        <i-input v-model="orgInfo.Description"/>
                                    </i-form-item>
                                <i-form-item label="备注1">
                                    <i-input v-model="orgInfo.Memo"/>
                                </i-form-item>
                                <i-form-item label="备注2">
                                    <i-input v-model="orgInfo.Remark"/>
                                </i-form-item>
                            </i-form>
                            <i-button @click="saveOrgDetails()">保存</i-button>
                        </i-col>
                        <i-col span="4" offset="1">
                            <List>
                                <ListItem v-for="(item,index) in changeLogs.data" :key="index">{{item.Abstract}}</ListItem>
                            </List>
                        </i-col>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="成员管理" name="name2">
                    <i-row>
                        <i-col span="3">
                            社团成员<i-badge :count="10"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary" @click="modifyMember()">添加成员</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane v-if="orgInfo.Type===0" label="子部门" name="name3">
                    <i-row>
                        <i-col span="3">
                            子部门<i-badge :count="9"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary">添加部门</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
                    </i-row></i-tab-pane>
                <i-tab-pane v-else-if="orgInfo.Type===1" label="指导老师" name="name3">
                    <i-row>
                        <i-col span="3">
                            指导老师<i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary">添加老师</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="管理员" name="name4">
                    <i-row>
                        <i-col span="3">
                            管理员<i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary">添加管理员</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="社团活动" name="name5">
                    <i-row>
                        <i-col span="3">
                            社团活动<i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary">添加活动</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
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
let app = require("@/config");
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
        saveOrgDetails () {
            console.log(this.orgInfo);
            let param = this.orgInfo;
            param.Code = "002";
            param.CategoryName = "软件学社2";
            param.Affiliated = "厦门大学";
            param.HaveCPCBranch = String(this.HaveLeagueBranch);
            param.HaveLeagueBranch = String(this.HaveLeagueBranch);
            axios.post("/api/security/SaveDepartV2", param, msg => {
                if (msg.success) {
                    this.$Message.success("保存成功");
                    this.getOrgDetail(param.ID);
                } else {
                    this.$Message.warning(msg.msg);
                }
            })
        },
        getOrgDetail () {
            axios.post("/api/security/GetOrgDetail", {}, msg => {
                if (msg.success) {
                    this.orgInfo = msg.data;
                    this.level = msg.level;
                    this.changeLogs = msg.changeLogs;
                    console.log(msg);
                     this.HaveLeagueBranch = Boolean(this.orgInfo.HaveLeagueBranch);
                     this.HaveCPCBranch = Boolean(this.orgInfo.HaveCPCBranch);
                }
            })
        }
    },
    mounted () {
        this.getOrgDetail();
    },
    data () {
        return {
            app,
            modal: {
                Name: "",
                Number: "",
                Telephone: "",
                Email: "",
                Location: ""
            },
            orgInfo: {},
            HaveLeagueBranch: false,
            HaveCPCBranch: false,
            changeLogs: {},
            level: 0,
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

</style>
