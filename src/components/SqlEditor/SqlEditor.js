import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-min-noconflict/ext-language_tools";

function SqlEditor({ setValue, value }) {
  return (
    <div className="w-full p-2">
      <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        theme="twilight"
        name="editor"
        width="100%"
        wrapEnabled={true}
        fontSize={18}
        minLines={15}
        maxLines={10}
        showPrintMargin={false}
        style={{ borderRadius: "7px", height: "180px" }}
        showGutter
        placeholder="Write your query here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={(value) => setValue(value)}
        showLineNumbers
      />
    </div>
  );
}

export default React.memo(SqlEditor);
