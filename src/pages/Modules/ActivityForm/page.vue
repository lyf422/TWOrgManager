<template>
    <div id="activity-form">
        <div class="all">
            <div class="paper">
                <div>
                    <div class="status-bar">
                        <table border="0">
                            <tr>
                                <td class="smallhang wen-zi-ju-you">执行人：</td>
                                <td  colspan="2">
                                    <i-select v-model="model1" class="drop-down-box">
                                        <i-option v-for="item in zhi2xing2ren2List" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                    </i-select>
                                </td>
                                <td class="smallhang"></td>
                                <td class="smallhang wen-zi-ju-you">状态：</td>
                                <td  colspan="2">
                                    <i-select v-model="model2" class="drop-down-box">
                                        <i-option v-for="item in shen3he2zhuang4tai4List" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                                    </i-select>
                                </td>
                            </tr>
                            <tr>
                                <td class="smallhang"></td>
                                <td colspan="2"></td>
                                <td class="smallhang"></td>
                                <td colspan="2">
                                    <i-button type="primary" size="small" class="button-position">确认</i-button>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="add1"></div>
                    <p class="headline">社团活动申请表</p>
                    <p class="date">填表时间：
                        0000年00月00日
                    </p>
                </div>
                <table border="1">
                    <tr>
                        <td class="smallhang">社团名称</td>
                        <td class="longhang wen-zi-ju-zhong" colspan="4">厦门大学艺术学院校啦啦操社</td>
                    </tr>
                    <tr>
                        <td class="smallhang">活动名称</td>
                        <td class="longhang wen-zi-ju-zhong" colspan="4">厦门大学2020年花旗杯啦啦操团体校园大赛</td>
                    </tr>
                    <tr>
                        <td class="smallhang" style="height:76px;">活动时间</td>
                        <td colspan="2" width="200" style="letter-spacing: 2px;">0000年00月00日至0000年00月00日</td>
                        <td class="smallhang">活动人数</td>
                        <td colspan="2" width="200">12人</td>
                    </tr>
                    <tr>
                        <td class="smallhang">活动地点</td>
                        <td class="longhang wen-zi-ju-zhong" colspan="4">厦门大学思明区西校门明培体育馆一楼处</td>
                    </tr>
                    <tr>
                        <td class="smallhang">负责人员</td>
                        <td colspan="2" >啦啦操队长及副队长</td>
                        <td class="smallhang">联系方式</td>
                        <td colspan="2">000-0000-0000</td>
                    </tr>
                    <tr>
                        <td class="smallhang" rowspan="2">面向范围</td>
                        <td class="longhang" colspan="4" >活动类型：
                            <i-radio-group>
                                <i-radio label="社团内部活动" class="iview-type-size">社团内部活动</i-radio>
                                <i-radio label="公开活动" class="iview-type-size">公开活动</i-radio>
                            </i-radio-group>
                        </td>
                    </tr>
                    <tr>
                        <td class="longhang" colspan="4">
                            <i-input type="textarea" :rows="3" placeholder="（如为公开活动可具体描写面向范围如：面向全体学生/面向校内外人员等，可给出示例填写）"></i-input>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang" rowspan="2">活动内容</td>
                        <td class="longhang" colspan="4">
                                <i-upload action="//jsonplaceholder.typicode.com/posts/">
                                     <i-button icon="ios-cloud-upload-outline" type="primary">上传文件</i-button>
                                 </i-upload>
                        </td>
                    </tr>
                    <tr>
                        <td class="longhang" colspan="4">
                            <i-input type="textarea" :rows="3" placeholder=""></i-input>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">指导老师审核意见</td>
                        <td class="longhang" colspan="4">
                            <div>
                                是否通过：
                                <i-radio-group>
                                    <i-radio label="是" class="iview-type-size"> 是</i-radio>
                                    <i-radio label="否" class="iview-type-size">否</i-radio>
                                </i-radio-group>
                                <i-button type="primary" size="small" class="button-position">确认</i-button>
                            </div>
                            <i-input type="textarea" :rows="3" placeholder="（审核意见）"></i-input>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>黄玺黄西</span></p>
                                <p > 0000年00月00日</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">挂靠单位意见</td>
                        <td class="longhang" colspan="4">
                             <div>
                                是否通过：
                                <i-radio-group>
                                    <i-radio label="是" class="iview-type-size"> 是</i-radio>
                                    <i-radio label="否" class="iview-type-size">否</i-radio>
                                </i-radio-group>
                                <i-button type="primary" size="small" class="button-position">确认</i-button>
                            </div>
                             <i-input type="textarea" :rows="3" placeholder="（审核意见）"></i-input>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>Chritine Dekrause Dalebord</span></p>
                                <p >0000年00月00日</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">学生社团联合会意见</td>
                        <td class="longhang" colspan="4">
                            <div>
                                是否通过：
                                <i-radio-group>
                                    <i-radio label="是" class="iview-type-size"> 是</i-radio>
                                    <i-radio label="否" class="iview-type-size">否</i-radio>
                                </i-radio-group>
                                <i-button type="primary" size="small" class="button-position">确认</i-button>
                            </div>
                             <i-input type="textarea" :rows="3" placeholder="（审核意见）"></i-input>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>汪文青</span></p>
                                <p > 0000年00月00日</p>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">校团委意见</td>
                        <td class="longhang" colspan="4">
                           <div>
                               是否通过：
                                <i-radio-group>
                                    <i-radio label="是" class="iview-type-size"> 是</i-radio>
                                    <i-radio label="否" class="iview-type-size">否</i-radio>
                                </i-radio-group>
                                <i-button type="primary" size="small" class="button-position">确认</i-button>
                            </div>
                             <i-input type="textarea" :rows="3" placeholder="（审核意见）"></i-input>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>宋润涵</span></p>
                                <p > 0000年00月00日</p>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class="add1"></div>
            </div>
        </div>
    </div>
