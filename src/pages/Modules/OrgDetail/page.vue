<template>
    <i-row>
        <i-card>
            <i-row>
                <i-col span=4>图片</i-col>
                <i-col span=20>
                    <i-row>社团名称</i-row>
                    <i-row>成员人数/指导老师</i-row>
                </i-col>
            </i-row>
        </i-card>
        <i-divider/>
        <i-card>
            <i-tabs value="name1">
                <i-tab-pane label="基本信息" name="name1">标签一的内容</i-tab-pane>
                <i-tab-pane label="成员管理" name="name2">标签二的内容</i-tab-pane>
                <i-tab-pane label="子部门" name="name3">标签三的内容</i-tab-pane>
                <i-tab-pane label="指导老师" name="name3">标签三的内容</i-tab-pane>
                <i-tab-pane label="管理员" name="name4">标签四的内容</i-tab-pane>
                <i-tab-pane label="活动经费" name="name5">标签五的内容</i-tab-pane>
            </i-tabs>
        </i-card>
    </i-row>
</template>

<script>
export default {
    data () {
        return {};
    }
}
</script>

<style lang="less">

</style>
