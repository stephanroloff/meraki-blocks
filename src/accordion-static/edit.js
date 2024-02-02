import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import {
	ToggleControl,
	PanelBody,
	PanelRow,
	Button,
} from '@wordpress/components';
import arrowImage from './assets/pfeil_accordion.png';


export default function Edit() {

	const MY_TEMPLATE = [
		['core/group', {className: 'accordion'}, [
			['core/columns', {},
				[
					['core/column', {width: '10%'},
						[
							['core/image', {url: arrowImage}],
						]
					],
					['core/column', {width: '90%'},
						[
							['core/heading', {placeholder: 'Accordion title'}]
						]
					]
				]
			],
		]],
		['core/group', {className: 'panel'}, [
			['core/group', {className: 'inner-content'}, [
				['core/paragraph', {placeholder: 'Accordion description'}]
			]]
		]],
	];
	
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			
			<InnerBlocks
				template={MY_TEMPLATE} 
				templateLock="all"
			/>
		</div>
	);
}

