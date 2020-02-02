<template>
    <i-row>
        <i-col span="15">
            <i-form :model="modalData.user" :rules="ruleForMem" ref="Form">
                <i-row type="flex" justify="space-between">
                    <i-col span="11">
                        <i-form-item label="姓名" prop="RealName">
                            <i-input v-model="modalData.user.RealName" />
                        </i-form-item>
                    </i-col>
                    <i-col span="11">
                        <i-form-item label="学号" prop="Code">
                            <i-input v-model="modalData.user.Code" />
                        </i-form-item>
                    </i-col>
                </i-row>
                <i-row type="flex" justify="space-between">
                    <i-col span="11">
                        <i-form-item label="学历" prop="Educational">
                            <i-input v-model="modalData.user.Educational" />
                        </i-form-item>
                    </i-col>
                    <i-col span="11">
                        <i-form-item label="专业" prop="Specialty">
                            <i-input v-model="modalData.user.Specialty" />
                        </i-form-item>
                    </i-col>
                </i-row>
                <i-row type="flex" justify="space-between">
                    <i-col span="11">
                        <i-form-item label="政治面貌" prop="PoliticalStatus">
                            <i-input v-model="modalData.user.PoliticalStatus" />
                        </i-form-item>
                    </i-col>
                    <i-col span="11">
                        <i-form-item label="入团时间" prop="JoinCCYLTime">
                            <i-checkbox v-model="haveJoinCCYL"></i-checkbox>
                            <i-date-picker :disabled="!haveJoinCCYL" v-model="modalData.user.JoinCCYLTime" />
                        </i-form-item>
                    </i-col>
                </i-row>
                <i-row type="flex" justify="space-between">
                    <i-col span="11">
                        <i-form-item label="入党时间" prop="JoinCPCTime">
                            <i-checkbox v-model="haveJoinCPC"></i-checkbox>
                            <i-date-picker :disabled="!haveJoinCPC" v-model="modalData.user.JoinCPCTime" />
                        </i-form-item>
                    </i-col>
                    <i-col span="11">
                        <i-form-item label="邮箱" prop="Email">
                            <i-input v-model="modalData.user.Email" />
                        </i-form-item>
                    </i-col>
                </i-row>
                <i-row type="flex" justify="space-between">
                    <i-col span="11">
                        <i-form-item label="电话" prop="Mobile">
                            <i-input v-model="modalData.user.Mobile" />
                        </i-form-item>
                    </i-col>
                    <i-col span="11">
                        <i-form-item label="QQ" prop="QQ">
                            <i-input v-model="modalData.user.QQ" />
                        </i-form-item>
                    </i-col>
                </i-row>
                <i-row type="flex" justify="space-between">
                    <i-col span="11">
                        <i-form-item label="籍贯" prop="BirthPlace">
                            <i-input v-model="modalData.user.BirthPlace" />
                        </i-form-item>
                    </i-col>
                    <i-col span="11">
                        <i-form-item label="生源地" prop="Source">
                            <i-input v-model="modalData.user.Source" />
                        </i-form-item>
                    </i-col>
                </i-row>
            </i-form>
        </i-col>
        <i-col span="7" offset="2">
            <i-timeline style="overflow-y:scroll; height:600px; padding-top: 10px;">
                <TimelineItem v-for="(item,index) in modalData.changeLogs.data" :key="index">
                    <i-row>
                        <i-col>
                            <p class="time">{{item.OperateOn}}</p>
                            <p class="content">{{item.Operator}}{{item.Abstract}}</p>
                        </i-col>
                    </i-row>
                    <i-row span="15">
                        <i-col style="font-size: 0.7em;color: #808080;">
                            <p v-for="(d,index) in item.Details" :key="index">
                                {{d}}
                            </p>
                        </i-col>
                    </i-row>
                </TimelineItem>
            </i-timeline>
        </i-col>
    </i-row>
</template>

<script>
    const axios = require("axios");
    const regex = require("@/regex.js");
    export default {
        props: {
            modalData: {
                type: Object,
                required: true
            }
        },
        watch: {
            "modalData.user.JoinCPCTime" (value) {
                this.haveJoinCPC = value !== "1900年1月1日";
            },
            "modalData.user.JoinCCYLTime" (value) {
                this.haveJoinCCYL = value !== "1900年1月1日";
            }
        },
        data () {
            return {
                haveJoinCPC: false,
                haveJoinCCYL: false,
                ruleForMem: {
                    RealName: [
                        {
                            required: true,
                            message: "必须填写姓名",
                            trigger: "blur"
                        }
                    ],
                    Code: [
                        {
                            required: true,
                            message: "必须填写学号",
                            trigger: "blur"
                        }
                    ],
                    Mobile: [
                        {
                            type: "string",
                            pattern: regex.mobile,
                            message: "电话格式不正确",
                            trigger: "blur"
                        }
                    ]
                }
            }
        },
        methods: {
            resetFields () {
                this.$refs["Form"].resetFields();
            },
            submit (departId, callback) {
                axios.post("/api/security/SaveUserV2", {
                    ...this.modalData.user,
                    JoinCPCTime: this.haveJoinCPC ? this.modalData.user.JoinCPCTime : "1900-01-01",
                    JoinCCYLTime: this.haveJoinCCYL ? this.modalData.user.JoinCCYLTime : "1900-01-01",
                    departId
                    }, msg => {
                    this.resetFields();
                    callback();
                })
            }
        }
    }
</script>
