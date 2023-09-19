import { Table, Badge } from "antd";
import { MockDataType, MockDataTypeList, ProjectStatusType } from "../type";
import { StarFilled } from "@ant-design/icons";
import { getYYYYMMDD } from "../utils";
import { STATUS_DICT } from "../utils/dict";

interface TableModePropsType {
  dataSource: MockDataTypeList;
}

const tableColumns = [
  {
    dataIndex: "favorite",
    render: () => <StarFilled style={{ color: "#facc15" }} />,
  },
  {
    title: "所属品类",
    dataIndex: "productCategory",
  },
  {
    title: "项目类别",
    dataIndex: "prjCategory",
  },
  {
    title: "项目编号",
    dataIndex: "guid",
  },
  {
    title: "项目名称",
    dataIndex: "prjName",
  },
  {
    title: "项目状态",
    dataIndex: "projectStatus",
    render: (text: ProjectStatusType) => <Badge status={STATUS_DICT[text].color} text={STATUS_DICT[text].label} />,
  },
  {
    title: "项目经理",
    dataIndex: "prjManager",
  },
  {
    title: "所属部门",
    dataIndex: "department",
  },
  {
    title: "项目计划时间",
    dataIndex: "prjStartDate",
    render: (text: string, data: MockDataType) => (
      <span>
        {getYYYYMMDD(text)} - {getYYYYMMDD(data.prjEndDate)}
      </span>
    ),
  },
];

const TableMode = (props: TableModePropsType) => {
  return <Table columns={tableColumns} dataSource={props.dataSource} pagination={false} />;
};

export default TableMode;
