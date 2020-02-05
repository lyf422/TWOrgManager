<template>
    <i-form :model="modalData" ref="Form" :rules="ruleForSubDep">
        <i-row type="flex" justify="space-between">
            <i-col span="24">
                <i-form-item label="部门名称" prop="name">
                    <i-input v-model="modalData.name"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="部门类型">
                    <i-select v-model="modalData.Type">
                        <i-option value="0" key="挂靠单位">挂靠单位</i-option>
                        <i-option value="1" key="社团">社团</i-option>
                    </i-select>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="挂靠单位">
                    <org-selector v-model="modalData.ParentId"/>
                </i-form-item>
            </i-col>
        </i-row>
    </i-form>
</template>

<script>
    const axios = require("axios");
    export default {
        props: {
            modalData: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                ruleForSubDep: {
                    name: [
                        {
                            required: true,
                            message: "必须填写部门名称",
                            trigger: "blur"
                        }
                    ]
                }
            }
        },
        methods: {
            resetFields () {
                let form = this.$refs["Form"];
                form.resetFields();
            },
            formValidate () {
                let errors = [];
                if (this.modalData.name === "" || this.modalData.ParentId === "") {
                    errors.push("表单填写错误,请检查部门名称,挂靠单位是否为空");
                }
                return errors;
            },
            submit (departId, callback) {
                axios.post("/api/security/SaveDepartV2", this.modalData, msg => {
                    this.resetFields();
                    if (msg.success) {
                        callback(msg);
                    } else {
                        this.$Message.warning(msg.msg);
                    }
                });
            }
        }
    }
</script>
