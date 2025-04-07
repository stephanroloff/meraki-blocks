import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyEditModeButton from '../components/MyEditModeButton';
import MyTextControl from '../components/MyTextControl';
import './editor.scss';

export default function Edit(props) {
	let {editModeActive} = props.attributes

	const MY_TEMPLATE = [
		['core/paragraph', { placeholder: 'Submenu' }],
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyEditModeButton properties={props}/><br/>
					<MyTextControl name={'Submenu Conection ID'} attrName={'submenuConectionId'} properties={props} />
				</PanelBody>
			</InspectorControls>
			{!editModeActive ? (
				<div class="accordion-vertical-editor">
					<p>SUBMENU BLOCK</p>
				</div>
			):(
				<InnerBlocks
					template={MY_TEMPLATE}
				/>
			)}
		</div>
	);
}
