import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import Collapse from './collapse.svg';
import Expand from './expand.svg';

function Editor({ displayName, language, value, onChange }) {

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, val) {
        onChange(val);
    }

    return(
        <div className={`editorContainer ${open ? '' : 'collapsed'}`}>
            <div className="editorHead">
                {displayName}
                <button
                    type="button"
                    className="collapseBtn"
                    onClick={ () => setOpen(prevOpen => !prevOpen)}
                >
                    <img className="editorIcons" src={open? Collapse : Expand} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="codeMirrorWrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true
                }}
            />
        </div>
    );
}

export default Editor;