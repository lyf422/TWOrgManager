<template>
    <i-form :model="modalData">
        <i-form-item label="姓名" prop="Name">
            <i-input v-model="modalData.Name" />
        </i-form-item>
        <i-form-item label="工号" prop="Code">
            <i-input v-model="modalData.Code" />
        </i-form-item>
        <i-form-item label="类别" prop="Category">
            <i-input v-model="modalData.Category" />
        </i-form-item>
        <i-form-item label="政治面貌" prop="Status">
            <i-input v-model="modalData.Status" />
        </i-form-item>
        <i-form-item label="单位" prop="Company">
            <i-input v-model="modalData.Company" />
        </i-form-item>
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
                    ],
                    Source: [
                        {
                            required: true,
                            message: "必须填写生源地",
                            trigger: "blur"
                        }
                    ]
                }
            }
        }
    }
</script>
