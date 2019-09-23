import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-completed-acceptance-assembly',
  templateUrl: './completed-acceptance-assembly.component.html',
  styleUrls: ['../details.less']
})
export class DetailsCompletedAcceptanceAssemblyComponent implements OnInit {

  //市县区
  position;// = OptionsEnum
  data;
  //结构类型
  typeSelect;
  box;
  person;
  type;
  item = {
    name: '哈哈哈',
    type: '混合结构',
    grade: '三级',
    height: '5',
    upGround: '3',
    underGround: '2',
    builtUpArea2: '1',
    builtUnderArea: '22',
    fireHazard: '33',
    reserves: '88',

  }
  engineeringList;
  useNatureSelect;


  //耐火结构
  refractoryEnum;

  @ViewChild('st', { static: false }) st: STComponent;

  constructor(private http: _HttpClient, private modal: ModalHelper,
    private router: Router,
  ) {
    this.position = {};
    this.data = {};
    this.box = {};
    this.person = {};
    this.type = 1;

  }

  ngOnInit() {
    this.item;
    const selectChildren = [
      { natureName: "体育场馆", natureCode: "1" },
      { natureName: "会堂", natureCode: "2" },
      { natureName: "公共展览馆", natureCode: "3" },
      { natureName: "博物馆的展示厅", natureCode: "4" },
      { natureName: "民用机场航站楼", natureCode: "6" },
      { natureName: "客运车站候车室", natureCode: "7" },
      { natureName: "客运码头候船厅", natureCode: "8" },
      { natureName: "宾馆", natureCode: "9" },
      { natureName: "饭店", natureCode: "10" },
      { natureName: "商场", natureCode: "11" },
      { natureName: "市场", natureCode: "12" },
      { natureName: "影剧院", natureCode: "13" },
      { natureName: "公共图书馆的阅览室", natureCode: "14" },
      { natureName: "营业性室内健身场馆", natureCode: "15" },
      { natureName: "休闲场馆", natureCode: "16" },
      { natureName: "医院的门诊楼", natureCode: "17" },
      { natureName: "大学的教学楼", natureCode: "18" },
      { natureName: "图书馆", natureCode: "19" },
      { natureName: "食堂", natureCode: "20" },
      { natureName: "劳动密集型企业的生产加工车间", natureCode: "21" },
      { natureName: "寺庙", natureCode: "22" },
      { natureName: "教堂", natureCode: "23" },
      { natureName: "托儿所", natureCode: "24" },
      { natureName: "幼儿园的儿童用房", natureCode: "25" },
      { natureName: "儿童游乐厅等室内儿童活动场所", natureCode: "26" },
      { natureName: "养老院", natureCode: "27" },
      { natureName: "福利院", natureCode: "28" },
      { natureName: "医院", natureCode: "29" },
      { natureName: "疗养院的病房楼", natureCode: "30" },
      { natureName: "中小学校的教学楼", natureCode: "31" },
      { natureName: "学校的集体宿舍", natureCode: "32" },
      { natureName: "劳动密集型企业的员工集体宿舍", natureCode: "33" },
      { natureName: "歌舞厅", natureCode: "34" },
      { natureName: "录像厅", natureCode: "38" },
      { natureName: "放映厅", natureCode: "36" },
      { natureName: "卡拉ＯＫ厅", natureCode: "37" },
      { natureName: "夜总会", natureCode: "38" },
      { natureName: "游艺厅", natureCode: "39" },
      { natureName: "桑拿浴室", natureCode: "40" },
      { natureName: "网吧", natureCode: "41" },
      { natureName: "酒吧", natureCode: "42" },
      { natureName: "具有娱乐功能的□餐馆", natureCode: "43" },
      { natureName: "茶馆", natureCode: "44" },
      { natureName: "咖啡厅", natureCode: "45" },
      { natureName: "国家机关办公楼", natureCode: "46" },
      { natureName: "电力调度楼", natureCode: "47" },
      { natureName: "电信楼", natureCode: "48" },
      { natureName: "邮政楼", natureCode: "49" },
      { natureName: "防灾指挥调度楼", natureCode: "50" },
      { natureName: "广播电视楼", natureCode: "51" },
      { natureName: "档案楼", natureCode: "52" },
      { natureName: "本条第一至七项规定以外的单体建筑面积大于四万平方米或者建筑高度超过五十米的公共建筑", natureCode: "53" },
      { natureName: "国家标准规定的一类高层住宅建筑", natureCode: "54" },
      { natureName: "城市轨道交通", natureCode: "55" },
      { natureName: "隧道工程", natureCode: "56" },
      { natureName: "大型发电", natureCode: "57" },
      { natureName: "变配电工程", natureCode: "58" },
      { natureName: "生产、储存、装卸易燃易爆危险物品的工厂", natureCode: "59" },
      { natureName: "仓库", natureCode: "60" },
      { natureName: "专用车站", natureCode: "61" },
      { natureName: "码头，易燃易爆气体和液体的的充装站", natureCode: "62" },
      { natureName: "供应站", natureCode: "63" },
    ];
    this.useNatureSelect = selectChildren;

  }


  printFormData() {
    this.router.navigate([`/print-pages/completed-acceptance-print`]);

  }
}