</template>

<script>
let app = require("@/config");
export default {
    data () {
        return {
            zhi2xing2ren2List: [
            {
            value: "指导老师",
             label: "指导老师"
        },
        {
          value: "挂靠单位",
          label: "挂靠单位"
        },
        {
          value: "学生联合会",
          label: "学生联合会"
        },
        {
          value: "校团委",
          label: "校团委"
        }
      ],
      model1: "",
      shen3he2zhuang4tai4List: [
        {
          value: "审核通过",
          label: "审核通过"
        },
        {
          value: "审核不通过",
          label: "审核不通过"
        }
      ],
      model2: ""
        }
    },
    mounted () {
        app.title = "社团活动";
    }
}
</script>

<style lang="less">
#activity-form {
    .paper {
        width: 795px;
        margin: 18px auto;
        background-color: white;
        border: solid 1px rgb(198, 198, 198);
        box-shadow:1px 1px 10px -2px #333333;
    }
    .status-bar{
        width: 793px;
        background-color: white;
        border-bottom: dashed 1px rgb(198, 198, 198);
    }
    .drop-down-box{
        width:200px;
    }
    .add1 {
        height: 80px;
    }
    .headline {
        margin-top: 9px;
        text-align: center;
        font-size: 24px;
        font-family: '';
    }
    .date {
        margin-top: 16px;
        margin-left: 518px;
        font-size: 12px;
        font-family: 'FangSong';
    }
    table {
        margin: 15px auto;
        border-collapse: collapse;
        text-align: center;
        font-family: 'FangSong';
        font-size: 18.7px;
        line-height: 30px;
    }
    .smallhang {
        width: 101px;
        height: 55px;
        padding: 0px 10px;
    }
    .longhang {
        width: 471px;
        height: 55px;
        padding: 10px 10px;
        text-align: left;
    }
    .wen-zi-ju-zhong{
        text-align: center;
    }
    .wen-zi-ju-you{
        text-align: right;
    }
    .input_box{
        min-height: 120px;
        text-align: left;
        font-family: 'FangSong';
    }
    .iview-type-size{
        font-size: 18.7px;
    }
    .button-position{
        float:right;
    }
}
</style>
