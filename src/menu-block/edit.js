import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MySelectControl from '../components/MySelectControl';
import menuIcon from './burger-menu.svg';
import closeButton from './close-button.svg';
import './editor.scss';


export default function Edit(props) {
	let { attributes } = props;
	
	const MY_TEMPLATE = [
		['core/group', { className: 'menu-desktop' }, [
			['core/list', { className: 'links-list' }, [
				['core/list-item', { content: 'Link Item 1' }],
				['core/list-item', { content: 'Link Item 2' }],
			]],
		]],
		['core/group', { className: 'menu-mobile' }, [
			['core/image', { className: 'close-button', url: closeButton, alt:'close-button'}],
			['core/list', { className: 'links-list' }, [
				['core/list-item', { content: 'Link Item 1' }],
				['core/list-item', { content: 'Link Item 2' }],
			]],
		]],
		['core/image', { className: 'menu-icon', url: menuIcon, alt:'menu-icon'}]
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
		<div {...useBlockProps({className: `editor-${attributes.layoutType}`})}>
			<InspectorControls>
					<PanelBody>
						<MySelectControl label={'Select Layout Type'} attrName={'layoutType'} properties={props} options={modalSelectOptions}/>
						<div style={{marginTop: '20px'}}></div>	
						<MySelectControl label={'Breakpoint width(px) for icon change'} attrName={'breakpointWidth'} properties={props} options={breakpointWidthOptions}/>
					</PanelBody>

			</InspectorControls>

			<InnerBlocks
				template={MY_TEMPLATE}
			/>
		</div>
	);
}
