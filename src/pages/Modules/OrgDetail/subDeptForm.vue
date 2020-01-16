<template>
    <i-form :model="modalData">
        <i-row type="flex" justify="space-between">
            <i-col span="24">
                <i-form-item label="社团名称" span="8">
                    <i-input v-model="modalData.Name"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="社团类型" style="width: 365px">
                    <dic-select dic="社团类型" v-model="modalData.DepartType" />
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="成立时间">
                    <i-date-picker type="date" v-model="modalData.BirthTime" format="yyyy年MM月dd日" />
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="部门电话">
                    <i-input v-model="modalData.Phone"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="挂靠单位">
                    <org-selector v-model="modalData.ParentId"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-form-item label="部门描述">
            <i-input type="textarea" v-model="modalData.Description"/>
        </i-form-item>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="是否有社团章程">
                    <i-checkbox v-model="modalData.HaveDepartRule"></i-checkbox>
                    <i-date-picker :disabled="!modalData.HaveDepartRule" v-model="modalData.RuleCreatedOn"></i-date-picker>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="是否成立团支部">
                    <i-checkbox v-model="modalData.HaveLeagueBranch"></i-checkbox>
                    <i-date-picker :disabled="!modalData.HaveLeagueBranch" v-model="modalData.LeagueBrachCreatedOn"></i-date-picker>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="是否有党支部">
                    <i-checkbox v-model="modalData.HaveCPCBranch"></i-checkbox>
                    <i-date-picker :disabled="!modalData.HaveCPCBranch" v-model="modalData.CPCBranchCreatedOn"></i-date-picker>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="党支部类型">
                    <dic-select dic="党支部类型" :disabled="!modalData.HaveCPCBranch" v-model="modalData.CPCBranchType"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="社交媒体">
                    <dic-select dic="社交媒体" v-model="modalData.SocialMedia"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="社交媒体粉丝数">
                    <i-input v-model="modalData.SocialMediaFans"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-row type="flex" justify="space-between">
            <i-col span="11">
                <i-form-item label="经费类型">
                    <i-input v-model="modalData.FundsCategory"/>
                </i-form-item>
            </i-col>
            <i-col span="11">
                <i-form-item label="经费来源">
                    <i-input v-model="modalData.ChannelForFunds"/>
                </i-form-item>
            </i-col>
        </i-row>
        <i-form-item label="备注1">
            <i-input type="textarea" v-model="modalData.Memo"/>
        </i-form-item>
        <i-form-item label="备注2">
            <i-input type="textarea" v-model="modalData.Remark"/>
        </i-form-item>
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
        }
    }
</script>
