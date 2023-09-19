import { Radio, type RadioChangeEvent } from "antd";
import CardMode from "./components/CardMode";
import TableMode from "./components/TableMode";
import type { MockDataTypeList } from "./type";
import mockdata from "./utils/data.json";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("card");

  return (
    <div className="flex flex-col p-6">
      <div className="text-end">
      <Radio.Group onChange={(e: RadioChangeEvent) => setMode(e.target.value)} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="card">卡片</Radio.Button>
        <Radio.Button value="table">列表</Radio.Button>
      </Radio.Group>
      </div>
      {mode === "card" && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 flex-wrap">
          {(mockdata as MockDataTypeList).map((mapItem) => (
            <CardMode dataSource={mapItem} key={mapItem.guid} />
          ))}
        </div>
      )}
      {mode === "table" && <TableMode dataSource={mockdata as MockDataTypeList} />}
    </div>
  );
}

export default App;
