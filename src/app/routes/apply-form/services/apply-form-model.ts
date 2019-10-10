export class ApplyFormModel {

    public formData: any; // 表单数据

    // 建设单位
    public constructOrgs: any;

    // 设计单位
    public designOrgs: any;

    // 施工单位
    public buildOrgs: any;

    // 监理单位
    public supervisoryOrgs: any;

    // 审图单位
    public drawingOrgs: any;

    // 检测单位
    public testingOrgs: any;

    // 分包单位
    public subcontractors: any;

    // 审图编号列表
    public drawingNumberArray: any;

    constructor() {
        this.initFormData();
    }

    // 初始化数据
    initFormData() {
        this.setFormData(null);
    }

    setFormData(data) {
        if (data == null) {
            this.formData = {};
            // 申请表单数据
            this.formData.applyFormRequestDTO = {};
            // 申请表单扩展数据
            this.formData.applyFormExpandRequestDTO = {};
            // 申报表单附件数据
            this.formData.applyFormAttachmentRequestDTOs = [];
            // 申请表单公司单位数据
            this.formData.applyFormCompanyRequestDTOs = [];
            // 单体建筑数据
            this.formData.monomerArchitectureRequestDTOs = [];
            // 储罐数据
            this.formData.storageTankRequestDTOs = [];
            // 堆场数据
            this.formData.yardRequestDTOs = [];
            // 建筑保温数据
            this.formData.heatPreservationRequestDTOs = [];
            // 土建工程数据
            this.formData.civilEngineeringRequestDTOs = [];
            // 消防设施数据
            this.formData.fireFacilitiesRequestDTOs = [];
            // 室内装修工程数据
            this.formData.decorationRequestDTOs = [];
            // 单位意见数据
            this.formData.orgOpinionRequestDTOs = [];
            // 审图编号列表
            this.drawingNumberArray = [];
        } else {
            this.formData = data;
            if (data.drawingNumber != null && data.drawingNumber !== '') {
                this.drawingNumberArray = data.drawingNumber.split(',');
            } else {
                this.drawingNumberArray = [];
            }
        }

        // 建设单位
        this.constructOrgs = this.getOrgList(1);
        if (this.constructOrgs.length == 0) {
            this.constructOrgs.push({});
        }
        // 设计单位
        this.designOrgs = this.getOrgList(2);
        // 施工单位
        this.buildOrgs = this.getOrgList(3);
        // 监理单位
        this.supervisoryOrgs = this.getOrgList(4);
        // 审图单位
        this.drawingOrgs = this.getOrgList(5);
        // 检测单位
        this.testingOrgs = this.getOrgList(6);
        // 分包单位
        this.subcontractors = this.getOrgList(7);
    }

    // 获取单位列表：1-建设单位，2-设计单位，3-施工单位，4-审图单位，5-检测单位，6分包单位
    getOrgList(orgType) {
        let orgs;
        orgs = [];
        if (this.formData != null && this.formData.applyFormCompanyRequestDTOs != null) {
            this.formData.applyFormCompanyRequestDTOs.forEach(element => {
                if (element.orgType == orgType) {
                    orgs.push(element);
                }
            });
        }

        return orgs;
    }


    getDrawingNumber() {
        let drawingNum = ',';
        if (this.drawingNumberArray.length > 0) {
            this.drawingNumberArray.forEach(value => {
                if (value != null && value != '') {
                    drawingNum = drawingNum + value;
                }
            });
        }

        if (drawingNum == ',') {
            drawingNum = '';
        } else {
            drawingNum = drawingNum.substring(1);
        }
        return drawingNum;
    }

}