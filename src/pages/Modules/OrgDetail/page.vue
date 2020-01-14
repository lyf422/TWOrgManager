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
                                        <i-input />
                                    </i-form-item>
                                </i-row>
                                <i-row type="flex" justify="space-between">
                                    <i-form-item label="社团类型">
                                        <i-input />
                                    </i-form-item>
                                    <i-form-item label="成立时间">
                                        <i-input />
                                    </i-form-item>
                                    <i-form-item label="是否有章程">
                                    <i-input />
                                </i-form-item>
                                <i-form-item label="是否成立团支部">
                                    <i-input />
                                </i-form-item>
                                <i-form-item label="是否有党支部">
                                    <i-input />
                                </i-form-item>
                                <i-form-item label="党支部类型">
                                    <i-input />
                                </i-form-item>
                                </i-row>
                                <i-form-item label="备注" type="textarea">
                                    <i-input />
                                </i-form-item>
                            </i-form>
                        </i-col>
                        <i-col span="4" offset="1">
                            <List>
                                <ListItem>&lt;时间&gt;，&lt;用户&gt;修改了&lt;内容&gt;</ListItem>
                                <ListItem>&lt;时间&gt;，&lt;用户&gt;修改了&lt;内容&gt;</ListItem>
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
                            <i-input search enter-button placeholder="Enter something..."  />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary">添加成员</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane v-if="app.departType===0" label="子部门" name="name3">
                    <i-row>
                        <i-col span="3">
                            子部门<i-badge :count="9"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input search enter-button placeholder="Enter something..."  />
                        </i-col>
                        <i-col span="2" push="15">
                            <i-button type="primary">添加部门</i-button>
                        </i-col>
                    </i-row>
                    <i-row>
                        <i-table></i-table>
                    </i-row></i-tab-pane>
                <i-tab-pane v-else-if="app.departType===1" label="指导老师" name="name3">
                    <i-row>
                        <i-col span="3">
                            指导老师<i-badge :count="1"></i-badge>
                        </i-col>
                        <i-col span="4" push="15">
                            <i-input search enter-button placeholder="Enter something..."  />
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
                            <i-input search enter-button placeholder="Enter something..."  />
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
                            <i-input search enter-button placeholder="Enter something..."  />
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
    </i-row>
</template>

<script>
let app = require("@/config");
export default {
    data () {
        return {
            app
        };
    }
}
</script>

<style lang="less">

</style>
