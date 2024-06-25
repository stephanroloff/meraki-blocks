import './editor.scss';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyNumberControl from '../components/MyNumberControl';
import MySelectControl from '../components/MySelectControl';


export default function Edit(props) {

	let { position, top, bottom, right, left, zindex, width, unit } = props.attributes;

	const MY_TEMPLATE = [
		['core/group', {}],
	];

	let effectSelectOptions = [
		{ value: 'relative', label: 'Relative' },
		{ value: 'absolute', label: 'Absolute' },
	];

	let unitSelectOptions = [
		{ value: 'auto', label: 'auto' },
		{ value: 'px', label: 'px' },
		{ value: '%', label: '%' },
		{ value: 'em', label: 'em' },
		{ value: 'rem', label: 'rem' },
		{ value: 'vw', label: 'vw' },
		{ value: 'vh', label: 'vh' },
	];

	return (
			<div {...useBlockProps()} style={{ 
				position: position, 
				top: `${top}px`,  
				bottom: `${bottom}px`,  
				left: `${left}px`,  
				right: `${right}px`,  
				zIndex: `${zindex}`,  
				maxWidth: width? unit=='auto'? 'auto':`${width}${unit}` : 'auto',  
			}}>

				<InspectorControls>
					<PanelBody>
						<MySelectControl label={'Select Position'} attrName={'position'} properties={props} options={effectSelectOptions}/>
						<MyNumberControl name={'Top'} attrName={'top'} min ={-10e4} properties={props} />
						<MyNumberControl name={'Bottom'} attrName={'bottom'} min ={-10e4} properties={props} />
						<MyNumberControl name={'Left'} attrName={'left'} min ={-10e4} properties={props} />
						<MyNumberControl name={'Right'} attrName={'right'} min ={-10e4} properties={props} />
						<MyNumberControl name={'zIndex'} attrName={'zindex'} min ={-10e4} properties={props} />
						<MyNumberControl name={'width'} attrName={'width'} properties={props} />
						<p>For width add also the Unit (px, %, rem, etc.)</p>
						<MySelectControl label={'Select unit'} attrName={'unit'} properties={props} options={unitSelectOptions}/>
					</PanelBody>
				</InspectorControls>

				<InnerBlocks
					template={MY_TEMPLATE}
				/>
			</div>
	);
}
