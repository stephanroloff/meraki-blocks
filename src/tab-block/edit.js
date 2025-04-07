import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MyTextControl from '../components/MyTextControl';

export default function Edit(props) {

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Tab Title' }],
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyTextControl name={'Tab Title'} attrName={'tabTitle'} properties={props} />
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}
