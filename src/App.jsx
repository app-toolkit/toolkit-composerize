/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import composerize from "composerize";

import "./App.css";

function App() {
  const [version, setVersion] = useState("latest");
  const [command, setCommand] = useState("");
  const [previewCommand, setPreviewCommand] = useState("");

  const convert = (selectVersion) => {
    const composeConfig = composerize(command, null, selectVersion);
    setPreviewCommand(composeConfig);
    console.log(composeConfig);
  };

  const handleBlur = () => {
    convert(version);
  };

  const handleChange = (event) => {
    setCommand(event.target.value);
    convert(version);
  };

  const handleSelectChange = (event) => {
    setVersion(event.target.value);
    convert(event.target.value);
  };
  return (
    <div
      className="bg-gradient-to-r from-indigo-400 to-cyan-400  py-8 space-y-6"
      style={{ height: "100vh" }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Composerize
      </h1>

      <div className="w-4/5 h-[90vh] flex border bg-white shadow-lg mx-auto">
        <div className="w-1/2 p-4 border-r">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Docker Run Editor</h2>
            <select
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSelectChange}
              value={version}
            >
              <option value="latest">latest</option>
              <option value="v3x">3.x</option>
              <option value="v2x">2.x</option>
            </select>
          </div>
          <textarea
            className="w-full h-[80vh] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your Docker commands here..."
            id="dockerInput"
            value={command}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        </div>

        <div className="w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-4">Docker Compose Preview</h2>
          <pre
            id="preview"
            className="w-full h-[80vh] p-2 border rounded bg-gray-100 overflow-auto"
          >
            {previewCommand}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
