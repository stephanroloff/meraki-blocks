import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MyTextControl from '../components/MyTextControl';

export default function Edit(props) {

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyTextControl name={'Custom Field Name'} attrName={'customFieldName'} properties={props} />
				</PanelBody>
			</InspectorControls>
			<p>Custom Field Block</p>
		</div>
	);
}
