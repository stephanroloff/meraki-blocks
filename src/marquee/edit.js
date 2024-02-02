import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import {
	ToggleControl,
	PanelBody,
	PanelRow,
	Button,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useState } from 'react';

export default function Edit(props) {
	let { attributes, setAttributes, isSelected } = props;
	let { reverse, animationTime } = attributes;
	const [ editMode, setEditMode ] = useState( false );

	function buttonCliked() {
		if(editMode){
			setEditMode(false);
		}else{
			setEditMode(true);
		}
	}

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Marquee Text Block' }],
	];

	return (
		<div {...useBlockProps()}>

			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<Button variant="primary" onClick={buttonCliked}>{editMode? 'Out of edit mode':'Edit block'}</Button>
					</PanelRow>
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


			{!editMode ? (
				<div class="marquee-editor">
					<p>MARQUEE BLOCK</p>
				</div>
			):(
				<InnerBlocks
				template={MY_TEMPLATE}
				/>
			)}

		</div>
	);
}
