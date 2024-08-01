import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MyEditModeButton from '../components/MyEditModeButton';
import MyNumberControl from '../components/MyNumberControl';
import MySelectControl from '../components/MySelectControl';

export default function Edit(props) {
	let {editModeActive, width, height} = props.attributes

	const MY_TEMPLATE = [
		['core/group'],
	];

	let modalSelectOptions = [
		{ value: 'automatic', label: 'Automatic' },
		{ value: 'button', label: 'Button' },
		{ value: 'link', label: 'Link' },
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
					<PanelBody>
						<MyEditModeButton properties={props}/><br/>
						<MySelectControl label={'Select Modal Type'} attrName={'modalType'} properties={props} options={modalSelectOptions}/>

						<MyNumberControl name={'Width (px)'} attrName={'width'} min ={0} properties={props} />
						<p>min-width: 200px</p>
						<MyNumberControl name={'Height (px)'} attrName={'height'} min ={0} properties={props} />
						<p>min-height: 200px</p>

					</PanelBody>
			</InspectorControls>

			{!editModeActive ? (
			<div class="modal-editor">
				<p>MODAL BLOCK</p>
			</div>
			):(
				<div className='modal-container' style={{ width: `${width}px`, height: `${height}px` }}>
					<div className='modal-content'>
						<InnerBlocks
							template={MY_TEMPLATE}
						/>
					</div>
				</div>
			)}						

		</div>
	);
}
