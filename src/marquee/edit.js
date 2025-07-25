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
	let { textStroke, reverse, animationTime } = attributes;
	const [ editModeMarquee, setEditModeMarquee ] = useState( false );

	function buttonCliked() {
		if(editModeMarquee){
			setEditModeMarquee(false);
		}else{
			setEditModeMarquee(true);
		}
	}

	const MY_TEMPLATE = [
		['core/heading', { placeholder: 'Marquee Text Block' }],
	];

	return (
		<div {...useBlockProps({className: textStroke?'text-stroke':''})}>

			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<Button variant="primary" onClick={buttonCliked}>{editModeMarquee? 'Out of edit mode':'Edit block'}</Button>
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
					<div style={{height: "20px"}}></div>
					<p>HEADING STYLE</p>
					<PanelRow>
						<ToggleControl
							label="Text stroke"
							checked={ textStroke }
							onChange={value => setAttributes({ textStroke: value })}
						/>		
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{!editModeMarquee ? (
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
