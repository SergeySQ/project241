import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { GridView } from "./content/GridView";
import { Form } from "./form";

export class TopLayout extends View {
	init() {
		return (this.layout = new dhx.Layout(null, {
			rows: [
				{
					id: "toolbar",
					height: "content",
					init: cell => this.show(cell, ToolbarView),
				},
				{
					id: "content",
				},
				// {
				// 	id: "button",
				// 	height: "content",
				// 	init: cell => this.show(cell, Form),
				// },
			],
		}));
	}

	ready() {
		this.observe(
			state => state.active,
			active => {
				switch (active) {
					case "grid":
						this.show(this.layout.getCell("content"), GridView, {
							dataCollection: this.params.persons,
						});
						break;
				}
			}
		);
	}
}
