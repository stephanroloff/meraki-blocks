import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import MyToggleControl from '../components/MyToggleControl';
import MyEditModeButton from '../components/MyEditModeButton';
import { PanelBody } from '@wordpress/components';

export default function Edit(props) {
	let {editModeActive} = props.attributes
	const ALLOWED_BLOCKS = ['create-block/tab-block'];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyEditModeButton properties={props}/><br/>
					<MyToggleControl name={'Tab Columns'} attrName={'tabColumns'} properties={props} />
				</PanelBody>
			</InspectorControls>
			{!editModeActive ? (
				<div class="tabs-block-editor">
					<p>TABS BLOCK</p>
				</div>
				):(
					<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					/>
				)}
		</div>
	);
}
