import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import {
	ToggleControl,
	PanelBody,
	PanelRow,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';

export default function Edit(props) {
	let { attributes, setAttributes, isSelected } = props;
	let { reverse, animationTime } = attributes;

	// console.log(props);
	// let childSelected;
	// let child = document.querySelector('.wp-block-create-block-marquee-block');
	// if(child){
	// 	console.log(child.classList);
	// 	console.log(child.classList.contains('has-child-selected'));
	// 	childSelected = child.classList.contains('has-child-selected');
	// }

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Marquee Text Block' }],
	];

	return (
		<div {...useBlockProps()}>

			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<ToggleControl
							label="Reverse"
							help={
								reverse
									? 'Reverse activated'
									: 'Reverse deactivated'
							}
							checked={ reverse }
							onChange={value => setAttributes({ reverse: value })}
						/>		
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Animation Time'}
							min={0}
							onChange={value => setAttributes({ animationTime: value })}
							value={animationTime}
						/>		
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{/* {!childSelected? ( */}
			{!isSelected? (
				<div class="marquee-editor">
					<p>MARQUEE BLOCK</p>
					<p>Click me to edit</p>
				</div>
			):(
				<InnerBlocks
				template={MY_TEMPLATE}
				/>
			)}

		</div>
	);
}
