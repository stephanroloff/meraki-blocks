import { __ } from '@wordpress/i18n';
import './editor.scss';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyNumberControl from '../components/MyNumberControl';
import MySelectControl from '../components/MySelectControl';

export default function Edit(props) {
	let effectSelectOptions = [
		{ value: 'loader-spinner', label: 'Loader Spinner' },
		{ value: 'loader-spinner-1', label: 'Loader Spinner 1' },
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyNumberControl name={'Height (px)'} attrName={'height'} min ={0} properties={props} />
					<p>If you want use 100%, leave the field empty</p>
					<MyNumberControl name={'Width (px)'} attrName={'width'} min ={0} properties={props} />
					<p>If you want use 100%, leave the field empty</p>
					<MyNumberControl name={'Time (ms)'} attrName={'time'} min ={0} properties={props} />
					<MySelectControl label={'Select loader'} attrName={'loaderType'} properties={props} options={effectSelectOptions}/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks/>
		</div>
	);
}
