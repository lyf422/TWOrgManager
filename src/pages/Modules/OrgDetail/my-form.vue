<template>
    <i-form v-if="type==='member'" :model="modalData" :rules="ruleForMem">
        <i-form-item label="姓名" prop="RealName">
            <i-input v-model="modalData.RealName" />
        </i-form-item>
        <i-form-item label="学号" prop="Code">
            <i-input v-model="modalData.Code" />
        </i-form-item>
        <i-form-item label="电话" prop="Mobile">
            <i-input v-model="modalData.Mobile" />
        </i-form-item>
        <i-form-item label="邮箱" prop="Email">
            <i-input v-model="modalData.Email" />
        </i-form-item>
        <i-form-item label="生源地" prop="Source">
            <i-input v-model="modalData.Source" />
        </i-form-item>
    </i-form>
    <i-form v-else-if="type==='activity'" :model="modalData">
        <i-form-item label="活动名称" prop="Name">
            <i-input v-model="modalData.Name" />
        </i-form-item>
        <i-form-item label="活动类型" prop="Category">
            <i-input v-model="modalData.Category" />
        </i-form-item>
        <i-form-item label="活动时间" prop="Time">
            <i-input v-model="modalData.Time" />
        </i-form-item>
        <i-form-item label="活动地点" prop="Location">
            <i-input v-model="modalData.Location" />
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
            },
            type: {
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
