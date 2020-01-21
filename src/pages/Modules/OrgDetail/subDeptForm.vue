<template>
    <i-form :model="modalData" ref="Form">
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="部门名称">
                    <i-input v-model="modalData.Name"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="部门的层级显示">
                    <i-input v-model="modalData.label"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="排序号">
                    <i-input v-model="modalData.Sort"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="部门的编码">
                    <i-input v-model="modalData.Code"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="是否拥有子部门">
                    <i-input v-model="modalData.isParent" :disabled="modalData.Type===1"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="管理员姓名">
                    <i-input v-model="modalData.admin"/>
                </i-form-item>
            </i-col>
        </i-row>
    </i-form>
</template>

<script>
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
            }
        }
    }
</script>
