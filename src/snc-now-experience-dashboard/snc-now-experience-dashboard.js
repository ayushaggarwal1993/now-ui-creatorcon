import { createCustomElement } from "@servicenow/ui-core";
import { actionHandlers } from "./actionHandlers.js";

import styles from "./styles.scss";

import "../components/now-experience-table";
import { columns } from "./defaults.js";

createCustomElement("snc-now-experience-dashboard", {
	view: function (state, helpers) {
		const { dataRows } = state;
		const displayColumns = columns.filter((col) => {
			return col.field !== "sys_id";
		});

		return (
			<div>
				<now-experience-table
					title="Task table"
					dataColumns={displayColumns}
					dataRows={dataRows}
				></now-experience-table>
			</div>
		);
	},
	actionHandlers: {
		...actionHandlers,
	},
	styles,
});
