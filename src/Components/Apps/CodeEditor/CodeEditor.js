import React, { useEffect, useState } from 'react';
import Editor from './Components/Editor';
import './CodeEditor.css';
import useLocalStorage from './hooks/useLocalStorage';

function CodeEditor() {

	const [html, setHtml] = useLocalStorage('html', '');
	const [css, setCss] = useLocalStorage('css', '');
	const [js, setJs] = useLocalStorage('js', '');
	const [srcDoc, setSrcDoc] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(
				`<html>
					<body>${html}</body>
					<style>${css}</style>
					<script>${js}</script>
				</html>`
			)
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, js])

	return(
		<>
			<div className="pane">
				<Editor displayName="HTML" language="xml" value={html} onChange={setHtml} />
				<Editor displayName="CSS" language="css" value={css} onChange={setCss} />
				<Editor displayName="JavaScript" language="javascript" value={js} onChange={setJs} />
			</div>
			<div className="pane">
				<iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%"  />
			</div>
		</>
	);
}

export default CodeEditor;