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
                                    <select class="drop-down-box">
                                        <option value="指导老师">指导老师</option>
                                        <option value="挂靠单位">挂靠单位</option>
                                        <option value="学生社团联合会">学生社团联合会</option>
                                        <option value="校团委">校团委</option>
                                    </select>
                                </td>
                                <td class="smallhang wen-zi-ju-you">状态：</td>
                                <td  colspan="2">
                                        <select class="drop-down-box">
                                        <option value="审核通过">审核通过</option>
                                        <option value="审核不通过">审核不通过</option>
                                    </select>
                                </td>
                                <td class="smallhang">
                                    <i-button type="primary" style="width:60px;float: right;">确认</i-button>
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
                        <td class="mhang">活动时间</td>
                        <td colspan="2" width="200" style="letter-spacing: 2px;">0000年00月00日至0000年00月00日</td>
                        <td class="mhang">活动人数</td>
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
                                <i-radio label="社团内部活动">社团内部活动</i-radio>
                                <i-radio label="公开活动">公开活动</i-radio>
                            </i-radio-group>
                        </td>
                    </tr>
                    <tr>
                        <td class="longhang" colspan="4">
                            <div class="input_box" contenteditable="true">
                                （如为公开活动可具体描写面向范围如：面向全体学生/面向校内外人员等，可给出示例填写）
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang" rowspan="2">活动内容</td>
                        <td class="longhang" colspan="4">
                            <div>
                                <input type="file" name="" id="">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="longhang" colspan="4">
                            <div class="input_box" contenteditable="true"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">指导老师<br>审核意见</td>
                        <td class="longhang" colspan="4">
                            <div >是否通过：
                                <label for="internal"><input type=checkbox id="internal"/>
                                    是</label>
                                <label for="internal"><input type=checkbox id="internal"/>
                                    否</label>
                                <button type="button" class="button2">确认</button>
                            </div>
                            <div class="input_box" contenteditable="true">(审核意见)</div>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>黄玺黄西</span></p>
                                <p > 0000年00月00日</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">挂靠单位<br>意见</td>
                        <td class="longhang" colspan="4">
                            <div>是否通过：
                                <label for="internal"><input type=checkbox id="internal"/>是</label>
                                <label for="internal"><input type=checkbox id="internal"/>否</label>
                                <button type="button" class="button2">确认</button>
                            </div>
                            <div class="input_box" contenteditable="true">(审核意见)</div>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>Chritine Dekrause Dalebord</span></p>
                                <p >0000年00月00日</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">学生社团<br>联合会<br>意见</td>
                        <td class="longhang" colspan="4">
                            <div>是否通过：
                                <label for="internal"><input type=checkbox id="internal"/> 是</label>
                                <label for="internal"><input type=checkbox id="internal"/>否</label>
                                <button type="button" class="button2">确认</button>
                            </div>
                            <div class="input_box" contenteditable="true">(审核意见)</div>
                            <div class="wen-zi-ju-you">
                                <p >审核人（签名）：<span>汪文青</span></p>
                                <p > 0000年00月00日</p>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="smallhang">校团委<br>意见</td>
                        <td class="longhang" colspan="4">
                            <div>是否通过：
                                <label for="internal"><input type=checkbox id="internal"/> 是</label>
                                <label for="internal"><input type=checkbox id="internal"/>否</label>
                                <button type="button" class="button2">确认</button>
                            </div>
                            <div class="input_box" contenteditable="true">(审核意见)</div>
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
        return {}
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
        height:69px;
        width: 795px;
        margin: 0px auto ;
        background-color: white;
        border-bottom: dashed 1px rgb(198, 198, 198);
    }
    .drop-down-box{
        width:200px;
        height:25px;
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
        margin: 14px auto;
        border-collapse: collapse;
        text-align: center;
        font-family: 'FangSong';
        font-size: 18.7px;
        line-height: 35px;
    }

    .smallhang {
        width: 80px;
        height: 55px;
        padding: 0px 10px;
    }

    .longhang {
        width: 468px;
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
    .button2{
        width:50px;
        float: right;
        margin-top: 6px;
    }
    #time span {
        width: 30px;
    }

    .file {
        position: relative;
        display: inline-block;
        background: #D0EEFF;
        border: 1px solid #99D3F5;
        border-radius: 4px;
        padding: 4px 12px;
        overflow: hidden;
        color: #1E88C7;
        text-decoration: none;
        text-indent: 0;
        line-height: 20px;
    }

    .file input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }

    .file:hover {
        background: #AADFFD;
        border-color: #78C3F3;
        color: #004974;
        text-decoration: none;
    }
    .mhang{
        width: 80px;
        height: 76px;
        padding: 0px 10px;

    }
}
</style>
