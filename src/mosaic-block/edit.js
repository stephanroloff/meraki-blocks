import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import MyGalleryUpload from '../components/MyGalleryUpload';

export default function Edit(props) {
	let { attributes } = props;
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<p style={{ fontSize: '12px' }}>Add 5 images</p>
		           	<MyGalleryUpload mediaURLAttrName={'MyMediaUrl'} properties={props}/>
				</PanelBody>
			</InspectorControls>
			<div className="mosaic-block-editor">
				<p>MOSAIC BLOCK</p>
			</div>
		</div>
	);
}
