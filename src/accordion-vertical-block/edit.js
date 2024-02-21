import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MyEditModeButton from '../components/MyEditModeButton';
import MyNumberControl from '../components/MyNumberControl';

export default function Edit(props) {
	let {editModeActive, height} = props.attributes

	const MY_TEMPLATE = [
		['core/group', { className: 'accordion-container' }, [
			['core/group', { className: 'slide-1 slide slide-open slide-active' }, [['core/group', { className: 'content' }]]],
			['core/group', { className: 'slide-2 slide' }, [['core/group', { className: 'content' }]]],
			['core/group', { className: 'slide-3 slide slide-extra' }, [['core/group', { className: 'content' }]]],
			// To add a new slide uncomment this line:
			// ['core/group', { className: 'slide-4 slide slide-extra' }, [['core/group', { className: 'content' }]]]
		]],
	];

	return (
		<div {...useBlockProps()} >
			<InspectorControls>
				<PanelBody>
					<MyEditModeButton properties={props}/><br/>
					<MyNumberControl name={'Height (px)'} attrName={'height'} min ={0} properties={props} />
					<p>min-height: 200px</p>
				</PanelBody>
			</InspectorControls>

			{!editModeActive ? (
				<div class="accordion-vertical-editor">
					<p>ACCORDION VERTICAL BLOCK</p>
				</div>
			):(
				<InnerBlocks
					template={MY_TEMPLATE}
				/>
			)}
		</div>
	);
}
