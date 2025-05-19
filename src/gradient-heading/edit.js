import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MySelectControl from '../components/MySelectControl';

export default function Edit(props) {
	let {attributes} = props;

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Book Title' }],
	];

	let modeSelectOptions = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
	];

	return (
		<div {...useBlockProps({ className: `${attributes.mode}` })}>
			<InspectorControls>
					<PanelBody>
						<MySelectControl label={'Select Mode:'} attrName={'mode'} properties={props} options={modeSelectOptions}/>
					</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}
