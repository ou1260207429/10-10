import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { MessageBox } from 'src/app/services/message-box';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { FlowTemplateService } from 'src/app/services/flow-template.service';
import { CheckboxNumberDirective } from 'src/app/directive/checkboxNumber.directive';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'flow-template-node',
    templateUrl: './flow-template-node.HTML',
    styleUrls: ["./flow-template-node.less"],
    providers: [FlowTemplateService, CheckboxNumberDirective]
})
export class FlowTemplateNodeComponent implements OnInit {

    constructor(
        private flowTemplateService: FlowTemplateService,
        private messageBox: MessageBox) {
        this.flowTemplateData = {};
    }
    @Input() visible = false;
    @Output() public visibleChange = new EventEmitter();
    @Input() date4Search: any = {}; // 编辑入参
    @Output() complete = new EventEmitter();
    isEdit = false;
    flowTemplateData;// 流程模板数据

    footer = " ";
    formatterDay = (value: number) => {
        if (!value || value == null) return null; return (value + "天")
    };

    ngOnInit(): void {
        if (this.date4Search == null || this.date4Search.flowTemplateId == null && this.date4Search.orgId == null) {
            this.messageBox.warning("流程模板或单位不明确", '操作提示');
            this.cancel();
        } else {
            this.flowTemplateService.getFlowTemplateAndNode(this.date4Search.flowTemplateId, res => {
                this.flowTemplateData = res;
                this.flowTemplateData.flowTemplate.orgID = this.date4Search.orgId;
            }, null);
        }
    }

    cancel() {
        this.visible = false;
        if (this.visibleChange != null) {
            this.visibleChange.emit(this.visible);
        }
    }

    close() {
        this.cancel();
        if (this.complete != null) {
            this.complete.emit();
        }
    }

    edit(data) {
        this.isEdit = true;
        data.newData = {};
        data.newData.nodeName = data.nodeName;
        data.newData.authorityGroup = data.authorityGroup;
        if (data.limitTime != null) {
            data.newData.limitTime = data.limitTime / 24;
        }
    }

    cancelEdit(data, index) {
        this.isEdit = false;
        if (data.nodeID == null) {
            this.flowTemplateData.flowNodes.splice(index, 1);
        }
        else {
            data.newData = null;
        }
    }

    sure(data, index) {
        data.nodeName = data.newData.nodeName;
        data.authorityGroup = data.newData.authorityGroup;
        if (data.nodeID == null) {
            data.nodeID = 0;
            data.templateID = data.newData.templateID;
            data.preflxNodeID = data.newData.preflxNodeID;
            data.customNextNode = data.newData.customNextNode;
            data.isCreateOpinionFile = data.newData.isCreateOpinionFile;
            data.isCreateAcceptFile = data.newData.isCreateAcceptFile;
            data.orgId = data.newData.orgId;
            data.nodeType = data.newData.nodeType;
        }

        if (data.newData.limitTime != null && data.newData.limitTime > 0) {
            data.limitTime = data.newData.limitTime * 24;
        } else {
            data.limitTime = null;
        }
        data.newData = null;

        this.updateFlowTemplate();
    }

    add(index, count) {
        this.isEdit = true;
        let data;
        data = {};
        data.newData = {};
        data.nodeID = null;
        // data.templateID = this.flowTemplateData.flowNodes[index].templateID;
        // data.preflxNodeID = this.flowTemplateData.flowNodes[index].preflxNodeID;
        // data.customNextNode = this.flowTemplateData.flowNodes[index].customNextNode;
        // data.authorityGroup = this.flowTemplateData.flowNodes[index].authorityGroup;
        // data.isCreateOpinionFile = this.flowTemplateData.flowNodes[index].isCreateOpinionFile;
        // data.isCreateAcceptFile = this.flowTemplateData.flowNodes[index].isCreateAcceptFile;
        // data.limitTime = this.flowTemplateData.flowNodes[index].limitTime;
        // data.orgId = this.flowTemplateData.flowNodes[index].orgId;
        data.nodeName = "添加审批节点";
        data.nodeType = this.flowTemplateData.flowNodes[index].nodeType;
        data.newData.nodeType = data.nodeType;
        this.flowTemplateData.flowNodes.splice(index + count, 0, data);
    }

    delete(index) {
        this.isEdit = true;
        this.messageBox.confirm("确定删除吗？", "提示", () => {
            // const preNodeIndex = index - 1;
            // const nextNodeIndex = index + 1;
            // let preNode;
            // let nextNode;
            // if (preNodeIndex >= 0) {
            //     preNode = this.flowTemplateData.flowNodes[preNodeIndex];
            // }
            // if (this.flowTemplateData.flowNodes.length > nextNodeIndex) {
            //     nextNode = preNode = this.flowTemplateData.flowNodes[nextNodeIndex];
            // }

            // if (preNode != null) {
            //     if (nextNode != null) {
            //         this.flowTemplateData.flowNodes[index].preflxNodeID = preNode.nodeID;
            //     }
            // } else {
            //     if (nextNode != null) {
            //         this.flowTemplateData.flowNodes[index].preflxNodeID = null;
            //     }
            // }
            this.flowTemplateData.flowNodes.splice(index, 1);
            this.updateFlowTemplate();

        }, () => {
            this.isEdit = false;
        });
    }

    updateFlowTemplate() {
        this.flowTemplateService.updateFlowTemplate(this.flowTemplateData, res => {
            this.messageBox.success("操作成功");
        }, () => {
            this.isEdit = false;
        });
    }

}

