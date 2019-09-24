export class PageDataHelper {
    // 分页列表
    public items;

    // 当前页（从1开始）
    public currentPage;

    // 页行数
    public totalPageCount;

    // 总数据
    public totalNum;

    // public constructor() {
    //     this.totalPageCount = 20;
    //     this.clean();
    // }

    // public updateData(data) {
    //     if (data != null) {
    //         this.items = data.pageList;
    //         this.totalNum = data.total;
    //     }
    // }

    public static initPageData() {
        const pageData: any = {};
        pageData.pageSize = 10;
        pageData.totalPageCount = 0;
        this.emptyPageData(pageData);
        return pageData;
    }

    public static emptyPageData(pageData) {
        pageData.items = [];
        pageData.currentPage = 1;
        pageData.totalPageCount = 0;
        pageData.totalNum = null;
        return pageData;
    }
}