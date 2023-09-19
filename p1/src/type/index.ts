export type MockDataTypeList = MockDataType[];

export type ProjectStatusType = "processing" | "processing";

export interface MockDataType {
  productCategory: string;
  prjCategory: string;
  prjName: string;
  prjManager: string;
  prjStartDate: string;
  prjEndDate: string;
  guid: string;
  projectStatus: ProjectStatusType;
  department: string;
  logo: string;
  taskCount?: number;
  taskDoneCount?: number;
  taskDoingCount?: number;
}
