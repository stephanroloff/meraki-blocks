import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
// import ServerSideRender from '@wordpress/server-side-render';
const { serverSideRender: ServerSideRender } = wp;
import metadata from './block.json';
import {
	TextareaControl,
	SelectControl,
	ColorPicker,
	PanelBody,
	PanelRow,
	__experimentalNumberControl as NumberControl 
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	let {text, 
		colorSelectedForeground, 
		colorSelectedBackground, 
		headingSelected, 
		textAlign,
		browserHeight,
		speed
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextareaControl
							label="Textarea"
							rows={2}
							value={ text }
							onChange={ value => setAttributes({text: value}) }
						/>
					</PanelRow>
					<PanelRow>
						<p>Color Background</p>	
					</PanelRow>		
					<PanelRow>	
						<ColorPicker
							color={colorSelectedBackground}
							onChange={value => setAttributes({colorSelectedBackground: value})}
							enableAlpha
						/>
					</PanelRow>
					<PanelRow>
						<p>Color Foreground</p>	
					</PanelRow>		
					<PanelRow>	
						<ColorPicker
							color={colorSelectedForeground}
							onChange={value => setAttributes({colorSelectedForeground: value})}
							enableAlpha
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label='Select Heading:'
							value={headingSelected}
							onChange={(option) => { setAttributes({ headingSelected: option }) }}
							options={ [
								{ label: 'h1', value: 'h1' },
								{ label: 'h2', value: 'h2' },
								{ label: 'h3', value: 'h3' },
								{ label: 'h4', value: 'h4' },
								{ label: 'h5', value: 'h5' },
								{ label: 'h6', value: 'h6' },
								{ label: 'p', value: 'p' },
							] }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label='Text Align:'
							value={textAlign}
							onChange={(option) => { setAttributes({ textAlign: option }) }}
							options={ [
								{ label: 'Left', value: 'left' },
								{ label: 'Right', value: 'right' },
								{ label: 'Center', value: 'center' },
							] }
						/>
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Browser Height'}
							min={0}
							max={10}
							onChange={value => setAttributes({ browserHeight: value })}
							value={browserHeight}
							isShiftStepEnabled={ true }
							shiftStep={ 1 }
						/>		
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={'Speed'}
							min={0}
							max={20}
							onChange={value => setAttributes({ speed: value })}
							value={speed}
						/>		
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={metadata.name}
				attributes={ attributes }
			/>
		</div>
	);
}
