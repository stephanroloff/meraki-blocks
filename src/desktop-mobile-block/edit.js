import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MySelectControl from '../components/MySelectControl';
export default function Edit(props) {
	const MY_TEMPLATE = [
		['core/group', { className: 'desktop-layout' }],
		['core/group', { className: 'mobile-layout' }]
	];
	let modalSelectOptions = [
		{ value: 'desktop-view', label: 'Desktop view' },
		{ value: 'mobile-view', label: 'Mobile view' },
	];
	let breakpointWidthOptions = [
		{ value: '200', label: '200' },
		{ value: '300', label: '300' },
		{ value: '400', label: '400' },
		{ value: '500', label: '500' },
		{ value: '600', label: '600' },
		{ value: '700', label: '700' },
		{ value: '800', label: '800' },
		{ value: '900', label: '900' },
		{ value: '1000', label: '1000' },
		{ value: '1100', label: '1100' },
		{ value: '1200', label: '1200' },
		{ value: '1300', label: '1300' },
		{ value: '1400', label: '1400' },
		{ value: '1500', label: '1500' },
	]
	return (
		<div {...useBlockProps({
			className: `${props.attributes.layoutType}`
		})}>
			<InspectorControls>
					<PanelBody>
						<MySelectControl label={'Select Layout Type'} attrName={'layoutType'} properties={props} options={modalSelectOptions}/>
						{ props.attributes.layoutType === 'mobile-view'? (
							<>
								<MySelectControl label={'Breakpoint width (px)'} attrName={'breakpointWidth'} properties={props} options={breakpointWidthOptions}/>
								<p>min-width: 200px</p>
							</>
							):('')
						}
					</PanelBody>
			</InspectorControls>
			<div className='breakpoint-mobile' style={{ width: `${props.attributes.layoutType === 'mobile-view'? props.attributes.breakpointWidth + 'px' : '100%'}` }}>
				<InnerBlocks
					template={MY_TEMPLATE}
				/>
			</div>
		</div>
	);
}