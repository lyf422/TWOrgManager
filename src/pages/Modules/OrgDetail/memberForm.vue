<template>
    <i-form :model="modalData" :rules="ruleForMem" ref="Form">
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="姓名" prop="RealName">
                    <i-input v-model="modalData.RealName" />
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="学号" prop="Code">
                    <i-input v-model="modalData.Code" />
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="学历" prop="Educational">
                    <i-input v-model="modalData.Educational" />
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="专业" prop="Major">
                    <i-input v-model="modalData.Major" />
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="政治面貌" prop="PoliticalStatus">
                    <dic-select dic="政治面貌" v-model="modalData.PoliticalStatus" />
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="入团时间" prop="JoinCCYLTime">
                    <Checkbox v-model="league">时间{{modalData.JoinCCYLTime}}</Checkbox>
                    <i-date-picker v-model="modalData.JoinCCYLTime" :disabled="!league"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="入党时间" prop="JoinCPCTime">
                    <Checkbox v-model="party"></Checkbox>
                    <i-date-picker v-model="modalData.JoinCPCTime" :disabled="!party"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                 <i-form-item label="邮箱" prop="Email">
                    <i-input v-model="modalData.Email" />
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="电话" prop="Mobile">
                    <i-input v-model="modalData.Mobile" />
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="QQ" prop="QQ">
                    <i-input v-model="modalData.QQ" />
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="籍贯" prop="BirthPlace">
                    <i-input v-model="modalData.BirthPlace" />
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="生源地" prop="Source">
                    <i-input v-model="modalData.Source" />
                </i-form-item>
            </i-col>
        </i-row>
    </i-form>
</template>

<script>
    const regex = require("@/regex.js");
    export default {
        props: {
            modalData: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                league: false,
                party: false,
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
            }
        }
    }
</script>
