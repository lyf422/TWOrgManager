<template>
    <i-form :model="modalData" ref="Form">
        <i-row type="flex" justify="space-between">
            <i-col span="24">
                <i-form-item label="部门名称">
                    <i-input v-model="modalData.name"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="部门类型">
                    <i-select v-model="modalData.Type">
                        <i-option value="0" key="子部门">子部门</i-option>
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
            }
        },
        methods: {
            resetFields () {
                let form = this.$refs["Form"];
                form.resetFields();
            },
            submit (departId, callback) {
                axios.post("/api/security/SaveDepartV2", this.modalData, msg => {
                    this.resetFields();
                    callback()
                });
            }
        }
    }
</script>
