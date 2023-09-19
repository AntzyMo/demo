import { Card, Badge } from "antd";
import { StarFilled } from "@ant-design/icons";
import type { MockDataType } from "../type";
import { STATUS_DICT } from "../utils/dict";
import { getYYYYMMDD } from "../utils";

interface CardModePropsType {
  dataSource: MockDataType;
}

const CardMode = (props: CardModePropsType) => {
  const {
    dataSource: { prjName, projectStatus, prjManager, prjStartDate, taskCount, taskDoneCount, taskDoingCount } = {},
  } = props;

  return (
    <Card style={{
      minWidth:360
    }}>
      <div className="flex flex-1 flex-wrap" >
        <div className="flex items-center mr-5">
          <img
            className="w-15 h-15 "
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt=""
          />
        </div>
       
        <div className="flex-1 mr-5">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{prjName}</span>
          </div>
          <div className="flex flex-col color-[#3f3f46]">
            <span>项目经理：{prjManager}</span>
            <span>立项日期：{getYYYYMMDD(prjStartDate || "")}</span>
            <div className="flex justify-between">
              <div className="flex justify-between gap-2">
                {taskCount !== null && taskDoneCount !== null && taskDoingCount !== null && (
                  <>
                    <span>任务：{taskCount}</span>
                    <span>完成：{taskDoneCount}</span>
                    <span>进行：{taskDoingCount}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between  items-end">
           {projectStatus && (
              <Badge status={STATUS_DICT[projectStatus].color} text={STATUS_DICT[projectStatus].label} />
            )}
              <StarFilled style={{ color: "#facc15" }} />
        </div>
      </div>
    </Card>
  );
};

export default CardMode;
