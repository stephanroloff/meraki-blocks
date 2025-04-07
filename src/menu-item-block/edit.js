import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyTextControl from '../components/MyTextControl';
import './editor.scss';

export default function Edit(props) {

	const MY_TEMPLATE = [
		['core/paragraph', { className: 'menu-item-title' }],
	];
	
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyTextControl name={'Submenu Conection ID'} attrName={'submenuConectionId'} properties={props} />
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}
