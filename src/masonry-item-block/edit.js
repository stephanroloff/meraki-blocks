import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import MyImageUpload from '../components/MyImageUpload';
import MyTextControl from '../components/MyTextControl';

export default function Edit(props) {
	let {attributes} = props;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody style={{ display: "flex", flexDirection: "column" }}>
					<p>Masonry Item Image</p>
					<MyImageUpload mediaURLAttrName={'masonryItemImageUrl'} properties={props}/>
				</PanelBody>
				<PanelBody>
					<MyTextControl name={'Masonry ItemT Title'} attrName={'masonryItemTitle'} properties={props} />
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				attributes={{
					masonryItemImageUrl: attributes.masonryItemImageUrl,
					masonryItemTitle: attributes.masonryItemTitle
				}}
			/>
		</div>
	);
}
