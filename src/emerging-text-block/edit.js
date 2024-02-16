import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	 __experimentalNumberControl as NumberControl 
} from '@wordpress/components';
import './editor.scss';

export default function Edit(props) {

	let { attributes, setAttributes } = props;
	let { animationDuration, animationDelay, textHeight} = attributes;

	const ALLOWED_BLOCKS = ['core/heading'];
	const MY_TEMPLATE = [
		['core/heading', {className: 'emerging-text', placeholder: 'Add Text...'}],
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<NumberControl
							label={'Animation duration'}
							min={0}
							onChange={value => setAttributes({ animationDuration: value })}
							value={animationDuration}
						/>		
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Animation delay'}
							min={0}
							onChange={value => setAttributes({ animationDelay: value })}
							value={animationDelay}
						/>		
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Text Height'}
							min={0}
							onChange={value => setAttributes({ textHeight: value })}
							value={textHeight}
						/>		
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={MY_TEMPLATE}
				allowedBlocks={ALLOWED_BLOCKS}
			/>
		</div>
	);
}
