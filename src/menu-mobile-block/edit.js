import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MyImageUpload from '../components/MyImageUpload';

export default function Edit(props) {
	let {attributes} = props;

	const ALLOWED_BLOCKS = ['create-block/menu-item-block'];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody style={{ display: "flex", flexDirection: "column" }}>
					<p>Burger Menu Image</p>
					<MyImageUpload mediaURLAttrName={'burgerImageUrl'} properties={props}/>
				</PanelBody>
				<PanelBody style={{ display: "flex", flexDirection: "column" }}>
					<p>Close Button Image</p>
					<MyImageUpload mediaURLAttrName={'closeImageUrl'} properties={props}/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
			/>
		</div>
	);
}
