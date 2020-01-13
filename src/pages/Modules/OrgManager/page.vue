<template>
    <i-card>
        <!--
            这个组件很得重要，他就是iView里的select控件，只不过多一个选项。选项内容进入后台“系统配置”->“数据字典配置”，里面的“字典归属”。
            比如在下面的示例中，dic为“政治面貌”那么就相当于在后台那里，“字典归属”为“政治面貌”的值的集合。
            之后，由其是在“修改社团信息”页面中，所有相关的选项都应当使用这个东西。比如“政治面貌”，“社团类型”，“指导老师类型”或者“社交媒体”等。
            具体使用哪一个，我会有下发的需求卡中有说明。
        -->
        <dic-select dic="政治面貌" v-model="face"/>
    </i-card>
</template>

<script>
var app = require("@/config");
export default {
    data () {
        return {
            face: "群众"
        };
    },
    mounted () {
        app.title = "社团管理";
    }
}
</script>

<style lang="less">

</style>
